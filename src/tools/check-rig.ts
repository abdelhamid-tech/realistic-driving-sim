/**
 * RIG CHECK — drives the car-rigging maths the way the engine drives it, with
 * no browser and no WebGL, and asserts the things that make a downloaded model
 * behave: the wheels the physics steers with are the ones under the nose you
 * can see, the geometry is measured in metres, and a model with unnamed wheels
 * still rolls instead of sliding along on a rigid body.
 *
 *   bun run src/tools/check-rig.ts
 *
 * Run it after touching src/game/rigging.ts or the wheel code in engine.ts.
 * It is also the quickest way to answer "why does my imported car drive
 * backwards / with no wheels".
 */
import * as THREE from "three";
import { decideRig, detectWheels, planRig, subtreeBoxes, type RigPlan, type WheelSample } from "../game/rigging";

let fails = 0, cases = 0;
const check = (ok: boolean, what: string) => {
  if (!ok) { fails++; console.log(`  FAIL  ${what}`); }
};
let sectionName = "";
const section = (title: string, ok: boolean) => {
  console.log(`${ok ? "  ok  " : " FAIL "} ${title}`);
};

/* a canonical car: 4.6 m long, 1.9 wide, 2.7 wheelbase, 1.6 track, 34 cm tyres,
   with ids 0,1 the true front wheels (physically +Z) and 2,3 the true rears */
const DEG = Math.PI / 180;
const WB = 2.7, TR = 1.6, R = 0.34;
const CANON: [string, number, number][] = [
  ["wheel_FL", +TR / 2, +WB / 2],
  ["wheel_FR", -TR / 2, +WB / 2],
  ["wheel_RL", +TR / 2, -WB / 2],
  ["wheel_RR", -TR / 2, -WB / 2],
];
/** engine convention: after a yaw of `a`, the point (x,z) lands here */
const spin = (x: number, z: number, a: number) => ({
  x: x * Math.cos(a) + z * Math.sin(a),
  z: -x * Math.sin(a) + z * Math.cos(a),
});
/** where the model's own nose points once the rigger has turned it */
const noseAfter = (authoredDeg: number, yaw: number) => {
  const n = spin(0, 1, authoredDeg * DEG);
  return spin(n.x, n.z, yaw);
};

function build(authoredDeg: number, lies: boolean, unnamed: boolean) {
  const a = authoredDeg * DEG;
  const samples: WheelSample[] = CANON.map(([name, x, z], i) => {
    const p = spin(x, z, a);
    /* names swapped: the pair the names call "front" is physically at the back */
    const named = lies ? CANON[(i + 2) % 4][0] : name;
    return { id: i, name: unnamed ? `Object_${20 + i}` : named, x: p.x, y: R, z: p.z, radius: R };
  });
  const half = WB / 2 + 1.0;
  const box = {
    min: [-half, 0, -half] as [number, number, number],
    max: [half, 1.3, half] as [number, number, number],
  };
  const plan: RigPlan | null = unnamed ? null : planRig(samples, box);
  return { samples, plan };
}

console.log("\nRIG — orientation");

for (const authored of [0, 90, 180, 270]) {
  for (const lies of [false, true]) {
    for (const unnamed of [false, true]) {
      for (const turn of [0, 90, 180, 270]) {
        const { samples, plan } = build(authored, lies, unnamed);
        const d = decideRig(samples, plan, { turn });
        const tag = `authored ${authored}° · ${lies ? "names lie" : "names true"} · ${unnamed ? "unnamed" : "named"} · turn ${turn}°`;
        cases++;

        /* four wheels, each used once */
        const ids = d.slots.filter((i) => i !== null) as number[];
        check(ids.length === 4, `${tag}: four wheels assigned (${ids.length})`);
        if (ids.length !== 4 || new Set(ids).size !== 4) continue;

        /* the steer pair must sit under the physics nose, whatever the turn */
        const at = (k: number) => spin(samples[d.slots[k] as number].x, samples[d.slots[k] as number].z, d.yaw);
        const frontZ = (at(0).z + at(1).z) / 2;
        const rearZ = (at(2).z + at(3).z) / 2;
        check(frontZ > rearZ + 0.1, `${tag}: steering wheels in front (${frontZ.toFixed(2)} vs ${rearZ.toFixed(2)})`);
        const nose = noseAfter(authored, d.yaw);
        const drawnForwards = nose.z > 0.5;
        if (drawnForwards) {
          /* with the nose at +Z the left flank is +X: no wheel may be crossed */
          check(
            (at(0).x + at(2).x) / 2 > (at(1).x + at(3).x) / 2,
            `${tag}: left wheels on the left`,
          );
        }

        /* the measured geometry is only decidable when the wheels' long axis
           ends up along Z — a car turned crosswise is a user error, and there
           the only promise is that nothing collapses */
        check(!!d.metrics, `${tag}: metrics measured`);
        if (drawnForwards && d.metrics) {
          check(Math.abs(d.metrics.wheelbase - WB) < 0.02, `${tag}: wheelbase ${d.metrics.wheelbase.toFixed(3)} vs ${WB}`);
          check(Math.abs(d.metrics.track - TR) < 0.02, `${tag}: track ${d.metrics.track.toFixed(3)} vs ${TR}`);
          check(Math.abs(d.metrics.wheelR - R) < 0.01, `${tag}: radius ${d.metrics.wheelR.toFixed(3)} vs ${R}`);
        }
      }
    }
  }
}


/* ---------- truth-telling names: any authored direction self-corrects ---- */
{
  const back = build(180, false, false);
  const auto = decideRig(back.samples, back.plan, { turn: 0 });
  check(noseAfter(180, auto.yaw).z > 0.9, "names true, authored backwards: the rigger turns the nose to +Z by itself");
  check(
    [0, 1].every((i) => auto.slots.includes(i)),
    "names true, authored backwards: the true front wheels are the steering pair",
  );
}

/* ---------- the reported bug, pinned down --------------------------------
 * Names that lie (a `wheel_FL` parked at the back) make the rigger orient the
 * model the wrong way round. That is the "it drives backwards" complaint — and
 * TURN AROUND must fix the body *and* the wheels together, not one of them. */
{
  const lied = build(0, true, false);
  const auto = decideRig(lied.samples, lied.plan, { turn: 0 });
  check(
    noseAfter(0, auto.yaw).z < -0.9,
    "names lie: the rigger auto-orients the model backwards (hence the control)",
  );

  const fixed = decideRig(lied.samples, lied.plan, { turn: 180 });
  check(noseAfter(0, fixed.yaw).z > 0.9, "names lie + TURN AROUND: the true nose now points +Z");
  check(
    [0, 1].every((i) => fixed.slots.includes(i)),
    "names lie + TURN AROUND: the true front wheels steer (roles were re-labelled)",
  );
  check(
    fixed.slots[0] !== auto.slots[0] && fixed.slots[2] !== auto.slots[2],
    "names lie + TURN AROUND: front and rear roles really exchanged",
  );
  check(!!fixed.metrics && Math.abs(fixed.metrics.wheelbase - WB) < 0.02, "names lie + TURN AROUND: wheelbase intact");

  /* a full turn of the body is the same car again */
  const twice = decideRig(lied.samples, lied.plan, { turn: 360 });
  const delta = Math.abs((twice.yaw - auto.yaw) % (2 * Math.PI));
  check(delta < 1e-9 || Math.abs(delta - 2 * Math.PI) < 1e-9, "turn 360° is the same as no turn");
}

/* ---------- no wheels at all: the caller must still get something sane ---- */
{
  const none = decideRig([], null, { turn: 0 });
  check(none.slots.every((i) => i === null), "no samples: no slots, so the caller keeps the model rigid");
  check(none.metrics === null, "no samples: no metrics");
}

section(
  fails === 0
    ? `${cases} orientation cases: every one steers from the visible nose`
    : `${fails} failures out of ${cases} cases`,
  fails === 0,
);

const CORNERS: [number, number][] = [
  [+TR / 2, +WB / 2], /* fl */
  [-TR / 2, +WB / 2], /* fr */
  [+TR / 2, -WB / 2], /* rl */
  [-TR / 2, -WB / 2], /* rr */
];

function bodyMesh(w = 1.9, h = 1.0, d = 4.4) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial());
}

/** a wheel as most authors ship it: a group holding tyre + rim */
function wheelGroup(x: number, z: number, name: string) {
  const g = new THREE.Group();
  g.name = name;
  const tyre = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.25, 24), new THREE.MeshBasicMaterial());
  tyre.rotation.z = Math.PI / 2; /* spin axis along X, as on a car */
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.6, R * 0.6, 0.26, 16), new THREE.MeshBasicMaterial());
  rim.rotation.z = Math.PI / 2;
  g.add(tyre, rim);
  g.position.set(x, R, z);
  return g;
}

function carScene(opts: { named: boolean; wheels: boolean; mirror: boolean; spare: boolean }) {
  const root = new THREE.Group();
  root.name = "car";
  const body = bodyMesh();
  body.position.y = 0.35 + 0.5;
  body.name = opts.named ? "body_shell" : "Object_2";
  root.add(body);
  if (opts.mirror) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.25), new THREE.MeshBasicMaterial());
    m.name = opts.named ? "mirror_L" : "Object_9";
    m.position.set(1.05, 1.15, 0.9);
    root.add(m);
  }
  if (opts.wheels) {
    const names = ["wheel_FL", "wheel_FR", "wheel_RL", "wheel_RR"];
    CORNERS.forEach(([x, z], i) => root.add(wheelGroup(x, z, opts.named ? names[i] : `Object_${10 + i}`)));
  }
  if (opts.spare) {
    /* a spare in the boot: round, but not on the ground and not a corner */
    root.add(wheelGroup(0, -2.0, opts.named ? "wheel_spare" : "Object_20"));
  }
  root.updateMatrixWorld(true);
  return root;
}

/** exactly what the engine does with an unnamed model */
function findWheels(root: THREE.Object3D) {
  const boxes = subtreeBoxes(root);
  const nodes: THREE.Object3D[] = [];
  root.traverse((o) => {
    if (o === root) return;
    const b = boxes.get(o);
    if (b && !b.isEmpty()) nodes.push(o);
  });
  const pool = nodes.map((o, i) => {
    const b = boxes.get(o) as THREE.Box3;
    return {
      index: i,
      min: [b.min.x, b.min.y, b.min.z] as [number, number, number],
      max: [b.max.x, b.max.y, b.max.z] as [number, number, number],
    };
  });
  const whole = new THREE.Box3().setFromObject(root);
  const picked = detectWheels(pool, {
    min: [whole.min.x, whole.min.y, whole.min.z],
    max: [whole.max.x, whole.max.y, whole.max.z],
  });
  return picked ? picked.map((i) => (i === null ? null : nodes[i])) : null;
}

console.log("\nRIG — wheels with no name");

/* ---------- the reported case: four wheels, none of them named ---------- */
{
  const root = carScene({ named: false, wheels: true, mirror: true, spare: false });
  const found = findWheels(root);
  check(!!found, "unnamed wheels: four wheels found");
  if (found) {
    check(found.length === 4, `unnamed wheels: exactly four (${found.length})`);
    check(new Set(found.map((o) => o?.uuid)).size === 4, "unnamed wheels: four distinct nodes");
    /* each wheel group is the outermost shape, never its rim or its tyre */
    const names = found.map((o) => o?.name ?? "?");
    check(
      names.every((n) => n === "Object_10" || n === "Object_11" || n === "Object_12" || n === "Object_13"),
      `unnamed wheels: the wheel groups themselves were picked (${names.join(", ")})`,
    );
    /* and one per corner, in slot order fl fr rl rr */
    found.forEach((o, i) => {
      const p = (o as THREE.Object3D).position;
      const [x, z] = CORNERS[i];
      check(
        Math.abs(p.x - x) < 0.2 && Math.abs(p.z - z) < 0.2,
        `unnamed wheels: slot ${["fl", "fr", "rl", "rr"][i]} sits at (${x}, ${z}), found (${p.x.toFixed(2)}, ${p.z.toFixed(2)})`,
      );
    });
  }
}

/* ---------- a spare in the boot must not be mistaken for a road wheel --- */
{
  const root = carScene({ named: false, wheels: true, mirror: true, spare: true });
  const found = findWheels(root);
  check(!!found, "with a spare: four wheels still found");
  check(
    !!found && !found.some((o) => o?.name === "Object_20"),
    "with a spare: the spare stays in the boot",
  );
}

/* ---------- a model with no wheels at all stays rigid, honestly --------- */
{
  const root = carScene({ named: false, wheels: false, mirror: false, spare: false });
  check(findWheels(root) === null, "no wheels on the model: nothing is invented");
  const mirrorOnly = carScene({ named: false, wheels: false, mirror: true, spare: false });
  check(findWheels(mirrorOnly) === null, "a mirror is not a wheel");
}

/* ---------- the whole car is measured even when the wheels are nested --- */
{
  const root = carScene({ named: false, wheels: true, mirror: false, spare: false });
  const whole = new THREE.Box3().setFromObject(root);
  const size = whole.getSize(new THREE.Vector3());
  check(Math.abs(size.z - 4.4) < 0.01, `body length read as ${size.z.toFixed(2)} m`);
  check(Math.abs(size.x - 1.9) < 0.25, `body width read as ${size.x.toFixed(2)} m`);
}

section(
  fails === 0 ? "shape: unnamed models get four wheels on the right corners" : `shape: ${fails} failures`,
  fails === 0,
);

process.exit(fails === 0 ? 0 : 1);
