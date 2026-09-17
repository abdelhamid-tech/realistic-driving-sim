/* ============================================================================
 *  TURNING A MESH INTO A WORLD YOU CAN DRIVE ON
 *
 *  A city model is just triangles: it knows nothing about roads, kerbs or
 *  walls. This module reads that soup once, at load, and produces everything
 *  the physics needs to treat it as ground:
 *
 *    · a height field  — the drivable surface, sampled bilinearly in the
 *      physics loop, so a wheel never has to raycast a 4-million-triangle
 *      mesh at 240 Hz;
 *    · layers          — a cell can hold several surfaces (a street under an
 *      overpass). The sampler picks the one nearest the car's own height, so
 *      you drive on whichever deck you are actually on;
 *    · walls           — tall vertical faces become solid boxes, merged into
 *      the same shape the procedural city's buildings use, so a wall stops a
 *      car exactly like a building does;
 *    · a spawn         — the most open piece of street there is, facing along
 *      the longest clear run.
 *
 *  Nothing here touches three.js: it takes plain Float32Array triangles in
 *  world space and returns plain data, which keeps it testable headlessly.
 * ==========================================================================*/

/**
 * Surfaces stored per cell. Eight, not four: a cell under a detailed bridge
 * holds its own street or riverbed, the pier or girder faces above it, the
 * roadway and then a railing — and a bridge that arrives as a model brings
 * more of those than a bridge built from boxes does, so four filled up before
 * the roadway was written and a car driving on it was handed the girder below
 * instead. Cells are 4 m square; the field is a few megabytes either way.
 */
const LAYERS = 8;
/** Layers closer than this are the same surface seen twice. Metres. */
const LAYER_MERGE = 0.55;
/** A cell refuses to be reached by more than this above the car. Metres. */
const MAX_RISE = 1.05;

/** Bucket size for the wall lookup. Metres. */
const BUCKET = 24;
/** Half thickness given to a wall face. Metres — thick enough not to be
 *  tunnelled through between two physics steps at 240 Hz. */
const WALL_T = 0.55;

export interface MapWall {
  /** centre and half extents in the box's own frame */
  x: number;
  z: number;
  hx: number;
  hz: number;
  /** unit vector along the wall face */
  ux: number;
  uz: number;
  /** top of the wall — body points above it pass over */
  top: number;
}

export interface MapField {
  x0: number;
  z0: number;
  nx: number;
  nz: number;
  cell: number;
  /** nx*nz*LAYERS upward-facing heights, ascending per cell */
  layers: Float32Array;
  /** how many of those slots are filled */
  counts: Uint8Array;
  /** 1 when a tall vertical face crosses the cell */
  solid: Uint8Array;
  walls: MapWall[];
  buckets: Map<number, number[]>;
  /** wall indices already reported for the current query */
  stamp: Int32Array;
  stampTick: number;
  /** street level estimate and the highest surface found */
  baseY: number;
  topY: number;
  stats: MapStats;
}

export interface MapStats {
  triangles: number;
  cells: number;
  filled: number;
  solidCells: number;
  walls: number;
  voidCells: number;
  buildMs: number;
  sizeX: number;
  sizeZ: number;
  height: number;
  /** the bounding box the field was built over, in world metres */
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  baseY: number;
}

export interface MapSpawn {
  x: number;
  z: number;
  yaw: number;
}

export interface MapBuildOptions {
  /** metres per cell — smaller is sharper and heavier (default 4) */
  cell?: number;
  /** vertical faces taller than this become walls (default 2.2) */
  wallHeight?: number;
  /** extra metres of field around the mesh (default 24) */
  pad?: number;
  /** gravity box: only triangles inside this are read */
  x0?: number;
  z0?: number;
  x1?: number;
  z1?: number;
}

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

/**
 * True when a point lies inside a triangle's footprint — edges included, and
 * either winding, because an exported model's faces arrive either way round.
 * Three edge orientations that disagree mean the point is outside.
 */
function coversXZ(
  ax: number, az: number,
  bx: number, bz: number,
  cx: number, cz: number,
  px: number, pz: number,
) {
  const d1 = (px - bx) * (az - bz) - (ax - bx) * (pz - bz);
  const d2 = (px - cx) * (bz - cz) - (bx - cx) * (pz - cz);
  const d3 = (px - ax) * (cz - az) - (cx - ax) * (pz - az);
  const negative = d1 < 0 || d2 < 0 || d3 < 0;
  const positive = d1 > 0 || d2 > 0 || d3 > 0;
  return !(negative && positive);
}

/* -------------------------------------------------------------------------- */
/*  building the field                                                        */
/* -------------------------------------------------------------------------- */

export function buildMapField(tris: Float32Array, opts: MapBuildOptions = {}): MapField {
  const t0 = now();
  const cell = opts.cell ?? 4;
  const wallHeight = opts.wallHeight ?? 2.2;
  const pad = opts.pad ?? 24;

  /* ---------------------------------------------------- measure the mesh */
  let minX = Infinity;
  let minZ = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxZ = -Infinity;
  let maxY = -Infinity;
  let triangles = 0;
  const lim = { x0: opts.x0 ?? -Infinity, z0: opts.z0 ?? -Infinity, x1: opts.x1 ?? Infinity, z1: opts.z1 ?? Infinity };
  for (let i = 0; i + 8 < tris.length; i += 9) {
    const ax = tris[i];
    const ay = tris[i + 1];
    const az = tris[i + 2];
    const bx = tris[i + 3];
    const by = tris[i + 4];
    const bz = tris[i + 5];
    const cx = tris[i + 6];
    const cy = tris[i + 7];
    const cz = tris[i + 8];
    if (
      !isFinite(ax) || !isFinite(ay) || !isFinite(az) ||
      !isFinite(bx) || !isFinite(by) || !isFinite(bz) ||
      !isFinite(cx) || !isFinite(cy) || !isFinite(cz)
    ) continue;
    const tx = Math.min(ax, bx, cx);
    const tz = Math.min(az, bz, cz);
    const ty = Math.min(ay, by, cy);
    const Tx = Math.max(ax, bx, cx);
    const Tz = Math.max(az, bz, cz);
    const Ty = Math.max(ay, by, cy);
    if (Tx < lim.x0 || tx > lim.x1 || Tz < lim.z0 || tz > lim.z1) continue;
    triangles++;
    if (tx < minX) minX = tx;
    if (tz < minZ) minZ = tz;
    if (ty < minY) minY = ty;
    if (Tx > maxX) maxX = Tx;
    if (Tz > maxZ) maxZ = Tz;
    if (Ty > maxY) maxY = Ty;
  }
  if (!triangles) throw new Error("that model has no geometry to build a road from");

  const x0 = minX - pad;
  const z0 = minZ - pad;
  const x1 = maxX + pad;
  const z1 = maxZ + pad;
  const nx = Math.max(2, Math.min(2048, Math.ceil((x1 - x0) / cell) + 1));
  const nz = Math.max(2, Math.min(2048, Math.ceil((z1 - z0) / cell) + 1));

  const layers = new Float32Array(nx * nz * LAYERS);
  const counts = new Uint8Array(nx * nz);
  const solid = new Uint8Array(nx * nz);

  /* --------------------------------------------------------- rasterise it */
  for (let i = 0; i + 8 < tris.length; i += 9) {
    const ax = tris[i];
    const ay = tris[i + 1];
    const az = tris[i + 2];
    const bx = tris[i + 3];
    const by = tris[i + 4];
    const bz = tris[i + 5];
    const cx = tris[i + 6];
    const cy = tris[i + 7];
    const cz = tris[i + 8];
    if (
      !isFinite(ax) || !isFinite(ay) || !isFinite(az) ||
      !isFinite(bx) || !isFinite(by) || !isFinite(bz) ||
      !isFinite(cx) || !isFinite(cy) || !isFinite(cz)
    ) continue;

    /* triangle normal, normalised */
    const ux = bx - ax;
    const uy = by - ay;
    const uz = bz - az;
    const vx = cx - ax;
    const vy = cy - ay;
    const vz = cz - az;
    let nX = uy * vz - uz * vy;
    let nY = uz * vx - ux * vz;
    let nZ = ux * vy - uy * vx;
    const nl = Math.hypot(nX, nY, nZ);
    if (nl < 1e-9) continue;
    nX /= nl;
    nY /= nl;
    nZ /= nl;

    const tx0 = Math.min(ax, bx, cx);
    const tz0 = Math.min(az, bz, cz);
    const tx1 = Math.max(ax, bx, cx);
    const tz1 = Math.max(az, bz, cz);
    if (tx1 < x0 || tx0 > x1 || tz1 < z0 || tz0 > z1) continue;

    const i0 = clamp(Math.floor((tx0 - x0) / cell), 0, nx - 1);
    const i1 = clamp(Math.floor((tx1 - x0) / cell), 0, nx - 1);
    const j0 = clamp(Math.floor((tz0 - z0) / cell), 0, nz - 1);
    const j1 = clamp(Math.floor((tz1 - z0) / cell), 0, nz - 1);

    if (Math.abs(nY) > 0.5) {
      /* A surface you could stand on: write its height on the cell grid. The
         sign is ignored because exported models arrive with their faces
         wound either way — a street that faces down is still a street.

         Only into cells the surface actually covers. Writing a triangle into
         every cell its bounding box touches hands a cell a height from a
         surface that is metres away — a bridge's girder arriving in the cell
         before the bridge begins, and taken for the road the car is on. A
         surface too small to hold a cell of its own (the paint of a road
         marking, a kerb) is the one exception: it is written where it lies,
         because dropping it would leave a hole where nothing is. */
      const flat = Math.abs(nY) > 1e-4;
      const tiny = i1 - i0 <= 1 && j1 - j0 <= 1;
      for (let j = j0; j <= j1; j++) {
        const cz2 = z0 + (j + 0.5) * cell;
        for (let i2 = i0; i2 <= i1; i2++) {
          const cx2 = x0 + (i2 + 0.5) * cell;
          if (!tiny && !coversXZ(ax, az, bx, bz, cx, cz, cx2, cz2)) continue;
          const h = flat ? ay - (nX * (cx2 - ax) + nZ * (cz2 - az)) / nY : ay;
          if (!isFinite(h)) continue;
          const idx = j * nx + i2;
          const c = counts[idx];
          const at = idx * LAYERS;
          let slot = -1;
          for (let k = 0; k < c; k++) {
            if (Math.abs(layers[at + k] - h) < LAYER_MERGE) {
              slot = k;
              break;
            }
          }
          if (slot >= 0) continue;   /* that surface is already in here */
          if (c >= LAYERS) continue; /* and this cell has no room for another */
          /*
           * A surface already in the cell wins over one that arrives later, and
           * that order is the map's own: the ground is laid first, then the
           * roads and the bridges over it, then the city on top. It is what
           * keeps a roadway the roadway — a bridge built from code lays its
           * carriageway before anything else, and where a bridge arrives as a
           * detailed model the roadway the map lays under it is first too, so
           * the girders, kerbs and railings that follow cannot walk the road's
           * own surface up onto the railings or down onto the girders.
           */
          layers[at + c] = h;
          counts[idx] = c + 1;
          /* keep the short list ascending: the first entry is the ground a
             cell stands on, and everything that reads a cell reads it first */
          for (let k = c; k > 0 && layers[at + k - 1] > layers[at + k]; k--) {
            const tmp = layers[at + k - 1];
            layers[at + k - 1] = layers[at + k];
            layers[at + k] = tmp;
          }
        }
      }
    } else if (Math.abs(nY) < 0.35) {
      /* a vertical face: a wall if it is tall enough */
      if (Math.max(ay, by, cy) - Math.min(ay, by, cy) < wallHeight) continue;
      for (let j = j0; j <= j1; j++) {
        for (let i2 = i0; i2 <= i1; i2++) solid[j * nx + i2] = 1;
      }
    }
  }

  /* ------------------------------------------------------------- tidy up */
  const baseY = streetLevel(layers, counts, nx, nz);
  let topY = -Infinity;
  /* a cell with no surface at all is a hole: let it borrow from a neighbour,
     then give up and treat it as void — an invisible wall, so nobody drives
     off the edge of the model into nothing. */
  const voidCells = dilate(layers, counts, nx, nz, baseY);
  for (let idx = 0; idx < nx * nz; idx++) if (!counts[idx]) solid[idx] = 1;
  for (let idx = 0; idx < nx * nz; idx++) {
    if (counts[idx] && layers[idx * LAYERS + counts[idx] - 1] > topY) {
      topY = layers[idx * LAYERS + counts[idx] - 1];
    }
  }
  if (!isFinite(topY)) topY = baseY;

  /* ------------------------------------------------------- wall collision
     Collision boxes come from the wall faces themselves, not from the cell
     grid: a grid cell is metres wide, so cell-shaped walls would stop the car
     a cell early. Each tall vertical face becomes one thin box lying exactly
     on the geometry — including the diagonal and curved walls the grid cannot
     describe at all. The solid mask above is still used for picking a spawn
     and for spotting holes. */
  const walls: MapWall[] = [];
  /* a wall quad is two triangles, so every face arrives twice: keep one */
  const seen = new Set<string>();
  for (let i = 0; i + 8 < tris.length; i += 9) {
    const ax = tris[i];
    const ay = tris[i + 1];
    const az = tris[i + 2];
    const bx = tris[i + 3];
    const by = tris[i + 4];
    const bz = tris[i + 5];
    const cx = tris[i + 6];
    const cy = tris[i + 7];
    const cz = tris[i + 8];
    if (
      !isFinite(ax) || !isFinite(bx) || !isFinite(cx) ||
      !isFinite(az) || !isFinite(bz) || !isFinite(cz)
    ) continue;
    const ux0 = bx - ax;
    const uy0 = by - ay;
    const uz0 = bz - az;
    const vx0 = cx - ax;
    const vy0 = cy - ay;
    const vz0 = cz - az;
    const nxg = uy0 * vz0 - uz0 * vy0;
    const nyg = uz0 * vx0 - ux0 * vz0;
    const nzg = ux0 * vy0 - uy0 * vx0;
    const nl = Math.hypot(nxg, nyg, nzg);
    if (nl < 1e-9) continue;
    if (Math.abs(nyg / nl) > 0.35) continue;   /* not a vertical face */
    const tall = Math.max(ay, by, cy) - Math.min(ay, by, cy);
    if (tall < wallHeight) continue;
    /* the face's footprint is a line: take the widest pair of corners */
    const d01 = (ax - bx) ** 2 + (az - bz) ** 2;
    const d02 = (ax - cx) ** 2 + (az - cz) ** 2;
    const d12 = (bx - cx) ** 2 + (bz - cz) ** 2;
    let px = ax;
    let pz = az;
    let qx = cx;
    let qz = cz;
    if (d01 >= d02 && d01 >= d12) {
      px = ax; pz = az; qx = bx; qz = bz;
    } else if (d12 >= d01 && d12 >= d02) {
      px = bx; pz = bz; qx = cx; qz = cz;
    }
    const len = Math.hypot(qx - px, qz - pz);
    if (len < 0.08) continue;
    const q = (v: number) => Math.round(v * 20);   /* 5 cm of tolerance */
    const key = `${q((px + qx) / 2)},${q((pz + qz) / 2)},${q(len)},${q(Math.max(ay, by, cy))}`;
    if (seen.has(key)) continue;
    seen.add(key);
    walls.push({
      x: (px + qx) / 2,
      z: (pz + qz) / 2,
      hx: len / 2,
      hz: WALL_T,
      ux: (qx - px) / len,
      uz: (qz - pz) / len,
      top: Math.max(ay, by, cy),
    });
  }

  /* Bucket the walls so the physics only tests what is under the car. The
     boxes are thin, so they are indexed by their true extent — shrinking by a
     cell here would drop every wall between two buckets. */
  const buckets = new Map<number, number[]>();
  for (let w = 0; w < walls.length; w++) {
    const b = walls[w];
    const i0 = Math.floor((b.x - b.hx) / BUCKET);
    const i1 = Math.floor((b.x + b.hx) / BUCKET);
    const j0 = Math.floor((b.z - b.hz) / BUCKET);
    const j1 = Math.floor((b.z + b.hz) / BUCKET);
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const key = bucketKey(i, j);
        const list = buckets.get(key);
        if (list) list.push(w);
        else buckets.set(key, [w]);
      }
    }
  }

  const filled = count(layers, counts, nx, nz);
  let solidCells = 0;
  for (let i = 0; i < solid.length; i++) if (solid[i]) solidCells++;

  const field: MapField = {
    x0, z0, nx, nz, cell, layers, counts, solid, walls, buckets,
    stamp: new Int32Array(Math.max(1, walls.length)),
    stampTick: 0,
    baseY,
    topY,
    stats: {
      triangles,
      cells: nx * nz,
      filled,
      solidCells,
      walls: walls.length,
      voidCells,
      buildMs: Math.round(now() - t0),
      sizeX: maxX - minX,
      sizeZ: maxZ - minZ,
      height: maxY - minY,
      x0, z0, x1, z1,
      baseY,
    },
  };
  return field;
}

/* -------------------------------------------------------------------------- */
/*  sampling it, the way the physics does                                     */
/* -------------------------------------------------------------------------- */

function bucketKey(i: number, j: number) {
  return (i + 4096) * 8192 + (j + 4096);
}

/** The layers present at a point, ascending. Empty outside the field. */
export function layersAt(F: MapField, x: number, z: number): number[] {
  const fx = (x - F.x0) / F.cell;
  const fz = (z - F.z0) / F.cell;
  if (fx < 0 || fz < 0 || fx > F.nx - 1 || fz > F.nz - 1) return [];
  const i = clamp(Math.round(fx), 0, F.nx - 1);
  const j = clamp(Math.round(fz), 0, F.nz - 1);
  const idx = j * F.nx + i;
  const out: number[] = [];
  for (let k = 0; k < F.counts[idx]; k++) out.push(F.layers[idx * LAYERS + k]);
  return out;
}

/**
 * Which surface in this cell the car is on: the one nearest the height it is
 * already at, of those it could reach.
 *
 * "Nearest", not "highest". A cell can hold several surfaces — the roadway of
 * a bridge, the girders under it, the railings above it, the second deck of an
 * overpass — and taking the highest one within a step is how a car climbs a
 * staircase of them: each face is less than a step above the last, so from the
 * roadway it mounts the kerb, from the kerb the parapet, and from the parapet
 * it drives the length of the bridge in the air. Waiting for the car to reach a
 * surface, rather than offering it the best one in reach, leaves the staircase
 * alone: a bridge that arrives as a detailed model is full of them.
 *
 * A step up still works, because the surface under a moving car is continuous:
 * a ramp of 10 % is 40 cm per cell, and every cell it crosses holds that ramp
 * within a step of where the car is. The full reach (`MAX_RISE`) is what lets a
 * car land on a deck from a jump, and the clamp at the end keeps a height the
 * car cannot reach at all from throwing it into the air.
 */
function pickLayer(F: MapField, i: number, j: number, refY: number) {
  const idx = j * F.nx + i;
  const c = F.counts[idx];
  if (!c) return F.baseY;
  const lim = refY + MAX_RISE;
  const base = idx * LAYERS;
  let near = -Infinity;
  let nearest = Infinity;
  let best = -Infinity;
  let lowest = Infinity;
  for (let k = 0; k < c; k++) {
    const h = F.layers[base + k];
    if (h < lowest) lowest = h;
    if (h > lim) continue;
    const d = Math.abs(h - refY);
    if (d < nearest) {
      nearest = d;
      near = h;
    }
    if (h > best) best = h;
  }
  let h = near !== -Infinity ? near : best !== -Infinity ? best : lowest;
  if (h > refY + MAX_RISE) h = refY;
  return h;
}

/**
 * Ground height at a point, or null outside the field. `refY` is the car's
 * current height: it decides which deck of a stacked cell we mean.
 */
export function sampleMap(F: MapField, x: number, z: number, refY: number): number | null {
  const fx = (x - F.x0) / F.cell;
  const fz = (z - F.z0) / F.cell;
  if (fx < -0.5 || fz < -0.5 || fx > F.nx - 0.5 || fz > F.nz - 0.5) return null;
  const gx = clamp(fx - 0.5, 0, F.nx - 1.0001);
  const gz = clamp(fz - 0.5, 0, F.nz - 1.0001);
  const i = gx | 0;
  const j = gz | 0;
  const tx = gx - i;
  const tz = gz - j;
  const h00 = pickLayer(F, i, j, refY);
  const h10 = pickLayer(F, i + 1, j, refY);
  const h01 = pickLayer(F, i, j + 1, refY);
  const h11 = pickLayer(F, i + 1, j + 1, refY);
  return (
    h00 * (1 - tx) * (1 - tz) +
    h10 * tx * (1 - tz) +
    h01 * (1 - tx) * tz +
    h11 * tx * tz
  );
}

/** Wall boxes near a point. Reused by the physics every substep. */
export function wallsNear(F: MapField, x: number, z: number, out: MapWall[]): MapWall[] {
  out.length = 0;
  F.stampTick++;
  const i0 = Math.floor((x - BUCKET) / BUCKET);
  const i1 = Math.floor((x + BUCKET) / BUCKET);
  const j0 = Math.floor((z - BUCKET) / BUCKET);
  const j1 = Math.floor((z + BUCKET) / BUCKET);
  for (let j = j0; j <= j1; j++) {
    for (let i = i0; i <= i1; i++) {
      const list = F.buckets.get(bucketKey(i, j));
      if (!list) continue;
      for (const w of list) {
        if (F.stamp[w] === F.stampTick) continue;
        F.stamp[w] = F.stampTick;
        out.push(F.walls[w]);
      }
    }
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/*  where to put the car                                                      */
/* -------------------------------------------------------------------------- */

/**
 * The most open piece of street: lots of clear ground around it, as close to
 * the model's own street level as possible, facing the longest clear run.
 */
export function findSpawn(F: MapField): MapSpawn {
  const nx = F.nx;
  const nz = F.nz;
  const R = Math.max(2, Math.round(11 / F.cell));
  /* summed-area table of "could a car be here at all" */
  const sat = new Float64Array((nx + 1) * (nz + 1));
  for (let j = 0; j < nz; j++) {
    let row = 0;
    for (let i = 0; i < nx; i++) {
      const idx = j * nx + i;
      const c = F.counts[idx];
      const h = c ? F.layers[idx * LAYERS] : F.baseY;
      const ok = !F.solid[idx] && c > 0 && Math.abs(h - F.baseY) < 1.2 ? 1 : 0;
      row += ok;
      sat[(j + 1) * (nx + 1) + (i + 1)] = sat[j * (nx + 1) + (i + 1)] + row;
    }
  }
  const window = (i0: number, j0: number, i1: number, j1: number) => {
    const a = clamp(i0, 0, nx);
    const b = clamp(j0, 0, nz);
    const c = clamp(i1 + 1, 0, nx);
    const d = clamp(j1 + 1, 0, nz);
    return (
      sat[d * (nx + 1) + c] - sat[b * (nx + 1) + c] - sat[d * (nx + 1) + a] + sat[b * (nx + 1) + a]
    );
  };

  /* a second table of the walls themselves: a street between buildings is a
     better starting line than an empty field at the edge of the map */
  const satSolid = new Float64Array((nx + 1) * (nz + 1));
  for (let j = 0; j < nz; j++) {
    let row = 0;
    for (let i = 0; i < nx; i++) {
      row += F.solid[j * nx + i] ? 1 : 0;
      satSolid[(j + 1) * (nx + 1) + (i + 1)] = satSolid[j * (nx + 1) + (i + 1)] + row;
    }
  }
  const solidWindow = (i0: number, j0: number, i1: number, j1: number) => {
    const a = clamp(i0, 0, nx);
    const b = clamp(j0, 0, nz);
    const c = clamp(i1 + 1, 0, nx);
    const d = clamp(j1 + 1, 0, nz);
    return (
      satSolid[d * (nx + 1) + c] - satSolid[b * (nx + 1) + c] -
      satSolid[d * (nx + 1) + a] + satSolid[b * (nx + 1) + a]
    );
  };

  /* how much city is around: wide enough to notice a street grid */
  const W = Math.max(R + 2, Math.round(70 / F.cell));
  const cx = (nx - 1) / 2;
  const cz = (nz - 1) / 2;
  const half = Math.max(1, Math.hypot(cx, cz));

  let bestScore = -Infinity;
  let best = { i: nx >> 1, j: nz >> 1 };
  for (let j = W; j < nz - W; j++) {
    for (let i = W; i < nx - W; i++) {
      const idx = j * nx + i;
      if (F.solid[idx] || !F.counts[idx]) continue;
      /* below the city's own level is a dock, a canal or a rail cut: the car
         starts on the streets, never in the water */
      if (F.layers[idx * LAYERS] < F.baseY - 0.8) continue;
      const open = window(i - R, j - R, i + R, j + R) / ((2 * R + 1) * (2 * R + 1));
      if (open < 0.985) continue;                 /* room to put a car down */
      const city = solidWindow(i - W, j - W, i + W, j + W) / ((2 * W + 1) * (2 * W + 1));
      const centre = 1 - Math.hypot(i - cx, j - cz) / half;
      const level = -Math.abs(F.layers[idx * LAYERS] - F.baseY) * 0.35;
      const score = open + city * 0.9 + centre * 0.2 + level;
      if (score > bestScore) {
        bestScore = score;
        best = { i, j };
      }
    }
  }

  if (bestScore === -Infinity) {
    /* nothing is fully clear (a tight old town, or a model that is all
       building): fall back to the most open cell there is */
    let bestOpen = -1;
    for (let j = R; j < nz - R; j++) {
      for (let i = R; i < nx - R; i++) {
        const idx = j * nx + i;
        if (F.solid[idx] || !F.counts[idx]) continue;
        if (F.layers[idx * LAYERS] < F.baseY - 0.8) continue;
        const open = window(i - R, j - R, i + R, j + R) / ((2 * R + 1) * (2 * R + 1));
        if (open > bestOpen) {
          bestOpen = open;
          best = { i, j };
        }
      }
    }
  }

  const x = F.x0 + (best.i + 0.5) * F.cell;
  const z = F.z0 + (best.j + 0.5) * F.cell;

  /* face the longest clear run, so the car starts pointing down a street */
  let yaw = 0;
  let bestRun = -1;
  for (let k = 0; k < 16; k++) {
    const a = (k / 16) * Math.PI * 2;
    const dx = Math.sin(a);
    const dz = Math.cos(a);
    let run = 0;
    for (let s = 1; s < 120; s++) {
      const px = x + dx * s * F.cell * 2;
      const pz = z + dz * s * F.cell * 2;
      const ii = Math.round((px - F.x0) / F.cell);
      const jj = Math.round((pz - F.z0) / F.cell);
      if (ii < 0 || jj < 0 || ii >= nx || jj >= nz) break;
      const idx = jj * nx + ii;
      if (F.solid[idx] || !F.counts[idx]) break;
      if (Math.abs(F.layers[idx * LAYERS] - F.baseY) > 1.6) break;
      run = s;
    }
    if (run > bestRun) {
      bestRun = run;
      yaw = a;
    }
  }
  return { x, z, yaw };
}

/* -------------------------------------------------------------------------- */
/*  helpers                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * The level the city is mostly built at: the modal lowest surface, refined
 * over the cells that share it. A percentile would land on the water (or on a
 * rail yard) whenever one big flat thing is lower than the streets; the mode
 * lands on the streets, because that is where the area is.
 */
function streetLevel(layers: Float32Array, counts: Uint8Array, nx: number, nz: number) {
  const bin = 0.5;
  const votes = new Map<number, number>();
  for (let idx = 0; idx < nx * nz; idx++) {
    if (!counts[idx]) continue;
    const h = layers[idx * LAYERS];
    const key = Math.round(h / bin);
    votes.set(key, (votes.get(key) ?? 0) + 1);
  }
  if (!votes.size) return 0;
  let bestKey = 0;
  let bestVotes = -1;
  for (const [key, n] of votes) {
    if (n > bestVotes || (n === bestVotes && Math.abs(key) < Math.abs(bestKey))) {
      bestVotes = n;
      bestKey = key;
    }
  }
  /* average the cells that landed in the winning bucket */
  let sum = 0;
  let n = 0;
  for (let idx = 0; idx < nx * nz; idx++) {
    if (!counts[idx]) continue;
    const h = layers[idx * LAYERS];
    if (Math.round(h / bin) !== bestKey) continue;
    sum += h;
    n++;
  }
  return n ? sum / n : bestKey * bin;
}

/** Cells with no surface borrow one from a neighbour. Returns how many stayed void. */
function dilate(layers: Float32Array, counts: Uint8Array, nx: number, nz: number, baseY: number) {
  let remaining = 0;
  for (let idx = 0; idx < nx * nz; idx++) if (!counts[idx]) remaining++;
  let pass = 0;
  /* enough passes to cross the whole padded border, corners included */
  while (remaining > 0 && pass < 24) {
    const take: number[] = [];
    for (let j = 0; j < nz; j++) {
      for (let i = 0; i < nx; i++) {
        const idx = j * nx + i;
        if (counts[idx]) continue;
        let best = Infinity;
        const nb = [i > 0 ? idx - 1 : -1, i < nx - 1 ? idx + 1 : -1, j > 0 ? idx - nx : -1, j < nz - 1 ? idx + nx : -1];
        for (const n of nb) {
          if (n < 0 || !counts[n]) continue;
          const h = layers[n * LAYERS];
          if (h < best) best = h;
        }
        if (best !== Infinity) take.push(idx, best);
      }
    }
    for (let k = 0; k < take.length; k += 2) {
      const idx = take[k];
      layers[idx * LAYERS] = take[k + 1];
      counts[idx] = 1;
      remaining--;
    }
    pass++;
  }
  for (let idx = 0; idx < nx * nz; idx++) {
    if (!counts[idx]) {
      layers[idx * LAYERS] = baseY;
      counts[idx] = 1;
    }
  }
  return remaining;
}

function count(layers: Float32Array, counts: Uint8Array, nx: number, nz: number) {
  let n = 0;
  for (let idx = 0; idx < nx * nz; idx++) if (counts[idx]) n++;
  return n;
}

function now() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}
