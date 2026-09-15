/* ============================================================================
 *  CRAZYGAMES SDK  —  the single place the platform is spoken to.
 *
 *  The SDK ships as a plain <script> in index.html and exposes
 *  `window.CrazyGames.SDK`. It only answers on three kinds of host:
 *
 *    crazygames  the real site (and the preview tool) — everything works
 *    local       localhost / 127.0.0.1 / ?useLocalSdk=true — demo ads,
 *                simulated user, everything else logged to the console
 *    disabled    anywhere else, including the owner's own domain. Every
 *                single call throws.
 *
 *  So nothing here is called unguarded. If the environment is not usable the
 *  whole module degrades to no-ops: the game runs exactly as it does on the
 *  owner's domain, with no SDK, no ads and localStorage for progress. That is
 *  also what keeps the game working when a player runs an adblocker, which the
 *  platform requires.
 *
 *  Progress note: on CrazyGames the `data` module replaces localStorage
 *  entirely (see cgGet/cgSet) — that is a hard platform requirement, and it is
 *  also how a player's name and tuning follow them between devices.
 * ==========================================================================*/

/* --------------------------------------------------------------- the shapes */

export interface CgError {
  code: string;
  message?: string;
}

export interface CgUser {
  username: string;
  profilePictureUrl: string | null;
  /** `__dangerousUserId` — an identifier only, never an authentication token */
  id?: string;
}

export interface CgSettings {
  /** the game must switch chat off when this is true */
  disableChat: boolean;
  /** hard mute: wins over any in-game volume control */
  muteAudio: boolean;
}

export interface CgSystemInfo {
  countryCode?: string;
  locale?: string;
  device?: { type?: string; mobileType?: string | null };
  applicationType?: string;
}

export interface CgRoom {
  roomId: string;
  isJoinable: boolean;
  inviteParams?: Record<string, string>;
}

interface CgModule {
  ad: {
    requestAd(
      type: "midgame" | "rewarded",
      callbacks: {
        adStarted?: () => void;
        adFinished?: () => void;
        adError?: (error: CgError) => void;
      },
    ): void;
    hasAdblock(): Promise<boolean>;
  };
  banner: {
    requestResponsiveBanner(containerId: string): Promise<unknown>;
    requestBanner(containerId: string, size: string): Promise<unknown>;
    clearBanner(containerId: string): void;
    clearAllBanners(): void;
  };
  game: {
    settings: CgSettings;
    addSettingsListener(listener: (settings: CgSettings) => void): void;
    gameplayStart(): void;
    gameplayStop(): void;
    loadingStart(): void;
    loadingStop(): void;
    happytime(): void;
    reportGameCompletedPercentage(percentage: number): void;
    setGameContext(context: Record<string, unknown>): void;
    isInstantMultiplayer: boolean;
    updateRoom(room: CgRoom): void;
    leftRoom(): void;
    addJoinRoomListener(listener: (room: CgRoom) => void): void;
    inviteLink(params: Record<string, string>): Promise<string>;
    getInviteParam(key: string): string | null;
    inviteParams: Record<string, string> | null;
  };
  user: {
    isUserAccountAvailable: boolean;
    systemInfo: CgSystemInfo;
    getUser(): Promise<CgUser | null>;
    getUserToken(): Promise<string>;
    showAuthPrompt(): Promise<CgUser>;
    addAuthListener(listener: (user: CgUser) => void): void;
  };
  data: {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
  };
}

interface CgGlobal {
  SDK: CgModule & {
    init(): Promise<void>;
    environment: string;
  };
}

declare global {
  interface Window {
    CrazyGames?: CgGlobal;
  }
}

/* ---------------------------------------------------------------- the state */

export type CgEnvironment = "crazygames" | "local" | "disabled" | "unknown";

export interface CgState {
  /** init() has resolved and the environment is known */
  ready: boolean;
  environment: CgEnvironment;
  /** true when the SDK actually answers: crazygames or local */
  active: boolean;
  user: CgUser | null;
  /** the platform account system is reachable (false on third-party embeds) */
  accountsAvailable: boolean;
  settings: CgSettings;
  systemInfo: CgSystemInfo | null;
}

const DISABLED: CgSettings = { disableChat: false, muteAudio: false };

let state: CgState = {
  ready: false,
  environment: "unknown",
  active: false,
  user: null,
  accountsAvailable: false,
  settings: DISABLED,
  systemInfo: null,
};

const listeners = new Set<() => void>();

function patch(next: Partial<CgState>) {
  state = { ...state, ...next };
  for (const l of listeners) l();
}

/** React-friendly subscription; see useCrazyGames(). */
export function subscribeCg(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function cgState(): CgState {
  return state;
}

/** The SDK object, or null when the platform is not answering. */
function sdk(): CgModule | null {
  if (!state.active) return null;
  return window.CrazyGames?.SDK ?? null;
}

/** Every call to the platform goes through here: a failing SDK never throws. */
function safe<T>(what: string, fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch (error) {
    warn(what, error);
    return fallback;
  }
}

/** One line in the console, except for the codes that are normal traffic. */
function warn(what: string, error: unknown) {
  const code = (error as CgError)?.code ?? "error";
  /* a missing ad, a cooldown, or Basic Launch having ads off is not a bug */
  if (
    code === "unfilled" ||
    code === "adCooldown" ||
    code === "bannerCooldown" ||
    code === "bannersDisabledBasicLaunch"
  )
    return;
  console.warn(`[crazygames] ${what}: ${code}`);
}

/* -------------------------------------------------------------- booting up */

let booted: Promise<CgState> | null = null;

/**
 * Initialises the SDK exactly once. Resolves with the resulting state, and
 * always resolves — on a domain the SDK refuses, it resolves as "disabled".
 */
export function initCrazyGames(): Promise<CgState> {
  if (booted) return booted;
  booted = (async () => {
    const s = window.CrazyGames?.SDK;
    if (!s || typeof s.init !== "function") {
      patch({ ready: true, environment: "disabled", active: false });
      return state;
    }
    try {
      await s.init();
    } catch (error) {
      console.warn("[crazygames] init failed", error);
      patch({ ready: true, environment: "disabled", active: false });
      return state;
    }

    const environment = (s.environment ?? "unknown") as CgEnvironment;
    const active = environment === "crazygames" || environment === "local";
    patch({
      ready: true,
      environment,
      active,
      /* read only where the SDK answers: on a third-party embed the static
         properties can exist while being stale or meaningless */
      settings: active ? (s.game?.settings ?? DISABLED) : DISABLED,
      systemInfo: active ? (s.user?.systemInfo ?? null) : null,
      accountsAvailable: active && Boolean(s.user?.isUserAccountAvailable),
    });
    if (!active) return state;

    /* the platform's own settings win over anything in the game */
    safe("addSettingsListener", () => {
      s.game.addSettingsListener((settings) => patch({ settings: settings ?? DISABLED }));
    }, undefined);

    if (state.accountsAvailable) {
      const user = await safeAsync("getUser", () => s.user.getUser(), null);
      if (user) patch({ user });
      /* a player who logs in while playing is adopted without a reload */
      safe("addAuthListener", () => {
        s.user.addAuthListener((next) => patch({ user: next }));
      }, undefined);
    }
    return state;
  })();
  return booted;
}

/** The promise-returning half of safe(). */
async function safeAsync<T>(what: string, fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    warn(what, error);
    return fallback;
  }
}

/** Ready-made helper for React: await the boot, then read the live state. */
export async function whenReady(): Promise<CgState> {
  return initCrazyGames();
}

/* ------------------------------------------------------- progress storage
 *  The platform requires the data module to be the only save, for guests and
 *  logged-in players alike. It has the same API as localStorage, so this is a
 *  drop-in swap; anything that goes wrong (module disabled in the submission
 *  flow, a size limit, a domain without accounts) falls back to localStorage
 *  rather than losing the player's setup.
 * ------------------------------------------------------------------------*/

export function cgGet(key: string): string | null {
  const s = sdk();
  if (s) {
    const value = safe("data.getItem", () => s.data.getItem(key), null);
    if (value !== null) return value;
  }
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function cgSet(key: string, value: string): void {
  const s = sdk();
  if (s) safe("data.setItem", () => s.data.setItem(key, value), undefined);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* the platform copy is what matters; a browser in private mode is fine */
  }
}

export function cgRemove(key: string): void {
  const s = sdk();
  if (s) safe("data.removeItem", () => s.data.removeItem(key), undefined);
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* see above */
  }
}

/* ------------------------------------------------------------- the game module */

export const gameplayStart = () => safe("gameplayStart", () => sdk()?.game.gameplayStart(), undefined);
export const gameplayStop = () => safe("gameplayStop", () => sdk()?.game.gameplayStop(), undefined);
export const loadingStart = () => safe("loadingStart", () => sdk()?.game.loadingStart(), undefined);
export const loadingStop = () => safe("loadingStop", () => sdk()?.game.loadingStop(), undefined);

/** A moment worth celebrating. Deliberately rare — see the drift milestones. */
export const happyTime = () => safe("happytime", () => sdk()?.game.happytime(), undefined);

let reportedProgress = -1;
/** 0..100; the platform is only told when the number actually moves. */
export function reportProgress(percentage: number) {
  const value = Math.max(0, Math.min(100, Math.round(percentage)));
  if (value === reportedProgress) return;
  reportedProgress = value;
  safe("reportGameCompletedPercentage", () => {
    sdk()?.game.reportGameCompletedPercentage(value);
  }, undefined);
}

/** Attached to player feedback, so a report can be reproduced. */
export function setGameContext(context: Record<string, unknown>) {
  safe("setGameContext", () => sdk()?.game.setGameContext(context), undefined);
}

/* ------------------------------------------------------------- multiplayer
 *  The room is the platform's join/invite surface: it lets a friend join a
 *  player straight from the CrazyGames UI, and it is what powers the
 *  "Play with friends" landing page.
 * ------------------------------------------------------------------------*/

export function updateRoom(room: CgRoom) {
  safe("updateRoom", () => sdk()?.game.updateRoom(room), undefined);
}

export function leftRoom() {
  safe("leftRoom", () => sdk()?.game.leftRoom(), undefined);
}

const roomListeners = new Set<(room: CgRoom) => void>();
let roomListenerWired = false;

export function onJoinRoom(listener: (room: CgRoom) => void) {
  roomListeners.add(listener);
  if (!roomListenerWired) {
    roomListenerWired = true;
    safe("addJoinRoomListener", () => {
      sdk()?.game.addJoinRoomListener((room) => {
        for (const l of roomListeners) l(room);
      });
    }, undefined);
  }
  return () => {
    roomListeners.delete(listener);
  };
}

/** Read one parameter out of an invite link (null when there is no invite). */
export function getInviteParam(key: string): string | null {
  const s = sdk();
  if (!s) return null;
  return safe("getInviteParam", () => s.game.getInviteParam(key) ?? null, null);
}

/** True when the game was launched from the CrazyGames multiplayer page. */
export const isInstantMultiplayer = () => Boolean(safe("isInstantMultiplayer", () => sdk()?.game.isInstantMultiplayer, false));

/* -------------------------------------------------------------------- ads */

interface AdHooks {
  onStart?: () => void;
  onEnd?: (error: CgError | null) => void;
}

/**
 * A midgame ad at a natural break. The SDK paces them itself (roughly one
 * every three minutes) and simply reports `adCooldown` when asked too soon,
 * so the game never has to count impressions.
 */
export function requestMidgameAd({ onStart, onEnd }: AdHooks = {}) {
  const s = sdk();
  if (!s) {
    onEnd?.(null);
    return;
  }
  try {
    s.ad.requestAd("midgame", {
      adStarted: () => onStart?.(),
      adFinished: () => onEnd?.(null),
      adError: (error) => onEnd?.(error),
    });
  } catch (error) {
    warn("requestAd:midgame", error);
    /* the ad module refused outright: release the game rather than leaving it
       blocked behind a video that will never play */
    onEnd?.(error as CgError);
  }
}

/** An opt-in ad the player asks for, in exchange for a reward. */
export function requestRewardedAd({ onStart }: AdHooks = {}): Promise<boolean> {
  const s = sdk();
  if (!s) return Promise.resolve(false);
  return new Promise((resolve) => {
    let settled = false;
    let timer = 0;
    const done = (value: boolean) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(value);
    };
    try {
      s.ad.requestAd("rewarded", {
        adStarted: () => onStart?.(),
        adFinished: () => done(true),
        adError: () => done(false),
      });
    } catch (error) {
      warn("requestAd:rewarded", error);
      done(false);
      return;
    }
    /* the SDK never leaves a request hanging, but a host with no ad module at
       all would: do not make the player wait forever */
    timer = window.setTimeout(() => done(false), 45000);
  });
}

/** Required by the adblock requirement: the game has to keep working. */
export async function hasAdblock(): Promise<boolean> {
  const s = sdk();
  if (!s) return false;
  return safeAsync("hasAdblock", () => s.ad.hasAdblock(), false);
}

/* ---------------------------------------------------------------- banners
 *  Banners live on menu screens only — never over the road. If the platform
 *  refuses (Basic Launch, unfilled, no room in the container) the container is
 *  collapsed instead of leaving a hole in the layout.
 * ----------------------------------------------------------------------*/

export async function showBanner(containerId: string): Promise<boolean> {
  const s = sdk();
  if (!s) return false;
  try {
    await s.banner.requestResponsiveBanner(containerId);
    return true;
  } catch (error) {
    warn("banner", error);
    return false;
  }
}

export function clearBanner(containerId: string) {
  safe("clearBanner", () => sdk()?.banner.clearBanner(containerId), undefined);
}

export function clearBanners() {
  safe("clearAllBanners", () => sdk()?.banner.clearAllBanners(), undefined);
}
