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
 *     bascule) — and the owner's own bridge model can take the place of one
 *     of them, baked in as real geometry: see tools/bridge/README.md
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

/** the city's palette, plus whatever colours the owner's bridge arrived in */
const MATERIALS = [...BASE_MATERIALS, ...bridgePalette];
/** where the bridge's own materials start in that list */
const BRIDGE_PALETTE = BASE_MATERIALS.length;
/** the material index to draw one triangle of the owner's bridge with */
const bridgeMat = (index) => (bridgeMatFixed >= 0 ? bridgeMatFixed : BRIDGE_PALETTE + index);
const M = Object.fromEntries(MATERIALS.map((m, i) => [m.name, i]));

const G = geometryBuilder(MATERIALS);

/* -------------------------------------------------------------- dimensions */
const R = 900;                 // the map is a 1800 × 1800 m square
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
/** signed distance from a point to the river's centreline (metres, approx) */
function riverDist(x, z) {
  return Math.hypot(x - 0, z - riverCentre(x));
}
function inRiver(x, z) {
  return riverDist(x, z) < riverHalf(x);
}
/** true when a street at x may cross the river (over a bridge) */
function onBridgeX(x) {
  return BRIDGES.some((b) => Math.abs(x - b.x) < b.half + 6);
}

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

/** A road deck from x0 to x1 at height y, with kerbs, over whatever is below */
function deck(x0, x1, half, y, mat = M.asphalt) {
  G.quad(
    [x0, y, -R + 2], [x1, y, -R + 2], [x1, y, R - 2], [x0, y, R - 2], mat, [0, 1, 0],
  );
  /* edge kerbs: the drop to the water is fenced by real geometry */
  for (const s of [-1, 1]) {
    const z0 = s === -1 ? -R + 2 : R - 2 - 0.5;
    G.box(x0, y - DECK_T, z0, x1, y + 0.12, z0 + 0.5, M.concrete);
  }
}

function buildBridges() {
  for (const b of BRIDGES) {
    const x0 = b.x - b.half;
    const x1 = b.x + b.half;
    const zc0 = riverCentre(x0), zc1 = riverCentre(x1);
    /* the ramps land on flat ground, past the whole landscaped bank */
    const { za, zb } = crossingBand(b);
    const custom = BRIDGE_CROSSINGS.has(b.x);
    /* The owner's bridge is fitted before the road that leads to it is built:
       the approaches are cut to the bridge's own width, so what climbs the bank
       is the road that crosses, not a 28 m ledge hanging either side of a 15 m
       deck. Everything else about the crossing — where it is, its water, the
       deck height every roadway in the map meets — is the map's. */
    let fit = null;
    if (custom) {
      const zc = (zc0 + zc1) / 2;
      const halfWater = riverHalf(b.x);
      fit = fitToCrossing(
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
    }
    /* the carriageway of this crossing: the bridge's own width where the owner
       brought one, the map's otherwise */
    const roadHalf = fit ? Math.max(5.5, fit.report.width / 2) : b.half;
    const rx0 = b.x - roadHalf;
    const rx1 = b.x + roadHalf;
    if (!custom) deck(x0, x1, b.half, DECK_Y);

    /* approaches: ramps up from street level on each side */
    const rampLen = RAMP_LEN;
    const slope = (z0, z1, y0, y1) => {
      G.quad(
        [rx0, y0, z0], [rx1, y0, z0], [rx1, y1, z1], [rx0, y1, z1], M.asphalt, [0, 1, 0],
      );
      for (const s of [rx0, rx1]) {
        G.quad(
          [s, y0, z0], [s, y1, z1], [s, y1 - 1.0, z1], [s, y0 - 1.0, z0],
          M.concrete, [s === rx0 ? -1 : 1, 0, 0],
        );
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
  { x: -540, z0: -640, z1: -400, w: 9,  h: 5.4 },   // under the west link road
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
function buildGround() {
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
        if (cut - cur > 0.5) {
          const mid = (cur + cut) / 2;
          const city = x + STEP / 2 > GX0 && x + STEP / 2 < GX1 && mid > GZ0 && mid < GZ1;
          G.slab(x, cur, x + STEP, cut, 0, city ? M.asphalt : M.grass);
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
}

/* ---------------------------------------------------------- the countryside *
 *  A city on a river sits in something. Past the last street the land is
 *  parkland and forest, thick enough that the edge of the map reads as a wood
 *  rather than a cliff, with clearings so it is not a wall of trees either.
 * -------------------------------------------------------------------------*/
function buildCountryside() {
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
    G.quad(at(t0, 0.82, ISLE.terrace), at(t1, 0.82, ISLE.terrace), at(t1, 0.42, ISLE.terrace + 0.5), at(t0, 0.42, ISLE.terrace + 0.5), M.grass, [0, 1, 0]);
    G.quad(at(t0, 0.42, ISLE.terrace + 0.5), at(t1, 0.42, ISLE.terrace + 0.5), at(t1, 0.07, ISLE_TOP), at(t0, 0.07, ISLE_TOP), M.grass, [0, 1, 0]);
    /* the very top, a fan so the hill has no hole in it */
    G.tri(at(t0, 0.07, ISLE_TOP), at(t1, 0.07, ISLE_TOP), [cx, ISLE_TOP, cz], M.grass, [0, 1, 0]);
    /* a gravel path round the terrace */
    const p0 = 0.66, p1 = 0.72;
    G.quad(at(t0, p0, ISLE.terrace + 0.02), at(t1, p0, ISLE.terrace + 0.02), at(t1, p1, ISLE.terrace + 0.06), at(t0, p1, ISLE.terrace + 0.06), M.sand, [0, 1, 0]);
  }

  buildCauseway(cx, cz);
  buildIslandPark(cx, cz);
}

/** The road onto the island, and the ramp that climbs to it off the bank. */
function buildCauseway(cx, cz) {
  const half = 4.6;                    // a 9 m road: two lanes
  const x0 = ISLE.x - half;
  const x1 = ISLE.x + half;
  const y = ISLE.terrace;
  const zBank = cz - riverHalf(ISLE.x) - BANK;   // the top of the south bank
  const zIsle = cz - ISLE.rz * 0.82;             // the island's south shore
  const rampTo = zBank - 26;                     // the ramp starts back on land

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
  for (let z = zBank + 12; z < zIsle - 6; z += 24) {
    for (const s of [-1, 1]) lamp(ISLE.x + s * (half - 0.9), z, s > 0 ? Math.PI : 0);
  }
}

/** What is on the island: a car park, a pier, a boathouse, a light and a park. */
function buildIslandPark(cx, cz) {
  const y = ISLE.terrace;
  const park = 26;

  /* the car park at the end of the causeway, bays painted on it */
  const pz = cz - ISLE.rz * 0.62;
  G.slab(cx - park / 2, pz - 8, cx + park / 2, pz + 8, y + 0.04, M.asphalt);
  for (let dx = -park / 2 + 1.4; dx < park / 2 - 3; dx += 2.8) {
    G.slab(cx + dx, pz - 7.6, cx + dx + 0.12, pz - 2.6, y + 0.07, M.paint);
  }
  for (let dx = -park / 2 + 1.4; dx < park / 2 - 3; dx += 2.8) {
    G.slab(cx + dx, pz + 2.6, cx + dx + 0.12, pz + 7.6, y + 0.07, M.paint);
  }
  lamp(cx - park / 2 + 1, pz - 7, 0);
  lamp(cx + park / 2 - 1, pz + 7, Math.PI);

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
  const LIGHTHOUSE = [lx, lz];

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
const AVE = [-720, -520, -320, -120, 80, 280, 480, 680]; // east–west avenues
/* North–south streets. Two of the odd numbers are deliberate: 0 is the central
   boulevard the river is crossed by downtown, and the grid is otherwise the
   same 200 m rhythm the avenues are on. */
const ST  = [-760, -540, -320, -100, 0, 100, 320, 540, 760];
const AVE_HALF = 7;
const ST_HALF = 6;
/* Where the street grid ends, and with it the city: past these lines the map
   is riverside park, farmland and forest, not more tarmac. */
const GX0 = ST[0] - 18;
const GX1 = ST[ST.length - 1] + 18;
const GZ0 = AVE[0] - 14;
const GZ1 = AVE[AVE.length - 1] + 14;

