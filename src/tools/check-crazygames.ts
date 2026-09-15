/**
 * CRAZYGAMES SDK CHECK — proves the platform boundary behaves, without a
 * browser and without the platform.
 *
 *   bun run src/tools/check-crazygames.ts
 *
 * The whole game talks to CrazyGames through src/lib/crazygames.ts, and the
 * dangerous property is not "do the calls work on CrazyGames" — it is "does the
 * game survive when they do not". A player with an adblocker, a host where the
 * SDK answers `disabled`, or a platform method that throws must all leave the
 * game playable. This tool fakes the three environments and asserts it.
 *
 *   crazygames  everything answers   — user adopted, room reported, ads, save
 *   local       demo mode            — same code path, simulated answers
 *   disabled    any other domain     — every call must be a silent no-op
 *   hostile     SDK object present, every method throws — nothing may escape
 */
import {
  clearBanner,
  gameplayStart,
  gameplayStop,
  getInviteParam,
  hasAdblock,
  isInstantMultiplayer,
  initCrazyGames,
  leftRoom,
  loadingStart,
  loadingStop,
  onJoinRoom,
  reportProgress,
  requestMidgameAd,
  requestRewardedAd,
  setGameContext,
  showBanner,
  updateRoom,
  happyTime,
  cgGet,
  cgSet,
  cgRemove,
} from "../lib/crazygames";

type Scenario = "crazygames" | "local" | "disabled" | "hostile";

const scenario = (process.env.CG_SCENARIO ?? "crazygames") as Scenario;

const results: [string, boolean, string][] = [];
let failed = 0;

function check(name: string, ok: boolean, extra = "") {
  if (!ok) failed++;
  results.push([name, ok, extra]);
}

/* --------------------------------------------------------------- the fakes */

const log: string[] = [];
const store = new Map<string, string>();

const local = {
  getItem: (k: string) => (store.has(k) ? (store.get(k) as string) : null),
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
  clear: () => store.clear(),
  key: (i: number) => [...store.keys()][i] ?? null,
  get length() {
    return store.size;
  },
};

function fakeUser() {
  return { username: "CrazyDriver", profilePictureUrl: "https://cdn.example/av.png", __dangerousUserId: "u1" };
}

const settings = { disableChat: false, muteAudio: true };

/** Wraps a module so every method logs its name and returns `value`. */
function spy<T extends object>(name: string, value: unknown, out: string[], hostile = false): T {
  const target: Record<string, unknown> = {};
  for (const key of Object.keys(value as Record<string, unknown>)) {
    const v = (value as Record<string, unknown>)[key];
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      target[key] = spy(`${name}.${key}`, v, out, hostile);
    } else if (typeof v === "function") {
      target[key] = (...args: unknown[]) => {
        out.push(`${name}.${key}`);
        if (hostile) throw { code: "other", message: "hostile" };
        return (v as (...a: unknown[]) => unknown)(...args);
      };
    } else {
      target[key] = v;
    }
  }
  return new Proxy(target, {
    get(t, prop: string) {
      if (prop in t) return t[prop];
      out.push(`${name}.${prop}`);
      if (hostile) throw { code: "other", message: "hostile" };
      return undefined;
    },
  }) as T;
}

const adModule = {
  requestAd(type: string, callbacks: Record<string, () => void>) {
    /* the platform answers asynchronously, like a real ad */
    setTimeout(() => {
      if (type === "midgame") callbacks.adFinished?.();
      else {
        callbacks.adStarted?.();
        callbacks.adFinished?.();
      }
    }, 0);
  },
  hasAdblock: async () => false,
};

const bannerModule = {
  requestResponsiveBanner: async (id: string) => {
    if (!id) throw { code: "missingId" };
    return undefined;
  },
  requestBanner: async () => undefined,
  clearBanner: () => {},
  clearAllBanners: () => {},
};

const gameModule = {
  settings,
  addSettingsListener: (cb: (s: typeof settings) => void) => cb(settings),
  gameplayStart: () => {},
  gameplayStop: () => {},
  loadingStart: () => {},
  loadingStop: () => {},
  happytime: () => {},
  reportGameCompletedPercentage: (p: number) => void log.push(`progress:${p}`),
  setGameContext: (c: Record<string, unknown>) => void log.push(`context:${JSON.stringify(c)}`),
  isInstantMultiplayer: true,
  updateRoom: (room: { roomId: string }) => void log.push(`room:${room.roomId}`),
  leftRoom: () => void log.push("leftRoom"),
  addJoinRoomListener: (cb: (room: { roomId: string }) => void) => cb({ roomId: "joined" }),
  inviteLink: async () => "https://www.crazygames.com/game/x?room=ZZ",
  getInviteParam: (k: string) => (k === "room" ? "invited-room" : null),
  inviteParams: { room: "invited-room" },
};

const userModule = {
  isUserAccountAvailable: true,
  systemInfo: { countryCode: "FR", locale: "fr-FR", device: { type: "desktop" } },
  getUser: async () => fakeUser(),
  getUserToken: async () => "token",
  showAuthPrompt: async () => fakeUser(),
  addAuthListener: () => {},
};

const dataModule = {
  getItem: (k: string) => (store.has("cg:" + k) ? (store.get("cg:" + k) as string) : null),
  setItem: (k: string, v: string) => void store.set("cg:" + k, v),
  removeItem: (k: string) => void store.delete("cg:" + k),
  clear: () => store.clear(),
};

const environment =
  scenario === "crazygames" ? "crazygames" : scenario === "local" ? "local" : scenario === "hostile" ? "crazygames" : "disabled";

const calls: string[] = [];
const g = globalThis as unknown as Record<string, unknown>;
g.window = {
  localStorage: local,
  setTimeout: (fn: () => void, ms: number) => setTimeout(fn, ms),
  clearTimeout: (id: number) => clearTimeout(id),
  CrazyGames: {
    SDK: {
      init: async () => {},
      environment,
      ...(scenario === "hostile"
        ? spy("sdk", { ad: adModule, banner: bannerModule, game: gameModule, user: userModule, data: dataModule }, calls, true)
        : {
            ad: spy("ad", adModule, calls),
            banner: spy("banner", bannerModule, calls),
            game: spy("game", gameModule, calls),
            user: spy("user", userModule, calls),
            data: spy("data", dataModule, calls),
          }),
    },
  },
};

/* ------------------------------------------------------------------- the run */

const state = await initCrazyGames();
/* where the SDK is expected to answer at all, and where its answers are usable */
const expectActive = environment === "crazygames" || environment === "local";
const usable = expectActive && scenario !== "hostile";

check("init resolves and reports the environment", state.ready && state.environment === environment, state.environment);
check(
  "the SDK is only marked active where it answers",
  state.active === expectActive,
  `active=${state.active}`,
);

if (usable) {
  check("a logged-in CrazyGames player is adopted", state.user?.username === "CrazyDriver", String(state.user?.username));
  check("platform settings are read (hard mute)", state.settings.muteAudio === true);
} else if (!expectActive) {
  check("nothing is claimed when the SDK is off", state.user === null && state.settings.muteAudio === false);
}

/* every one of these must survive in all four scenarios */
let threw: string | null = null;
try {
  loadingStart();
  loadingStop();
  gameplayStart();
  gameplayStop();
  happyTime();
  reportProgress(40);
  reportProgress(40);
  setGameContext({ world: "RIVERBEND" });
  updateRoom({ roomId: "abc", isJoinable: true, inviteParams: { room: "abc" } });
  leftRoom();
  onJoinRoom(() => {});
  await showBanner("riverbend-menu-banner");
  clearBanner("riverbend-menu-banner");
  const blocked = await hasAdblock();
  const instant = isInstantMultiplayer();
  const invited = getInviteParam("room");
  await new Promise<void>((resolve) =>
    requestMidgameAd({
      onEnd: () => resolve(),
    }),
  );
  const earned = await requestRewardedAd();
  cgSet("riverbend.driver", "Fast Phil");
  const savedInDataModule = store.has("cg:riverbend.driver");
  const readBack = cgGet("riverbend.driver");
  cgRemove("riverbend.driver");
  if (usable) {
    check("the invite param reaches the game", invited === "invited-room", String(invited));
    check("instant multiplayer is read from the platform", instant === true);
    check("hasAdblock answers without throwing", blocked === false);
    check("a rewarded ad resolves true when it plays", earned === true);
  }
  check("progress is only reported when it moves", log.filter((l) => l.startsWith("progress:")).length <= 1, log.filter((l) => l.startsWith("progress:")).join(","));
  check("the save reads back what was written", readBack === "Fast Phil", String(readBack));
  if (scenario === "crazygames") {
    check("the room is reported to the platform", log.includes("room:abc"), log.join(" "));
    check(
      "the CrazyGames data module is the save (localStorage is the fallback)",
      savedInDataModule,
      [...store.keys()].join(","),
    );
  }
} catch (error) {
  threw = String(error);
}
check("no call escapes, whatever the platform does", threw === null, threw ?? "");

if (scenario === "hostile") {
  check(
    "a hostile SDK still leaves the game running",
    state.ready && state.active && threw === null,
    `${state.environment} threw=${threw}`,
  );
}

for (const [name, ok, extra] of results) {
  console.log(`${ok ? "  ok  " : " FAIL "} [${scenario}] ${name}${extra ? `  — ${extra}` : ""}`);
}
console.log(
  failed ? `\n${failed} check(s) failed in ${scenario}` : `\n${scenario}: the platform boundary holds`,
);
process.exit(failed ? 1 : 0);
