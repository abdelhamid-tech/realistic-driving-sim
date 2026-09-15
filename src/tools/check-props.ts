/**
 * PROP CHECK — builds the procedural city headless and reads back the spots it
 * recorded for the real street-furniture models (src/game/props.ts): one spot
 * per tree, planting, lamp post and traffic light, on the pavement, facing the
 * way the model has to face.
 *
 * It also reads the shipped GLBs' own vertices, so "the traffic light looks
 * down the street it stops" and "every lamp arm reaches over the road" are
 * measured rather than assumed, and it runs the ground tiling shader patch
 * (src/game/worlddress.ts) to prove the injection still lands.
 *
 *   bun run src/tools/check-props.ts
 *
 * Run it after touching src/game/city.ts (the placement code or the batches it
 * tags), src/game/props.ts or src/game/worlddress.ts.
 */
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { cityPropSpots, buildCity, STREETS, WALK_H, CITY_R, type City } from "../game/city";
import {
  hideLowPolyProps, poleSpot, showLowPolyProps, PROP_SLOT_IDS, PROP_SLOTS,
  type PropSlot, type PropSpot,
} from "../game/props";
import { tileInMetres } from "../game/worlddress";

/* The city draws its signage with a 2D canvas, which Node does not have: a
   no-op stand-in is all it needs, nothing here is ever rendered. */
function fakeCanvas() {
  const ctx = new Proxy(
    {},
    {
      get: (_t, key) => {
        if (key === "measureText") return () => ({ width: 10 });
        if (key === "createLinearGradient" || key === "createRadialGradient") {
          return () => ({ addColorStop: () => {} });
        }
        return () => {};
      },
      set: () => true,
    },
  );
  return { width: 1, height: 1, getContext: () => ctx };
}
(globalThis as unknown as { document: unknown }).document = {
  createElement: () => fakeCanvas(),
  fonts: { ready: Promise.resolve() },
};

let failed = 0;
function check(name: string, ok: boolean, detail: string) {
  if (!ok) failed++;
  console.log(`${ok ? "  ok  " : " FAIL "} ${name}  — ${detail}`);
}

const near = (a: number, b: number, tol = 0.05) => Math.abs(a - b) <= tol;
const offStreet = (v: number) => Math.min(...STREETS.map((s) => Math.abs(v - s)));

console.log("building the city…");
const city: City = buildCity({ aniso: 8 });
void city;

const slots = PROP_SLOT_IDS.filter((s) => (cityPropSpots[s] ?? []).length > 0);
const total = PROP_SLOT_IDS.reduce((n, s) => n + (cityPropSpots[s]?.length ?? 0), 0);

console.log(
  `\ncity props: ${total} spots — ` +
    PROP_SLOT_IDS.map((s) => `${s} ${cityPropSpots[s]?.length ?? 0}`).join(", "),
);

check("every slot is dressed", slots.length === PROP_SLOT_IDS.length, `slots with spots: ${slots.join(", ")}`);
check(
  "the city stands up thousands of props, not hundreds",
  total > 1500,
  `${total} spots`,
);

/* ---------------------------------------------------------------- spot sanity */
for (const slot of PROP_SLOT_IDS) {
  const list = cityPropSpots[slot] ?? [];
  if (!list.length) continue;
  const inside = list.every(
    (s) => Math.abs(s.x) <= CITY_R + 30 && Math.abs(s.z) <= CITY_R + 30 && s.scale > 0,
  );
  check(`${slot}: every spot is inside the city`, inside, `${list.length} spots`);

  /* the dedupe in recordPropSpot: one prop is one spot */
  let closest = Infinity;
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const d = Math.hypot(list[i].x - list[j].x, list[i].z - list[j].z);
      if (d < closest) closest = d;
      if (closest < 1) break;
    }
    if (closest < 1) break;
  }
  check(`${slot}: no spot is a part of another prop`, closest >= 1, `closest pair ${closest.toFixed(2)} m`);
}

/* ------------------------------------------------------------------- foliage */
{
  const trees = cityPropSpots.tree ?? [];
  const onWalk = trees.every((s) => near(s.y, WALK_H, 0.02));
  check("trees stand on the pavement", onWalk, `y = ${WALK_H}`);
  const band = trees.every((s) => {
    const dx = offStreet(s.x);
    const dz = offStreet(s.z);
    return Math.min(Math.abs(dx - 8), Math.abs(dz - 8)) < 0.6;
  });
  check("trees are in the kerb band", band, "8 m off a street centre, ±0.6 m");
}

/* -------------------------------------------------------- lamps and signals */
{
  const lamps = cityPropSpots.lamp ?? [];
  const signals = cityPropSpots.signal ?? [];
  check("the street lamps are on the kerb", lamps.length > 200, `${lamps.length} lamp posts`);
  check("the junctions are lit up", signals.length > 20, `${signals.length} traffic lights`);

  const lampOk = lamps.every((s) => {
    const dx = Math.abs(offStreet(s.x) - 8.2);
    const dz = Math.abs(offStreet(s.z) - 8.2);
    return near(Math.min(dx, dz), 0, 0.05);
  });
  check("a lamp stands 8.2 m off a street centre", lampOk, lamps.length ? "checked them all" : "none placed");

  const signalOk = signals.every((s) => {
    const dx = Math.abs(offStreet(s.x) - 10.6);
    const dz = Math.abs(offStreet(s.z) - 10.6);
    return near(dx, 0) && near(dz, 0);
  });
  check("a signal stands on a junction corner", signalOk, "10.6 m off two street centres");

  const yaws = new Set(lamps.map((s) => s.yaw.toFixed(3)));
  check("lamp arms point at the road, both ways", yaws.size >= 4, `yaws: ${[...yaws].join(", ")}`);
  const signalYaws = new Set(signals.map((s) => s.yaw.toFixed(3)));
  check("signal heads face all four approaches", signalYaws.size === 4, `yaws: ${[...signalYaws].join(", ")}`);

  /* a lamp arm reaches across the kerb: the yaw must point at the street it
     stands beside, never along it */
  const facing = lamps.every((s) => {
    const sx = STREETS.reduce((b, c) => (Math.abs(s.x - c) < Math.abs(s.x - b) ? c : b), STREETS[0]);
    const sz = STREETS.reduce((b, c) => (Math.abs(s.z - c) < Math.abs(s.z - b) ? c : b), STREETS[0]);
    if (Math.abs(Math.abs(s.x - sx) - 8.2) < 0.05) {
      const want = s.x > sx ? Math.PI / 2 : -Math.PI / 2;
      return near(Math.atan2(Math.sin(s.yaw - want), Math.cos(s.yaw - want)), 0, 1e-6);
    }
    const want = s.z > sz ? 0 : Math.PI;
    return near(Math.atan2(Math.sin(s.yaw - want), Math.cos(s.yaw - want)), 0, 1e-6);
  });
  check("every lamp arm reaches over the road", facing, "yaw matches the side it stands on");
}

/* ------------------------------------------------------------ model facing
 *  A spot's yaw is a compass facing, and a model has to agree with it: the
 *  models are read here the way the layer reads them — the position and
 *  normal of every triangle in the shipped GLB — so "the head looks down the
 *  street the right way" is measured, not assumed.
 * ----------------------------------------------------------------------------*/

interface Model {
  /** the model's own front, as a horizontal unit vector */
  front: [number, number];
  /** which way a lamp's arm reaches, as a horizontal unit vector */
  arm: [number, number];
  /** how many triangles draw the front plate (a model with none has no front) */
  plate: number;
}

function readModel(url: string): Model {
  const buf = readFileSync("public/" + url);
  const jsonLen = buf.readUInt32LE(12);
  const json = JSON.parse(buf.subarray(20, 20 + jsonLen).toString("utf8"));
  const bin = 20 + jsonLen + 8;
  const COMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 } as Record<string, number>;
  const read = (i: number) => {
    const a = json.accessors[i];
    const bv = json.bufferViews[a.bufferView];
    const comps = COMP[a.type as string];
    const stride = bv.byteStride ?? comps * 4;
    const base = bin + (bv.byteOffset ?? 0) + (a.byteOffset ?? 0);
    const out = new Float32Array(a.count * comps);
    for (let k = 0; k < a.count; k++) {
      for (let c = 0; c < comps; c++) {
        out[k * comps + c] = buf.readFloatLE(base + k * stride + c * 4);
      }
    }
    return { data: out, count: a.count };
  };

  const prim = json.meshes[0].primitives[0];
  const pos = read(prim.attributes.POSITION);
  const nrm = read(prim.attributes.NORMAL);
  const box = new THREE.Box3();
  for (let i = 0; i < pos.count; i++) {
    box.expandByPoint(new THREE.Vector3(pos.data[i * 3], pos.data[i * 3 + 1], pos.data[i * 3 + 2]));
  }

  /* The front. A traffic light's head hangs out over the side it looks at,
     lens plate and visor included, so the model reaches further on its front
     than on its back. Read that reach, then confirm the side really carries
     outward-facing triangles — the plate the lenses are drawn on. */
  const reach: [number, number, string][] = [
    [-box.min.x, 0, "-X"],
    [box.max.x, 1, "+X"],
    [-box.min.z, 2, "-Z"],
    [box.max.z, 3, "+Z"],
  ];
  reach.sort((a, b) => b[0] - a[0]);
  const front: [number, number] =
    reach[0][2] === "-X" ? [-1, 0] : reach[0][2] === "+X" ? [1, 0] : reach[0][2] === "-Z" ? [0, -1] : [0, 1];
  const axis = [0, 1, 2];
  const want = front[0] !== 0 ? front[0] : front[1];
  const onAxis = front[0] !== 0 ? 0 : 2;
  const span = front[0] !== 0 ? box.max.x - box.min.x : box.max.z - box.min.z;
  const edge = front[0] !== 0
    ? (front[0] < 0 ? box.min.x : box.max.x)
    : (front[1] < 0 ? box.min.z : box.max.z);
  let plate = 0;
  for (let i = 0; i < pos.count; i++) {
    const p = axis.map((k) => pos.data[i * 3 + k]);
    const n = axis.map((k) => nrm.data[i * 3 + k]);
    if (Math.abs(p[onAxis] - edge) > span * 0.25) continue;
    if (n[onAxis] * want < 0.85) continue;
    plate++;
  }

  /* the arm: a lamp's post stands where the world recorded a spot, and its
     arm reaches out to one side — the side its box leans to */
  const armZ = Math.abs(box.min.z) > Math.abs(box.max.z) ? -1 : 1;

  return { front, arm: [0, armZ], plate };
}

function turnYaw(v: [number, number], deg: number): [number, number] {
  const t = THREE.MathUtils.degToRad(deg);
  return [v[0] * Math.cos(t) + v[1] * Math.sin(t), -v[0] * Math.sin(t) + v[1] * Math.cos(t)];
}

/** the same rotation, for a yaw the world stored in radians */
const turnRad = (v: [number, number], rad: number) => turnYaw(v, (rad * 180) / Math.PI);

{
  const variants = new Map(
    PROP_SLOTS.map((s) => [s.id, { info: s, model: readModel(s.variants[0].url), turn: s.variants[0].turn ?? 0 }]),
  );

  /* the traffic light: after its declared turn, its head must look down +Z,
     which is what a spot yaw of 0 means everywhere else in the world */
  const sig = variants.get("signal")!;
  const head = turnYaw(sig.model.front, sig.turn);
  const frontName = sig.model.front[0] !== 0
    ? `${sig.model.front[0] < 0 ? "-X" : "+X"}`
    : `${sig.model.front[1] < 0 ? "-Z" : "+Z"}`;
  check(
    "the signal's head points where a yaw of 0 points",
    head[0] < 0.02 && head[1] > 0.98 && sig.model.plate > 4,
    `head plate on ${frontName} (${sig.model.plate} tris), turned ${sig.turn}° → (${head.map((n) => n.toFixed(2)).join(", ")})`,
  );

  /* the street lamp: its arm has to reach over the road from the kerb, and
     the city's spot yaws have to deliver that at every lamp it plants */
  const lamp = variants.get("lamp")!;
  const lamps = cityPropSpots.lamp ?? [];
  const armOff: string[] = [];
  const armOverRoad = lamps.every((s) => {
    const a = turnRad(lamp.model.arm, s.yaw);
    const sx = STREETS.reduce((b, c) => (Math.abs(s.x - c) < Math.abs(s.x - b) ? c : b), STREETS[0]);
    const sz = STREETS.reduce((b, c) => (Math.abs(s.z - c) < Math.abs(s.z - b) ? c : b), STREETS[0]);
    /* whichever street it stands beside, the arm must point at it */
    const toStreet = Math.abs(Math.abs(s.x - sx) - 8.2) < 0.05
      ? [Math.sign(sx - s.x), 0]
      : [0, Math.sign(sz - s.z)];
    const ok = a[0] * toStreet[0] + a[1] * toStreet[1] > 0.9;
    if (!ok && armOff.length < 4) {
      armOff.push(
        `(${s.x.toFixed(1)}, ${s.z.toFixed(1)}) yaw ${s.yaw.toFixed(3)} rad = ${((s.yaw * 180) / Math.PI).toFixed(1)}° arm ${a.map((n) => n.toFixed(2)).join(",")} street (${sx}, ${sz}) modelArm ${lamp.model.arm.map((n) => n.toFixed(2)).join(",")}`,
      );
    }
    return ok;
  });
  check(
    "every lamp arm reaches over the road it stands beside",
    armOverRoad,
    `${lamps.length} lamps, arm ${lamp.model.arm[1] < 0 ? "-Z" : "+Z"} in the model${armOff.length ? ` · ${armOff.join(" · ")}` : ""}`,
  );

  /* the signals: at every junction the four corners must cover the four
     approaches, so no driver arrives at a light nobody can see */
  const signals = cityPropSpots.signal ?? [];
  const junctions = new Map<string, Map<string, number>>();
  let cover = true;
  for (const s of signals) {
    const cx = STREETS.reduce((b, c) => (Math.abs(s.x - c) < Math.abs(s.x - b) ? c : b), STREETS[0]);
    const cz = STREETS.reduce((b, c) => (Math.abs(s.z - c) < Math.abs(s.z - b) ? c : b), STREETS[0]);
    const f = turnRad(head, s.yaw);
    const dir = `${Math.round(f[0])},${Math.round(f[1])}`;
    const key = `${cx},${cz}`;
    const m = junctions.get(key) ?? new Map<string, number>();
    m.set(dir, (m.get(dir) ?? 0) + 1);
    junctions.set(key, m);
  }
  for (const m of junctions.values()) {
    if (m.size !== 4) cover = false;
    for (const n of m.values()) if (n !== 1) cover = false;
  }
  check(
    "every junction has one light per approach, and no duplicates",
    cover && junctions.size > 20,
    `${junctions.size} junctions, all with four distinct facings`,
  );
}

/* ------------------------------------------------------------- classification */
{
  /* the grid decides which slot a mast belongs to: nothing may fall through */
  const probes: [number, number, string][] = [
    [220 + 8.2, 130, "lamp"],
    [220 - 8.2, 130, "lamp"],
    [330, 220 + 8.2, "lamp"],
    [330 - 8.2, 220 - 8.2, "lamp"],
    [110 + 10.6, 110 + 10.6, "signal"],
    [110 - 10.6, 110 - 10.6, "signal"],
    [110 - 10.6, 110 + 10.6, "signal"],
    [110 + 10.6, 110 - 10.6, "signal"],
    [3.7, 41.2, "none"],
  ];
  let ok = true;
  for (const [x, z, want] of probes) {
    const hit = poleSpot(x, z, STREETS);
    const got = hit ? hit.slot : "none";
    if (got !== want) {
      ok = false;
      console.log(`        (${x}, ${z}) → ${got}, expected ${want}`);
    }
  }
  check("the street grid sorts masts into lamps and signals", ok, `${probes.length} probes`);
}

/* ------------------------------------------------- the engine's hiding contract
 *  The engine hides a slot's low-poly twin once real models cover it. That
 *  only works if the city named the meshes (and marked the lens materials),
 *  which is what this checks — with the real hide/show calls. */
{
  const tags = new Set<string>();
  const marked = new Set<string>();
  const meshTag = (o: THREE.Object3D) => (o.name.startsWith("prop:") ? o.name.slice(5) : null);
  const materialSlots = (o: THREE.Object3D) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return [] as string[];
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    return list.map((m) => String(m?.userData?.propSlot ?? "")).filter(Boolean);
  };
  city.root.traverse((o) => {
    const tag = meshTag(o);
    if (tag) tags.add(tag);
    for (const s of materialSlots(o)) marked.add(s);
  });
  check(
    "every slot has a tagged low-poly twin to switch off",
    PROP_SLOT_IDS.every((s) => [...tags].some((t) => t.split("+").includes(s))),
    `tags: ${[...tags].join(", ")}`,
  );
  check(
    "a mesh shared by two slots is tagged with both",
    [...tags].some((t) => t.split("+").length > 1),
    `tagged: ${[...tags].join(", ")}`,
  );
  check("the signal lenses carry their slot on the material", marked.has("signal"), `marked: ${[...marked].join(", ")}`);

  const live = (): string[] => {
    const out: string[] = [];
    city.root.traverse((o) => {
      if (!o.visible) return;
      if (meshTag(o) || materialSlots(o).length) out.push(o.name || "(unnamed)");
    });
    return out;
  };
  const before = live().length;
  hideLowPolyProps(city.root, [...PROP_SLOT_IDS]);
  const after = live().length;
  showLowPolyProps(city.root);
  const back = live().length;
  check("the low-poly props stand down when the models cover their slot", after === 0 && before > 0, `${before} → ${after} visible`);
  check("and they come back when a layer is thrown away", back === before, `${after} → ${back} visible`);
}

/* --------------------------------------------------------- the ground's tiling
 *  The city's ground wears its textures by SIZE, not per plane: every ground
 *  material is patched to sample its map in metres (src/game/worlddress.ts),
 *  anchored on three's uv include. If a three upgrade renames that anchor the
 *  patch stops working SILENTLY — the streets just go back to stretched
 *  squares — so the injection is run here and read back.
 * ----------------------------------------------------------------------------*/
{
  const phys = THREE.ShaderLib.physical.vertexShader;
  check(
    "three still exposes the hook the ground tiling anchors on",
    phys.includes("#include <uv_vertex>") && phys.includes("#include <uv_pars_vertex>"),
    "meshphysical's vertex shader",
  );
  for (const [name, metres, win] of [
    ["a plain tile", 4, undefined],
    ["a window of a tile", 5, { offset: [0.13, 0.02] as [number, number], span: [0.09, 0.09] as [number, number] }],
  ] as [string, number, { offset: [number, number]; span: [number, number] } | undefined][]) {
    const mat = new THREE.MeshStandardMaterial();
    tileInMetres(mat, metres, win);
    const shader = { uniforms: {} as Record<string, unknown>, vertexShader: phys, fragmentShader: "" };
    mat.onBeforeCompile?.(shader as unknown as THREE.WebGLProgramParametersWithUniforms, null as unknown as THREE.WebGLRenderer);
    const injected = shader.vertexShader.includes("vMapUv = uWinOff + fract(mUV / uTileM) * uWinSpan");
    const scaled = shader.vertexShader.includes("length(instanceMatrix[1])");
    check(
      `the ground tiling is injected for ${name}`,
      injected && scaled && shader.uniforms.uTileM !== undefined,
      `${metres} m per repeat${win ? ", through the tile's plain band" : ""}`,
    );
  }
}

/* ------------------------------------------------------------------ sizes */
{
  const per = PROP_SLOT_IDS.map((s: PropSlot) => (cityPropSpots[s] ?? []).length);
  const some: PropSpot | undefined = cityPropSpots.tree?.[0];
  check(
    "the spots carry a position, a heading and a size",
    !!some && Number.isFinite(some.x + some.y + some.z + some.yaw + some.scale),
    some ? `(x ${some.x.toFixed(1)}, z ${some.z.toFixed(1)}, yaw ${some.yaw.toFixed(2)})` : "no tree spots",
  );
  console.log(`\nper slot: ${PROP_SLOT_IDS.map((s, i) => `${s}=${per[i]}`).join("  ")}`);
}

console.log(failed ? `\n${failed} check(s) failed` : "\nthe world stands its props on the right spots");
process.exit(failed ? 1 : 0);
