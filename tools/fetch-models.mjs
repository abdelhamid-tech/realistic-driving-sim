/**
 * REAL MODELS — every prop the street stands on, downloaded from the web.
 *
 *   bun run tools/fetch-models.mjs                 # everything still missing
 *   bun run tools/fetch-models.mjs --only=tree-cherry
 *   bun run tools/fetch-models.mjs --source=3dassets
 *   bun run tools/fetch-models.mjs --force         # re-download and re-bake
 *   bun run tools/fetch-models.mjs --list
 *
 *   → public/models/real/<slug>.glb   (one file, textures inside)
 *   → public/models/real/CREDITS.md   (author, licence and source, every one)
 *   → public/models/real/manifest.json
 *
 * WHERE THEY COME FROM
 * --------------------
 * · 3dassets.dev — a CC0 catalogue built to be used by agents: every asset has
 *   a public CDN URL that needs no key, no login and no Draco/KTX2 decoder, and
 *   every model is validated, web-optimised and metre-scaled. Street furniture,
 *   shopfronts, planting, the traffic signals (head, lenses and visors as
 *   separate materials, which is what makes a light that can change), and the
 *   vehicles. Their REST API is at https://3dassets.dev/api/v1.
 * · Poly Haven — scanned and photogrammetry assets, all CC0: the street trees,
 *   the planting, the street lamps, the shutters and hydrants, and the real
 *   ground textures the map wears. Fetched through their files API, which
 *   returns the .gltf plus every .bin and map it needs.
 * · Poly Pizza — the Google Poly archive under CC-BY: extra signal heads.
 *
 * WHAT IT DOES TO THEM
 * --------------------
 * The scans are authored for offline rendering: one scanned fir tree is seven
 * million triangles, and this game stands a thousand trees on the street. So
 * every model goes through gltf-transform (`bunx gltf-transform`):
 *
 *   copy        pack the .gltf + .bin + maps into one .glb
 *   simplify    collapse to the triangle budget in the table below
 *   dequantize  the CDN's 16-bit vertices back to plain float, so every model
 *               in this folder is readable by the same loader and the same
 *               tools (src/tools/check-props.ts reads their vertices)
 *   resize      no texture larger than 512 px
 *   webp        photo maps to WebP — a tenth of the size, with alpha
 *   prune       drop everything now unused
 *
 * Nothing here is drawn, invented or re-styled by the game: only downloaded,
 * and made small enough to drive past.
 */

import { execFileSync } from "node:child_process";
import {
  copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync,
} from "node:fs";
import { basename, join } from "node:path";

const UA = "freebuff-asset-fetch/1.0 (offline city game; contact: project owner)";
const OUT = "public/models/real";
const CACHE = "tools/.cache/models";

/* ------------------------------------------------------------------ the list
 *  `tris` is the budget a scanned model is simplified to (`0` = ship as it
 *  comes). `slot` is the prop slot in src/game/props.ts it belongs to.
 * ---------------------------------------------------------------------------*/

const MODELS = [
  /* ================================================================ trees
   *  Scanned street trees from Poly Haven, plus the climate kits from
   *  3dassets — blossom, coppice, parkland broadleaf. Every one is a real
   *  model with real bark and leaf photography. */
  {
    slug: "tree-jacaranda", source: "polyhaven", id: "jacaranda_tree", res: "1k", tris: 11000,
    slot: "tree", name: "Jacaranda (scanned)",
    credit: "Rico Cilliers / Rob Tuytel · Poly Haven",
  },
  {
    slug: "tree-island", source: "polyhaven", id: "island_tree_02", res: "1k", tris: 10000,
    slot: "tree", name: "Island tree (scanned)",
    credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-small", source: "polyhaven", id: "tree_small_02", res: "1k", tris: 9000,
    slot: "tree", name: "Small street tree (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-conifer", source: "polyhaven", id: "fir_sapling", res: "1k", tris: 9000,
    slot: "tree", name: "Conifer (scanned)",
    credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-park", source: "polyhaven", id: "searsia_lucida", res: "1k", tris: 10000,
    slot: "tree", name: "Parkland tree (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-dry", source: "polyhaven", id: "quiver_tree_01", res: "1k", tris: 9000,
    slot: "tree", name: "Quiver tree (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-cherry", source: "3dassets", asset: "japanese-school-and-city-street-cherry-tree-blossom-618a9f6d",
    slot: "tree", name: "Cherry tree in blossom",
    credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "tree-wild-cherry", source: "3dassets", asset: "temperate-forest-ecology-wild-cherry-mature-ca5ccec9",
    slot: "tree", name: "Wild cherry",
    credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "tree-hazel", source: "3dassets", asset: "temperate-forest-ecology-hazel-coppice-stool-4ae89da0",
    slot: "tree", name: "Hazel coppice",
    credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "tree-broadleaf", source: "3dassets", asset: "city-park-and-playground-park-tree-broadleaf-0d7e2fa1",
    slot: "tree", name: "Park broadleaf",
    credit: "3D Assets · 3dassets.dev",
  },

  /* ============================================================= planting */
  {
    slug: "plant-shrub-a", source: "polyhaven", id: "shrub_01", res: "1k", tris: 6000,
    slot: "plant", name: "Flowering shrub (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-shrub-b", source: "polyhaven", id: "shrub_02", res: "1k", tris: 7000,
    slot: "plant", name: "Shrub (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-shrub-c", source: "polyhaven", id: "shrub_04", res: "1k", tris: 7000,
    slot: "plant", name: "Bushy shrub (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-fern", source: "polyhaven", id: "fern_02", res: "1k", tris: 6000,
    slot: "plant", name: "Fern (scanned)", credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-nettle", source: "polyhaven", id: "nettle_plant", res: "1k", tris: 6000,
    slot: "plant", name: "Nettle (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-weed", source: "polyhaven", id: "weed_plant_02", res: "1k", tris: 6000,
    slot: "plant", name: "Weeds (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-grass", source: "polyhaven", id: "grass_medium_01", res: "1k", tris: 6000,
    slot: "plant", name: "Grass clump (scanned)",
    credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-flower-a", source: "polyhaven", id: "flower_gazania", res: "1k", tris: 6000,
    slot: "plant", name: "Gazania (scanned)",
    credit: "James Ray Cock / Jenelle van Heerden · Poly Haven",
  },
  {
    slug: "plant-flower-b", source: "polyhaven", id: "flower_ursinia", res: "1k", tris: 7000,
    slot: "plant", name: "Ursinia (scanned)",
    credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "plant-dandelion", source: "polyhaven", id: "dandelion_01", res: "1k", tris: 6000,
    slot: "plant", name: "Dandelion (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-hedge", source: "3dassets", asset: "city-park-and-playground-hedge-section-c1ff730d",
    slot: "plant", name: "Clipped hedge", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "plant-meadow", source: "3dassets", asset: "alpine-and-arctic-biomes-alpine-meadow-tuft-2cc5d54a",
    slot: "plant", name: "Meadow tuft", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "plant-rose", source: "3dassets", asset: "alpine-and-arctic-biomes-alpine-rose-53142521",
    slot: "plant", name: "Wild rose", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "plant-flower-bed", source: "3dassets", asset: "city-park-and-playground-flower-bed-70ea69ff",
    slot: "plant", name: "Flower bed", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "plant-tussock", source: "3dassets", asset: "safari-camp-and-bush-lodge-grass-tuft-cluster-8eaa2b17",
    slot: "plant", name: "Tussock grass", credit: "3D Assets · 3dassets.dev",
  },

  /* ========================================================= street lamps */
  {
    slug: "lamp-street-a", source: "polyhaven", id: "street_lamp_01", res: "1k", tris: 26000,
    slot: "lamp", name: "Street lamp 01", credit: "Josh Dean · Poly Haven",
  },
  {
    slug: "lamp-street-b", source: "polyhaven", id: "street_lamp_02", res: "1k", tris: 18000,
    slot: "lamp", name: "Street lamp 02", credit: "Josh Dean · Poly Haven",
  },
  {
    slug: "lamp-street-c", source: "3dassets", asset: "bus-station-and-city-transit-street-lamp-2c6420cf",
    slot: "lamp", name: "Transit street lamp", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "lamp-street-d", source: "3dassets", asset: "canal-town-and-windmill-town-street-lamp-2c561969",
    slot: "lamp", name: "Canal-side street lamp", credit: "3D Assets · 3dassets.dev",
  },

  /* ==================================== traffic signals — the lens materials
   *  These are the ones that can actually change: the head, the housing and
   *  each of the three lenses are separate materials, so the game lights them
   *  by name (see LENS_COLOURS in src/game/props.ts). */
  {
    slug: "signal-transit", source: "3dassets", asset: "bus-station-and-city-transit-traffic-light-4b8313ca",
    slot: "signal", lenses: { red: "crimson", amber: "canary", green: "azure" },
    name: "Traffic signal (three-aspect)", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "signal-stoplight", source: "polypizza", page: "https://poly.pizza/m/3suiQY-gArw",
    slot: "signal", name: "Stoplight (Google Poly)", credit: "Poly by Google", license: "CC-BY 3.0",
  },

  /* ============================================== the buildings themselves
   *  What actually gets built onto a facade: a glazed shopfront bay, a
   *  retractable awning over it, a roller shutter, the window bays above, a
   *  fire escape, the gutters and downpipes, the air duct, the junction
   *  cabinet, the hydrant on the kerb, the manhole in the road. */
  {
    slug: "shop-glazed-bay", source: "3dassets", asset: "laundrette-and-cleaning-shopfront-module-glazed-94b928a6",
    slot: "shopfront", name: "Glazed shopfront bay", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "shop-cafe-bay", source: "3dassets", asset: "bakery-and-cafe-shopfront-window-module-0d3000e9",
    slot: "shopfront", name: "Cafe shopfront bay", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "shop-pier", source: "3dassets", asset: "retail-store-fixtures-and-mall-shopfront-pier-module-420463fc",
    slot: "shopfront", name: "Shopfront pier", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "shop-shutter", source: "polyhaven", id: "rollershutter_door", res: "1k", tris: 1400,
    slot: "shutter", name: "Roller shutter door", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "window-bay", source: "3dassets", asset: "halloween-slasher-street-upper-floor-window-bay-67f7d3d8",
    slot: "window", name: "Upper-floor window bay", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "window-stillhouse", source: "3dassets", asset: "distillery-and-bonded-warehouse-stillhouse-window-bay-78539d82",
    slot: "window", name: "Stillhouse window bay", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "window-shutter", source: "polyhaven", id: "rollershutter_window_01", res: "1k", tris: 1600,
    slot: "window", name: "Roller shutter window", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "door-warehouse", source: "3dassets", asset: "distillery-and-bonded-warehouse-warehouse-door-pair-3108b2f4",
    slot: "door", name: "Warehouse door pair", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "wall-fire-escape", source: "polyhaven", id: "modular_fire_escape", res: "1k", tris: 11000,
    slot: "fireescape", name: "Fire escape", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-gutter", source: "polyhaven", id: "modular_metal_gutter", res: "1k", tris: 11000,
    slot: "gutter", name: "Gutter and downpipe", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-duct", source: "polyhaven", id: "modular_airduct_circular_01", res: "1k", tris: 9000,
    slot: "duct", name: "Air duct", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-pipes", source: "polyhaven", id: "modular_industrial_pipes_01", res: "1k", tris: 9000,
    slot: "pipes", name: "Industrial pipes", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "roof-vent", source: "3dassets", asset: "distillery-and-bonded-warehouse-pagoda-roof-vent-a6001cc0",
    slot: "roofvent", name: "Roof kiln vent", credit: "3D Assets · 3dassets.dev",
  },

  /* ======================================================= street furniture */
  {
    slug: "street-bench", source: "3dassets", asset: "city-park-and-playground-park-bench-dfa5e953",
    slot: "bench", name: "Park bench", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "street-bin", source: "3dassets", asset: "motorway-services-and-truck-park-car-park-litter-bin-1c2ec83d",
    slot: "bin", name: "Litter bin", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "street-dumpster", source: "3dassets", asset: "battle-royale-town-and-airfield-dumpster-dfad923c",
    slot: "dumpster", name: "Dumpster", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "street-planter", source: "polyhaven", id: "planter_box_02", res: "1k", tris: 11000,
    slot: "planter", name: "Planter box", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-awning", source: "3dassets", asset: "bakery-and-cafe-awning-retractable-003d560f",
    slot: "awning", name: "Retractable awning", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "street-parasol", source: "3dassets", asset: "golf-course-and-clubhouse-course-parasol-36607444",
    slot: "parasol", name: "Parasol", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "street-fence", source: "polyhaven", id: "modular_chainlink_fence", res: "1k", tris: 12000,
    slot: "fence", name: "Chainlink fence", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-cone", source: "3dassets", asset: "motorway-services-and-truck-park-traffic-cone-338a0889",
    slot: "cone", name: "Traffic cone", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "street-barrier", source: "polyhaven", id: "concrete_road_barrier_02", res: "1k", tris: 12000,
    slot: "barrier", name: "Concrete road barrier", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-bollard", source: "3dassets", asset: "car-park-and-road-vehicle-fleet-bollard-e7119d33",
    slot: "bollard", name: "Bollard", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "street-junction-box", source: "polyhaven", id: "utility_box_01", res: "1k", tris: 4000,
    slot: "utility", name: "Utility cabinet", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-junction-box-b", source: "polyhaven", id: "utility_box_02", res: "1k", tris: 5000,
    slot: "utility", name: "Utility cabinet, wide", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-hydrant", source: "polyhaven", id: "fire_hydrant", res: "1k", tris: 14000,
    slot: "hydrant", name: "Fire hydrant", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-manhole", source: "polyhaven", id: "water_manhole_cover", res: "1k", tris: 5000,
    slot: "manhole", name: "Manhole cover", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-wall-light", source: "polyhaven", id: "security_light", res: "1k", tris: 4000,
    slot: "walllight", name: "Wall light", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-bus-stop", source: "3dassets", asset: "bus-station-and-city-transit-bus-shelter-with-ad-panel-3a7216ac",
    slot: "busstop", name: "Bus shelter", credit: "3D Assets · 3dassets.dev",
  },

  /* =============================================================== vehicles
   *  The traffic that drives past: a real modelled car and SUV, and a tram for
   *  the rails. */
  {
    slug: "car-city", source: "3dassets", asset: "car-park-and-road-vehicle-fleet-city-car-033e3215",
    slot: "vehicle", name: "City car", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "car-suv", source: "3dassets", asset: "car-park-and-road-vehicle-fleet-city-suv-427b6f75",
    slot: "vehicle", name: "City SUV", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "van-response", source: "3dassets", asset: "fire-and-emergency-services-fast-response-car-0ec65a15",
    slot: "vehicle", name: "Fast response car", credit: "3D Assets · 3dassets.dev",
  },
  {
    slug: "bus-city", source: "3dassets", asset: "voxel-city-districts-city-bus-b39a97a5",
    slot: "vehicle", name: "City bus", credit: "3D Assets · 3dassets.dev",
  },
];

/* --------------------------------------------------------------- plumbing */

const argv = process.argv.slice(2);
const only = argv.filter((a) => a.startsWith("--only")).map((a) => a.split("=")[1]).filter(Boolean);
const source = argv.find((a) => a.startsWith("--source="))?.split("=")[1];
const force = argv.includes("--force");
const list = argv.includes("--list");

if (list) {
  for (const m of MODELS) {
    console.log(
      `${m.slug.padEnd(22)} ${String(m.source).padEnd(10)} ${String(m.slot).padEnd(10)} ` +
        `${String(m.tris || "-").padStart(6)} tris  ${m.name}`,
    );
  }
  process.exit(0);
}

const todo = MODELS.filter((m) => (!only.length || only.includes(m.slug)) && (!source || m.source === source));
if (!todo.length) {
  console.error(`no model matches ${[...only, source && `--source=${source}`].filter(Boolean).join(", ")}`);
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, tries = 3) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": UA } });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res;
    } catch (err) {
      last = err;
      await sleep(600 * (i + 1));
    }
  }
  throw new Error(`${url}: ${last?.message ?? last}`);
}

async function download(url, dest, cacheOk = true) {
  mkdirSync(join(dest, ".."), { recursive: true });
  if (cacheOk && existsSync(dest) && !force) return dest;
  const res = await get(url);
  writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  return dest;
}

/** One gltf-transform step; the CLI is a devDependency (see package.json). */
function transform(args) {
  execFileSync("bunx", ["gltf-transform", ...args], { stdio: ["ignore", "ignore", "inherit"] });
}

/** Every file under a folder, as paths relative to it. */
function readdirRecursive(dir, prefix = "") {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...readdirRecursive(join(dir, entry.name), rel));
    else out.push(rel);
  }
  return out;
}

/* ------------------------------------------------------------ where from */

/**
 * Poly Haven: the .gltf, its .bin and every texture it names, keeping the
 * folder layout the .gltf's relative URIs expect.
 */
async function fetchPolyHaven(model) {
  const dir = join(CACHE, model.slug);
  const marker = join(dir, ".done");
  if (!existsSync(marker) || force) {
    rmSync(dir, { recursive: true, force: true });
    const files = await (await get(`https://api.polyhaven.com/files/${model.id}`)).json();
    const set = files?.gltf?.[model.res]?.gltf;
    if (!set?.url) throw new Error(`${model.id}: no ${model.res} gltf in the files API`);
    await download(set.url, join(dir, basename(set.url)));
    for (const [rel, info] of Object.entries(set.include ?? {})) {
      await download(info.url, join(dir, rel));
    }
    writeFileSync(marker, new Date().toISOString());
  }
  const gltfs = readdirRecursive(dir).filter((f) => f.endsWith(".gltf"));
  if (!gltfs.length) throw new Error(`${model.slug}: no .gltf came down`);
  return join(dir, gltfs[0]);
}

/** 3dassets.dev: one immutable CDN URL per asset, CC0, no key. */
async function fetch3dAssets(model) {
  const dest = join(CACHE, `${model.slug}.glb`);
  if (existsSync(dest) && !force) return dest;
  const meta = await (await get(`https://3dassets.dev/api/v1/assets/${model.asset}`)).json();
  const a = meta?.data ?? meta;
  const url = a?.cdnUrl;
  if (!url) throw new Error(`${model.asset}: no cdnUrl in the catalogue`);
  /* keep the catalogue's own credit and licence where it has one */
  model.credit = a.contributor?.name ? `${model.credit}` : model.credit;
  model.license = a.license?.attributionRequired ? `${a.license.name}` : "CC0 1.0 Universal";
  model.tris_source = a.stats?.triangles;
  await download(url, dest, false);
  return dest;
}

/** Poly Pizza: the model's static file is in the page's player markup. */
async function fetchPolyPizza(model) {
  const dest = join(CACHE, `${model.slug}.glb`);
  if (existsSync(dest) && !force) return dest;
  const html = await (await get(model.page)).text();
  const url = html.match(/https:\/\/static\.poly\.pizza\/[0-9a-f-]+\.glb\b/)?.[0];
  if (!url) throw new Error(`${model.page}: no model file in the page`);
  await download(url, dest, false);
  return dest;
}

const FETCHERS = { polyhaven: fetchPolyHaven, "3dassets": fetch3dAssets, polypizza: fetchPolyPizza };

/* --------------------------------------------------------------- the bake */

/** Triangles, textures and material names of a finished GLB. */
function stats(glb) {
  const bytes = readFileSync(glb);
  const jsonLen = bytes.readUInt32LE(12);
  const json = JSON.parse(bytes.subarray(20, 20 + jsonLen).toString("utf8"));
  let tris = 0;
  for (const mesh of json.meshes ?? []) {
    for (const prim of mesh.primitives ?? []) {
      const acc = json.accessors?.[prim.indices];
      const pos = json.accessors?.[prim.attributes?.POSITION];
      tris += Math.round((acc?.count ?? pos?.count ?? 0) / 3);
    }
  }
  return {
    tris,
    materials: (json.materials ?? []).map((m) => m.name).filter(Boolean),
    textures: (json.textures ?? []).length,
    kilobytes: Math.round(statSync(glb).size / 1024),
  };
}

function polyTris(path) {
  if (path.endsWith(".glb")) return stats(path).tris;
  const json = JSON.parse(readFileSync(path, "utf8"));
  let tris = 0;
  for (const mesh of json.meshes ?? []) {
    for (const prim of mesh.primitives ?? []) {
      const acc = json.accessors?.[prim.indices];
      const pos = json.accessors?.[prim.attributes?.POSITION];
      tris += Math.round((acc?.count ?? pos?.count ?? 0) / 3);
    }
  }
  return tris;
}

async function bake(model) {
  const { slug } = model;
  const final = join(OUT, `${slug}.glb`);
  if (existsSync(final) && !force) {
    const s = stats(final);
    console.log(`  = ${slug.padEnd(22)} ${String(s.tris).padStart(6)} tris, ${String(s.kilobytes).padStart(5)} KB  (already baked)`);
    return { ...model, ...s };
  }

  const input = await FETCHERS[model.source](model);
  const stage = join(CACHE, `${slug}.stage`);
  rmSync(stage, { recursive: true, force: true });
  mkdirSync(stage, { recursive: true });

  /* 1. one file: the .gltf and everything beside it becomes a GLB */
  const packed = join(stage, "packed.glb");
  transform(["copy", input, packed]);

  /* 2. down to the triangle budget. `simplify` stops at the error limit, so
        the ratio is the target and the error is what it may spend reaching it
        — foliage scans need a generous one. Models that ship small enough are
        left exactly as their author made them. */
  const from = polyTris(input);
  const ratio = model.tris && from > model.tris ? Math.max(model.tris / from, 0.0005) : 1;
  const simplified = join(stage, "simplified.glb");
  if (ratio < 1) {
    transform(["simplify", packed, simplified, "--ratio", String(ratio), "--error", "0.02"]);
  } else {
    copyFileSync(packed, simplified);
  }

  /* 3. plain float vertices (the CDN ships 16-bit), maps no larger than 512,
        as WebP, then drop what is left unused */
  const plain = join(stage, "plain.glb");
  transform(["dequantize", simplified, plain]);
  const resized = join(stage, "resized.glb");
  transform(["resize", plain, resized, "--width", "512", "--height", "512", "--pattern", "*"]);
  const webp = join(stage, "webp.glb");
  transform(["webp", resized, webp, "--quality", "82"]);
  const pruned = join(stage, "pruned.glb");
  transform(["prune", webp, pruned]);

  mkdirSync(OUT, { recursive: true });
  copyFileSync(pruned, final);
  const s = stats(final);
  console.log(
    `  + ${slug.padEnd(22)} ${String(from).padStart(8)} → ${String(s.tris).padStart(6)} tris, ` +
      `${String(s.kilobytes).padStart(5)} KB, ${s.textures} maps, ${s.materials.length} materials`,
  );
  return { ...model, ...s };
}

/* ---------------------------------------------------------------- the run */

console.log(`fetching ${todo.length} real model${todo.length === 1 ? "" : "s"} → ${OUT}/\n`);
for (const model of todo) {
  try {
    await bake(model);
  } catch (err) {
    console.error(`  ! ${model.slug}: ${err.message}`);
  }
}

/* The credits are rebuilt from the whole table, so a partial run never loses
   the record of what is already vendored. */
const rows = [];
for (const model of MODELS) {
  const file = join(OUT, `${model.slug}.glb`);
  if (!existsSync(file)) continue;
  rows.push({ ...model, ...stats(file), bytes: statSync(file).size });
}
rows.sort((a, b) => a.slug.localeCompare(b.slug));

const sourceUrl = (r) =>
  r.source === "polyhaven"
    ? `https://polyhaven.com/a/${r.id}`
    : r.source === "3dassets"
      ? `https://3dassets.dev/assets/${r.asset}`
      : r.page;

writeFileSync(
  join(OUT, "manifest.json"),
  JSON.stringify(
    {
      generated: new Date().toISOString(),
      note: "Real models downloaded from the web and optimised for the game. See CREDITS.md.",
      models: rows.map((r) => ({
        slug: r.slug,
        slot: r.slot,
        name: r.name,
        author: r.credit,
        license: r.license ?? "CC0 1.0 Universal",
        source: r.source,
        sourceUrl: sourceUrl(r),
        file: `models/real/${r.slug}.glb`,
        triangles: r.tris,
        kilobytes: r.kilobytes,
        materials: r.materials,
        ...(r.lenses ? { lenses: r.lenses } : {}),
      })),
    },
    null,
    2,
  ) + "\n",
);

writeFileSync(
  join(OUT, "CREDITS.md"),
  [
    "# Real models",
    "",
    "Every prop and every tree in this game is a model somebody else made and",
    "published. `tools/fetch-models.mjs` downloads them, gltf-transform makes them",
    "small enough to drive past, and the game draws them. Nothing here was drawn",
    "by the game.",
    "",
    "| Model | Slot | Author | Licence | Source | Triangles |",
    "| --- | --- | --- | --- | --- | --- |",
    ...rows.map(
      (r) =>
        `| ${r.name} | \`${r.slot}\` | ${r.credit} | ${r.license ?? "CC0 1.0 Universal"} | ` +
        `[${r.source}](${sourceUrl(r)}) | ${r.tris} |`,
    ),
    "",
    "3dassets.dev and Poly Haven publish under **CC0 1.0 Universal**, so no",
    "attribution is legally required — it is here because the people who modelled",
    "and scanned these are why the city looks like anything at all. The Google Poly",
    "models come through Poly Pizza under **CC-BY 3.0**, which does require the",
    "credit above.",
    "",
    "Rebuild with `bun run tools/fetch-models.mjs`.",
    "",
  ].join("\n"),
);

console.log(`\n${rows.length} models in ${OUT}/  ·  CREDITS.md and manifest.json rewritten`);
