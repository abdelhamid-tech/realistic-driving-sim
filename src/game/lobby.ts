/* ============================================================================
 *  LOBBY SIZE — the numbers sent to CrazyGames with the build.
 *
 *  The platform asks every multiplayer game to submit the smallest and the
 *  largest lobby it supports, and expects the game to behave the same way:
 *
 *    a private room is created for one player, who is joinable straight away,
 *    and friends keep joining until the room is full, at which point the game
 *    says so instead of quietly dropping somebody into a crowd.
 *
 *  Both the relay (src/convex/multiplayer.ts) and the lobby UI read these, so
 *  the cap the player sees on screen is the cap the server enforces.
 * ==========================================================================*/

/** A room with one player is a lobby people can join; two is the advertised minimum. */
export const LOBBY_MIN = 2;
/** Submitted maximum — the relay refuses the next driver and the lobby says why. */
export const LOBBY_MAX = 8;

/** "3 / 8" — for the lobby header and the in-game HUD. */
export function lobbyLabel(players: number): string {
  return `${players} / ${LOBBY_MAX}`;
}

export function lobbyFull(players: number): boolean {
  return players >= LOBBY_MAX;
}

/** The sentence the relay throws, so the refusal reads the same everywhere. */
export function lobbyFullMessage(room: string): string {
  return `Room ${room.toUpperCase()} is full (${LOBBY_MAX}/${LOBBY_MAX}) — ask for another code.`;
}
