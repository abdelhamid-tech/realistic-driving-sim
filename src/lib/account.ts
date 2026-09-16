/**
 * WHETHER THE PLAYER HAS SET UP THEIR ACCOUNT — asked once, then remembered.
 *
 * CrazyGames players arrive already logged in, so the game does not need a
 * sign-up form: it needs one confirmation that the platform account is the one
 * driving, and one tick that the player accepts the terms. That answer is kept
 * through the CrazyGames data module (so it follows the player to every device,
 * like the rest of their save) and falls back to localStorage off-platform.
 *
 * It is keyed by identity: a different CrazyGames account on the same browser
 * is asked again, and a guest who later logs in gets the account screen once
 * more — which is also the moment their guest save is adopted by the account.
 *
 * Deliberately skippable: a player who arrived from an invite link must not be
 * held up, so the lobby-side of the flow can jump straight onto the road.
 */
import { cgGet, cgSet, type CgUser } from "@/lib/crazygames";

const KEY = "riverbend.account";

export interface AccountChoice {
  /** the CrazyGames username this choice was made for, or "guest" */
  id: string;
  /** true when the player chose to play without the platform account */
  guest: boolean;
  /** the terms tick — the platform's own account screen gates on this too */
  terms: boolean;
  /**
   * The screen was answered. Kept apart from `terms` on purpose: a player who
   * skips straight to the road has answered the question without ticking the
   * box, and must not be asked again on every launch.
   */
  answered: boolean;
  /** when the choice was made, so a stale save can be spotted */
  at: number;
}

/** The identity a choice belongs to: the platform username, or "guest". */
export function accountIdentity(user: CgUser | null): string {
  return user?.username ?? "guest";
}

export function loadChoice(): AccountChoice | null {
  try {
    const raw = cgGet(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AccountChoice>;
    if (typeof parsed?.id !== "string" || !parsed.id) return null;
    return {
      id: parsed.id,
      guest: Boolean(parsed.guest),
      terms: Boolean(parsed.terms),
      /* a save from before this field existed counts as answered when the
         terms were ticked, which is the only way it could have been written */
      answered: typeof parsed.answered === "boolean" ? parsed.answered : Boolean(parsed.terms),
      at: Number.isFinite(parsed.at) ? Number(parsed.at) : 0,
    };
  } catch {
    return null;
  }
}

export function saveChoice(choice: AccountChoice) {
  cgSet(KEY, JSON.stringify(choice));
}

/** True when this player still has to be shown the account screen. */
export function needsAccountSetup(user: CgUser | null): boolean {
  const choice = loadChoice();
  if (!choice) return true;
  /* a choice made for another identity (or before a login) does not count */
  if (choice.id !== accountIdentity(user)) return true;
  return !choice.answered;
}

/**
 * Whether the account screen should be offered at all. It is a platform
 * feature: with no reachable account system there is nothing to confirm, and
 * the game must behave exactly as it does on the owner's own domain.
 */
export function accountScreenApplies(active: boolean, accountsAvailable: boolean, user: CgUser | null): boolean {
  return active && (accountsAvailable || Boolean(user));
}
