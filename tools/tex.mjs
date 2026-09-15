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

function canvas() {
  const c = createCanvas(SIZE, SIZE);
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

drawRoad();
drawGrass();
drawConcrete();
drawSand();
drawBrick();
drawLeaf();
drawWater();
console.log("done");
