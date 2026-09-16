/**
 * WHAT FOLLOWS THE PLAYER — the car, its paint, the hour, the camera, the
 * volume, and whether they were driving online.
 *
 * The platform requires the CrazyGames data module to be the save for player
 * data, for logged-in players and guests alike, because that is the save the
 * platform syncs across every device the account plays on. `cgGet`/`cgSet` do
 * that, and fall back to localStorage off-platform (see src/lib/crazygames.ts).
 *
 * The driver's name lives in the driver store and progress lives in ./progress;
 * this is the rest of the setup, so a player who picks a car and paints it
 * orange at midnight finds it orange at midnight on the next machine.
 *
 * Everything is validated on the way back in: a save can be old, hand-edited,
 * or written by a build with a different garage, and none of that may break
 * the garage.
 *
 * Read once, on the way into the garage. The platform hands the player's data
 * over while the SDK initialises, and that happens at page load — before this
 * bundle is even fetched (see main.tsx) — so the copy read here is the
 * account's copy, not an empty one.
 */
import { cgGet, cgSet } from "@/lib/crazygames";

const KEY = "riverbend.profile";

export interface PlayerProfile {
  /** garage id of the car last on the road; "" means the default car */
  car: string;
  /** body paint as 0xRRGGBB; 0 means "never chosen" */
  paint: number;
  /** the hour the city was left at, 0..24 */
  hour: number;
  /** camera mode index */
  camera: number;
  /** master volume, 0..1 */
  volume: number;
  /** whether the last run was online */
  net: boolean;
  /** graphics tier the player pinned, or -1 to let the game measure it */
  quality: number;
}

export const DEFAULT_PROFILE: PlayerProfile = {
  car: "",
  paint: 0,
  hour: 16.2,
  camera: 0,
  volume: 0.5,
  net: true,
  quality: -1,
};

let cache: PlayerProfile | null = null;

const num = (raw: unknown, fallback: number, min: number, max: number) => {
  const n = typeof raw === "number" ? raw : Number(raw);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
};

export function loadProfile(): PlayerProfile {
  if (cache) return cache;
  let parsed: Partial<PlayerProfile> = {};
  try {
    parsed = JSON.parse(cgGet(KEY) ?? "{}") as Partial<PlayerProfile>;
  } catch {
    parsed = {};
  }
  cache = {
    car: typeof parsed.car === "string" ? parsed.car.slice(0, 48) : DEFAULT_PROFILE.car,
    paint: num(parsed.paint, DEFAULT_PROFILE.paint, 0, 0xffffff) | 0,
    hour: num(parsed.hour, DEFAULT_PROFILE.hour, 0, 24),
    camera: num(parsed.camera, DEFAULT_PROFILE.camera, 0, 4) | 0,
    volume: num(parsed.volume, DEFAULT_PROFILE.volume, 0, 1),
    net: typeof parsed.net === "boolean" ? parsed.net : DEFAULT_PROFILE.net,
    quality: Math.round(num(parsed.quality, DEFAULT_PROFILE.quality, -1, 2)),
  };
  return cache;
}

/** Writes the given fields and returns the profile as it now stands. */
export function saveProfile(patch: Partial<PlayerProfile>): PlayerProfile {
  const next = { ...loadProfile(), ...patch };
  cache = next;
  cgSet(KEY, JSON.stringify(next));
  return next;
}

/** Used by the account screen's "start over": the save is dropped, not hidden. */
export function forgetProfile() {
  cache = { ...DEFAULT_PROFILE };
  cgSet(KEY, JSON.stringify(cache));
}
