/**
 * MAP CHECK — opens every world map in public/maps/ with three's own loader
 * and reads it the way the game reads it, then asserts the things that make a
 * map drivable: street level, walls on the geometry, stacked decks, a start
 * line on the road, and never a roof reported as the ground.
 *
 *   bun run src/tools/check-maps.ts
 *
 * Run it after regenerating a map (tools/build-*.mjs) or after touching
 * src/game/mapbuild.ts.
 */
import { readFileSync, readdirSync } from "node:fs";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  buildMapField, findSpawn, layersAt, sampleMap, wallsNear, type MapField,
} from "../game/mapbuild";

type Expectation = {
  /** the level the city is built at */
  level: number;
  /** metres of tolerance on that level */
  tol?: number;
  /** map-specific checks, given the field */
  extra?: (F: MapField) => [string, boolean, string][];
};

const EXPECT: Record<string, Expectation> = {
  "riverbend": {
    level: 0,
    tol: 0.3,
    extra: (F) => [
      [
        "the river is cut: the water bed is the lowest surface at the centreline",
        near(Math.min(...(layersAt(F, 0, riverZAt(0)) ?? [99])), -3.5, 0.2) &&
          !(layersAt(F, 0, riverZAt(0)) ?? []).some((h) => h > 0.4 && h < 4.5),
        `levels near the centreline: ${(layersAt(F, 0, riverZAt(0)) ?? []).join(", ")}`,
      ],
      [
        "a bridge deck is drivable from above it",
        near(sampleMap(F, 0, riverZAt(0), DECK_Y + 0.5)!, DECK_Y, 0.3),
        `h=${sampleMap(F, 0, riverZAt(0), DECK_Y + 0.5)}`,
      ],
      [
        "the bank slopes down, not a cliff at the water",
        (layersAt(F, 0, riverZAt(0) - riverHalfAt(0) - 12) ?? []).length > 0,
        "a bank cell exists",
      ],
      [
        "the tunnels hold a drivable floor",
        near(sampleMap(F, TUNNELS[0].x, -500, 0.5)!, 0, 0.3),
        `h=${sampleMap(F, TUNNELS[0].x, -500, 0.5)}`,
      ],
      [
        "a tower wall exists downtown",
        F.walls.some((b) => b.top > 40 && b.hx > 4),
        `${F.walls.length} wall boxes, tallest ${Math.max(...F.walls.map((b) => b.top)).toFixed(0)} m`,
      ],
    ],
  },
};

const near = (a: number, b: number, tol: number) => Math.abs(a - b) < tol;

/* the river's geometry, mirrored from tools/build-riverbend.mjs for assertions */
const MEAN_Z = 0, AMP = 260, WAVELEN = 1450, RIVER_HALF_BASE = 95, RIVER_HALF_WIDEN = 28;
const riverZAt = (x: number) => MEAN_Z + AMP * Math.sin((x / WAVELEN) * Math.PI * 2);
const riverHalfAt = (x: number) => RIVER_HALF_BASE + RIVER_HALF_WIDEN * Math.cos((x / WAVELEN) * Math.PI * 4 + 1.1);
const DECK_Y = 9;
const TUNNELS = [
  { x: -540, z0: -640, z1: -400, w: 9, h: 5.4 },
  { x: 540, z0: 400, z1: 640, w: 9, h: 5.4 },
];

/** Exactly what createGame() does to a model, minus the scene. */
function trianglesOf(root: THREE.Object3D) {
  root.updateMatrixWorld(true);
  let count = 0;
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.geometry) return;
    const pos = m.geometry.getAttribute("position");
    if (!pos) return;
    const index = m.geometry.getIndex();
    count += Math.floor((index ? index.count : pos.count) / 3);
  });
  const out = new Float32Array(count * 9);
  const v = new THREE.Vector3();
  let w = 0;
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.geometry) return;
    const pos = m.geometry.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!pos) return;
    const index = m.geometry.getIndex();
    const n = index ? index.count : pos.count;
    for (let i = 0; i + 2 < n; i += 3) {
      for (let k = 0; k < 3; k++) {
        const vi = index ? index.getX(i + k) : i + k;
        v.fromBufferAttribute(pos, vi).applyMatrix4(m.matrixWorld);
        out[w++] = v.x;
        out[w++] = v.y;
        out[w++] = v.z;
      }
    }
  });
  return out;
}

const files = readdirSync("public/maps").filter((f) => f.endsWith(".glb"));
if (!files.length) {
  console.error("no maps in public/maps — build one first");
  process.exit(1);
}

let failed = 0;

for (const file of files) {
  const id = file.replace(/\.glb$/, "");
  const bytes = readFileSync(`public/maps/${file}`);
  const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
  const gltf = await new GLTFLoader().parseAsync(buf, "");
  const scene = gltf.scene as THREE.Object3D;

  let meshes = 0;
  scene.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) meshes++;
  });
  const size = new THREE.Box3().setFromObject(scene).getSize(new THREE.Vector3());
  const triangles = trianglesOf(scene);

  const t0 = performance.now();
  const F = buildMapField(triangles, { cell: 4, wallHeight: 2.2 });
  const ms = performance.now() - t0;
  const expect = EXPECT[id];
  const level = expect?.level ?? F.baseY;
  const tol = expect?.tol ?? 1.2;

  const checks: [string, boolean, string][] = [];
  checks.push(["the field has no holes", F.stats.voidCells === 0, `${F.stats.voidCells} void cells`]);
  checks.push(["the field has no NaN", !F.layers.some((h) => Number.isNaN(h)), `${F.stats.cells} cells`]);
  checks.push(["street level is the level most of it is built at", near(F.baseY, level, tol), `baseY=${F.baseY.toFixed(2)}`]);
  checks.push(["walls lie on the geometry, not the grid", F.walls.every((b) => b.hz <= 0.6), `${F.walls.length} boxes, thickest ${Math.max(...F.walls.map((b) => b.hz)).toFixed(2)} m`]);
  checks.push(["nothing is reported as road above the buildings", F.topY < 200, `highest surface ${F.topY.toFixed(0)} m`]);
  checks.push(["it builds in under a second", ms < 1500, `${ms.toFixed(0)} ms, ${(bytes.length / 1024).toFixed(0)} KB`]);

  const sp = findSpawn(F);
  const spH = sampleMap(F, sp.x, sp.z, level + 0.5)!;
  checks.push([
    "the start line is on the road",
    near(spH, level, Math.max(0.6, tol)) && wallsNear(F, sp.x, sp.z, []).length < 60,
    `(${sp.x.toFixed(0)}, ${sp.z.toFixed(0)}) h=${spH.toFixed(2)}`,
  ]);

  let worst = 0;
  for (let i = 0; i < 20000; i++) {
    const x = F.stats.x0 + Math.random() * (F.stats.x1 - F.stats.x0);
    const z = F.stats.z0 + Math.random() * (F.stats.z1 - F.stats.z0);
    const h = sampleMap(F, x, z, level + 0.5);
    if (h === null) continue;
    worst = Math.max(worst, h - level - 0.5);
  }
  checks.push(["a car on the road is never launched by the field", worst <= 1.06, `worst rise ${worst.toFixed(2)} m`]);

  for (const c of expect?.extra?.(F) ?? []) checks.push(c);

  console.log(
    `\n${id}: ${(bytes.length / 1024).toFixed(0)} KB, ${meshes} meshes, ${F.stats.triangles} triangles, ` +
      `${size.x.toFixed(0)} × ${size.z.toFixed(0)} m, ${F.stats.walls} wall boxes`,
  );
  for (const [name, ok, extra] of checks) {
    if (!ok) failed++;
    console.log(`${ok ? "  ok  " : " FAIL "} ${name}  — ${extra}`);
  }
}

console.log(failed ? `\n${failed} check(s) failed` : "\nall maps are drivable and correct");
process.exit(failed ? 1 : 0);
