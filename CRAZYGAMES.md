# RIVERBEND on CrazyGames — requirement map

Every item below is the platform's requirement (docs.crazygames.com) on the left
and the exact place it is implemented on the right. Anything marked **check** can
be re-proved without a browser.

## Technical

| Requirement | Where |
| --- | --- |
| Total file size ≤ 250 MB, ≤ 1500 files | bundle is ~12 MB / ~40 files (`bun run build:cg`) |
| Initial download ≤ 50 MB (≤ 20 MB for the mobile homepage) | the platform stops counting at the first `gameplayStart`, which is the moment the car becomes drivable: index + Drive chunk + the 6.9 MB built map + the selected car (~10 MB). No model is preloaded in the garage. |
| **Relative paths only inside the bundle** | every shipped asset path is bundle-relative (`maps/riverbend.glb`, `models/*.glb`, `tex/*.png`) and the Draco decoder is resolved with `new URL("draco/gltf/", document.baseURI)`. Owner-imported cars/maps are the only absolute URLs (they live on the backend). The build uses `--base=./` so the emitted HTML/CSS/JS references are relative too. |
| Chrome / Edge / Safari, 4 GB Chromebooks | quality tiers auto-measure and step down (`QUALITY_NAMES`, downgrade on low FPS) |
| Mouse, keyboard **and** touch | keyboard in `engine.ts`, on-screen pedals in `Drive.tsx` (`TouchButton` → real `KeyboardEvent`s) |
| Landscape on desktop | game canvas is `100dvh` full-bleed, black bars are tolerated by the platform |
| Device detection from `systemInfo` | `cg.systemInfo` is read at init; the platform's `settings` drive hard mute |
| No long-press magnifier / text selection | `user-select: none`, `-webkit-touch-callout: none`, `touch-action: manipulation` in `index.html` |
| Safe areas (app, notched devices) | `.safe-inset` in `src/index.css` applied to the HUD and the menu banner; the pedals use `pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)]` |
| Resume audio after an iOS interruption | the engine resumes its `AudioContext` on every key and pointer gesture (`handleKey`, `onPointerDown`), and the pedals dispatch real key events |
| Sitelock / whitelisting | `public/_headers` + `vercel.json`: `frame-ancestors` lists every CrazyGames portal, `games.crazygames.com` and the `capacitor://app.crazygames.com` app origin |

## SDK

| Requirement | Where |
| --- | --- |
| SDK v3 loaded and initialised before the game starts | `index.html` script tag, `initCrazyGames()` in `src/main.tsx` |
| `gameplayStart` / `gameplayStop` | `src/pages/Drive.tsx` — `playing = started && !paused && panel === "none"` |
| `loadingStart` / `loadingStop` | `Drive.tsx` — stopped only when the world is really built, not when the menu appears |
| `happytime` | three drift milestones per session, deliberately rare |
| `reportGameCompletedPercentage` | `src/game/progress.ts` — cars driven + worlds opened, reported only when the number moves |
| `setGameContext` | world / car / room / driver count / quality, for test reports |
| Data module is the save | `cgGet` / `cgSet` / `cgRemove` in `src/lib/crazygames.ts`; localStorage is only the fallback |
| Account integration (username, avatar, no sign-up) | `src/hooks/use-driver.ts`: a logged-in CrazyGames player *is* the driver, the door screen never appears, and a mid-session login is adopted without a reload. Playing without an account is always allowed. |
| Video ads — midgame | one request at the natural break when a run ends (`endRun`), pre-paused and pre-muted |
| Video ads — rewarded | opt-in from the pause screen only: 2× drift points for 10 minutes. Nothing in the game is locked behind it. |
| Banners | menu screens only, container present at its real size before the request, cleared the instant play starts — never over the road |
| Adblockers must not break the game | `hasAdblock()` is informational only, and every SDK call is wrapped: a hostile SDK still leaves the game running |
| Instant multiplayer + invites | `updateRoom` / `leftRoom` / `onJoinRoom` / `getInviteParam` / `isInstantMultiplayer` — a friend can join from the CrazyGames UI while the player is still in the garage |
| No cross-promotion | the "Open editor" link in `src/instrumentation.tsx` is only rendered on the build host, never on a game host |

## Gameplay & consent

- **No login wall.** The door takes a pseudonym (or the platform username) and
  nothing else: no email, no password, no session. It is remembered, so repeat
  visits go straight into the garage.
- **One interaction before play.** Typing the pseudonym *is* the click the
  platform allows; on CrazyGames the engine starts rolling with it and the
  garage stays one tap away.
- **Personal data.** The only data kept is the pseudonym plus the multiplayer
  position the player streams while a room is open; both are stated on the door
  screen. No analytics, no third-party trackers.

## Checks

```bash
bun tsc -b --noEmit                        # types
CG_SCENARIO=crazygames bun src/tools/check-crazygames.ts
CG_SCENARIO=local      bun src/tools/check-crazygames.ts
CG_SCENARIO=disabled   bun src/tools/check-crazygames.ts
CG_SCENARIO=hostile    bun src/tools/check-crazygames.ts   # every SDK method throws
bun src/tools/check-maps.ts                # the city is drivable
bun src/tools/check-rig.ts                 # car orientation / wheels
bun run build:cg                           # the uploadable bundle → isolate/
```

## Submitting

1. `bun run build:cg` — writes the standalone build (relative base, no dev
   server) into `isolate/`.
2. Zip the **contents** of `isolate/` (`index.html` at the root of the zip).
3. Upload it in the CrazyGames developer portal.

Note on sitelock: an uploaded file bundle is served from
`game-files.crazygames.com`, where `public/_headers` is not read. The
documented alternative is a JavaScript hostname check, which is deliberately
**not** implemented here: it would blank the game on the owner's own domain and
on the preview host, which the owner uses every day.
