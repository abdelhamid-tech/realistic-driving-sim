/** Throwaway: what surfaces does the built map have in one vertical column? */
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const X = Number(process.argv[2] ?? -170);
const Z = Number(process.argv[3] ?? -194);

const bytes = readFileSync("public/maps/riverbend.glb");
const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
const gltf = await new GLTFLoader().parseAsync(buf, "");
gltf.scene.updateMatrixWorld(true);

const v = new THREE.Vector3();
const hits = [];
gltf.scene.traverse((o) => {
  if (!o.isMesh || !o.geometry) return;
  const pos = o.geometry.getAttribute("position");
  const index = o.geometry.getIndex();
  const n = index ? index.count : pos.count;
  const P = (k) => v.fromBufferAttribute(pos, index ? index.getX(k) : k).applyMatrix4(o.matrixWorld).clone();
  for (let i = 0; i + 2 < n; i += 3) {
    const a = P(i), b = P(i + 1), c = P(i + 2);
    // point in triangle, in the xz plane
    const d1 = (b.x - a.x) * (Z - a.z) - (b.z - a.z) * (X - a.x);
    const d2 = (c.x - b.x) * (Z - b.z) - (c.z - b.z) * (X - b.x);
    const d3 = (a.x - c.x) * (Z - c.z) - (a.z - c.z) * (X - c.x);
    const neg = d1 < 0 || d2 < 0 || d3 < 0;
    const pos2 = d1 > 0 || d2 > 0 || d3 > 0;
    if (neg && pos2) continue;
    const det = (b.z - c.z) * (a.x - c.x) + (c.x - b.x) * (a.z - c.z);
    if (Math.abs(det) < 1e-9) continue;
    const l1 = ((b.z - c.z) * (X - c.x) + (c.x - b.x) * (Z - c.z)) / det;
    const l2 = ((c.z - a.z) * (X - c.x) + (a.x - c.x) * (Z - c.z)) / det;
    const l3 = 1 - l1 - l2;
    const y = l1 * a.y + l2 * b.y + l3 * c.y;
    hits.push({ y, mat: o.material?.name ?? o.name ?? "?", a, b, c });
  }
});

hits.sort((p, q) => p.y - q.y);
console.log(`column x=${X} z=${Z}: ${hits.length} surfaces`);
const seen = new Set();
for (const h of hits) {
  const key = h.y.toFixed(2);
  if (seen.has(key)) continue;
  seen.add(key);
  const xs = [h.a.x, h.b.x, h.c.x].map((t) => t.toFixed(0)).join(",");
  const zs = [h.a.z, h.b.z, h.c.z].map((t) => t.toFixed(0)).join(",");
  console.log(`  y=${h.y.toFixed(2)}  ${h.mat}  tri x[${xs}] z[${zs}]`);
}
process.exit(0);
