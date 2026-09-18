/**
 * RIVERBEND — the one and only world map of the game.
 *
 *   bun run tools/build-riverbend.mjs
 *   → public/maps/riverbend.glb
 *
 * Generated from code so it can be rebuilt and tuned. The city sits on both
 * banks of a wide, meandering river:
 *
 *   · a wide, sinuous river cut through the middle, with landscaped banks
 *   · 6 unique crossings (arch, cable-stayed, girder, suspension, pontoon,
 *     bascule), each carrying a real road up ramps built as embankments — and
 *     the owner's own bridge model can take the place of one of them, baked in
 *     as real geometry: see tools/bridge/README.md
 *   · an island in the river, with a causeway a car can drive onto it
 *   · downtown: towers toward the centre of each bank
 *   · residential quarters: small blocks, pitched roofs
 *   · an industrial zone: halls, silos, chimneys, tanks
 *   · warehouses and quays on the industrial bank
 *   · a shopping mall with a car park
 *   · parks with paths, ponds and tree clumps
 *   · a peripheral forest ring of trees
 *   · a ring boulevard, an interchange, two tunnels under the river banks
 *   · no people, no vehicles — an empty stage, optimised for a game
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { geometryBuilder, writeGLB } from "./glb.mjs";
import { BRIDGE_DIR, bridgeOptions, fitToCrossing, loadBridgeModel } from "./bridge.mjs";
import { loadBuildings, buildingPalette, bakeBuilding } from "./buildings.mjs";

/* --------------------------------------------------- the owner's buildings *
 *  The models in public/models/buildings/ — dropped in by the owner — replace
 *  the towers, homes, halls and warehouses the city used to draw itself. They
 *  are baked as real triangles on the same lots, so their walls are solid and
 *  their roofs are drivable-by-collision exactly like the rest of the city. */
const OWN_BUILDINGS = await loadBuildings();
const OWN_BUILDING_PALETTE = buildingPalette(OWN_BUILDINGS.byName);
/** where the buildings' own materials start, once appended */
let BLD_MAT_BASE = -1;

/* ------------------------------------------------------------------ palette */
const BASE_MATERIALS = [
  { name: "asphalt",  color: [0.12, 0.13, 0.15], rough: 0.95, uv: 14 }, // one road tile ≈ 14 m: two lanes + kerbs
  { name: "paint",    color: [0.86, 0.84, 0.76], rough: 0.7,  uv: 0 },  // no texture: paint stays flat
  { name: "concrete", color: [0.55, 0.53, 0.49], rough: 0.9,  uv: 4 },
  { name: "glass",    color: [0.26, 0.38, 0.47], rough: 0.28, metal: 0.45, uv: 0 },
  { name: "brick",    color: [0.44, 0.28, 0.21], rough: 0.95, uv: 6 },
  { name: "roof",     color: [0.19, 0.20, 0.22], rough: 0.95, uv: 0 },
  { name: "water",    color: [0.06, 0.19, 0.27], rough: 0.18, metal: 0.1, uv: 40 },
  { name: "grass",    color: [0.22, 0.33, 0.14], rough: 1,    uv: 5 },
  { name: "steel",    color: [0.55, 0.58, 0.62], rough: 0.5,  metal: 0.6, uv: 0 },
  { name: "cable",    color: [0.82, 0.83, 0.85], rough: 0.35, metal: 0.7, uv: 0 },
  { name: "sand",     color: [0.62, 0.56, 0.42], rough: 1,    uv: 3 },
  { name: "trunk",    color: [0.28, 0.21, 0.14], rough: 1,    uv: 0 },
  { name: "leaf",     color: [0.16, 0.29, 0.11], rough: 1,    uv: 3 },
  { name: "tile",     color: [0.58, 0.24, 0.18], rough: 0.9,  uv: 5 },
  { name: "yellow",   color: [0.85, 0.62, 0.10], rough: 0.8,  uv: 0 },
  { name: "lampOff",  color: [0.18, 0.18, 0.18], rough: 0.6,  uv: 0 },
  { name: "sigRed",   color: [0.45, 0.05, 0.04], rough: 0.5,  uv: 0, emissive: [0.9, 0.06, 0.05] },
  { name: "sigAmber", color: [0.45, 0.28, 0.03], rough: 0.5,  uv: 0, emissive: [0.9, 0.55, 0.04] },
  { name: "sigGreen", color: [0.04, 0.36, 0.10], rough: 0.5,  uv: 0, emissive: [0.05, 0.85, 0.16] },
];

/* ------------------------------------------------------- the owner's bridge *
 *  A model dropped in tools/bridge/ is baked into this map, in place of the
 *  crossing it is fitted to. It is not a prop and it is not decoration: its
 *  triangles join the city's own mesh, so its roadway becomes drivable ground
 *  and its railings become walls, exactly like the bridges built below.
 *
 *  A model with no bridge.json is fitted as it stands — turned so its length
 *  runs across the river, scaled once to span bank to bank, and dropped so its
 *  roadway meets DECK_Y with every other bridge. With no model in the folder,
 *  nothing here changes and the map builds exactly as before.
 * -------------------------------------------------------------------------*/
const bridgeOpts = bridgeOptions();
const bridgeModel = await loadBridgeModel(BRIDGE_DIR, bridgeOpts);
/** one material for the whole bridge, or the model's own colours */
let bridgeMatFixed = -1;
let bridgePalette = [];
if (bridgeModel) {
  const wanted = bridgeOpts.material
    ? BASE_MATERIALS.findIndex((m) => m.name === bridgeOpts.material)
    : -1;
  if (wanted >= 0) {
    bridgeMatFixed = wanted;
  } else {
    if (bridgeOpts.material) {
      console.warn(`  ! bridge.json asks for material "${bridgeOpts.material}", which the map has not got — keeping the model's own colours`);
    }
    /* the palette is the city's, textures and all, so a bridge keeps its
       colours but carries no image of its own (uv 0 writes no UVs at all) */
    bridgePalette = bridgeModel.materials.map((m) => ({ ...m, uv: 0 }));
  }
}

/** the city's palette, the owner's bridge colours, and the owner's buildings */
const MATERIALS = [...BASE_MATERIALS, ...bridgePalette, ...OWN_BUILDING_PALETTE];
BLD_MAT_BASE = BASE_MATERIALS.length + bridgePalette.length;
/** where the bridge's own materials start in that list */
const BRIDGE_PALETTE = BASE_MATERIALS.length;
/** the material index to draw one triangle of the owner's bridge with */
const bridgeMat = (index) => (bridgeMatFixed >= 0 ? bridgeMatFixed : BRIDGE_PALETTE + index);
const M = Object.fromEntries(MATERIALS.map((m, i) => [m.name, i]));

const G = geometryBuilder(MATERIALS);

/* -------------------------------------------------------------- dimensions */
const R = 1200;                // the map is a 2400 × 2400 m square — GTA scale
const KERB = 0.15;
const BANK = 46;               // half-width of the landscaped banks
const WATER_Y = -3.5;

/* The river: a sine meander running south → north. centreZ(x), halfWidth(x) */
const MEAN_Z = 0;
const AMP = 260;               // how far the river swings
const WAVELEN = 1450;          // one full meander over the map's length
const RIVER_HALF_BASE = 95;    // half-width of the river, wide
const RIVER_HALF_WIDEN = 28;   // and wider at its swings

function riverCentre(x) {
  return MEAN_Z + AMP * Math.sin((x / WAVELEN) * Math.PI * 2);
}
function riverHalf(x) {
  return RIVER_HALF_BASE + RIVER_HALF_WIDEN * Math.cos((x / WAVELEN) * Math.PI * 4 + 1.1);
}
/**
 * Distance from a point to the river's centreline. The centreline runs along x
 * (it only meanders gently), so the distance across it is the distance in z.
 *
 * It used to be `hypot(x, z - centre)`: the distance to the *point* where the
 * centreline crosses x = 0, which grows with |x|. Every guard written against
 * it — "skip anything in the river or on its bank" — was therefore true only
 * near x = 0 and silently false out along the banks, which is how a block's
 * kerb plate came to be laid across the water five kilometres east of the
 * middle of the map.
 */
function riverDist(x, z) {
  return Math.abs(z - riverCentre(x));
}
function inRiver(x, z) {
  return riverDist(x, z) < riverHalf(x);
}
/** true when a street at x may cross the river (over a bridge) */
function onBridgeX(x) {
  return BRIDGES.some((b) => Math.abs(x - b.x) < b.half + 6);
}

/* ------------------------------------------------ the river, as a rectangle *
 *  The city grid is 200 m on a side and the river wanders through it, so a
 *  block's own square can sit on dry land at its centre and still reach across
 *  the water at one corner — and a block that reaches across the water used to
 *  carry its kerb plate (a slab at kerb height), its grass, and on one corner
 *  of the map a downtown tower out over the river and onto the island.
 *
 *  So nothing is measured at a block's centre any more: every surface the city
 *  lays down is laid in strips that stop at the bank, and anything with a
 *  footprint — a tower, a hall, a pond — is only built where it fits on land.
 * -------------------------------------------------------------------------*/
/** the river's own band at this x, including its landscaped bank: [z0, z1] */
function waterBand(x) { /* the river's band at this x */
  const half = riverHalf(x) + BANK;
  const zc = riverCentre(x);
  return [zc - half, zc + half];
}

/** the parts of a z span at this x that are on dry land */
function drySpans(x, z0, z1) {
  const [w0, w1] = waterBand(x);
  const out = [];
  if (z0 < w0) out.push([z0, Math.min(z1, w0)]);
  if (z1 > w1) out.push([Math.max(z0, w1), z1]);
  return out.filter(([a, b]) => b - a > 0.5);
}

/** true when any part of this rectangle is in the river or on its bank */
function reachesRiver(x0, x1, z0, z1) {
  const step = Math.max(6, (x1 - x0) / 12);
  for (let x = x0; x <= x1 + 1e-6; x += step) {
    const [w0, w1] = waterBand(x);
    if (z1 > w0 && z0 < w1) return true;
  }
  return false;
}

/** A flat surface laid only where the land is: it stops at the bank. */
function drySlab(x0, z0, x1, z1, y, mat, step = 8) {
  for (let x = x0; x < x1; x += step) {
    const xs = Math.min(x + step, x1);
    for (const [a, b] of drySpans((x + xs) / 2, z0, z1)) G.slab(x, a, xs, b, y, mat);
  }
}

/**
 * A block's kerb plate, laid in the same strips: it is the city's own ground
 * level, so it has to end where the land ends rather than hang over the water.
 */
function dryPlate(x0, z0, x1, z1, step = 8) {
  for (let x = x0; x < x1; x += step) {
    const xs = Math.min(x + step, x1);
    for (const [a, b] of drySpans((x + xs) / 2, z0, z1)) {
      G.box(x, 0, a, xs, KERB, b, M.concrete, { skip: ["bottom"] });
    }
  }
}

/* ------------------------------- the city's ground stops at the water *
 *  A block's kerb plate, a park's grass, a wood's floor: each is a flat plate
 *  laid at street level over a whole block, and each is laid from a different
 *  place (buildDistricts, buildPark, buildForest). A block's middle can be on
 *  dry land while a corner of it reaches across the water — and a plate laid
 *  over the whole block is then a concrete ledge hanging in the air over the
 *  river, which the engine reads as ground a car can drive out onto.
 *
 *  So the rule is enforced once, where such plates are drawn, rather than in
 *  each of the places that lay one: a slab, or a box no taller than a kerb,
 *  that measures more than a hundred metres each way and sits at street level,
 *  is laid in strips that stop at the bank instead of over the whole rectangle.
 *
 *  Nothing else in the city matches that shape. A building is tall, a walkway
 *  is narrow, a quay is a strip along the river, a bridge deck is nine metres
 *  up, and the water is laid below street level. What is left is the city's
 *  own ground — the one thing that must never be over the water.
 * -------------------------------------------------------------------------*/
const PLATE_SPAN = 100;   // metres each way: wider than any building lot
const slabRaw = G.slab;
const boxRaw = G.box;
/** the [x0, z0, x1, z1] pieces of a rectangle that are over land, not water */
function landPieces(x0, z0, x1, z1, step = 8) {
  const out = [];
  const bx = Math.max(x0, x1), bz = Math.max(z0, z1);
  for (let x = Math.min(x0, x1); x < bx; x += step) {
    const xs = Math.min(x + step, bx);
    for (const [a, b] of drySpans((x + xs) / 2, Math.min(z0, z1), bz)) out.push([x, a, xs, b]);
  }
  return out;
}
G.slab = (x0, z0, x1, z1, y, mat) => {
  const plate = Math.abs(x1 - x0) > PLATE_SPAN && Math.abs(z1 - z0) > PLATE_SPAN;
  if (!plate || y < -1 || y > 1) return slabRaw(x0, z0, x1, z1, y, mat);
  for (const [x, a, xs, b] of landPieces(x0, z0, x1, z1)) slabRaw(x, a, xs, b, y, mat);
};
G.box = (x0, y0, z0, x1, y1, z1, mat, opts) => {
  const plate =
    Math.abs(x1 - x0) > PLATE_SPAN && Math.abs(z1 - z0) > PLATE_SPAN && y1 - y0 < 1.5;
  if (!plate || y0 < -1 || y0 > 1) return boxRaw(x0, y0, z0, x1, y1, z1, mat, opts);
  for (const [x, a, xs, b] of landPieces(x0, z0, x1, z1)) boxRaw(x, y0, a, xs, y1, b, mat, opts);
};

/* a deterministic shuffle so the city is the same every build */
let seed = 20260915;
const rnd = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const pick = (arr) => arr[(rnd() * arr.length) | 0];
const rr = (a, b) => a + rnd() * (b - a);

/* ------------------------------------------------------------------ bridges */
/* Six, each a different structure — and each one standing exactly where a
 * street of the grid meets the river (ST below), so a bridge carries a real
 * road with real kerbs and markings onto it, and lands on a real street on the
 * far bank. A crossing anywhere else would be a pier you could drive onto off
 * the end of nothing. Three streets keep no crossing and dead-end at the
 * water, which is what a riverside city looks like. */
const BRIDGES = [
  { x: -540, half: 12, kind: "arch" },
  { x: -320, half: 13, kind: "cable" },
  { x: 0,    half: 14, kind: "girder" },      // the central boulevard, downtown
  { x: 320,  half: 13, kind: "suspension" },
  { x: 540,  half: 11, kind: "pontoon" },
  { x: 760,  half: 10, kind: "bascule" },     // a drawbridge by the industrial quay
];
const DECK_Y = 9;              // bridge deck height over the water
const DECK_T = 1.2;            // deck slab thickness
/* The owner's bridge is cut off at the riverbed instead of running through it.
   A pier modelled twenty metres into the mud is never seen — the bed is opaque
   — and left in it would drag the map's own origin (and every prop, spawn and
   height in the city) down to the end of the deepest pier, for nothing. The cut
   is at the bed, which is above the lowest thing the city already has, so the
   map's own bounds do not move at all. */
const BRIDGE_FLOOR = WATER_Y - 3.5;
const RAMP_LEN = 90;           // how far a crossing's approaches run inland

/**
 * The z band a crossing occupies — its ramps' feet at either end, the span
 * between them — computed the same way for the road that is built there and
 * for the street markings that have to stop at its foot.
 */
function crossingBand(b) {
  const za = riverCentre(b.x - b.half) - riverHalf(b.x - b.half) - BANK - 4;
  const zb = riverCentre(b.x + b.half) + riverHalf(b.x + b.half) + BANK + 4;
  return { za: Math.min(za, zb), zb: Math.max(za, zb) };
}

/**
 * Which crossings the owner's bridge takes over: an x from the list above, a
 * list of them, "all", or — with nothing said — the middle crossing, the one
 * every drive through downtown crosses.
 */
function crossingsFor(opts) {
  const want = opts.crossing;
  if (want === undefined || want === null) return new Set([0]);
  if (want === "all") return new Set(BRIDGES.map((b) => b.x));
  const found = new Set();
  for (const x of Array.isArray(want) ? want : [want]) {
    const hit = BRIDGES.find((b) => Math.abs(b.x - x) < 1);
    if (hit) found.add(hit.x);
    else console.warn(`  ! no crossing at x=${x} — the map's crossings are ${BRIDGES.map((b) => b.x).join(", ")}`);
  }
  return found;
}

const BRIDGE_CROSSINGS = bridgeModel ? crossingsFor(bridgeOpts) : new Set();
/** what each crossing the bridge took over turned into */
const bridgeFits = [];

/**
 * The owner's bridge, fitted to its crossing — worked out once and kept.
 *
 * The fit is asked for from three places that cannot see each other: the
 * bridge is baked where the crossings are built, the approaches' width comes
 * out of it, and the land the approaches stand on has to know where they are
 * before any ground is laid. One memo, so the model is measured once.
 */
const fitCache = new Map();
function bridgeFit(b) {
  if (!bridgeModel || !BRIDGE_CROSSINGS.has(b.x)) return null;
  const hit = fitCache.get(b.x);
  if (hit !== undefined) return hit;
  const { za, zb } = crossingBand(b);
  const zc = (riverCentre(b.x - b.half) + riverCentre(b.x + b.half)) / 2;
  const halfWater = riverHalf(b.x);
  const fit = fitToCrossing(
    bridgeModel,
    {
      x: b.x,
      half: b.half,
      z0: za,
      z1: zb,
      water: [zc - halfWater, zc + halfWater],
      deckY: DECK_Y,
      /* below this it is mud, and it is cut off there */
      floor: BRIDGE_FLOOR,
    },
    bridgeOpts,
  );
  fitCache.set(b.x, fit);
  return fit;
}

/**
 * The carriageway of a crossing: the width the owner's bridge arrived with
 * where there is one, the map's own where there is not. The approaches are cut
 * to it, so what climbs the bank is the road that crosses, rather than a 28 m
 * ledge hanging either side of a 15 m deck.
 */
function roadHalfOf(b) {
  const fit = bridgeFit(b);
  return fit ? Math.max(5.5, fit.report.width / 2) : b.half;
}

/**
 * Where every crossing's approaches are: both ramps of all six, as rectangles
 * in plan. Nothing else is built inside them — no land under them, because an
 * approach is a bank of fill and not a viaduct, and no street markings across
 * them, because the ramp carries its own. Two surfaces in one cell (the street
 * at 0 and the ramp above it) is a car that drives along the street *under* the
 * ramp to the water instead of climbing it, which is what these rectangles are
 * here to prevent (see buildGround, line and buildBridges).
 */
let rampRects = null;
function ramps() {
  if (rampRects) return rampRects;
  const out = [];
  for (const b of BRIDGES) {
    const { za, zb } = crossingBand(b);
    const half = roadHalfOf(b);
    out.push(
      { x0: b.x - half, x1: b.x + half, z0: za - RAMP_LEN, z1: za },
      { x0: b.x - half, x1: b.x + half, z0: zb, z1: zb + RAMP_LEN },
    );
  }
  out.push(causewayRamp());
  return (rampRects = out);
}

/**
 * The road onto the river island: a short, shallow ramp up off the south bank
 * onto the causeway. It is an approach like any other — the land is not laid
 * under it either, or the car takes the street beneath it and reaches the
 * island's shore at water level.
 */
function causewayRamp() {
  const zBank = riverCentre(ISLE.x) - riverHalf(ISLE.x) - BANK;
  return {
    x0: ISLE.x - CAUSEWAY_HALF,
    x1: ISLE.x + CAUSEWAY_HALF,
    z0: zBank - CAUSEWAY_RUN,
    z1: zBank,
  };
}

/** true inside a bridge approach, where the land is built as an embankment */
const onRamp = (x, z) => ramps().some((r) => x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1);

/** [z0,z1] with every approach rectangle crossing this x band taken out of it */
function notUnderRamp(x0, x1, z0, z1) {
  let spans = [[z0, z1]];
  for (const r of ramps()) {
    if (r.x1 <= x0 || r.x0 >= x1) continue;
    const next = [];
    for (const [a, b] of spans) {
      if (r.z1 <= a || r.z0 >= b) {
        next.push([a, b]);
        continue;
      }
      if (r.z0 > a) next.push([a, Math.min(r.z0, b)]);
      if (r.z1 < b) next.push([Math.max(r.z1, a), b]);
    }
    spans = next;
  }
  return spans;
}

/**
 * A road deck from x0 to x1 at height y, carrying its road across the water
 * from z0 to z1 and stopping there.
 *
 * It used to be laid from -R to R — the whole length of the map — so every
 * crossing kept a road at deck height hanging over the streets either side of
 * the river for most of a kilometre, on nothing. A bridge carries its road
 * from one bank to the other; the ramps are what climbs to it at each end.
 *
 * The kerbs are the drop to the water fenced by real geometry: one along each
 * side of the deck for the length of the crossing, not two across the ends of
 * a strip that ran off the map.
 */
function deck(x0, x1, z0, z1, y, mat = M.asphalt) {
  G.quad([x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1], mat, [0, 1, 0]);
  for (const s of [-1, 1]) {
    const a = s < 0 ? x0 - 0.45 : x1;
    const b = s < 0 ? x0 : x1 + 0.45;
    G.box(a, y - DECK_T, z0, b, y + 0.12, z1, M.concrete);
  }
}

function buildBridges() {
  for (const b of BRIDGES) {
    const x0 = b.x - b.half;
    const x1 = b.x + b.half;
    /* the ramps land on flat ground, past the whole landscaped bank */
    const { za, zb } = crossingBand(b);
    const custom = BRIDGE_CROSSINGS.has(b.x);
    /* The owner's bridge is fitted before the road that leads to it is built:
       the approaches are cut to the bridge's own width, so what climbs the bank
       is the road that crosses, not a 28 m ledge hanging either side of a 15 m
       deck. Everything else about the crossing — where it is, its water, the
       deck height every roadway in the map meets — is the map's. */
    const fit = custom ? bridgeFit(b) : null;
    /* the carriageway of this crossing: the bridge's own width where the owner
       brought one, the map's otherwise */
    const roadHalf = roadHalfOf(b);
    const rx0 = b.x - roadHalf;
    const rx1 = b.x + roadHalf;
    if (!custom) {
      deck(x0, x1, za, zb, DECK_Y);
    } else {
      /* The roadway across the owner's bridge: the map lays its own carriageway
         over the span, exactly as it does for every crossing built from code,
         and the model stands on it. A bridge that arrives as a model carries
         kerbs, railings, girders and hangers — every one of them a surface a
         wheel could be said to be on — so without a roadway of the map's own
         there is no single surface the field can call the road. It goes a few
         centimetres under the model's own deck: the model's roadway is what is
         seen, the map's is what is driven. */
      G.slab(rx0 + 0.3, za, rx1 - 0.3, zb, DECK_Y - 0.06, M.asphalt);
    }

    /* approaches: ramps up from street level on each side */
    const rampLen = RAMP_LEN;
    const slope = (z0, z1, y0, y1) => {
      G.quad(
        [rx0, y0, z0], [rx1, y0, z0], [rx1, y1, z1], [rx0, y1, z1], M.asphalt, [0, 1, 0],
      );
      /* The approach is a bank of fill, not a plate in the air: no land is laid
         under it (see buildGround), so its sides are built here — a retaining
         wall each side, from the roadway's edge down to the ground it stands
         on. Segment by segment, because each piece is only as tall as the ramp
         is above it there: the short piece at the foot is a kerb a car crosses,
         and the tall pieces inland are walls that keep a car on the ramp.
         A wall box carries the tallest point of its face, so one long face
         would be a nine-metre wall at the very foot of the ramp. */
      const pieces = Math.max(1, Math.round((z1 - z0) / 6));
      for (const s of [rx0, rx1]) {
        const face = [s === rx0 ? -1 : 1, 0, 0];
        for (let i = 0; i < pieces; i++) {
          const a = z0 + ((z1 - z0) * i) / pieces;
          const c = z0 + ((z1 - z0) * (i + 1)) / pieces;
          const ya = y0 + ((y1 - y0) * i) / pieces;
          const yc = y0 + ((y1 - y0) * (i + 1)) / pieces;
          G.quad([s, ya, a], [s, yc, c], [s, 0, c], [s, 0, a], M.concrete, face);
        }
      }
    };
    slope(za - rampLen, za, 0.1, DECK_Y);
    slope(zb, zb + rampLen, DECK_Y, 0.1);
    /* The approaches are roads, so they are marked and lit like roads — the
       paint climbing with them, laid in short pieces so it sits on the slope,
       and a lamp on each kerb, standing at the height the slope is there. */
    const rampYA = (z) => 0.1 + (DECK_Y - 0.1) * ((z - (za - rampLen)) / rampLen);
    const rampYB = (z) => DECK_Y + (0.1 - DECK_Y) * ((z - zb) / rampLen);
    paintRoadZ(b.x, roadHalf, za - rampLen, za, rampYA);
    paintRoadZ(b.x, roadHalf, zb, zb + rampLen, rampYB);
    /* the deck between them, at deck height. The owner's bridge is levelled
       onto this plane when it is fitted, so its roadway and this line of paint
       are the same surface — which is what lets the approaches meet it. */
    paintRoadZ(b.x, roadHalf, za, zb, () => DECK_Y);
    for (let k = 0; k < 4; k++) {
      const f = (k + 0.5) / 4;
      const za2 = za - rampLen + f * rampLen;
      const zb2 = zb + f * rampLen;
      spot("lamp", rx0 + 1.3, rampYA(za2), za2, Math.PI / 2);
      spot("lamp", rx1 - 1.3, rampYA(za2), za2, -Math.PI / 2);
      spot("lamp", rx0 + 1.3, rampYB(zb2), zb2, Math.PI / 2);
      spot("lamp", rx1 - 1.3, rampYB(zb2), zb2, -Math.PI / 2);
    }

    /* piers down to the riverbed on each bank edge */
    if (!custom) {
      for (const z of [za - 10, zb + 10]) {
        G.box(x0 + 2, WATER_Y - 4, z - 2, x0 + 6, DECK_Y - DECK_T, z + 2, M.concrete);
        G.box(x1 - 6, WATER_Y - 4, z - 2, x1 - 2, DECK_Y - DECK_T, z + 2, M.concrete);
      }
    }

    /* the structure that makes it unique */
    if (custom && fit) {
      const { tris, report } = fit;
      /* the bridge's own shading comes with it: each vertex carries the normal
         that side of the model was turned, so a cable stays round */
      for (const t of tris) G.triN(t.a, t.b, t.c, bridgeMat(t.mat), t.na, t.nb, t.nc);
      bridgeFits.push(report);
    } else if (b.kind === "arch") {
      /* a steel arch over the deck, with hangers */
      const steps = 36;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const z = za + (zb - za) * t;
        const h = DECK_Y + Math.sin(t * Math.PI) * 26;
        const w = 3.2;
        G.box(b.x - w / 2, DECK_Y, z - (zb - za) / steps, b.x + w / 2, h, z, M.steel);
        if (i % 3 === 0) {
          for (const s of [x0 + 2, x1 - 2]) {
            G.box(s - 0.12, h, z - 0.12, s + 0.12, DECK_Y + 0.12, z + 0.12, M.cable);
          }
        }
      }
    } else if (b.kind === "cable") {
      /* one A-frame pylon per bank, cables fanning to the deck */
      for (const z of [za + 26, zb - 26]) {
        for (const s of [x0 + 2.5, x1 - 2.5]) {
          G.box(s - 1.1, WATER_Y, z - 1.1, s + 1.1, DECK_Y + 42, z + 1.1, M.concrete);
          for (let k = -3; k <= 3; k++) {
            const zk = z + k * 22;
            if (zk < za - 6 || zk > zb + 6) continue;
            G.quad(
              [s, DECK_Y + 40, z], [s, DECK_Y + 41, z],
              [s, DECK_Y, zk], [s, DECK_Y, zk], M.cable, [0, 0, 1],
            );
          }
        }
      }
    } else if (b.kind === "girder") {
      /* twin plate girders under the deck, cross-braced */
      for (const s of [x0 + 2, x1 - 2]) {
        G.box(s - 0.8, DECK_Y - DECK_T - 3, za, s + 0.8, DECK_Y - DECK_T, zb, M.steel);
      }
      for (let z = za + 12; z < zb - 8; z += 24) {
        G.box(x0 + 2, DECK_Y - DECK_T - 2.4, z, x1 - 2, DECK_Y - DECK_T - 1.6, z + 1, M.steel);
      }
    } else if (b.kind === "suspension") {
      /* two towers, a main cable and vertical hangers */
      const towerZ = [za + (zb - za) * 0.24, za + (zb - za) * 0.76];
      for (const z of towerZ) {
        for (const s of [x0 + 2, x1 - 2]) {
          G.box(s - 1.4, WATER_Y - 2, z - 1.4, s + 1.4, DECK_Y + 34, z + 1.4, M.concrete);
        }
      }
      const steps = 48;
      for (let i = 0; i < steps; i++) {
        const t0 = i / steps, t1 = (i + 1) / steps;
        for (const s of [x0 + 2, x1 - 2]) {
          const cat = (t) => DECK_Y + 32 * (1 - Math.pow(2 * t - 1, 2) * 0.92);
          const z0 = za + (zb - za) * t0, z1 = za + (zb - za) * t1;
          G.quad(
            [s - 0.12, cat(t0), z0], [s + 0.12, cat(t0), z0],
            [s + 0.12, cat(t1), z1], [s - 0.12, cat(t1), z1], M.cable, [0, 0, 1],
          );
          if (i % 4 === 0) G.box(s - 0.1, DECK_Y, z0 - 0.1, s + 0.1, cat(t0), z0 + 0.1, M.cable);
        }
      }
    } else if (b.kind === "bascule") {
      /* a drawbridge: two trunnion towers, counterweight boxes, and the deck
         itself is split at the middle with the uplift seams visible */
      for (const z of [za + 12, zb - 12]) {
        for (const s of [x0 + 1.5, x1 - 1.5]) {
          G.box(s - 1.2, WATER_Y - 3, z - 1.2, s + 1.2, DECK_Y + 14, z + 1.2, M.concrete);
        }
        /* counterweights hanging between the towers' tops */
        for (const s of [x0 + 3.5, x1 - 3.5]) {
          G.box(s - 1.6, DECK_Y + 8, z - 2.4, s + 1.6, DECK_Y + 12.5, z + 2.4, M.steel);
          G.box(s - 0.3, DECK_Y + 12.5, z - 0.3, s + 0.3, DECK_Y + 14, z + 0.3, M.steel);
        }
      }
      /* the split: a raised seam and warning stripes across both leaves */
      const mid = (za + zb) / 2;
      G.box(x0 + 2, DECK_Y + 0.02, mid - 0.35, x1 - 2, DECK_Y + 0.14, mid + 0.35, M.yellow);
      for (let z = mid - 8; z < mid + 8; z += 2.4) {
        G.box(x0 + 2, DECK_Y + 0.01, z, x1 - 2, DECK_Y + 0.06, z + 1.2, M.paint);
      }
    } else {
      /* pontoon: the deck rests on floating concrete caissons */
      for (let z = za + 14; z < zb - 8; z += 22) {
        G.box(x0 + 3, WATER_Y - 0.6, z, x1 - 3, WATER_Y + 0.9, z + 12, M.concrete);
      }
      for (const s of [x0 + 2, x1 - 2]) {
        G.box(s - 0.15, DECK_Y + 0.9, za, s + 0.15, DECK_Y + 1.15, zb, M.yellow);
      }
    }
  }
}

/* ------------------------------------------------------------------ tunnels */
/* Two tunnels under the west bank: the road dives under a hill beside the    */
/* river and comes back out. Built as a box tube the terrain rises over.      */
const TUNNELS = [
  /* the inland portal stands clear of the bridge approach that reaches the
     river on the same street: the hill over the tube would otherwise bury the
     first metres of the ramp */
  { x: -540, z0: -640, z1: -424, w: 9,  h: 5.4 },   // under the west link road
  { x: 540,  z0: 400,  z1: 640,  w: 9,  h: 5.4 },   // under the east industrial link
];
function buildTunnels() {
  for (const t of TUNNELS) {
    const x0 = t.x - t.w / 2, x1 = t.x + t.w / 2;
    /* the tube: floor, two walls, and the hill mass over it */
    G.slab(x0, t.z0, x1, t.z1, 0.02, M.asphalt);
    for (const s of [x0, x1]) {
      G.box(s - 0.5, 0, t.z0, s + 0.5, t.h, t.z1, M.concrete);
    }
    /* the hill over the tube (grass mound, 12 m high) */
    G.box(x0 - 16, t.h, t.z0 - 6, x1 + 16, t.h + 12, t.z1 + 6, M.grass, { skip: ["bottom"] });
    /* portals */
    for (const z of [t.z0 - 6, t.z1 + 6]) {
      G.box(x0 - 4, t.h, z - 1.5, x1 + 4, t.h + 13.5, z + 1.5, M.concrete, { skip: ["bottom"] });
    }
    /* ramps up onto the mound are the hill's own slopes: fake with side quads */
    for (const s of [x0 - 16, x1 + 16]) {
      const out = s === x0 - 16 ? -1 : 1;
      G.quad(
        [s, t.h, t.z0 - 6], [s, t.h, t.z1 + 6], [s, t.h + 12, t.z1 + 6], [s, t.h + 12, t.z0 - 6],
        M.grass, [out, 0, 0],
      );
    }
  }
}

/* -------------------------------------------------------------- interchange */
/* A clover-leaf-ish junction where the ring boulevard crosses an avenue on   */
/* two flyover ramps.                                                        */
const INTER = { x: -160, z: 430 };
function buildInterchange() {
  const { x, z } = INTER;
  /* flyover: an elevated slab crossing over the north–south boulevard */
  const y = 7;
  const halfW = 7;
  G.quad(
    [x - 70, y, z - halfW], [x + 70, y, z - halfW],
    [x + 70, y, z + halfW], [x - 70, y, z + halfW], M.asphalt, [0, 1, 0],
  );
  for (const s of [z - halfW, z + halfW]) {
    G.box(x - 70, y - 1.1, s, x + 70, y + 0.1, s + (s < z ? -0.0 : 0.0) + 0.45, M.concrete);
  }
  /* ramps: quarter turns down to street level on both sides */
  const ramp = (x0, x1, y0, y1, zc, w) => {
    const steps = 14;
    for (let i = 0; i < steps; i++) {
      const t0 = i / steps, t1 = (i + 1) / steps;
      const xa = x0 + (x1 - x0) * t0, xb = x0 + (x1 - x0) * t1;
      const ya = y0 + (y1 - y0) * t0, yb = y0 + (y1 - y0) * t1;
      G.quad(
        [xa, ya, zc - w], [xb, yb, zc - w], [xb, yb, zc + w], [xa, ya, zc + w],
        M.asphalt, [0, 1, 0],
      );
    }
  };
  ramp(x + 70, x + 130, y, 0.1, z, halfW);
  ramp(x - 130, x - 70, 0.1, y, z, halfW);
  /* piers clear of both carriageways */
  for (let px = x - 56; px <= x + 56; px += 28) {
    G.box(px - 1.4, 0, z + halfW + 1.5, px + 1.4, y - 1.1, z + halfW + 4.3, M.concrete);
  }
}

/* ------------------------------------------------------------------- ground */
function buildGround() { // the land under the city
  /* The river is genuinely cut: per column we lay the land on both banks,    */
  /* then five slope bands descending from street level to the water, then    */
  /* the water itself. Nothing at street level crosses the river except the   */
  /* bridge decks.                                                            */
  const STEP = 8;
  const bands = 5;
  const bw = BANK / bands;
  for (let x = -R; x < R; x += STEP) {
    const zc = riverCentre(x), half = riverHalf(x);
    /* Land on one bank, from the rim to the top of the slopes — laid in the
       material it is: streets where the grid is, grass out in the country. */
    const land = (z0, z1) => {
      const cuts = [GZ0, GZ1].filter((z) => z > z0 && z < z1).sort((a, b) => a - b);
      let cur = z0;
      for (const cut of [...cuts, z1]) {
        /* not under a bridge approach: the approach is the surface there, and
           the street that would otherwise be laid under it is a second surface
           in the same cell (see ramps) */
        for (const [a, b] of notUnderRamp(x, x + STEP, cur, cut)) {
          if (b - a < 0.5) continue;
          const mid = (a + b) / 2;
          const city = x + STEP / 2 > GX0 && x + STEP / 2 < GX1 && mid > GZ0 && mid < GZ1;
          G.slab(x, a, x + STEP, b, 0, city ? M.asphalt : M.grass);
        }
        cur = cut;
      }
    };
    land(-R, zc - half - BANK);
    land(zc + half + BANK, R);
    /* slope bands, descending toward the water on both sides */
    for (let k = 0; k < bands; k++) {
      const y0 = (-bw * k) * (WATER_Y / BANK);
      const y1 = (-bw * (k + 1)) * (WATER_Y / BANK);
      const mat = k < 2 ? M.grass : M.sand;
      const z0 = zc - half - BANK + bw * k;
      const z1 = zc - half - BANK + bw * (k + 1);
      G.quad(
        [x, y0, z0], [x + STEP, y0, z0], [x + STEP, y1, z1], [x, y1, z1], mat, [0, 1, 0],
      );
      const zm0 = zc + half + BANK - bw * k;
      const zm1 = zc + half + BANK - bw * (k + 1);
      G.quad(
        [x, y0, zm0], [x + STEP, y0, zm0], [x + STEP, y1, zm1], [x, y1, zm1], mat, [0, 1, 0],
      );
    }
    /* the water, between the two innermost slope ends */
    G.slab(x, zc - half, x + STEP, zc + half, WATER_Y, M.water);
  }
  /* the land beyond the map: fields out to the fog, so the world has no edge
     a player can fall off or see past — the way an open city reads */
  const OUT = 2600;
  for (let x = -OUT; x < OUT; x += 60) {
    G.slab(x, -OUT, x + 60, -R, 0, M.grass);
    G.slab(x, R, x + 60, OUT, 0, M.grass);
  }
  for (let z = -R; z < R; z += 60) {
    G.slab(-OUT, z, -R, z + 60, 0, M.grass);
    G.slab(R, z, OUT, z + 60, 0, M.grass);
  }
  /* a treeline at the world's edge, so the horizon reads as forest */
  for (let k = 0; k < 900; k++) {
    const a = rnd() * Math.PI * 2;
    const d = R + 40 + rnd() * 380;
    tree(Math.cos(a) * d, Math.sin(a) * d, rr(1.4, 2.4));
  }
}

/* ---------------------------------------------------------- the countryside *
 *  A city on a river sits in something. Past the last street the land is
 *  parkland and forest, thick enough that the edge of the map reads as a wood
 *  rather than a cliff, with clearings so it is not a wall of trees either.
 * -------------------------------------------------------------------------*/
function buildCountryside() { // parks, farms and forest
  for (let x = -R + 26; x < R - 26; x += 32) {
    for (let z = -R + 26; z < R - 26; z += 32) {
      const tx = x + rr(-11, 11);
      const tz = z + rr(-11, 11);
      if (tx > GX0 - 6 && tx < GX1 + 6 && tz > GZ0 - 6 && tz < GZ1 + 6) continue;  // the city has its own trees
      if (rr(0, 1) > 0.6) continue;                                                // a clearing
      tree(tx, tz, rr(1.0, 1.9));
    }
  }
}

/* ------------------------------------------------------------- the island *
 *  An island in the river, with one road onto it. It is a small park: a sandy
 *  shore, a grass terrace, a wooded hill, a path round it, a pier and a
 *  boathouse on the north side and a light at its eastern tip. The causeway
 *  leaves the south bank street, rides over the water on piers at terrace
 *  height and ends in a car park — so the island is somewhere you can drive to.
 * -------------------------------------------------------------------------*/
const ISLE = { x: -170, rx: 92, rz: 46, terrace: 1.4 };
const ISLE_TOP = ISLE.terrace + 5.4;
/** the road onto the island: 9.2 m wide, and 26 m of ramp up to the terrace */
const CAUSEWAY_HALF = 4.6;
const CAUSEWAY_RUN = 26;

/** The island's centre: on the river's centreline, where the water is widest. */
function isleCentre() {
  return [ISLE.x, riverCentre(ISLE.x)];
}

/** Its edge in one direction, a wobbly oval rather than a disc. */
function isleEdge(t) {
  const [cx, cz] = isleCentre();
  const wobble = 1 + 0.13 * Math.sin(3 * t + 0.7) + 0.07 * Math.sin(5 * t - 1.9);
  return [cx + Math.cos(t) * ISLE.rx * wobble, cz + Math.sin(t) * ISLE.rz * wobble];
}

/**
 * How high the island's own ground is, `k` of the way out from its centre.
 *
 * The terrace is flat — it is where the causeway lands, where the car park is
 * parked and where the path runs, so all of that is one surface a car can
 * drive — and the hill rises out of the flat part beyond the step band. What
 * stands on the island is placed with this, so a tree on the hill stands on
 * the hill rather than buried in it or floating over it.
 */
function isleHeight(k) {
  if (k >= 0.5) return ISLE.terrace;
  if (k >= 0.42) return ISLE.terrace + 0.5 * ((0.5 - k) / 0.08);
  if (k <= 0.07) return ISLE_TOP;
  return ISLE.terrace + 0.5 + (ISLE_TOP - ISLE.terrace - 0.5) * ((0.42 - k) / 0.35);
}

function buildIsland() {
  const [cx, cz] = isleCentre();
  const N = 72;
  /** a point on the island: direction `t`, `k` of the way out, at height y */
  const at = (t, k, y) => {
    const [ex, ez] = isleEdge(t);
    return [cx + (ex - cx) * k, y, cz + (ez - cz) * k];
  };
  for (let i = 0; i < N; i++) {
    const t0 = (i / N) * Math.PI * 2;
    const t1 = ((i + 1) / N) * Math.PI * 2;
    /* the shore: sand from the waterline up, then a shallow grass slope */
    G.quad(at(t0, 1, WATER_Y + 0.12), at(t1, 1, WATER_Y + 0.12), at(t1, 0.9, 0.45), at(t0, 0.9, 0.45), M.sand, [0, 1, 0]);
    G.quad(at(t0, 0.9, 0.45), at(t1, 0.9, 0.45), at(t1, 0.82, ISLE.terrace), at(t0, 0.82, ISLE.terrace), M.sand, [0, 1, 0]);
    /* the terrace, and the hill rising out of it */
    G.quad(at(t0, 0.82, ISLE.terrace), at(t1, 0.82, ISLE.terrace), at(t1, 0.5, ISLE.terrace), at(t0, 0.5, ISLE.terrace), M.grass, [0, 1, 0]);
    G.quad(at(t0, 0.5, ISLE.terrace), at(t1, 0.5, ISLE.terrace), at(t1, 0.42, ISLE.terrace + 0.5), at(t0, 0.42, ISLE.terrace + 0.5), M.grass, [0, 1, 0]);
    G.quad(at(t0, 0.42, ISLE.terrace + 0.5), at(t1, 0.42, ISLE.terrace + 0.5), at(t1, 0.07, ISLE_TOP), at(t0, 0.07, ISLE_TOP), M.grass, [0, 1, 0]);
    /* the very top, a fan so the hill has no hole in it */
    G.tri(at(t0, 0.07, ISLE_TOP), at(t1, 0.07, ISLE_TOP), [cx, ISLE_TOP, cz], M.grass, [0, 1, 0]);
    /* a gravel path round the terrace */
    const p0 = 0.66, p1 = 0.72;
    G.quad(at(t0, p0, ISLE.terrace + 0.02), at(t1, p0, ISLE.terrace + 0.02), at(t1, p1, ISLE.terrace + 0.06), at(t0, p1, ISLE.terrace + 0.06), M.sand, [0, 1, 0]);
  }

  /* The hill's own wood, standing on the hill. The spots the park records for
     its trees are recorded at terrace height, and a tree standing on ground
     that rises five metres above that spot is a tree buried in the hillside —
     so the hill is wooded here, where its own height is known. */
  for (let n = 0; n < 40; n++) {
    const t = rr(0, Math.PI * 2);
    const k = rr(0.1, 0.48);
    const [ex, ez] = isleEdge(t);
    if (Math.hypot(cx + (ex - cx) * k - ISLE.x, cz + (ez - cz) * k - cz) < 20) continue;
    spot("tree", cx + (ex - cx) * k, isleHeight(k) + 0.06, cz + (ez - cz) * k, 0, rr(0.9, 1.6));
  }

  buildCauseway(cx, cz);
  buildIslandPark(cx, cz);
}

/** The road onto the island, and the ramp that climbs to it off the bank. */
function buildCauseway(cx, cz) {
  const half = CAUSEWAY_HALF;          // a 9.2 m road: two lanes
  const x0 = ISLE.x - half;
  const x1 = ISLE.x + half;
  const y = ISLE.terrace;
  const zBank = cz - riverHalf(ISLE.x) - BANK;   // the top of the south bank
  const zIsle = cz - ISLE.rz * 0.82;             // the island's south shore
  const rampTo = zBank - CAUSEWAY_RUN;           // the ramp starts back on land

  /* the ramp up from the street to the causeway */
  G.quad([x0, 0.05, rampTo], [x1, 0.05, rampTo], [x1, y, zBank], [x0, y, zBank], M.asphalt, [0, 1, 0]);
  for (const s of [x0, x1]) {
    G.quad([s, 0.05, rampTo], [s, y, zBank], [s, y - 1.2, zBank], [s, -1.15, rampTo], M.concrete, [s === x0 ? -1 : 1, 0, 0]);
  }
  paintRoadZ(ISLE.x, half, rampTo, zBank, (z) => 0.05 + (y - 0.05) * ((z - rampTo) / (zBank - rampTo)));

  /* the causeway itself: a deck on piers, with a kerb and a parapet each side */
  G.quad([x0, y, zBank], [x1, y, zBank], [x1, y, zIsle], [x0, y, zIsle], M.asphalt, [0, 1, 0]);
  for (const s of [-1, 1]) {
    const kx = ISLE.x + s * half;
    G.box(kx - (s > 0 ? 0 : 0.5), y - 0.5, zBank, kx + (s > 0 ? 0.5 : 0), y + 0.16, zIsle, M.concrete);
    G.box(kx - (s > 0 ? 0.1 : 0.32), y + 0.16, zBank, kx + (s > 0 ? 0.32 : 0.1), y + 1.02, zIsle, M.steel);
  }
  for (let z = zBank + 9; z < zIsle - 3; z += 21) {
    G.box(x0 + 0.8, WATER_Y - 4, z, x1 - 0.8, y - 0.45, z + 1.7, M.concrete);
  }
  paintRoadZ(ISLE.x, half, zBank, zIsle, () => y);
  /* the causeway's lamps stand on the causeway: put at kerb height they would
     be buried under a deck that rides 1.4 m above the street */
  for (let z = zBank + 12; z < zIsle - 6; z += 24) {
    for (const s of [-1, 1]) {
      spot("lamp", ISLE.x + s * (half - 0.9), y, z, -(s > 0 ? Math.PI : 0) - Math.PI / 2);
    }
  }
}

/** What is on the island: a car park, a pier, a boathouse, a light and a park. */
function buildIslandPark(cx, cz) {
  const y = ISLE.terrace;
  const park = 26;

  /* The car park at the end of the causeway, bays painted on it. It sits on
     the flat part of the terrace — 0.5 to 0.82 of the way out is flat, and the
     hill's foot is at 0.5 — so the deck the causeway lands on, the bays, the
     grass between them and the path are one surface at one height a car can
     drive and park on, instead of a slab laid across the foot of the hill. */
  const pz = cz - ISLE.rz * 0.74;
  G.slab(cx - park / 2, pz - 8, cx + park / 2, pz + 8, y + 0.04, M.asphalt);
  for (let dx = -park / 2 + 1.4; dx < park / 2 - 3; dx += 2.8) {
    G.slab(cx + dx, pz - 7.6, cx + dx + 0.12, pz - 2.6, y + 0.07, M.paint);
  }
  for (let dx = -park / 2 + 1.4; dx < park / 2 - 3; dx += 2.8) {
    G.slab(cx + dx, pz + 2.6, cx + dx + 0.12, pz + 7.6, y + 0.07, M.paint);
  }
  /* the car park's own lamps stand on the car park, not on the street below */
  spot("lamp", cx - park / 2 + 1, y + 0.04, pz - 7, -Math.PI / 2);
  spot("lamp", cx + park / 2 - 1, y + 0.04, pz + 7, -1.5 * Math.PI);

  /* a pier on the north shore, out into the river on its own posts */
  const py = y - 0.5;
  const pierZ = cz + ISLE.rz * 0.78;
  for (let k = 0; k < 9; k++) {
    const z = pierZ + k * 3.1;
    G.box(cx - 2.2, py - 0.12, z, cx + 2.2, py, z + 3.1, M.trunk);
    for (const s of [-1, 1]) G.box(cx + s * 1.8 - 0.22, WATER_Y - 2, z + 1.3, cx + s * 1.8 + 0.22, py - 0.12, z + 1.55, M.trunk);
  }
  G.box(cx - 2.4, py, pierZ, cx - 2.2, py + 0.9, pierZ + 22, M.trunk);
  G.box(cx + 2.2, py, pierZ, cx + 2.4, py + 0.9, pierZ + 22, M.trunk);

  /* a boathouse beside the pier */
  const bx = cx + 12, bz = cz + ISLE.rz * 0.5;
  G.box(bx - 4, y, bz - 3, bx + 4, y + 3.4, bz + 3, M.brick, { skip: ["bottom"] });
  G.quad([bx - 4.4, y + 3.4, bz - 3.4], [bx + 4.4, y + 3.4, bz - 3.4], [bx, y + 6.4, bz - 3.4], [bx - 4.4, y + 3.4, bz - 3.4], M.roof, [0, 0, -1]);
  G.quad([bx - 4.4, y + 3.4, bz + 3.4], [bx, y + 6.4, bz + 3.4], [bx + 4.4, y + 3.4, bz + 3.4], [bx - 4.4, y + 3.4, bz + 3.4], M.roof, [0, 0, 1]);
  G.quad([bx - 4.4, y + 3.4, bz - 3.4], [bx - 4.4, y + 3.4, bz + 3.4], [bx, y + 6.4, bz + 3.4], [bx, y + 6.4, bz - 3.4], M.tile, [-1, 0, 0]);
  G.quad([bx + 4.4, y + 3.4, bz - 3.4], [bx, y + 6.4, bz - 3.4], [bx, y + 6.4, bz + 3.4], [bx + 4.4, y + 3.4, bz + 3.4], M.tile, [1, 0, 0]);
  bench(cx + 17.5, cz + ISLE.rz * 0.5, -Math.PI / 2, y + 0.02);
  bin(cx + 16, cz + ISLE.rz * 0.5 - 2, 0, y + 0.02);

  /* the light at the east tip: a tapered tower with a gallery and a lamp room */
  const lx = cx + ISLE.rx * 0.74, lz = cz + 6;
  const SIDES = 14;
  for (let i = 0; i < SIDES; i++) {
    const a0 = (i / SIDES) * Math.PI * 2, a1 = ((i + 1) / SIDES) * Math.PI * 2;
    const r0 = 2.3, r1 = 1.5;
    const p = (r, a, hh) => [lx + Math.cos(a) * r, y + hh, lz + Math.sin(a) * r];
    G.quad(p(r0, a0, 0), p(r0, a1, 0), p(r1, a1, 12), p(r1, a0, 12), M.concrete, [Math.cos(a0), 0, Math.sin(a0)]);
    /* a red band around it, and the painted gallery at the top */
    if (i % 7 === 0) G.quad(p(r0 * 0.97, a0, 9), p(r0 * 0.97, a1, 9), p(r0 * 0.95, a1, 10.4), p(r0 * 0.95, a0, 10.4), M.tile, [Math.cos(a0), 0, Math.sin(a0)]);
    G.quad(p(2.9, a0, 12), p(2.9, a1, 12), p(2.9, a1, 12.5), p(2.9, a0, 12.5), M.steel, [Math.cos(a0), 0, Math.sin(a0)]);
  }
  G.box(lx - 1.6, y + 12.5, lz - 1.6, lx + 1.6, y + 15.4, lz + 1.6, M.glass, { skip: ["bottom"] });
  G.box(lx - 1.9, y + 15.4, lz - 1.9, lx + 1.9, y + 16.2, lz + 1.9, M.roof, { skip: ["bottom"] });
  G.box(lx - 0.35, y + 16.2, lz - 0.35, lx + 0.35, y + 17.4, lz + 0.35, M.steel, { skip: ["bottom"] });
  const LIGHTHOUSE = [lx, lz];   // the tower, kept clear of trees

  /* the park itself: trees on the hill, benches and planting along the path */
  for (let k = 0; k < 46; k++) {
    const t = rr(0, Math.PI * 2);
    const kk = rr(0.12, 0.62);
    const [ex, ez] = isleEdge(t);
    const tx = cx + (ex - cx) * kk;
    const tz = cz + (ez - cz) * kk;
    if (Math.hypot(tx - ISLE.x, tz - (cz - ISLE.rz * 0.62)) < 20) continue;   // keep the car park clear
    if (Math.hypot(tx - LIGHTHOUSE[0], tz - LIGHTHOUSE[1]) < 9) continue;
    spot("tree", tx, ISLE.terrace + 0.06, tz, 0, rr(0.9, 1.6));
  }
  for (let k = 0; k < 14; k++) {
    const t = rr(0, Math.PI * 2);
    const [ex, ez] = isleEdge(t);
    const f = rr(0.74, 0.8);
    const gx = cx + (ex - cx) * f;
    const gz = cz + (ez - cz) * f;
    if (rnd() < 0.5) bench(gx, gz, t + Math.PI / 2, ISLE.terrace + 0.04);
    else bush(gx, gz, ISLE.terrace + 0.04);
  }
  planter(cx - 15, cz - ISLE.rz * 0.62 + 9.5, 0, ISLE.terrace + 0.04);
  planter(cx + 15, cz - ISLE.rz * 0.62 + 9.5, 0, ISLE.terrace + 0.04);
}

/* -------------------------------------------------------------- street trees *
 *  The avenues are lined with trees, as a real city's are: on the pavement
 *  either side, between the kerb and the buildings, away from the junctions.
 * -------------------------------------------------------------------------*/
function streetTrees() {
  for (const z of AVE) {
    for (let x = -R + 70; x < R - 70; x += 44) {
      if (inJunctionX(x, 30)) continue;
      for (const s of [-1, 1]) {
        const tz = z + s * (AVE_HALF + 3.2);
        if (riverDist(x, tz) < riverHalf(x) + BANK + 12) continue;
        if (onRamp(x, tz)) continue;                 // a bridge approach is there
        if (rnd() < 0.12) continue;                 // a gap where a door is
        tree(x + rr(-6, 6), tz, rr(0.85, 1.15));
      }
    }
  }
  for (const x of ST) {
    for (let z = -R + 70; z < R - 70; z += 58) {
      if (inJunctionZ(z, 30) || onBridgeX(x)) continue;
      const s = ((z / 58) | 0) % 2 === 0 ? 1 : -1;
      const tx = x + s * (ST_HALF + 3.2);
      if (riverDist(tx, z) < riverHalf(tx) + BANK + 12) continue;
      tree(tx, z + rr(-6, 6), rr(0.85, 1.15));
    }
  }
}

/**
 * A road's markings along z, following a surface that may climb: a solid edge
 * line just inside each kerb and a dashed centre line down the middle. On a
 * causeway or a ramp the paint is laid in short pieces so each one follows the
 * slope; on the flat it is the same geometry, only longer.
 */
function paintRoadZ(x, half, z0, z1, yAt) {
  /* The lines are laid as slopes, not as level slabs: a slab holds one height,
     and on a ramp that is a height the road is not at — the paint then stands
     proud of the tarmac at one end of every piece, and the physics reads the
     proud end as a surface of its own. A quad that follows yAt sits on the
     road all the way up. */
  const at = (z) => yAt(z) + 0.03;
  for (let z = z0; z < z1 - 1; z += 8) {
    const zz = Math.min(z + 8, z1);
    const y0 = at(z);
    const y1 = at(zz);
    for (const s of [-1, 1]) {
      const e = x + s * (half - 0.7);
      G.quad(
        [e - 0.07, y0, z], [e + 0.07, y0, z], [e + 0.07, y1, zz], [e - 0.07, y1, zz],
        M.paint, [0, 1, 0],
      );
    }
  }
  for (let z = z0; z < z1 - 3; z += 8) {
    G.quad(
      [x - 0.12, at(z), z], [x + 0.12, at(z), z],
      [x + 0.12, at(z + 3), z + 3], [x - 0.12, at(z + 3), z + 3],
      M.paint, [0, 1, 0],
    );
  }
}

/* ------------------------------------------------------------------ streets */
const AVE = [-1080, -860, -640, -420, -220, -20, 180, 380, 580, 780, 980]; // east–west avenues
/* North–south streets. Two of the odd numbers are deliberate: 0 is the central
   boulevard the river is crossed by downtown, and the grid is otherwise the
   same 200 m rhythm the avenues are on. */
const ST  = [-1100, -880, -660, -440, -220, 0, 220, 440, 660, 880, 1100];
const AVE_HALF = 7;
const ST_HALF = 6;
/* Where the street grid ends, and with it the city: past these lines the map
   is riverside park, farmland and forest, not more tarmac. */
const GX0 = ST[0] - 18;
const GX1 = ST[ST.length - 1] + 18;
const GZ0 = AVE[0] - 14;
const GZ1 = AVE[AVE.length - 1] + 14;

/* --------------------------------------------------------------- road paint *
 *  What makes tarmac read as a road, rather than a floor. The city's ground is
 *  one asphalt tile repeated, so every line here is real geometry laid on top
 *  of it, the way a road is actually marked:
 *
 *    · an edge line just inside each kerb,
 *    · a lane divider down each side of the middle, so an avenue reads as two
 *      lanes each way and a street as two,
 *    · a double centre line down the middle,
 *    · a zebra with a stop line behind it on every approach to every junction,
 *    · and nothing at all inside the junction box, which is how a real one is.
 *
 *  Every line is a slab 3 cm over the tarmac in the paint material, which
 *  carries no texture: it stays crisp from the far side of the map.
 * -------------------------------------------------------------------------*/
const PAINT_Y = 0.03;   // clear of the tarmac, under the kerb plates
const LINE = 0.07;      // half a painted line: 14 cm, as marked
const DASH = 8;         // one dash cycle: 3 m of paint, 5 m of road

/** true inside a junction box, where no line is ever painted */
const inJunctionX = (x, pad = 0) => ST.some((s) => Math.abs(s - x) < ST_HALF + 5 + pad);
const inJunctionZ = (z, pad = 0) => AVE.some((s) => Math.abs(s - z) < AVE_HALF + 5 + pad);
/** the land close to the water: no paint there unless a bridge carries it */
const offPavement = (x, z, bridgeX) => riverDist(x, z) < riverHalf(x) + BANK + 2 && !(bridgeX && onBridgeX(x));

/** A line along `x` (fixed z) or along `z` (fixed x), cut at junctions. */
function line(along, fixed, from, to, opts = {}) {
  const w = opts.w ?? LINE;
  const y = opts.y ?? PAINT_Y;
  const dashed = opts.dashed ?? false;
  const bridgeX = opts.bridge ?? false;
  const period = dashed ? DASH : 20;
  const piece = dashed ? 3 : 20;
  for (let a = from; a < to - 0.5; a += period) {
    const b = Math.min(a + piece, to);
    const mid = (a + b) / 2;
    if (along === "x") {
      if (inJunctionX(mid, 2) || offPavement(mid, fixed, bridgeX) || onRamp(mid, fixed)) continue;
      G.slab(a, fixed - w, b, fixed + w, y, M.paint);
    } else {
      if (inJunctionZ(mid, 2) || offPavement(fixed, mid, bridgeX) || onRamp(fixed, mid)) continue;
      G.slab(fixed - w, a, fixed + w, b, y, M.paint);
    }
  }
}

/** A zebra crossing: bars across the road, 60 cm of paint and 70 cm of road. */
function zebra(x, z, span, alongX) {
  if (offPavement(x, z, true) || onRamp(x, z)) return;
  for (let a = -span; a < span - 0.7; a += 1.3) {
    if (alongX) G.slab(x + a, z - 2, x + a + 0.6, z + 2, PAINT_Y, M.paint);
    else G.slab(x - 2, z + a, x + 2, z + a + 0.6, PAINT_Y, M.paint);
  }
}

/**
 * Everything a junction of an avenue and a street is painted with: a zebra on
 * each of the four approaches, sitting just outside the box, and a stop line
 * across the lanes that approach it. Traffic keeps right, so the stop line
 * crosses the half of the road the arriving cars are on.
 */
function junctionPaint(x, z) {
  if (offPavement(x, z, true) || onRamp(x, z)) return;
  const padX = ST_HALF + 5;
  const padZ = AVE_HALF + 5;
  /* across the street, north and south of the box */
  zebra(x, z - (padZ + 1.6), ST_HALF - 0.8, false);
  zebra(x, z + (padZ + 1.6), ST_HALF - 0.8, false);
  /* across the avenue, west and east of it */
  zebra(x - (padX + 1.6), z, AVE_HALF - 0.8, true);
  zebra(x + (padX + 1.6), z, AVE_HALF - 0.8, true);
  /* the stop lines: behind the zebra, on the arriving half of the road */
  const SW = 0.25;
  G.slab(x, z - (padZ + 5.1) - SW, x + ST_HALF - 0.8, z - (padZ + 5.1) + SW, PAINT_Y, M.paint);
  G.slab(x - ST_HALF + 0.8, z + (padZ + 5.1) - SW, x, z + (padZ + 5.1) + SW, PAINT_Y, M.paint);
  G.slab(x - (padX + 5.1) - SW, z, x - (padX + 5.1) + SW, z + AVE_HALF - 0.8, PAINT_Y, M.paint);
  G.slab(x + (padX + 5.1) - SW, z - AVE_HALF + 0.8, x + (padX + 5.1) + SW, z, PAINT_Y, M.paint);
}

function roadPaint() {
  for (const z of AVE) {
    for (const s of [-1, 1]) {
      line("x", z + s * (AVE_HALF - 0.7), -R + 10, R - 10);                   // kerb line
      line("x", z + s * ((AVE_HALF - 0.7) / 2), -R + 10, R - 10, { dashed: true }); // lane divider
      line("x", z + s * 0.17, -R + 10, R - 10);                                // centre, doubled
    }
  }
  for (const x of ST) {
    /* Where a street has a crossing, its markings belong to that crossing: the
       road narrows to the bridge's width and climbs its ramps there, and the
       crossing marks its own roadway (see buildBridges). So the street's lines
       run up to the foot of each ramp and stop — otherwise a doubled centre
       line and two lane lines would be drawn straight into the concrete of the
       ramp and out the other side, over water. */
    const cross = BRIDGES.find((b) => Math.abs(b.x - x) < 1);
    const runs = cross
      ? (() => {
          const { za, zb } = crossingBand(cross);
          return [[-R + 10, za - RAMP_LEN], [zb + RAMP_LEN, R - 10]];
        })()
      : [[-R + 10, R - 10]];
    for (const [from, to] of runs) {
      for (const s of [-1, 1]) {
        line("z", x + s * (ST_HALF - 0.7), from, to);
        line("z", x + s * ((ST_HALF - 0.7) / 2), from, to, { dashed: true });
        line("z", x + s * 0.17, from, to);
      }
    }
  }
  for (const z of AVE) for (const x of ST) junctionPaint(x, z);
}

/* ---------------------------------------------------------------- districts */
/* Where each zone lives: north bank downtown, south bank residential, east   */
/* industrial, mall on the west, parks and forest around the rim.            */
function zoneOf(cx, cz) {
  const d = Math.hypot(cx, cz);
  if (d > R - 140) return "forest";
  if (cx > 380 && cz > -80) return "industrial";
  if (Math.abs(cx) < 260 && Math.abs(cz) < 260) return "downtown";
  if (cx < -300 && cz > 200) return "mall";
  return "residential";
}

function tower(x0, z0, x1, z1, base) {
  const h = rr(48, 120);
  const wall = pick([M.glass, M.glass, M.concrete]);
  /* stepped tiers */
  let bx0 = x0, bz0 = z0, bx1 = x1, bz1 = z1, y = base;
  const tiers = 2 + ((rnd() * 2) | 0);
  for (let t = 0; t < tiers; t++) {
    const th = (h / tiers) * (t === tiers - 1 ? 1 : rr(0.7, 1));
    G.box(bx0, y, bz0, bx1, y + th, bz1, wall, { skip: ["bottom"] });
    y += th;
    const m = rr(2, 5);
    bx0 += m; bz0 += m; bx1 -= m; bz1 -= m;
    if (bx1 - bx0 < 6 || bz1 - bz0 < 6) break;
  }
  G.box(bx0 - 0.4, y, bz0 - 0.4, bx1 + 0.4, y + 0.8, bz1 + 0.4, M.roof, { skip: ["bottom"] });
  if (rnd() < 0.6) G.box((bx0 + bx1) / 2 - 1, y + 0.8, (bz0 + bz1) / 2 - 1, (bx0 + bx1) / 2 + 1, y + rr(8, 20), (bz0 + bz1) / 2 + 1, M.steel, { skip: ["bottom"] });
}

function home(x0, z0, x1, z1, base) {
  const h = rr(6, 14);
  const wall = pick([M.brick, M.concrete, M.tile]);
  G.box(x0, base, z0, x1, base + h, z1, wall, { skip: ["bottom"] });
  /* pitched roof: two slanted quads */
  const ridge = base + h + rr(2.5, 4);
  const cx = (x0 + x1) / 2;
  G.quad([x0, base + h, z0], [x1, base + h, z0], [cx, ridge, z0], [x0, base + h, z0], M.roof, [0, 0, -1]);
  G.quad([x0, base + h, z1], [cx, ridge, z1], [x1, base + h, z1], [x0, base + h, z1], M.roof, [0, 0, 1]);
  /* gables */
  G.quad([x0, base + h, z0], [x0, base + h, z1], [cx, ridge, z1], [cx, ridge, z0], M.tile, [-1, 0, 0]);
  G.quad([x1, base + h, z0], [cx, ridge, z0], [cx, ridge, z1], [x1, base + h, z1], M.tile, [1, 0, 0]);
}

function hall(x0, z0, x1, z1, base) {
  const h = rr(10, 18);
  G.box(x0, base, z0, x1, base + h, z1, M.steel, { skip: ["bottom"] });
  /* sawtooth roof */
  const n = Math.max(2, ((x1 - x0) / 9) | 0);
  const w = (x1 - x0) / n;
  for (let i = 0; i < n; i++) {
    const xa = x0 + i * w;
    G.quad(
      [xa, base + h, z0], [xa + w, base + h, z0], [xa + w, base + h + 2, z1], [xa, base + h + 2, z1],
      M.roof, [0, 1, 0],
    );
  }
  /* silo or tank beside it */
  if (rnd() < 0.7) {
    const sx = x1 + 6, sz = (z0 + z1) / 2, sr = rr(4, 7);
    const sh = rr(10, 22);
    for (let a = 0; a < 12; a++) {
      const a0 = (a / 12) * Math.PI * 2, a1 = ((a + 1) / 12) * Math.PI * 2;
      G.quad(
        [sx + Math.cos(a0) * sr, base, sz + Math.sin(a0) * sr],
        [sx + Math.cos(a1) * sr, base, sz + Math.sin(a1) * sr],
        [sx + Math.cos(a1) * sr, base + sh, sz + Math.sin(a1) * sr],
        [sx + Math.cos(a0) * sr, base + sh, sz + Math.sin(a0) * sr],
        M.concrete, [Math.cos(a0), 0, Math.sin(a0)],
      );
    }
    G.slab(sx - sr, sz - sr, sx + sr, sz + sr, base + sh, M.steel);
  }
  /* chimney */
  if (rnd() < 0.4) {
    const cy = z0 - 8;
    G.box(x0 + 4, base, cy - 1.6, x0 + 7.2, base + rr(28, 44), cy + 1.6, M.brick, { skip: ["bottom"] });
  }
  /* the yard out front: a storage tank, a skip, and cones where a load is
     being brought in */
  if (rnd() < 0.6) tank(x0 + 13, z0 - 9, 0, base + 0.05);
  dumpster(x0 + 21, z0 - 8, 0, base + 0.05);
  if (rnd() < 0.5) {
    const cx2 = x0 + rr(28, 58);
    for (let k = 0; k < 4; k++) cone(cx2 + k * 6, z0 - 5.5, base + 0.05);
  }
}

function warehouse(x0, z0, x1, z1, base) {
  const h = rr(9, 13);
  G.box(x0, base, z0, x1, base + h, z1, M.brick, { skip: ["bottom"] });
  G.box(x0 - 0.5, base + h, z0 - 0.5, x1 + 0.5, base + h + 0.7, z1 + 0.5, M.roof, { skip: ["bottom"] });
  /* loading docks facing the street */
  const zStreet = z0;
  for (let dx = x0 + 6; dx < x1 - 6; dx += 12) {
    G.box(dx - 2, base, zStreet - 0.4, dx + 2, base + 1.3, zStreet + 1.2, M.concrete, { skip: ["bottom"] });
    /* containers stacked on the apron, where the lorries pull in */
    if (rnd() < 0.7) container(dx + 4.5, zStreet - 7, rnd() < 0.5 ? 0 : Math.PI / 2, base + 0.05);
  }
  dumpster(x0 + 3, zStreet - 6, 0, base + 0.05);
  if (rnd() < 0.5) tank(x1 - 5, z1 - 6, 0, base + 0.05);
}

function buildMall(x0, z0, x1, z1, base) {
  /* a big low box with a glass entrance strip and a car park around it */
  G.box(x0 + 10, base, z0 + 10, x1 - 10, base + 14, z1 - 10, M.concrete, { skip: ["bottom"] });
  G.box(x0 + 9, base + 14, z0 + 9, x1 - 9, base + 15, z1 - 9, M.steel, { skip: ["bottom"] });
  /* glass atrium on the north face */
  G.box(x0 + 24, base, z0 + 8.6, x1 - 24, base + 11, z0 + 10, M.glass, { skip: ["bottom", "north"] });
  /* sign */
  G.box(x0 + 30, base + 15, z0 + 8, x1 - 30, base + 19, z0 + 8.8, M.yellow, { skip: ["bottom"] });
  /* car park: painted bays on the south side */
  for (let dx = x0 + 14; dx < x1 - 20; dx += 6) {
    G.slab(dx, z1 - 26, dx + 0.15, z1 - 14, base + 0.03, M.paint);
    G.slab(dx + 3, z1 - 26, dx + 3.15, z1 - 14, base + 0.03, M.paint);
  }
  /* the pavement in front of the doors: planters, somewhere to sit, and the
     umbrellas of the coffee place */
  for (let dx = x0 + 16; dx < x1 - 16; dx += 13) {
    planter(dx, z0 + 6.6, 0, base + 0.06);
    if (Math.round(dx / 13) % 2 === 0) parasol(dx + 5.5, z0 + 6.4, 0, base + 0.06);
    else bench(dx + 5.5, z0 + 6.4, Math.PI, base + 0.06);
  }
  /* a fence along the back of the car park, as a real one has */
  for (let dx = x0 + 10; dx < x1 - 10; dx += 4) fenceAt(dx, z1 - 32, 0, base + 0.06);
}

/* --------------------------------------------------------------- props ---- *
 *  The street furniture is NOT baked into the map any more. A tree, a street
 *  lamp and a traffic light are real models (public/models/props/), and the
 *  game stamps them on the spots listed here as it loads the world — see
 *  src/game/props.ts. The list is written next to the model as
 *  riverbend.props.json, already moved into the coordinates the engine sees
 *  once it has centred the map on its own origin. */
/**
 * Every slot the game can dress, so this file may place any of them. A slot
 * with no spots is simply not drawn (src/game/props.ts), which is what lets a
 * map name the lot and only use what it needs.
 */
const PROPS = Object.fromEntries(
  [
    "tree", "plant", "lamp", "signal",
    "bench", "bin", "dumpster", "planter", "sign", "awning",
    "parasol", "fence", "container", "tank", "chimney", "antenna", "cone",
  ].map((slot) => [slot, []]),
);
/** everything in the map stands on a slab, at kerb height */
const GROUND = KERB;
function spot(slot, x, y, z, yaw = 0, scale = 1) {
  PROPS[slot].push({ x, y, z, yaw, scale });
}

function tree(x, z, sc = 1) {
  if (inRiver(x, z) && riverDist(x, z) < riverHalf(x) + 6) return;
  spot("tree", x, GROUND, z, 0, sc);
}

function lamp(x, z, yawAlong = 0) {
  /* the shipped post reaches 1.6 m along +yawAlong; its own arm points at -Z */
  spot("lamp", x, GROUND, z, -(yawAlong + Math.PI / 2));
}

/* The pavement's own furniture. Each is placed at the height it stands on:
   the kerb for anything on a block, the grass for the park benches. */
const bench = (x, z, yaw = 0, y = GROUND) => spot("bench", x, y, z, yaw, 1);
const bin = (x, z, yaw = 0, y = GROUND) => spot("bin", x, y, z, yaw, 1);
const planter = (x, z, yaw = 0, y = GROUND) => spot("planter", x, y, z, yaw, rr(0.9, 1.1));
const bush = (x, z, y = GROUND) => spot("plant", x, y, z, rr(0, Math.PI * 2), rr(0.8, 1.25));
const cone = (x, z, y = GROUND) => spot("cone", x, y, z, rr(0, Math.PI * 2), 1);
const fenceAt = (x, z, yaw = 0, y = GROUND) => spot("fence", x, y, z, yaw, 1);
const signAt = (x, z, yaw = 0, y = GROUND) => spot("sign", x, y, z, yaw, 1);
const dumpster = (x, z, yaw = 0, y = GROUND) => spot("dumpster", x, y, z, yaw, 1);
const container = (x, z, yaw = 0, y = GROUND) => spot("container", x, y, z, yaw, 1);
const tank = (x, z, yaw = 0, y = GROUND) => spot("tank", x, y, z, yaw, 1);
const chimney = (x, z, yaw = 0, y = GROUND) => spot("chimney", x, y, z, yaw, 1);
const awning = (x, z, yaw = 0, y = GROUND) => spot("awning", x, y, z, yaw, 1);
const parasol = (x, z, yaw = 0, y = GROUND) => spot("parasol", x, y, z, yaw, 1);

/* ------------------------------------------------------------- districts UI */
function buildDistricts() {
  for (let i = 0; i < AVE.length - 1; i++) {
    for (let j = 0; j < ST.length - 1; j++) {
      const za = AVE[i] + AVE_HALF, zb = AVE[i + 1] - AVE_HALF;
      const xa = ST[j] + ST_HALF, xb = ST[j + 1] - ST_HALF;
      if (zb - za < 20 || xb - xa < 20) continue;
      const cx = (xa + xb) / 2, cz = (za + zb) / 2;
      /* the whole block in the river or on its bank is parkland */
      /* the whole block in the river or on its bank is left as open bank */
      if (inRiver(cx, cz) || riverDist(cx, cz) < riverHalf(cx) + BANK + 8) continue;
      const zone = zoneOf(cx, cz);
      if (zone === "forest") { buildForest(xa, za, xb, zb); continue; }
      /* kerb plate */
      G.box(xa, 0, za, xb, KERB, zb, M.concrete, { skip: ["bottom"] });
      if (zone === "park") { buildPark(xa, za, xb, zb); continue; }
      /* subdivide the block into lots */
      const cols = Math.max(1, Math.round((xb - xa) / 46));
      const rows = Math.max(1, Math.round((zb - za) / 46));
      const cw = (xb - xa) / cols, cd = (zb - za) / rows;
      for (let a = 0; a < cols; a++) {
        for (let r = 0; r < rows; r++) {
          if (rnd() < 0.1) continue;                 // a gap: yard or green
          const lx0 = xa + cw * a + 4, lz0 = za + cd * r + 4;
          const lx1 = xa + cw * (a + 1) - 4, lz1 = za + cd * (r + 1) - 4;
          if (lx1 - lx0 < 10 || lz1 - lz0 < 10) continue;
          if (inRiver((lx0 + lx1) / 2, (lz0 + lz1) / 2)) continue;
          /* the owner's own models, in preference to anything drawn here */
          const wanted = OWN_BUILDINGS.byZone[zone] ?? [];
          if (wanted.length) {
            bakeBuilding(G, OWN_BUILDINGS.byName, wanted[(rnd() * wanted.length) | 0],
              lx0, lz0, lx1, lz1, KERB, BLD_MAT_BASE);
          }
          else if (zone === "downtown") tower(lx0, lz0, lx1, lz1, KERB);
          else if (zone === "industrial") (rnd() < 0.45 ? hall : warehouse)(lx0, lz0, lx1, lz1, KERB);
          else if (zone === "mall") buildMall(lx0, lz0, lx1, lz1, KERB);
          else home(lx0, lz0, lx1, lz1, KERB);
        }
      }
    }
  }
  /* one block becomes the central park, one the mall block — deterministic */
  buildPark(AVE[3] + AVE_HALF, ST[1] + ST_HALF, AVE[4] - AVE_HALF, ST[2] - ST_HALF);
}

function buildPark(x0, z0, x1, z1) {
  G.slab(x0, z0, x1, z1, KERB + 0.02, M.grass);
  /* a pond */
  const pcx = (x0 + x1) / 2 + rr(-14, 14), pcz = (z0 + z1) / 2 + rr(-14, 14);
  const pr = Math.min(16, (x1 - x0) / 5);
  for (let a = 0; a < 14; a++) {
    const a0 = (a / 14) * Math.PI * 2, a1 = ((a + 1) / 14) * Math.PI * 2;
    G.quad(
      [pcx + Math.cos(a0) * pr, KERB + 0.02, pcz + Math.sin(a0) * pr],
      [pcx + Math.cos(a1) * pr, KERB + 0.02, pcz + Math.sin(a1) * pr],
      [pcx + Math.cos(a1) * pr, KERB - 0.9, pcz + Math.sin(a1) * pr],
      [pcx + Math.cos(a0) * pr, KERB - 0.9, pcz + Math.sin(a0) * pr],
      M.water, [Math.cos(a0), 0, Math.sin(a0)],
    );
  }
  /* paths */
  G.slab(x0 + 3, pcz - 1.4, x1 - 3, pcz + 1.4, KERB + 0.05, M.sand);
  G.slab(pcx - 1.4, z0 + 3, pcx + 1.4, z1 - 3, KERB + 0.05, M.sand);
  /* trees */
  for (let k = 0; k < 14; k++) {
    const tx = rr(x0 + 6, x1 - 6), tz = rr(z0 + 6, z1 - 6);
    if (Math.hypot(tx - pcx, tz - pcz) < pr + 4) continue;
    tree(tx, tz, rr(0.7, 1.1));
  }
  /* and the furniture a park has: benches looking over the water, a bin or
     two, planting along the grass, and a row of planters by the gate */
  for (let k = 0; k < 5; k++) {
    const bx = rr(x0 + 8, x1 - 8);
    bench(bx, pcz + (k % 2 ? 1.9 : -1.9), k % 2 ? 0 : Math.PI, KERB + 0.07);
    if (k % 2) bin(bx + 2.6, pcz + 1.7, 0, KERB + 0.07);
  }
  for (let k = 0; k < 28; k++) bush(rr(x0 + 4, x1 - 4), rr(z0 + 4, z1 - 4), KERB + 0.04);
  for (const pz2 of [z0 + 8, z1 - 8]) {
    for (let i = 0; i < 3; i++) planter(x0 + 12 + i * 7, pz2, 0, KERB + 0.04);
  }
}

function buildForest(x0, z0, x1, z1) {
  G.slab(x0, z0, x1, z1, 0.02, M.grass);
  const n = 34;
  for (let k = 0; k < n; k++) tree(rr(x0 + 4, x1 - 4), rr(z0 + 4, z1 - 4), rr(0.9, 1.7));
  /* undergrowth, so the wood is not a row of bare trunks */
  for (let k = 0; k < 16; k++) bush(rr(x0 + 5, x1 - 5), rr(z0 + 5, z1 - 5), 0.06);
}

/* ------------------------------------------------------------- street signs *
 *  The plate that names the street, the warning, the stop: real models on real
 *  posts, on the corners of every junction, facing the traffic that reads them
 *  as it comes. Not every corner — a city has a corner free of them too.
 * -------------------------------------------------------------------------*/
function buildSigns() {
  const CORNERS = [
    [1, 1, Math.PI],
    [-1, -1, 0],
    [1, -1, -Math.PI / 2],
    [-1, 1, Math.PI / 2],
  ];
  for (const z of AVE) {
    for (const x of ST) {
      for (const [dx, dz, yaw] of CORNERS) {
        const sx = x + dx * (ST_HALF + 2.4);
        const sz = z + dz * (AVE_HALF + 2.4);
        if (riverDist(sx, sz) < riverHalf(sx) + BANK + 3) continue;
        if (rnd() < 0.4) continue;              // a corner with nothing on it
        signAt(sx, sz, yaw);
      }
    }
  }
}

/* ----------------------------------------------------------------- roadworks *
 *  A lane up somewhere is what a city looks like most weeks: cones down the
 *  kerb line, a barrier at the end of it, and the trench itself.
 * -------------------------------------------------------------------------*/
function buildRoadworks() {
  for (const [x, z] of [[-120, -514], [280, 474], [534, 84], [-520, 274], [96, 686]]) {
    const alongX = rnd() < 0.5;
    const len = rr(34, 48);
    for (let k = 0; k < 8; k++) {
      const t = k / 7;
      const cx2 = alongX ? x + t * len : x + 3.4;
      const cz2 = alongX ? z + 3.4 : z + t * len;
      cone(cx2, cz2, 0.05);
      G.slab(alongX ? x + t * len - 1.6 : x + 0.6, alongX ? z + 1.4 : z + t * len - 1.6,
             alongX ? x + t * len + 1.6 : x + 3.2, alongX ? z + 2.2 : z + t * len + 1.6,
             0.02, M.asphalt);
    }
    fenceAt(alongX ? x + len + 2 : x + 2, alongX ? z + 2.6 : z + len + 2, alongX ? Math.PI / 2 : 0, 0.06);
    cone(alongX ? x - 3 : x + 3.4, alongX ? z + 3.4 : z - 3, 0.05);
  }
}

/* ------------------------------------------------------------------- quays */
function buildQuays() {
  /* landscaped banks: a walkway, railings and lamps following the river */
  for (let x = -R + 20; x < R - 20; x += 40) {
    for (const s of [-1, 1]) {
      const z = riverCentre(x) + s * (riverHalf(x) + BANK - 2);
      if (Math.abs(z) > R - 10) continue;
      /* walkway plate */
      G.slab(x - 10, z - 4, x + 10, z + 4, 0.06, M.sand);
      lamp(x, z + s * 3, 0);
      /* the furniture of a river walk: benches looking at the water, a bin,
         and planting on the landward side of the path */
      if (Math.round(x / 40) % 3 === 0) {
        bench(x + 6, z - s * 2.2, s > 0 ? Math.PI : 0, 0.1);
        bin(x + 9.5, z - s * 2.4, 0, 0.1);
      }
      if (Math.round(x / 40) % 2 === 0) bush(x + 3, z - s * 6.6, 0.08);
      if (Math.round(x / 40) % 5 === 0) planter(x - 7.5, z - s * 6.4, 0, 0.08);
      /* railing posts toward the water */
      G.box(x - 0.12, 0, z - s * 4, x + 0.12, 1.05, z - s * 4 + 0.24, M.steel);
    }
  }
  /* industrial quay: a long concrete apron on the east bank with cranes */
  const qz = riverCentre(560) + riverHalf(560) + BANK * 0.5;
  G.slab(430, qz - 6, 850, qz + 10, 0.05, M.concrete);
  /* bollards, stacks and the odd tank, the way a working quay looks */
  for (let bx = 440; bx < 850; bx += 26) {
    G.box(bx - 0.4, 0, qz + 2, bx + 0.4, 0.9, qz + 2.8, M.steel, { skip: ["bottom"] });
    if (Math.round(bx / 26) % 4 === 0) container(bx, qz + 6, 0, 0.06);
    if (Math.round(bx / 26) % 7 === 0) tank(bx + 9, qz + 5, 0, 0.06);
  }
  for (let cx = 470; cx < 840; cx += 90) {
    /* a simple gantry crane */
    G.box(cx - 1, 0, qz - 4, cx + 1, 16, qz - 2, M.yellow);
    G.box(cx + 14, 0, qz - 4, cx + 16, 16, qz - 2, M.yellow);
    G.box(cx - 2, 15.5, qz - 5, cx + 17, 17, qz - 1, M.yellow);
    G.box(cx + 6, 15.5, qz - 4.6, cx + 7.4, 9, qz - 4.2, M.steel);
  }
  /* moored barges? no vehicles — leave the water empty */
}

/* ----------------------------------------------------------- traffic lights */
/* Real three-aspect signals at the junctions: mast arm over the approach,     */
/* three lamps in a visored head, a pedestrian box on the pole. Each junction  */
/* gets one signal per approach, facing the traffic it stops.                 */
const SIGNALS = [];   // { x, z, yaw } recorded so the game can cycle them
function trafficSignal(x, z, yaw) {
  /* the head of the masted signal hangs over the lane at (x, z); the real
     model is a post with its own head, so it goes where the mast stood and
     faces the approach it stops */
  const px = x - Math.sin(yaw) * 7.5, pz = z - Math.cos(yaw) * 7.5;
  spot("signal", px, GROUND, pz, yaw);
  SIGNALS.push({ x, z, yaw });
}

function buildSignals() {
  /* one signal per approach at each junction of the avenues with the streets,
     but only on land: skip anything in the river or on its banks */
  for (const z of AVE) {
    for (const x of ST) {
      for (const [dx, dz, yaw] of [
        [-1, 0, Math.PI / 2],   // west approach, head over the westbound lane
        [1, 0, -Math.PI / 2],
        [0, -1, 0],
        [0, 1, Math.PI],
      ]) {
        const sx = x + dx * (ST_HALF + 5);
        const sz = z + dz * (AVE_HALF + 5);
        if (riverDist(sx, sz) < riverHalf(sx) + BANK) continue;
        trafficSignal(sx, sz, yaw);
      }
    }
  }
}

/* -------------------------------------------------------------------- build */
buildGround();
buildCountryside();
buildIsland();
buildBridges();
buildTunnels();
buildInterchange();
buildDistricts();
roadPaint();
buildQuays();
buildSignals();
buildSigns();
buildRoadworks();
streetTrees();

/* street lamps along the ring boulevards */
for (const z of [AVE[0], AVE[AVE.length - 1]]) {
  for (let x = -R + 30; x < R - 30; x += 80) {
    if (inRiver(x, z)) continue;
    lamp(x, z + AVE_HALF + 1.5, 0);
  }
}

/* ------------------------------------------------------------- what it became */
if (bridgeModel) {
  const took = bridgeFits.length
    ? `took over ${bridgeFits.length === 1 ? "the crossing" : "the crossings"} at x = ${bridgeFits.map((f) => f.x).join(", ")}`
    : "took over nothing: bridge.json names no crossing this map has";
  console.log(
    `your bridge (tools/bridge/${bridgeModel.short}) — ${bridgeModel.triangles.toLocaleString()} triangles, ` +
      `${bridgeModel.materials.length} material${bridgeModel.materials.length === 1 ? "" : "s"}, ` +
      `as modelled ${bridgeModel.size.map((s) => s.toFixed(1)).join(" × ")} m, roadway at ${(bridgeModel.deck.fraction * 100).toFixed(0)}% of its height — ${took}`,
  );
  for (const f of bridgeFits) {
    console.log(
      `  · x = ${f.x}: turned ${f.turned}°, scaled ×${f.scale.toFixed(2)}, ` +
        `${f.span.toFixed(0)} m across × ${f.width.toFixed(0)} m wide × ${f.height.toFixed(0)} m tall, roadway on deck ${f.deckFraction}, ` +
        `${f.baked.toLocaleString()} triangles baked` +
        (f.cut || f.trimmed ? `, ${f.cut} cut away below the riverbed, ${f.trimmed} trimmed at it` : ""),
    );
    for (const w of f.warnings) console.log(`    ! ${w}`);
  }
}

const primitives = G.primitives();
const glb = writeGLB({ materials: MATERIALS, primitives, generator: "riverbend" });

/* ------------------------------------------------- where the props go ------- *
 *  The engine centres a loaded map on its own origin and drops it onto its
 *  lowest point (see loadWorldMap in src/game/engine.ts), so the spots are
 *  written the way the engine will see them: same shift, same metres. */
const min = [Infinity, Infinity, Infinity];
const max = [-Infinity, -Infinity, -Infinity];
for (const p of primitives) {
  const a = p.positions;
  for (let i = 0; i < a.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      const v = a[i + k];
      if (v < min[k]) min[k] = v;
      if (v > max[k]) max[k] = v;
    }
  }
}
const cx = (min[0] + max[0]) / 2;
const cy = min[1];
const cz = (min[2] + max[2]) / 2;
const props = {};
let propCount = 0;
for (const [slot, list] of Object.entries(PROPS)) {
  if (!list.length) continue;
  propCount += list.length;
  props[slot] = list.map((s) => ({
    x: +(s.x - cx).toFixed(2),
    y: +(s.y - cy).toFixed(2),
    z: +(s.z - cz).toFixed(2),
    yaw: +s.yaw.toFixed(4),
    scale: +s.scale.toFixed(3),
  }));
}

mkdirSync("public/maps", { recursive: true });
writeFileSync("public/maps/riverbend.glb", glb);
writeFileSync("public/maps/riverbend.props.json", JSON.stringify(props));
console.log(
  `public/maps/riverbend.glb — ${(glb.length / 1024).toFixed(0)} KB, ` +
    `${G.triangles()} triangles, ${primitives.length} materials, ${SIGNALS.length} signals`,
);
console.log(
  `public/maps/riverbend.props.json — ${propCount} spots: ` +
    Object.entries(props).map(([k, v]) => `${k} ${v.length}`).join(", "),
);
