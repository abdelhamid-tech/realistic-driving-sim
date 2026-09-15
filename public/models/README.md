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

## The three shipped cars live here too

`ferrari-458.glb`, `khr-concept.glb` and `street-sedan.glb` are vendored in this
folder rather than pulled from a CDN. That is deliberate: a game on CrazyGames
has to load from files in its own bundle, a third-party host can disappear or
throttle, and a cross-origin fetch is one more thing that can fail on a player's
machine. Nothing in the game reaches outside this bundle for a model.

Players still cannot add, replace or import a car themselves: the library in
`src/game/carmodels.ts` is the only list. Cars the owner imports from `/import`
are uploaded to the server's storage and are appended at runtime — those are the
only entries that live outside the bundle.
