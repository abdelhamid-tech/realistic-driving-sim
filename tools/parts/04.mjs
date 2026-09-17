/* --------------------------------------------------------------- props ---- *
 *  The street furniture is NOT baked into the map any more. A tree, a street
 *  lamp and a traffic light are real models (public/models/props/), and the
 *  game stamps them on the spots listed here as it loads the world — see
 *  src/game/props.ts. The list is written next to the model as
 *  riverbend.props.json, already moved into the coordinates the engine sees
 *  once it has centred the map on its own origin. */
/**
 * Every slot the game can dress, so this file may place any of them. A slot
 * with no spots is simply not drawn (src/game/props.ts), which is what lets a
 * map name the lot and only use what it needs.
 */
const PROPS = Object.fromEntries(
  [
    "tree", "plant", "lamp", "signal",
    "bench", "bin", "dumpster", "planter", "sign", "awning",
    "parasol", "fence", "container", "tank", "chimney", "antenna", "cone",
  ].map((slot) => [slot, []]),
);
/** everything in the map stands on a slab, at kerb height */
const GROUND = KERB;
function spot(slot, x, y, z, yaw = 0, scale = 1) {
  PROPS[slot].push({ x, y, z, yaw, scale });
}

function tree(x, z, sc = 1) {
  if (inRiver(x, z) && riverDist(x, z) < riverHalf(x) + 6) return;
  spot("tree", x, GROUND, z, 0, sc);
}

function lamp(x, z, yawAlong = 0) {
  /* the shipped post reaches 1.6 m along +yawAlong; its own arm points at -Z */
  spot("lamp", x, GROUND, z, -(yawAlong + Math.PI / 2));
}

/* The pavement's own furniture. Each is placed at the height it stands on:
   the kerb for anything on a block, the grass for the park benches. */
const bench = (x, z, yaw = 0, y = GROUND) => spot("bench", x, y, z, yaw, 1);
const bin = (x, z, yaw = 0, y = GROUND) => spot("bin", x, y, z, yaw, 1);
const planter = (x, z, yaw = 0, y = GROUND) => spot("planter", x, y, z, yaw, rr(0.9, 1.1));
const bush = (x, z, y = GROUND) => spot("plant", x, y, z, rr(0, Math.PI * 2), rr(0.8, 1.25));
const cone = (x, z, y = GROUND) => spot("cone", x, y, z, rr(0, Math.PI * 2), 1);
const fenceAt = (x, z, yaw = 0, y = GROUND) => spot("fence", x, y, z, yaw, 1);
const signAt = (x, z, yaw = 0, y = GROUND) => spot("sign", x, y, z, yaw, 1);
const dumpster = (x, z, yaw = 0, y = GROUND) => spot("dumpster", x, y, z, yaw, 1);
const container = (x, z, yaw = 0, y = GROUND) => spot("container", x, y, z, yaw, 1);
const tank = (x, z, yaw = 0, y = GROUND) => spot("tank", x, y, z, yaw, 1);
const chimney = (x, z, yaw = 0, y = GROUND) => spot("chimney", x, y, z, yaw, 1);
const awning = (x, z, yaw = 0, y = GROUND) => spot("awning", x, y, z, yaw, 1);
const parasol = (x, z, yaw = 0, y = GROUND) => spot("parasol", x, y, z, yaw, 1);

/* ------------------------------------------------------------- districts UI */
function buildDistricts() {
  for (let i = 0; i < AVE.length - 1; i++) {
    for (let j = 0; j < ST.length - 1; j++) {
      const za = AVE[i] + AVE_HALF, zb = AVE[i + 1] - AVE_HALF;
      const xa = ST[j] + ST_HALF, xb = ST[j + 1] - ST_HALF;
      if (zb - za < 20 || xb - xa < 20) continue;
      const cx = (xa + xb) / 2, cz = (za + zb) / 2;
      /* the whole block in the river or on its bank is parkland */
      /* the whole block in the river or on its bank is left as open bank */
      if (inRiver(cx, cz) || riverDist(cx, cz) < riverHalf(cx) + BANK + 8) continue;
      const zone = zoneOf(cx, cz);
      if (zone === "forest") { buildForest(xa, za, xb, zb); continue; }
      /* kerb plate */
      G.box(xa, 0, za, xb, KERB, zb, M.concrete, { skip: ["bottom"] });
      if (zone === "park") { buildPark(xa, za, xb, zb); continue; }
      /* subdivide the block into lots */
      const cols = Math.max(1, Math.round((xb - xa) / 46));
      const rows = Math.max(1, Math.round((zb - za) / 46));
      const cw = (xb - xa) / cols, cd = (zb - za) / rows;
      for (let a = 0; a < cols; a++) {
        for (let r = 0; r < rows; r++) {
          if (rnd() < 0.1) continue;                 // a gap: yard or green
          const lx0 = xa + cw * a + 4, lz0 = za + cd * r + 4;
          const lx1 = xa + cw * (a + 1) - 4, lz1 = za + cd * (r + 1) - 4;
          if (lx1 - lx0 < 10 || lz1 - lz0 < 10) continue;
          if (inRiver((lx0 + lx1) / 2, (lz0 + lz1) / 2)) continue;
          if (zone === "downtown") tower(lx0, lz0, lx1, lz1, KERB);
          else if (zone === "industrial") (rnd() < 0.45 ? hall : warehouse)(lx0, lz0, lx1, lz1, KERB);
          else if (zone === "mall") buildMall(lx0, lz0, lx1, lz1, KERB);
          else home(lx0, lz0, lx1, lz1, KERB);
        }
      }
    }
  }
  /* one block becomes the central park, one the mall block — deterministic */
  buildPark(AVE[3] + AVE_HALF, ST[1] + ST_HALF, AVE[4] - AVE_HALF, ST[2] - ST_HALF);
}

function buildPark(x0, z0, x1, z1) {
  G.slab(x0, z0, x1, z1, KERB + 0.02, M.grass);
  /* a pond */
  const pcx = (x0 + x1) / 2 + rr(-14, 14), pcz = (z0 + z1) / 2 + rr(-14, 14);
  const pr = Math.min(16, (x1 - x0) / 5);
  for (let a = 0; a < 14; a++) {
    const a0 = (a / 14) * Math.PI * 2, a1 = ((a + 1) / 14) * Math.PI * 2;
    G.quad(
      [pcx + Math.cos(a0) * pr, KERB + 0.02, pcz + Math.sin(a0) * pr],
      [pcx + Math.cos(a1) * pr, KERB + 0.02, pcz + Math.sin(a1) * pr],
      [pcx + Math.cos(a1) * pr, KERB - 0.9, pcz + Math.sin(a1) * pr],
      [pcx + Math.cos(a0) * pr, KERB - 0.9, pcz + Math.sin(a0) * pr],
      M.water, [Math.cos(a0), 0, Math.sin(a0)],
    );
  }
  /* paths */
  G.slab(x0 + 3, pcz - 1.4, x1 - 3, pcz + 1.4, KERB + 0.05, M.sand);
  G.slab(pcx - 1.4, z0 + 3, pcx + 1.4, z1 - 3, KERB + 0.05, M.sand);
  /* trees */
  for (let k = 0; k < 14; k++) {
    const tx = rr(x0 + 6, x1 - 6), tz = rr(z0 + 6, z1 - 6);
    if (Math.hypot(tx - pcx, tz - pcz) < pr + 4) continue;
    tree(tx, tz, rr(0.7, 1.1));
  }
  /* and the furniture a park has: benches looking over the water, a bin or
     two, planting along the grass, and a row of planters by the gate */
  for (let k = 0; k < 5; k++) {
    const bx = rr(x0 + 8, x1 - 8);
    bench(bx, pcz + (k % 2 ? 1.9 : -1.9), k % 2 ? 0 : Math.PI, KERB + 0.07);
    if (k % 2) bin(bx + 2.6, pcz + 1.7, 0, KERB + 0.07);
  }
  for (let k = 0; k < 28; k++) bush(rr(x0 + 4, x1 - 4), rr(z0 + 4, z1 - 4), KERB + 0.04);
  for (const pz2 of [z0 + 8, z1 - 8]) {
    for (let i = 0; i < 3; i++) planter(x0 + 12 + i * 7, pz2, 0, KERB + 0.04);
  }
}

function buildForest(x0, z0, x1, z1) {
  G.slab(x0, z0, x1, z1, 0.02, M.grass);
  const n = 34;
  for (let k = 0; k < n; k++) tree(rr(x0 + 4, x1 - 4), rr(z0 + 4, z1 - 4), rr(0.9, 1.7));
  /* undergrowth, so the wood is not a row of bare trunks */
  for (let k = 0; k < 16; k++) bush(rr(x0 + 5, x1 - 5), rr(z0 + 5, z1 - 5), 0.06);
}

/* ------------------------------------------------------------- street signs *
 *  The plate that names the street, the warning, the stop: real models on real
 *  posts, on the corners of every junction, facing the traffic that reads them
 *  as it comes. Not every corner — a city has a corner free of them too.
 * -------------------------------------------------------------------------*/
function buildSigns() {
  const CORNERS = [
    [1, 1, Math.PI],
    [-1, -1, 0],
    [1, -1, -Math.PI / 2],
    [-1, 1, Math.PI / 2],
  ];
  for (const z of AVE) {
    for (const x of ST) {
      for (const [dx, dz, yaw] of CORNERS) {
        const sx = x + dx * (ST_HALF + 2.4);
        const sz = z + dz * (AVE_HALF + 2.4);
        if (riverDist(sx, sz) < riverHalf(sx) + BANK + 3) continue;
        if (rnd() < 0.4) continue;              // a corner with nothing on it
        signAt(sx, sz, yaw);
      }
    }
  }
}

/* ----------------------------------------------------------------- roadworks *
 *  A lane up somewhere is what a city looks like most weeks: cones down the
 *  kerb line, a barrier at the end of it, and the trench itself.
 * -------------------------------------------------------------------------*/
function buildRoadworks() {
  for (const [x, z] of [[-120, -514], [280, 474], [534, 84], [-520, 274], [96, 686]]) {
    const alongX = rnd() < 0.5;
    const len = rr(34, 48);
    for (let k = 0; k < 8; k++) {
      const t = k / 7;
      const cx2 = alongX ? x + t * len : x + 3.4;
      const cz2 = alongX ? z + 3.4 : z + t * len;
      cone(cx2, cz2, 0.05);
      G.slab(alongX ? x + t * len - 1.6 : x + 0.6, alongX ? z + 1.4 : z + t * len - 1.6,
             alongX ? x + t * len + 1.6 : x + 3.2, alongX ? z + 2.2 : z + t * len + 1.6,
             0.02, M.asphalt);
    }
    fenceAt(alongX ? x + len + 2 : x + 2, alongX ? z + 2.6 : z + len + 2, alongX ? Math.PI / 2 : 0, 0.06);
    cone(alongX ? x - 3 : x + 3.4, alongX ? z + 3.4 : z - 3, 0.05);
  }
}

