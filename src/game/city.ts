import * as THREE from "three";

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

/** Deterministic junction phases: a rolling green wave instead of all-at-once. */
export function junctionPhase(ix: number, iz: number, t: number) {
  let c = (t + SIGNAL_OFFSET(ix, iz)) % 11;
  if (c < 0) c += 11;
  if (c < 5) return { ns: "g" as LampState, ew: "r" as LampState };
  if (c < 6) return { ns: "a" as LampState, ew: "r" as LampState };
  if (c < 10) return { ns: "r" as LampState, ew: "g" as LampState };
  return { ns: "r" as LampState, ew: "a" as LampState };
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
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

function makeBatch(geo: THREE.BufferGeometry, mat: THREE.Material, shadow: boolean): Batch {
  return { geo, mat, list: [], shadow };
}

function put(b: Batch, x: number, y: number, z: number, sx: number, sy: number, sz: number, yaw = 0, pitch = 0) {
  _p.set(x, y, z);
  _e.set(pitch, yaw, 0);
  _q.setFromEuler(_e);
  _s.set(sx, sy, sz);
  _m.compose(_p, _q, _s);
  b.list.push(_m.clone());
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

  /* ---------------------------------------------------------- geometries */
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  boxGeo.translate(0, 0.5, 0);
  const planeGeo = new THREE.PlaneGeometry(1, 1);
  planeGeo.rotateX(-Math.PI / 2);
  const cylGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 10);
  cylGeo.translate(0, 0.5, 0);
  const discGeo = new THREE.CircleGeometry(0.5, 14);
  discGeo.rotateX(-Math.PI / 2);
  const ringGeo = new THREE.TorusGeometry(0.5, 0.09, 6, 14, Math.PI / 2);
  ringGeo.rotateX(-Math.PI / 2);
  const coneGeo = new THREE.ConeGeometry(0.5, 1, 8);
  coneGeo.translate(0, 0.5, 0);
  const blobGeo = new THREE.IcosahedronGeometry(0.5, 1);

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
  sidewalkMat.map.repeat.set(0.25, 0.25);
  const curbMat = new THREE.MeshStandardMaterial({ color: 0xb3b0a8, roughness: 0.9, envMapIntensity: 0.35 });
  const curbMatDark = new THREE.MeshStandardMaterial({ color: 0x8e8b84, roughness: 0.95, envMapIntensity: 0.3 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x4a4c4f, roughness: 0.97, envMapIntensity: 0.25 });
  roofMat.map = canvasTex(128, 128, (x, w, h) => {
    x.fillStyle = "#4c4e51";
    x.fillRect(0, 0, w, h);
    noiseOn(x, w, h, 2600, 0.09);
    noiseOn(x, w, h, 900, 0.06, false);
  }, aniso);
  roofMat.map.repeat.set(0.12, 0.12);
  const gravelMat = new THREE.MeshStandardMaterial({ color: 0x5a5c5e, roughness: 1, envMapIntensity: 0.2 });
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x8e9499, roughness: 0.45, metalness: 0.7, envMapIntensity: 0.8 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x33363a, roughness: 0.55, metalness: 0.6, envMapIntensity: 0.6 });
  const concreteMat = new THREE.MeshStandardMaterial({ color: 0xa5a29b, roughness: 0.92, envMapIntensity: 0.35 });
  const glassShopMat = new THREE.MeshStandardMaterial({
    color: 0x1c242c, roughness: 0.12, metalness: 0.55, envMapIntensity: 1.2,
    emissive: 0xffce8a, emissiveIntensity: 0.03,
  });
  const shopSignMat = new THREE.MeshStandardMaterial({ color: 0x101216, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
  const billboardMats: THREE.MeshStandardMaterial[] = [];
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6f5637, roughness: 0.9, envMapIntensity: 0.25 });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x3d5a2c, roughness: 1, envMapIntensity: 0.25 });
  const grassMat = new THREE.MeshStandardMaterial({ color: 0x5c6b3a, roughness: 1, envMapIntensity: 0.25 });
  const puddleMat = new THREE.MeshStandardMaterial({
    color: 0x14181d, roughness: 0.06, metalness: 0.75, envMapIntensity: 1.6,
    transparent: true, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5,
  });
  const skylineMat = new THREE.MeshStandardMaterial({ color: 0x6a7183, roughness: 1, envMapIntensity: 0.4, fog: true });

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
  const treeTrunkBatch = makeBatch(cylGeo, woodMat, true);
  const treeLeafBatch = makeBatch(blobGeo, leafMat, true);
  const pitBatch = makeBatch(planeGeo, new THREE.MeshStandardMaterial({ color: 0x3b3226, roughness: 1 }), false);
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
  const poleBatch = makeBatch(cylGeo, darkMetalMat, false);
  const armBatch = makeBatch(boxGeo, darkMetalMat, false);
  const headBatch = makeBatch(boxGeo, darkMetalMat, true);
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
  const lampHeadBatch = makeBatch(boxGeo, lampMaterial, false);
  const lampGlowBatch = makeBatch(blobGeo, new THREE.MeshBasicMaterial({
    color: 0xffd9a0, transparent: true, opacity: 0.0, depthWrite: false, toneMapped: false,
  }), false);

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
  const furnitureAlong = (c: number, vertical: boolean) => {
    for (let d = -CITY_R + 30; d < CITY_R - 30; d += 26) {
      if (isJunction(d)) continue;
      const s = srng() < 0.5 ? 1 : -1;
      const x = vertical ? c + s * 8.4 : d;
      const z = vertical ? d : c + s * 8.4;
      const yaw = vertical ? Math.PI / 2 : 0;
      const r = srng();
      if (r < 0.16) {
        put(binBatch, x, WALK_H, z, 0.6, 0.85, 0.6);
      } else if (r < 0.3) {
        put(hydrantBatch, x, WALK_H, z, 0.28, 0.7, 0.28);
        put(blobGeo ? hydrantBatch : hydrantBatch, x, WALK_H + 0.6, z, 0.42, 0.2, 0.42);
      } else if (r < 0.46) {
        put(bollardBatch, x, WALK_H, z, 0.16, 0.85, 0.16);
        put(bollardBatch, x + (vertical ? 0 : 1.3), WALK_H, z + (vertical ? 1.3 : 0), 0.16, 0.85, 0.16);
      } else if (r < 0.6) {
        put(planterBatch, x, WALK_H, z, 1.6, 0.55, 1.6);
        put(shrubBatch, x, WALK_H + 0.75, z, 1.7, 0.9, 1.7);
      } else if (r < 0.78) {
        put(benchBatch, x, WALK_H + 0.45, z, 1.9, 0.12, 0.5, yaw);
        put(benchLegBatch, x - (vertical ? 0 : 0.7), WALK_H + 0.2, z - (vertical ? 0.7 : 0), 0.14, 0.4, 0.45);
        put(benchLegBatch, x + (vertical ? 0 : 0.7), WALK_H + 0.2, z + (vertical ? 0.7 : 0), 0.14, 0.4, 0.45);
      } else if (r < 0.9) {
        put(meterPoleBatch, x, WALK_H, z, 0.09, 1.15, 0.09);
        put(meterHeadBatch, x, WALK_H + 1.2, z, 0.22, 0.36, 0.16, yaw);
      } else {
        put(signPoleBatch, x, WALK_H, z, 0.09, 2.8, 0.09);
        put(signPlateBatch[(srng() < 0.7 ? 0 : 1)], x, WALK_H + 3.0, z, 1, 1, 1, yaw + Math.PI / 2);
      }
      /* street trees in the same rhythm */
      if (srng() < 0.34) {
        const tx = vertical ? c + s * 8.0 : d + 5;
        const tz = vertical ? d + 5 : c + s * 8.0;
        if (!isJunction(vertical ? tz : tx)) {
          treeSpots.push({ x: tx, z: tz, sc: sR(0.85, 1.15) });
        }
      }
    }
  };
  for (const c of STREETS) {
    furnitureAlong(c, true);
    furnitureAlong(c, false);
  }
  for (const t of treeSpots) {
    const h = 2.6 * t.sc;
    put(treeTrunkBatch, t.x, WALK_H, t.z, 0.34, h, 0.34);
    put(treeLeafBatch, t.x, WALK_H + h * 0.92, t.z, 3.1 * t.sc, 2.5 * t.sc, 3.1 * t.sc);
    put(treeLeafBatch, t.x + 0.5 * t.sc, WALK_H + h * 1.2, t.z - 0.4 * t.sc, 2.1 * t.sc, 1.9 * t.sc, 2.1 * t.sc);
    put(pitBatch, t.x, WALK_H + 0.03, t.z, 1.5, 1, 1.5);
  }

  /* bus shelters + stops along the boulevards */
  for (const c of [-220, -110, 110, 220]) {
    for (const d of [-340, -120, 120, 340]) {
      for (const vertical of [true, false]) {
        const s = 1;
        const x = vertical ? c + s * 8.6 : d;
        const z = vertical ? d : c + s * 8.6;
        const yaw = vertical ? Math.PI / 2 : 0;
        put(shelterRoofBatch, x, WALK_H + 2.6, z, 4.4, 0.16, 1.9, yaw);
        for (const o of [-1.9, 1.9]) {
          put(shelterGlassBatch, x + (vertical ? 0 : o), WALK_H + 0.2, z + (vertical ? o : 0), vertical ? 0.08 : 3.2, 2.3, vertical ? 3.2 : 0.08);
        }
        put(benchBatch, x - (vertical ? 0 : 0.6), WALK_H + 0.5, z - (vertical ? 0.6 : 0), vertical ? 0.5 : 3, 0.1, vertical ? 3 : 0.5, yaw);
        put(poleBatch, x + (vertical ? 0 : 2.6), WALK_H, z + (vertical ? 2.6 : 0), 0.14, 3.4, 0.14);
        put(signPlateBatch[1], x + (vertical ? 0 : 2.6), WALK_H + 3.6, z + (vertical ? 2.6 : 0), 1, 1, 1, yaw + Math.PI / 2);
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
