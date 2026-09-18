/* ============================================================================
 *  THE CAR LIBRARY  —  OWNER FILE
 *
 *  This is the ONLY place cars are defined, and it is the only place they can
 *  be defined: players pick from this list and cannot add, replace or import
 *  anything themselves. Whatever is written here ships as the game's cars.
 *
 *  ---------------------------------------------------------------------------
 *  HOW TO PUT YOUR OWN MODELS IN
 *
 *  1. Copy your .glb files into  public/models/  (the folder already exists).
 *     A file at `public/models/supra.glb` is served at `models/supra.glb`.
 *     Local files are the best option: no CDN, no CORS, no waiting on a third
 *     party, and they work offline on the built game.
 *
 *  2. Add one entry below with the url, a name and a `physics` block.
 *
 *  3. That is it. The car appears in the garage for everybody.
 *
 *  The wheels are found by name and re-parented onto the real suspension by
 *  the rigger (see src/game/rigging.ts), so name your wheel nodes the normal
 *  way — `wheel_FL`, `WheelFront_R`, `roue_av_g`, `Fahrzeug_Rad_vorne_links`
 *  all work. The model is measured, scaled to the wheelbase of its physics
 *  block and its body is auto-painted with the player's chosen paint colour.
 *  If a model has no wheel nodes it still loads, rigid.
 *
 *  Physics: copy a preset out of src/game/catalog.ts (VEHICLES), or write the
 *  numbers yourself. They are the real handling character — mass in kg, torque
 *  in Nm, `grip` multiplies the tyre friction, `drag` is the aero coefficient.
 * ==========================================================================*/

import { VEHICLES, type VehicleKind, type VehicleSpec } from "./catalog";

export interface CarEntry {
  /** stable key — used for the saved-run records, keep it unique */
  id: string;
  /** name shown in the garage and on the number plate */
  name: string;
  /** one-line class, e.g. "Mid-engine V8 coupé" */
  klass: string;
  /**
   * "models/your-car.glb" for anything shipped in this bundle — a path
   * relative to the document, never starting with "/", because the game is
   * served from a subfolder on its game host (see the note in worldmaps.ts).
   * The owner's imported cars are the only entries that use a full storage URL.
   */
  url: string;
  /** content length of the file, for the "1.7 MB" hint on the card */
  bytes: number;
  /** credit line shown under the card */
  author: string;
  license: string;
  /** short line for the garage card */
  detail: string;
  /**
   * Only for the rare model the rigger points backwards: 180 turns the body
   * around *and* re-labels the wheels, so the car still steers from its nose.
   * Degrees, 0 or 180.
   */
  turn?: number;
  /** the driving character of this car */
  physics: VehicleSpec;
}

/* ---------------------------------------------------------------------------
 *  PHYSICS PRESETS
 *  Aliases into the tuned catalogue so an entry can be written as
 *  `physics: { ...P.GT, mass: 1290, torqueNm: 640 }`.
 * -------------------------------------------------------------------------*/
const P = {
  GT: VEHICLES.gt,
  MUSCLE: VEHICLES.muscle,
  SEDAN: VEHICLES.sedan,
  HATCH: VEHICLES.hatch,
  SUV: VEHICLES.suv,
  PICKUP: VEHICLES.pickup,
} as const;

/* ---------------------------------------------------------------------------
 *  THE CARS
 * -------------------------------------------------------------------------*/
export const CAR_LIBRARY: CarEntry[] = [
  /* -------------------------------------------------------------------------
   *  YOUR OWN MODELS — uncomment, point at the file you dropped in
   *  public/models/, and give it the physics you want.
   *
   *  {
   *    id: "my-car",
   *    name: "MY CAR",
   *    klass: "Track special",
   *    detail: "My own model",
   *    url: "models/my-car.glb",
   *    bytes: 4200000,
   *    author: "me",
   *    license: "© me",
   *    physics: { ...P.GT, name: "MY CAR", mass: 1180, torqueNm: 780, grip: 1.42 },
   *  },
   * -----------------------------------------------------------------------*/
];

/* The driving characters an imported car can take, for the /import picker. */
export const CAR_PRESETS: { id: string; label: string }[] = [
  { id: "gt", label: "GT / Sports coupé" },
  { id: "muscle", label: "Muscle car" },
  { id: "sedan", label: "Sedan" },
  { id: "hatch", label: "Hot hatch" },
  { id: "suv", label: "SUV" },
  { id: "pickup", label: "Pickup truck" },
  { id: "van", label: "Van" },
  { id: "bus", label: "Bus" },
];

/** The car the game starts in — the first entry of the library, imported or fallback. */
export const DEFAULT_CAR_ID = "";

/**
 * Cars the owner has imported from /import. They are appended to the built-in
 * library at runtime and appear in every player's garage like any other car.
 */
export interface ImportedCar {
  id: string;
  name: string;
  klass: string;
  url: string;
  bytes: number;
  author: string;
  license: string;
  detail: string;
  turn: number;
  /** which preset this car drives like */
  preset: string;
  /** top-speed multiplier the owner chose on /import, 0.5..2 */
  speed: number;
  /**
   * The name of the file that was stored — for an import that arrived as FBX,
   * OBJ or a zip, this is the .glb the converter wrote, which is what the
   * owner's list shows. The garage itself never reads it.
   */
  fileName?: string;
}

/** A garage id for an imported car never collides with the built-in ones. */
export const importedCarId = (id: string) => `imported:${id}`;

export function isImportedCarId(id: string) {
  return id.startsWith("imported:");
}

/** Turn an imported-car row into a full garage entry, physics preset applied. */
export function importedCarEntry(car: ImportedCar): CarEntry {
  const base = (VEHICLES as Record<string, VehicleSpec | undefined>)[car.preset] ?? VEHICLES.gt;
  const speed = car.speed && car.speed > 0 ? car.speed : 1;
  return {
    id: importedCarId(car.id),
    name: car.name,
    klass: car.klass,
    detail: car.detail || "Imported by the owner",
    url: car.url,
    bytes: car.bytes,
    author: car.author,
    license: car.license,
    turn: car.turn,
    physics: {
      ...base,
      name: car.name,
      klass: car.klass,
      /* the owner's speed dial: torque and the top-speed governor scale with it */
      torqueNm: base.torqueNm * speed,
      powerKw: base.powerKw * speed,
      topSpeedKph: Math.round(base.topSpeedKph * speed),
    },
  };
}

/** The built-in library plus everything the owner has imported. */
export function allCars(imported: ImportedCar[] = []): CarEntry[] {
  return [...CAR_LIBRARY, ...imported.map(importedCarEntry)];
}

export function carById(id: string): CarEntry {
  return CAR_LIBRARY.find((c) => c.id === id) ?? CAR_LIBRARY[0] ?? fallbackCar();
}

/** Look up a car in the merged list (built-in + imported). */
export function carFromAll(id: string, imported: ImportedCar[] = []): CarEntry | null {
  if (isImportedCarId(id)) {
    const raw = imported.find((c) => importedCarId(c.id) === id);
    return raw ? importedCarEntry(raw) : null;
  }
  return allCars(imported).find((c) => c.id === id) ?? null;
}

export function isCarId(id: string): boolean {
  return CAR_LIBRARY.some((c) => c.id === id);
}

/** The library entry's name is authoritative over the preset's. */
export function carSpec(entry: CarEntry): VehicleSpec {
  return { ...entry.physics, name: entry.name, klass: entry.klass };
}

/** Body shape used for this car: the procedural fallback and the traffic fleet. */
export function carKind(entry: CarEntry): VehicleKind {
  return entry.physics.kind;
}

/** Last-resort entry, so a mis-edited library can never break the game. */
function fallbackCar(): CarEntry {
  return {
    id: "fallback",
    name: "TEST MULE",
    klass: "Development car",
    detail: "Library is empty",
    url: "",
    bytes: 0,
    author: "—",
    license: "—",
    physics: VEHICLES.gt,
  };
}

export function formatBytes(n: number): string {
  if (n <= 0) return "—";
  if (n >= 1048576) return `${(n / 1048576).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(n / 1024))} KB`;
}
