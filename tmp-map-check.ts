/* Headless smoke test for the map pipeline: no three.js, no browser. */
import { buildMapField, sampleMap, layersAt, wallsNear, findSpawn } from "./src/game/mapbuild";

type Tri = number[];

function box(tris: Tri[], x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) {
  const p: [number, number, number][] = [
    [x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0],
    [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1],
  ];
  const q = [[0, 1, 2], [0, 2, 3], [4, 6, 5], [4, 7, 6], [0, 4, 5], [0, 5, 1],
    [1, 5, 6], [1, 6, 2], [2, 6, 7], [2, 7, 3], [3, 7, 4], [3, 4, 0]];
  for (const f of q) for (const i of f) tris.push(...p[i]);
}

function ground(tris: Tri[], x0: number, z0: number, x1: number, z1: number, y = 0) {
  tris.push(x0, y, z0, x1, y, z0, x1, y, z1, x0, y, z0, x1, y, z1, x0, y, z1);
}

function check(name: string, ok: boolean, extra = "") {
  console.log(`${ok ? "  ok  " : " FAIL "} ${name}${extra ? "  — " + extra : ""}`);
  if (!ok) process.exitCode = 1;
}

/* ------------------------------------------------------------------ city 1 */
/* 400 m of street grid with 3x3 blocks of buildings                          */
{
  const tris: Tri[] = [];
  ground(tris, -200, -200, 200, 200);
  const blocks = [-150, -50, 50, 150];
  let built = 0;
  for (const bx of blocks) {
    for (const bz of blocks) {
      if (Math.abs(bx) < 60 && Math.abs(bz) < 60) continue; // leave the middle open
      box(tris, bx - 35, 0, bz - 35, bx + 35, 24 + (bx + bz) / 20, bz + 35);
      built++;
    }
  }
  const trisF = new Float32Array(tris);
  const t = performance.now();
  const F = buildMapField(trisF, { cell: 4 });
  const ms = performance.now() - t;
  console.log(`\nsynthetic city: ${built} buildings, ${F.stats.triangles} triangles`);
  console.log("  stats:", JSON.stringify(F.stats));

  check("no NaN in the field", F.layers.every(Number.isFinite) || !F.layers.some((v) => Number.isNaN(v)));
  check(`field built fast (${ms.toFixed(0)} ms)`, ms < 3000);
  check("street level is 0", Math.abs(F.baseY) < 0.01, `baseY=${F.baseY}`);
  check("open ground samples at 0", Math.abs(sampleMap(F, 0, 0, 0.4)! - 0) < 0.01);
  check("street between blocks is drivable", Math.abs(sampleMap(F, -150, 0, 0.4)! - 0) < 0.01);
  check("a building footprint does not report its roof", Math.abs(sampleMap(F, 150, 150, 0.4)! - 0) < 1.2, `h=${sampleMap(F, 150, 150, 0.4)}`);
  check("outer edge of the model is still world", sampleMap(F, 150, 150, 0.4) !== null);

  const near = wallsNear(F, 150, 150, []);
  check("walls are reported inside a building", near.length > 0, `${near.length} boxes`);
  const outside = wallsNear(F, 0, 0, []);
  check("no wall reported in the open middle", outside.length === 0, `${outside.length} boxes`);

  const w = F.walls.find((b) => Math.abs(b.x - (-150)) < 40 && Math.abs(b.z - (-150)) < 40)!;
  check("a wall box sits on the building footprint", !!w, w ? `centre ${w.x.toFixed(0)},${w.z.toFixed(0)} half ${w.hx}x${w.hz} top ${w.top.toFixed(1)}` : "none");
  check("wall boxes cover the footprint", !!w && w.hx > 2 && w.hz > 2 && w.top > 20);

  const sp = findSpawn(F);
  const spH = sampleMap(F, sp.x, sp.z, F.baseY + 0.5)!;
  check("spawn is on drivable ground", Math.abs(spH - F.baseY) < 1.3, `(${sp.x.toFixed(0)},${sp.z.toFixed(0)}) h=${spH.toFixed(2)} yaw=${((sp.yaw * 180) / Math.PI).toFixed(0)}°`);
  const spawnBoxes = wallsNear(F, sp.x, sp.z, []);
  check("no wall at the spawn point", spawnBoxes.every((b) => Math.abs(sp.x - b.x) > b.hx || Math.abs(sp.z - b.z) > b.hz), `${spawnBoxes.length} near`);
}

/* ------------------------------------------------------------------ city 2 */
/* an overpass: street at 0, deck at 9 m on pillars                           */
{
  const tris: Tri[] = [];
  ground(tris, -300, -300, 300, 300);
  /* deck */
  ground(tris, -300, -20, 300, 20, 9);
  box(tris, -300, 0, -20, 300, 9, -18);
  box(tris, -300, 0, 18, 300, 9, 20);
  /* pillars */
  for (let x = -250; x <= 250; x += 100) {
    box(tris, x - 2, 0, -2, x + 2, 9, 2);
  }
  const F = buildMapField(new Float32Array(tris), { cell: 3 });
  console.log("\noverpass: stats:", JSON.stringify(F.stats));

  const under = layersAt(F, 0, 0);
  check("the deck cell holds two surfaces", under.length >= 2, `layers=${under.map((h) => h.toFixed(1)).join(", ")}`);
  check("driving under the deck stays at street level", Math.abs(sampleMap(F, 0, 0, 0.4)! - 0) < 0.4, `h=${sampleMap(F, 0, 0, 0.4)!.toFixed(2)}`);
  check("driving on the deck stays at deck level", Math.abs(sampleMap(F, 0, 0, 9.4)! - 9) < 0.4, `h=${sampleMap(F, 0, 0, 9.4)!.toFixed(2)}`);
  check("off the deck, only the street exists", layersAt(F, 0, -120).length === 1, `layers=${layersAt(F, 0, -120).map((h) => h.toFixed(1)).join(",")}`);
  const pillar = wallsNear(F, 0, 0, []);
  check("pillars are walls", pillar.some((b) => b.hx < 6 && b.hz < 6), `${pillar.length} boxes near the middle`);

  /* the car must never be launched by a cell it cannot reach */
  let worst = 0;
  for (let i = 0; i < 4000; i++) {
    const x = (Math.random() - 0.5) * 600;
    const z = (Math.random() - 0.5) * 600;
    const h = sampleMap(F, x, z, 0.45);
    if (h === null) continue;
    worst = Math.max(worst, h - 0.45);
  }
  check("street-level sampling never rises more than the step limit", worst <= 1.05 + 1e-6, `worst rise ${worst.toFixed(2)} m`);
}

/* ------------------------------------------------------------- degenerate */
{
  let threw = false;
  try {
    buildMapField(new Float32Array([]));
  } catch {
    threw = true;
  }
  check("an empty mesh fails loudly", threw);

  const t = new Float32Array([0, 0, 0, 10, 0, 0, 10, 0, 10, 0, 0, 0, 10, 0, 10, 0, 0, 10]);
  const F = buildMapField(t, { cell: 4 });
  check("a bare plane still yields a usable field", F.stats.walls === 0 && F.counts[0] === 1, `${F.stats.cells} cells`);
  check("sampling outside the field returns null", sampleMap(F, 100000, 100000, 0) === null);
}

console.log("\ndone.");
