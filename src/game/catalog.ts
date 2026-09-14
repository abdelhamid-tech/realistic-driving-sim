/* ============================================================================
 *  VEHICLE CATALOGUE — real dimensions, mass, torque, drivetrain and grip.
 *  Shared by the physics core, the HUD and the marketing pages. This module
 *  deliberately has no three.js dependency so pages can import it for free.
 * ==========================================================================*/

export type VehicleKind =
  | "gt"
  | "muscle"
  | "sedan"
  | "hatch"
  | "suv"
  | "pickup"
  | "van"
  | "bus";

export type Drivetrain = "rwd" | "fwd" | "awd";

export interface VehicleSpec {
  kind: VehicleKind;
  name: string;
  klass: string;
  length: number;
  width: number;
  height: number;
  wheelbase: number;
  track: number;
  wheelR: number;
  wheelW: number;
  mass: number;
  torqueNm: number;
  powerKw: number;
  drivetrain: Drivetrain;
  /** grip multiplier applied on the tyre friction coefficient */
  grip: number;
  /** aerodynamic drag coefficient (0.38 = sports car, 1.45 = bus) */
  drag: number;
  /** lift/downforce coefficient on the axles */
  downforce: number;
  /** steering angle authority */
  steerFactor: number;
  topSpeedKph: number;
  zeroTo100: number;
}

/** Wheel centre sits `GROUND_LIFT + wheelR` above the tarmac at static ride height. */
export const GROUND_LIFT = 0.2666;

export const VEHICLES: Record<VehicleKind, VehicleSpec> = {
  gt: {
    kind: "gt", name: "APEX GT-S", klass: "Sports coupe",
    length: 4.55, width: 1.92, height: 1.22, wheelbase: 2.68, track: 1.64,
    wheelR: 0.33, wheelW: 0.28, mass: 1350, torqueNm: 570, powerKw: 420,
    drivetrain: "rwd", grip: 1.28, drag: 0.38, downforce: 1.05, steerFactor: 1,
    topSpeedKph: 325, zeroTo100: 3.1,
  },
  muscle: {
    kind: "muscle", name: "VANTAGE V8", klass: "Muscle car",
    length: 4.95, width: 1.95, height: 1.40, wheelbase: 2.95, track: 1.66,
    wheelR: 0.345, wheelW: 0.30, mass: 1720, torqueNm: 700, powerKw: 358,
    drivetrain: "rwd", grip: 1.12, drag: 0.46, downforce: 0.55, steerFactor: 0.86,
    topSpeedKph: 290, zeroTo100: 4.3,
  },
  sedan: {
    kind: "sedan", name: "MERIDIAN 3.0", klass: "Executive sedan",
    length: 4.85, width: 1.84, height: 1.47, wheelbase: 2.85, track: 1.56,
    wheelR: 0.335, wheelW: 0.25, mass: 1610, torqueNm: 450, powerKw: 265,
    drivetrain: "awd", grip: 1.20, drag: 0.31, downforce: 0.30, steerFactor: 0.94,
    topSpeedKph: 250, zeroTo100: 5.1,
  },
  hatch: {
    kind: "hatch", name: "KITE RS", klass: "Hot hatch",
    length: 4.05, width: 1.78, height: 1.44, wheelbase: 2.55, track: 1.52,
    wheelR: 0.31, wheelW: 0.24, mass: 1290, torqueNm: 320, powerKw: 220,
    drivetrain: "fwd", grip: 1.18, drag: 0.34, downforce: 0.35, steerFactor: 1.02,
    topSpeedKph: 248, zeroTo100: 5.6,
  },
  suv: {
    kind: "suv", name: "RIDGELINE 4X4", klass: "SUV",
    length: 4.90, width: 1.98, height: 1.76, wheelbase: 2.90, track: 1.68,
    wheelR: 0.38, wheelW: 0.29, mass: 2280, torqueNm: 550, powerKw: 294,
    drivetrain: "awd", grip: 1.02, drag: 0.62, downforce: 0.20, steerFactor: 0.82,
    topSpeedKph: 220, zeroTo100: 6.4,
  },
  pickup: {
    kind: "pickup", name: "HAULER HD", klass: "Pickup truck",
    length: 5.55, width: 2.00, height: 1.94, wheelbase: 3.45, track: 1.72,
    wheelR: 0.40, wheelW: 0.32, mass: 2560, torqueNm: 600, powerKw: 276,
    drivetrain: "awd", grip: 0.98, drag: 0.68, downforce: 0.18, steerFactor: 0.78,
    topSpeedKph: 195, zeroTo100: 7.2,
  },
  van: {
    kind: "van", name: "CARGO 350", klass: "Delivery van",
    length: 5.40, width: 2.02, height: 2.28, wheelbase: 3.15, track: 1.72,
    wheelR: 0.35, wheelW: 0.26, mass: 2380, torqueNm: 400, powerKw: 180,
    drivetrain: "fwd", grip: 0.92, drag: 0.78, downforce: 0.15, steerFactor: 0.76,
    topSpeedKph: 165, zeroTo100: 9.4,
  },
  bus: {
    kind: "bus", name: "METRO 12", klass: "City bus",
    length: 11.6, width: 2.55, height: 3.25, wheelbase: 5.90, track: 2.06,
    wheelR: 0.52, wheelW: 0.36, mass: 12500, torqueNm: 1200, powerKw: 250,
    drivetrain: "rwd", grip: 0.88, drag: 1.45, downforce: 0.10, steerFactor: 0.62,
    topSpeedKph: 110, zeroTo100: 22,
  },
};

export const VEHICLE_ORDER: VehicleKind[] = [
  "gt", "muscle", "sedan", "hatch", "suv", "pickup", "van", "bus",
];

/** Weights for random city traffic. */
const TRAFFIC_WEIGHTS: [VehicleKind, number][] = [
  ["sedan", 0.28], ["hatch", 0.20], ["suv", 0.22], ["pickup", 0.11],
  ["van", 0.09], ["muscle", 0.06], ["bus", 0.04],
];

export function randomTrafficKind(): VehicleKind {
  let r = Math.random();
  for (const [k, w] of TRAFFIC_WEIGHTS) {
    r -= w;
    if (r <= 0) return k;
  }
  return "sedan";
}

export const PAINT_COLORS = [
  0xdedad2, 0x9aa0a6, 0x2d3238, 0x14161a, 0x8f2f27, 0x2c4a70,
  0x2f5d43, 0xb0862f, 0x6b6f74, 0xd8d5cf, 0x4a3b64, 0xb8b3a8,
];
