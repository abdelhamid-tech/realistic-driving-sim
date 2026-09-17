/**
 * THE PLAN OF A WORLD — what the radar draws.
 *
 * A map in this game is one of two things. The built-in city is *code*, so its
 * plan is drawn from the same data the world is built from (./cityplan): the
 * streets on the plan are the streets the car can drive down.
 *
 * A shipped or imported world is a *model*, and holds no picture of itself — so
 * one is drawn here, from the model's own triangles: every triangle is dropped
 * into the plan and the highest surface wins each pixel, which is the same thing
 * an orthographic camera looking straight down would show. The result is the
 * world the car is really on: the river is the river, the crossings are the
 * crossings, and the buildings are the buildings that actually stand there.
 *
 * Two rules keep it honest without any help from the model's author:
 *
 *  * a triangle's *material name* says what it is — the shipped map names its
 *    surfaces (asphalt, water, grass, concrete, facadeBrick … see ./worlddress),
 *    which is the vocabulary the whole city is dressed in;
 *  * the *highest* surface wins the pixel, because that is what a camera above
 *    the world would see. What a surface is only breaks a near-tie — two
 *    surfaces within a metre and a half of each other — which is what keeps a
 *    road a road where the map lays its own asphalt two centimetres under the
 *    owner's bridge deck, and keeps a railing from painting over the deck it
 *    stands on. A roof a hundred metres up still wins over the road at its
 *    foot, because it is not a tie.
 *
 * The plan is drawn in the game's own paper palette, so the radar, the big map
 * and the city's drawn plan all read as one instrument.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { cityPlan, PLAN_METRES, PLAN_PAPER, PLAN_SCALE } from "./cityplan";
import type { WorldMapSource } from "./worldmaps";

/* -------------------------------------------------------------------- a plan */

export type PlanKind = "city" | "model";

/** A square picture of a world, in world metres, ready to be cropped. */
export interface MapPlan {
  kind: PlanKind;
  canvas: HTMLCanvasElement;
  /** the plan covers (x0, z0) to (x0 + span, z0 + span), in world metres */
  x0: number;
  z0: number;
  span: number;
  /** canvas pixels along a side */
  px: number;
  /** canvas pixels per world metre */
  scale: number;
  /** what lies outside the plan: the world runs out at the edge of the sheet */
  backdrop: string;
}

/** The pixel a world x falls on. */
export const planPx = (p: MapPlan, x: number) => (x - p.x0) * p.scale;
/** North (+z) is up, so z grows towards the top of the canvas. */
export const planPy = (p: MapPlan, z: number) => (p.z0 + p.span - z) * p.scale;

const css = (rgb: number) => "#" + rgb.toString(16).padStart(6, "0");

/**
 * The key to a plan: what each colour on the sheet stands for. A drawn plan of
 * the generated city is a plan of districts; a plan of a model is a plan of
 * surfaces, because surfaces are what a model is made of.
 */
export function planKey(plan?: MapPlan | null): { label: string; colour: string }[] {
  if (plan?.kind === "model") {
    return [
      { label: "WATER", colour: css(INK.water) },
      { label: "ROADS", colour: css(INK.road) },
      { label: "PARKS", colour: css(INK.grass) },
      { label: "PAVEMENT", colour: css(INK.paste) },
      { label: "BUILDINGS", colour: css(INK.roof[3]) },
      { label: "GROUND", colour: css(INK.ground) },
    ];
  }
  return [
    { label: "DOWNTOWN", colour: PLAN_PAPER.downtown },
    { label: "MIDTOWN", colour: PLAN_PAPER.midtown },
    { label: "OUTER", colour: PLAN_PAPER.outer },
    { label: "PARK", colour: PLAN_PAPER.park },
    { label: "ROAD", colour: PLAN_PAPER.road },
  ];
}

/** The plan of the built-in city, drawn from the city itself. */
export function cityMapPlan(labels = false): MapPlan | null {
  const canvas = cityPlan(undefined, labels);
  if (!canvas) return null;
  return {
    kind: "city",
    canvas,
    x0: -PLAN_METRES / 2,
    z0: -PLAN_METRES / 2,
    span: PLAN_METRES,
    px: canvas.width,
    scale: PLAN_SCALE,
    backdrop: "#e9e4d6",
  };
}

/* --------------------------------------------------------------------- inks */

/**
 * The plan's colours: paper and light, like every other map in the game. Kept
 * free of any dependency on the renderer, so a plan can be drawn on a phone
 * without a WebGL context and written out in a test without a browser.
 */
const INK = {
  /** bare ground, and everything the model does not name */
  ground: 0xe2dccd,
  road: 0xfbfaf6,
  water: 0xcbd7db,
  grass: 0xcfdcc0,
  sand: 0xe8dfc8,
  paste: 0xdcd6c6,
  /** roofs, low to high: a skyline reads as shading rather than as outlines */
  roof: [0xcdc6b0, 0xc2baa3, 0xb4ab93, 0xa49b85],
} as const;

/** The palette, for anything that reads a plan back: a legend, a check, a tool. */
export { INK as PLAN_INK };

/** How tall 14 m of building is on the plan, in roof shades. Metres. */
const ROOF_BAND = 14;
/** Surfaces this close are the same surface, and their kinds decide it. Metres. */
const SAME_SURFACE = 1.5;
/** Above this much air, a surface a model does not name is a wall, not ground. */
const AIRBORNE = 4;

/**
 * What a surface is, as a claim on a pixel it nearly shares with another: 4 is
 * the strongest. Only a near-tie consults this — see SAME_SURFACE. The empty
 * sheet is class 0, so any real surface paints over it.
 */
const GROUND = 0;
const OPEN = 1;   /* water, dirt */
const SOFT = 2;   /* grass, sand, pavement */
const BUILDING = 3;
const ROAD = 4;

interface Ink {
  claim: number;
  rgb: number;
  roof?: true;
}

const GROUND_INK: Ink = { claim: OPEN, rgb: INK.ground };
const ROAD_INK: Ink = { claim: ROAD, rgb: INK.road };
const WATER_INK: Ink = { claim: OPEN, rgb: INK.water };
const GRASS_INK: Ink = { claim: SOFT, rgb: INK.grass };
const SAND_INK: Ink = { claim: SOFT, rgb: INK.sand };
const PASTE_INK: Ink = { claim: SOFT, rgb: INK.paste };
const ROOF_INK: Ink = { claim: BUILDING, rgb: INK.roof[0], roof: true };

/** The material names the shipped map is made of, read the way ./worlddress does. */
export function inkForMaterial(name: string | undefined): Ink | null {
  const n = (name ?? "").toLowerCase();
  /* paint is a lane marking lying on the road: the road already carries it */
  if (n.includes("paint") || n.includes("marking")) return null;
  if (n.includes("water")) return WATER_INK;
  if (n.includes("asphalt") || n.includes("road") || n.includes("tarmac")) return ROAD_INK;
  if (n.includes("grass") || n.includes("leaf") || n.includes("foliage") || n.includes("hedge")) return GRASS_INK;
  if (n.includes("sand") || n.includes("beach")) return SAND_INK;
  /* every face of a building: its roof, its walls, its glazing */
  if (n.includes("facade") || n.includes("roof") || n.includes("corrugated") || n.includes("glass") || n.includes("steel") || n.includes("metal") || n.includes("window")) return ROOF_INK;
  if (n.includes("concrete") || n.includes("brick") || n.includes("tile") || n.includes("kerb") || n.includes("stone") || n.includes("quay") || n.includes("pavement")) return PASTE_INK;
  return GROUND_INK;
}

/* ---------------------------------------------------------------- rasterising */

export interface PlanRaster {
  px: number;
  /** world metres along a side */
  span: number;
  x0: number;
  z0: number;
  /** the level the world was read as built at, for shading its buildings */
  baseY: number;
  /** RGBA, px × px */
  rgba: Uint8ClampedArray;
  /** pixels each kind of surface ended up with — a plan can be checked by eye */
  painted: Record<string, number>;
}

export interface PlanRasterOptions {
  /** metres one pixel covers; default 1.3, which keeps a city street a street */
  perPixel?: number;
  /** the level the world is built at, for shading buildings; default: measured */
  baseY?: number;
  /** the square side in metres; default the model's own bounding box */
  span?: number;
  /** the canvas side in pixels, overriding `perPixel` */
  px?: number;
}

const MIN_PX = 640;
const MAX_PX = 2048;
const PER_PIXEL = 1.3;

/**
 * Drops a model into a plan. Returns null when there is nothing to draw, or
 * when the geometry cannot be read (no mesh, no positions).
 */
export function rasterModelPlan(
  root: THREE.Object3D,
  opts: PlanRasterOptions = {},
): PlanRaster | null {
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  if (box.isEmpty()) return null;

  const span = opts.span && opts.span > 0
    ? opts.span
    : Math.max(box.max.x - box.min.x, box.max.z - box.min.z, 16);
  const perPixel = opts.perPixel && opts.perPixel > 0 ? opts.perPixel : PER_PIXEL;
  const px = Math.min(MAX_PX, Math.max(MIN_PX, opts.px ?? Math.round(span / perPixel)));
  const baseY = opts.baseY ?? estimateBaseY(root);

  const cx = (box.min.x + box.max.x) / 2;
  const cz = (box.min.z + box.max.z) / 2;
  const x0 = cx - span / 2;
  const z0 = cz - span / 2;
  /** pixels per metre */
  const ppu = px / span;

  /* the plan itself: an empty sheet of paper, then whatever stands on it */
  const rgba = new Uint8ClampedArray(px * px * 4);
  writeInk(rgba, INK.ground);
  const claim = new Int8Array(px * px);          /* 0 = the empty sheet */
  const top = new Float32Array(px * px).fill(-1e9);
  const painted: Record<string, number> = { road: 0, water: 0, grass: 0, sand: 0, paste: 0, roof: 0, ground: 0 };

  let seen = 0;

  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh || !mesh.geometry) return;
    const pos = mesh.geometry.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!pos) return;
    const index = mesh.geometry.getIndex();
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const inks = mats.map((m) => inkForMaterial((m as THREE.Material | undefined)?.name));
    const groups = mesh.geometry.groups;
    const n = index ? index.count : pos.count;

    for (let i = 0; i + 2 < n; i += 3) {
      /* which material this triangle wears: the mesh's groups, or its first */
      let slot = 0;
      if (index && groups.length > 1) {
        const at = index.getX(i);
        for (let g = 0; g < groups.length; g++) {
          if (at >= groups[g].start && at < groups[g].start + groups[g].count) { slot = groups[g].materialIndex ?? 0; break; }
        }
      }
      const ink = inks[slot] ?? null;
      if (!ink) continue;

      /* three corners, read into the same three vectors: no garbage per face */
      read(VA, pos, index, i, mesh.matrixWorld);
      read(VB, pos, index, i + 1, mesh.matrixWorld);
      read(VC, pos, index, i + 2, mesh.matrixWorld);
      const a = VA, b = VB, c = VC;
      seen++;

      /* world → plan pixels, north up */
      const ax = (a.x - x0) * ppu, ay = (z0 + span - a.z) * ppu;
      const bx = (b.x - x0) * ppu, by = (z0 + span - b.z) * ppu;
      const ex = (c.x - x0) * ppu, ey = (z0 + span - c.z) * ppu;

      const lo = Math.max(0, Math.floor(Math.min(ax, bx, ex)));
      const hi = Math.min(px - 1, Math.ceil(Math.max(ax, bx, ex)));
      const loY = Math.max(0, Math.floor(Math.min(ay, by, ey)));
      const hiY = Math.min(px - 1, Math.ceil(Math.max(ay, by, ey)));
      if (lo > hi || loY > hiY) continue;

      const area = (bx - ax) * (ey - ay) - (by - ay) * (ex - ax);
      if (Math.abs(area) < 1e-6) continue;
      /* what this face is, and what it claims: a roof is shaded by how high it
         is, and a surface the model does not name but holds four metres in the
         air is a wall or a roof — the ground is not in the air */
      const mid = (a.y + b.y + c.y) / 3;
      let says = ink.claim;
      let colour = ink.rgb;
      if (ink.roof) colour = INK.roof[roofShade(mid, baseY)];
      else if (ink === GROUND_INK && mid > baseY + AIRBORNE) {
        says = BUILDING;
        colour = INK.roof[roofShade(mid, baseY)];
      }
      const c0 = (colour >> 16) & 0xff, c1 = (colour >> 8) & 0xff, c2 = colour & 0xff;
      const inv = 1 / area;

      for (let y = loY; y <= hiY; y++) {
        const row = y * px;
        for (let x = lo; x <= hi; x++) {
          const pxc = x + 0.5, pyc = y + 0.5;
          let w0 = (bx - pxc) * (ey - pyc) - (by - pyc) * (ex - pxc);
          let w1 = (ex - pxc) * (ay - pyc) - (ey - pyc) * (ax - pxc);
          let w2 = (ax - pxc) * (by - pyc) - (ay - pyc) * (bx - pxc);
          if (area < 0) { w0 = -w0; w1 = -w1; w2 = -w2; }
          if (w0 < 0 || w1 < 0 || w2 < 0) continue;
          w0 *= inv; w1 *= inv; w2 *= inv;
          const at = row + x;
          const h = w0 * a.y + w1 * b.y + w2 * c.y;
          /* the highest surface wins; a near-tie goes to the stronger kind */
          const top0 = top[at];
          if (h <= top0 + SAME_SURFACE && !(h >= top0 - SAME_SURFACE && says > claim[at])) continue;
          claim[at] = says;
          top[at] = h;
          const q = at * 4;
          rgba[q] = c0; rgba[q + 1] = c1; rgba[q + 2] = c2; rgba[q + 3] = 255;
        }
      }
    }
  });

  if (!seen) return null;
  /* what ended up on the sheet, counted rather than assumed */
  for (let i = 0; i < claim.length; i++) {
    const at = i * 4;
    const rgb = (rgba[at] << 16) | (rgba[at + 1] << 8) | rgba[at + 2];
    if (rgb === INK.road) painted.road++;
    else if (rgb === INK.water) painted.water++;
    else if (rgb === INK.grass) painted.grass++;
    else if (rgb === INK.sand) painted.sand++;
    else if (rgb === INK.paste) painted.paste++;
    else if ((INK.roof as readonly number[]).includes(rgb)) painted.roof++;
    else if (rgb === INK.ground) painted.ground++;
  }
  return { px, span, x0, z0, baseY, rgba, painted };
}

/**
 * The roof shade of a surface `h` metres above the level the world is built at.
 */
function roofShade(h: number, baseY: number) {
  return Math.max(0, Math.min(3, Math.floor((h - baseY) / ROOF_BAND)));
}

/**
 * The level a world is built at, read off the world itself: the height the
 * largest *area* of it is flat at, which is its streets. Measured by area and
 * not by triangle count, because one street plate is two triangles and one
 * building roof can be a hundred, and by area alone a roof loses to the ground
 * it stands on — which is what makes this a level rather than a guess.
 */
function estimateBaseY(root: THREE.Object3D): number {
  const area = new Map<number, number>();
  const e1 = new THREE.Vector3();
  const e2 = new THREE.Vector3();
  let samples = 0;

  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh || !mesh.geometry) return;
    const ink = inkForMaterial(materialName(mesh));
    if (!ink || ink.roof || ink.rgb === INK.water) return;
    const pos = mesh.geometry.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!pos) return;
    const index = mesh.geometry.getIndex();
    const n = index ? index.count : pos.count;
    /* every other face is plenty to find the biggest one */
    for (let i = 0; i + 2 < n; i += 6) {
      read(VA, pos, index, i, mesh.matrixWorld);
      read(VB, pos, index, i + 1, mesh.matrixWorld);
      read(VC, pos, index, i + 2, mesh.matrixWorld);
      if (Math.abs(VA.y - VB.y) > 0.4 || Math.abs(VA.y - VC.y) > 0.4) continue;
      const m2 = e1.subVectors(VB, VA).cross(e2.subVectors(VC, VA)).length() / 2;
      const at = Math.round(VA.y);
      area.set(at, (area.get(at) ?? 0) + m2);
      samples++;
    }
  });

  if (samples < 24) return 0;
  let level = 0;
  let most = -1;
  for (const [at, m2] of area) {
    if (m2 > most) {
      most = m2;
      level = at;
    }
  }
  return level;
}

function materialName(mesh: THREE.Mesh) {
  const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  return (list[0] as THREE.Material | undefined)?.name ?? "";
}

function writeInk(rgba: Uint8ClampedArray, colour: number) {
  const c0 = (colour >> 16) & 0xff, c1 = (colour >> 8) & 0xff, c2 = colour & 0xff;
  for (let i = 0; i < rgba.length; i += 4) {
    rgba[i] = c0; rgba[i + 1] = c1; rgba[i + 2] = c2; rgba[i + 3] = 255;
  }
}

const VA = new THREE.Vector3();
const VB = new THREE.Vector3();
const VC = new THREE.Vector3();

function read(
  out: THREE.Vector3,
  pos: THREE.BufferAttribute,
  index: THREE.BufferAttribute | null,
  i: number,
  matrix: THREE.Matrix4,
) {
  out.fromBufferAttribute(pos, index ? index.getX(i) : i).applyMatrix4(matrix);
}

/* -------------------------------------------------------------- the two plans */

/**
 * The plan of a model world, as a canvas. Drawn once, when the world is loaded:
 * a plan is a picture of something that never moves.
 */
export function modelMapPlan(
  root: THREE.Object3D,
  opts: PlanRasterOptions = {},
): MapPlan | null {
  const raster = rasterModelPlan(root, opts);
  if (!raster) return null;
  const canvas = document.createElement("canvas");
  canvas.width = raster.px;
  canvas.height = raster.px;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const sheet = ctx.createImageData(raster.px, raster.px);
  sheet.data.set(raster.rgba);
  ctx.putImageData(sheet, 0, 0);
  return {
    kind: "model",
    canvas,
    x0: raster.x0,
    z0: raster.z0,
    span: raster.span,
    px: raster.px,
    scale: raster.px / raster.span,
    backdrop: "#e2dccd",
  };
}

/* -------------------------------------------- a world's plan, from its own file */

let gltf: GLTFLoader | null = null;
function loader(): GLTFLoader {
  if (!gltf) {
    const draco = new DRACOLoader();
    draco.setDecoderPath(new URL("draco/gltf/", document.baseURI).href);
    gltf = new GLTFLoader();
    gltf.setDRACOLoader(draco);
  }
  return gltf;
}

/** One plan per world, drawn once: a plan is a picture of a thing that never moves. */
const drawn = new Map<string, Promise<MapPlan | null>>();

/**
 * The plan of a world that is a model: the map's own file is opened, fitted the
 * way the engine fits it (./engine, loadWorldMap — one uniform scale, turned,
 * then centred on the origin) so the plan and the car share one coordinate
 * space, and dropped into a plan. The model is thrown away again: a plan is all
 * that is kept.
 */
export function worldMapPlan(source: WorldMapSource): Promise<MapPlan | null> {
  const hit = drawn.get(source.id);
  if (hit) return hit;
  const job = drawPlanOf(source).catch(() => null);
  drawn.set(source.id, job);
  return job;
}

async function drawPlanOf(source: WorldMapSource): Promise<MapPlan | null> {
  if (!source.url) return null;
  const model = await loader().loadAsync(source.url);
  const object = model.scene as THREE.Object3D;
  const root = new THREE.Group();
  root.add(object);
  root.updateMatrixWorld(true);

  const size = new THREE.Box3().setFromObject(object).getSize(new THREE.Vector3());
  const span = Math.max(size.x, size.z) || 1;
  object.scale.setScalar(source.fitTo > 0 ? source.fitTo / span : 1);
  object.rotation.y = THREE.MathUtils.degToRad(source.turn || 0);
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const centre = box.getCenter(new THREE.Vector3());
  root.position.set(-centre.x, -box.min.y, -centre.z);
  root.updateMatrixWorld(true);

  /* the level is read off the model, in the same lifted coordinates the
     engine's own field uses (it sits the model on the ground at y = 0) */
  const plan = modelMapPlan(root);

  object.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (mesh.isMesh) mesh.geometry?.dispose();
  });
  return plan;
}
