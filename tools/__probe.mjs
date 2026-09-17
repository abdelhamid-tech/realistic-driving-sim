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

/* The car drives in centimetres, not in field cells: 60 km/h is 7 cm a step at
   240 Hz. So the drive is sampled the way the physics samples it, and what is
   reported is the biggest climb or drop between one physics step and the next. */
const X = Number(process.argv[2] ?? -170);
const STEP = 0.25;
const from = Number(process.argv[3] ?? -410);
const to = Number(process.argv[4] ?? -120);
let y = 0.15;
let worst = 0;
let worstAt = 0;
const marks = [];
for (let z = from; z <= to; z += STEP) {
  const h = sampleMap(F, X, z, y);
  if (h === null) {
    console.log(`z=${z.toFixed(1)} null`);
    continue;
  }
  const jump = Math.abs(h - y);
  if (jump > worst) {
    worst = jump;
    worstAt = z;
  }
  if (Math.abs(z - Math.round(z / 20) * 20) < STEP / 2) marks.push(`z=${Math.round(z)} y=${h.toFixed(2)}`);
  y = h;
}
console.log(`x=${X}, ${from} → ${to}, physics step ${STEP} m`);
console.log(marks.join("  "));
console.log(`worst step ${worst.toFixed(2)} m at z=${worstAt.toFixed(1)}, final y ${y.toFixed(2)}`);
console.log(`column at ${worstAt.toFixed(0)}:`, (layersAt(F, X, worstAt) ?? []).map((v) => v.toFixed(2)).join("/"));
process.exit(0);
