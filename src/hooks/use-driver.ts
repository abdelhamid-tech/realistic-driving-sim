/**
 * WHO IS DRIVING — a name, and nothing else.
 *
 * There are no in-game accounts: no email, no password, no session to keep
 * alive. Two things can fill the name in:
 *
 *   1. CrazyGames. When the player is logged in on the platform, their
 *      CrazyGames username *is* their name in the game and the entry screen is
 *      skipped entirely — that is the platform's account integration.
 *   2. Otherwise they type a pseudonym once. It is remembered through the
 *      CrazyGames data module on the platform (which syncs across a player's
 *      devices and backs guests up when they sign in) and through localStorage
 *      everywhere else.
 *
 * Kept as an external store so every place that needs the name (the roster,
 * the garage) re-renders together when it changes.
 */
import { useCallback, useEffect, useSyncExternalStore } from "react";
import { cgGet, cgRemove, cgSet, cgState, initCrazyGames, subscribeCg, type CgUser } from "@/lib/crazygames";

const STORE_KEY = "riverbend.driver";
const MAX = 16;

let current: string | null = null;
const listeners = new Set<() => void>();

function read(): string {
  return (cgGet(STORE_KEY) ?? "").trim();
}

/** Two characters is enough to tell two drivers apart on the road. */
export function cleanDriver(raw: string): string {
  return raw
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX);
}

function snapshot(): string {
  if (current === null) current = read();
  return current;
}

function emit() {
  for (const l of listeners) l();
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/* A name the player typed themselves is one of the interactions CrazyGames
 * counts, so the game is told about it and can put them straight on the road
 * instead of asking for a second click. */
let typedThisSession = false;

export function setDriver(raw: string, typed = false) {
  const next = cleanDriver(raw);
  current = next;
  if (typed && next) typedThisSession = true;
  if (next) cgSet(STORE_KEY, next);
  else cgRemove(STORE_KEY);
  emit();
}

/** True once, if the current name came from the entry screen. */
export function consumeTypedName(): boolean {
  const was = typedThisSession;
  typedThisSession = false;
  return was;
}

export function clearDriver() {
  setDriver("");
}

/* ------------------------------------------------------------- the platform
 *  Wired once, lazily. Three things happen here:
 *
 *   - a logged-in CrazyGames player takes over the name (automatic login);
 *   - a player who logs in mid-session is adopted without a page reload;
 *   - a guest's saved name is read back from the data module once the SDK has
 *     finished loading it, which is later than the first render.
 * ------------------------------------------------------------------------*/

let wired = false;

export function wireDriverToPlatform() {
  if (wired) return;
  wired = true;

  const apply = (state: { ready: boolean; active: boolean; user: CgUser | null }) => {
    if (!state.ready || !state.active) return;
    const next = state.user ? cleanDriver(state.user.username) : read();
    if (!next || next === current) return;
    current = next;
    /* the platform's own username is mirrored into the save so the roster and
       the garage agree even before the SDK answers on the next visit */
    if (state.user) cgSet(STORE_KEY, next);
    emit();
  };

  subscribeCg(() => apply(cgState()));
  void initCrazyGames().then(apply);
}

export interface Driver {
  /** "" until a name is known */
  name: string;
  /** `typed` marks a name coming from the entry screen, not from the platform */
  setName: (raw: string, typed?: boolean) => void;
  /** back to the entry screen — ignored while a CrazyGames account is driving */
  forget: () => void;
  /** the CrazyGames account behind the name, when there is one */
  platform: CgUser | null;
}

export function useDriver(): Driver {
  const name = useSyncExternalStore(subscribe, snapshot, () => "");
  const platform = useSyncExternalStore(subscribeCg, () => cgState().user, () => null);

  useEffect(() => {
    wireDriverToPlatform();
  }, []);

  const setName = useCallback((raw: string, typed?: boolean) => setDriver(raw, typed), []);
  const forget = useCallback(() => {
    if (cgState().user) return; // the platform owns the name
    clearDriver();
  }, []);

  return { name, setName, forget, platform };
}
