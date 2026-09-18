# Your car models go here

Drop a `.glb` in this folder and it is served at `models/<file>.glb` — no CDN,
no CORS, no third party. Then add one entry to `src/game/carmodels.ts`:

```ts
{
  id: "my-car",                       // unique key, used in saved runs
  name: "MY CAR",                     // shown in the garage
  klass: "Track special",
  detail: "My own model",
  url: "models/my-car.glb",           // the file you just copied (no leading /)
  bytes: 4200000,                     // shown on the card
  author: "me",
  license: "CC0",
  physics: { ...P.GT, name: "MY CAR", mass: 1180, torqueNm: 780, grip: 1.42 },
}
```

That is the whole job: the wheels are found by name and rigged onto the real
suspension, the body is measured and scaled to the wheelbase of its physics
block, and it appears in the garage for every player.

## The old shipped cars are gone

`ferrari-458.glb`, `khr-concept.glb` and `street-sedan.glb` were removed at the
owner's request — the garage now carries only what is imported on /import.
Anything dropped in this folder and registered in `src/game/carmodels.ts` is
served locally, which is what a CrazyGames build requires: no cross-origin
fetch, no third-party host that can disappear.

Players still cannot add, replace or import a car themselves: the library in
`src/game/carmodels.ts` is the only list. Cars the owner imports from `/import`
are uploaded to the server's storage and are appended at runtime — those are the
only entries that live outside the bundle.
