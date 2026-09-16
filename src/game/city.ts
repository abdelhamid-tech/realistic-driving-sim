import * as THREE from "three";
import { recordPropSpot, type PropAnchor, type PropSlot, type PropSpotMap } from "./props";
import { tileInMetres } from "./worlddress";

/* ============================================================================
 *  APEX CITY — the built environment.
 *
 *  Everything repeated is instanced: buildings, street walls, retail podiums,
 *  awnings, roof clutter, road markings, furniture, signals and the skyline.
 *  Facade tiling is done in the vertex shader in metres, so window rows stay
 *  the same physical size on every building no matter how it is scaled.
 * ==========================================================================*/

/* ------------------------------------------------------------ street grid */

export const STREETS = [-550, -440, -330, -220, -110, 110, 220, 330, 440, 550];
export const ST_ASPHALT = 7;
export const CITY_R = 610;
export const WALK_H = 0.15;
export const PLAZA = 64;
export const ROAD_HALF = 7;
/** Pavement gap between the block plate (9.5 m) and the kerb line (7 m). */
export const KERB_APRON = 2.5;

export const IVS: [number, number][] = [];
for (let i = 0; i < STREETS.length - 1; i++) IVS.push([STREETS[i] + 9.5, STREETS[i + 1] - 9.5]);

export const STREET_NAMES_NS = [
  "WESTGATE", "HARBOR", "MILLBROOK", "CHAPEL", "PARK ROW",
  "EASTGATE", "FOUNDRY", "GALLERY", "WATERLOO", "OBSERVATORY",
];
export const STREET_NAMES_EW = [
  "SOUTHPORT", "DRYDOCK", "IRONWORKS", "CANALWAY", "UNION",
  "NORTHBRIDGE", "STADIUM", "TANNERY", "HILLCREST", "NORTHPORT",
];

export interface BuildingBox {
  x: number; z: number; hx: number; hz: number; top: number;
}
export interface Block {
  x0: number; x1: number; z0: number; z1: number;
  cx: number; cz: number; w: number; d: number;
  type: string;
  i: number; j: number;
  /** solid boxes the car collides with: buildings and street furniture */
  blds: BuildingBox[];
  park?: boolean;
}

export const BLOCKS: Block[] = [];
const BGRID: (Block | null)[][] = [];

const srng = ((s: number) => () => {
  s |= 0;
  s = (s + 0x6d2b79f5) | 0;
  let t = Math.imul(s ^ (s >>> 15), 1 | s);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
})(20260901);
const sR = (a: number, b: number) => a + srng() * (b - a);
const pick = <T,>(arr: T[]): T => arr[(srng() * arr.length) | 0];

for (let i = 0; i < IVS.length; i++) {
  BGRID.push([]);
  for (let j = 0; j < IVS.length; j++) {
    const ix = IVS[i];
    const iz = IVS[j];
    if (ix[0] < PLAZA && ix[1] > -PLAZA && iz[0] < PLAZA && iz[1] > -PLAZA) {
      BGRID[i].push(null);
      continue;
    }
    const cx = (ix[0] + ix[1]) / 2;
    const cz = (iz[0] + iz[1]) / 2;
    const m = Math.max(Math.abs(cx), Math.abs(cz));
    const type = m < 250 ? "downtown" : m < 430 ? "midtown" : "outer";
    const b: Block = {
      x0: ix[0], x1: ix[1], z0: iz[0], z1: iz[1], cx, cz,
      w: ix[1] - ix[0], d: iz[1] - iz[0], type, i, j, blds: [],
    };
    BGRID[i].push(b);
    BLOCKS.push(b);
  }
}

function ivIdx(v: number) {
  for (let i = 0; i < IVS.length; i++) {
    const I = IVS[i];
    if (v >= I[0] && v <= I[1]) return i;
  }
  return -1;
}

export function blockAt(x: number, z: number): Block | null {
  const i = ivIdx(x);
  if (i < 0) return null;
  const j = ivIdx(z);
  if (j < 0) return null;
  return BGRID[i][j];
}

export function onStreet(x: number, z: number) {
  if (Math.abs(x) < 8 && Math.abs(z) > 44 && Math.abs(z) < 850) return true;
  for (const c of STREETS) {
    if (Math.abs(x - c) < ST_ASPHALT && Math.abs(z) < CITY_R) return true;
    if (Math.abs(z - c) < ST_ASPHALT && Math.abs(x) < CITY_R) return true;
  }
  return false;
}

export const cityState = { on: true };

/**
 * Where the last built city stands its street furniture: one spot per tree,
 * planting, lamp and signal, filled as the city is built. The engine reads it
 * to stamp the real models of ./props down in their place.
 */
export const cityPropSpots: PropSpotMap = {};

export function cityH(x: number, z: number) {
  if (!cityState.on) return 0;
  const lim = CITY_R + KERB_APRON;
  if (x < -lim || x > lim || z < -lim || z > lim) return 0;
  if (blockAt(x, z)) return WALK_H;
  /* pavement apron filling the gap between the block plate and the asphalt */
  if (
    blockAt(x - KERB_APRON, z) || blockAt(x + KERB_APRON, z) ||
    blockAt(x, z - KERB_APRON) || blockAt(x, z + KERB_APRON)
  ) return WALK_H;
  return 0;
}

/** Which street index a coordinate sits on (for signage / signal lookups). */
function streetIndex(v: number): number {
  let best = 0;
  let bd = Infinity;
  STREETS.forEach((s, i) => {
    const d = Math.abs(s - v);
    if (d < bd) {
      bd = d;
      best = i;
    }
  });
  return best;
}

/* ---------------------------------------------------------------- signals */

export type LampState = "r" | "a" | "g";
const SIGNAL_OFFSET = (ix: number, iz: number) => (((ix * 3 + iz * 5) % 7) * 0.9);

/* Signal timing, in seconds. A real junction does not slam from one green to
   the next: each street runs its green, warns with amber, and then the whole
   junction holds on red for a moment — the clearance a driver needs to be out
   of the box before the other way comes. */
const SIG_GREEN = 8;
const SIG_AMBER = 2.4;
const SIG_CLEAR = 1.6;
const SIG_HALF = SIG_GREEN + SIG_AMBER + SIG_CLEAR;
/** one full cycle, both streets, in seconds */
export const SIGNAL_CYCLE = SIG_HALF * 2;

/**
 * Deterministic junction phases, offset junction by junction so the lights roll
 * a green wave across the grid instead of all changing together.
 *
 * The cycle runs off the wall clock rather than a per-session counter: everyone
 * in a shared city is looking at the same lights, and the lamps painted on the
 * tarmac can never disagree with the lamps on the mast. `_t` is kept for the
 * callers that still pass their own clock, and is the fallback where there is
 * no wall clock to read.
 */
export function junctionPhase(ix: number, iz: number, _t: number) {
  const base = typeof performance === "undefined" ? _t : performance.now() / 1000;
  let c = (base + SIGNAL_OFFSET(ix, iz)) % SIGNAL_CYCLE;
  if (c < 0) c += SIGNAL_CYCLE;
  if (c < SIG_GREEN) return { ns: "g" as LampState, ew: "r" as LampState };
  if (c < SIG_GREEN + SIG_AMBER) return { ns: "a" as LampState, ew: "r" as LampState };
  const d = c - SIG_HALF;
  if (d < 0) return { ns: "r" as LampState, ew: "r" as LampState };
  if (d < SIG_GREEN) return { ns: "r" as LampState, ew: "g" as LampState };
  if (d < SIG_GREEN + SIG_AMBER) return { ns: "r" as LampState, ew: "a" as LampState };
  return { ns: "r" as LampState, ew: "r" as LampState };
}

/* -------------------------------------------------------------- textures */

function canvasTex(
  w: number, h: number, draw: (x: CanvasRenderingContext2D, w: number, h: number) => void,
  aniso = 1, srgb = true,
) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d") as CanvasRenderingContext2D, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const noiseOn = (x: CanvasRenderingContext2D, w: number, h: number, n: number, alpha: number, light = true) => {
  for (let i = 0; i < n; i++) {
    const g = light ? 150 + Math.random() * 90 : 20 + Math.random() * 50;
    x.fillStyle = `rgba(${g},${g},${g},${alpha})`;
    x.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 1 + Math.random() * 3);
  }
};

type FacadeStyle = "tile" | "concrete" | "brick" | "glass" | "panel" | "corrugated";

interface FacadePalette {
  base: string; frame: string; sill: string; glass: string; mortar?: string; accent?: string;
}

const FACADE_STYLES: Record<FacadeStyle, FacadePalette> = {
  tile: { base: "#b9b0a2", frame: "#8f877b", sill: "#d6cec1", glass: "#2b3540" },
  concrete: { base: "#9d9a94", frame: "#84817c", sill: "#b5b2ac", glass: "#28313a" },
  brick: { base: "#8b5340", frame: "#e6e0d6", sill: "#efe9de", glass: "#232a30", mortar: "#9d6a54" },
  glass: { base: "#4b5a66", frame: "#2c343c", sill: "#5d6d7a", glass: "#4d6a80", accent: "#2f3a44" },
  panel: { base: "#a8aeb2", frame: "#7d8489", sill: "#bcc2c6", glass: "#313b45" },
  corrugated: { base: "#8d9296", frame: "#6f7478", sill: "#9aa0a4", glass: "#2f3841" },
};

function facadeTiles(style: FacadeStyle, lit: boolean, litBias: number) {
  const p = FACADE_STYLES[style];
  const bays = 2;
  const floors = 2;
  const cellW = 128;
  const cellH = 128;
  const W = cellW * bays;
  const H = cellH * floors;

  const map = canvasTex(W, H, (x, w, h) => {
    x.fillStyle = p.base;
    x.fillRect(0, 0, w, h);
    if (style === "brick") {
      for (let r = 0; r < h; r += 8) {
        x.fillStyle = "rgba(0,0,0,.14)";
        x.fillRect(0, r, w, 1);
        const off = (r / 8) % 2 ? 8 : 0;
        for (let c = -8; c < w; c += 16) {
          x.fillStyle = "rgba(0,0,0,.10)";
          x.fillRect(c + off, r, 1, 8);
          x.fillStyle = "rgba(255,255,255,.05)";
          x.fillRect(c + off + 1, r, 1, 8);
        }
      }
    } else if (style === "panel" || style === "corrugated") {
      for (let c = 0; c < w; c += 8) {
        x.fillStyle = style === "corrugated" ? "rgba(0,0,0,.16)" : "rgba(0,0,0,.09)";
        x.fillRect(c, 0, 1, h);
        x.fillStyle = "rgba(255,255,255,.07)";
        x.fillRect(c + 1, 0, 1, h);
      }
    } else if (style === "tile" || style === "concrete") {
      noiseOn(x, w, h, 4200, 0.05);
      for (let r = 0; r < h; r += cellH) {
        x.fillStyle = "rgba(0,0,0,.10)";
        x.fillRect(0, r, w, 1);
      }
    }
    noiseOn(x, w, h, 2600, 0.03, false);

    for (let fy = 0; fy < floors; fy++) {
      for (let bx = 0; bx < bays; bx++) {
        const ox = bx * cellW;
        const oy = fy * cellH;
        if (style === "glass") {
          /* curtain wall: horizontal glass bands with dark spandrels */
          x.fillStyle = p.glass;
          x.fillRect(ox + 4, oy + 10, cellW - 8, cellH - 46);
          x.fillStyle = "rgba(255,255,255,.16)";
          x.fillRect(ox + 4, oy + 10, cellW - 8, 10);
          x.fillStyle = p.accent ?? p.frame;
          x.fillRect(ox + 4, oy + cellH - 40, cellW - 8, 34);
          x.fillStyle = "rgba(0,0,0,.28)";
          x.fillRect(ox + 4, oy + cellH - 8, cellW - 8, 4);
          x.fillStyle = p.frame;
          x.fillRect(ox + cellW / 2 - 1, oy + 10, 2, cellH - 46);
          continue;
        }
        const winW = style === "brick" ? 52 : 66;
        const winH = style === "concrete" || style === "tile" ? 66 : 58;
        const wx = ox + (cellW - winW) / 2;
        const wy = oy + 34;
        x.fillStyle = p.frame;
        x.fillRect(wx - 5, wy - 5, winW + 10, winH + 10);
        const glass = x.createLinearGradient(wx, wy, wx + winW, wy + winH);
        glass.addColorStop(0, p.glass);
        glass.addColorStop(0.55, "#54626d");
        glass.addColorStop(1, p.glass);
        x.fillStyle = glass;
        x.fillRect(wx, wy, winW, winH);
        x.fillStyle = "rgba(255,255,255,.20)";
        x.fillRect(wx, wy, winW, 7);
        x.fillStyle = "rgba(0,0,0,.35)";
        x.fillRect(wx, wy + winH - 6, winW, 6);
        x.fillStyle = p.frame;
        x.fillRect(wx + winW / 2 - 1, wy, 2, winH);
        x.fillStyle = p.sill;
        x.fillRect(wx - 7, wy + winH + 4, winW + 14, 7);
        if (style === "brick") {
          x.fillStyle = "rgba(0,0,0,.18)";
          x.fillRect(wx - 6, wy - 8, winW + 12, 4);
        }
      }
    }
  }, 2);

  const emissive = canvasTex(W, H, (x, w, h) => {
    x.fillStyle = "#000000";
    x.fillRect(0, 0, w, h);
    for (let fy = 0; fy < floors; fy++) {
      for (let bx = 0; bx < bays; bx++) {
        if (Math.random() > (lit ? litBias : 0)) continue;
        const ox = bx * cellW;
        const oy = fy * cellH;
        const warm = lit ? Math.random() < 0.7 : false;
        const up = warm ? "rgba(255,214,150," : "rgba(206,228,255,";
        const g = x.createRadialGradient(ox + cellW / 2, oy + 60, 4, ox + cellW / 2, oy + 60, 70);
        g.addColorStop(0, up + "0.95)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        x.fillStyle = g;
        if (style === "glass") x.fillRect(ox + 4, oy + 10, cellW - 8, cellH - 46);
        else x.fillRect(ox + 26, oy + 30, cellW - 52, cellH - 66);
      }
    }
  }, 1);

  return { map, emissive };
}

/* --------------------------------------------------------------- builder */

interface Batch {
  geo: THREE.BufferGeometry;
  mat: THREE.Material;
  list: THREE.Matrix4[];
  shadow: boolean;
  /**
   * The prop slot this geometry belongs to, if it is a prop. Every piece of
   * one slot is tagged with the same name, so the engine can hide the whole
   * low-poly version of a slot the moment a real model covers it — see
   * ./props. Two names joined with "+" mean the parts are shared by both
   * slots (the masts the street lamps and the traffic signals stand on).
   */
  tag?: string;
  /**
   * File one spot per instance of this batch, so the real model of the slot
   * can be stamped down in its place. Set it on ONE batch per prop — the post,
   * not the arm and the head — or a single street lamp is planted three times.
   */
  spot?: PropAnchor;
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

function makeBatch(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  shadow: boolean,
  tag?: string,
  spot?: PropAnchor,
): Batch {
  return { geo, mat, list: [], shadow, tag, spot };
}

/**
 * Geometry + material pairs that belong to a prop slot, filled in by the
 * builder once its geometries and materials exist. The furniture asks for its
 * parts through the shared cache by pair, and that pair is the only thing that
 * says which prop a part belongs to — see ./props.
 */
const SKIN_SLOTS: {
  geo: THREE.BufferGeometry;
  mat: THREE.Material;
  slot: PropAnchor["slot"];
  anchor: boolean;
}[] = [];

/**
 * One instanced draw call per (geometry, material, shadow) pair that is
 * actually used, so a furniture piece can be assembled from as many parts as
 * it needs without the draw-call count growing with it.
 */
function makePartCache(batches: Batch[]) {
  const cache = new Map<string, Batch>();
  return (geo: THREE.BufferGeometry, mat: THREE.Material, shadow = false): Batch => {
    const key = `${geo.uuid}:${mat.uuid}:${shadow ? 1 : 0}`;
    let b = cache.get(key);
    if (!b) {
      /* some furniture is asked for by geometry + material only, and that pair
         is what tells us which prop slot it belongs to */
      const rule = SKIN_SLOTS.find((r) => r.geo === geo && r.mat === mat);
      b = makeBatch(geo, mat, shadow, rule?.slot, rule?.anchor ? { slot: rule.slot } : undefined);
      cache.set(key, b);
      batches.push(b);
    }
    return b;
  };
}

function put(b: Batch, x: number, y: number, z: number, sx: number, sy: number, sz: number, yaw = 0, pitch = 0) {
  _p.set(x, y, z);
  _e.set(pitch, yaw, 0);
  _q.setFromEuler(_e);
  _s.set(sx, sy, sz);
  _m.compose(_p, _q, _s);
  b.list.push(_m.clone());
  /* every prop the city stands up announces itself here, wherever in the
     placement code it was built from — see ./props for what it is used for */
  if (b.spot) recordPropSpot(cityPropSpots, b.spot, x, y, z, yaw, STREETS);
}

function bakeBatches(root: THREE.Object3D, batches: Batch[]) {
  for (const b of batches) {
    if (!b.list.length) continue;
    const im = new THREE.InstancedMesh(b.geo, b.mat, b.list.length);
    b.list.forEach((m, i) => im.setMatrixAt(i, m));
    im.instanceMatrix.needsUpdate = true;
    im.castShadow = b.shadow;
    im.receiveShadow = true;
    im.frustumCulled = false;
    if (b.tag) im.name = `prop:${b.tag}`;
    root.add(im);
  }
}

/* ----------------------------------------------------------- city build */

export interface City {
  root: THREE.Group;
  lampPoints: THREE.Vector3[];
  parkSpots: [number, number][];
  parkedCarSpots: [number, number, number][];
  lampMaterial: THREE.MeshStandardMaterial;
  update(dt: number, night: number, wet: number): void;
  lightBlocks(x: number, z: number, axis: "x" | "z", dir: number, speed: number): boolean;
}

export function buildCity(opts: { aniso: number; seed?: number }): City {
  const aniso = opts.aniso;
  const root = new THREE.Group();
  root.name = "apex-city";

  const batches: Batch[] = [];
  const lampPoints: THREE.Vector3[] = [];
  const parkSpots: [number, number][] = [];
  const parkedCarSpots: [number, number, number][] = [];
  const treeSpots: { x: number; z: number; sc: number }[] = [];

  /* a fresh build starts a fresh map of props */
  for (const key of Object.keys(cityPropSpots)) delete cityPropSpots[key as PropSlot];

  /* ---------------------------------------------------------- geometries */
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  boxGeo.translate(0, 0.5, 0);
  const planeGeo = new THREE.PlaneGeometry(1, 1);
  planeGeo.rotateX(-Math.PI / 2);
  const cylGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);
  cylGeo.translate(0, 0.5, 0);
  const discGeo = new THREE.CircleGeometry(0.5, 14);
  discGeo.rotateX(-Math.PI / 2);
  const ringGeo = new THREE.TorusGeometry(0.5, 0.09, 6, 14, Math.PI / 2);
  ringGeo.rotateX(-Math.PI / 2);
  const coneGeo = new THREE.ConeGeometry(0.5, 1, 8);
  coneGeo.translate(0, 0.5, 0);
  const blobGeo = new THREE.IcosahedronGeometry(0.5, 1);
  /* furniture primitives: sphere for caps and knobs, taper for cast-iron
     bodies, a dome for bin lids, a half ring for bike stands, a full ring
     for wheels and hoops */
  const sphereGeo = new THREE.SphereGeometry(0.5, 8, 6);
  const capGeo = new THREE.SphereGeometry(0.5, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2);
  const taperGeo = new THREE.CylinderGeometry(0.4, 0.5, 1, 8);
  taperGeo.translate(0, 0.5, 0);
  const hoopGeo = new THREE.TorusGeometry(0.5, 0.045, 4, 10, Math.PI);
  const ringGeo2 = new THREE.TorusGeometry(0.5, 0.055, 5, 12);

  /* ---------------------------------------------------------- materials */
  const roadPatchMat = new THREE.MeshStandardMaterial({
    color: 0x33363b, roughness: 0.98, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3,
  });
  const tarMat = new THREE.MeshBasicMaterial({ color: 0x1b1d20, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  const paintWhite = new THREE.MeshStandardMaterial({
    color: 0xd9d6cc, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
  });
  const paintYellow = new THREE.MeshStandardMaterial({
    color: 0xc9a13a, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
  });
  const paintBlue = new THREE.MeshStandardMaterial({
    color: 0x2f5f9e, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
  });
  const manholeMat = new THREE.MeshStandardMaterial({
    color: 0x3a3d41, roughness: 0.6, metalness: 0.5, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
  });
  const tactileMat = new THREE.MeshStandardMaterial({
    color: 0xd8b23f, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
  });
  const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, envMapIntensity: 0.3 });
  sidewalkMat.map = canvasTex(256, 256, (x, w, h) => {
    x.fillStyle = "#9c988e";
    x.fillRect(0, 0, w, h);
    noiseOn(x, w, h, 5200, 0.06);
    noiseOn(x, w, h, 2600, 0.04, false);
    for (let i = 0; i < 4; i++) {
      x.fillStyle = "rgba(0,0,0,.22)";
      x.fillRect(i * 64, 0, 2, h);
      x.fillRect(0, i * 64, w, 2);
    }
    x.fillStyle = "rgba(0,0,0,.10)";
    x.fillRect(0, 0, w, 3);
  }, aniso);
  /* the canvas holds a 4 x 4 grid of flags, so it tiles every 4 m: one flag
     is a metre of pavement, whether the slab wearing it is 3 m or 13 m wide */
  tileInMetres(sidewalkMat, 4);
  sidewalkMat.name = "concrete";
  const curbMat = new THREE.MeshStandardMaterial({ color: 0xb3b0a8, roughness: 0.9, envMapIntensity: 0.35 });
  const curbMatDark = new THREE.MeshStandardMaterial({ color: 0x8e8b84, roughness: 0.95, envMapIntensity: 0.3 });
  tileInMetres(curbMat, 4);
  tileInMetres(curbMatDark, 4);
  curbMat.name = "concrete";
  curbMatDark.name = "concrete";
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x4a4c4f, roughness: 0.97, envMapIntensity: 0.25 });
  roofMat.map = canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = "#4c4e51";
    x.fillRect(0, 0, w, h);
    noiseOn(x, w, h, 2600, 0.09);
    noiseOn(x, w, h, 900, 0.06, false);
  }, aniso);
  tileInMetres(roofMat, 3);
  const gravelMat = new THREE.MeshStandardMaterial({ color: 0x5a5c5e, roughness: 1, envMapIntensity: 0.2 });
  tileInMetres(gravelMat, 3);
  gravelMat.name = "sand";
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x8e9499, roughness: 0.45, metalness: 0.7, envMapIntensity: 0.8 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x33363a, roughness: 0.55, metalness: 0.6, envMapIntensity: 0.6 });
  const concreteMat = new THREE.MeshStandardMaterial({ color: 0xa5a29b, roughness: 0.92, envMapIntensity: 0.35 });
  tileInMetres(concreteMat, 4);
  concreteMat.name = "concrete";
  const glassShopMat = new THREE.MeshStandardMaterial({
    color: 0x1c242c, roughness: 0.12, metalness: 0.55, envMapIntensity: 1.2,
    emissive: 0xffce8a, emissiveIntensity: 0.03,
  });
  const shopSignMat = new THREE.MeshStandardMaterial({ color: 0x101216, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
  const billboardMats: THREE.MeshStandardMaterial[] = [];
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6f5637, roughness: 0.9, envMapIntensity: 0.25 });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x3d5a2c, roughness: 1, envMapIntensity: 0.25 });
  tileInMetres(leafMat, 3);
  leafMat.name = "leaf";
  const grassMat = new THREE.MeshStandardMaterial({ color: 0x5c6b3a, roughness: 1, envMapIntensity: 0.25 });
  tileInMetres(grassMat, 5);
  grassMat.name = "grass";
  const puddleMat = new THREE.MeshStandardMaterial({
    color: 0x14181d, roughness: 0.06, metalness: 0.75, envMapIntensity: 1.6,
    transparent: true, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5,
  });
  const skylineMat = new THREE.MeshStandardMaterial({ color: 0x6a7183, roughness: 1, envMapIntensity: 0.4, fog: true });
  /* (furniture materials follow) */

  /* --- street-furniture materials -------------------------------------
     Painted cast iron, galvanised steel, moulded plastic, glazing, enamel,
     tarpaulin, stone and soil: the handful of real materials a street is
     actually furnished from. */
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x2d3a33, roughness: 0.52, metalness: 0.45, envMapIntensity: 0.7 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x9ba2a7, roughness: 0.32, metalness: 0.82, envMapIntensity: 1.05 });
  const plasticMat = new THREE.MeshStandardMaterial({ color: 0x2b2e32, roughness: 0.68, metalness: 0.08, envMapIntensity: 0.45 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0x9c2c22, roughness: 0.48, metalness: 0.28, envMapIntensity: 0.7 });
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xab8b45, roughness: 0.34, metalness: 0.88, envMapIntensity: 1.1 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.92, envMapIntensity: 0.2 });
  const paneMat = new THREE.MeshStandardMaterial({
    color: 0xa9becd, roughness: 0.07, metalness: 0.3, transparent: true, opacity: 0.34,
    envMapIntensity: 1.5, side: THREE.DoubleSide,
  });
  const netMat = new THREE.MeshStandardMaterial({
    color: 0xcfd8c8, roughness: 0.9, transparent: true, opacity: 0.24,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0xb4b0a6, roughness: 0.94, envMapIntensity: 0.4 });
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x3a2f24, roughness: 1 });
  const flowerMat = new THREE.MeshStandardMaterial({ color: 0xa8334a, roughness: 0.85, envMapIntensity: 0.3 });
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x22414a, roughness: 0.04, metalness: 0.65, envMapIntensity: 1.7,
    transparent: true, opacity: 0.86,
  });
  /* the ponds and the basin: 40 m of water per tile, so a rippled sheet reads
     as water rather than as a tiled pattern */
  tileInMetres(waterMat, 40);
  waterMat.name = "water";
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x1e4b33, roughness: 0.58, metalness: 0.2, envMapIntensity: 0.5 });
  const canvasMat = new THREE.MeshStandardMaterial({
    map: canvasTex(128, 128, (x, w, h) => {
      const bands = 8;
      for (let i = 0; i < bands; i++) {
        x.fillStyle = i % 2 ? "#e9e3d4" : "#b4452f";
        x.fillRect(0, (i * h) / bands, w, h / bands + 1);
      }
      noiseOn(x, w, h, 1800, 0.05);
    }, aniso),
    roughness: 0.88, side: THREE.DoubleSide, envMapIntensity: 0.25,
  });

  /* facade materials, two lit variants per style */
  const facadeMats: Record<string, { mat: THREE.MeshStandardMaterial; style: FacadeStyle }> = {};
  const litBias: Record<FacadeStyle, number> = {
    tile: 0.5, concrete: 0.42, brick: 0.55, glass: 0.62, panel: 0.38, corrugated: 0.18,
  };
  const BAY_W: Record<FacadeStyle, number> = {
    tile: 6.4, concrete: 6.6, brick: 6.2, glass: 6.8, panel: 6.0, corrugated: 4.0,
  };
  const FLOOR_H: Record<FacadeStyle, number> = {
    tile: 7.0, concrete: 7.2, brick: 6.8, glass: 7.4, panel: 7.0, corrugated: 6.0,
  };
  for (const style of Object.keys(FACADE_STYLES) as FacadeStyle[]) {
    for (let v = 0; v < 2; v++) {
      const tiles = facadeTiles(style, v === 0, litBias[style]);
      const mat = new THREE.MeshStandardMaterial({
        map: tiles.map,
        emissiveMap: tiles.emissive,
        emissive: new THREE.Color(0xffd9a8),
        emissiveIntensity: 0.02,
        roughness: style === "glass" ? 0.22 : 0.82,
        metalness: style === "glass" ? 0.62 : 0.03,
        envMapIntensity: style === "glass" ? 1.1 : 0.4,
      });
      const bay = BAY_W[style];
      const floor = FLOOR_H[style];
      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uBayW = { value: bay };
        shader.uniforms.uFloorH = { value: floor };
        /* Tile the facade in metres: window bays and floor heights stay the
           same physical size whatever the building is scaled to, and the u
           axis follows the face so no elevation is ever stretched. */
        shader.vertexShader = `uniform float uBayW;\nuniform float uFloorH;\n` + shader.vertexShader.replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
          #ifdef USE_INSTANCING
            vec3 iScale = vec3(
              length(instanceMatrix[0]), length(instanceMatrix[1]), length(instanceMatrix[2]));
            vec3 an = abs(normal);
            float uw = an.z * iScale.x + an.x * iScale.z;
            vec2 cityTile = vec2(
              (an.z * position.x + an.x * position.z) * uw, position.y * iScale.y
            ) / vec2(uBayW, uFloorH);
            #ifdef USE_MAP
              vMapUv = cityTile;
            #endif
            #ifdef USE_EMISSIVEMAP
              vEmissiveMapUv = cityTile;
            #endif
          #endif`,
        );
      };
      facadeMats[`${style}${v}`] = { mat, style };
    }
  }
  const emissiveMats = Object.values(facadeMats).map((f) => f.mat);

  const bldBatch: Record<string, Batch> = {};
  const roofBatch = makeBatch(boxGeo, roofMat, true);
  const gravelBatch = makeBatch(planeGeo, gravelMat, false);
  const parapetBatch = makeBatch(boxGeo, concreteMat, true);
  const podiumBatch = makeBatch(boxGeo, concreteMat, true);
  const shopGlassBatch = makeBatch(boxGeo, glassShopMat, false);
  const awningBatch = makeBatch(boxGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }), false);
  const shopSignBatch = makeBatch(boxGeo, shopSignMat, false);
  const balconyBatch = makeBatch(boxGeo, concreteMat, false);
  const acBatch = makeBatch(boxGeo, metalMat, false);
  const tankBatch = makeBatch(cylGeo, woodMat, false);
  const tankLegBatch = makeBatch(boxGeo, darkMetalMat, false);
  const mastBatch = makeBatch(cylGeo, darkMetalMat, false);
  const billboardBatch: Batch[] = [];
  const frameBatch = makeBatch(boxGeo, darkMetalMat, false);
  const treeTrunkBatch = makeBatch(cylGeo, woodMat, true, "tree", { slot: "tree" });
  const treeLeafBatch = makeBatch(blobGeo, leafMat, true, "tree");
  const pitBatch = makeBatch(
    planeGeo,
    new THREE.MeshStandardMaterial({ color: 0x3b3226, roughness: 1 }),
    false,
    "tree",
  );
  const benchBatch = makeBatch(boxGeo, woodMat, false);
  const benchLegBatch = makeBatch(boxGeo, darkMetalMat, false);
  const binBatch = makeBatch(cylGeo, darkMetalMat, false);
  const hydrantBatch = makeBatch(cylGeo, new THREE.MeshStandardMaterial({ color: 0xa8352a, roughness: 0.6 }), false);
  const bollardBatch = makeBatch(cylGeo, darkMetalMat, false);
  const planterBatch = makeBatch(boxGeo, concreteMat, false);
  const shrubBatch = makeBatch(blobGeo, leafMat, false);
  const meterPoleBatch = makeBatch(cylGeo, darkMetalMat, false);
  const meterHeadBatch = makeBatch(boxGeo, metalMat, false);
  const signPoleBatch = makeBatch(cylGeo, metalMat, false);
  const signPlateBatch: Batch[] = [];
  const shelterRoofBatch = makeBatch(boxGeo, darkMetalMat, true);
  const shelterGlassBatch = makeBatch(boxGeo, glassShopMat, false);
  /* the masts carry both the street lamps and the traffic signals, so their
     tag names both slots: they only come down once both are real models */
  const poleBatch = makeBatch(cylGeo, darkMetalMat, false, "lamp+signal", { slot: "pole" });
  const armBatch = makeBatch(boxGeo, darkMetalMat, false, "lamp+signal");
  /* the head is the signal's alone */
  const headBatch = makeBatch(boxGeo, darkMetalMat, true, "signal");
  const paintWhiteBatch = makeBatch(planeGeo, paintWhite, false);
  const paintYellowBatch = makeBatch(planeGeo, paintYellow, false);
  const paintBlueBatch = makeBatch(planeGeo, paintBlue, false);
  const tactileBatch = makeBatch(planeGeo, tactileMat, false);
  const patchBatch = makeBatch(planeGeo, roadPatchMat, false);
  const tarBatch = makeBatch(planeGeo, tarMat, false);
  const manholeBatch = makeBatch(discGeo, manholeMat, false);
  const puddleBatch = makeBatch(discGeo, puddleMat, false);
  const curbBatch = makeBatch(boxGeo, curbMat, false);
  const cornerCurbBatch = makeBatch(ringGeo, curbMatDark, false);
  const slabBatch = makeBatch(boxGeo, sidewalkMat, false);
  const laneArrowBatch = makeBatch(planeGeo, paintWhite, false);

  /* signal lenses are lit with per-instance colour */
  const lampMatR = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const lampMatA = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const lampMatG = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const lensGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.06, 10);
  lensGeo.rotateX(Math.PI / 2);
  const redLenses: THREE.Matrix4[] = [];
  const amberLenses: THREE.Matrix4[] = [];
  const greenLenses: THREE.Matrix4[] = [];
  const LAMP_ON = { r: new THREE.Color(1.0, 0.18, 0.12), a: new THREE.Color(1.0, 0.62, 0.1), g: new THREE.Color(0.22, 1.0, 0.35) };
  const LAMP_OFF = { r: new THREE.Color(0.07, 0.015, 0.012), a: new THREE.Color(0.07, 0.045, 0.01), g: new THREE.Color(0.015, 0.07, 0.03) };
  const junctionList: { ix: number; iz: number }[] = [];

  /* lamp head material for street lights (driven at night) */
  const lampMaterial = new THREE.MeshStandardMaterial({
    color: 0xd9d4c2, emissive: 0xfff0c8, emissiveIntensity: 0.05, roughness: 0.6,
  });
  const lampHeadBatch = makeBatch(boxGeo, lampMaterial, false, "lamp");
  const lampGlowBatch = makeBatch(blobGeo, new THREE.MeshBasicMaterial({
    color: 0xffd9a0, transparent: true, opacity: 0.0, depthWrite: false, toneMapped: false,
  }), false, "lamp");

  /* --- which shared part belongs to which prop slot ------------------- *
   * The furniture below asks for its parts through the part cache rather than
   * its own batches, so a slot is recognised by the geometry + material pair
   * it is built from. The planting in a planter is the foliage blob: tag it
   * and file one spot per planter, and the real models take over. */
  SKIN_SLOTS.length = 0;
  SKIN_SLOTS.push({ geo: blobGeo, mat: leafMat, slot: "plant", anchor: true });

  /* the signal lenses are built outside the batch system, so they carry their
     slot on the material instead: hiding the light hides the lights */
  for (const m of [lampMatR, lampMatA, lampMatG]) m.userData.propSlot = "signal";

  /* ------------------------------------------------------------- signage */
  function signTexture(lines: string[], bg: string, fg: string, accent?: string) {
    return canvasTex(256, 128, (x, w, h) => {
      x.fillStyle = bg;
      x.fillRect(0, 0, w, h);
      if (accent) {
        x.fillStyle = accent;
        x.fillRect(0, h - 14, w, 14);
      }
      x.strokeStyle = fg;
      x.lineWidth = 4;
      x.strokeRect(6, 6, w - 12, h - 12);
      x.fillStyle = fg;
      x.textAlign = "center";
      x.textBaseline = "middle";
      const size = lines.length > 1 ? 40 : 52;
      x.font = `700 ${size}px Rajdhani, system-ui, sans-serif`;
      lines.forEach((l, i) => {
        x.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * (size + 2));
      });
    }, aniso);
  }

  const billboardAds = [
    { tex: signTexture(["APEX TYRES"], "#14161a", "#ff6a2a", "#ff6a2a"), w: 12, h: 5 },
    { tex: signTexture(["PIT LANE", "CAFFE"], "#101418", "#ece9e2", "#7dc95e"), w: 10, h: 5.5 },
    { tex: signTexture(["240 HZ", "DYNAMICS"], "#0f1216", "#8fb8cc", "#8fb8cc"), w: 11, h: 5 },
    { tex: signTexture(["GRID", "MOTORS"], "#161413", "#e8e2d6", "#c9a13a"), w: 12, h: 4.5 },
  ];
  for (const ad of billboardAds) {
    const m = new THREE.MeshStandardMaterial({
      map: ad.tex, roughness: 0.6, emissiveMap: ad.tex, emissive: 0xffffff, emissiveIntensity: 0.02,
    });
    billboardMats.push(m);
    billboardBatch.push(makeBatch(new THREE.PlaneGeometry(ad.w, ad.h), m, false));
  }
  const speedSignMat = new THREE.MeshStandardMaterial({
    map: canvasTex(128, 128, (x, w, h) => {
      x.fillStyle = "#f2efe6";
      x.fillRect(0, 0, w, h);
      x.fillStyle = "#c02a1e";
      x.beginPath();
      x.arc(w / 2, h / 2, w / 2 - 4, 0, Math.PI * 2);
      x.fill();
      x.fillStyle = "#f2efe6";
      x.beginPath();
      x.arc(w / 2, h / 2, w / 2 - 12, 0, Math.PI * 2);
      x.fill();
      x.fillStyle = "#14161a";
      x.font = "700 56px Rajdhani, system-ui, sans-serif";
      x.textAlign = "center";
      x.textBaseline = "middle";
      x.fillText("50", w / 2, h / 2 + 2);
    }, aniso),
    roughness: 0.7,
  });
  signPlateBatch.push(makeBatch(new THREE.PlaneGeometry(0.7, 0.7), speedSignMat, false));
  const oneWayMat = new THREE.MeshStandardMaterial({
    map: canvasTex(256, 64, (x, w, h) => {
      x.fillStyle = "#14161a";
      x.fillRect(0, 0, w, h);
      x.fillStyle = "#ece9e2";
      x.fillRect(8, 8, w - 16, h - 16);
      x.fillStyle = "#14161a";
      x.font = "700 34px Rajdhani, system-ui, sans-serif";
      x.textAlign = "center";
      x.textBaseline = "middle";
      x.fillText("ONE WAY →", w / 2, h / 2 + 2);
    }, aniso),
    roughness: 0.7, side: THREE.DoubleSide,
  });
  signPlateBatch.push(makeBatch(new THREE.PlaneGeometry(1.6, 0.4), oneWayMat, false));

  const shopSignTexts = ["CAFE", "DELI", "GARAGE", "MOTORS", "BOOKS", "PIZZA", "TYRES", "BAR", "PHARMACY", "STUDIO", "MARKET", "DINER"];
  for (const text of shopSignTexts) {
    const t = signTexture([text], "#0d0f12", text.length > 6 ? "#ffd08a" : "#bfe6ff");
    const m = new THREE.MeshStandardMaterial({
      map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0.02, roughness: 0.5, side: THREE.DoubleSide,
    });
    shopSignList.push({ text, mat: m });
  }

  /* ------------------------------------------------------------- helpers */
  const inset = 0.9;              // build line offset from the block edge
  const sidewalkBand = 2.5;

  function addBuilding(
    cx: number, cz: number, w: number, d: number, h: number, style: FacadeStyle, block: Block,
    podium: boolean,
  ) {
    const key = `${style}${srng() < 0.5 ? 0 : 1}`;
    let batch = bldBatch[key];
    if (!batch) {
      const f = facadeMats[key];
      batch = makeBatch(boxGeo, f.mat, true);
      bldBatch[key] = batch;
      batches.push(batch);
    }
    put(batch, cx, WALK_H, cz, w, h, d);
    block.blds.push({ x: cx, z: cz, hx: w / 2 + 0.35, hz: d / 2 + 0.35, top: WALK_H + h });

    /* roof slab + parapet */
    put(roofBatch, cx, WALK_H + h, cz, w + 0.25, 0.28, d + 0.25);
    put(parapetBatch, cx, WALK_H + h + 0.1, cz, w + 0.5, 0.5, d + 0.5);
    put(gravelBatch, cx, WALK_H + h + 0.3, cz, w * 0.92, 1, d * 0.92);

    /* roof clutter */
    const clutter = Math.max(1, Math.round((w * d) / 240));
    for (let i = 0; i < clutter; i++) {
      const ox = sR(-w / 2 + 2, w / 2 - 2);
      const oz = sR(-d / 2 + 2, d / 2 - 2);
      if (srng() < 0.55) {
        put(acBatch, cx + ox, WALK_H + h + 0.3, cz + oz, sR(1.6, 3), sR(1, 1.8), sR(1.4, 2.4));
      } else if (h > 15 && srng() < 0.5) {
        const th = sR(2.4, 4);
        put(tankBatch, cx + ox, WALK_H + h + 1.4, cz + oz, 2.6, th, 2.6);
        for (const lx of [-0.8, 0.8]) {
          for (const lz of [-0.8, 0.8]) {
            put(tankLegBatch, cx + ox + lx, WALK_H + h + 0.3, cz + oz + lz, 0.16, 1.2, 0.16);
          }
        }
      } else {
        put(mastBatch, cx + ox, WALK_H + h + 0.3, cz + oz, 0.16, sR(3, 8), 0.16);
      }
    }

    /* street-level retail podium + shop glass + sign band */
    if (podium) {
      const ph = 4.3;
      put(podiumBatch, cx, WALK_H, cz, w + 0.7, ph, d + 0.7);
      for (const [sx, sz, yaw] of [[0, d / 2 + 0.36, 0], [0, -d / 2 - 0.36, 0]] as [number, number, number][]) {
        put(shopGlassBatch, cx + sx, WALK_H + 0.5, cz + sz, w * 0.94, 2.7, 0.1, yaw);
        put(shopSignBatch, cx + sx, WALK_H + 3.6, cz + sz + (sz > 0 ? 0.06 : -0.06), w * 0.5, 0.62, 0.12, yaw);
      }
      for (const [sx, sz, yaw] of [[w / 2 + 0.36, 0, Math.PI / 2], [-w / 2 - 0.36, 0, Math.PI / 2]] as [number, number, number][]) {
        put(shopGlassBatch, cx + sx, WALK_H + 0.5, cz + sz, d * 0.94, 2.7, 0.1, yaw);
        put(shopSignBatch, cx + sx + (sx > 0 ? 0.06 : -0.06), WALK_H + 3.6, cz + sz, d * 0.5, 0.62, 0.12, yaw);
      }
      /* awnings every ~7 m on the two long faces */
      const n = Math.max(1, Math.floor(w / 7));
      for (let i = 0; i < n; i++) {
        if (srng() < 0.35) continue;
        const ox = -w / 2 + (w / n) * (i + 0.5);
        const wid = Math.min(5.4, (w / n) * 0.86);
        const dz = d / 2 + 1.0;
        for (const s of [1, -1]) {
          put(awningBatch, cx + ox, WALK_H + 3.2, cz + s * dz, wid, 0.14, 2.0, 0, -0.22 * s);
        }
      }
    }

    /* balconies on residential street walls */
    if (style === "brick" && h > 9) {
      const floors = Math.floor(h / 3.6) - 1;
      for (let f = 1; f <= floors; f++) {
        const y = WALK_H + f * 3.6;
        if (y > WALK_H + h - 1.5) break;
        for (const s of [1, -1]) {
          put(balconyBatch, cx + s * (w / 2 + 0.5), y, cz + sR(-d / 2 + 1, d / 2 - 1), 1.1, 0.2, 2.2);
        }
      }
    }
  }

  /* ------------------------------------------------- street walls & blocks */
  const parks: Block[] = [];
  const lots: Block[] = [];

  for (const b of BLOCKS) {
    const m = Math.max(Math.abs(b.cx), Math.abs(b.cz));
    if (m > 300 && parks.length < 4 && srng() < 0.14) {
      b.type = "park";
      b.park = true;
      parks.push(b);
    } else if (m > 300 && lots.length < 4 && srng() < 0.12) {
      b.type = "lot";
      lots.push(b);
    }

    /* pavement plate out to the kerb line, then the kerb itself */
    const ap = KERB_APRON;
    put(slabBatch, b.cx, 0, b.cz, b.w + 2 * ap, WALK_H, b.d + 2 * ap);
    const cw = 0.35;
    const outer = ap + cw / 2;
    put(curbBatch, b.cx, 0, b.z0 - outer, b.w + 2 * ap + cw, WALK_H + 0.03, cw);
    put(curbBatch, b.cx, 0, b.z1 + outer, b.w + 2 * ap + cw, WALK_H + 0.03, cw);
    put(curbBatch, b.x0 - outer, 0, b.cz, cw, WALK_H + 0.03, b.d + 2 * ap + cw);
    put(curbBatch, b.x1 + outer, 0, b.cz, cw, WALK_H + 0.03, b.d + 2 * ap + cw);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as [number, number][]) {
      put(
        cornerCurbBatch,
        b.cx + sx * (b.w / 2 + ap),
        0,
        b.cz + sz * (b.d / 2 + ap),
        cw * 2, WALK_H + 0.03, cw * 2,
      );
    }

    if (b.type === "park") {
      put(gravelBatch, b.cx, WALK_H + 0.02, b.cz, b.w - 6, 1, b.d - 6);
      const g = makeBatch(planeGeo, grassMat, false);
      put(g, b.cx, WALK_H + 0.03, b.cz, b.w - 8, 1, b.d - 8);
      batches.push(g);
      for (let k = 0; k < 16; k++) {
        parkSpots.push([b.cx + sR(-b.w / 2 + 6, b.w / 2 - 6), b.cz + sR(-b.d / 2 + 6, b.d / 2 - 6)]);
      }
      /* paths + benches + lamps */
      const p = makeBatch(planeGeo, sidewalkMat, false);
      put(p, b.cx, WALK_H + 0.04, b.cz, b.w - 16, 1, 4);
      put(p, b.cx, WALK_H + 0.04, b.cz, 4, 1, b.d - 16);
      batches.push(p);
      for (let k = 0; k < 5; k++) {
        const bx = b.cx + sR(-b.w / 2 + 8, b.w / 2 - 8);
        const bz = b.cz + sR(-b.d / 2 + 8, b.d / 2 - 8);
        put(benchBatch, bx, WALK_H + 0.45, bz, 1.8, 0.12, 0.5, sR(0, 3.14));
        put(benchLegBatch, bx - 0.7, WALK_H + 0.2, bz, 0.12, 0.4, 0.45);
        put(benchLegBatch, bx + 0.7, WALK_H + 0.2, bz, 0.12, 0.4, 0.45);
        put(binBatch, bx + 1.6, WALK_H + 0.42, bz, 0.6, 0.8, 0.6);
      }
      continue;
    }

    if (b.type === "lot") {
      const lp = makeBatch(planeGeo, roadPatchMat, false);
      put(lp, b.cx, WALK_H + 0.02, b.cz, b.w - 8, 1, b.d - 8);
      batches.push(lp);
      const bay = makeBatch(planeGeo, paintWhite, false);
      let n = 0;
      for (const rz of [-13, 13]) {
        for (let k = -5; k <= 5; k++) {
          put(bay, b.cx + k * 3, WALK_H + 0.05, b.cz + rz, 0.1, 1, 5);
          if (k < 5) put(bay, b.cx + k * 3 + 1.5, WALK_H + 0.05, b.cz + rz + 1.8, 3, 1, 0.1);
          if (n < 22 && Math.abs(k) < 5 && srng() < 0.72) {
            parkedCarSpots.push([b.cx + k * 3, b.cz + rz + (rz < 0 ? -2.6 : 2.6), 0]);
            n++;
          }
        }
        put(bay, b.cx, WALK_H + 0.05, b.cz + rz + 3.6, 33, 1, 0.12);
      }
      batches.push(bay);
      /* service building in the middle of the lot */
      addBuilding(b.cx, b.cz, Math.min(26, b.w - 30), Math.min(18, b.d - 40), sR(7, 11), "corrugated", b, false);
      continue;
    }

    /* --- street wall: four frontage strips plus interior mass --- */
    const band = b.type === "outer" ? sR(10, 14) : sR(14, 20);
    const frontZ = band;
    const frontX = band;
    const units: { cx: number; cz: number; w: number; d: number; h: number; style: FacadeStyle; podium: boolean }[] = [];

    const styleFor = (): FacadeStyle => {
      if (b.type === "downtown") return srng() < 0.55 ? "glass" : "panel";
      if (b.type === "midtown") return pick<FacadeStyle>(["tile", "concrete", "panel", "glass"]);
      return pick<FacadeStyle>(["brick", "brick", "concrete", "corrugated", "panel"]);
    };
    const heightFor = () => {
      if (b.type === "downtown") return srng() < 0.25 ? sR(72, 118) : sR(34, 62);
      if (b.type === "midtown") return sR(15, 34);
      return sR(7, 16);
    };

    /* north & south strips (facing the x-direction streets) */
    for (const side of [1, -1]) {
      const zEdge = side > 0 ? b.z1 - inset : b.z0 + inset;
      const zc = zEdge - side * frontZ / 2;
      let x = b.x0 + inset;
      while (x < b.x1 - inset - 6) {
        const w = Math.min(sR(9, 20), b.x1 - inset - x);
        if (w < 6) break;
        const h = heightFor();
        units.push({ cx: x + w / 2, cz: zc, w: w - 0.6, d: frontZ - 0.9, h, style: styleFor(), podium: true });
        x += w + sR(0.4, 2.4);
      }
    }
    /* east & west strips */
    for (const side of [1, -1]) {
      const xEdge = side > 0 ? b.x1 - inset : b.x0 + inset;
      const xc = xEdge - side * frontX / 2;
      let z = b.z0 + inset + 1;
      while (z < b.z1 - inset - frontZ - 4) {
        const d = Math.min(sR(9, 18), b.z1 - inset - z);
        if (d < 6) break;
        const h = heightFor();
        units.push({ cx: xc, cz: z + d / 2, w: frontX - 0.9, d: d - 0.6, h, style: styleFor(), podium: true });
        z += d + sR(0.4, 2.4);
      }
    }

    /* interior mass: towers downtown, low infill elsewhere */
    const ix0 = b.x0 + inset + frontX;
    const ix1 = b.x1 - inset - frontX;
    const iz0 = b.z0 + inset + frontZ;
    const iz1 = b.z1 - inset - frontZ;
    if (ix1 - ix0 > 16 && iz1 - iz0 > 16) {
      const iw = ix1 - ix0;
      const id = iz1 - iz0;
      if (b.type === "downtown") {
        const cols = iw > 40 ? 2 : 1;
        const rows = id > 40 ? 2 : 1;
        for (let ci = 0; ci < cols; ci++) {
          for (let cj = 0; cj < rows; cj++) {
            const w = iw / cols - sR(2, 6);
            const d = id / rows - sR(2, 6);
            const cx = ix0 + (iw / cols) * (ci + 0.5);
            const cz = iz0 + (id / rows) * (cj + 0.5);
            let h = sR(60, 128);
            addBuilding(cx, cz, w, d, h, srng() < 0.6 ? "glass" : "panel", b, false);
            /* setback tower crown */
            if (h > 80) {
              h = sR(14, 30);
              addBuilding(cx, cz, w * 0.62, d * 0.62, h, "glass", b, false);
            }
          }
        }
      } else {
        const cx = (ix0 + ix1) / 2;
        const cz = (iz0 + iz1) / 2;
        addBuilding(cx, cz, iw - sR(2, 6), id - sR(2, 6), heightFor() * 1.15, styleFor(), b, b.type === "midtown");
      }
    }

    for (const u of units) addBuilding(u.cx, u.cz, u.w, u.d, u.h, u.style, b, u.podium);
  }

  /* ------------------------------------------------------- kerbside parking */
  const nearJunction = (v: number) => STREETS.some((s) => Math.abs(v - s) < 18);
  for (const c of STREETS) {
    for (let d = -CITY_R + 40; d <= CITY_R - 40; d += 15) {
      if (nearJunction(d) || srng() < 0.45) continue;
      const s = srng() < 0.5 ? 1 : -1;
      /* both sides of every street, in the parking lane inside the edge line */
      parkedCarSpots.push([c + s * 5.2, d, s > 0 ? Math.PI : 0]);
      parkedCarSpots.push([d, c + s * 5.2, s > 0 ? -Math.PI / 2 : Math.PI / 2]);
    }
  }

  /* -------------------------------------------------------- road markings */
  const J = STREETS.length;
  const isJunction = (v: number) => STREETS.some((s) => Math.abs(v - s) < 11);

  for (let si = 0; si < J; si++) {
    const c = STREETS[si];
    /* segments between junctions */
    for (let k = 0; k < J + 1; k++) {
      const a = k === 0 ? -CITY_R : STREETS[k - 1] + 12;
      const bEnd = k === J ? CITY_R : STREETS[k] - 12;
      if (bEnd - a < 6) continue;
      const len = bEnd - a;
      const mid = (a + bEnd) / 2;
      for (const s of [1, -1]) {
        /* double yellow centre line */
        put(paintYellowBatch, c + s * 0.22, 0.05, mid, 0.14, 1, len);
        /* solid edge / parking lane line */
        put(paintWhiteBatch, c + s * 4.7, 0.05, mid, 0.12, 1, len);
        /* outer edge line */
        put(paintWhiteBatch, c + s * 6.5, 0.05, mid, 0.12, 1, len);
      }
      for (const s of [1, -1]) {
        put(paintWhiteBatch, mid, 0.05, c + s * 0.22, len, 1, 0.14);
        put(paintWhiteBatch, mid, 0.05, c + s * 4.7, len, 1, 0.12);
        put(paintWhiteBatch, mid, 0.05, c + s * 6.5, len, 1, 0.12);
      }
    }
    /* centre dashes between the solid lines for a broken look near junctions */
    for (let z = -CITY_R; z < CITY_R; z += 8) {
      if (isJunction(z)) continue;
      put(paintYellowBatch, c, 0.05, z + 2, 0.12, 1, 3.2);
      put(paintYellowBatch, c, 0.05, z + 2, 0.12, 1, 3.2);
      put(paintWhiteBatch, z + 2, 0.05, c, 3.2, 1, 0.12);
    }
  }

  /* junctions: crosswalks, stop bars, tactile pads, turn arrows */
  for (let ai = 0; ai < J; ai++) {
    for (let bi = 0; bi < J; bi++) {
      const cx = STREETS[ai];
      const cz = STREETS[bi];
      junctionList.push({ ix: ai, iz: bi });
      for (const s of [1, -1]) {
        /* crosswalk ladders on both streets, both sides */
        for (let k = -3; k <= 3; k++) {
          put(paintWhiteBatch, cx + k * 1.7, 0.052, cz + s * 9.2, 0.6, 1, 2.8);
          put(paintWhiteBatch, cx + s * 9.2, 0.052, cz + k * 1.7, 2.8, 1, 0.6);
        }
        /* stop bars on the approach lanes */
        put(paintWhiteBatch, cx - 3.5, 0.053, cz - s * 11.6, 6.4, 1, 0.55);
        put(paintWhiteBatch, cx + 3.5, 0.053, cz + s * 11.6, 6.4, 1, 0.55);
        put(paintWhiteBatch, cx + s * 11.6, 0.053, cz + 3.5, 0.55, 1, 6.4);
        put(paintWhiteBatch, cx - s * 11.6, 0.053, cz - 3.5, 0.55, 1, 6.4);
        /* kerb ramps + tactile paving at the corners */
        for (const t of [1, -1]) {
          put(tactileBatch, cx + s * 10.2, WALK_H + 0.06, cz + t * 10.2, 1.6, 1, 1.6);
          put(tactileBatch, cx + s * 10.2, WALK_H + 0.06, cz + t * 11.4, 1.6, 1, 0.5);
          put(tactileBatch, cx + s * 11.4, WALK_H + 0.06, cz + t * 10.2, 0.5, 1, 1.6);
        }
        /* keep-clear chevrons in the junction box */
        put(paintYellowBatch, cx + s * 2.4, 0.051, cz, 0.3, 1, 17, 0);
        put(paintYellowBatch, cx, 0.051, cz + s * 2.4, 17, 1, 0.3, 0);
      }
    }
  }

  /* bus lane strips along the two central boulevards */
  for (const c of [110, -110]) {
    put(paintBlueBatch, c - 5.6, 0.05, 0, 1.6, 1, 2 * CITY_R - 40, 0);
    put(paintBlueBatch, c + 5.6, 0.05, 0, 1.6, 1, 2 * CITY_R - 40, 0);
    put(paintBlueBatch, 0, 0.05, c - 5.6, 2 * CITY_R - 40, 1, 1.6, 0);
    put(paintBlueBatch, 0, 0.05, c + 5.6, 2 * CITY_R - 40, 1, 1.6, 0);
  }

  /* arrows on the approach to the plaza */
  for (const [ax, az, yaw] of [[0, 46, Math.PI], [0, -46, 0], [46, 0, Math.PI / 2], [-46, 0, -Math.PI / 2]] as [number, number, number][]) {
    for (const off of [[-3.5, 0], [3.5, 0]]) {
      put(laneArrowBatch, ax + off[0], 0.06, az + off[1], 0.5, 1, 2.4, yaw);
      put(laneArrowBatch, ax + off[0], 0.06, az + off[1] + 1.6, 3.2, 1, 0.5, yaw);
    }
  }

  /* asphalt patches, tar seams, manholes, puddles */
  for (let i = 0; i < 260; i++) {
    const vertical = srng() < 0.5;
    const c = pick(STREETS);
    const along = sR(-CITY_R + 20, CITY_R - 20);
    const x = vertical ? c + sR(-6, 6) : along;
    const z = vertical ? along : c + sR(-6, 6);
    if (srng() < 0.55) {
      put(patchBatch, x, 0.035, z, sR(1.5, 5), 1, sR(1.5, 6), sR(0, 3.14));
    } else {
      put(tarBatch, x, 0.036, z, sR(0.2, 0.35), 1, sR(4, 14), sR(0, 3.14));
    }
  }
  for (let i = 0; i < 170; i++) {
    const vertical = srng() < 0.5;
    const c = pick(STREETS);
    const along = sR(-CITY_R + 10, CITY_R - 10);
    const x = vertical ? c + sR(-5, 5) : along;
    const z = vertical ? along : c + sR(-5, 5);
    put(manholeBatch, x, 0.055, z, 1.1, 1, 1.1);
  }
  for (let i = 0; i < 150; i++) {
    const vertical = srng() < 0.5;
    const c = pick(STREETS);
    const along = sR(-CITY_R + 30, CITY_R - 30);
    const x = vertical ? c + sR(-6, 0) : along;
    const z = vertical ? along : c + sR(-6, 0);
    put(puddleBatch, x, 0.042, z, sR(1.6, 5), 1, sR(1.6, 4.5), sR(0, 3.14));
  }

  /* -------------------------------------------------- signals & street lights */
  const CY = 0.0;
  for (let jIdx = 0; jIdx < junctionList.length; jIdx++) {
    const { ix, iz } = junctionList[jIdx];
    const cx = STREETS[ix];
    const cz = STREETS[iz];
    /* corners: NB, SB, EB, WB each with a pole, mast arm and head */
    const corners: { px: number; pz: number; armAxis: "x" | "z"; armSign: number; armLen: number; faceYaw: number }[] = [
      { px: cx - 10.6, pz: cz - 10.6, armAxis: "x", armSign: 1, armLen: 7, faceYaw: Math.PI },
      { px: cx + 10.6, pz: cz + 10.6, armAxis: "x", armSign: -1, armLen: 7, faceYaw: 0 },
      { px: cx - 10.6, pz: cz + 10.6, armAxis: "z", armSign: -1, armLen: 7, faceYaw: Math.PI / 2 },
      { px: cx + 10.6, pz: cz - 10.6, armAxis: "z", armSign: 1, armLen: 7, faceYaw: -Math.PI / 2 },
    ];
    for (let k = 0; k < 4; k++) {
      const c = corners[k];
      const H = 6.2;
      put(poleBatch, c.px, CY, c.pz, 0.24, H, 0.24);
      /* arm reaches over the approach lane */
      if (c.armAxis === "x") {
        put(armBatch, c.px + c.armSign * c.armLen / 2, CY + H - 0.15, c.pz, c.armLen, 0.16, 0.16);
      } else {
        put(armBatch, c.px, CY + H - 0.15, c.pz + c.armSign * c.armLen / 2, 0.16, 0.16, c.armLen);
      }
      const hx = c.armAxis === "x" ? c.px + c.armSign * (c.armLen - 0.6) : c.px;
      const hz = c.armAxis === "z" ? c.pz + c.armSign * (c.armLen - 0.6) : c.pz;
      put(headBatch, hx, CY + H - 1.5, hz, 0.42, 1.35, 0.36, c.faceYaw);
      /* three lenses per head, filled in junction order for phase updates */
      const lensY = [CY + H - 0.95, CY + H - 1.5, CY + H - 2.05];
      const lensX = hx + Math.sin(c.faceYaw) * 0.22;
      const lensZ = hz + Math.cos(c.faceYaw) * 0.22;
      for (let li = 0; li < 3; li++) {
        const mat = new THREE.Matrix4();
        const pos = new THREE.Vector3(lensX, lensY[li], lensZ);
        const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, c.faceYaw, 0));
        mat.compose(pos, quat, new THREE.Vector3(1, 1, 1));
        (li === 0 ? redLenses : li === 1 ? amberLenses : greenLenses).push(mat);
      }
      /* speed / one-way plates on some poles */
      if ((jIdx + k) % 5 === 0) {
        put(signPoleBatch, c.px, CY, c.pz + 0.5, 0.1, 3.2, 0.1);
        put(signPlateBatch[0], c.px, CY + 3.4, c.pz + 0.5, 1, 1, 1, c.faceYaw + Math.PI);
      } else if ((jIdx + k) % 7 === 0) {
        put(signPoleBatch, c.px, CY, c.pz + 0.5, 0.1, 3.0, 0.1);
        put(signPlateBatch[1], c.px, CY + 3.2, c.pz + 0.5, 1, 1, 1, c.faceYaw + Math.PI);
      }
    }
  }
  /* street lights every other block edge */
  for (let si = 0; si < J; si++) {
    const c = STREETS[si];
    for (let along = -520; along <= 520; along += 80) {
      if (STREETS.some((s) => Math.abs(along - s) < 16)) continue;
      for (const s of [1, -1]) {
        const x = c + s * 8.2;
        put(poleBatch, x, WALK_H, along, 0.22, 7, 0.22);
        put(armBatch, x - s * 0.9, WALK_H + 6.9, along, 1.8, 0.12, 0.12);
        put(lampHeadBatch, x - s * 1.7, WALK_H + 6.82, along, 0.7, 0.14, 0.36);
        put(lampGlowBatch, x - s * 1.7, WALK_H + 6.7, along, 2.6, 1.1, 2.6);
        lampPoints.push(new THREE.Vector3(x - s * 1.7, WALK_H + 6.8, along));
      }
      const zc = c;
      const x2 = along;
      for (const s of [1, -1]) {
        put(poleBatch, x2, WALK_H, zc + s * 8.2, 0.22, 7, 0.22);
        put(armBatch, x2, WALK_H + 6.9, zc + s * 8.2 - s * 0.9, 0.12, 0.12, 1.8);
        put(lampHeadBatch, x2, WALK_H + 6.82, zc + s * 8.2 - s * 1.7, 0.36, 0.14, 0.7);
        put(lampGlowBatch, x2, WALK_H + 6.7, zc + s * 8.2 - s * 1.7, 2.6, 1.1, 2.6);
        lampPoints.push(new THREE.Vector3(x2, WALK_H + 6.8, zc + s * 8.2 - s * 1.7));
      }
    }
  }

  /* ------------------------------------------------------ street furniture */
  /*
   * Real pieces, part by part. A bench is a run of slats on cast-iron ends
   * with an armrest; a bin has a foot, a tapered barrel, a rim and a domed
   * lid; a shelter has posts, glazing, a fascia, a bench and a timetable; a
   * bicycle has two wheels, a frame, a saddle and bars. Placement is
   * deliberate as well — benches face the road, hydrants and bollards stand
   * at the kerb, trees keep a rhythm, racks sit outside doors, scaffolding
   * climbs a frontage, cafés terrace onto the sunny side of a block. Anything
   * substantial is filed as a solid box, so you hit it instead of driving
   * through it.
   */
  const skin = makePartCache(batches);
  const slat = skin(boxGeo, woodMat);
  const ironBox = skin(boxGeo, ironMat);
  const ironCyl = skin(cylGeo, ironMat);
  const ironTaper = skin(taperGeo, ironMat);
  const ironBall = skin(sphereGeo, ironMat);
  const ironHoop = skin(hoopGeo, ironMat);
  const steelBox = skin(boxGeo, steelMat);
  const steelCyl = skin(cylGeo, steelMat);
  const paneBox = skin(boxGeo, paneMat);
  const netBox = skin(boxGeo, netMat);
  const plasticBox = skin(boxGeo, plasticMat);
  const plasticCyl = skin(cylGeo, plasticMat);
  const plasticTaper = skin(taperGeo, plasticMat);
  const plasticDome = skin(capGeo, plasticMat);
  const plasticBlob = skin(blobGeo, plasticMat);
  const rubberRing = skin(ringGeo2, rubberMat);
  const redBox = skin(boxGeo, redMat);
  const redCyl = skin(cylGeo, redMat);
  const redDome = skin(capGeo, redMat);
  const brassBox = skin(boxGeo, brassMat);
  const darkBox = skin(boxGeo, darkMetalMat);
  const darkCyl = skin(cylGeo, darkMetalMat);
  const canvasBox = skin(boxGeo, canvasMat);
  const canvasCone = skin(coneGeo, canvasMat);
  const stoneBox = skin(boxGeo, stoneMat);
  const stoneCyl = skin(cylGeo, stoneMat);
  const stoneShaft = skin(taperGeo, stoneMat);
  const stoneBall = skin(sphereGeo, stoneMat);
  const waterDisc = skin(discGeo, waterMat);
  const soilBox = skin(boxGeo, soilMat);
  const bloom = skin(blobGeo, flowerMat);
  const leafBlob = skin(blobGeo, leafMat);
  const whiteBand = skin(cylGeo, paintWhite);
  const concreteBox = skin(boxGeo, concreteMat);
  const greenBox = skin(boxGeo, greenMat);
  const lampBox = skin(boxGeo, lampMaterial, true);
  const bannerPlate = skin(new THREE.PlaneGeometry(0.62, 1.9), new THREE.MeshStandardMaterial({
    map: canvasTex(96, 288, (x, w, h) => {
      x.fillStyle = "#14161a";
      x.fillRect(0, 0, w, h);
      x.fillStyle = "#ff6a2a";
      x.fillRect(0, 0, w, 14);
      x.fillRect(0, h - 14, w, 14);
      x.save();
      x.translate(w / 2, h / 2 - 30);
      x.rotate(-Math.PI / 2);
      x.fillStyle = "#ece9e2";
      x.font = "700 34px Rajdhani, system-ui, sans-serif";
      x.textAlign = "center";
      x.textBaseline = "middle";
      x.fillText("APEX CITY", 0, 0);
      x.fillStyle = "#ff6a2a";
      x.font = "500 15px 'IBM Plex Mono', monospace";
      x.fillText("OPEN CITY DRIVING", 0, 26);
      x.restore();
    }, aniso),
    roughness: 0.72, side: THREE.DoubleSide, envMapIntensity: 0.3,
  }), false);
  const busStopPlate = skin(new THREE.PlaneGeometry(0.55, 0.55), new THREE.MeshStandardMaterial({
    map: canvasTex(128, 128, (x, w, h) => {
      x.fillStyle = "#f2efe6";
      x.fillRect(0, 0, w, h);
      x.fillStyle = "#1d3f78";
      x.fillRect(6, 6, w - 12, h - 12);
      x.fillStyle = "#f2efe6";
      x.fillRect(26, 34, 76, 50);
      x.fillStyle = "#1d3f78";
      x.fillRect(32, 42, 28, 18);
      x.fillRect(68, 42, 28, 18);
      x.fillStyle = "#f2efe6";
      x.beginPath();
      x.arc(44, 90, 9, 0, Math.PI * 2);
      x.arc(84, 90, 9, 0, Math.PI * 2);
      x.fill();
    }, aniso),
    roughness: 0.55, side: THREE.DoubleSide,
  }), false);

  /** A part in a piece's own frame: u along the piece, v across it, h above its base. */
  function at(b: Batch, x: number, z: number, yaw: number, u: number, v: number, h: number, sx: number, sy: number, sz: number, base = WALK_H) {
    const c = Math.cos(yaw);
    const s = Math.sin(yaw);
    put(b, x + u * c + v * s, base + h, z - u * s + v * c, sx, sy, sz, yaw);
  }
  /** Same, for the flat plates (signs, banners) whose origin is their centre. */
  function plate(b: Batch, x: number, z: number, yaw: number, u: number, v: number, h: number, sc = 1, base = WALK_H) {
    const c = Math.cos(yaw);
    const s = Math.sin(yaw);
    put(b, x + u * c + v * s, base + h, z - u * s + v * c, sc, sc, sc, yaw);
  }
  /* Furniture stands on the pavement apron, which reaches KERB_APRON past
     the block edge, so the block to file it against is the one the apron
     reaches back to — the same rule cityH uses. */
  const hostBlock = (x: number, z: number) =>
    blockAt(x, z) ??
    blockAt(x - KERB_APRON, z) ??
    blockAt(x + KERB_APRON, z) ??
    blockAt(x, z - KERB_APRON) ??
    blockAt(x, z + KERB_APRON);
  /** Files a piece as something you can hit, in the list the buildings use. */
  function solid(x: number, z: number, hw: number, hd: number, top: number) {
    const b = hostBlock(x, z);
    if (b) b.blds.push({ x, z, hx: hw, hz: hd, top });
  }
  /** The axis-aligned footprint of a piece running along `yaw`. */
  function footprint(x: number, z: number, halfLong: number, halfWide: number, yaw: number, top: number) {
    const cu = Math.abs(Math.cos(yaw));
    const su = Math.abs(Math.sin(yaw));
    const b = hostBlock(x, z);
    if (b) b.blds.push({ x, z, hx: halfLong * cu + halfWide * su, hz: halfLong * su + halfWide * cu, top });
  }

  /* --- bench: four seat slats, three back slats, cast-iron ends --------- */
  function benchAt(x: number, z: number, yaw: number, len = 1.9, base = WALK_H) {
    for (let i = 0; i < 4; i++) at(slat, x, z, yaw, 0, -0.185 + i * 0.117, 0.42, len, 0.05, 0.105, base);
    for (let i = 0; i < 3; i++) at(slat, x, z, yaw, 0, -0.45 + i * 0.025, 0.6 + i * 0.19, len, 0.085, 0.045, base);
    for (const u of [-len / 2 + 0.07, len / 2 - 0.07]) {
      at(ironBox, x, z, yaw, u, 0.14, 0, 0.055, 0.42, 0.05, base);
      at(ironBox, x, z, yaw, u, -0.45, 0, 0.055, 1.06, 0.05, base);
      at(ironBox, x, z, yaw, u, -0.17, 0.37, 0.055, 0.05, 0.58, base);
      at(ironBox, x, z, yaw, u, -0.3, 0.61, 0.05, 0.05, 0.32, base);
    }
    footprint(x, z, len / 2 + 0.06, 0.5, yaw, base + 1.1);
  }

  /* --- litter bin: foot, tapered barrel, rim, domed lid, mouth ---------- */
  function binAt(x: number, z: number, base = WALK_H) {
    at(ironCyl, x, z, 0, 0, 0, 0, 0.5, 0.06, 0.5, base);
    at(plasticTaper, x, z, 0, 0, 0, 0.06, 0.52, 0.76, 0.52, base);
    at(ironCyl, x, z, 0, 0, 0, 0.82, 0.56, 0.08, 0.56, base);
    at(plasticDome, x, z, 0, 0, 0, 0.9, 0.54, 0.22, 0.54, base);
    at(plasticBox, x, z, 0, 0, 0.2, 0.94, 0.28, 0.1, 0.2, base);
    solid(x, z, 0.32, 0.32, base + 1.1);
  }

  /* --- fire hydrant: flange, barrel, collar, bonnet, wing caps, nut ----- */
  function hydrantAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(redCyl, x, z, yaw, 0, 0, 0, 0.32, 0.07, 0.32, base);
    at(redCyl, x, z, yaw, 0, 0, 0.07, 0.24, 0.5, 0.24, base);
    at(redCyl, x, z, yaw, 0, 0, 0.57, 0.34, 0.1, 0.34, base);
    at(redDome, x, z, yaw, 0, 0, 0.67, 0.3, 0.2, 0.3, base);
    at(brassBox, x, z, yaw, 0, 0, 0.87, 0.1, 0.07, 0.1, base);
    for (const u of [-0.17, 0.17]) at(brassBox, x, z, yaw, u, 0, 0.38, 0.09, 0.15, 0.15, base);
    solid(x, z, 0.22, 0.22, base + 0.9);
  }

  /* --- cast-iron bollard: base, tapered post, reflector, collar, ball --- */
  function bollardAt(x: number, z: number, base = WALK_H) {
    at(ironCyl, x, z, 0, 0, 0, 0, 0.24, 0.05, 0.24, base);
    at(ironTaper, x, z, 0, 0, 0, 0.05, 0.27, 0.8, 0.27, base);
    at(whiteBand, x, z, 0, 0, 0, 0.7, 0.24, 0.08, 0.24, base);
    at(ironCyl, x, z, 0, 0, 0, 0.85, 0.31, 0.06, 0.31, base);
    at(ironBall, x, z, 0, 0, 0, 0.91, 0.25, 0.25, 0.25, base);
    solid(x, z, 0.17, 0.17, base + 1.05);
  }

  /* --- planter: trough, coping, soil, clipped hedge, flowers ------------ */
  function planterAt(x: number, z: number, yaw: number, w = 1.5, base = WALK_H) {
    const dep = w * 0.62;
    at(concreteBox, x, z, yaw, 0, 0, 0, w, 0.5, dep, base);
    at(concreteBox, x, z, yaw, 0, 0, 0.5, w + 0.12, 0.09, dep + 0.12, base);
    at(soilBox, x, z, yaw, 0, 0, 0.56, w - 0.16, 0.04, dep - 0.16, base);
    for (let i = 0; i < 3; i++) at(leafBlob, x, z, yaw, (i - 1) * w * 0.26, 0, 0.6, 0.72, 0.58, 0.5, base);
    at(leafBlob, x, z, yaw, 0, 0, 0.78, w * 0.86, 0.46, dep * 0.8, base);
    for (let i = 0; i < 3; i++) at(bloom, x, z, yaw, (i - 1) * 0.34, 0.08, 0.86, 0.17, 0.13, 0.17, base);
    footprint(x, z, w / 2 + 0.06, dep / 2 + 0.06, yaw, base + 0.62);
  }

  /* --- parking meter: base, post, head, display, slot, crown ------------ */
  function meterAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(ironCyl, x, z, yaw, 0, 0, 0, 0.2, 0.09, 0.2, base);
    at(ironCyl, x, z, yaw, 0, 0, 0.09, 0.1, 1.02, 0.1, base);
    at(steelBox, x, z, yaw, 0, 0, 1.11, 0.26, 0.42, 0.18, base);
    at(darkBox, x, z, yaw, 0, 0.1, 1.24, 0.16, 0.13, 0.02, base);
    at(brassBox, x, z, yaw, 0.07, 0.1, 1.42, 0.04, 0.07, 0.02, base);
    at(steelBox, x, z, yaw, 0, 0, 1.53, 0.3, 0.06, 0.22, base);
    solid(x, z, 0.17, 0.17, base + 1.45);
  }

  /* --- sign on a post: post, clamp, plate ------------------------------- */
  function signAt(x: number, z: number, yaw: number, which: number, base = WALK_H) {
    at(steelCyl, x, z, yaw, 0, 0, 0, 0.09, 2.95, 0.09, base);
    at(darkBox, x, z, yaw, 0, 0.06, 2.62, 0.15, 0.06, 0.06, base);
    plate(signPlateBatch[which], x, z, yaw, 0, 0.1, 2.82, 1, base);
    solid(x, z, 0.14, 0.14, base + 2.95);
  }

  /* --- utility cabinet: plinth, body, door, vent, lock ------------------ */
  function cabinetAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(concreteBox, x, z, yaw, 0, 0, 0, 1.05, 0.1, 0.6, base);
    at(greenBox, x, z, yaw, 0, 0, 0.1, 0.95, 1.35, 0.5, base);
    at(darkBox, x, z, yaw, 0, 0.26, 0.24, 0.78, 1.05, 0.02, base);
    at(darkBox, x, z, yaw, 0, 0.26, 0.1, 0.9, 0.05, 0.03, base);
    at(brassBox, x, z, yaw, 0.38, 0.28, 0.72, 0.06, 0.1, 0.03, base);
    footprint(x, z, 0.5, 0.32, yaw, base + 1.45);
  }

  /* --- post box: plinth, letter drum, cap, slot, plate ------------------ */
  function postBoxAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(concreteBox, x, z, yaw, 0, 0, 0, 0.6, 0.08, 0.5, base);
    at(redBox, x, z, yaw, 0, 0, 0.08, 0.52, 0.95, 0.42, base);
    at(redDome, x, z, yaw, 0, 0, 1.03, 0.52, 0.26, 0.42, base);
    at(darkBox, x, z, yaw, 0, 0.22, 0.82, 0.3, 0.05, 0.02, base);
    at(brassBox, x, z, yaw, 0, 0.22, 0.42, 0.34, 0.14, 0.02, base);
    footprint(x, z, 0.3, 0.26, yaw, base + 1.3);
  }

  /* --- parking ticket machine ------------------------------------------- */
  function ticketAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(concreteBox, x, z, yaw, 0, 0, 0, 0.5, 0.1, 0.4, base);
    at(steelBox, x, z, yaw, 0, 0, 0.1, 0.4, 1.45, 0.3, base);
    at(darkBox, x, z, yaw, 0, 0.16, 1.05, 0.24, 0.3, 0.03, base);
    at(brassBox, x, z, yaw, -0.1, 0.16, 0.86, 0.12, 0.04, 0.03, base);
    at(steelBox, x, z, yaw, 0, 0, 1.55, 0.46, 0.08, 0.38, base);
    footprint(x, z, 0.24, 0.2, yaw, base + 1.6);
  }

  /* --- telephone kiosk: frame, three glazed sides, roof, crown ---------- */
  function phoneBoxAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(concreteBox, x, z, yaw, 0, 0, 0, 1.1, 0.12, 1.1, base);
    for (const u of [-0.45, 0.45]) for (const v of [-0.45, 0.45]) at(redBox, x, z, yaw, u, v, 0.12, 0.13, 2.2, 0.13, base);
    for (const v of [-0.45, 0.45]) at(redBox, x, z, yaw, 0, v, 2.32, 1.04, 0.1, 0.13, base);
    at(redBox, x, z, yaw, -0.45, 0, 2.32, 0.13, 0.1, 0.9, base);
    at(paneBox, x, z, yaw, 0, 0.45, 0.32, 0.82, 1.9, 0.04, base);
    at(paneBox, x, z, yaw, 0, -0.45, 0.32, 0.82, 1.9, 0.04, base);
    at(paneBox, x, z, yaw, -0.45, 0, 0.32, 0.04, 1.9, 0.82, base);
    at(redBox, x, z, yaw, 0, 0.45, 2.22, 0.94, 0.12, 0.1, base);
    at(redDome, x, z, yaw, 0, 0, 2.42, 1.0, 0.3, 1.0, base);
    at(brassBox, x, z, yaw, 0, 0, 2.72, 0.24, 0.1, 0.24, base);
    at(greenBox, x, z, yaw, 0, -0.38, 0.3, 0.5, 0.5, 0.06, base);
    solid(x, z, 0.62, 0.62, base + 2.7);
  }

  /* --- newsstand kiosk: plinth, body, glazing, counter, canopy ---------- */
  function kioskAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(concreteBox, x, z, yaw, 0, 0, 0, 2.5, 0.14, 2.1, base);
    at(greenBox, x, z, yaw, 0, 0, 0.14, 2.4, 1.05, 2.0, base);
    at(paneBox, x, z, yaw, 0, 1.0, 1.19, 2.2, 1.15, 0.06, base);
    at(paneBox, x, z, yaw, 1.2, 0, 1.19, 0.06, 1.15, 1.7, base);
    at(greenBox, x, z, yaw, 0, 1.05, 0.95, 2.44, 0.28, 0.24, base);
    at(canvasBox, x, z, yaw, 0, 1.22, 2.34, 2.9, 0.07, 0.7, base);
    at(darkBox, x, z, yaw, 0, 1.16, 2.46, 2.6, 0.14, 0.1, base);
    at(brassBox, x, z, yaw, 0, 1.08, 1.05, 0.5, 0.14, 0.03, base);
    footprint(x, z, 1.25, 1.05, yaw, base + 2.5);
  }

  /* --- bus shelter: posts, roof, fascia, glazing, bench, panel, flag ---- */
  function shelterAt(x: number, z: number, yaw: number, base = WALK_H) {
    for (const u of [-2.1, 2.1]) {
      for (const v of [-0.85, 0.85]) at(ironBox, x, z, yaw, u, v, 0, 0.12, 2.42, 0.1, base);
      at(ironBox, x, z, yaw, u, 0, 2.38, 0.12, 0.1, 1.8, base);
    }
    at(darkBox, x, z, yaw, 0, 0, 2.46, 4.5, 0.12, 1.95, base);
    at(steelBox, x, z, yaw, 0, 0.88, 2.3, 4.4, 0.22, 0.08, base);
    at(steelBox, x, z, yaw, 0, -0.88, 2.3, 4.4, 0.22, 0.08, base);
    at(paneBox, x, z, yaw, 0, 0.86, 0.3, 4.1, 1.95, 0.05, base);
    for (const u of [-1.4, 0, 1.4]) at(ironBox, x, z, yaw, u, 0.86, 0.3, 0.07, 1.95, 0.07, base);
    at(paneBox, x, z, yaw, -2.1, 0, 0.3, 0.05, 1.95, 1.6, base);
    for (let i = 0; i < 3; i++) at(slat, x, z, yaw, 0, 0.36 + i * 0.13, 0.5, 3.3, 0.05, 0.11, base);
    for (const u of [-1.5, 0, 1.5]) at(ironBox, x, z, yaw, u, 0.4, 0, 0.05, 0.5, 0.1, base);
    at(greenBox, x, z, yaw, -2.0, 0, 1.45, 0.06, 0.5, 0.42, base);
    at(plasticTaper, x, z, yaw, 2.75, 0.7, 0, 0.42, 0.6, 0.42, base);
    at(steelCyl, x, z, yaw, -2.9, 0.95, 0, 0.09, 3.2, 0.09, base);
    plate(busStopPlate, x, z, yaw, -2.9, 0.95, 2.55, 1, base);
    footprint(x, z, 2.3, 1.0, yaw, base + 2.5);
  }

  /* --- pedestrian guard rail: posts, top rail, rails, infill ----------- */
  function railingAt(x: number, z: number, yaw: number, len: number, base = WALK_H) {
    const n = Math.max(2, Math.round(len / 1.8));
    for (let i = 0; i <= n; i++) at(steelCyl, x, z, yaw, -len / 2 + (len * i) / n, 0, 0, 0.07, 0.95, 0.07, base);
    at(steelBox, x, z, yaw, 0, 0, 0.87, len, 0.06, 0.06, base);
    for (let k = 1; k <= 2; k++) at(steelBox, x, z, yaw, 0, 0, 0.25 + k * 0.21, len, 0.03, 0.03, base);
    const bars = Math.max(3, Math.round(len / 0.6));
    for (let i = 0; i < bars; i++) at(steelBox, x, z, yaw, -len / 2 + (len * (i + 0.5)) / bars, 0, 0.1, 0.025, 0.72, 0.025, base);
    footprint(x, z, len / 2, 0.14, yaw, base + 0.95);
  }

  /* --- bicycle: two wheels, a frame, saddle and bars ------------------- */
  function bikeAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(rubberRing, x, z, yaw, 0.55, 0, 0.34, 0.68, 0.68, 0.68, base);
    at(rubberRing, x, z, yaw, -0.55, 0, 0.34, 0.68, 0.68, 0.68, base);
    at(steelCyl, x, z, yaw, 0.55, 0, 0.33, 0.06, 0.05, 0.06, base);
    at(steelCyl, x, z, yaw, -0.55, 0, 0.33, 0.06, 0.05, 0.06, base);
    at(steelBox, x, z, yaw, 0.02, 0, 0.62, 0.8, 0.035, 0.035, base);
    at(steelBox, x, z, yaw, -0.28, 0, 0.6, 0.035, 0.44, 0.035, base);
    at(steelBox, x, z, yaw, 0.24, 0, 0.45, 0.035, 0.56, 0.035, base);
    at(steelBox, x, z, yaw, 0.55, 0, 0.5, 0.035, 0.62, 0.035, base);
    at(steelBox, x, z, yaw, -0.28, 0, 0.4, 0.035, 0.4, 0.035, base);
    at(steelBox, x, z, yaw, 0.62, 0, 0.9, 0.035, 0.16, 0.035, base);
    at(steelBox, x, z, yaw, 0.55, 0, 0.95, 0.04, 0.04, 0.5, base);
    at(darkBox, x, z, yaw, -0.3, 0, 0.94, 0.3, 0.05, 0.13, base);
    at(steelBox, x, z, yaw, 0.3, 0, 1.08, 0.04, 0.28, 0.04, base);
  }

  /* --- bike rack: Sheffield hoops on base plates ----------------------- */
  function rackAt(x: number, z: number, yaw: number, n = 3, base = WALK_H) {
    for (let i = 0; i < n; i++) {
      const u = (i - (n - 1) / 2) * 0.75;
      at(ironHoop, x, z, yaw, u, 0, 0, 0.9, 1.5, 0.9, base);
      at(darkBox, x, z, yaw, u, 0, 0, 0.16, 0.03, 0.16, base);
    }
    footprint(x, z, ((n - 1) * 0.75) / 2 + 0.45, 0.3, yaw, base + 0.8);
  }

  /* --- café furniture -------------------------------------------------- */
  function tableAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(ironCyl, x, z, yaw, 0, 0, 0, 0.5, 0.05, 0.5, base);
    at(ironCyl, x, z, yaw, 0, 0, 0.05, 0.09, 0.68, 0.09, base);
    at(slat, x, z, yaw, 0, 0, 0.73, 0.78, 0.05, 0.78, base);
    solid(x, z, 0.42, 0.42, base + 0.8);
  }
  function chairAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(ironBox, x, z, yaw, 0, 0, 0.42, 0.42, 0.05, 0.42, base);
    for (const u of [-0.17, 0.17]) for (const v of [-0.17, 0.17]) at(ironBox, x, z, yaw, u, v, 0, 0.04, 0.42, 0.04, base);
    for (const u of [-0.19, 0.19]) at(ironBox, x, z, yaw, u, 0.2, 0.42, 0.04, 0.52, 0.04, base);
    at(slat, x, z, yaw, 0, 0.2, 0.7, 0.42, 0.11, 0.04, base);
  }
  function parasolAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(ironCyl, x, z, yaw, 0, 0, 0, 0.52, 0.06, 0.52, base);
    at(steelCyl, x, z, yaw, 0, 0, 0.06, 0.07, 2.3, 0.07, base);
    at(canvasCone, x, z, yaw, 0, 0, 2.14, 2.7, 0.5, 2.7, base);
    at(brassBox, x, z, yaw, 0, 0, 2.6, 0.07, 0.15, 0.07, base);
  }
  function cafeAt(x: number, z: number, yaw: number, n: number, base = WALK_H) {
    const c = Math.cos(yaw);
    const s = Math.sin(yaw);
    for (let i = 0; i < n; i++) {
      const u = (i - (n - 1) / 2) * 1.7;
      const tx = x + u * c;
      const tz = z - u * s;
      tableAt(tx, tz, yaw, base);
      chairAt(tx + 0.66 * s, tz + 0.66 * c, yaw + Math.PI, base);
      chairAt(tx - 0.66 * s, tz - 0.66 * c, yaw, base);
      if (i % 2 === 0) parasolAt(tx, tz, yaw, base);
    }
  }

  /* --- waste: a skip, a lidded dumpster, bags at the kerb -------------- */
  function skipAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(darkBox, x, z, yaw, 0, 0, 0, 3.5, 0.16, 1.6, base);
    at(darkBox, x, z, yaw, 0, 0, 0.16, 3.4, 1.05, 1.5, base);
    at(redBox, x, z, yaw, 0, 0.76, 0.4, 1.4, 0.34, 0.03, base);
    footprint(x, z, 1.75, 0.8, yaw, base + 1.25);
  }
  function dumpsterAt(x: number, z: number, yaw: number, base = WALK_H) {
    at(darkBox, x, z, yaw, 0, 0, 0.1, 2.0, 1.1, 1.35, base);
    at(greenBox, x, z, yaw, 0, -0.15, 1.2, 2.05, 0.12, 1.4, base);
    at(greenBox, x, z, yaw, 0, 0.35, 1.2, 2.05, 0.12, 0.6, base);
    for (const u of [-0.7, 0.7]) at(rubberRing, x, z, yaw + Math.PI / 2, u, 0.5, 0.1, 0.26, 0.26, 0.26, base);
    footprint(x, z, 1.05, 0.72, yaw, base + 1.4);
  }
  function bagPileAt(x: number, z: number, base = WALK_H) {
    for (let i = 0; i < 5; i++) {
      at(plasticBlob, x, z, sR(0, 3), sR(-0.6, 0.6), sR(-0.35, 0.35), i < 3 ? 0.03 : 0.42, sR(0.5, 0.75), sR(0.45, 0.6), sR(0.5, 0.75), base);
    }
  }

  /* --- market stall: legs, frame, striped canopy, counter, crates ------- */
  function stallAt(x: number, z: number, yaw: number, base = WALK_H) {
    for (const u of [-1.4, 1.4]) for (const v of [-0.9, 0.9]) at(darkCyl, x, z, yaw, u, v, 0, 0.09, 2.2, 0.09, base);
    at(darkBox, x, z, yaw, 0, 0, 2.15, 3.1, 0.08, 2.1, base);
    at(canvasBox, x, z, yaw, 0, 0, 2.23, 3.5, 0.06, 2.6, base);
    at(canvasBox, x, z, yaw, 0, 1.3, 2.0, 3.5, 0.05, 0.4, base);
    at(darkBox, x, z, yaw, 0, 0, 0, 3.0, 0.9, 1.5, base);
    at(slat, x, z, yaw, 0, 0.15, 0.9, 3.1, 0.12, 1.5, base);
    for (let i = 0; i < 4; i++) {
      at(plasticCyl, x, z, yaw, -1.0 + i * 0.66, -0.4, 1.02, 0.5, 0.3, 0.5, base);
      at(bloom, x, z, yaw, -1.0 + i * 0.66, -0.4, 1.3, 0.42, 0.24, 0.42, base);
    }
    footprint(x, z, 1.7, 1.2, yaw, base + 2.2);
  }

  /* --- plaza furniture -------------------------------------------------- */
  function fountainAt(x: number, z: number, base: number) {
    at(stoneCyl, x, z, 0, 0, 0, 0, 5.6, 0.5, 5.6, base);
    at(stoneCyl, x, z, 0, 0, 0, 0.5, 4.9, 0.08, 4.9, base);
    at(waterDisc, x, z, 0, 0, 0, 0.42, 5.0, 1, 5.0, base);
    at(stoneShaft, x, z, 0, 0, 0, 0.4, 1.5, 2.4, 1.5, base);
    at(stoneCyl, x, z, 0, 0, 0, 2.8, 2.8, 0.28, 2.8, base);
    at(stoneBall, x, z, 0, 0, 0, 3.2, 1.0, 1.3, 1.0, base);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      at(stoneCyl, x + Math.cos(a) * 2.7, z + Math.sin(a) * 2.7, 0, 0, 0, 0, 0.45, 0.85, 0.45, base);
    }
  }
  function monumentAt(x: number, z: number, base: number) {
    at(stoneBox, x, z, 0, 0, 0, 0, 3.2, 0.36, 3.2, base);
    at(stoneBox, x, z, 0, 0, 0, 0.36, 2.3, 2.8, 2.3, base);
    at(stoneBox, x, z, 0, 0, 0, 3.16, 2.7, 0.26, 2.7, base);
    at(stoneBall, x, z, 0, 0, 0, 3.42, 1.0, 1.5, 0.9, base);
    at(stoneBox, x, z, 0, 0, 0, 4.5, 0.5, 0.7, 0.4, base);
    at(stoneBall, x, z, 0, 0, 0, 5.1, 0.42, 0.5, 0.42, base);
  }

  /* --- scaffolding climbing a frontage --------------------------------- */
  function scaffoldAt(face: { x: number; z: number; yaw: number; len: number }, height: number) {
    const run = face.len * 1.85;
    const bays = Math.max(2, Math.round(run / 2.4));
    const levels = Math.max(2, Math.round(height / 2.6));
    const deck = levels * 2.6;
    for (let i = 0; i <= bays; i++) {
      const u = -run / 2 + (run * i) / bays;
      for (const v of [0.35, 1.55]) at(steelCyl, face.x, face.z, face.yaw, u, v, 0, 0.09, deck + 1.1, 0.09);
      at(steelBox, face.x, face.z, face.yaw, u, 0.95, 0, 0.06, 0.06, 1.3);
    }
    for (let l = 0; l <= levels; l++) {
      const h = l * 2.6;
      for (const v of [0.35, 1.55]) at(steelBox, face.x, face.z, face.yaw, 0, v, h, run, 0.06, 0.06);
      if (l < levels) {
        at(slat, face.x, face.z, face.yaw, 0, 0.95, h + 0.1, run, 0.06, 1.2);
        at(slat, face.x, face.z, face.yaw, 0, 1.62, h + 0.16, run, 0.22, 0.05);
      }
    }
    at(netBox, face.x, face.z, face.yaw, 0, 1.68, 0.15, run, deck, 0.03);
  }

  /* --- what hangs off a frontage --------------------------------------- */
  function frontFace(bx: number, bz: number, hx: number, hz: number) {
    const b = blockAt(bx, bz);
    if (!b) return null;
    const dx = Math.min(bx - hx - b.x0, b.x1 - (bx + hx));
    const dz = Math.min(bz - hz - b.z0, b.z1 - (bz + hz));
    if (dx <= dz && dx < 1.4) {
      return bx - hx - b.x0 <= b.x1 - (bx + hx)
        ? { x: bx - hx, z: bz, yaw: -Math.PI / 2, len: hz }
        : { x: bx + hx, z: bz, yaw: Math.PI / 2, len: hz };
    }
    if (dz < 1.4) {
      return bz - hz - b.z0 <= b.z1 - (bz + hz)
        ? { x: bx, z: bz - hz, yaw: Math.PI, len: hx }
        : { x: bx, z: bz + hz, yaw: 0, len: hx };
    }
    return null;
  }
  type Face = { x: number; z: number; yaw: number; len?: number };
  function wallLampAt(face: Face, u: number) {
    at(ironBox, face.x, face.z, face.yaw, u, 0.2, 4.15, 0.06, 0.06, 0.4);
    at(darkBox, face.x, face.z, face.yaw, u, 0.4, 4.06, 0.28, 0.16, 0.3);
    at(lampBox, face.x, face.z, face.yaw, u, 0.4, 3.98, 0.22, 0.06, 0.22);
  }
  function atmAt(face: Face, u: number) {
    at(steelBox, face.x, face.z, face.yaw, u, 0.16, 0.1, 1.0, 1.0, 0.32);
    at(darkBox, face.x, face.z, face.yaw, u, 0.34, 0.85, 0.52, 0.34, 0.04);
    at(brassBox, face.x, face.z, face.yaw, u, 0.34, 0.5, 0.4, 0.12, 0.04);
    at(lampBox, face.x, face.z, face.yaw, u, 0.3, 1.14, 1.08, 0.07, 0.4);
  }
  function vendingAt(face: Face, u: number) {
    at(steelBox, face.x, face.z, face.yaw, u, 0.2, 0, 0.95, 1.9, 0.4);
    at(paneBox, face.x, face.z, face.yaw, u, 0.42, 0.35, 0.7, 1.3, 0.04);
    at(darkBox, face.x, face.z, face.yaw, u, 0.42, 1.75, 0.8, 0.16, 0.04);
    at(brassBox, face.x, face.z, face.yaw, u, 0.42, 0.9, 0.3, 0.12, 0.04);
  }

  /* --- placement: a 13 m rhythm along every kerb ------------------------ *
   * The pavement band runs from 7.0 m (the kerb) to about 10.4 m (the
   * building line) off the street centre, so every band below lands on
   * paving, and each slot gets one piece so nothing overlaps. */
  const slotLen = 13;
  const nearLamp = (d: number) => {
    const m = ((d % 80) + 80) % 80; /* lamp posts stand on multiples of 80 m */
    return Math.min(m, 80 - m) < 3.4;
  };
  const faceRoad = (vertical: boolean, s: number) =>
    vertical ? (s > 0 ? -Math.PI / 2 : Math.PI / 2) : s > 0 ? Math.PI : 0;
  const RHYTHM = [
    "tree", "bin", "tree", "bench", "rack", "tree", "planter", "bin",
    "hydrant", "tree", "bench", "cabinet", "tree", "sign", "meter", "tree",
    "bollards", "bench",
  ];
  let slot = 0;
  for (let si = 0; si < STREETS.length; si++) {
    const c = STREETS[si];
    for (const vertical of [true, false]) {
      for (const s of [1, -1]) {
        const yaw = faceRoad(vertical, s);
        for (let d = -CITY_R + 26; d <= CITY_R - 26; d += slotLen) {
          if (isJunction(d) || isJunction(d + slotLen) || nearLamp(d)) {
            slot++;
            continue;
          }
          const role = RHYTHM[(slot++ + si * 5 + (s > 0 ? 0 : 9)) % RHYTHM.length];
          const px = (band: number, u = 0) => (vertical ? c + s * band : d + u);
          const pz = (band: number, u = 0) => (vertical ? d + u : c + s * band);
          if (role === "tree") {
            treeSpots.push({ x: px(8.0), z: pz(8.0), sc: sR(0.85, 1.15) });
          } else if (role === "bin") {
            binAt(px(8.9), pz(8.9));
          } else if (role === "bench") {
            benchAt(px(9.15), pz(9.15), yaw, sR(1.6, 2.05));
          } else if (role === "rack") {
            rackAt(px(8.85), pz(8.85), yaw, 2 + (slot % 2));
            if (srng() < 0.55) bikeAt(px(8.85, -0.8), pz(8.85, -0.8), yaw);
          } else if (role === "planter") {
            planterAt(px(9.2), pz(9.2), yaw, sR(1.1, 1.55));
          } else if (role === "hydrant") {
            hydrantAt(px(8.35), pz(8.35), yaw);
          } else if (role === "cabinet") {
            cabinetAt(px(9.2), pz(9.2), yaw);
          } else if (role === "sign") {
            signAt(px(8.4), pz(8.4), vertical ? 0 : Math.PI / 2, srng() < 0.7 ? 0 : 1);
          } else if (role === "meter") {
            meterAt(px(8.5), pz(8.5), yaw);
          } else {
            for (let i = -1; i <= 1; i++) bollardAt(px(7.75, i * 1.6), pz(7.75, i * 1.6));
          }
        }
      }
    }
  }

  for (const t of treeSpots) {
    const h = 2.6 * t.sc;
    put(treeTrunkBatch, t.x, WALK_H, t.z, 0.34, h, 0.34);
    put(treeLeafBatch, t.x, WALK_H + h * 0.92, t.z, 3.1 * t.sc, 2.5 * t.sc, 3.1 * t.sc);
    put(treeLeafBatch, t.x + 0.5 * t.sc, WALK_H + h * 1.2, t.z - 0.4 * t.sc, 2.1 * t.sc, 1.9 * t.sc, 2.1 * t.sc);
    put(pitBatch, t.x, WALK_H + 0.03, t.z, 1.5, 1, 1.5);
  }

  /* --- around every junction: bins, hydrants, guard rails, bollards ----- */
  for (const j of junctionList) {
    const cx = STREETS[j.ix];
    const cz = STREETS[j.iz];
    const corner = (dx: number, dz: number, x: number, z: number) => ({ dx, dz, x, z });
    const corners = [
      corner(1, 1, cx + 8.6, cz + 8.6),
      corner(-1, 1, cx - 8.6, cz + 8.6),
      corner(1, -1, cx + 8.6, cz - 8.6),
      corner(-1, -1, cx - 8.6, cz - 8.6),
    ];
    binAt(corners[0].x, corners[0].z);
    hydrantAt(corners[1].x, corners[1].z, 0);
    binAt(corners[2].x, corners[2].z);
    /* guard rails down the kerb on the two busier approaches */
    railingAt(cx + 7.8, cz + 18, Math.PI / 2, 9);
    railingAt(cx - 7.8, cz + 18, Math.PI / 2, 9);
    railingAt(cx + 18, cz - 7.8, 0, 9);
    railingAt(cx + 18, cz + 7.8, 0, 9);
    for (let i = 0; i < 4; i++) bollardAt(cx + 8.7 + i * 1.5, cz + 8.7);
    for (let i = 0; i < 4; i++) bollardAt(cx - 8.7 - i * 1.5, cz - 8.7);
    for (let i = 0; i < 4; i++) bollardAt(cx + 8.7 + i * 1.5, cz - 8.7);
    /* road-name plate and a litter bin for the corner shops */
    if ((j.ix + j.iz) % 3 === 0) {
      plate(signPlateBatch[1], corners[3].x, corners[3].z, Math.PI, 0, 0, 3.1, 1, WALK_H);
      at(steelCyl, corners[3].x, corners[3].z, Math.PI, 0, 0, 0, 0.09, 3.3, 0.09);
    }
  }

  /* --- bus stops: a shelter, a flag and a bin on the boulevards --------- */
  for (const c of [-220, -110, 110, 220]) {
    for (const d of [-350, -130, 130, 350]) {
      for (const vertical of [true, false]) {
        for (const s of [1, -1]) {
          const x = vertical ? c + s * 9.1 : d;
          const z = vertical ? d : c + s * 9.1;
          shelterAt(x, z, faceRoad(vertical, s));
          const bx = vertical ? c + s * 8.4 : d + 6.4;
          const bz = vertical ? d + 6.4 : c + s * 8.4;
          binAt(bx, bz);
          if (srng() < 0.5) ticketAt(vertical ? c + s * 8.6 : d - 6.4, vertical ? d - 6.4 : c + s * 8.6, faceRoad(vertical, s));
        }
      }
    }
  }

  /* --- per block: frontage lamps, ATMs, terraces, kiosks, skips -------- */
  for (const b of BLOCKS) {
    const frontages: { face: NonNullable<ReturnType<typeof frontFace>>; top: number }[] = [];
    for (const bd of b.blds) {
      if (bd.top < WALK_H + 4) continue;       /* street furniture is not a building */
      if (bd.hx > 14 && bd.hz > 14) continue;  /* interior masses have no street face */
      const face = frontFace(bd.x, bd.z, bd.hx - 0.35, bd.hz - 0.35);
      if (face) frontages.push({ face, top: bd.top });
    }
    let i = 0;
    for (const f of frontages) {
      const u = ((i % 2) - 0.5) * Math.min(f.face.len * 0.9, 2.6);
      if (f.top < 34) wallLampAt(f.face, u);
      const roll = srng();
      if (roll < 0.05 && f.face.len > 6) atmAt(f.face, u);
      else if (roll < 0.09 && f.face.len > 6) vendingAt(f.face, u + 1.2);
      i++;
    }
    const far = Math.max(Math.abs(b.cx), Math.abs(b.cz));
    const hash = (b.i * 7919 + b.j * 104729) % 100;
    /* cafés terrace onto the south pavement, out of the wind */
    if (far < 320 && hash % 6 === 0) {
      cafeAt(b.cx + (hash % 3) * 9 - 9, b.z0 - 0.8, 0, 3 + (hash % 2));
    }
    if (hash % 11 === 3) phoneBoxAt(b.x0 + 10.5, b.z1 + 1.2, Math.PI);
    if (hash % 13 === 5) kioskAt(b.x1 + 1.2, b.z0 + 14, Math.PI / 2);
    if (hash % 7 === 4) postBoxAt(b.x1 - 9, b.z1 + 1.2, Math.PI);
    if (hash % 9 === 2) {
      skipAt(b.x0 - 1.2, b.z0 + 12, Math.PI / 2);
      bagPileAt(b.x0 - 1.8, b.z0 + 16.5);
    }
    if (hash % 19 === 9) dumpsterAt(b.x1 - 12, b.z0 - 1.2, 0);
    if (hash % 17 === 7) {
      let big: { x: number; z: number; hx: number; hz: number; top: number } | null = null;
      for (const bd of b.blds) if (!big || bd.top > big.top) big = bd;
      if (big && big.top > 14) {
        const face = frontFace(big.x, big.z, big.hx - 0.35, big.hz - 0.35);
        if (face && face.len > 6) scaffoldAt(face, Math.min(26, big.top - WALK_H - 2.4));
      }
    }
  }

  /* --- the central plaza: monuments, a fountain, stalls --------------- */
  for (const [sx, sy] of [[1, 1], [-1, 1], [1, -1], [-1, -1]] as [number, number][]) {
    const px = sx * 42;
    const pz = sy * 42;
    planterAt(px, pz, 0, 3.4, 0.02);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const bx = px + Math.cos(a) * 3.4;
      const bz = pz + Math.sin(a) * 3.4;
      benchAt(bx, bz, a + Math.PI, 1.8, 0.02);
      binAt(px + Math.cos(a) * 4.6, pz + Math.sin(a) * 4.6, 0.02);
    }
  }
  monumentAt(24, 24, 0.02);
  fountainAt(-24, 24, 0.02);
  fountainAt(24, -24, 0.02);
  monumentAt(-24, -24, 0.02);
  /* market rows flanking the square, clear of both avenues */
  for (let i = 0; i < 4; i++) {
    stallAt(-30 + i * 4.2, 66, 0, 0.02);
    stallAt(66, -30 + i * 4.2, Math.PI / 2, 0.02);
  }
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const bx = Math.cos(a) * 31;
    const bz = Math.sin(a) * 31;
    if (Math.abs(bx) < 13 || Math.abs(bz) < 13) continue; /* the avenues cross here */
    benchAt(bx, bz, a + Math.PI, 1.9, 0.02);
    if (i % 2 === 0) binAt(bx * 1.1, bz * 1.1, 0.02);
  }

  /* --- banners on the lamp posts --------------------------------------- */
  for (let si = 0; si < STREETS.length; si += 2) {
    const c = STREETS[si];
    for (let d = -480; d <= 480; d += 80) {
      if (STREETS.some((st) => Math.abs(d - st) < 20)) continue;
      if ((d / 80 + si) % 3 !== 0) continue;
      for (const vertical of [true, false]) {
        for (const s of [1, -1]) {
          const x = vertical ? c + s * 8.2 : d;
          const z = vertical ? d : c + s * 8.2;
          const face = vertical ? 0 : Math.PI / 2;
          put(ironBox, x, WALK_H + 5.5, z, vertical ? 1.6 : 0.05, 0.05, vertical ? 0.05 : 1.6);
          put(bannerPlate, x - (vertical ? s * 0.45 : 0), WALK_H + 4.4, z - (vertical ? 0 : s * 0.45), 1, 1, 1, face);
          put(bannerPlate, x + (vertical ? s * 0.45 : 0), WALK_H + 4.4, z + (vertical ? 0 : s * 0.45), 1, 1, 1, face);
        }
      }
    }
  }

  /* ---------------------------------------------------------- billboards */
  const tall = BLOCKS.flatMap((b) => b.blds).filter((bd) => bd.top > 30).sort((a, b) => b.top - a.top);
  let adIndex = 0;
  for (let i = 0; i < Math.min(14, tall.length); i += 2) {
    const bd = tall[i];
    const ad = billboardAds[adIndex++ % billboardAds.length];
    const batch = billboardBatch[adIndex === 0 ? 0 : (adIndex - 1) % billboardBatch.length];
    const yaw = srng() < 0.5 ? 0 : Math.PI / 2;
    const w = yaw === 0 ? Math.min(bd.hx * 2, 14) : 1;
    void w;
    const s = Math.min(1.4, (bd.hx * 2) / 12);
    put(batch, bd.x, bd.top - 1.5, bd.z, s, s, 1, yaw);
    put(frameBatch, bd.x, bd.top - 1.5 - (ad.h * s) / 2 - 0.2, bd.z, 0.25 * s, 0.4, 0.25 * s, yaw);
  }

  /* ------------------------------------------------------------ skyline */
  const skyline = makeBatch(boxGeo, skylineMat, false);
  for (let i = 0; i < 90; i++) {
    const a = (i / 90) * Math.PI * 2 + sR(-0.02, 0.02);
    const d = sR(760, 1500);
    const x = Math.cos(a) * d;
    const z = Math.sin(a) * d;
    const h = d < 1000 ? sR(30, 90) : sR(60, 200);
    put(skyline, x, 0, z, sR(20, 60), h, sR(20, 60), sR(0, 3.14));
  }
  batches.push(skyline);

  /* ----------------------------------------------------- commit geometry */
  batches.push(
    roofBatch, gravelBatch, parapetBatch, podiumBatch, shopGlassBatch, awningBatch, shopSignBatch,
    balconyBatch, acBatch, tankBatch, tankLegBatch, mastBatch, frameBatch,
    treeTrunkBatch, treeLeafBatch, pitBatch, benchBatch, benchLegBatch, binBatch, hydrantBatch,
    bollardBatch, planterBatch, shrubBatch, meterPoleBatch, meterHeadBatch, signPoleBatch,
    shelterRoofBatch, shelterGlassBatch, poleBatch, armBatch, headBatch,
    paintWhiteBatch, paintYellowBatch, paintBlueBatch, tactileBatch, patchBatch, tarBatch,
    manholeBatch, puddleBatch, curbBatch, cornerCurbBatch, slabBatch, laneArrowBatch,
  );
  for (const b of billboardBatch) batches.push(b);
  for (const b of signPlateBatch) batches.push(b);
  for (const b of Object.values(shopSignList)) {
    const batch = makeBatch(new THREE.PlaneGeometry(3.4, 0.6), b.mat, false);
    batches.push(batch);
    shopSignExtra.push(batch);
  }
  /* shop signs get placed on the same podiums as the dark sign bands */
  for (const batch of shopSignExtra) {
    for (let i = 0; i < 24; i++) {
      const b = BLOCKS[(srng() * BLOCKS.length) | 0];
      if (b.type === "park") continue;
      const yaw = srng() < 0.5 ? 0 : Math.PI / 2;
      const off = yaw === 0 ? b.d / 2 + 0.5 : b.w / 2 + 0.5;
      put(
        batch,
        b.cx + (yaw === 0 ? sR(-b.w / 2 + 6, b.w / 2 - 6) : off),
        WALK_H + 3.6,
        b.cz + (yaw === 0 ? off : sR(-b.d / 2 + 6, b.d / 2 - 6)),
        1, 1, 1, yaw,
      );
    }
  }

  /* signal lenses */
  function lensMesh(list: THREE.Matrix4[], mat: THREE.MeshBasicMaterial, on: THREE.Color, off: THREE.Color) {
    const im = new THREE.InstancedMesh(lensGeo, mat, list.length);
    list.forEach((m, i) => im.setMatrixAt(i, m));
    im.instanceMatrix.needsUpdate = true;
    im.frustumCulled = false;
    const colors = new Float32Array(list.length * 3);
    for (let i = 0; i < list.length; i++) {
      colors[i * 3] = off.r;
      colors[i * 3 + 1] = off.g;
      colors[i * 3 + 2] = off.b;
    }
    im.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
    im.instanceColor.needsUpdate = true;
    root.add(im);
    return im;
  }
  const redMesh = lensMesh(redLenses, lampMatR, LAMP_ON.r, LAMP_OFF.r);
  const amberMesh = lensMesh(amberLenses, lampMatA, LAMP_ON.a, LAMP_OFF.a);
  const greenMesh = lensMesh(greenLenses, lampMatG, LAMP_ON.g, LAMP_OFF.g);

  bakeBatches(root, batches);

  /* --------------------------------------------------------- update logic */
  let clock = srng() * 20;
  let phaseAcc = 0;
  const lastPhase: string[] = junctionList.map(() => "");
  let lastNight = -1;
  let lastWet = -1;

  function applyJunction(jIdx: number, ns: LampState, ew: LampState) {
    const { ix, iz } = junctionList[jIdx];
    void ix;
    void iz;
    const o = jIdx * 4;
    /* corners 0,1 face the N-S approaches, 2,3 the E-W approaches */
    for (let k = 0; k < 4; k++) {
      const st: LampState = k < 2 ? ns : ew;
      const base = o + k;
      setLamp(redMesh, base, st === "r");
      setLamp(amberMesh, base, st === "a");
      setLamp(greenMesh, base, st === "g");
    }
  }
  function setLamp(mesh: THREE.InstancedMesh, i: number, on: boolean) {
    const c = mesh.instanceColor as THREE.InstancedBufferAttribute;
    if (!c) return;
    const isRed = mesh === redMesh;
    const isAmber = mesh === amberMesh;
    const col = on
      ? (isRed ? LAMP_ON.r : isAmber ? LAMP_ON.a : LAMP_ON.g)
      : (isRed ? LAMP_OFF.r : isAmber ? LAMP_OFF.a : LAMP_OFF.g);
    c.setXYZ(i, col.r, col.g, col.b);
    c.needsUpdate = true;
  }

  const city: City = {
    root,
    lampPoints,
    parkSpots,
    parkedCarSpots,
    lampMaterial,
    update(dt, night, wet) {
      clock += dt;
      phaseAcc += dt;
      if (phaseAcc > 0.15) {
        phaseAcc = 0;
        for (let j = 0; j < junctionList.length; j++) {
          const { ix, iz } = junctionList[j];
          const ph = junctionPhase(ix, iz, clock);
          const key = ph.ns + ph.ew;
          if (key === lastPhase[j]) continue;
          lastPhase[j] = key;
          applyJunction(j, ph.ns, ph.ew);
        }
      }
      if (Math.abs(night - lastNight) > 0.05) {
        lastNight = night;
        /* facades, shop glass, signs and billboards wake up at dusk */
        for (const m of emissiveMats) m.emissiveIntensity = 0.02 + 1.15 * night;
        glassShopMat.emissiveIntensity = 0.03 + 1.5 * night;
        shopSignMat.emissiveIntensity = 0.02 + 2.4 * night;
        for (const m of billboardMats) m.emissiveIntensity = 0.02 + 0.5 * night;
        lampMaterial.emissiveIntensity = 0.05 + 1.9 * night;
        const glow = lampGlowBatch.mat as THREE.MeshBasicMaterial;
        glow.opacity = 0.22 * night;
        glow.visible = night > 0.05;
      }
      if (Math.abs(wet - lastWet) > 0.015) {
        lastWet = wet;
        /* standing water darkens and glosses the tarmac; kerbs stay matte */
        roadPatchMat.roughness = 0.98 - 0.62 * wet;
        roadPatchMat.metalness = 0.04 + 0.55 * wet;
        roadPatchMat.envMapIntensity = 0.3 + 1.1 * wet;
        sidewalkMat.roughness = 0.95 - 0.35 * wet;
        sidewalkMat.metalness = 0.5 * wet;
        sidewalkMat.envMapIntensity = 0.3 + 0.7 * wet;
        curbMat.roughness = 0.9 - 0.3 * wet;
        puddleMat.opacity = 0.15 + 0.75 * wet;
        puddleMat.visible = wet > 0.02;
      }
    },
    lightBlocks(x, z, axis, dir, speed) {
      /* find the junction the vehicle is approaching */
      const along = axis === "z" ? z : x;
      let target: number | null = null;
      for (const s of STREETS) {
        if (dir > 0 && s > along + 3 && (target === null || s < target)) target = s;
        if (dir < 0 && s < along - 3 && (target === null || s > target)) target = s;
      }
      if (target === null) return false;
      const gap = Math.abs(target - along);
      const stopDist = 6 + speed * speed / (2 * 3.4);
      if (gap > Math.max(11, stopDist * 1.35)) return false;
      const crossIdx = streetIndex(axis === "z" ? x : target);
      const alongIdx = streetIndex(axis === "z" ? target : z);
      /* junctions are indexed [x-street][z-street], matching junctionList */
      const ix = axis === "z" ? crossIdx : alongIdx;
      const iz = axis === "z" ? alongIdx : crossIdx;
      const ph = junctionPhase(ix, iz, clock);
      const mine = axis === "z" ? ph.ns : ph.ew;
      return mine !== "g";
    },
  };

  return city;
}

/* scratch arrays used during construction (hoisted so the builder reads clean) */
const shopSignList: { text: string; mat: THREE.MeshStandardMaterial }[] = [];
const shopSignExtra: Batch[] = [];
