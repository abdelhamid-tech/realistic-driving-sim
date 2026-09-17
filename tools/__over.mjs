/** Throwaway: what city geometry lies over the river's water? */
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MEAN_Z = 0, AMP = 260, WAVELEN = 1450, RIVER_HALF_BASE = 95, RIVER_HALF_WIDEN = 28, BANK = 46;
const riverZ = (x) => MEAN_Z + AMP * Math.sin((x / WAVELEN) * Math.PI * 2);
const riverHalf = (x) => RIVER_HALF_BASE + RIVER_HALF_WIDEN * Math.cos((x / WAVELEN) * Math.PI * 4 + 1.1);
const inWater = (x, z) => Math.abs(z - riverZ(x)) < riverHalf(x);

const bytes = readFileSync("public/maps/riverbend.glb");
const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
const gltf = await new GLTFLoader().parseAsync(buf, "");
gltf.scene.updateMatrixWorld(true);

const v = new THREE.Vector3();
const bands = new Map();
const perX = new Map();
const named = new Map();
let over = 0;
gltf.scene.traverse((o) => {
  if (!o.isMesh || !o.geometry) return;
  const mat = o.material?.name ?? "?";
  const pos = o.geometry.getAttribute("position");
  const index = o.geometry.getIndex();
  const n = index ? index.count : pos.count;
  const P = (k) => v.fromBufferAttribute(pos, index ? index.getX(k) : k).applyMatrix4(o.matrixWorld);
  for (let i = 0; i + 2 < n; i += 3) {
    const a = P(i).clone(), b = P(i + 1).clone(), c = P(i + 2).clone();
    const cx = (a.x + b.x + c.x) / 3, cz = (a.z + b.z + c.z) / 3;
    if (!inWater(cx, cz)) continue;
    const y = (a.y + b.y + c.y) / 3;
    if (y < -3) continue;                       // the water itself
    over++;
    const band = `${mat} @ ${y < 1 ? "low" : y < 5 ? "1-5" : y < 20 ? "5-20" : "20+"} m`;
    bands.set(band, (bands.get(band) ?? 0) + 1);
    named.set(mat, (named.get(mat) ?? 0) + 1);
    const gx = Math.round(cx / 50) * 50;
    const k = gx;
    perX.set(k, (perX.get(k) ?? 0) + 1);
  }
});

console.log(`${over} triangles of the built map lie over the river's water`);
console.log("by material:", [...named].sort((p, q) => q[1] - p[1]).slice(0, 12).map(([m, c]) => `${m}:${c}`).join(", "));
console.log("by height:", [...bands].sort((p, q) => q[1] - p[1]).slice(0, 12).map(([m, c]) => `${m}:${c}`).join(" | "));
console.log("by x (50 m):", [...perX].sort((p, q) => p[0] - q[0]).map(([x, c]) => `${x}:${c}`).join(", "));
process.exit(0);
