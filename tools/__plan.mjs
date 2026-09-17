/**
 * Throwaway: draw a map's plan with src/game/plan.ts and print it as text, so
 * the world on the radar can be read rather than assumed.
 *
 *   bun run tools/__plan.mjs [file.glb] [columns]
 */
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { rasterModelPlan, PLAN_INK } from "../src/game/plan.ts";

const file = process.argv[2] ?? "public/maps/riverbend.glb";
const W = Number(process.argv[3] ?? 116);

const bytes = readFileSync(file);
const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
const gltf = await new GLTFLoader().parseAsync(buf, "");
gltf.scene.updateMatrixWorld(true);

const t0 = performance.now();
/* the engine sits a model on the ground at y = 0 before reading it (see
   loadWorldMap), so the plan is drawn in those coordinates too */
gltf.scene.position.y = -new THREE.Box3().setFromObject(gltf.scene).min.y;
gltf.scene.updateMatrixWorld(true);
const r = rasterModelPlan(gltf.scene);
const ms = performance.now() - t0;
if (!r) {
  console.error("no plan");
  process.exit(1);
}
const total = r.px * r.px;
console.log(
  `${file}: plan ${r.px} px over ${r.span.toFixed(0)} m (${(r.span / r.px).toFixed(2)} m/px) ` +
    `in ${ms.toFixed(0)} ms, from (${r.x0.toFixed(0)}, ${r.z0.toFixed(0)}), built at ${r.baseY.toFixed(2)} m`,
);
console.log(
  Object.entries(r.painted)
    .map(([k, v]) => `${k} ${((v / total) * 100).toFixed(1)}%`)
    .join("  "),
);

/* the palette, read back the way anything else would */
const ink = {
  ".": PLAN_INK.ground,
  w: PLAN_INK.water,
  R: PLAN_INK.road,
  g: PLAN_INK.grass,
  s: PLAN_INK.sand,
  c: PLAN_INK.paste,
  B: PLAN_INK.roof[0],
  D: PLAN_INK.roof[1],
  E: PLAN_INK.roof[2],
  F: PLAN_INK.roof[3],
};
const glyph = new Map(Object.entries(ink).map(([ch, rgb]) => [rgb, ch]));

const H = Math.round((W * r.px) / r.px / 2); /* square world, 2:1 characters */
const px = r.px;
const lines = [];
for (let row = 0; row < H; row++) {
  let line = "";
  for (let col = 0; col < W; col++) {
    const x = Math.min(px - 1, Math.floor(((col + 0.5) / W) * px));
    const y = Math.min(px - 1, Math.floor(((row + 0.5) / H) * px));
    const q = (y * px + x) * 4;
    const rgb = (r.rgba[q] << 16) | (r.rgba[q + 1] << 8) | r.rgba[q + 2];
    line += glyph.get(rgb) ?? "?";
  }
  lines.push(line);
}
console.log(`  north (+z) up · w water  R road  g park  c pavement  B..F buildings  . ground`);
console.log(lines.join("\n"));
process.exit(0);
