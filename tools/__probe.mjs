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

let y = 0.15;
for (let z = -270; z <= -150; z += 4) {
  const cells = [];
  for (const cx of [-2, 2]) for (const cz of [z - 2, z + 2]) {
    const l = layersAt(F, cx, cz) ?? [];
    cells.push(`${cx},${cz}:${l.length ? l.map((v) => v.toFixed(1)).join("/") : "—"}`);
  }
  const h = sampleMap(F, 0, z, y);
  console.log(`z=${z} refY=${y.toFixed(2)} h=${h === null ? "—" : h.toFixed(2)}\n    ${cells.join("\n    ")}`);
  if (h !== null) y = h;
}
process.exit(0);
