# Your bridge, in the map

Drop your bridge model in **this folder**, then rebuild the map. It is baked
into RIVERBEND in place of one of its river crossings — not as a prop beside the
road, but as the road itself:

* its **roadway becomes drivable ground** and its railings, towers and pylons
  become walls, exactly like the bridges the map builds from code;
* it keeps the **colours you modelled it in** (a map carries no images, so
  textures are dropped — see *What is kept* below);
* it costs **one draw call per material**, like the rest of the city, and
  nothing loads at run time.

The model never ships on its own. What ships is the map it was melted into.

## Dropping it in

Put **one** model file here, named anything:

```
tools/bridge/my-bridge.glb
```

Accepted: `.glb` `.gltf` `.fbx` `.obj` `.stl` `.dae`, or any of those (with
their loose textures and `.bin` files) inside a `.zip`. If several models are
here, the most useful format wins — `.glb` first — and the largest file of that
format. A `.glb` is what you should send if you can: it carries everything.

Then rebuild (in Freebuff you do not run these yourself — drop the model here,
or send it over, and ask for the map to be rebuilt):

```bash
bun run tools/build-riverbend.mjs     # writes public/maps/riverbend.glb
bun run src/tools/check-maps.ts       # proves the deck is drivable
```

With no model in this folder nothing changes and the map builds exactly as
before, so it is always safe to delete the file and rebuild.

## Placing it: `bridge.json` (optional)

Drop a `bridge.json` beside the model when the automatic fit needs a nudge.
Every key is optional; the builder prints what it decided, so the log tells you
what to change.

```json
{
  "file": "my-bridge.glb",
  "crossing": 0,
  "turn": 90,
  "fit": "length",
  "deck": 0.92,
  "lift": 0.4,
  "material": "concrete"
}
```

| key | what it does |
| --- | --- |
| `file` | the model, relative to this folder or to the project root. Default: the only model here |
| `crossing` | which crossing it takes over: an `x` from the map's own list (`-640`, `-300`, `0`, `320`, `640`, `820`), a list of them, or `"all"`. Default: `0`, the middle one downtown |
| `turn` | degrees to turn the model about the vertical axis before fitting, for a model authored facing another way |
| `fit` | how the single scale is chosen: `"length"` spans bank to bank (default), `"water"` spans the river only, `"width"` matches the road's width, `"none"` keeps the model's own units |
| `scale` | an explicit scale, which overrides `fit` |
| `deck` | where the roadway sits in the model, `0..1` of its height. Default: measured (see below) |
| `lift` | metres added to the deck height, for a last nudge |
| `material` | draw the whole bridge as one of the map's own materials — `asphalt`, `concrete`, `steel`, `brick`, `tile`, `sand`, `grass`, … — instead of the model's colours |

The model is **never stretched**: one uniform scale is chosen, so a bridge is
either in proportion or it does not fit. `fit: "width"` on a long bridge will
therefore leave it spanning more or less river than the crossing.

## What the builder works out for you

* **Which way it faces** — the model is turned so its longest side runs across
  the river, on top of whatever `turn` says.
* **Where its roadway is** — a bridge is mostly floor, so the highest band of
  upward faces carrying the bulk of the model's floor area *is* the deck; a
  railing's top rail never is. That band is dropped onto the same deck height as
  every other bridge in the map, so your bridge and the approaches either side
  of it line up. Set `deck` yourself if the model has more than one big flat
  level (a two-deck bridge, a bridge with a large flat roof, or a model that is
  one plain slab and reads fine already).

## What is kept, and what is not

* **Kept**: geometry, node transforms, and each material's base colour, surface
  roughness and metalness.
* **Dropped**: textures, animation, lighting, transparency (a glass part arrives
  solid) and any material feature the map's own materials do not have. The map
  is one GLB with no images in it — its textures come from `public/tex/` by
  material name (`src/game/worlddress.ts`) — so a bridge baked with its own
  images would break that, and an 8K import would arrive as a 400 MB map.
* **Cut off at the riverbed**: piers and foundations modelled below it are
  trimmed away there. They are never seen (the bed is opaque) and left in they
  would drag the map's own origin — and with it every prop, spawn and height in
  the city — down to the end of the deepest pier. The log says how many
  triangles that took.

## When something goes wrong

* **Draco-compressed glTF** (`.glb`/`.gltf` with `KHR_draco_mesh_compression`)
  is decoded with the decoder the game already ships, so it should just work. If
  it does not, re-export without compression.
* **`.dae` / Collada** needs a browser to parse and will usually fail here.
  Export a `.glb` instead.
* **`.fbx`** opens, but a binary FBX with its textures embedded may not.
  Export a `.glb` if the builder complains.
* **It looks wrong** — the log prints the turn, scale, span, width and height it
  chose, plus a warning when something is suspicious (a model in millimetres, a
  bridge far wider than its road, an unholy triangle count). Adjust `turn`,
  `deck`, `lift`, `fit` or `crossing` in `bridge.json` and rebuild.
