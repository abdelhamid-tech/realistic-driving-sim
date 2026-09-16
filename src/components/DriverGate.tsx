import { useDriver } from "@/hooks/use-driver";

/**
 * THE DOOR — and there is nothing to fill in here any more.
 *
 * The name on the road is the player's CrazyGames account: the platform hands
 * the game a username and an avatar, and that is what the other drivers see
 * beside the car. There is no pseudonym form in front of the game: a player
 * whose name the platform cannot provide is asked once, on the profile screen
 * inside the launch flow — the same panel that offers the CrazyGames sign-in —
 * so the question is asked in one place instead of two.
 *
 * All this wrapper does is keep the identity store wired to the platform, so a
 * logged-in player's username is already in place before the flow decides
 * which screen to show, and nothing has to be asked twice.
 */
export function DriverGate({ children }: { children: React.ReactNode }) {
  useDriver();
  return <>{children}</>;
}
