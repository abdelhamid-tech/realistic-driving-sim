/**
 * OWNER BUILDINGS — the models in public/models/buildings/ baked into the map.
 *
 * Each GLB is read once, measured, and baked as real triangles: its footprint
 * becomes drivable/wall geometry exactly like the towers and halls the city
 * draws itself. Buildings are placed on city lots by zone:
 *   · downtown lots get the tall models (tower-a, block-a/b, office)
 *   · residential lots get villa
 *   · industrial lots get depot
 * Every placement is checked against the river so nothing stands in the water.
 */

import { readFileSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/** slot → which models may fill it, tallest first */
const ASSIGN = {
  downtown: ["tower-a", "office", "block-a", "block-b"],
  residential: ["villa", "office", "block-a"],
  industrial: ["depot", "villa"],
  mall: ["office", "depot"],
};

/** one material bucket per source file, so a building keeps its own colours */
export const BUILDING_FILES = [
  "tower-a", "block-a", "block-b", "office", "villa", "depot",
];

const cache = new Map();

/**
 * Read one building model: its triangles in model space (base on y = 0,
 * centred on x/z), its footprint and its height. Async: Draco decoding is.
 */
async function loadOne(name) {
  const hit = cache.get(name);
  if (hit !== undefined) return hit;
  let out = null;
  try {
    const bytes = readFileSync(`building/.decoded/${name}.glb`);
    const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    const loader = new GLTFLoader();
    const g = await loader.parseAsync(buf, "");
    {
      const scene = g.scene;
      scene.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(scene);
      const c = box.getCenter(new THREE.Vector3());
      const tris = [];
      const v = new THREE.Vector3();
      const perMat = new Map(); // material name -> tri list
      const matColor = new Map(); // material name -> [r,g,b]
      const push = (list, a, b, c2) => {
        list.push([a.clone(), b.clone(), c2.clone()]);
      };
      scene.traverse((o) => {
        if (!o.isMesh || !o.geometry) return;
        const matName = o.material?.name || "building";
        const col = o.material?.color;
        if (col && !matColor.has(matName)) matColor.set(matName, [col.r, col.g, col.b]);
        let list = perMat.get(matName);
        if (!list) perMat.set(matName, (list = []));
        const pos = o.geometry.getAttribute("position");
        const index = o.geometry.getIndex();
        const n = index ? index.count : pos.count;
        for (let i = 0; i + 2 < n; i += 3) {
          const a = v.fromBufferAttribute(pos, index ? index.getX(i) : i).applyMatrix4(o.matrixWorld).clone();
          const b = v.fromBufferAttribute(pos, index ? index.getX(i + 1) : i + 1).applyMatrix4(o.matrixWorld).clone();
          const c2 = v.fromBufferAttribute(pos, index ? index.getX(i + 2) : i + 2).applyMatrix4(o.matrixWorld).clone();
          push(list, a, b, c2);
        }
      });
      // re-centre: base on y = 0, centred on x/z
      for (const list of perMat.values()) {
        for (const t of list) for (const p of t) { p.x -= c.x; p.z -= c.z; p.y -= box.min.y; }
      }
      const size = box.getSize(new THREE.Vector3());
      out = {
        name,
        trisByMat: perMat,
        materials: [...perMat.keys()],
        colors: matColor,
        foot: { x: size.x, z: size.z },
        height: size.y,
      };
    }
  } catch (err) {
    console.warn(`  ! building ${name} did not load: ${err?.message ?? err}`);
    out = null;
  }
  cache.set(name, out);
  return out;
}

/** load everything once; returns { byName, byZone } */
export async function loadBuildings() {
  const byName = new Map();
  for (const name of BUILDING_FILES) {
    const m = await loadOne(name);
    if (m) byName.set(name, m);
  }
  const byZone = {};
  for (const [zone, names] of Object.entries(ASSIGN)) {
    byZone[zone] = names.filter((n) => byName.has(n));
  }
  return { byName, byZone };
}

/** the colours the baked buildings arrive in, appended to the map's palette */
export function buildingPalette(byName) {
  const out = [];
  for (const m of byName.values()) {
    for (const matName of m.materials) {
      const c = m.colors.get(matName) ?? [0.55, 0.55, 0.55];
      out.push({ name: `bld:${m.name}:${matName}`, color: c, rough: 0.85, uv: 0 });
    }
  }
  return out;
}

/**
 * Bake one building onto the lot [x0,z0,x1,z1] at `base`, using G.triN.
 * The model is uniformly scaled to fit the lot (never stretched) and never
 * scaled UP past its own size — a 76 m tower is not grown to fill a lot.
 */
export function bakeBuilding(G, byName, name, x0, z0, x1, z1, base, matBase) {
  const m = byName.get(name);
  if (!m) return false;
  const lotW = Math.abs(x1 - x0), lotD = Math.abs(z1 - z0);
  const s = Math.min(1, Math.min(lotW / Math.max(m.foot.x, 0.001), lotD / Math.max(m.foot.z, 0.001)));
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  // gather every triangle once so normals survive the transform
  const matIndex = new Map(m.materials.map((n, i) => [n, matBase + i]));
  for (const [matName, list] of m.trisByMat instanceof Map ? m.trisByMat : Object.entries(m.trisByMat)) {
    const mi = matIndex.get(matName);
    if (mi === undefined) continue;
    for (const t of list) {
      const P = t.map((p) => [cx + p.x * s, base + p.y * s, cz + p.z * s]);
      const [a, b, c] = P;
      const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
      const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const l = Math.hypot(nx, ny, nz) || 1;
      nx /= l; ny /= l; nz /= l;
      G.triN(P[0], P[1], P[2], mi, [nx, ny, nz], [nx, ny, nz], [nx, ny, nz]);
    }
  }
  return true;
}
