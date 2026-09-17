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
