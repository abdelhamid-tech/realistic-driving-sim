# The street furniture of the world

These are the real models the game stands on the street — the trees, the
planting in the planters, the street lamps and the traffic lights. They are
instanced onto the spots the world recorded for them, so thousands of props
cost a handful of draw calls (see `src/game/props.ts`).

| Slot | Files | Drawn at | Source |
| --- | --- | --- | --- |
| `tree` | `tree-oak.glb`, `tree-detailed.glb`, `tree-pine.glb` | 6.5 m | Kenney · Nature Kit |
| `plant` | `bush-detailed.glb`, `bush-large.glb`, `plant-flat.glb`, `flower-red.glb` | 1.05 m | Kenney · Nature Kit |
| `lamp` | `street-lamp.glb` | 7 m | Kenney · City Kit Roads |
| `signal` | `traffic-light.glb` | 5.6 m | Kenney · City Kit Roads |

Everything here is **CC0 (public domain)** — see `LICENSE-kenney-nature.txt`
and `LICENSE-kenney-roads.txt` next to the models. The roads kit models share
one atlas, `Textures/colormap.png`; keep it where it is.

## Which way a model faces

A world records a *facing* with every spot, and a facing is a compass bearing:
**yaw 0 points at +Z**, a quarter turn points at +X, and so on. A model has to
agree with that, so each variant may declare a `turn`, in degrees, applied
once before the spot's own yaw.

| Model | Where it looks | Turn |
| --- | --- | --- |
| `tree-*`, `bush-*`, `plant-flat`, `flower-red` | anywhere (they are scattered) | 0 |
| `street-lamp.glb` | its **arm** reaches down **-Z** | 0 — the city's lamp yaws are built for that |
| `traffic-light.glb` | its head plate looks down **-X** | **90°**, which points it at +Z |

`bun run src/tools/check-props.ts` reads these models' own vertices and checks
the result: that the signal's head ends up pointing where yaw 0 points, that
every lamp arm reaches over the road it stands beside, and that each junction
has exactly one light facing each of its four approaches.

## Replacing a model

Two ways, both without touching the engine:

1. **From the game** — open `/assets`, unlock it, and upload a `.glb` for a
   slot. It replaces that slot for *every* player, in every session, on the
   built-in city and on the shipped map. Any size works: the engine measures
   the model and scales it to the slot's height. If a model faces the wrong
   way, the turn box on the same row fixes it.
2. **In the bundle** — drop a `.glb` in this folder and add it to the slot's
   `variants` in `src/game/props.ts`. Several models in one slot are cycled
   across that slot's spots, which is what gives the street its variety.

The engine's prop spots come from the world itself: `src/game/city.ts` records
them as it builds the procedural city (`bun run src/tools/check-props.ts`
prints and verifies them), and `tools/build-riverbend.mjs` writes
`public/maps/riverbend.props.json` for the shipped map.
