/* ============================================================================
 *  THE PROP LAYER — real models for everything that stands on the street.
 *
 *  The world is not made of boxes any more. Every tree, every planting, every
 *  street lamp, every traffic light — and every bench, bin, street sign,
 *  awning, fence, container and chimney — is a real model from the library in
 *  public/models/props/, and each slot can be swapped for the owner's own GLB
 *  from the /assets door — for every player, in every session.
 *
 *  How it works
 *  ------------
 *  1. A world builder records one SPOT per prop it places — where it stands,
 *     which way it faces and how big it is — and keeps its own low-poly
 *     version, so the world is never empty while the models stream in.
 *     · src/game/city.ts fills `cityPropSpots` for the procedural city (it
 *       records through `put()`, so nothing in the placement code had to
 *       change), and
 *     · tools/build-riverbend.mjs writes public/maps/riverbend.props.json for
 *       the shipped map.
 *  2. `buildPropLayer()` loads each slot's model once, scales it to the slot's
 *     real-world height, and draws every spot of that slot as an instance of
 *     it: a handful of draw calls for thousands of props.
 *  3. The engine hides the low-poly version of a slot the layer covers, so the
 *     two never show at once.
 *
 *  Adding a model of your own
 *  --------------------------
 *  Drop a .glb in public/models/props/ and add it to the slot's `variants`
 *  below, or — no rebuild needed — upload it on /assets and it replaces that
 *  slot for everybody.
 * ==========================================================================*/

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/* ------------------------------------------------------------------ slots */

export type PropSlot =
  | "tree" | "plant" | "lamp" | "signal"
  | "bench" | "bin" | "dumpster" | "planter" | "sign" | "awning"
  | "parasol" | "fence" | "container" | "tank" | "chimney" | "antenna" | "cone";

export const PROP_SLOT_IDS: PropSlot[] = [
  "tree", "plant", "lamp", "signal",
  "bench", "bin", "dumpster", "planter", "sign", "awning",
  "parasol", "fence", "container", "tank", "chimney", "antenna", "cone",
];

/** Where one prop stands. `y` is its base, in metres, above the world's zero. */
export interface PropSpot {
  x: number;
  y: number;
  z: number;
  /** radians, clockwise seen from above */
  yaw: number;
  /** 1 is the slot's own size; a world may vary it per spot */
  scale: number;
}

/** Everything a world knows how to dress. A slot with no spots is left alone. */
export type PropSpotMap = Partial<Record<PropSlot, PropSpot[]>>;

/** One model that can be drawn in a slot. */
export interface PropVariant {
  url: string;
  /** degrees added to every spot of this slot — for a model facing elsewhere */
  turn?: number;
}

export interface PropSlotInfo {
  id: PropSlot;
  /** shown on the owner's page */
  label: string;
  hint: string;
  /**
   * How tall the model is drawn, in metres. Every model is measured on its own
   * bounding box and scaled to this, so models from anywhere fit the street.
   */
  height: number;
  /** every model the game ships for this slot, cycled across the spots */
  variants: PropVariant[];
  /** should each spot get a random yaw? (foliage yes, a lamp post no) */
  scatter?: boolean;
  /**
   * Draw both faces. A flat sign, an awning or a fence panel has a front and
   * a back that no measurement can tell apart, so they are drawn solid from
   * both sides and a wrong turn can never leave the street with a blank prop.
   */
  doubleSide?: boolean;
  credit: string;
  license: string;
}

const NATURE = {
  credit: "Kenney · Nature Kit",
  license: "CC0 (public domain)",
};
const ROADS = {
  credit: "Kenney · City Kit Roads",
  license: "CC0 (public domain)",
};
const SUBURBAN = {
  credit: "Kenney · City Kit Suburban",
  license: "CC0 (public domain)",
};
const COMMERCIAL = {
  credit: "Kenney · City Kit Commercial",
  license: "CC0 (public domain)",
};
const INDUSTRIAL = {
  credit: "Kenney · City Kit Industrial",
  license: "CC0 (public domain)",
};
const FURNITURE = {
  credit: "Kenney · Furniture Kit",
  license: "CC0 (public domain)",
};

/** The slots, in the order the owner's page lists them. */
export const PROP_SLOTS: PropSlotInfo[] = [
  {
    id: "tree",
    label: "Trees",
    hint: "street and park trees — drawn 6.5 m tall, one model per spot",
    height: 6.5,
    scatter: true,
    variants: [
      { url: "models/props/tree-oak.glb" },
      { url: "models/props/tree-detailed.glb" },
      { url: "models/props/tree-pine.glb" },
      { url: "models/props/suburban/tree-large.glb" },
      { url: "models/props/suburban/tree-small.glb" },
    ],
    ...NATURE,
  },
  {
    id: "plant",
    label: "Planting",
    hint: "the greenery in the planters along the kerbs and on the plazas",
    height: 1.05,
    scatter: true,
    variants: [
      { url: "models/props/bush-detailed.glb" },
      { url: "models/props/bush-large.glb" },
      { url: "models/props/plant-flat.glb" },
      { url: "models/props/flower-red.glb" },
    ],
    ...NATURE,
  },
  {
    id: "lamp",
    label: "Street lamps",
    hint: "7 m posts on the kerb — the arm is turned to reach over the road",
    height: 7,
    variants: [
      { url: "models/props/street-lamp.glb" },
      { url: "models/props/roads/light-curved.glb" },
      { url: "models/props/roads/light-square.glb" },
    ],
    ...ROADS,
  },
  {
    id: "signal",
    label: "Traffic lights",
    hint: "at every junction — the head is turned to face the traffic it stops",
    height: 5.6,
    /* the shipped head looks down its own -X; the world's junctions expect a
       model looking down +Z at yaw 0, so it is turned a quarter turn once,
       here, and every spot is then a plain facing */
    variants: [{ url: "models/props/traffic-light.glb", turn: 90 }],
    ...ROADS,
  },

  /* ------------------------------------------------------ street furniture
   *  Everything from here down is the furniture of the pavement: the bench
   *  you sit on, the bin, the street name on its plate, the awning over the
   *  shop, the fence around the garden, the container in the yard. Heights
   *  are the real sizes the world records, not the models' own units: each
   *  model is measured and scaled to fit the street.
   * --------------------------------------------------------------------- */
  {
    id: "bench",
    label: "Benches",
    hint: "parks, the river walk and the mall — 0.92 m seat",
    height: 0.92,
    doubleSide: true,
    variants: [{ url: "models/props/furniture/bench.glb" }],
    ...FURNITURE,
  },
  {
    id: "bin",
    label: "Litter bins",
    hint: "one on the kerb every few doors — 1.05 m",
    height: 1.05,
    variants: [{ url: "models/props/furniture/trashcan.glb" }],
    ...FURNITURE,
  },
  {
    id: "dumpster",
    label: "Dumpsters",
    hint: "in the service yards and behind the workshops — 1.4 m",
    height: 1.4,
    variants: [{ url: "models/props/roads/dumpster.glb" }],
    ...ROADS,
  },
  {
    id: "planter",
    label: "Planters",
    hint: "the beds along the kerb and on the plazas — 1.8 m wide",
    height: 0.85,
    variants: [
      { url: "models/props/suburban/planter.glb" },
      { url: "models/props/suburban/planter.glb", turn: 90 },
    ],
    ...SUBURBAN,
  },
  {
    id: "sign",
    label: "Road signs",
    hint: "street names at the junctions, warnings and stops — 2.6 m",
    height: 2.6,
    doubleSide: true,
    variants: [
      { url: "models/props/sign-street.glb" },
      { url: "models/props/sign-warning.glb" },
      { url: "models/props/sign-stop.glb" },
    ],
    ...ROADS,
  },
  {
    id: "awning",
    label: "Shop awnings",
    hint: "hung on the shopfronts of the main streets",
    height: 1,
    doubleSide: true,
    variants: [
      { url: "models/props/commercial/detail-awning-wide.glb" },
      { url: "models/props/commercial/detail-awning.glb" },
    ],
    ...COMMERCIAL,
  },
  {
    id: "parasol",
    label: "Parasols",
    hint: "the terraces by the park and the mall entrance — 2.6 m",
    height: 2.6,
    doubleSide: true,
    variants: [
      { url: "models/props/commercial/detail-parasol-a.glb" },
      { url: "models/props/commercial/detail-parasol-b.glb" },
    ],
    ...COMMERCIAL,
  },
  {
    id: "fence",
    label: "Fences",
    hint: "garden fences and the guard rails along the water — 1.3 m",
    height: 1.3,
    doubleSide: true,
    variants: [{ url: "models/props/suburban/fence.glb" }],
    ...SUBURBAN,
  },
  {
    id: "container",
    label: "Containers",
    hint: "stacked in the industrial yards and on the quay — 6.1 m long",
    height: 2.6,
    /* the container lies along its own Z, which is the facing x and z of the
       street: a spot yaw of 0 already puts it across the yard */
    variants: [
      { url: "models/props/industrial/shipping-container-a.glb" },
      { url: "models/props/industrial/shipping-container-b.glb" },
      { url: "models/props/industrial/shipping-container-c.glb" },
    ],
    ...INDUSTRIAL,
  },
  {
    id: "tank",
    label: "Storage tanks",
    hint: "beside the halls and on the quay — industrial steel",
    height: 2,
    variants: [
      { url: "models/props/industrial/detail-tank.glb" },
      { url: "models/props/industrial/detail-tank-large.glb" },
    ],
    ...INDUSTRIAL,
  },
  {
    id: "chimney",
    label: "Chimneys & water towers",
    hint: "12 m of brick and 16 m of water over the works rooftops",
    height: 12,
    variants: [
      { url: "models/props/industrial/chimney-medium.glb" },
      { url: "models/props/industrial/chimney-large.glb" },
      { url: "models/props/industrial/water-tower.glb" },
    ],
    ...INDUSTRIAL,
  },
  {
    id: "antenna",
    label: "Roof antennas",
    hint: "on the tower roofs — 1.2 m wide",
    height: 0.5,
    variants: [{ url: "models/props/furniture/televisionAntenna.glb" }],
    ...FURNITURE,
  },
  {
    id: "cone",
    label: "Roadworks",
    hint: "cones, barriers and fencing where a lane is closed",
    height: 0.9,
    doubleSide: true,
    variants: [
      { url: "models/props/roads/construction-cone.glb" },
      { url: "models/props/roads/construction-barrier.glb" },
      { url: "models/props/roads/construction-fence.glb" },
    ],
    ...ROADS,
  },
];

const SLOT_BY_ID = new Map<PropSlot, PropSlotInfo>(PROP_SLOTS.map((s) => [s.id, s]));

export function propSlotInfo(id: string): PropSlotInfo | null {
  return SLOT_BY_ID.get(id as PropSlot) ?? null;
}

export function isPropSlot(id: string): id is PropSlot {
  return SLOT_BY_ID.has(id as PropSlot);
}

/* ------------------------------------------------------------- who stands where
 *  A world does not have to know which slot a mast belongs to: it records the
 *  mast and lets the street grid decide. Lamps stand 8.2 m off one street
 *  centre (the kerb) and face the road; signals stand 10.6 m off two of them
 *  (a junction corner) and face the approach they stop.
 * ----------------------------------------------------------------------------*/

const KERB_OFF = 8.2;
const CORNER_OFF = 10.6;

export function poleSpot(
  x: number,
  z: number,
  streets: number[],
): { slot: PropSlot; yaw: number } | null {
  const offBy = (v: number, d: number) => streets.some((s) => Math.abs(Math.abs(v - s) - d) < 0.05);
  if (offBy(x, CORNER_OFF) && offBy(z, CORNER_OFF)) {
    const cx = streets.reduce((best, s) => (Math.abs(x - s) < Math.abs(x - best) ? s : best), streets[0] ?? 0);
    const cz = streets.reduce((best, s) => (Math.abs(z - s) < Math.abs(z - best) ? s : best), streets[0] ?? 0);
    const east = x > cx;
    const south = z > cz;
    /* the four corners face the approach they stop, not the junction */
    const yaw = !east && !south ? Math.PI : east && south ? 0 : !east ? Math.PI / 2 : -Math.PI / 2;
    return { slot: "signal", yaw };
  }
  if (offBy(x, KERB_OFF)) {
    const cx = streets.reduce((best, s) => (Math.abs(x - s) < Math.abs(x - best) ? s : best), streets[0] ?? 0);
    return { slot: "lamp", yaw: x > cx ? Math.PI / 2 : -Math.PI / 2 };
  }
  if (offBy(z, KERB_OFF)) {
    const cz = streets.reduce((best, s) => (Math.abs(z - s) < Math.abs(z - best) ? s : best), streets[0] ?? 0);
    return { slot: "lamp", yaw: z > cz ? 0 : Math.PI };
  }
  return null;
}

/* ---------------------------------------------------------------- recording
 *  What a world builder tags a batch with. `slot: "pole"` means "a mast that
 *  could be a lamp or a signal — ask the street grid".
 * -------------------------------------------------------------------------*/

export interface PropAnchor {
  slot: PropSlot | "pole";
  /** fixed size for every instance of this batch; 1 keeps the model's size */
  scale?: number;
}

/** Two spots closer than this are the same prop: a piece has many parts. */
const SAME_PROP = 2;

/**
 * File one placed prop. Called by the world builder for every instance of a
 * tagged batch, so a bench made of nine parts still records one spot.
 */
export function recordPropSpot(
  map: PropSpotMap,
  anchor: PropAnchor,
  x: number,
  y: number,
  z: number,
  yaw: number,
  streets: number[],
) {
  let slot: PropSlot;
  let outYaw = yaw;
  if (anchor.slot === "pole") {
    const c = poleSpot(x, z, streets);
    if (!c) return;
    slot = c.slot;
    outYaw = c.yaw;
  } else {
    slot = anchor.slot;
  }
  const list = map[slot] ?? (map[slot] = []);
  for (const s of list) {
    const dx = s.x - x;
    const dz = s.z - z;
    if (dx * dx + dz * dz < SAME_PROP * SAME_PROP) return;
  }
  list.push({ x, y, z, yaw: outYaw, scale: anchor.scale && anchor.scale > 0 ? anchor.scale : 1 });
}

/** One row of the owner's imports, as the app hands it to the engine. */
export interface PropModel {
  slot: string;
  url: string;
  /** degrees added to every spot — for a model facing the wrong way */
  turn?: number;
  /** multiplies the slot's height, 1 is as shipped */
  scale?: number;
}

/* ---------------------------------------------------------------- the layer */

let loader: GLTFLoader | null = null;
function gltf() {
  if (!loader) loader = new GLTFLoader();
  return loader;
}

interface Template {
  root: THREE.Group;
  meshes: THREE.Mesh[];
}

/**
 * Where a model actually stands: the centre of its lowest slice, not of its
 * bounding box. A street lamp's arm and a signal's head hang out over the
 * road, and centring on the box would push their post off the kerb — the post
 * is what the world recorded a spot for.
 */
function baseCentre(obj: THREE.Object3D, box: THREE.Box3): THREE.Vector3 {
  const fallback = box.getCenter(new THREE.Vector3());
  const slice = Math.max((box.max.y - box.min.y) * 0.06, 0.01);
  let n = 0;
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  const v = new THREE.Vector3();
  obj.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    const p = m.geometry?.attributes?.position;
    if (!p) return;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p as THREE.BufferAttribute, i).applyMatrix4(m.matrixWorld);
      if (v.y > box.min.y + slice) continue;
      n++;
      if (v.x < minX) minX = v.x;
      if (v.x > maxX) maxX = v.x;
      if (v.z < minZ) minZ = v.z;
      if (v.z > maxZ) maxZ = v.z;
    }
  });
  if (n < 3 || !isFinite(minX) || !isFinite(minZ)) return fallback;
  return new THREE.Vector3((minX + maxX) / 2, box.min.y, (minZ + maxZ) / 2);
}

/**
 * Load one model and turn it into something that can be stamped down: standing
 * on its own base, sitting on y = 0 and scaled so it is `height` tall.
 */
async function prepare(
  url: string,
  height: number,
  turn: number,
  doubleSide = false,
  edited?: Set<THREE.Material>,
): Promise<Template | null> {
  try {
    const file = await gltf().loadAsync(url);
    const obj = file.scene as THREE.Object3D;
    obj.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const tall = size.y > 0.0001 ? size.y : Math.max(size.x, size.z, 0.0001);
    const s = height / tall;
    const base = baseCentre(obj, box);

    const root = new THREE.Group();
    root.rotation.y = THREE.MathUtils.degToRad(turn);
    const holder = new THREE.Group();
    holder.scale.setScalar(s);
    /* the model's own origin is wherever its author put it: move its base onto
       ours and drop its lowest point onto the ground */
    holder.position.set(-base.x * s, -box.min.y * s, -base.z * s);
    holder.add(obj);
    root.add(holder);
    root.updateMatrixWorld(true);

    const meshes: THREE.Mesh[] = [];
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      m.receiveShadow = true;
      const list = Array.isArray(m.material) ? m.material : [m.material];
      for (const mat of list) {
        const std = mat as THREE.MeshStandardMaterial;
        if (std && "isMeshStandardMaterial" in std) {
          /* the shipped models are authored for a flat game look: keep them
             matte enough to sit inside the world's lighting */
          std.envMapIntensity = 0.45;
          if (doubleSide) std.side = THREE.DoubleSide;
          std.needsUpdate = true;
          edited?.add(std);
        }
      }
      meshes.push(m);
    });
    return { root, meshes };
  } catch {
    /* a missing or broken file just means that slot keeps its low-poly version */
    return null;
  }
}

export interface PropLayer {
  group: THREE.Group;
  /** the slots this layer actually drew — only these may hide their low-poly twin */
  slots: PropSlot[];
  /** how many props went down */
  count: number;
  dispose(): void;
}

export interface PropLayerOptions {
  spots: PropSpotMap;
  /** owner overrides, one row per slot; absent slots use the shipped models */
  models?: PropModel[];
  /** default true: props throw shadows while the quality tier allows it */
  shadows?: boolean;
  /** called with 0..1 while the models download */
  onProgress?: (progress: number, note: string) => void;
}

/**
 * Build a whole layer: one instanced draw call per mesh per model, for every
 * spot the world recorded. The group is returned ready to add to whatever
 * holds the world — nothing is parented here, the caller decides.
 */
export async function buildPropLayer(opts: PropLayerOptions): Promise<PropLayer> {
  const group = new THREE.Group();
  group.name = "props";
  const shadows = opts.shadows ?? true;
  const overrides = new Map<PropSlot, PropModel>();
  for (const m of opts.models ?? []) if (isPropSlot(m.slot) && m.url) overrides.set(m.slot, m);

  const edited = new Set<THREE.Material>();
  const jobs: { info: PropSlotInfo; spots: PropSpot[]; variants: PropVariant[]; height: number }[] = [];
  for (const info of PROP_SLOTS) {
    const spots = opts.spots[info.id];
    if (!spots || !spots.length) continue;
    const own = overrides.get(info.id);
    const variants = own ? [{ url: own.url, turn: own.turn }] : info.variants;
    const height = info.height * (own?.scale && own.scale > 0 ? own.scale : 1);
    jobs.push({ info, spots, variants, height });
  }

  const total = jobs.reduce((n, j) => n + j.variants.length, 0) || 1;
  let done = 0;
  const ready: { info: PropSlotInfo; spots: PropSpot[]; list: Template[] }[] = [];
  for (const job of jobs) {
    const list: Template[] = [];
    for (const variant of job.variants) {
      const t = await prepare(
        variant.url, job.height, variant.turn ?? 0, job.info.doubleSide, edited,
      );
      if (t) list.push(t);
      done++;
      opts.onProgress?.(done / total, job.info.label.toLowerCase());
    }
    if (list.length) ready.push({ info: job.info, spots: job.spots, list });
  }

  const madeGeo: THREE.BufferGeometry[] = [];
  const madeMats: THREE.Material[] = [];
  const seenMat = new Set<THREE.Material>();
  let count = 0;

  /* a stable pseudo-random per spot, so the same world always looks the same */
  const jitter = (i: number) => {
    const v = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    return v - Math.floor(v);
  };

  const pos = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const yawAxis = new THREE.Vector3(0, 1, 0);
  const one = new THREE.Vector3();
  const spotMatrix = new THREE.Matrix4();

  for (const slot of ready) {
    /* one bucket of matrices per mesh, gathered from every spot this variant
       covers: the whole slot still costs a handful of draw calls */
    const buckets = new Map<THREE.Mesh, THREE.Matrix4[]>();
    for (let i = 0; i < slot.spots.length; i++) {
      const variant = slot.list[i % slot.list.length];
      const spot = slot.spots[i];
      count++;
      const spin = slot.info.scatter ? jitter(i) * Math.PI * 2 : 0;
      pos.set(spot.x, spot.y, spot.z);
      quat.setFromAxisAngle(yawAxis, spot.yaw + spin);
      const sc = spot.scale > 0 ? spot.scale : 1;
      one.set(sc, sc, sc);
      spotMatrix.compose(pos, quat, one);
      for (const mesh of variant.meshes) {
        let bucket = buckets.get(mesh);
        if (!bucket) {
          bucket = [];
          buckets.set(mesh, bucket);
        }
        bucket.push(spotMatrix.clone().multiply(mesh.matrixWorld));
      }
    }
    for (const [mesh, matrices] of buckets) {
      const geo = mesh.geometry.clone();
      const mat = mesh.material as THREE.Material | THREE.Material[];
      const im = new THREE.InstancedMesh(geo, mat, matrices.length);
      matrices.forEach((m, i) => im.setMatrixAt(i, m));
      im.instanceMatrix.needsUpdate = true;
      im.castShadow = shadows;
      im.receiveShadow = true;
      im.frustumCulled = false;
      im.name = `prop-layer:${slot.info.id}`;
      group.add(im);
      madeGeo.push(geo);
      for (const m of Array.isArray(mat) ? mat : [mat]) {
        /* a material the layer re-sided is ours to put back when it goes */
        if (edited.has(m)) {
          (m as THREE.MeshStandardMaterial).side = THREE.FrontSide;
          (m as THREE.MeshStandardMaterial).needsUpdate = true;
        }
        if (seenMat.has(m)) continue;
        seenMat.add(m);
        madeMats.push(m);
      }
    }
  }

  return {
    group,
    slots: ready.map((s) => s.info.id),
    count,
    dispose() {
      for (const g of madeGeo) g.dispose();
      for (const m of madeMats) {
        for (const key of ["map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap"] as const) {
          const tex = (m as unknown as Record<string, THREE.Texture | null>)[key];
          if (tex && tex.isTexture) tex.dispose();
        }
        m.dispose();
      }
      madeGeo.length = 0;
      madeMats.length = 0;
    },
  };
}

/**
 * Hide the low-poly version of every slot a layer now covers. A batch tagged
 * with more than one slot — the masts the lamps and the signals share, say —
 * is hidden only once *every* one of its slots is covered, so a world is never
 * left with a floating arm and no post. A mesh whose material carries a slot
 * (the signal lenses, which are built outside the batch system) is hidden too.
 */
export function hideLowPolyProps(root: THREE.Object3D, covered: PropSlot[]) {
  if (!covered.length) return;
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    const tag = o.name.startsWith("prop:") ? o.name.slice(5) : null;
    if (tag) {
      const slots = tag.split("+") as PropSlot[];
      if (slots.every((s) => covered.includes(s))) o.visible = false;
      return;
    }
    if (!mesh.isMesh) return;
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of list) {
      const slot = mat?.userData?.propSlot as PropSlot | undefined;
      if (slot && covered.includes(slot)) {
        mesh.visible = false;
        return;
      }
    }
  });
}

/**
 * Bring every low-poly prop back — used when a layer is thrown away, so a slot
 * is never left with nothing standing in it.
 */
export function showLowPolyProps(root: THREE.Object3D) {
  root.traverse((o) => {
    if (o.name.startsWith("prop:")) {
      o.visible = true;
      return;
    }
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (list.some((m) => m?.userData?.propSlot)) mesh.visible = true;
  });
}

/* ------------------------------------------------------------- the sink
 *  The engine owns a world; the app owns the Convex data. Instead of threading
 *  methods back through the game handle, a game registers a sink here and the
 *  app pushes to it by canvas — one place, no cycles.
 * -------------------------------------------------------------------------*/

export interface PropSink {
  /** the owner's per-slot models changed */
  setModels(models: PropModel[]): void;
  /** the spots of an imported world (null = the world has none of its own) */
  setWorldSpots(spots: PropSpotMap | null): void;
}

const sinks = new Map<HTMLCanvasElement, PropSink>();

export function registerPropSink(canvas: HTMLCanvasElement, sink: PropSink) {
  sinks.set(canvas, sink);
}

export function unregisterPropSink(canvas: HTMLCanvasElement) {
  sinks.delete(canvas);
}

export function pushPropModels(canvas: HTMLCanvasElement | null, models: PropModel[]) {
  if (canvas) sinks.get(canvas)?.setModels(models);
}

export function pushWorldSpots(canvas: HTMLCanvasElement | null, spots: PropSpotMap | null) {
  if (canvas) sinks.get(canvas)?.setWorldSpots(spots);
}
