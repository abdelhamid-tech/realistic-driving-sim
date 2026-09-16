/**
 * HOW FAST IS THIS MACHINE?
 *
 * A driving game has one job: keep the frame rate steady while the world
 * streams past. Two things decide whether that happens — where the session
 * opens, and how quickly the game admits it guessed wrong.
 *
 * Opening: the three tiers in the engine are a budget, not a first guess.
 * Starting a phone on the top entry spends the first seconds of the session
 * stuttering, and those are the seconds a player decides whether to stay. So
 * the device is asked what it is (cores, memory, touch, screen, pixel density)
 * and — better — what the last session actually measured: the tier the frame
 * rate settled on is kept in the browser, so a machine that struggled opens one
 * step lower instead of stuttering its way there again, and a machine that had
 * headroom opens where it left off.
 *
 * Staying honest: QualityWatch is the watchdog, fed by the frame rate the
 * engine already reports. Coming down is quick, because a stutter is felt at
 * once, and skips a tier when it is bad enough; going back up waits ten
 * seconds of proven headroom and then holds twelve, so a machine that merely
 * breathes is not taken for a fast one. A tier that holds for a while is what
 * this machine does, and is written down for the next visit.
 *
 * The engine keeps its own tier list (pixel ratio, shadow map, traffic, rain)
 * because those are its business; this module only ever names a tier index.
 */
export const TIER_COUNT = 3;
/** what the tiers are called, low to high — the engine's list wears these names */
export const TIER_NAMES = ["LOW", "MEDIUM", "HIGH"] as const;

const KEY = "riverbend.quality.tier.v1";
/** how long a tier has to hold before it counts as "what this machine does" */
const SETTLE_MS = 12000;
/** a sag below this, held for a moment, is a tier that cannot be paid for */
const DOWN_FPS = 46;
/** below this, two tiers at once: one long stutter beats two short ones */
const CRASH_FPS = 32;
/** headroom that has to be held before stepping back up */
const UP_FPS = 58;
const UP_HOLD_S = 10;
const DOWN_HOLD_S = 3;
const UP_COOLDOWN_S = 12;

export interface DeviceProfile {
  cores: number;
  /** Chrome/Edge expose a coarse RAM figure; 0 where the browser says nothing */
  memory: number;
  touch: boolean;
  dpr: number;
  /** a hand-held screen is the bottleneck long before the GPU is */
  phone: boolean;
  /** where the device alone suggests starting, 0..TIER_COUNT-1 */
  guess: number;
}

export const DEVICE: DeviceProfile = (() => {
  if (typeof navigator === "undefined") {
    return { cores: 4, memory: 0, touch: false, dpr: 1, phone: false, guess: 1 };
  }
  const nav = navigator as Navigator & { deviceMemory?: number };
  const cores = nav.hardwareConcurrency || 4;
  const memory = nav.deviceMemory ?? 0;
  const touch =
    (nav.maxTouchPoints ?? 0) > 0 || window.matchMedia?.("(pointer: coarse)").matches === true;
  const dpr = window.devicePixelRatio || 1;
  const short = Math.min(window.innerWidth, window.innerHeight);
  const phone = touch && short < 820;
  let guess = 2;
  if (phone) guess = cores >= 6 && short > 420 ? 1 : 0;
  else if (cores <= 2 || (memory > 0 && memory <= 2)) guess = 1;
  return { cores, memory, touch, dpr, phone, guess };
})();

/** The tier the last session settled on, if it was ever measured. */
export function storedTier(): number | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === null) return null;
    const n = Number.parseInt(raw, 10);
    if (!Number.isFinite(n)) return null;
    return Math.min(TIER_COUNT - 1, Math.max(0, n));
  } catch {
    return null;
  }
}

function storeTier(t: number) {
  try {
    const v = String(Math.min(TIER_COUNT - 1, Math.max(0, t)));
    if (window.localStorage.getItem(KEY) === v) return;
    window.localStorage.setItem(KEY, v);
  } catch {
    /* no memory of this session; the next visit guesses again */
  }
}

/** A measurement beats a guess: what the machine did last time wins. */
export function initialTier(): number {
  return storedTier() ?? DEVICE.guess;
}

export interface WatchEvents {
  /** hand the tier to the engine */
  apply: (tier: number) => void;
  /** called when the watchdog itself moved the tier (not a pin) */
  onAuto?: (tier: number) => void;
}

/**
 * The automatic tier, driven by the frame rate the engine reports. Sampling is
 * deliberately lazy: the caller feeds it roughly ten times a second, which is
 * plenty to notice a trend and far too slow to react to one slow frame.
 */
export class QualityWatch {
  private tierValue: number;
  /** true while the game, not the player, is choosing the tier */
  private auto = true;
  private hold = 0;
  private fast = 0;
  private since = 0;
  private settled = true;
  private last = 0;

  private readonly events: WatchEvents;

  constructor(events: WatchEvents, start: number) {
    this.events = events;
    this.tierValue = start;
  }

  get tier() {
    return this.tierValue;
  }

  get automatic() {
    return this.auto;
  }

  /**
   * Pin a tier (-1 to hand control back to the watchdog). A pinned tier is
   * applied at once and kept: the player asked for it, so nothing here may
   * quietly undo it.
   */
  pin(mode: number) {
    if (mode < 0) {
      this.auto = true;
      this.hold = 2.5;
      this.fast = 0;
      this.since = performance.now();
      this.settled = false;
      return;
    }
    this.auto = false;
    if (mode !== this.tierValue) this.setTier(mode);
  }

  /** One measurement. `fps` is the engine's smoothed frame rate. */
  sample(fps: number, now = performance.now()) {
    const dt = this.last ? Math.min(1, (now - this.last) / 1000) : 0;
    this.last = now;
    if (!this.auto || !Number.isFinite(fps) || fps <= 0) return;

    if (!this.settled && now - this.since > SETTLE_MS) {
      storeTier(this.tierValue);
      this.settled = true;
    }
    if (!dt) return;

    this.hold = Math.max(0, this.hold - dt);
    if (this.hold > 0) return;

    if (fps < DOWN_FPS && this.tierValue > 0) {
      const drop = fps < CRASH_FPS && this.tierValue > 1 ? 2 : 1;
      this.setTier(this.tierValue - drop);
      this.hold = DOWN_HOLD_S;
      this.fast = 0;
    } else if (fps > UP_FPS && this.tierValue < TIER_COUNT - 1) {
      this.fast += dt;
      if (this.fast > UP_HOLD_S) {
        this.setTier(this.tierValue + 1);
        this.hold = UP_COOLDOWN_S;
        this.fast = 0;
      }
    } else {
      this.fast = 0;
    }
  }

  /**
   * The page went away (background tab, a stall, a model landing) and came
   * back. The next measurement is not a measurement, so the watchdog is given
   * room to settle instead of dragging the tier down over one lost frame.
   */
  interrupt() {
    this.last = 0;
    this.hold = Math.max(this.hold, 2.5);
    this.fast = 0;
  }

  private setTier(t: number) {
    const next = Math.min(TIER_COUNT - 1, Math.max(0, t | 0));
    this.tierValue = next;
    this.since = performance.now();
    this.settled = false;
    this.events.apply(next);
    if (this.auto) this.events.onAuto?.(next);
  }
}
