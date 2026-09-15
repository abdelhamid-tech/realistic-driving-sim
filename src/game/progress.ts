/**
 * WHAT THE PLAYER HAS ACTUALLY SEEN — and how far through the game that is.
 *
 * CrazyGames asks for a completion percentage (`reportGameCompletedPercentage`).
 * This is an open, endless driving sandbox, so there are no levels to finish:
 * the platform's guidance for sandbox games is to pick a definition of 100% and
 * apply it consistently. Ours is:
 *
 *     100% = every shipped car driven at least once
 *          + every shipped world opened at least once
 *
 * Only the shipped library and the shipped maps count — the owner's own imports
 * cannot move the goalposts for everybody else. Intermediate values are
 * reported as the player progresses, and the number is recomputed on every
 * load so it stays correct after an update.
 *
 * Persisted through the CrazyGames data module (cgGet/cgSet), which falls back
 * to localStorage off-platform.
 */
import { CAR_LIBRARY } from "./carmodels";
import { WORLD_MAP_LIST } from "./worldmaps";
import { cgGet, cgSet } from "@/lib/crazygames";

const KEY = "riverbend.progress";

export interface Progress {
  /** garage ids of the shipped cars that have been driven */
  cars: string[];
  /** world ids that have been opened */
  worlds: string[];
}

let cache: Progress | null = null;

function clean(raw: unknown, allowed: string[]): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((v): v is string => typeof v === "string" && allowed.includes(v));
}

export function loadProgress(): Progress {
  if (cache) return cache;
  let parsed: Partial<Progress> = {};
  try {
    parsed = JSON.parse(cgGet(KEY) ?? "{}") as Partial<Progress>;
  } catch {
    parsed = {};
  }
  cache = {
    cars: clean(parsed.cars, CAR_LIBRARY.map((c) => c.id)),
    worlds: clean(parsed.worlds, WORLD_MAP_LIST.map((w) => w.id)),
  };
  return cache;
}

function save() {
  cgSet(KEY, JSON.stringify(loadProgress()));
}

/** Returns true when this is the first time that car has been driven. */
export function markCarDriven(id: string): boolean {
  const p = loadProgress();
  if (!CAR_LIBRARY.some((c) => c.id === id)) return false;
  if (p.cars.includes(id)) return false;
  p.cars.push(id);
  save();
  return true;
}

/** Returns true when this is the first time that world has been opened. */
export function markWorldVisited(id: string): boolean {
  const p = loadProgress();
  if (!WORLD_MAP_LIST.some((w) => w.id === id)) return false;
  if (p.worlds.includes(id)) return false;
  p.worlds.push(id);
  save();
  return true;
}

export interface Completion {
  percentage: number;
  cars: number;
  carsTotal: number;
  worlds: number;
  worldsTotal: number;
}

export function completion(): Completion {
  const p = loadProgress();
  const carsTotal = CAR_LIBRARY.length;
  const worldsTotal = WORLD_MAP_LIST.length;
  const cars = p.cars.length;
  const worlds = p.worlds.length;
  const done = cars + worlds;
  const total = carsTotal + worldsTotal;
  return {
    percentage: total ? Math.round((done / total) * 100) : 0,
    cars,
    carsTotal,
    worlds,
    worldsTotal,
  };
}
