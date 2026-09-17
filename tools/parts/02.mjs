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
      if (inJunctionX(mid, 2) || offPavement(mid, fixed, bridgeX)) continue;
      G.slab(a, fixed - w, b, fixed + w, y, M.paint);
    } else {
      if (inJunctionZ(mid, 2) || offPavement(fixed, mid, bridgeX)) continue;
      G.slab(fixed - w, a, fixed + w, b, y, M.paint);
    }
  }
}

/** A zebra crossing: bars across the road, 60 cm of paint and 70 cm of road. */
function zebra(x, z, span, alongX) {
  if (offPavement(x, z, true)) return;
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
  if (offPavement(x, z, true)) return;
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

