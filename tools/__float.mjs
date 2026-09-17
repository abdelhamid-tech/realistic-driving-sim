/** Throwaway: how much of the city's furniture and ground floats over the river? */
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { buildMapField, layersAt } from "../src/game/mapbuild.ts";

const MEAN_Z = 0, AMP = 260, WAVELEN = 1450, RIVER_HALF_BASE = 95, RIVER_HALF_WIDEN = 28, BANK = 46;
const riverZ = (x) => MEAN_Z + AMP * Math.sin((x / WAVELEN) * Math.PI * 2);
const riverHalf = (x) => RIVER_HALF_BASE + RIVER_HALF_WIDEN * Math.cos((x / WAVELEN) * Math.PI * 4 + 1.1);
const off = riverZ;   // the map is built centred already: engine x/z === build x/z
const inWater = (x, z) => Math.abs(z - off(x)) < riverHalf(x);

const bytes = readFileSync("public/maps/riverbend.glb");
const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
const gltf = await new GLTFLoader().parseAsync(buf, "");
gltf.scene.updateMatrixWorld(true);
const box = new THREE.Box3().setFromObject(gltf.scene);
const tris = [];
const v = new THREE.Vector3();
gltf.scene.traverse((o) => {
  if (!o.isMesh || !o.geometry) return;
  const pos = o.geometry.getAttribute("position");
  const index = o.geometry.getIndex();
  for (let i = 0; i + 2 < (index ? index.count : pos.count); i += 3) {
    for (let k = 0; k < 3; k++) {
      v.fromBufferAttribute(pos, index ? index.getX(i + k) : i + k).applyMatrix4(o.matrixWorld);
      tris.push(v.x, v.y, v.z);
    }
  }
});
console.log("model box", box.min.toArray().map((n) => n.toFixed(1)).join(","), box.max.toArray().map((n) => n.toFixed(1)).join(","));

const F = buildMapField(new Float32Array(tris), { cell: 4, wallHeight: 2.2 });

/* every cell over the water whose field holds a surface between kerb and a metre */
let plates = 0, cells = 0, examples = [];
for (let x = F.x0; x < F.x0 + F.nx * F.cell; x += F.cell) {
  for (let z = F.z0; z < F.z0 + F.nz * F.cell; z += F.cell) {
    if (!inWater(x, z)) continue;
    cells++;
    const l = layersAt(F, x, z) ?? [];
    const hasWater = l.some((h) => Math.abs(h + 3.5) < 0.6);
    const floating = hasWater && l.some((h) => h > -0.5 && h < 1.0);
    if (floating) {
      plates++;
      if (examples.length < 8) examples.push(`(${x.toFixed(0)},${z.toFixed(0)}) ${l.map((n) => n.toFixed(2)).join("/")}`);
    }
  }
}
console.log(`${cells} cells over the river water, ${plates} of them hold a floating ground-level surface`);
console.log(examples.join("\n"));

/* the props the map ships: their spot, in the engine's own coordinates */
const props = JSON.parse(readFileSync("public/maps/riverbend.props.json", "utf8"));
const propsOffsetY = box.max.y;
let floatingProps = 0;
const bySlot = new Map();
for (const [slot, list] of Object.entries(props)) {
  for (const p of list) {
    const y = p.y + box.min.y;         // whatever the writer's offset is, this is a guess
    const l = layersAt(F, p.x, p.z) ?? [];
    const water = l.some((h) => Math.abs(h + 3.5) < 0.6);
    const grounded = l.some((h) => h <= y + 1.2 && h > -0.5);
    if (water && !grounded) {
      floatingProps++;
      bySlot.set(slot, (bySlot.get(slot) ?? 0) + 1);
    }
  }
}
console.log(`${floatingProps} props stand over the water:`, [...bySlot].map(([s, c]) => `${s}:${c}`).join(", "), "(probe offset guess", propsOffsetY.toFixed(2), ")");
process.exit(0);
