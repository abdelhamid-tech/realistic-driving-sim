/** Throwaway: drive out to the river island and back on its causeway. */
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { buildMapField, layersAt, sampleMap } from "../src/game/mapbuild";

const bytes = readFileSync("public/maps/riverbend.glb");
const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
const gltf = await new GLTFLoader().parseAsync(buf, "");
gltf.scene.updateMatrixWorld(true);
const tris = [];
gltf.scene.traverse((o) => {
  if (!o.isMesh || !o.geometry) return;
  const pos = o.geometry.getAttribute("position");
  const index = o.geometry.getIndex();
  const v = new THREE.Vector3();
  for (let i = 0; i + 2 < (index ? index.count : pos.count); i += 3) {
    for (let k = 0; k < 3; k++) {
      v.fromBufferAttribute(pos, index ? index.getX(i + k) : i + k).applyMatrix4(o.matrixWorld);
      tris.push(v.x, v.y, v.z);
    }
  }
});
const F = buildMapField(new Float32Array(tris), { cell: 4, wallHeight: 2.2 });

const X = -170;
let y = 0.15;
let worst = 0;
for (let z = -410; z <= -150; z += 4) {
  const h = sampleMap(F, X, z, y);
  const l = layersAt(F, X, z) ?? [];
  if (h === null) {
    console.log(`z=${z} null`);
    continue;
  }
  worst = Math.max(worst, Math.abs(h - y));
  console.log(`z=${z} y=${y.toFixed(2)} -> ${h.toFixed(2)}  layers ${l.map((v) => v.toFixed(2)).join("/")}`);
  y = h;
}
console.log("worst step", worst.toFixed(2), "final y", y.toFixed(2));
process.exit(0);
