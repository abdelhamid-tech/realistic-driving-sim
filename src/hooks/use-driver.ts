/**
 * WHO IS DRIVING — a name, and nothing else.
 *
 * There are no accounts: no email, no password, no session to keep alive. A
 * player types a pseudonym once, it lives in this browser, and it is what the
 * multiplayer roster shows next to their car. Clearing it sends them back to
 * the entry screen.
 *
 * Kept as an external store so every place that needs the name (the roster,
 * the garage) re-renders together when it changes.
 */
import { useCallback, useSyncExternalStore } from "react";

const STORE_KEY = "riverbend.driver";
const MAX = 16;

let current: string | null = null;
const listeners = new Set<() => void>();

function read(): string {
  try {
    return (window.localStorage.getItem(STORE_KEY) ?? "").trim();
  } catch {
    return "";
  }
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

export function setDriver(raw: string) {
  const next = cleanDriver(raw);
  current = next;
  try {
    if (next) window.localStorage.setItem(STORE_KEY, next);
    else window.localStorage.removeItem(STORE_KEY);
  } catch {
    /* private mode: the name simply lasts for this session */
  }
  emit();
}

export function clearDriver() {
  setDriver("");
}

export interface Driver {
  /** "" until a pseudonym has been typed */
  name: string;
  setName: (raw: string) => void;
  /** back to the entry screen */
  forget: () => void;
}

export function useDriver(): Driver {
  const name = useSyncExternalStore(subscribe, snapshot, () => "");
  const setName = useCallback((raw: string) => setDriver(raw), []);
  const forget = useCallback(() => clearDriver(), []);
  return { name, setName, forget };
}
