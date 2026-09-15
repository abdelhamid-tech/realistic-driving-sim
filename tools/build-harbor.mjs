/**
 * HARBOR CITY — a built-in world map for the game.
 *
 *   bun run tools/build-harbor.mjs
 *   → public/maps/harbor-city.glb
 *
 * A port city, generated from code so it can be rebuilt, resized and tuned
 * instead of being a binary somebody has to find. Everything the game needs
 * is in the mesh and nothing else: the loader measures it, reads the streets
 * out of it and puts the walls where the geometry is.
 *
 *   · a grid of boulevards and streets, kerbed blocks, painted lanes
 *   · 7 × 7 blocks of buildings, towers toward the middle
 *   · a harbour: quay wall with a 3 m drop (so the water is fenced off by
 *     the geometry itself), piers, warehouses
 *   · an elevated viaduct over the central boulevard, on median pillars
 *   · a park, a promenade with railings and lamp posts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { geometryBuilder, writeGLB } from "./glb.mjs";

/* ------------------------------------------------------------------ palette */
const MATERIALS = [
  { name: "asphalt", color: [0.13, 0.14, 0.16], rough: 0.95 },
  { name: "paint", color: [0.86, 0.84, 0.76], rough: 0.7 },
  { name: "concrete", color: [0.55, 0.53, 0.49], rough: 0.9 },
  { name: "glass", color: [0.28, 0.40, 0.48], rough: 0.28, metal: 0.45 },
  { name: "brick", color: [0.42, 0.26, 0.19], rough: 0.95 },
  { name: "roof", color: [0.20, 0.21, 0.23], rough: 0.95 },
  { name: "water", color: [0.07, 0.20, 0.28], rough: 0.2, metal: 0.1 },
  { name: "grass", color: [0.24, 0.34, 0.15], rough: 1 },
  { name: "steel", color: [0.55, 0.58, 0.62], rough: 0.5, metal: 0.6 },
];
const M = Object.fromEntries(MATERIALS.map((m, i) => [m.name, i]));

const G = geometryBuilder(MATERIALS);

/* -------------------------------------------------------------- dimensions */
const X0 = -420, X1 = 420, Z0 = -330, Z1 = 330;
const QUAY = 170;             // harbour edge, water beyond it
const WATER_Y = -3;           // the drop that fends the water off
const KERB = 0.15;
const AVE = [-300, -230, -160, -90, -20, 50, 120];   // east–west, wide
const ST = [-390, -260, -130, 0, 130, 260, 390];     // north–south
const AVE_HALF = 7;
const ST_HALF = 6;
const VIADUCT_Z = 120;        // elevated road, along the central boulevard
const DECK_Y = 9;
const DECK_HALF = 6;

/* a deterministic shuffle so the city is the same every build */
let seed = 20260915;
const rnd = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const pick = (arr) => arr[(rnd() * arr.length) | 0];

/* -------------------------------------------------------------- the ground */
function buildGround() {
  /* land: one asphalt plate up to the quay */
  G.slab(X0, Z0, X1, QUAY, 0, M.asphalt);
  /* the quayside face, in segments so the piers can come through */
  const piers = [-260, -130, 0, 130, 260];
  const openings = piers.map((x) => [x - 9, x + 9]).sort((a, b) => a[0] - b[0]);
  let cursor = X0;
  const faces = [];
  for (const [a, b] of openings) {
    if (a > cursor) faces.push([cursor, a]);
    cursor = Math.max(cursor, b);
  }
  if (cursor < X1) faces.push([cursor, X1]);
  for (const [a, b] of faces) {
    G.quad(
      [a, WATER_Y, QUAY], [b, WATER_Y, QUAY], [b, 0, QUAY], [a, 0, QUAY],
      M.concrete, [0, 0, -1],
    );
  }
  /* the harbour itself */
  G.slab(X0, QUAY, X1, Z1, WATER_Y, M.water);
  /* and the outer edges of the land, so the map reads as a place */
  G.quad([X0, WATER_Y, Z0], [X1, WATER_Y, Z0], [X1, 0, Z0], [X0, 0, Z0], M.concrete, [0, 0, -1]);
  G.quad([X0, WATER_Y, Z0], [X0, 0, Z0], [X0, 0, QUAY], [X0, WATER_Y, QUAY], M.concrete, [-1, 0, 0]);
  G.quad([X1, WATER_Y, Z0], [X1, 0, Z0], [X1, 0, QUAY], [X1, WATER_Y, QUAY], M.concrete, [1, 0, 0]);
}

/* ------------------------------------------------------------ the pavement */
function buildBlocks() {
  for (let i = 0; i < AVE.length - 1; i++) {
    const za = AVE[i] + AVE_HALF;
    const zb = AVE[i + 1] - AVE_HALF;
    if (zb - za < 6) continue;
    for (let j = 0; j < ST.length - 1; j++) {
      const xa = ST[j] + ST_HALF;
      const xb = ST[j + 1] - ST_HALF;
      if (xb - xa < 6) continue;
      /* the block plate, kerb high */
      G.box(xa, 0, za, xb, KERB, zb, M.concrete);
      buildOnBlock(xa, za, xb, zb);
    }
  }
  /* the strip between the last boulevard and the quay is the promenade */
  const za = AVE[AVE.length - 1] + AVE_HALF;
  G.box(X0 + 12, 0, za, X1 - 12, KERB, QUAY, M.concrete);
  promenade(X0 + 12, X1 - 12, za, QUAY);
  /* a park in one of the southern blocks */
  const px = ST[1] + ST_HALF;
  const pz = AVE[1] + AVE_HALF;
  G.slab(px + 2, pz + 2, ST[2] - ST_HALF - 2, AVE[2] - AVE_HALF - 2, KERB + 0.02, M.grass);
}

function buildOnBlock(xa, za, xb, zb) {
  const w = xb - xa;
  const d = zb - za;
  const isPark = za > AVE[1] && zb < AVE[2] && xa > ST[1] && xb < ST[2];
  if (isPark) return;
  const cols = w > 90 ? 2 : 1;
  const rows = d > 90 ? 2 : 1;
  const cw = w / cols;
  const cd = d / rows;
  for (let i = 0; i < cols; i++) {
    for (let r = 0; r < rows; r++) {
      if (rnd() < 0.14) continue;                      /* a gap: car park, yard */
      const margin = 5;
      const bx0 = xa + cw * i + margin;
      const bz0 = za + cd * r + margin;
      const bx1 = xa + cw * (i + 1) - margin;
      const bz1 = za + cd * (r + 1) - margin;
      if (bx1 - bx0 < 8 || bz1 - bz0 < 8) continue;
      /* taller toward the middle of the city */
      const cx = (bx0 + bx1) / 2;
      const cz = (bz0 + bz1) / 2;
      const near = 1 - Math.min(1, Math.hypot(cx, cz + 60) / 520);
      const h = rnd() < 0.07 ? 70 + rnd() * 60 : 14 + rnd() * 26 + near * 34;
      const wall = pick([M.concrete, M.concrete, M.glass, M.brick]);
      G.box(bx0, KERB, bz0, bx1, KERB + h, bz1, wall);
      /* parapet + roof plant */
      G.box(bx0 - 0.4, KERB + h, bz0 - 0.4, bx1 + 0.4, KERB + h + 0.5, bz1 + 0.4, M.roof);
      if (rnd() < 0.5) {
        const dx = (bx1 - bx0) * 0.25;
        const dz = (bz1 - bz0) * 0.25;
        G.box(cx - dx, KERB + h + 0.5, cz - dz, cx + dx, KERB + h + 2.2, cz + dz, M.steel);
      }
    }
  }
}

function promenade(xa, xb, za, zb) {
  /* railings and lamp posts along the water, on the pavement */
  for (let x = xa + 6; x < xb - 6; x += 40) {
    const piers = [-260, -130, 0, 130, 260];
    if (piers.some((p) => Math.abs(p - x) < 12)) continue;
    G.box(x - 0.15, KERB, zb - 2.6, x + 0.15, KERB + 1.1, zb - 2.2, M.steel);
    G.box(x - 0.6, KERB + 6.4, zb - 3.4, x + 0.6, KERB + 7.2, zb - 2.2, M.steel);
    G.box(x - 0.12, KERB, zb - 3.2, x + 0.12, KERB + 6.4, zb - 2.9, M.steel);
  }
  /* the top rail, in long runs */
  const piers = [-260, -130, 0, 130, 260];
  const cuts = piers.flatMap((p) => [p - 12, p + 12]).sort((a, b) => a - b);
  let cursor = xa + 6;
  const runs = [];
  for (const c of cuts) {
    if (c > cursor) runs.push([cursor, c]);
    cursor = Math.max(cursor, c);
  }
  if (cursor < xb - 6) runs.push([cursor, xb - 6]);
  for (const [a, b] of runs) {
    if (b - a < 3) continue;
    G.box(a, KERB + 0.98, zb - 2.6, b, KERB + 1.1, zb - 2.2, M.steel);
  }
}

/* ------------------------------------------------------------------ streets */
function buildMarkings() {
  const y = 0.02;
  /* dashes down the middle of every boulevard and street */
  for (const z of AVE) {
    for (let x = X0 + 10; x < X1 - 10; x += 14) {
      if (ST.some((s) => Math.abs(s - x) < 12)) continue;
      G.slab(x, z - 0.18, x + 4, z + 0.18, y, M.paint);
    }
  }
  for (const x of ST) {
    for (let z = Z0 + 10; z < QUAY - 10; z += 14) {
      if (AVE.some((a) => Math.abs(a - z) < 12)) continue;
      G.slab(x - 0.18, z, x + 0.18, z + 4, y, M.paint);
    }
  }
  /* a zebra crossing on each approach to each junction */
  for (const z of AVE) {
    for (const x of ST) {
      for (let k = -3; k <= 3; k++) {
        const off = k * 1.5;
        G.slab(x - ST_HALF - 7.5, z + off - 0.55, x - ST_HALF - 2.5, z + off + 0.55, y, M.paint);
        G.slab(x + ST_HALF + 2.5, z + off - 0.55, x + ST_HALF + 7.5, z + off + 0.55, y, M.paint);
      }
    }
  }
}

/* -------------------------------------------------------------------- quays */
function buildPiers() {
  const piers = [-260, -130, 0, 130, 260];
  piers.forEach((x, i) => {
    G.slab(x - 9, QUAY, x + 9, 250, 0, M.concrete);
    /* the pier stands on legs in the water */
    for (let z = QUAY + 10; z < 250; z += 20) {
      G.box(x - 8, WATER_Y, z - 0.8, x - 7, 0, z + 0.8, M.concrete);
      G.box(x + 7, WATER_Y, z - 0.8, x + 8, 0, z + 0.8, M.concrete);
    }
    if (i % 2 === 1) {
      /* a warehouse on the odd piers */
      G.box(x - 7.5, 0, QUAY + 14, x + 7.5, 9, QUAY + 62, M.brick);
      G.box(x - 8.2, 9, QUAY + 13, x + 8.2, 10, QUAY + 63, M.roof);
    }
  });
}

/* ----------------------------------------------------------------- viaduct */
function buildViaduct() {
  const deckHalf = DECK_HALF;
  const ramp = 84;
  const z0 = VIADUCT_Z - deckHalf;
  const z1 = VIADUCT_Z + deckHalf;
  const from = X0 + 6;
  const to = X1 - 6;
  /* the sloped approaches */
  const slope = (x0, x1, y0, y1) => {
    G.quad([x0, y0, z0], [x1, y1, z0], [x1, y1, z1], [x0, y0, z1], M.asphalt, [0, 1, 0]);
    /* the sides of the approach are walls, exactly as they should be */
    G.quad([x0, y0, z0], [x1, y1, z0], [x1, y1 - 1.1, z0], [x0, y0 - 1.1, z0], M.concrete, [0, 0, -1]);
    G.quad([x0, y0, z1], [x1, y1, z1], [x1, y1 - 1.1, z1], [x0, y0 - 1.1, z1], M.concrete, [0, 0, 1]);
  };
  slope(from, from + ramp, 0.1, DECK_Y);
  slope(to - ramp, to, DECK_Y, 0.1);
  /* the deck: a slab with a solid parapet each side */
  G.slab(from + ramp, z0, to - ramp, z1, DECK_Y, M.asphalt);
  for (const z of [z0, z1]) {
    const out = z === z0 ? -1 : 1;
    G.quad(
      [from + ramp, DECK_Y - 1.4, z], [to - ramp, DECK_Y - 1.4, z],
      [to - ramp, DECK_Y + 1.1, z], [from + ramp, DECK_Y + 1.1, z],
      M.concrete, [0, 0, out],
    );
  }
  G.slab(from + ramp, z0 - 0.6, to - ramp, z0, DECK_Y + 1.1, M.concrete);
  G.slab(from + ramp, z1, to - ramp, z1 + 0.6, DECK_Y + 1.1, M.concrete);
  /* median pillars, out of the way of both lanes */
  for (let x = from + ramp + 40; x < to - ramp - 20; x += 62) {
    G.box(x - 1.6, 0, VIADUCT_Z - 1.6, x + 1.6, DECK_Y - 1.4, VIADUCT_Z + 1.6, M.concrete);
  }
}

buildGround();
buildBlocks();
buildMarkings();
buildPiers();
buildViaduct();

const primitives = G.primitives();
const glb = writeGLB({ materials: MATERIALS, primitives, generator: "harbor-city" });

mkdirSync("public/maps", { recursive: true });
writeFileSync("public/maps/harbor-city.glb", glb);
console.log(
  `public/maps/harbor-city.glb — ${(glb.length / 1024).toFixed(0)} KB, ` +
    `${G.triangles()} triangles, ${primitives.length} materials`,
);
