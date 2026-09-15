/**
 * PROP CHECK — builds the procedural city headless and reads back the spots it
 * recorded for the real street-furniture models (src/game/props.ts): one spot
 * per tree, planting, lamp post and traffic light, on the pavement, facing the
 * way the model has to face.
 *
 *   bun run src/tools/check-props.ts
 *
 * Run it after touching src/game/city.ts (the placement code or the batches it
 * tags) or src/game/props.ts.
 */
import * as THREE from "three";
import { cityPropSpots, buildCity, STREETS, WALK_H, CITY_R, type City } from "../game/city";
import {
  hideLowPolyProps, poleSpot, showLowPolyProps, PROP_SLOT_IDS, type PropSlot, type PropSpot,
} from "../game/props";

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
