/**
 * The platform account, for React.
 *
 * Subscribes to the CrazyGames SDK boot from src/lib/crazygames.ts and returns
 * its live state: the environment, the logged-in CrazyGames user and the
 * platform settings (hard mute, chat). Everything is `disabled` / null on any
 * other domain, so components can read these values unconditionally.
 */
import { useEffect, useSyncExternalStore } from "react";
import { cgState, initCrazyGames, subscribeCg, type CgState } from "@/lib/crazygames";

export function useCrazyGames(): CgState {
  const state = useSyncExternalStore(subscribeCg, cgState, cgState);
  useEffect(() => {
    void initCrazyGames();
  }, []);
  return state;
}
