/**
 * REAL MODELS — every prop the street stands on, downloaded from the web.
 *
 *   bun run tools/fetch-models.mjs            # everything still missing
 *   bun run tools/fetch-models.mjs --only tree-jacaranda
 *   bun run tools/fetch-models.mjs --force    # re-download and re-bake
 *   bun run tools/fetch-models.mjs --list
 *
 *   → public/models/real/<slug>.glb   (single file, textures inside)
 *   → public/models/real/CREDITS.md   (author, licence, source, for every one)
 *   → public/models/real/manifest.json
 *
 * WHERE THEY COME FROM
 * --------------------
 * · Poly Haven (polyhaven.com) — photogrammetry and scanned PBR assets, all
 *   CC0. Trees, planting, ground cover, street lamps, shutters, utility boxes,
 *   hydrants, gutters, ducts, manhole covers, road barriers. Downloaded
 *   through their public files API, which returns the .gltf plus every .bin
 *   and texture it needs.
 * · Poly Pizza (poly.pizza) — the Google Poly archive, CC-BY: the traffic
 *   signals (head, lenses and visors as separate parts, which is what makes a
 *   light that can actually change).
 *
 * WHAT IT DOES TO THEM
 * --------------------
 * The scans are authored for offline rendering: a single scanned fir tree is
 * seven million triangles and a megabyte of texture, and this game stands a
 * thousand trees on the street. So every model is put through gltf-transform
 * (`bunx gltf-transform`):
 *
 *   copy      pack the .gltf + .bin + maps into one .glb
 *   simplify  collapse to the triangle budget in the table below
 *   resize    no texture larger than 512 px
 *   webp      photo maps to WebP (a tenth of the size, alpha included)
 *   quantize  vertices to 16-bit, which is invisible at these distances
 *   prune     drop everything now unused
 *
 * The budgets are the point of the table: a street tree is ~9 000 triangles
 * and a lamp post ~20 000, so the whole city still fits in a frame budget.
 * Nothing else is authored, invented or re-drawn here — only downloaded and
 * made small enough to drive past.
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
 *  `tris` is the budget the model is simplified to, not the size it ships at:
 *  Poly Haven publishes the count, the tool prints what it lands on.
 * ---------------------------------------------------------------------------*/

const MODELS = [
  /* ---------------------------------------------------------------- trees */
  {
    slug: "tree-jacaranda", source: "polyhaven", id: "jacaranda_tree", res: "1k",
    tris: 11000, slot: "tree",
    name: "Jacaranda tree (scanned)", credit: "Rico Cilliers / Rob Tuytel · Poly Haven",
  },
  {
    slug: "tree-island", source: "polyhaven", id: "island_tree_02", res: "1k",
    tris: 10000, slot: "tree",
    name: "Island tree (scanned)", credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-small", source: "polyhaven", id: "tree_small_02", res: "1k",
    tris: 9000, slot: "tree",
    name: "Small street tree (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-conifer", source: "polyhaven", id: "fir_sapling", res: "1k",
    tris: 9000, slot: "tree",
    name: "Conifer sapling (scanned)", credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-park", source: "polyhaven", id: "searsia_lucida", res: "1k",
    tris: 10000, slot: "tree",
    name: "Park tree (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "tree-dry", source: "polyhaven", id: "quiver_tree_01", res: "1k",
    tris: 9000, slot: "tree",
    name: "Quiver tree (scanned)", credit: "Rico Cilliers · Poly Haven",
  },

  /* -------------------------------------------------------------- planting */
  {
    slug: "plant-shrub-a", source: "polyhaven", id: "shrub_01", res: "1k",
    tris: 6000, slot: "plant",
    name: "Flowering shrub (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-shrub-b", source: "polyhaven", id: "shrub_02", res: "1k",
    tris: 7000, slot: "plant",
    name: "Shrub (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-shrub-c", source: "polyhaven", id: "shrub_04", res: "1k",
    tris: 7000, slot: "plant",
    name: "Bushy shrub (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-fern", source: "polyhaven", id: "fern_02", res: "1k",
    tris: 6000, slot: "plant",
    name: "Fern (scanned)", credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-nettle", source: "polyhaven", id: "nettle_plant", res: "1k",
    tris: 6000, slot: "plant",
    name: "Nettle (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-weed", source: "polyhaven", id: "weed_plant_02", res: "1k",
    tris: 6000, slot: "plant",
    name: "Weeds (scanned)", credit: "Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-grass", source: "polyhaven", id: "grass_medium_01", res: "1k",
    tris: 6000, slot: "plant",
    name: "Grass clump (scanned)", credit: "Rob Tuytel / Rico Cilliers · Poly Haven",
  },
  {
    slug: "plant-flower-a", source: "polyhaven", id: "flower_gazania", res: "1k",
    tris: 6000, slot: "plant",
    name: "Gazania flowers (scanned)", credit: "James Ray Cock / Jenelle van Heerden · Poly Haven",
  },
  {
    slug: "plant-flower-b", source: "polyhaven", id: "flower_ursinia", res: "1k",
    tris: 7000, slot: "plant",
    name: "Ursinia flowers (scanned)", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "plant-dandelion", source: "polyhaven", id: "dandelion_01", res: "1k",
    tris: 6000, slot: "plant",
    name: "Dandelions (scanned)", credit: "Rico Cilliers · Poly Haven",
  },

  /* ---------------------------------------------------------- street lamps */
  {
    slug: "lamp-street-a", source: "polyhaven", id: "street_lamp_01", res: "1k",
    tris: 26000, slot: "lamp",
    name: "Street lamp 01", credit: "Josh Dean · Poly Haven",
  },
  {
    slug: "lamp-street-b", source: "polyhaven", id: "street_lamp_02", res: "1k",
    tris: 18000, slot: "lamp",
    name: "Street lamp 02", credit: "Josh Dean · Poly Haven",
  },

  /* ------------------------------------------------------------- signals
   *  The Google Poly archive: the stoplight is one model with the lenses as
   *  their own parts, so the game can light them (src/game/props.ts). */
  {
    slug: "signal-stoplight", source: "polypizza", page: "https://poly.pizza/m/3suiQY-gArw",
    tris: 4000, slot: "signal",
    name: "Stoplight (Google Poly)", credit: "Poly by Google", license: "CC-BY 3.0",
  },
  {
    slug: "signal-stoplight-b", source: "polypizza", page: "https://poly.pizza/m/bQnMHI0AYV5",
    tris: 4000, slot: "signal",
    name: "Traffic light (Google Poly)", credit: "Poly by Google", license: "CC-BY 3.0",
  },

  /* ------------------------------------------------------- the buildings
   *  What actually gets stuck on a facade: shutters over the shopfront, a
   *  fire escape, a gutter, a duct, an air-conditioning unit, a junction box,
   *  a hydrant on the kerb, a manhole in the road, a barrier where the road
   *  is being dug up. All real, all from Poly Haven. */
  {
    slug: "shop-shutter", source: "polyhaven", id: "rollershutter_door", res: "1k",
    tris: 1400, slot: "shutter",
    name: "Roller shutter door", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "shop-window", source: "polyhaven", id: "rollershutter_window_01", res: "1k",
    tris: 1600, slot: "window",
    name: "Roller shutter shop window", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "shop-window-b", source: "polyhaven", id: "rollershutter_window_03", res: "1k",
    tris: 1600, slot: "window",
    name: "Roller shutter window, tall", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-fire-escape", source: "polyhaven", id: "modular_fire_escape", res: "1k",
    tris: 11000, slot: "fireescape",
    name: "Fire escape", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-gutter", source: "polyhaven", id: "modular_metal_gutter", res: "1k",
    tris: 11000, slot: "gutter",
    name: "Gutter and downpipe", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-duct", source: "polyhaven", id: "modular_airduct_circular_01", res: "1k",
    tris: 9000, slot: "duct",
    name: "Air duct", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-pipes", source: "polyhaven", id: "modular_industrial_pipes_01", res: "1k",
    tris: 9000, slot: "pipes",
    name: "Industrial pipes", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-junction-box", source: "polyhaven", id: "utility_box_01", res: "1k",
    tris: 4000, slot: "utility",
    name: "Utility cabinet", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-junction-box-b", source: "polyhaven", id: "utility_box_02", res: "1k",
    tris: 5000, slot: "utility",
    name: "Utility cabinet, wide", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-hydrant", source: "polyhaven", id: "fire_hydrant", res: "1k",
    tris: 14000, slot: "hydrant",
    name: "Fire hydrant", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-manhole", source: "polyhaven", id: "water_manhole_cover", res: "1k",
    tris: 5000, slot: "manhole",
    name: "Manhole cover", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "street-barrier", source: "polyhaven", id: "concrete_road_barrier_02", res: "1k",
    tris: 12000, slot: "barrier",
    name: "Concrete road barrier", credit: "James Ray Cock · Poly Haven",
  },
  {
    slug: "wall-security-light", source: "polyhaven", id: "security_light", res: "1k",
    tris: 4000, slot: "walllight",
    name: "Security light", credit: "James Ray Cock · Poly Haven",
  },
];

/* --------------------------------------------------------------- plumbing */

const argv = process.argv.slice(2);
const only = argv.filter((a) => a.startsWith("--only")).map((a) => a.split("=")[1]).filter(Boolean);
const force = argv.includes("--force");
const list = argv.includes("--list");

if (list) {
  for (const m of MODELS) console.log(`${m.slug.padEnd(24)} ${m.slot.padEnd(10)} ${m.tris} tris  ${m.source}`);
  process.exit(0);
}

const todo = only.length ? MODELS.filter((m) => only.includes(m.slug)) : MODELS;
if (!todo.length) {
  console.error(`no model matches ${only.join(", ")}`);
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
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return dest;
}

/** Run one gltf-transform command; the CLI is a devDependency. */
function transform(args) {
  execFileSync("bunx", ["gltf-transform", ...args], { stdio: ["ignore", "ignore", "inherit"] });
}

/* --------------------------------------------------------- Poly Haven side */

/**
 * Download a Poly Haven model: the .gltf, its .bin and every texture it names,
 * keeping the folder layout the .gltf's relative URIs expect.
 */
async function fetchPolyHaven(model) {
  const dir = join(CACHE, model.slug);
  const marker = join(dir, ".done");
  if (!existsSync(marker) || force) {
    rmSync(dir, { recursive: true, force: true });
    const files = await (await get(`https://api.polyhaven.com/files/${model.id}`)).json();
    const set = files?.gltf?.[model.res]?.gltf;
    if (!set?.url) throw new Error(`${model.id}: no ${model.res} gltf in the files API`);
    /* the .gltf itself, then everything it includes (bin + maps) */
    const gltfUrl = set.url;
    await download(gltfUrl, join(dir, basename(gltfUrl)));
    const include = set.include ?? {};
    for (const [rel, info] of Object.entries(include)) {
      await download(info.url, join(dir, rel));
    }
    writeFileSync(marker, new Date().toISOString());
  }
  const names = readdirRecursive(dir).filter((f) => f.endsWith(".gltf"));
  if (!names.length) throw new Error(`${model.slug}: no .gltf came down`);
  return join(dir, names[0]);
}

/* -------------------------------------------------------- Poly Pizza side */

/**
 * A Poly Pizza model page carries the model's own static URL in its player
 * markup; the archive is CC-BY and the page names the author, which is what
 * ends up in CREDITS.md.
 */
async function fetchPolyPizza(model) {
  const dest = join(CACHE, `${model.slug}.glb`);
  if (existsSync(dest) && !force) return dest;
  const html = await (await get(model.page)).text();
  const url = html.match(/https:\/\/static\.poly\.pizza\/[0-9a-f-]+\.glb\b/)?.[0];
  if (!url) throw new Error(`${model.page}: no model file in the page`);
  /* the author is on the page too: "by <name>" next to the model title */
  const by = html.match(/"creator"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"/)?.[1];
  if (by && model.credit === "Poly by Google") model.credit = `${by} (Poly by Google)`;
  await download(url, dest, false);
  return dest;
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

/* ------------------------------------------------------------- the bake */

/** Triangles, textures and materials of a finished GLB, read from its JSON. */
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
    meshes: (json.meshes ?? []).map((m) => m.name).filter(Boolean),
    nodes: (json.nodes ?? []).map((n) => n.name).filter(Boolean),
    textures: (json.textures ?? []).length,
    kilobytes: Math.round(statSync(glb).size / 1024),
  };
}

async function bake(model) {
  const slug = model.slug;
  const final = join(OUT, `${slug}.glb`);
  if (existsSync(final) && !force) {
    const s = stats(final);
    console.log(`  = ${slug}  ${s.tris} tris, ${s.kilobytes} KB  (already baked)`);
    return { ...model, ...s, bytes: statSync(final).size };
  }

  const input = model.source === "polyhaven" ? await fetchPolyHaven(model) : await fetchPolyPizza(model);
  const stage = join(CACHE, `${slug}.stage`);
  rmSync(stage, { recursive: true, force: true });
  mkdirSync(stage, { recursive: true });

  /* 1. one file: the .gltf and everything beside it goes into a GLB */
  const packed = join(stage, "packed.glb");
  transform(["copy", input, packed]);

  /* 2. down to the triangle budget. `simplify` stops at the error limit, so
        the ratio is the target and the error is what it is allowed to spend
        getting there; foliage scans need a generous one. */
  const source = model.tris && model.tris > 0
    ? polyTris(input)
    : null;
  const ratio = source && source > model.tris ? Math.max(model.tris / source, 0.0005) : 1;
  const simplified = join(stage, "simplified.glb");
  if (ratio < 1) {
    transform(["simplify", packed, simplified, "--ratio", String(ratio), "--error", "0.02"]);
  } else {
    copyFileSync(packed, simplified);
  }

  /* 3. maps no larger than 512, as WebP, then 16-bit vertices */
  const resized = join(stage, "resized.glb");
  transform(["resize", simplified, resized, "--width", "512", "--height", "512", "--pattern", "*"]);
  const webp = join(stage, "webp.glb");
  transform(["webp", resized, webp, "--quality", "82"]);
  const quantized = join(stage, "quantized.glb");
  transform(["quantize", webp, quantized]);
  const pruned = join(stage, "pruned.glb");
  transform(["prune", quantized, pruned]);

  mkdirSync(OUT, { recursive: true });
  copyFileSync(pruned, final);
  const s = stats(final);
  console.log(
    `  + ${slug.padEnd(22)} ${String(model.tris).padStart(6)} tris budget → ${String(s.tris).padStart(6)} tris, ` +
      `${String(s.kilobytes).padStart(5)} KB, ${s.textures} textures, ${s.materials.length} materials`,
  );
  return { ...model, ...s, bytes: statSync(final).size };
}

/** Triangle count of a source file, for the simplify ratio. */
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

/* -------------------------------------------------------------- the run */

console.log(`fetching ${todo.length} real model${todo.length === 1 ? "" : "s"} → ${OUT}/\n`);
const done = [];
for (const model of todo) {
  try {
    done.push(await bake(model));
  } catch (err) {
    console.error(`  ! ${model.slug}: ${err.message}`);
  }
}

/* the credits file is rewritten from the whole table, so a partial run never
   loses the record of what is already vendored */
const rows = [];
for (const model of MODELS) {
  const file = join(OUT, `${model.slug}.glb`);
  if (!existsSync(file)) continue;
  const s = stats(file);
  rows.push({ ...model, ...s, bytes: statSync(file).size });
}
rows.sort((a, b) => a.slug.localeCompare(b.slug));

const manifest = {
  generated: new Date().toISOString(),
  note: "Real models downloaded from the web and optimised for the game. See CREDITS.md.",
  models: rows.map((r) => ({
    slug: r.slug,
    slot: r.slot,
    name: r.name,
    author: r.credit,
    license: r.license ?? "CC0 (public domain)",
    source: r.source === "polyhaven" ? `https://polyhaven.com/a/${r.id}` : r.page,
    file: `models/real/${r.slug}.glb`,
    triangles: r.tris,
    kilobytes: r.kilobytes,
    materials: r.materials,
  })),
};
writeFileSync(join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");

const credits = [
  "# Real models",
  "",
  "Every prop in this game is a model somebody else made and published, downloaded",
  "by `tools/fetch-models.mjs` and optimised for the street. Nothing here was",
  "drawn by the game.",
  "",
  "| Model | Author | Licence | Source | Triangles |",
  "| --- | --- | --- | --- | --- |",
  ...rows.map(
    (r) =>
      `| ${r.name} | ${r.credit} | ${r.license ?? "CC0 (public domain)"} | ` +
      `${r.source === "polyhaven" ? `[Poly Haven](https://polyhaven.com/a/${r.id})` : `[Poly Pizza](${r.page})`} | ${r.tris} |`,
  ),
  "",
  "Poly Haven publishes everything on it under CC0, so no attribution is legally",
  "required — it is here because the people who scanned these made the city.",
  "The Google Poly models come through Poly Pizza under CC-BY 3.0, which does",
  "require the credit above.",
  "",
];
writeFileSync(join(OUT, "CREDITS.md"), credits.join("\n"));

console.log(`\n${rows.length} models in ${OUT}/  ·  CREDITS.md and manifest.json rewritten`);
