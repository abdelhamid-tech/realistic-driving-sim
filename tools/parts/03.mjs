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

