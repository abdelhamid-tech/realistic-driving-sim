/* ============================================================================
 *  MODEL RIGGING — turns a downloaded car GLB into something driveable.
 *
 *  A downloaded model arrives with no idea that it is a car: wheels are just
 *  nodes somewhere in the hierarchy, the nose can point anywhere, and the
 *  units are whatever the author felt like. Everything here is pure maths on
 *  the scene graph, so it runs and is testable in plain Node; only the WebGL
 *  work stays in engine.
 * ==========================================================================*/

import { Box3, type Mesh, type Object3D } from "three";

export type Axle = "f" | "b";
export type Side = "l" | "r";
export type Slot = "fl" | "fr" | "rl" | "rr";
export const SLOTS: Slot[] = ["fl", "fr", "rl", "rr"];

export interface WheelLabel {
  side: Side | null;
  axle: Axle | null;
}

/*
 * Names are read token by token, never by raw substring: `rim_rr` is a wheel,
 * the `rim` inside `carbon_fibre_trim` is not. `WheelFrontLBrakeDisc` splits
 * into [wheel, front, l, brake, disc] so camelCase, `_`, `.` and `-` all work.
 */
function tokens(raw: string): string[] {
  return (
    raw
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
      .replace(/[^A-Za-z0-9]+/g, " ")
      .trim()
      .toLowerCase()
      .split(/\s+/)
      /* trailing numbers are part counters: `Tire_RL.001`, `wheel01` */
      .map((t) => t.replace(/\d+$/, ""))
      .filter(Boolean)
  );
}

/* tokens that mean "this node is a wheel" */
const WHEEL_STEM = ["wheel", "whl", "tyre", "tire", "roue", "wiel", "pneu", "reifen", "koleso"];
const WHEEL_EXACT = ["rim", "rad"];
const isWheelToken = (t: string) => WHEEL_EXACT.includes(t) || WHEEL_STEM.some((w) => t.startsWith(w));

/* …and words that merely contain one (`InteriorSteeringWheel`, mirrors, `*_trim`) */
const NOT_WHEEL = /(steer|interior|dash|pedal|seat|mirror|wiper|door|handle|suspens|spring|shock|exhaust|grill|headlight|taillight|brakelight|caliper|hubcap|nut|bolt|logo|badge|trim|body|glass)/;

const AXLE_STEM: [string[], Axle][] = [
  [["front", "fwd", "fore", "avant", "vorne", "delan", "anter"], "f"],
  [["rear", "back", "arri", "hint", "post", "tras"], "b"],
];
const AXLE_EXACT: [string, Axle][] = [["f", "f"], ["vf", "f"], ["av", "f"], ["b", "b"], ["hr", "b"], ["ar", "b"]];
const SIDE_STEM: [string[], Side][] = [
  [["left", "lhs", "izq", "links", "gauche"], "l"],
  [["right", "rhs", "rechts", "droite"], "r"],
];
const SIDE_EXACT: [string, Side][] = [["l", "l"], ["g", "l"], ["r", "r"], ["d", "r"]];

const asAxle = (c: string): Axle | null => (c === "f" ? "f" : c === "r" || c === "b" ? "b" : null);
const asSide = (c: string): Side | null => (c === "l" ? "l" : c === "r" ? "r" : null);

/**
 * Reads the front/rear and left/right meaning out of a node name:
 * `wheel_fl`, `WheelFrontL`, `wheelRB` (Babylon's side-first order),
 * `Tire_RL.001`, `roue_av_g`. Returns null when the name is not wheel-like.
 *
 * Two-letter codes carry both facts with one shared letter (`r` is either
 * "rear" or "right"), so both readings are tried and the one that fills both
 * fields wins: `rl` reads as rear-left, `rb` as right-back.
 */
export function parseWheelName(rawName: string): WheelLabel | null {
  const all = tokens(rawName);
  if (!all.length) return null;
  if (!all.some(isWheelToken)) return null;
  if (NOT_WHEEL.test(all.join(""))) return null;

  let axle: Axle | null = null;
  let side: Side | null = null;
  const codes: string[] = [];
  for (const t of all) {
    if (isWheelToken(t)) continue;
    const axleHit = AXLE_STEM.find(([w]) => w.some((x) => t.startsWith(x)))?.[1] ?? AXLE_EXACT.find(([x]) => x === t)?.[1];
    if (!axle && axleHit) {
      axle = axleHit;
      continue;
    }
    const sideHit = SIDE_STEM.find(([w]) => w.some((x) => t.startsWith(x)))?.[1] ?? SIDE_EXACT.find(([x]) => x === t)?.[1];
    if (!side && sideHit) {
      side = sideHit;
      continue;
    }
    codes.push(t);
  }

  if (!axle || !side) {
    /* `fl` / `rb` / `LF`: one letter is the axle, the other the side */
    for (const t of codes) {
      if (t.length < 2) continue;
      const [c1, c2] = [t[0], t[1]];
      const axleFirst: [Axle | null, Side | null] = [asAxle(c1), asSide(c2)];
      const sideFirst: [Side | null, Axle | null] = [asSide(c1), asAxle(c2)];
      if (axleFirst[0] && axleFirst[1]) {
        axle = axle ?? axleFirst[0];
        side = side ?? axleFirst[1];
      } else if (sideFirst[0] && sideFirst[1]) {
        side = side ?? sideFirst[0];
        axle = axle ?? sideFirst[1];
      }
      if (axle && side) break;
    }
  }
  if (!axle || !side) {
    /* last resort: a lone letter left on its own (`wheel_l`, `Wheel_R`).
       Only single-letter tokens count, so `WheelsArch` stays rejected. */
    for (const t of codes) {
      if (t.length !== 1) continue;
      if (!axle && asAxle(t)) axle = asAxle(t) as Axle;
      else if (!side && asSide(t)) side = asSide(t) as Side;
      if (axle && side) break;
    }
  }
  if (!axle && !side) return null;
  return { side, axle };
}

/* ---------------------------------------------------------------------------
 *  WHEELS WITH NO NAME
 *
 *  Plenty of downloaded models call their wheels `Object_37`. Rather than
 *  give up and leave the car rigid, look for wheels by shape: round, roughly
 *  as tall as it is long, sitting low, and four of them in a rectangle.
 *  This is a guess — the caller keeps the owner's rotation control so a wrong
 *  answer is fixable — but it is a good guess.
 * -------------------------------------------------------------------------*/

export interface NodeBox extends Box3Like {
  /** index into the caller's own node list */
  index: number;
}

const boxSize = (b: Box3Like) => [b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]];
const boxCentre = (b: Box3Like) => [
  (b.min[0] + b.max[0]) / 2,
  (b.min[1] + b.max[1]) / 2,
  (b.min[2] + b.max[2]) / 2,
];

/**
 * Picks four boxed nodes that look like road wheels, in slot order
 * fl, fr, rl, rr (+Z is the nose, as everywhere else in the engine).
 * Returns null when the shape of the model gives nothing convincing.
 */
export function detectWheels(nodes: NodeBox[], model: Box3Like): (number | null)[] | null {
  const size = boxSize(model);
  const height = size[1];
  const length = Math.max(size[0], size[2]);
  if (nodes.length < 4 || height <= 0 || length <= 0) return null;
  const [mcx, , mcz] = boxCentre(model);

  const round = (b: Box3Like) => {
    const [sx, sy, sz] = boxSize(b);
    const vertical = sy;
    const footprint = Math.max(sx, sz);
    /* a tyre is a disc: tall as it is wide, and small next to the car */
    if (vertical < height * 0.06) return false;
    if (vertical > height * 0.55) return false;
    if (footprint > length * 0.35) return false;
    if (Math.abs(vertical - footprint) > footprint * 0.55) return false;
    return true;
  };

  let pool = nodes.filter(round);
  if (pool.length < 4) return null;
  /* drop anything that just sits inside a bigger candidate (a rim, a disc, a
     hub): the outermost shape is the tyre, and it is the one that must spin */
  pool = pool.filter(
    (b) =>
      !pool.some(
        (o) =>
          o !== b &&
          o.min[0] <= b.min[0] + 1e-6 && o.min[1] <= b.min[1] + 1e-6 && o.min[2] <= b.min[2] + 1e-6 &&
          o.max[0] >= b.max[0] - 1e-6 && o.max[1] >= b.max[1] - 1e-6 && o.max[2] >= b.max[2] - 1e-6 &&
          (boxSize(o)[1] > boxSize(b)[1]).valueOf(),
      ),
  );
  if (pool.length < 4) return null;

  /* keep the wheels low in the car: anything floating in the top half is a
     mirror, an exhaust tip or a wiper */
  const bottom = model.min[1];
  pool = pool.filter((b) => boxCentre(b)[1] < bottom + height * 0.62);
  if (pool.length < 4) return null;

  /* the four quadrants around the car's centre, widest track first */
  const quadrant = (b: Box3Like): Slot | null => {
    const [cx, , cz] = boxCentre(b);
    const dx = cx - mcx;
    const dz = cz - mcz;
    if (Math.abs(dx) < size[0] * 0.12 || Math.abs(dz) < size[2] * 0.12) return null; /* too central */
    return ((dz > 0 ? "f" : "r") + (dx > 0 ? "l" : "r")) as Slot;
  };
  const best = new Map<Slot, NodeBox>();
  const spread = new Map<Slot, number>();
  for (const b of pool) {
    const slot = quadrant(b);
    if (!slot) continue;
    const [cx, , cz] = boxCentre(b);
    const reach = Math.abs(cx - mcx) + Math.abs(cz - mcz);
    if ((spread.get(slot) ?? -1) < reach) {
      best.set(slot, b);
      spread.set(slot, reach);
    }
  }
  if (SLOTS.some((s) => !best.has(s))) return null;

  /* the four must match each other: a car does not have one 20 cm wheel */
  const radii = SLOTS.map((s) => boxSize(best.get(s) as Box3Like)[1] / 2);
  const mid = mean(radii);
  if (radii.some((r) => Math.abs(r - mid) > mid * 0.45)) return null;

  return SLOTS.map((s) => (best.get(s) as NodeBox).index);
}

export interface WheelSample {
  /** opaque handle the caller uses to find the node again */
  id: number;
  name: string;
  /** hub position in model space, after the loader's own node transforms */
  x: number;
  y: number;
  z: number;
  /** measured wheel radius (hub down to the bottom of the tyre) */
  radius: number;
}

/* ---------------------------------------------------------------------------
 *  WHICH END IS THE NOSE
 *
 *  Names cannot be trusted to say it: a model called `wheel_FL` sits at the
 *  back as often as not, and plenty of downloads name nothing at all. So the
 *  decision is made once, here, from where the four wheels actually ended up
 *  after the owner's own correction has been applied — and it is applied to
 *  the body and the wheel roles *together*, so a car turned around still
 *  steers from its nose instead of its boot.
 * -------------------------------------------------------------------------*/

export interface RigDecision {
  /** radians to turn the body, owner's correction included */
  yaw: number;
  /** index into `samples` of the wheel playing each of fl, fr, rl, rr */
  slots: (number | null)[];
  /** wheelbase, track and radius of that assignment, in the final frame */
  metrics: { wheelbase: number; track: number; wheelR: number } | null;
  /** true when the names were overruled and the wheels re-labelled by position */
  relabelled: boolean;
}

export interface RigOptions {
  /**
   * Degrees clockwise seen from above — the owner's correction. It turns the
   * body *and* re-labels the wheels, so the steering pair stays under the nose
   * the player can see. 0 and 180 are the only useful values.
   */
  turn?: number;
}

/** The four roles, read off the wheel positions once the body has been turned. */
function slotsFromQuadrants(
  samples: WheelSample[], basis: number[], yaw: number,
): (number | null)[] {
  const c = Math.cos(yaw), sn = Math.sin(yaw);
  const pts = basis.map((i) => {
    const w = samples[i];
    return { i, x: w.x * c + w.z * sn, z: -w.x * sn + w.z * c };
  });
  if (!pts.length) return [null, null, null, null];
  const mx = pts.reduce((a, q) => a + q.x, 0) / pts.length;
  const mz = pts.reduce((a, q) => a + q.z, 0) / pts.length;
  const out: (number | null)[] = [null, null, null, null];
  for (const q of pts) {
    const slot = (q.z > mz ? 0 : 2) + (q.x > mx ? 0 : 1); /* fl fr rl rr */
    if (out[slot] === null) out[slot] = q.i;
  }
  return out;
}

function rigMetrics(samples: WheelSample[], slots: (number | null)[], yaw: number) {
  const c = Math.cos(yaw), sn = Math.sin(yaw);
  const at = (i: number | null) => {
    if (i === null || !samples[i]) return null;
    const w = samples[i];
    return { x: w.x * c + w.z * sn, z: -w.x * sn + w.z * c, r: w.radius };
  };
  const fl = at(slots[0]), fr = at(slots[1]), rl = at(slots[2]), rr = at(slots[3]);
  if (!fl || !fr || !rl || !rr) return null;
  return {
    wheelbase: Math.abs((fl.z + fr.z) / 2 - (rl.z + rr.z) / 2),
    track: Math.abs((fl.x + rl.x) / 2 - (fr.x + rr.x) / 2),
    wheelR: (fl.r + fr.r + rl.r + rr.r) / 4,
  };
}

/**
 * The whole orientation decision, in one pure call: the plan's own yaw guess
 * plus the owner's correction, and the four wheel roles that follow from it.
 */
export function decideRig(
  samples: WheelSample[], plan: RigPlan | null, opts: RigOptions = {},
): RigDecision {
  const turn = ((opts.turn ?? 0) * Math.PI) / 180;
  const yaw = (plan ? plan.yaw : 0) + turn;
  const named = plan ? plan.slot.filter((i): i is number => i !== null) : [];
  const trustNames = !!plan && !turn && named.length === 4;
  const slots = trustNames
    ? (plan as RigPlan).slot.slice()
    : slotsFromQuadrants(samples, named.length === 4 ? named : samples.map((w) => w.id), yaw);
  return { yaw, slots, metrics: rigMetrics(samples, slots, yaw), relabelled: !trustNames };
}

/**
 * The box of every node's own subtree, accumulated bottom-up so this stays
 * linear even on a 3 000-mesh model. The outermost boxes are what the shape
 * detector needs: a wheel group contains its tyre, its rim and its nuts.
 */
export function subtreeBoxes(root: Object3D): Map<Object3D, Box3> {
  const boxes = new Map<Object3D, Box3>();
  const walk = (o: Object3D): Box3 => {
    const b = new Box3();
    const mesh = o as Mesh;
    const geo = mesh.isMesh ? mesh.geometry : undefined;
    if (geo) {
      if (!geo.boundingBox) geo.computeBoundingBox();
      if (geo.boundingBox) b.union(geo.boundingBox.clone().applyMatrix4(o.matrixWorld));
    }
    for (const c of o.children) b.union(walk(c));
    boxes.set(o, b);
    return b;
  };
  root.updateMatrixWorld(true);
  walk(root);
  return boxes;
}

export interface Box3Like {
  min: [number, number, number];
  max: [number, number, number];
}

export interface RigPlan {
  /** which sample drives each of the four physics wheel slots */
  slot: (number | null)[];
  /** yaw (radians) applied to the model so its nose points +Z */
  yaw: number;
  wheelbase: number;
  track: number;
  wheelR: number;
  /** true when the nose direction came from node names rather than a guess */
  certain: boolean;
}

const mean = (list: number[]): number => (list.length ? list.reduce((a, b) => a + b, 0) / list.length : 0);
const centreOf = (list: WheelSample[], key: "x" | "y" | "z") => mean(list.map((s) => s[key]));

/** The sample closest to the group's horizontal centre. */
function closestToCentre(list: WheelSample[]): WheelSample | null {
  if (!list.length) return null;
  const cx = centreOf(list, "x");
  const cz = centreOf(list, "z");
  let best = list[0];
  let bd = Infinity;
  for (const s of list) {
    const d = (s.x - cx) ** 2 + (s.z - cz) ** 2;
    if (d < bd) {
      bd = d;
      best = s;
    }
  }
  return best;
}

/** After a yaw of `a` about +Y a point (x,z) lands at: */
const yawX = (x: number, z: number, a: number) => x * Math.cos(a) + z * Math.sin(a);

/**
 * Decides how a downloaded model's wheels attach to the physics: which sample
 * drives each slot, how far the model must be turned so its nose points +Z,
 * and the wheelbase / track / wheel radius it actually has. Returns null when
 * nothing can be inferred (the caller then keeps the model rigid).
 */
export function planRig(samples: WheelSample[], box: Box3Like): RigPlan | null {
  const diag = Math.hypot(box.max[0] - box.min[0], box.max[1] - box.min[1], box.max[2] - box.min[2]);
  if (samples.length < 4 || diag <= 0) return null;

  /* A wheel-named node far smaller than the rest is a brake disc, a nut or an
     interior trim piece, not a road wheel: drop those before measuring, as
     long as four real wheels survive. */
  const biggest = Math.max(...samples.map((s) => s.radius));
  if (samples.length > 4 && biggest > 0) {
    const real = samples.filter((s) => s.radius >= biggest * 0.45);
    if (real.length >= 4) samples = real;
  }

  const labelOf = (s: WheelSample) => parseWheelName(s.name);
  const labelled = samples.filter((s) => {
    const l = labelOf(s);
    return !!l && !!l.side && !!l.axle;
  });

  /* ------------------------------------------------- named wheels: exact */
  if (labelled.length >= 4) {
    const front = labelled.filter((s) => labelOf(s)?.axle === "f");
    const back = labelled.filter((s) => labelOf(s)?.axle === "b");
    const left = labelled.filter((s) => labelOf(s)?.side === "l");
    const right = labelled.filter((s) => labelOf(s)?.side === "r");
    if (front.length && back.length && left.length && right.length) {
      const vx = centreOf(front, "x") - centreOf(back, "x");
      const vz = centreOf(front, "z") - centreOf(back, "z");
      const wx = centreOf(right, "x") - centreOf(left, "x");
      const wz = centreOf(right, "z") - centreOf(left, "z");
      const wheelbase = Math.hypot(vx, vz);
      const track = Math.hypot(wx, wz);
      if (wheelbase > diag * 0.18 && track > diag * 0.04) {
        const yaw = -Math.atan2(vx, vz);
        const slot = SLOTS.map((key) => {
          const cell = labelled.filter((s) => {
            const l = labelOf(s);
            return l?.axle === (key[0] === "f" ? "f" : "b") && l?.side === (key[1] === "l" ? "l" : "r");
          });
          return closestToCentre(cell)?.id ?? null;
        });
        return {
          slot,
          yaw,
          wheelbase,
          track,
          wheelR: mean([...front, ...back].map((s) => s.radius)),
          certain: true,
        };
      }
    }
  }

  /* ----------------------------------------- unnamed wheels: best guess */
  const spread = (key: "x" | "z") =>
    Math.max(...samples.map((s) => s[key])) - Math.min(...samples.map((s) => s[key]));
  const long: "x" | "z" = spread("z") >= spread("x") ? "z" : "x";
  const short: "x" | "z" = long === "z" ? "x" : "z";
  const sorted = [...samples].sort((a, b) => a[long] - b[long]);
  const half = Math.max(2, Math.round(sorted.length / 2));
  const low = sorted.slice(0, half);
  const high = sorted.slice(sorted.length - half);
  const wheelbase = Math.abs(centreOf(high, long) - centreOf(low, long));
  const mid = centreOf(samples, short);
  const track = Math.abs(
    centreOf(samples.filter((s) => s[short] <= mid), short) -
      centreOf(samples.filter((s) => s[short] > mid), short),
  );
  if (wheelbase <= diag * 0.18 || track <= diag * 0.04) return null;

  /* a car's front overhang is shorter than its rear: the axle pair sitting
     closer to its end of the bounding box is the front */
  const lowGap = centreOf(low, long) - box.min[long === "x" ? 0 : 2];
  const highGap = box.max[long === "x" ? 0 : 2] - centreOf(high, long);
  const lowIsFront = lowGap < highGap;
  const front = lowIsFront ? low : high;
  const back = lowIsFront ? high : low;
  const fv = centreOf(front, long) - centreOf(back, long);
  const yaw = -Math.atan2(long === "x" ? fv : 0, long === "z" ? fv : 0);

  /* with the nose on +Z the car's left side is +X (right = forward x up) */
  const slot = SLOTS.map((key) => {
    const group = key[0] === "f" ? front : back;
    const xs = group.map((s) => ({ s, x: yawX(s.x, s.z, yaw) }));
    const sortedX = [...xs].sort((a, b) => b.x - a.x);
    const side =
      key[1] === "l" ? sortedX.slice(0, Math.ceil(sortedX.length / 2)) : sortedX.slice(Math.ceil(sortedX.length / 2));
    return (side.length ? side : sortedX)[0]?.s.id ?? null;
  });
  return { slot, yaw, wheelbase, track, wheelR: mean(samples.map((s) => s.radius)), certain: false };
}

export interface MeasuredCar {
  length: number;
  width: number;
  height: number;
  wheelbase: number;
  track: number;
  wheelR: number;
}

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

/** Keeps a measured model from sending the physics somewhere silly. */
export function sanitiseMeasured(m: MeasuredCar): MeasuredCar {
  return {
    length: clamp(m.length, 2.2, 13),
    width: clamp(m.width, 1.1, 3.4),
    height: clamp(m.height, 0.7, 4.6),
    wheelbase: clamp(m.wheelbase, 1.3, 9),
    track: clamp(m.track, 0.8, 3.2),
    wheelR: clamp(m.wheelR, 0.16, 0.78),
  };
}
