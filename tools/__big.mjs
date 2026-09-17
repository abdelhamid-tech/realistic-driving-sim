/** Throwaway: flat surfaces over the river band, and full-length decks at 9 m. */
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MEAN_Z = 0, AMP = 260, WAVELEN = 1450, HALF_BASE = 95, HALF_WIDEN = 28, BANK = 46;
const riverCentre = (x) => MEAN_Z + AMP * Math.sin((x / WAVELEN) * Math.PI * 2);
const riverHalf = (x) => HALF_BASE + HALF_WIDEN * Math.cos((x / WAVELEN) * Math.PI * 4 + 1.1);
const overRiver = (x, z) => Math.abs(z - riverCentre(x)) < riverHalf(x) + BANK;

const bytes = readFileSync("public/maps/riverbend.glb");
const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
const gltf = await new GLTFLoader().parseAsync(buf, "");
gltf.scene.updateMatrixWorld(true);

const v = new THREE.Vector3();
const decks = new Map();
const plates = [];
gltf.scene.traverse((o) => {
  if (!o.isMesh || !o.geometry) return;
  const mat = o.material?.name ?? "?";
  const pos = o.geometry.getAttribute("position");
  const index = o.geometry.getIndex();
  const n = index ? index.count : pos.count;
  const P = (k) => v.fromBufferAttribute(pos, index ? index.getX(k) : k).applyMatrix4(o.matrixWorld).clone();
  for (let i = 0; i + 2 < n; i += 3) {
    const a = P(i), b = P(i + 1), c = P(i + 2);
    const flat = Math.abs(a.y - b.y) < 0.01 && Math.abs(a.y - c.y) < 0.01;
    if (!flat) continue;
    const dz = Math.max(a.z, b.z, c.z) - Math.min(a.z, b.z, c.z);
    const dx = Math.max(a.x, b.x, c.x) - Math.min(a.x, b.x, c.x);
    /* a deck at bridge height running the whole map */
    if (a.y > 8 && a.y < 10.5 && dz > 1000) {
      const key = `${mat} y=${a.y.toFixed(2)} x[${Math.min(a.x, b.x, c.x).toFixed(0)},${Math.max(a.x, b.x, c.x).toFixed(0)}]`;
      decks.set(key, (decks.get(key) ?? 0) + 1);
      continue;
    }
    const cx = (a.x + b.x + c.x) / 3, cz = (a.z + b.z + c.z) / 3;
    if (Math.max(dx, dz) < 30 || !overRiver(cx, cz) || a.y < -2) continue;
    plates.push({ mat, y: a.y, dim: Math.max(dx, dz), cx, cz });
  }
});
console.log("— decks at bridge height running the whole map (1796 m in z):");
for (const [k, c] of decks) console.log(`  ${k}  ${c} triangles`);
const seen = new Set();
console.log("— flat surfaces > 30 m over the river band:");
for (const t of plates.sort((p, q) => q.dim - p.dim)) {
  const key = `${t.mat}|${t.y.toFixed(2)}|${Math.round(t.cx / 50)}|${Math.round(t.cz / 50)}|${t.dim.toFixed(0)}`;
  if (seen.has(key)) continue;
  seen.add(key);
  console.log(`  ${t.mat.padEnd(9)} y=${t.y.toFixed(2)}  ${t.dim.toFixed(0)} m  around (${t.cx.toFixed(0)}, ${t.cz.toFixed(0)})`);
}
console.log(`${seen.size} distinct`);
process.exit(0);
