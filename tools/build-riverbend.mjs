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
 *   · 5 unique bridges (arch, cable-stayed, girder, suspension, pontoon)
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

/* ------------------------------------------------------------------ palette */
const MATERIALS = [
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
/* Five, each a different structure, spanning the river at five x positions. */
const BRIDGES = [
  { x: -640, half: 12, kind: "arch" },
  { x: -300, half: 13, kind: "cable" },
  { x: 0,    half: 14, kind: "girder" },
  { x: 320,  half: 13, kind: "suspension" },
  { x: 640,  half: 11, kind: "pontoon" },
  { x: 820,  half: 10, kind: "bascule" },   // a drawbridge near the industrial bank
];
const DECK_Y = 9;              // bridge deck height over the water
const DECK_T = 1.2;            // deck slab thickness

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
    const bankA = zc0 - riverHalf(x0) - BANK - 4;
    const bankB = zc1 + riverHalf(x1) + BANK + 4;
    const za = Math.min(bankA, bankB), zb = Math.max(bankA, bankB);
    deck(x0, x1, b.half, DECK_Y);

    /* approaches: ramps up from street level on each side */
    const rampLen = 90;
    const slope = (z0, z1, y0, y1) => {
      G.quad(
        [x0, y0, z0], [x1, y0, z0], [x1, y1, z1], [x0, y1, z1], M.asphalt, [0, 1, 0],
      );
      for (const s of [x0, x1]) {
        G.quad(
          [s, y0, z0], [s, y1, z1], [s, y1 - 1.0, z1], [s, y0 - 1.0, z0],
          M.concrete, [s === x0 ? -1 : 1, 0, 0],
        );
      }
    };
    slope(za - rampLen, za, 0.1, DECK_Y);
    slope(zb, zb + rampLen, DECK_Y, 0.1);

    /* piers down to the riverbed on each bank edge */
    for (const z of [za - 10, zb + 10]) {
      G.box(x0 + 2, WATER_Y - 4, z - 2, x0 + 6, DECK_Y - DECK_T, z + 2, M.concrete);
      G.box(x1 - 6, WATER_Y - 4, z - 2, x1 - 2, DECK_Y - DECK_T, z + 2, M.concrete);
    }

    /* the structure that makes it unique */
    if (b.kind === "arch") {
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
    /* land, both banks, from the rim to the top of the slopes */
    G.slab(x, -R, x + STEP, zc - half - BANK, 0, M.asphalt);
    G.slab(x, zc + half + BANK, x + STEP, R, 0, M.asphalt);
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

/* ------------------------------------------------------------------ streets */
const AVE = [-720, -520, -320, -120, 80, 280, 480, 680]; // east–west avenues
const ST  = [-760, -540, -320, -100, 100, 320, 540, 760]; // north–south streets
const AVE_HALF = 7;
const ST_HALF = 6;

function streetMarkings() {
  const y = 0.02;
  for (const z of AVE) {
    for (let x = -R + 12; x < R - 12; x += 14) {
      if (ST.some((s) => Math.abs(s - x) < 12)) continue;
      if (riverDist(x, z) < riverHalf(x) + BANK) continue;
      G.slab(x, z - 0.18, x + 4, z + 0.18, y, M.paint);
    }
  }
  for (const x of ST) {
    for (let z = -R + 12; z < R - 12; z += 14) {
      if (AVE.some((a) => Math.abs(a - z) < 12)) continue;
      if (riverDist(x, z) < riverHalf(x) + BANK && !onBridgeX(x)) continue;
      G.slab(x - 0.18, z, x + 0.18, z + 4, y, M.paint);
    }
  }
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
}

function warehouse(x0, z0, x1, z1, base) {
  const h = rr(9, 13);
  G.box(x0, base, z0, x1, base + h, z1, M.brick, { skip: ["bottom"] });
  G.box(x0 - 0.5, base + h, z0 - 0.5, x1 + 0.5, base + h + 0.7, z1 + 0.5, M.roof, { skip: ["bottom"] });
  /* loading docks facing the street */
  const zStreet = z0;
  for (let dx = x0 + 6; dx < x1 - 6; dx += 12) {
    G.box(dx - 2, base, zStreet - 0.4, dx + 2, base + 1.3, zStreet + 1.2, M.concrete, { skip: ["bottom"] });
  }
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
}

/* --------------------------------------------------------------- props ---- *
 *  The street furniture is NOT baked into the map any more. A tree, a street
 *  lamp and a traffic light are real models (public/models/props/), and the
 *  game stamps them on the spots listed here as it loads the world — see
 *  src/game/props.ts. The list is written next to the model as
 *  riverbend.props.json, already moved into the coordinates the engine sees
 *  once it has centred the map on its own origin. */
const PROPS = { tree: [], plant: [], lamp: [], signal: [] };
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
          if (zone === "downtown") tower(lx0, lz0, lx1, lz1, KERB);
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
}

function buildForest(x0, z0, x1, z1) {
  G.slab(x0, z0, x1, z1, 0.02, M.grass);
  const n = 22;
  for (let k = 0; k < n; k++) tree(rr(x0 + 4, x1 - 4), rr(z0 + 4, z1 - 4), rr(0.9, 1.7));
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
      /* railing posts toward the water */
      G.box(x - 0.12, 0, z - s * 4, x + 0.12, 1.05, z - s * 4 + 0.24, M.steel);
    }
  }
  /* industrial quay: a long concrete apron on the east bank with cranes */
  const qz = riverCentre(560) + riverHalf(560) + BANK * 0.5;
  G.slab(430, qz - 6, 850, qz + 10, 0.05, M.concrete);
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
buildBridges();
buildTunnels();
buildInterchange();
buildDistricts();
streetMarkings();
buildQuays();
buildSignals();

/* street lamps along the ring boulevards */
for (const z of [AVE[0], AVE[AVE.length - 1]]) {
  for (let x = -R + 30; x < R - 30; x += 80) {
    if (inRiver(x, z)) continue;
    lamp(x, z + AVE_HALF + 1.5, 0);
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
