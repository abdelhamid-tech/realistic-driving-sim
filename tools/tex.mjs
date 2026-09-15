/**
 * WORLD TEXTURES — the ground the city is dressed in, drawn from code.
 *
 *   bun run tools/tex.mjs
 *   → public/tex/*.png
 *
 * The road tile matches the reference atlas style: grey asphalt with dashed
 * lane lines down the middle, solid white edge lines, and light concrete
 * kerbs with expansion joints down both sides. One tile = one strip of road
 * across its width and ROAD_TILE metres along its length, so the repeat is
 * seamless when the map's world-space UVs land on multiples of ROAD_TILE.
 *
 * The game swaps all of these for uploaded textures when the owner imports
 * their own (see /assets and convex/assets.ts) — same names, same layout.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { createCanvas } from "canvas";

const OUT = "public/tex";
const SIZE = 1024;

/* how many metres one road tile spans along the road; the map builder's
   asphalt uvScale must match (14 m there, this here) */
export const ROAD_TILE = 14;

/* deterministic noise so every build draws the same texture */
let seed = 987654321;
const rnd = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const rr = (a, b) => a + rnd() * (b - a);
const pick = (arr) => arr[(rnd() * arr.length) | 0];

function canvas() {
  const c = createCanvas(SIZE, SIZE);
  return [c, c.getContext("2d")];
}

/* Facades tile one storey per repeat, so they do not need the full size. */
const FACE = 512;
function faceCanvas() {
  const c = createCanvas(FACE, FACE);
  return [c, c.getContext("2d")];
}

function save(name, c) {
  mkdirSync(OUT, { recursive: true });
  writeFileSync(`${OUT}/${name}.png`, c.toBuffer("image/png"));
  console.log(`${OUT}/${name}.png`);
}

/** fine asphalt grain over a rect */
function grain(x, w, h, n, spread) {
  for (let i = 0; i < n; i++) {
    const g = (128 + rr(-spread, spread)) | 0;
    x.fillStyle = `rgba(${g},${g},${g + 2},${rr(0.06, 0.2).toFixed(2)})`;
    x.fillRect(rr(0, w), rr(0, h), rr(1, 2.4), rr(1, 2.4));
  }
}

/* ------------------------------------------------------------------- road */
/* Full width: kerb | road | road | kerb. Along the tile: dashes + joints.  */
function drawRoad() {
  const [c, x] = canvas();
  const w = SIZE, h = SIZE;

  /* kerbs: 9% of the width each side */
  const kerbW = w * 0.09;
  const roadW = w - kerbW * 2;

  /* asphalt base */
  x.fillStyle = "#4b4e54";
  x.fillRect(kerbW, 0, roadW, h);
  grain(x, roadW, h, 5200, 26);

  /* subtle darker wheel tracks */
  for (const t of [0.32, 0.68]) {
    const g = x.createLinearGradient(kerbW + roadW * (t - 0.1), 0, kerbW + roadW * (t + 0.1), 0);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(0.5, "rgba(0,0,0,0.08)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g;
    x.fillRect(kerbW + roadW * (t - 0.1), 0, roadW * 0.2, h);
  }

  /* kerbs: light concrete with joints every quarter tile */
  x.fillStyle = "#9a978e";
  x.fillRect(0, 0, kerbW, h);
  x.fillRect(w - kerbW, 0, kerbW, h);
  grain(x, kerbW, h, 700, 14);
  x.fillStyle = "rgba(0,0,0,0.22)";
  for (let j = 0; j <= 4; j++) {
    x.fillRect(0, (j * h) / 4, kerbW, 2);
    x.fillRect(w - kerbW, (j * h) / 4, kerbW, 2);
  }
  /* the kerb face: a vertical shading strip toward the road */
  x.fillStyle = "rgba(0,0,0,0.28)";
  x.fillRect(kerbW - 4, 0, 4, h);
  x.fillRect(w - kerbW, 0, 4, h);
  /* kerb top highlight */
  x.fillStyle = "rgba(255,255,255,0.25)";
  x.fillRect(0, 0, 2, h);
  x.fillRect(w - 2, 0, 2, h);

  /* edge lines: solid white, inset on the road */
  x.fillStyle = "rgba(232,230,222,0.85)";
  x.fillRect(kerbW + 12, 0, 7, h);
  x.fillRect(w - kerbW - 19, 0, 7, h);

  /* centre dashes: two per tile, in the middle */
  x.fillStyle = "rgba(232,230,222,0.9)";
  x.fillRect(w / 2 - 5, h * 0.06, 10, h * 0.38);
  x.fillRect(w / 2 - 5, h * 0.56, 10, h * 0.38);

  save("road", c);
}

function drawGrass() {
  const [c, x] = canvas();
  const w = SIZE, h = SIZE;
  x.fillStyle = "#4a6128";
  x.fillRect(0, 0, w, h);
  for (let i = 0; i < 24; i++) {
    const g = x.createRadialGradient(rr(0, w), rr(0, h), 8, rr(0, w), rr(0, h), rr(60, 160));
    const dry = rnd() < 0.4;
    g.addColorStop(0, dry ? "rgba(122,116,66,0.30)" : "rgba(72,102,48,0.30)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
  }
  for (let i = 0; i < 9000; i++) {
    const px = rr(0, w), py = rr(0, h), g2 = 90 + (rr(0, 70) | 0);
    x.strokeStyle = `rgba(${g2 - 14},${g2 + 8},${g2 - 44},${rr(0.3, 0.7).toFixed(2)})`;
    x.lineWidth = 1;
    x.beginPath();
    x.moveTo(px, py);
    x.lineTo(px + rr(-1.6, 1.6), py - rr(2, 6));
    x.stroke();
  }
  save("grass", c);
}

function drawConcrete() {
  const [c, x] = canvas();
  const w = SIZE, h = SIZE;
  x.fillStyle = "#8d8a83";
  x.fillRect(0, 0, w, h);
  grain(x, w, h, 4200, 22);
  /* slabs */
  x.strokeStyle = "rgba(0,0,0,0.25)";
  x.lineWidth = 3;
  for (let k = 0; k <= 4; k++) {
    x.beginPath();
    x.moveTo((k * w) / 4, 0); x.lineTo((k * w) / 4, h);
    x.moveTo(0, (k * h) / 4); x.lineTo(w, (k * h) / 4);
    x.stroke();
  }
  /* stains */
  for (let i = 0; i < 10; i++) {
    const g = x.createRadialGradient(rr(0, w), rr(0, h), 4, rr(0, w), rr(0, h), rr(40, 120));
    g.addColorStop(0, "rgba(40,38,34,0.12)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
  }
  save("concrete", c);
}

function drawSand() {
  const [c, x] = canvas();
  const w = SIZE, h = SIZE;
  x.fillStyle = "#9e8f6d";
  x.fillRect(0, 0, w, h);
  grain(x, w, h, 6000, 26);
  save("sand", c);
}

function drawBrick() {
  const [c, x] = canvas();
  const w = SIZE, h = SIZE;
  x.fillStyle = "#6e4a38";
  x.fillRect(0, 0, w, h);
  const bh = h / 16;
  for (let r = 0; r < 16; r++) {
    const off = (r % 2) * (w / 8);
    for (let col = -1; col < 8; col++) {
      const bx = col * (w / 4) + off + 3;
      const by = r * bh + 3;
      const g = rr(0, 26) | 0;
      x.fillStyle = `rgb(${104 + g},${68 + g},${52 + g})`;
      x.fillRect(bx, by, w / 4 - 6, bh - 6);
    }
  }
  grain(x, w, h, 2600, 18);
  save("brick", c);
}

function drawLeaf() {
  const [c, x] = canvas();
  const w = SIZE, h = SIZE;
  x.fillStyle = "#2c4a1f";
  x.fillRect(0, 0, w, h);
  for (let i = 0; i < 60; i++) {
    const g = x.createRadialGradient(rr(0, w), rr(0, h), 6, rr(0, w), rr(0, h), rr(50, 140));
    g.addColorStop(0, rnd() < 0.5 ? "rgba(44,74,31,0.4)" : "rgba(58,96,36,0.35)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
  }
  for (let i = 0; i < 2600; i++) {
    const g = rr(0, 40) | 0;
    x.fillStyle = `rgba(${34 + g},${74 + g},${26 + g},0.5)`;
    x.beginPath();
    x.arc(rr(0, w), rr(0, h), rr(2, 7), 0, Math.PI * 2);
    x.fill();
  }
  save("leaf", c);
}

function drawWater() {
  const [c, x] = canvas();
  const w = SIZE, h = SIZE;
  const g = x.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#0d2c3d");
  g.addColorStop(1, "#123848");
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);
  /* gentle ripples */
  for (let i = 0; i < 130; i++) {
    x.strokeStyle = `rgba(190,220,235,${rr(0.02, 0.07).toFixed(3)})`;
    x.lineWidth = rr(1, 2.4);
    const px = rr(0, w), py = rr(0, h), l = rr(40, 190);
    x.beginPath();
    x.moveTo(px, py);
    x.bezierCurveTo(px + l * 0.3, py - rr(3, 9), px + l * 0.7, py + rr(3, 9), px + l, py);
    x.stroke();
  }
  save("water", c);
}

/* --------------------------------------------------------------- facades
 *  What makes a block read as a real building rather than a box is the
 *  window: these tiles are laid one storey per repeat, and the map's planar
 *  world-space UVs put a row of windows on every floor of every wall.
 * ------------------------------------------------------------------------ */

/** a pane of glass with a soft sky reflection */
function pane(x, px, py, pw, ph, base = "#33454e") {
  x.fillStyle = base;
  x.fillRect(px, py, pw, ph);
  const g = x.createLinearGradient(px, py, px + pw, py + ph);
  g.addColorStop(0, "rgba(206,226,238,0.30)");
  g.addColorStop(0.45, "rgba(206,226,238,0.06)");
  g.addColorStop(1, "rgba(24,32,36,0.22)");
  x.fillStyle = g;
  x.fillRect(px, py, pw, ph);
}

/** curtain wall: mullions, spandrel band, a few panes with the blinds shut */
function drawFacadeGlass() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  x.fillStyle = "#4d5157";
  x.fillRect(0, 0, w, h);
  const panes = 4;
  const pw = w / panes;
  const top = h * 0.17;                 // spandrel / floor slab
  for (let i = 0; i < panes; i++) {
    const px = i * pw + 3;
    const shut = rnd() < 0.14;
    pane(x, px, top, pw - 6, h - top - 3, shut ? "#2b363d" : "#37505c");
    if (shut) {
      x.fillStyle = "rgba(226,224,214,0.5)";
      for (let b = 0; b < 7; b++) x.fillRect(px + 2, top + 6 + b * ((h - top) / 8), pw - 10, 2);
    }
  }
  /* spandrel: the concrete band that runs between the floors */
  x.fillStyle = "#585b60";
  x.fillRect(0, 0, w, top);
  grain(x, w, top, 500, 12);
  x.fillStyle = "rgba(255,255,255,0.16)";
  x.fillRect(0, 0, w, 3);
  x.fillStyle = "rgba(0,0,0,0.28)";
  x.fillRect(0, top - 3, w, 3);
  /* mullions */
  x.fillStyle = "#828a90";
  for (let i = 0; i <= panes; i++) x.fillRect(i * pw - 1.5, 0, 3, h);
  x.fillStyle = "rgba(0,0,0,0.22)";
  for (let i = 0; i <= panes; i++) x.fillRect(i * pw + 1.5, 0, 1, h);
  save("facadeGlass", c);
}

/** brick wall with a sash window, a stone sill and a lintel */
function drawFacadeBrick() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  x.fillStyle = "#714c39";
  x.fillRect(0, 0, w, h);
  const bh = h / 24;
  for (let r = 0; r < 24; r++) {
    const off = (r % 2) * (w / 12);
    for (let col = -1; col < 12; col++) {
      const g = rr(0, 24) | 0;
      x.fillStyle = `rgb(${110 + g},${72 + g},${55 + g})`;
      x.fillRect(col * (w / 6) + off + 2, r * bh + 2, w / 6 - 4, bh - 4);
    }
  }
  grain(x, w, h, 1600, 14);
  /* the window: two lights, white frame, stone sill */
  const wx = w * 0.24, wy = h * 0.2, ww = w * 0.52, wh = h * 0.52;
  x.fillStyle = "#efece1";
  x.fillRect(wx - 7, wy - 7, ww + 14, wh + 14);
  pane(x, wx, wy, ww, wh, "#2c3b43");
  x.fillStyle = "#efece1";
  x.fillRect(wx + ww / 2 - 3, wy, 6, wh);
  x.fillRect(wx, wy + wh * 0.45, ww, 6);
  /* sill + lintel */
  x.fillStyle = "#b9b3a3";
  x.fillRect(wx - 13, wy + wh + 7, ww + 26, 9);
  x.fillStyle = "rgba(0,0,0,0.25)";
  x.fillRect(wx - 13, wy + wh + 16, ww + 26, 4);
  x.fillStyle = "#c6c0b0";
  x.fillRect(wx - 13, wy - 18, ww + 26, 9);
  /* a splash of grime under the sill */
  x.fillStyle = "rgba(20,16,12,0.16)";
  x.fillRect(wx - 13, wy + wh + 20, ww + 26, 26);
  save("facadeBrick", c);
}

/** rendered concrete with a balcony band — the apartment block */
function drawFacadeConcrete() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  x.fillStyle = "#a09a8e";
  x.fillRect(0, 0, w, h);
  grain(x, w, h, 2600, 18);
  /* the balcony slab and its shadow, along the bottom of the storey */
  x.fillStyle = "#8e887c";
  x.fillRect(0, h * 0.66, w, h * 0.34);
  x.fillStyle = "rgba(0,0,0,0.22)";
  x.fillRect(0, h * 0.66, w, 6);
  x.fillStyle = "rgba(255,255,255,0.14)";
  x.fillRect(0, h * 0.99, w, 4);
  /* railing */
  x.fillStyle = "rgba(70,74,78,0.75)";
  x.fillRect(0, h * 0.72, w, 4);
  for (let i = 0; i < 10; i++) x.fillRect(i * (w / 10) + 4, h * 0.72, 3, h * 0.26);
  /* two windows over the balcony */
  for (const px of [w * 0.08, w * 0.56]) {
    const ww = w * 0.36, wh = h * 0.4;
    x.fillStyle = "#565349";
    x.fillRect(px - 5, h * 0.2 - 5, ww + 10, wh + 10);
    pane(x, px, h * 0.2, ww, wh, "#31424a");
    x.fillStyle = "#565349";
    x.fillRect(px + ww / 2 - 2.5, h * 0.2, 5, wh);
  }
  /* stained concrete streaks */
  for (let i = 0; i < 14; i++) {
    x.fillStyle = `rgba(60,56,50,${rr(0.03, 0.1).toFixed(3)})`;
    x.fillRect(rr(0, w), 0, rr(2, 9), rr(h * 0.3, h));
  }
  save("facadeConcrete", c);
}

/** one 4 m ground floor: shopfront glazing, a door and a fascia sign */
function drawFacadeShop() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  /* the fascia, with the shop's name band */
  const band = h * 0.22;
  x.fillStyle = "#3c3a38";
  x.fillRect(0, 0, w, band);
  const hue = pick(["#7c3a2e", "#2f4a52", "#4f4a30", "#3e4a3a", "#5a3550"]);
  x.fillStyle = hue;
  x.fillRect(6, band * 0.24, w - 12, band * 0.52);
  x.fillStyle = "rgba(240,236,224,0.82)";
  for (let i = 0; i < 3; i++) x.fillRect(24 + i * 34, band * 0.42, rr(14, 26), 7);
  /* glazing: two big panes and a recessed door */
  const gy = band, gh = h * 0.7;
  x.fillStyle = "#2b2b2d";
  x.fillRect(0, gy, w, gh);
  pane(x, 8, gy + 8, w * 0.42, gh - 16, "#3a4d56");
  pane(x, w * 0.5, gy + 8, w * 0.18, gh - 16, "#33454e");
  pane(x, w * 0.72, gy + 8, w * 0.2, gh - 16, "#3a4d56");
  /* the door: darker, with a handrail line */
  x.fillStyle = "#232425";
  x.fillRect(w * 0.5 + 4, gy + 14, w * 0.17, gh - 22);
  x.fillStyle = "rgba(226,222,210,0.5)";
  x.fillRect(w * 0.5 + 8, gy + gh * 0.62, w * 0.15, 3);
  /* reflections and a mullion over everything */
  x.fillStyle = "#2b2b2d";
  x.fillRect(w * 0.47, gy, 6, gh);
  x.fillRect(0, gy, w, 6);
  /* plinth */
  x.fillStyle = "#4a4744";
  x.fillRect(0, h * 0.92, w, h * 0.08);
  grain(x, w, h * 0.08, 300, 12);
  save("facadeShop", c);
}

/** industrial corrugated cladding with a strip window */
function drawCorrugated() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  x.fillStyle = "#8b8f92";
  x.fillRect(0, 0, w, h);
  for (let i = 0; i < w; i += 8) {
    x.fillStyle = i % 16 === 0 ? "#7c8083" : "#969a9d";
    x.fillRect(i, 0, 4, h);
  }
  grain(x, w, h, 1200, 12);
  /* strip window */
  const sy = h * 0.3, sh = h * 0.2;
  x.fillStyle = "#5f6366";
  x.fillRect(0, sy - 5, w, sh + 10);
  pane(x, 0, sy, w, sh, "#2c3a40");
  x.fillStyle = "#5f6366";
  for (let i = 1; i < 4; i++) x.fillRect((i * w) / 4 - 3, sy, 6, sh);
  /* rust runs and a concrete plinth */
  for (let i = 0; i < 16; i++) {
    x.fillStyle = `rgba(96,62,40,${rr(0.04, 0.13).toFixed(3)})`;
    x.fillRect(rr(0, w), sy + sh, rr(2, 6), rr(10, 70));
  }
  x.fillStyle = "#6a6c6d";
  x.fillRect(0, h * 0.86, w, h * 0.14);
  save("corrugated", c);
}

/** a flat roof: membrane, gravel, joints and a couple of drains */
function drawRoofGravel() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  x.fillStyle = "#6b6862";
  x.fillRect(0, 0, w, h);
  for (let i = 0; i < 2600; i++) {
    const g = 96 + rr(0, 60) | 0;
    x.fillStyle = `rgba(${g},${g - 3},${g - 8},${rr(0.2, 0.6).toFixed(2)})`;
    x.fillRect(rr(0, w), rr(0, h), rr(1, 3), rr(1, 3));
  }
  /* membrane joints */
  x.strokeStyle = "rgba(0,0,0,0.3)";
  x.lineWidth = 4;
  for (let k = 0; k <= 2; k++) {
    x.beginPath();
    x.moveTo((k * w) / 2, 0); x.lineTo((k * w) / 2, h);
    x.moveTo(0, (k * h) / 2); x.lineTo(w, (k * h) / 2);
    x.stroke();
  }
  /* patches, and one drain */
  for (let i = 0; i < 5; i++) {
    x.fillStyle = `rgba(${40 + (rr(0, 40) | 0)},${40 + (rr(0, 40) | 0)},40,${rr(0.1, 0.24).toFixed(2)})`;
    x.fillRect(rr(0, w), rr(0, h), rr(60, 220), rr(60, 220));
  }
  x.fillStyle = "#3a3a38";
  x.fillRect(w * 0.72, h * 0.2, 46, 46);
  x.fillStyle = "rgba(255,255,255,0.2)";
  x.fillRect(w * 0.72 + 6, h * 0.2 + 6, 34, 4);
  save("roofGravel", c);
}

/** pitched roofs: staggered slate courses */
function drawRoofSlate() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  x.fillStyle = "#33373c";
  x.fillRect(0, 0, w, h);
  const rows = 12;
  const rh = h / rows;
  for (let r = 0; r < rows; r++) {
    const off = (r % 2) * (w / 16);
    for (let col = -1; col < 9; col++) {
      const g = rr(0, 22) | 0;
      x.fillStyle = `rgb(${52 + g},${57 + g},${63 + g})`;
      x.fillRect(col * (w / 8) + off + 2, r * rh + 2, w / 8 - 4, rh - 4);
    }
  }
  grain(x, w, h, 900, 12);
  save("roofSlate", c);
}

/** the raw ground between the blocks: dirt, gravel, patches of grass */
function drawGround() {
  const [c, x] = faceCanvas();
  const w = FACE, h = FACE;
  x.fillStyle = "#6f6350";
  x.fillRect(0, 0, w, h);
  grain(x, w, h, 2200, 24);
  for (let i = 0; i < 14; i++) {
    const g = x.createRadialGradient(rr(0, w), rr(0, h), 6, rr(0, w), rr(0, h), rr(60, 200));
    const green = rnd() < 0.55;
    g.addColorStop(0, green ? "rgba(78,96,48,0.42)" : "rgba(112,96,70,0.34)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
  }
  for (let i = 0; i < 900; i++) {
    const s = rr(1.4, 4.4);
    x.fillStyle = `rgba(${120 + (rr(0, 50) | 0)},${116 + (rr(0, 46) | 0)},${104 + (rr(0, 40) | 0)},0.5)`;
    x.fillRect(rr(0, w), rr(0, h), s, s);
  }
  save("ground", c);
}

drawRoad();
drawGrass();
drawConcrete();
drawSand();
drawBrick();
drawLeaf();
drawWater();
drawFacadeGlass();
drawFacadeBrick();
drawFacadeConcrete();
drawFacadeShop();
drawCorrugated();
drawRoofGravel();
drawRoofSlate();
drawGround();
console.log("done");
