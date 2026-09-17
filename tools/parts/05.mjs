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

