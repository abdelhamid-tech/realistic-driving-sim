import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

import { GROUND_LIFT, VEHICLES, type VehicleKind, type VehicleSpec } from "./catalog";

export { GROUND_LIFT, PAINT_COLORS, randomTrafficKind, VEHICLES, VEHICLE_ORDER } from "./catalog";
export type { Drivetrain, VehicleKind, VehicleSpec } from "./catalog";

/* ============================================================================
 *  Materials — every one is tagged so the low-detail baker knows what to do
 *  with it (paint gets tinted per instance, hard parts bake their colour).
 * ==========================================================================*/

type Role = "paint" | "plastic" | "metal" | "head" | "tail" | "reverse";

function tag<M extends THREE.Material>(m: M, role: Role): M {
  m.userData.role = role;
  return m;
}

function plasticMat(color: number, roughness = 0.72, metalness = 0.04) {
  return tag(
    new THREE.MeshStandardMaterial({ color, roughness, metalness, envMapIntensity: 0.45 }),
    "plastic",
  );
}

function metalMat(color: number, roughness = 0.22, metalness = 0.9) {
  return tag(
    new THREE.MeshStandardMaterial({ color, roughness, metalness, envMapIntensity: 1.1 }),
    "metal",
  );
}

export interface VehicleMaterials {
  paint: THREE.MeshStandardMaterial;
  glass: THREE.MeshStandardMaterial;
  trim: THREE.MeshStandardMaterial;
  chrome: THREE.MeshStandardMaterial;
  tyre: THREE.MeshStandardMaterial;
  rim: THREE.MeshStandardMaterial;
  caliper: THREE.MeshStandardMaterial;
  head: THREE.MeshStandardMaterial;
  tail: THREE.MeshStandardMaterial;
  brake: THREE.MeshStandardMaterial;
  reverse: THREE.MeshStandardMaterial;
  plate: THREE.MeshStandardMaterial;
  cabin: THREE.MeshStandardMaterial;
}

function makeMaterials(paint: number, highDetail: boolean): VehicleMaterials {
  const paintMat = highDetail
    ? new THREE.MeshPhysicalMaterial({
        color: paint, metalness: 0.62, roughness: 0.29, clearcoat: 1, clearcoatRoughness: 0.08,
        envMapIntensity: 1.15,
      })
    : new THREE.MeshStandardMaterial({
        color: paint, metalness: 0.55, roughness: 0.34, envMapIntensity: 1.0,
      });
  return {
    paint: tag(paintMat as THREE.MeshStandardMaterial, "paint"),
    glass: tag(
      new THREE.MeshPhysicalMaterial({
        color: 0x0a0f14, metalness: 0.55, roughness: 0.07, envMapIntensity: 1.35,
        clearcoat: 1, clearcoatRoughness: 0.05,
      }) as THREE.MeshStandardMaterial,
      "metal",
    ),
    trim: plasticMat(0x191b1e, 0.78),
    chrome: metalMat(0xd6d9dd, 0.16, 0.96),
    tyre: tag(
      new THREE.MeshStandardMaterial({ color: 0x121316, roughness: 0.95, envMapIntensity: 0.12 }),
      "plastic",
    ),
    rim: metalMat(0xb9bec4, 0.24, 0.92),
    caliper: tag(
      new THREE.MeshStandardMaterial({ color: 0xc2410f, roughness: 0.45, metalness: 0.3, envMapIntensity: 0.6 }),
      "plastic",
    ),
    head: tag(
      new THREE.MeshStandardMaterial({
        color: 0xdde4ea, emissive: 0xfff2d4, emissiveIntensity: 0.12, roughness: 0.15, metalness: 0.4,
      }),
      "head",
    ),
    tail: tag(
      new THREE.MeshStandardMaterial({
        color: 0x340a0a, emissive: 0xff2208, emissiveIntensity: 0.5, roughness: 0.22, metalness: 0.3,
      }),
      "tail",
    ),
    brake: tag(
      new THREE.MeshStandardMaterial({
        color: 0x3d0808, emissive: 0xff1a06, emissiveIntensity: 0.55, roughness: 0.25, metalness: 0.3,
      }),
      "tail",
    ),
    reverse: tag(
      new THREE.MeshStandardMaterial({
        color: 0x3a3d40, emissive: 0xe8ecef, emissiveIntensity: 0, roughness: 0.3,
      }),
      "reverse",
    ),
    plate: tag(new THREE.MeshStandardMaterial({ color: 0xe9e7df, roughness: 0.6 }), "plastic"),
    cabin: tag(
      new THREE.MeshStandardMaterial({ color: 0x14161a, roughness: 0.85, envMapIntensity: 0.25 }),
      "plastic",
    ),
  };
}

/* ============================================================================
 *  Body definitions. All coordinates are metres with y = 0 on the tarmac,
 *  +z pointing forward, +x pointing to the left of the car.
 * ==========================================================================*/

interface KindDef {
  body: [number, number][];
  cabin?: [number, number][];
  cabinWidth?: number;
  roof?: { z: [number, number]; y: number };
  windows?: { z: [number, number]; y: [number, number] };
  windshield?: { z: number; y: number; h: number; lean: number };
  bed?: { z: [number, number]; y: number; h: number };
  exhaust?: { z: number; y: number; n: number };
  spoiler?: { z: number; y: number; w: number; wing: boolean };
  scoop?: { z: number; y: number };
  rails?: { z: [number, number]; y: number };
  sign?: { z: number; y: number; w: number; h: number };
  door?: { z: number; y: number };
  head: { z: number; y: number; half: number };
  tail: { z: number; y: number; half: number };
  wheelStyle: "sport" | "mesh" | "steel";
  skirt?: number;
}

const DEFS: Record<VehicleKind, KindDef> = {
  gt: {
    body: [[-2.27, 0.14], [-2.38, 0.42], [-2.30, 0.74], [-1.15, 0.80], [1.10, 0.82],
      [2.05, 0.70], [2.30, 0.42], [2.24, 0.14]],
    cabin: [[-1.72, 0.78], [-1.02, 1.16], [-0.05, 1.20], [0.62, 0.92], [0.98, 0.80]],
    cabinWidth: 1.52,
    roof: { z: [-1.35, 0.05], y: 1.19 },
    exhaust: { z: -2.34, y: 0.32, n: 2 },
    spoiler: { z: -2.14, y: 0.9, w: 1.5, wing: true },
    head: { z: 2.26, y: 0.62, half: 0.6 },
    tail: { z: -2.34, y: 0.64, half: 0.58 },
    wheelStyle: "sport",
    skirt: 0.2,
  },
  muscle: {
    body: [[-2.42, 0.16], [-2.54, 0.46], [-2.46, 0.86], [-1.60, 0.92], [1.25, 0.94],
      [2.22, 0.84], [2.50, 0.48], [2.40, 0.16]],
    cabin: [[-1.86, 0.90], [-1.28, 1.36], [0.05, 1.39], [0.62, 0.96], [0.85, 0.90]],
    cabinWidth: 1.54,
    roof: { z: [-1.2, -0.2], y: 1.375 },
    exhaust: { z: -2.5, y: 0.34, n: 2 },
    spoiler: { z: -2.32, y: 0.96, w: 1.55, wing: true },
    scoop: { z: 1.35, y: 0.98 },
    head: { z: 2.44, y: 0.66, half: 0.62 },
    tail: { z: -2.5, y: 0.72, half: 0.6 },
    wheelStyle: "mesh",
    skirt: 0.22,
  },
  sedan: {
    body: [[-2.34, 0.14], [-2.46, 0.44], [-2.38, 0.88], [-1.50, 0.94], [1.00, 0.94],
      [2.12, 0.86], [2.38, 0.46], [2.30, 0.14]],
    cabin: [[-1.62, 0.92], [-1.30, 1.44], [-0.42, 1.47], [0.55, 1.02], [1.05, 0.92]],
    cabinWidth: 1.46,
    roof: { z: [-1.25, -0.35], y: 1.455 },
    exhaust: { z: -2.44, y: 0.3, n: 1 },
    head: { z: 2.36, y: 0.68, half: 0.58 },
    tail: { z: -2.42, y: 0.72, half: 0.56 },
    wheelStyle: "mesh",
    skirt: 0.2,
  },
  hatch: {
    body: [[-1.92, 0.14], [-2.02, 0.44], [-1.95, 0.82], [-1.10, 0.88], [0.90, 0.88],
      [1.72, 0.80], [1.92, 0.46], [1.86, 0.14]],
    cabin: [[-1.80, 0.86], [-1.72, 1.40], [-0.35, 1.44], [0.55, 0.98], [0.95, 0.88]],
    cabinWidth: 1.40,
    roof: { z: [-1.6, -0.1], y: 1.425 },
    exhaust: { z: -1.98, y: 0.28, n: 1 },
    spoiler: { z: -1.9, y: 1.14, w: 1.3, wing: true },
    head: { z: 1.92, y: 0.62, half: 0.54 },
    tail: { z: -2.0, y: 0.76, half: 0.5 },
    wheelStyle: "sport",
    skirt: 0.2,
  },
  suv: {
    body: [[-2.36, 0.24], [-2.48, 0.60], [-2.40, 1.10], [-1.40, 1.16], [1.45, 1.16],
      [2.28, 1.06], [2.48, 0.62], [2.38, 0.24]],
    cabin: [[-1.72, 1.14], [-1.50, 1.72], [-0.30, 1.75], [0.72, 1.22], [1.10, 1.14]],
    cabinWidth: 1.62,
    roof: { z: [-1.45, -0.42], y: 1.735 },
    rails: { z: [-1.35, -0.35], y: 1.79 },
    exhaust: { z: -2.44, y: 0.4, n: 1 },
    head: { z: 2.44, y: 0.9, half: 0.6 },
    tail: { z: -2.44, y: 0.96, half: 0.6 },
    wheelStyle: "mesh",
    skirt: 0.3,
  },
  pickup: {
    body: [[-2.55, 0.32], [-2.62, 0.58], [-2.56, 1.14], [-1.42, 1.50], [0.75, 1.50],
      [2.28, 1.24], [2.62, 0.62], [2.52, 0.32]],
    cabin: [[-1.40, 1.48], [-1.28, 1.92], [0.30, 1.94], [0.62, 1.55], [0.75, 1.48]],
    cabinWidth: 1.72,
    roof: { z: [-1.2, -0.05], y: 1.93 },
    bed: { z: [-2.58, -1.45], y: 1.12, h: 0.42 },
    exhaust: { z: -2.6, y: 0.42, n: 1 },
    head: { z: 2.56, y: 1.0, half: 0.62 },
    tail: { z: -2.6, y: 1.0, half: 0.58 },
    wheelStyle: "steel",
    skirt: 0.34,
  },
  van: {
    body: [[-2.66, 0.28], [-2.76, 0.66], [-2.72, 2.18], [-1.60, 2.26], [1.50, 2.16],
      [2.42, 1.86], [2.58, 0.66], [2.48, 0.28]],
    windshield: { z: 2.42, y: 1.5, h: 0.62, lean: 0.5 },
    windows: { z: [1.0, 2.0], y: [1.42, 1.98] },
    exhaust: { z: -2.7, y: 0.38, n: 1 },
    head: { z: 2.5, y: 0.82, half: 0.6 },
    tail: { z: -2.72, y: 1.0, half: 0.55 },
    wheelStyle: "steel",
    skirt: 0.28,
  },
  bus: {
    body: [[-5.70, 0.42], [-5.80, 0.90], [-5.78, 3.10], [-3.0, 3.26], [2.60, 3.26],
      [5.55, 3.06], [5.70, 1.50], [5.62, 0.42]],
    windshield: { z: 5.52, y: 1.6, h: 1.35, lean: 0.22 },
    windows: { z: [-5.4, 4.6], y: [1.72, 2.78] },
    sign: { z: 5.62, y: 3.05, w: 2.0, h: 0.42 },
    door: { z: 4.0, y: 1.5 },
    head: { z: 5.66, y: 0.9, half: 0.9 },
    tail: { z: -5.78, y: 1.15, half: 0.85 },
    wheelStyle: "steel",
    skirt: 0.5,
  },
};

/* ============================================================================
 *  Geometry helpers
 * ==========================================================================*/

function extrudeProfile(
  pts: [number, number][], width: number, bevel: number, mat: THREE.Material,
): THREE.Mesh {
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.autoClose = true;
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: width, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel,
    bevelSegments: 2, steps: 1, curveSegments: 4,
  });
  geo.rotateY(-Math.PI / 2);
  geo.translate(width / 2, 0, 0);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  return mesh;
}

function box(
  w: number, h: number, d: number, x: number, y: number, z: number,
  mat: THREE.Material, parent: THREE.Object3D,
): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  parent.add(m);
  return m;
}

function cylinder(
  rt: number, rb: number, h: number, seg: number, x: number, y: number, z: number,
  mat: THREE.Material, parent: THREE.Object3D, axis: "x" | "y" | "z" = "z",
): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  if (axis === "x") m.rotation.z = Math.PI / 2;
  else if (axis === "z") m.rotation.x = Math.PI / 2;
  m.position.set(x, y, z);
  m.castShadow = true;
  parent.add(m);
  return m;
}

/* ============================================================================
 *  Wheels
 * ==========================================================================*/

export interface WheelRig {
  pivot: THREE.Group;
  spin: THREE.Group;
  front: boolean;
  x: number;
  z: number;
  radius: number;
  width: number;
}

function buildWheel(
  radius: number, width: number, style: "sport" | "mesh" | "steel", mats: VehicleMaterials,
  detail: "high" | "low",
): WheelRig["spin"] {
  const spin = new THREE.Group();
  spin.userData.wheelSpin = true;
  const seg = detail === "high" ? 36 : 18;
  const tube = Math.min(detail === "high" ? 0.095 : 0.085, width * 0.34);

  const carc = new THREE.Mesh(new THREE.TorusGeometry(radius - tube, tube, detail === "high" ? 14 : 8, seg), mats.tyre);
  carc.rotation.y = Math.PI / 2;
  carc.castShadow = true;
  spin.add(carc);

  const tread = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, width - tube * 0.7, seg, 1, true), mats.tyre,
  );
  tread.rotation.z = Math.PI / 2;
  tread.castShadow = true;
  spin.add(tread);

  if (style === "steel") {
    const steel = new THREE.Mesh(
      new THREE.CylinderGeometry(radius - tube - 0.015, radius - tube - 0.015, width * 0.72, seg), mats.rim,
    );
    steel.rotation.z = Math.PI / 2;
    spin.add(steel);
    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, width * 0.8, 12),
      new THREE.MeshStandardMaterial({ color: 0x2b2e32, roughness: 0.5, metalness: 0.6 }),
    );
    cap.rotation.z = Math.PI / 2;
    spin.add(cap);
    return spin;
  }

  const dishR = radius - tube - 0.012;
  const disc = new THREE.Mesh(
    new THREE.CylinderGeometry(dishR - 0.012, dishR - 0.012, 0.028, seg),
    new THREE.MeshStandardMaterial({ color: 0x8f959b, roughness: 0.35, metalness: 0.95, envMapIntensity: 1 }),
  );
  disc.rotation.z = Math.PI / 2;
  spin.add(disc);

  const nSpokes = style === "mesh" ? 10 : 5;
  const spokeGeo = new THREE.BoxGeometry(Math.max(0.035, width * 0.5), dishR * 1.86, style === "mesh" ? 0.022 : 0.032);
  for (let k = 0; k < nSpokes; k++) {
    const holder = new THREE.Group();
    const sp = new THREE.Mesh(spokeGeo, mats.rim);
    sp.position.x = width * 0.24;
    holder.add(sp);
    holder.rotation.x = (k * Math.PI * 2) / nSpokes;
    spin.add(holder);
  }
  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(dishR, dishR, Math.max(0.03, width - 0.1), seg, 1, true), mats.rim,
  );
  barrel.rotation.z = Math.PI / 2;
  spin.add(barrel);

  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.062, Math.max(0.05, width - 0.06), 12), mats.chrome,
  );
  hub.rotation.z = Math.PI / 2;
  spin.add(hub);

  const caliper = new THREE.Mesh(new THREE.BoxGeometry(Math.max(0.045, width * 0.4), 0.16, 0.06), mats.caliper);
  caliper.position.set(0, radius * 0.34, -0.05);
  spin.add(caliper);

  return spin;
}

/* ============================================================================
 *  Assembly
 * ==========================================================================*/

interface Assembled {
  root: THREE.Group;
  rigs: WheelRig[];
  steering: THREE.Object3D | null;
  materials: VehicleMaterials;
}

interface AssembleOpts {
  detail: "high" | "low";
  interior: boolean;
  materials: VehicleMaterials;
}

function assemble(kind: VehicleKind, opts: AssembleOpts): Assembled {
  const spec = VEHICLES[kind];
  const def = DEFS[kind];
  const M = opts.materials;
  const root = new THREE.Group();
  root.name = "vehicle:" + kind;

  const halfW = spec.width / 2;
  const bodyW = spec.width * 0.96;

  /* ---- main body shell (extruded side profile) ---- */
  root.add(extrudeProfile(def.body, bodyW, 0.055, M.paint));

  /* ---- greenhouse ---- */
  if (def.cabin) {
    const cw = def.cabinWidth ?? spec.width * 0.8;
    const cabin = extrudeProfile(def.cabin, cw, 0.035, M.glass);
    root.add(cabin);
    if (def.roof) {
      const [z0, z1] = def.roof.z;
      box(cw * 0.94, 0.06, Math.abs(z1 - z0), 0, def.roof.y, (z0 + z1) / 2, M.paint, root);
    }
  }

  /* ---- boxy glazing (vans / buses / pickups) ---- */
  if (def.windows) {
    const [z0, z1] = def.windows.z;
    const [y0, y1] = def.windows.y;
    const len = Math.abs(z1 - z0);
    const cz = (z0 + z1) / 2;
    const cy = (y0 + y1) / 2;
    for (const s of [1, -1]) {
      box(0.04, y1 - y0, len, s * (bodyW / 2 - 0.02), cy, cz, M.glass, root);
    }
    box(bodyW * 0.94, y1 - y0, 0.04, 0, cy, z1, M.glass, root);
  }
  if (def.windshield) {
    const ws = def.windshield;
    const glass = box(bodyW * 0.9, ws.h, 0.05, 0, ws.y, ws.z, M.glass, root);
    glass.rotation.x = -ws.lean;
  }

  /* ---- pickup bed ---- */
  if (def.bed) {
    const [z0, z1] = def.bed.z;
    const len = Math.abs(z1 - z0);
    const cz = (z0 + z1) / 2;
    box(bodyW * 0.96, 0.08, len, 0, def.bed.y, cz, M.trim, root);
    for (const s of [1, -1]) {
      box(0.08, def.bed.h, len, s * (bodyW / 2 - 0.04), def.bed.y + def.bed.h / 2, cz, M.paint, root);
    }
    box(bodyW * 0.96, def.bed.h, 0.08, 0, def.bed.y + def.bed.h / 2, z0, M.paint, root);
  }

  /* ---- bumpers, skirts, arches ---- */
  const frontZ = def.body.reduce((a, p) => Math.max(a, p[0]), -99);
  const rearZ = def.body.reduce((a, p) => Math.min(a, p[0]), 99);
  const skirtY = def.skirt ?? 0.2;
  box(bodyW * 0.9, 0.14, 0.24, 0, skirtY, frontZ - 0.06, M.trim, root);
  box(bodyW * 0.9, 0.14, 0.22, 0, skirtY, rearZ + 0.06, M.trim, root);
  if (def.skirt !== undefined) {
    for (const s of [1, -1]) {
      box(0.07, 0.1, spec.length * 0.42, s * (bodyW / 2 - 0.02), skirtY + 0.02, 0, M.trim, root);
    }
  }
  box(bodyW * 0.62, 0.16, 0.06, 0, def.head.y - 0.1, frontZ - 0.02, M.trim, root);
  box(bodyW * 0.7, 0.2, 0.05, 0, def.tail.y - 0.06, rearZ + 0.02, M.trim, root);

  /* ---- lights ---- */
  const hl = def.head.half;
  for (const s of [1, -1]) {
    const head = box(0.34, 0.09, 0.1, s * hl, def.head.y, def.head.z, M.head, root);
    head.rotation.x = 0.08;
    box(0.3, 0.14, 0.09, s * (def.tail.half + 0.06), def.tail.y, def.tail.z, M.tail, root);
  }
  box(hl * 0.9, 0.035, 0.06, 0, def.tail.y, def.tail.z, M.brake, root);
  for (const s of [1, -1]) {
    box(0.14, 0.05, 0.05, s * hl * 0.45, def.tail.y - 0.16, def.tail.z, M.reverse, root);
  }
  /* number plates */
  box(0.42, 0.12, 0.03, 0, skirtY - 0.04, frontZ - 0.02, M.plate, root);
  box(0.42, 0.12, 0.03, 0, skirtY + 0.02, rearZ + 0.02, M.plate, root);

  /* ---- mirrors ---- */
  const mirrorZ = def.cabin ? def.cabin[3][0] + 0.1 : spec.length * 0.12;
  const mirrorY = def.cabin ? def.cabin[3][1] + 0.02 : def.windows ? def.windows.y[1] - 0.06 : 1.2;
  for (const s of [1, -1]) {
    box(0.05, 0.045, 0.16, s * (bodyW / 2 + 0.11), mirrorY, mirrorZ, M.trim, root);
    box(0.09, 0.055, 0.06, s * (bodyW / 2 + 0.02), mirrorY - 0.01, mirrorZ, M.trim, root);
  }

  /* ---- exhausts ---- */
  if (def.exhaust) {
    const n = def.exhaust.n;
    for (let i = 0; i < n; i++) {
      const off = n === 1 ? 0.55 : (i === 0 ? 0.42 : -0.42);
      cylinder(0.055, 0.055, 0.22, 10, off, def.exhaust.y, def.exhaust.z, M.chrome, root, "z");
    }
  }

  /* ---- spoilers / scoops / rails / signs ---- */
  if (def.spoiler) {
    const sp = def.spoiler;
    if (sp.wing) {
      box(sp.w, 0.05, 0.3, 0, sp.y, sp.z, M.paint, root);
      for (const s of [1, -1]) {
        box(0.05, 0.24, 0.16, s * sp.w * 0.4, sp.y - 0.12, sp.z + 0.02, M.trim, root);
      }
    } else {
      box(sp.w, 0.06, 0.16, 0, sp.y, sp.z, M.paint, root);
    }
  }
  if (def.scoop) box(bodyW * 0.4, 0.08, 0.5, 0, def.scoop.y, def.scoop.z, M.trim, root);
  if (def.rails) {
    for (const s of [1, -1]) {
      box(0.05, 0.05, Math.abs(def.rails.z[1] - def.rails.z[0]), s * (bodyW / 2 - 0.16), def.rails.y,
        (def.rails.z[0] + def.rails.z[1]) / 2, M.chrome, root);
    }
  }
  if (def.sign) {
    box(def.sign.w, def.sign.h, 0.08, 0, def.sign.y, def.sign.z, M.head, root);
  }
  if (def.door) {
    box(0.04, 1.95, 0.5, bodyW / 2 + 0.01, def.door.y, def.door.z, M.trim, root);
  }

  /* ---- interior (player car, cockpit camera) ---- */
  let steering: THREE.Object3D | null = null;
  if (opts.interior) {
    const dashY = def.cabin ? def.cabin[3][1] + 0.02 : 1.05;
    const dashZ = def.cabin ? def.cabin[3][0] + 0.25 : 0.8;
    box(bodyW * 0.92, 0.16, 0.5, 0, dashY, dashZ, M.cabin, root);
    box(bodyW * 0.9, 0.1, 0.28, 0, dashY + 0.12, dashZ - 0.06, M.cabin, root);
    const wheelPivot = new THREE.Group();
    wheelPivot.position.set(0.38, dashY - 0.02, dashZ - 0.24);
    wheelPivot.rotation.x = -0.35;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.022, 8, 20), M.cabin);
    wheelPivot.add(rim);
    for (let k = 0; k < 3; k++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.3, 0.02), M.chrome);
      spoke.rotation.z = k * Math.PI / 3;
      wheelPivot.add(spoke);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 10), M.cabin);
    hub.rotation.x = Math.PI / 2;
    wheelPivot.add(hub);
    root.add(wheelPivot);
    steering = wheelPivot;
    for (const [sx, sz] of [[0.34, -0.35], [-0.34, -0.35], [0.34, 0.55], [-0.34, 0.55]]) {
      box(0.44, 0.55, 0.45, sx, dashY - 0.42, sz, M.cabin, root);
    }
  }

  /* ---- wheels ---- */
  const rigs: WheelRig[] = [];
  const fz = spec.wheelbase / 2;
  const rz = -spec.wheelbase / 2;
  const fx = (spec.track / 2) * 0.985;
  const rx = (spec.track / 2) * 1.01;
  const wheelDefs: [number, number, boolean][] = [
    [fx, fz, true], [-fx, fz, true], [rx, rz, false], [-rx, rz, false],
  ];
  for (const [x, z, front] of wheelDefs) {
    const pivot = new THREE.Group();
    pivot.position.set(x, spec.wheelR, z);
    pivot.userData.wheelRig = true;
    const spin = buildWheel(spec.wheelR, spec.wheelW, def.wheelStyle, M, opts.detail);
    pivot.add(spin);
    root.add(pivot);
    rigs.push({ pivot, spin, front, x, z, radius: spec.wheelR, width: spec.wheelW });
  }

  return { root, rigs, steering, materials: M };
}

/* ============================================================================
 *  Player vehicle — full detail, per-instance materials, animated lights.
 * ==========================================================================*/

export interface VehicleBuild {
  root: THREE.Group;
  rigs: WheelRig[];
  steering: THREE.Object3D | null;
  materials: VehicleMaterials;
  spec: VehicleSpec;
  gy: number;
  headAnchors: THREE.Vector3[];
  tailAnchors: THREE.Vector3[];
}

export function buildVehicle(kind: VehicleKind, paint: number, interior = true): VehicleBuild {
  const spec = VEHICLES[kind];
  const mats = makeMaterials(paint, true);
  const a = assemble(kind, { detail: "high", interior, materials: mats });
  const frontZ = DEFS[kind].head.z;
  const rearZ = DEFS[kind].tail.z;
  return {
    root: a.root,
    rigs: a.rigs,
    steering: a.steering,
    materials: mats,
    spec,
    gy: GROUND_LIFT + spec.wheelR,
    headAnchors: [
      new THREE.Vector3(DEFS[kind].head.half, DEFS[kind].head.y, frontZ),
      new THREE.Vector3(-DEFS[kind].head.half, DEFS[kind].head.y, frontZ),
    ],
    tailAnchors: [
      new THREE.Vector3(DEFS[kind].tail.half + 0.06, DEFS[kind].tail.y, rearZ),
      new THREE.Vector3(-(DEFS[kind].tail.half + 0.06), DEFS[kind].tail.y, rearZ),
    ],
  };
}

/* ============================================================================
 *  Traffic / parked templates — every mesh merged per material role so a car
 *  costs a handful of draw calls. Clone + tint the paint to vary colours.
 * ==========================================================================*/

export interface FleetTemplate {
  root: THREE.Group;
  rigs: WheelRig[];
  spec: VehicleSpec;
  paintMesh: THREE.Mesh | null;
}

const ROLE_ORDER: Role[] = ["paint", "plastic", "metal", "head", "tail", "reverse"];

const ROLE_MATERIALS: Record<Role, THREE.MeshStandardMaterial> = {
  paint: new THREE.MeshStandardMaterial({
    color: 0xffffff, metalness: 0.6, roughness: 0.3, envMapIntensity: 1.05, vertexColors: true,
  }),
  plastic: new THREE.MeshStandardMaterial({
    color: 0xffffff, metalness: 0.1, roughness: 0.72, envMapIntensity: 0.5, vertexColors: true,
  }),
  metal: new THREE.MeshStandardMaterial({
    color: 0xffffff, metalness: 0.85, roughness: 0.16, envMapIntensity: 1.2, vertexColors: true,
  }),
  head: new THREE.MeshStandardMaterial({
    color: 0xdde4ea, emissive: 0xfff2d4, emissiveIntensity: 0.12, roughness: 0.2,
  }),
  tail: new THREE.MeshStandardMaterial({
    color: 0x340a0a, emissive: 0xff2208, emissiveIntensity: 0.5, roughness: 0.25,
  }),
  reverse: new THREE.MeshStandardMaterial({
    color: 0x3a3d40, emissive: 0xe8ecef, emissiveIntensity: 0.05, roughness: 0.3,
  }),
};

const WHEEL_MATERIAL = new THREE.MeshStandardMaterial({
  color: 0xffffff, metalness: 0.5, roughness: 0.45, envMapIntensity: 0.7, vertexColors: true,
});

function roleOf(mat: THREE.Material | THREE.Material[]): Role {
  const m = Array.isArray(mat) ? mat[0] : mat;
  return ((m?.userData?.role as Role) ?? "plastic") as Role;
}

function preparedGeometry(
  mesh: THREE.Mesh, color: THREE.Color, toLocal: THREE.Matrix4,
): THREE.BufferGeometry | null {
  let geo = mesh.geometry.clone();
  if (geo.index) geo = geo.toNonIndexed();
  for (const key of Object.keys(geo.attributes)) {
    if (key !== "position" && key !== "normal" && key !== "uv") geo.deleteAttribute(key);
  }
  if (!geo.attributes.normal) geo.computeVertexNormals();
  if (!geo.attributes.uv) {
    geo.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
  }
  const count = geo.attributes.position.count;
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.applyMatrix4(toLocal.clone().multiply(mesh.matrixWorld));
  return geo;
}

function mergeMeshes(
  meshes: THREE.Mesh[], colorFor: (m: THREE.Mesh) => THREE.Color, target: THREE.Object3D,
): THREE.BufferGeometry | null {
  if (!meshes.length) return null;
  target.updateMatrixWorld(true);
  const toLocal = target.matrixWorld.clone().invert();
  const list: THREE.BufferGeometry[] = [];
  for (const mesh of meshes) {
    mesh.updateMatrixWorld(true);
    const g = preparedGeometry(mesh, colorFor(mesh), toLocal);
    if (g) list.push(g);
  }
  if (!list.length) return null;
  if (list.length === 1) return list[0];
  const merged = mergeGeometries(list, false);
  if (!merged) {
    /* fall back to the largest geometry so at least something renders */
    return list[0];
  }
  return merged;
}

function bakeWheel(spin: THREE.Group) {
  spin.updateMatrixWorld(true);
  const meshes: THREE.Mesh[] = [];
  spin.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) meshes.push(o as THREE.Mesh);
  });
  const geo = mergeMeshes(meshes, (m) => {
    const mat = m.material as THREE.MeshStandardMaterial;
    return new THREE.Color(mat.color);
  }, spin);
  if (!geo) return;
  for (const m of meshes) {
    m.parent?.remove(m);
    m.geometry.dispose();
  }
  const baked = new THREE.Mesh(geo, WHEEL_MATERIAL);
  baked.castShadow = true;
  spin.add(baked);
}

export function buildFleetTemplate(kind: VehicleKind, paint: number): FleetTemplate {
  const spec = VEHICLES[kind];
  const mats = makeMaterials(paint, false);
  const a = assemble(kind, { detail: "low", interior: false, materials: mats });
  const root = new THREE.Group();
  root.name = "fleet:" + kind;
  root.updateMatrixWorld(true);

  const buckets: Record<Role, THREE.Mesh[]> = {
    paint: [], plastic: [], metal: [], head: [], tail: [], reverse: [],
  };
  const wheelRigs: WheelRig[] = [];
  a.root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    let p: THREE.Object3D | null = mesh;
    while (p && p !== a.root && !p.userData.wheelRig) p = p.parent;
    if (p === a.root) buckets[roleOf(mesh.material)].push(mesh);
  });
  for (const rig of a.rigs) {
    bakeWheel(rig.spin);
    rig.pivot.updateMatrixWorld(true);
    const pivot = new THREE.Group();
    pivot.userData.wheelRig = true;
    pivot.position.copy(rig.pivot.position);
    const child = rig.spin;
    child.parent?.remove(child);
    pivot.add(child);
    root.add(pivot);
    wheelRigs.push({ ...rig, pivot });
  }

  let paintMesh: THREE.Mesh | null = null;
  for (const role of ROLE_ORDER) {
    const geo = mergeMeshes(buckets[role], (m) => {
      const mat = m.material as THREE.MeshStandardMaterial;
      if (role === "paint") return new THREE.Color(0xffffff);
      return new THREE.Color(mat.color);
    }, root);
    if (!geo) continue;
    const mesh = new THREE.Mesh(geo, ROLE_MATERIALS[role]);
    mesh.castShadow = role !== "head" && role !== "tail" && role !== "reverse";
    mesh.receiveShadow = false;
    root.add(mesh);
    if (role === "paint") paintMesh = mesh;
  }

  return { root, rigs: wheelRigs, spec, paintMesh };
}

export function cloneFleetVehicle(tpl: FleetTemplate, paint: number): THREE.Group {
  const g = tpl.root.clone(true);
  if (tpl.paintMesh) {
    const tinted = ROLE_MATERIALS.paint.clone();
    tinted.color.setHex(paint);
    g.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh && mesh.material === ROLE_MATERIALS.paint) mesh.material = tinted;
    });
  }
  return g;
}
