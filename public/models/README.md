# Your car models go here

Drop a `.glb` in this folder and it is served at `/models/<file>.glb` — no CDN,
no CORS, no third party. Then add one entry to `src/game/carmodels.ts`:

```ts
{
  id: "my-car",                       // unique key, used in saved runs
  name: "MY CAR",                     // shown in the garage
  klass: "Track special",
  detail: "My own model",
  url: "/models/my-car.glb",          // the file you just copied
  bytes: 4200000,                     // shown on the card
  author: "me",
  license: "CC0",
  physics: { ...P.GT, name: "MY CAR", mass: 1180, torqueNm: 780, grip: 1.42 },
}
```

That is the whole job: the wheels are found by name and rigged onto the real
suspension, the body is measured and scaled to the wheelbase of its physics
block, and it appears in the garage for every player.

Whether a model is dropped in here or fetched from a CDN, players cannot add,
replace or import one themselves: the library above is the only list.
