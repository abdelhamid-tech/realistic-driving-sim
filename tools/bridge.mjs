/**
 * YOUR BRIDGE — the model you drop into the map.
 *
 * The owner's own bridge is not a prop standing next to the road: it is the
 * road. So it is not loaded at run time and it is not decoration — the map
 * builder melts its triangles into RIVERBEND's own mesh, which is what makes it
 * real. Everything the engine does to a map then happens to the bridge for
 * free: its roadway becomes drivable ground, its railings and towers become
 * walls, and it costs one draw call per material like the rest of the city
 * (see src/game/mapbuild.ts).
 *
 * What this module does, in order:
 *
 *   1. reads the model with the same three.js loaders the app imports with
 *      (src/game/modelfile.ts), so whatever the owner has — .glb, .gltf, .fbx,
 *      .obj, .stl, or any of them inside a .zip — opens the same way;
 *   2. takes the model's colours and drops its textures: a map is one GLB with
 *      no images in it, its textures come from public/tex/ by material name
 *      (src/game/worlddress.ts), and a bridge baked with somebody's 8K
 *      quilt-job would break that;
 *   3. measures the model and finds its roadway — the highest band of upward
 *      faces that carries the bulk of the model's floor area is the deck, and a
 *      railing's top rail never is;
 *   4. fits it to a crossing: turned so its long side runs across the river,
 *      scaled once (never stretched) so it spans bank to bank, and dropped so
 *      its roadway meets the deck height of every other bridge in the map.
 *
 * Placement is tuned in tools/bridge/bridge.json — see tools/bridge/README.md.
 *
 * Deploy-time only. Nothing here ships with the game, and the model is never
 * served: what ships is the map it was baked into.
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader.js";
import { unzipSync } from "three/examples/jsm/libs/fflate.module.js";

/* ----------------------------------------------------------- headless shims *
 * three's loaders are written for a tab, and this build has no tab: it runs in
 * Bun. `ProgressEvent` is the one browser global a model read reaches for that
 * is not there — FileLoader reports the bytes it has pulled with one — and an
 * undefined constructor inside a loader's promise is a build that hangs for
 * ever instead of failing. So it is filled in, once, before any file is read.
 *
 * A Draco-compressed model also needs a Web Worker: DRACOLoader builds one out
 * of the decoder and its own source and posts the buffer to it. Bun has Blob,
 * URL.createObjectURL and Worker with blob sources, so that path runs as it is.
 * -------------------------------------------------------------------------*/
if (typeof globalThis.ProgressEvent === "undefined") {
  globalThis.ProgressEvent = class ProgressEvent {
    constructor(type, init = {}) {
      this.type = type;
      this.lengthComputable = false;
      Object.assign(this, init);
    }
  };
}

/** Where the owner drops the file. Explained by the README beside it. */
export const BRIDGE_DIR = "tools/bridge";

/** The formats the folder accepts, most wanted first. */
const MODEL_EXT = ["glb", "gltf", "fbx", "obj", "stl", "dae"];
const ext = (name) => (name.split(".").pop() ?? "").toLowerCase();

/** More materials than this in one bridge would cost the map draw calls. */
const MATERIAL_WARN = 8;
/** A bridge heavier than this slows the map's own field build down. */
const TRIANGLE_WARN = 120000;

/* ------------------------------------------------------------------ options */

/**
 * The placement knobs, from tools/bridge/bridge.json. Everything is optional:
 * a folder holding nothing but a model builds, fitted and drop-in.
 *
 *   file      the model, relative to tools/bridge/ or to the project root
 *   crossing  which crossing it replaces: an x from the map's own list,
 *             "all", or a list of them (default: the middle crossing, x = 0)
 *   turn      degrees to turn the model about the vertical axis before fitting
 *   fit       how the one scale is chosen: "length" (bank to bank, default),
 *             "water" (the river only), "width" (the road's width), "none"
 *   scale     an explicit scale, overriding `fit`
 *   deck      where the roadway sits in the model, 0..1 of its height
 *   lift      metres added to the deck height, for a last nudge
 *   material  draw the whole bridge as one material of the map, by name
 */
export function bridgeOptions(dir = BRIDGE_DIR) {
  const path = join(dir, "bridge.json");
  if (!existsSync(path)) return {};
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    console.warn(`  ! tools/bridge/bridge.json is not valid JSON — ignored (${message(e)})`);
    return {};
  }
}

const message = (e) => (e instanceof Error ? e.message : String(e));

/** The model to build with: the one named in bridge.json, or the folder's own. */
function modelFile(dir, opts) {
  if (opts.file) {
    const named = existsSync(resolve(dir, opts.file)) ? resolve(dir, opts.file) : resolve(opts.file);
    if (!existsSync(named)) {
      console.warn(
        `  ! tools/bridge/bridge.json names ${opts.file}, which is not there — building the map without your bridge`,
      );
      return null;
    }
    return named;
  }
  let files = [];
  try {
    files = readdirSync(dir).filter((f) => MODEL_EXT.includes(ext(f)));
  } catch {
    return null;
  }
  if (!files.length) return null;
  /* the most useful format wins, and the biggest file of that format: a kit
     dropped in the folder must not be mistaken for the bridge itself */
  files.sort((a, b) => {
    const d = MODEL_EXT.indexOf(ext(a)) - MODEL_EXT.indexOf(ext(b));
    if (d) return d;
    return statSize(join(dir, b)) - statSize(join(dir, a));
  });
  return join(dir, files[0]);
}

function statSize(path) {
  try {
    return readFileSync(path).length;
  } catch {
    return 0;
  }
}

/* ------------------------------------------------------- reading the files */

const bytesUrl = (buf) => `data:application/octet-stream;base64,${buf.toString("base64")}`;
const isImage = (url) => /\.(png|jpe?g|webp|ktx2?|bmp|tga|gif|hdr|exr)$/i.test(url.split("?")[0]);
/**
 * What a loader can actually ask a model for: a glTF's buffers, an OBJ's
 * material file, the rest of a kit. Reading a whole directory as if every file
 * in it belonged to the model is how you end up base64-ing a machine's entire
 * downloads folder, so anything else — and anything enormous — is left alone.
 */
const SIBLING_EXT = ["bin", "gltf", "glb", "obj", "mtl", "fbx", "stl", "dae", "json"];
const SIBLING_MAX = 64 * 1024 * 1024;
/** a 1×1 transparent PNG, so an image a model asks for can never abort a parse */
const BLANK =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg==";

/**
 * Every loose file beside the model, addressed the way a loader asks for them:
 * a LoadingManager rewrites each relative URL the model mentions to a data URL
 * of that file — the same trick the app's importer does with object URLs
 * (src/game/modelfile.ts), done without a DOM. Images are left out on purpose:
 * they resolve to the blank pixel above, because a map carries no textures.
 */
function localFiles(dir) {
  const byPath = new Map();
  const byName = new Map();
  const put = (rel) => {
    if (isImage(rel) || !SIBLING_EXT.includes(ext(rel))) return;
    const clean = rel.replace(/^\.\//, "").replace(/\\/g, "/").toLowerCase();
    if (byPath.has(clean)) return;
    let buf;
    try {
      buf = readFileSync(resolve(dir, rel));
    } catch {
      return;
    }
    if (buf.length > SIBLING_MAX) return;
    const url = bytesUrl(buf);
    byPath.set(clean, url);
    const base = clean.split("/").pop() ?? "";
    if (!byName.has(base)) byName.set(base, url);
  };
  const walk = (rel, depth) => {
    let entries = [];
    try {
      entries = readdirSync(resolve(dir, rel), { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const at = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (depth < 2) walk(at, depth + 1);
      } else put(at);
    }
  };
  walk("", 0);
  return { byPath, byName };
}

/** The same map, out of the loose files of a .zip. */
function zipFiles(bytes) {
  const byPath = new Map();
  const byName = new Map();
  for (const [path, data] of Object.entries(unzipSync(bytes))) {
    if (path.endsWith("/") || !data.length || isImage(path)) continue;
    if (!SIBLING_EXT.includes(ext(path)) || data.length > SIBLING_MAX) continue;
    const clean = path.replace(/^\.\//, "").replace(/\\/g, "/").toLowerCase();
    const url = bytesUrl(Buffer.from(data));
    byPath.set(clean, url);
    const base = clean.split("/").pop() ?? "";
    if (base && !byName.has(base)) byName.set(base, url);
  }
  return { byPath, byName };
}

function managerFor(files) {
  const manager = new THREE.LoadingManager();
  manager.setURLModifier((url) => {
    if (/^(data:|blob:)/i.test(url)) return isImage(url) ? BLANK : url;
    if (/^https?:/i.test(url)) return url;
    const clean = decodeURIComponent(url).replace(/^\.\//, "").replace(/\\/g, "/").toLowerCase();
    if (isImage(clean)) return BLANK;
    return files?.byPath.get(clean) ?? files?.byName.get(clean.split("/").pop() ?? "") ?? url;
  });
  return manager;
}

function gltfLoader(manager) {
  const loader = new GLTFLoader(manager);
  const draco = new DRACOLoader();
  /* the decoder the app already ships, so a Draco-compressed model opens here
     exactly as it does in the browser */
  draco.setDecoderPath(new URL("../public/draco/gltf/", import.meta.url).href);
  loader.setDRACOLoader(draco);
  return loader;
}

/**
 * A glTF read with that decoder, put away again when it is done. The decoder
 * runs in a Web Worker, and a worker left standing keeps Bun's event loop
 * alive: without this the build writes its files and then hangs for ever
 * instead of exiting.
 */
async function readGltf(files, what) {
  const loader = gltfLoader(managerFor(files));
  try {
    return await what(loader);
  } finally {
    loader.dracoLoader?.dispose();
  }
}

/* ---------------------------------------------------- turning it to numbers */

const baseColor = (color) => (color ? { r: color.r, g: color.g, b: color.b } : { r: 0.54, g: 0.56, b: 0.58 });

async function parseBytes(name, bytes, files) {
  const manager = managerFor(files);
  const e = ext(name);
  const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  if (e === "glb") return (await readGltf(files, (l) => l.parseAsync(buf, ""))).scene;
  if (e === "gltf") return (await readGltf(files, (l) => l.parseAsync(bytes.toString("utf8"), ""))).scene;
  if (e === "obj") return new OBJLoader(manager).parse(bytes.toString("utf8"));
  if (e === "fbx") return new FBXLoader(manager).parse(buf, "");
  if (e === "dae") return new ColladaLoader(manager).parse(bytes.toString("utf8"), "").scene;
  if (e === "stl") {
    /* a printed mesh has no materials at all: it arrives as one plain solid */
    const geometry = new STLLoader().parse(buf);
    return new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.7 }));
  }
  throw new Error(`.${e} is not a model this can read — export it as .glb`);
}

/**
 * The model as plain triangles: every node's transform applied, every mesh of
 * every material gathered, one colour kept per material and no texture at all.
 */
function triangulate(root) {
  root.updateMatrixWorld(true);
  const materials = [];
  const byKey = new Map();
  const tris = [];
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  const va = new THREE.Vector3();
  const vb = new THREE.Vector3();
  const vc = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();

  const slot = (material) => {
    const m = material ?? {};
    const c = baseColor(m.color);
    const rough = typeof m.roughness === "number" ? m.roughness : 0.85;
    const metal = typeof m.metalness === "number" ? m.metalness : 0;
    const key = `${c.r.toFixed(4)}|${c.g.toFixed(4)}|${c.b.toFixed(4)}|${rough.toFixed(2)}|${metal.toFixed(2)}`;
    const hit = byKey.get(key);
    if (hit !== undefined) return hit;
    const index = materials.length;
    materials.push({ name: `bridge${index}`, color: [c.r, c.g, c.b], rough, metal });
    byKey.set(key, index);
    return index;
  };

  root.traverse((o) => {
    const mesh = o;
    if (!mesh.isMesh || !mesh.geometry) return;
    const geometry = mesh.geometry;
    const pos = geometry.getAttribute("position");
    if (!pos) return;
    const index = geometry.getIndex();
    const slots = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const groups = geometry.groups.length
      ? geometry.groups
      : [{ start: 0, count: index ? index.count : pos.count, materialIndex: 0 }];

    for (const g of groups) {
      const mat = slot(slots[g.materialIndex] ?? slots[0]);
      const end = Math.min(g.start + g.count, index ? index.count : pos.count);
      for (let i = g.start; i + 2 < end; i += 3) {
        va.fromBufferAttribute(pos, index ? index.getX(i) : i).applyMatrix4(mesh.matrixWorld);
        vb.fromBufferAttribute(pos, index ? index.getX(i + 1) : i + 1).applyMatrix4(mesh.matrixWorld);
        vc.fromBufferAttribute(pos, index ? index.getX(i + 2) : i + 2).applyMatrix4(mesh.matrixWorld);
        ab.subVectors(vb, va);
        ac.subVectors(vc, va);
        const normal = ab.cross(ac);
        if (normal.lengthSq() === 0) continue; // a degenerate face carries nothing
        normal.normalize();
        const a = [va.x, va.y, va.z];
        const b = [vb.x, vb.y, vb.z];
        const c = [vc.x, vc.y, vc.z];
        const nn = [normal.x, normal.y, normal.z];
        /* a face of a model that is not simplified keeps its flat normal on
           all three vertices, which is exactly how it looked before */
        tris.push({ a, b, c, na: nn, nb: nn, nc: nn, n: nn, mat });
        for (const v of [a, b, c]) {
          for (let k = 0; k < 3; k++) {
            if (v[k] < min[k]) min[k] = v[k];
            if (v[k] > max[k]) max[k] = v[k];
          }
        }
      }
    }
  });

  return { materials, tris, min, max };
}

/* ------------------------------------------------------------ detail budget *
 *  A model made to be looked at on its own carries triangles a city map has no
 *  way to show and no way to afford. The one dropped in here arrived with
 *  455,000 of them on a single mesh — a median face of a third of a square
 *  millimetre on a bridge 150 m long — and melting that into the map took it
 *  from 3 MB to 36 MB, for detail nobody can see and every car has to drive
 *  over.
 *
 *  So the model is simplified once, here, by VERTEX CLUSTERING: every vertex is
 *  snapped onto a grid of `detail` metres, and the vertices sharing a cell
 *  become one at their average, which drops the faces that vanish inside a
 *  cell. It is the one simplification that is safe blind — it never moves the
 *  surface by more than the grid, it cannot invert or invent a face, it keeps
 *  the model's own proportions — and a few centimetres on a bridge this size is
 *  nothing from the driver's seat.
 *
 *  How coarse it goes is not guessed: the coarsest grid that still holds the
 *  model's shape (see `keepsShape`) is the one used, and `detail` in
 *  bridge.json overrides the lot — a number for an exact grid in metres, or 0
 *  to keep every triangle the model came with.
 * -------------------------------------------------------------------------*/
/** Metres per cell to try, coarsest first: a bridge is a big object. */
const DETAIL_LADDER = [0.5, 0.35, 0.25, 0.18, 0.12, 0.08, 0.05, 0.035, 0.025, 0.015, 0.01, 0.006, 0.004];
/**
 * What one bridge may cost the map. The city itself is 34,000 triangles, so
 * this is a bridge five times the whole built city — a hero asset, and about
 * what a hand-made one would be. A finer grid than this buys nothing that can
 * be seen from a car: a centimetre on a 350 m bridge is a centimetre.
 */
const TRIANGLE_BUDGET = 200000;
/** Below this share of the model's own surface, a grid is eating features. */
const SHAPE_KEEP = 0.97;

/**
 * The model with every vertex snapped to a grid of `grid` metres: the vertices
 * in a cell become their average, and the faces that end up with two or three
 * vertices in the same cell are dropped rather than left as slivers.
 *
 * Clustering is done per material, so two parts that meet — a steel railing on
 * a concrete kerb — are never welded into each other.
 */
export function collapse(tris, grid) {
  const index = new Map();
  const sum = [];
  const shade = [];
  const count = [];
  const at = (v, mat) => {
    const key = `${mat}|${Math.floor(v[0] / grid)}|${Math.floor(v[1] / grid)}|${Math.floor(v[2] / grid)}`;
    let hit = index.get(key);
    if (hit === undefined) {
      hit = sum.length;
      index.set(key, hit);
      sum.push([0, 0, 0]);
      shade.push([0, 0, 0]);
      count.push(0);
    }
    const s = sum[hit];
    s[0] += v[0];
    s[1] += v[1];
    s[2] += v[2];
    count[hit]++;
    return hit;
  };

  /* Each cell also collects the way its own faces are turned, so a welded
     vertex keeps a normal: averaging the faces that met in it gives a cable its
     roundness back (the map draws smooth-shaded) and leaves a flat slab flat,
     whose faces all share one normal. It is also what lets the writer hand the
     mesh over welded instead of three separate vertices per triangle. */
  const faces = [];
  for (const t of tris) {
    const ia = at(t.a, t.mat);
    const ib = at(t.b, t.mat);
    const ic = at(t.c, t.mat);
    for (const i of [ia, ib, ic]) {
      shade[i][0] += t.n[0];
      shade[i][1] += t.n[1];
      shade[i][2] += t.n[2];
    }
    faces.push([ia, ib, ic, t.mat]);
  }

  const verts = sum.map((s, i) => {
    const n = shade[i];
    const len = Math.hypot(n[0], n[1], n[2]) || 1;
    return {
      p: [s[0] / count[i], s[1] / count[i], s[2] / count[i]],
      n: [n[0] / len, n[1] / len, n[2] / len],
    };
  });

  const out = [];
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const [ia, ib, ic, mat] of faces) {
    if (ia === ib || ib === ic || ia === ic) continue;
    const A = verts[ia], B = verts[ib], C = verts[ic];
    const a = A.p, b = B.p, c = C.p;
    const abx = b[0] - a[0], aby = b[1] - a[1], abz = b[2] - a[2];
    const acx = c[0] - a[0], acy = c[1] - a[1], acz = c[2] - a[2];
    const nx = aby * acz - abz * acy;
    const ny = abz * acx - abx * acz;
    const nz = abx * acy - aby * acx;
    const len = Math.hypot(nx, ny, nz);
    if (len === 0) continue;
    out.push({ a, b, c, na: A.n, nb: B.n, nc: C.n, n: [nx / len, ny / len, nz / len], mat });
    for (const v of [a, b, c]) {
      for (let k = 0; k < 3; k++) {
        if (v[k] < min[k]) min[k] = v[k];
        if (v[k] > max[k]) max[k] = v[k];
      }
    }
  }
  return out.length ? { tris: out, min, max } : null;
}

/** How much surface a grid left of the model's own — features it ate show here. */
function area(tris) {
  let total = 0;
  for (const t of tris) {
    const abx = t.b[0] - t.a[0], aby = t.b[1] - t.a[1], abz = t.b[2] - t.a[2];
    const acx = t.c[0] - t.a[0], acy = t.c[1] - t.a[1], acz = t.c[2] - t.a[2];
    const nx = aby * acz - abz * acy;
    const ny = abz * acx - abx * acz;
    const nz = abx * acy - aby * acx;
    total += Math.hypot(nx, ny, nz) / 2;
  }
  return total;
}

/**
 * The simplification a model gets, and the reason for it:
 *
 *   · `detail` in bridge.json wins outright — a grid in metres, or 0 for none;
 *   · a model already inside the budget is left exactly as it is;
 *   · otherwise the coarsest grid that still holds the model's shape is used,
 *     so a well-built model keeps nearly all of itself and a model with
 *     455,000 sub-millimetre faces loses nearly all of them.
 */
function decimate(model, opts) {
  const source = model.tris.length;
  const own = { tris: model.tris, min: model.min, max: model.max };
  const fixed = (grid, note) => ({ ...own, grid, source, note });

  if (opts.detail === 0) return fixed(0, "detail 0 in bridge.json: every triangle kept");
  if (typeof opts.detail === "number" && opts.detail > 0) {
    const out = collapse(model.tris, opts.detail) ?? own;
    return { ...out, grid: opts.detail, source, note: `bridge.json asks for a ${opts.detail} m grid` };
  }
  if (source <= TRIANGLE_BUDGET) return fixed(0, null);

  /* finest grid first: the least a model has to lose to fit the budget is what
     it should lose, and a coarse grid eating a railing is the failure to avoid */
  const full = area(model.tris);
  let pick = null;
  for (const grid of [...DETAIL_LADDER].reverse()) {
    const out = collapse(model.tris, grid);
    if (!out || out.tris.length > TRIANGLE_BUDGET) continue;
    pick = { out, grid, keeps: full > 0 ? area(out.tris) / full : 1 };
    break;
  }
  if (!pick) {
    /* nothing on the ladder fits: the coarsest grid there is, and say so */
    const grid = DETAIL_LADDER[0];
    const out = collapse(model.tris, grid) ?? own;
    pick = { out, grid, keeps: full > 0 ? area(out.tris) / full : 1 };
  }

  const kept = pick.out.tris.length;
  const eaten = (100 - (kept / source) * 100).toFixed(0);
  const surface = (pick.keeps * 100).toFixed(1);
  const note =
    `${eaten}% of them were finer than the ${pick.grid} m grid and were welded away, ` +
    `leaving ${surface}% of the bridge's surface` +
    (pick.keeps < SHAPE_KEEP ? " — which is a lot for a grid this size: check the bridge" : "");
  return { ...pick.out, grid: pick.grid, source, note };
}

/**
 * Where the roadway is, in the model's own frame.
 *
 * A bridge is mostly floor, and its floor is the highest large horizontal
 * surface it has: scanning down from the top, the first band of upward faces
 * that carries the bulk of the model's floor area is the deck. A railing's top
 * rail, a parapet or a sign never carries that much, so it is walked past. On a
 * model that is one flat slab the top band wins immediately, which is right.
 * `deck` in bridge.json overrides all of this.
 */
function findDeck(tris, minY, maxY) {
  const BINS = 64;
  const span = Math.max(maxY - minY, 1e-6);
  const floor = new Array(BINS).fill(0);
  /** up faces, kept whole, so the band that wins can be averaged exactly */
  const faces = [];
  let total = 0;
  for (const t of tris) {
    if (t.n[1] < 0.7) continue; // only faces you could drive on
    const y = (t.a[1] + t.b[1] + t.c[1]) / 3;
    const bin = Math.min(BINS - 1, Math.max(0, Math.floor(((y - minY) / span) * BINS)));
    const abx = t.b[0] - t.a[0], abz = t.b[2] - t.a[2];
    const acx = t.c[0] - t.a[0], acz = t.c[2] - t.a[2];
    const area = Math.abs(abx * acz - abz * acx) / 2;
    floor[bin] += area;
    total += area;
    faces.push([y, area, bin]);
  }
  if (total <= 0) return { y: maxY, fraction: 1, share: 0 };

  let seen = 0;
  for (let i = BINS - 1; i >= 0; i--) {
    seen += floor[i];
    if (seen >= total * 0.3) {
      /* the band's own faces, averaged by area: a slab's top is one height,
         and a bin edge is up to a metre off it (the span is binned by 64) */
      let sum = 0;
      let weight = 0;
      for (const [y, area, bin] of faces) {
        if (bin !== i) continue;
        sum += y * area;
        weight += area;
      }
      const y = weight > 0 ? sum / weight : minY + ((i + 1) / BINS) * span;
      return { y, fraction: (y - minY) / span, share: seen / total };
    }
  }
  return { y: maxY, fraction: 1, share: 1 };
}

/** Reads the model in tools/bridge/, or null when the owner has not dropped one. */
export async function loadBridgeModel(dir = BRIDGE_DIR, opts = {}) {
  const file = modelFile(dir, opts);
  if (!file) return null;
  const short = file.split(/[\\/]/).pop();

  const raw = readFileSync(file);
  const e = ext(file);
  let root;
  try {
    if (e === "zip") {
      const entries = unzipSync(new Uint8Array(raw));
      const names = Object.keys(entries).filter((n) => MODEL_EXT.includes(ext(n)));
      if (!names.length) throw new Error("the archive holds no model (.glb/.gltf/.fbx/.obj/.stl/.dae)");
      names.sort((a, b) => MODEL_EXT.indexOf(ext(a)) - MODEL_EXT.indexOf(ext(b)));
      const inner = names[0];
      root = await parseBytes(inner, Buffer.from(entries[inner]), zipFiles(new Uint8Array(raw)));
    } else {
      root = await parseBytes(file, raw, localFiles(dirname(file)));
    }
  } catch (err) {
    console.warn(
      `  ! tools/bridge/${short} could not be read (${message(err)})\n` +
        `    building the map without your bridge — try exporting it as .glb`,
    );
    return null;
  }

  const model = triangulate(root);
  if (!model.tris.length) {
    console.warn(`  ! tools/bridge/${short} holds no triangles — building the map without your bridge`);
    return null;
  }
  const { tris, min, max, grid, source, note } = decimate(model, opts);
  const deck = findDeck(tris, min[1], max[1]);
  return {
    file,
    short,
    materials: model.materials,
    tris,
    min,
    max,
    deck,
    grid,
    source,
    note,
    size: [max[0] - min[0], max[1] - min[1], max[2] - min[2]],
    triangles: tris.length,
  };
}

/* -------------------------------------------------------------------- fitting */

/**
 * The modal, turned, scaled once and dropped onto a crossing. Uniform scale
 * only: a bridge squashed to fit a river reads as a mistake, so `fit` chooses
 * which of the model's own dimensions sets the scale — its length across the
 * river by default.
 *
 * `crossing` is the crossing as the map built it: where it is, how wide its
 * road is, the span its deck covers and the height every roadway in the map
 * meets.
 */
export function fitToCrossing(model, crossing, opts = {}) {
  const warnings = [];
  const { min, max } = model;
  const cx = (min[0] + max[0]) / 2;
  const cz = (min[2] + max[2]) / 2;
  const cy = (min[1] + max[1]) / 2;

  /* turn: the owner's own yaw, and then a right angle if the model is wider
     than it is long, so its length always lies along the crossing */
  const corners = [];
  for (const x of [min[0], max[0]]) for (const z of [min[2], max[2]]) corners.push([x - cx, z - cz]);
  const yaw = (theta) => {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    /* a rotation about +Y, taken the way every other yaw in the map is taken */
    return ([x, z]) => [x * cos - z * sin, x * sin + z * cos];
  };
  const extents = (t) => {
    const r = yaw(t);
    let ex = 0;
    let ez = 0;
    for (const c of corners) {
      const [x, z] = r(c);
      ex = Math.max(ex, Math.abs(x));
      ez = Math.max(ez, Math.abs(z));
    }
    return [ex * 2, ez * 2];
  };

  let theta = ((opts.turn ?? 0) * Math.PI) / 180;
  let [alongX, alongZ] = extents(theta);
  if (alongX > alongZ) {
    theta += Math.PI / 2;
    [alongX, alongZ] = extents(theta);
  }
  const turned = +(((theta * 180) / Math.PI) % 360).toFixed(1);

  const deckY = opts.deck !== undefined ? min[1] + opts.deck * model.size[1] : model.deck.y;
  const deckFraction = +(opts.deck !== undefined ? opts.deck : model.deck.fraction).toFixed(3);

  const span = crossing.z1 - crossing.z0;
  const water = crossing.water[1] - crossing.water[0];
  const fit = opts.fit ?? "length";
  let scale = opts.scale ?? 1;
  if (opts.scale === undefined) {
    if (fit === "width") scale = (crossing.half * 2) / Math.max(alongX, 1e-6);
    else if (fit === "water") scale = water / Math.max(alongZ, 1e-6);
    else if (fit === "none") scale = 1;
    else scale = span / Math.max(alongZ, 1e-6);
  }

  /* the middle of whatever the model is fitted to is where it is centred */
  const midZ = fit === "water" ? (crossing.water[0] + crossing.water[1]) / 2 : (crossing.z0 + crossing.z1) / 2;
  const yTop = crossing.deckY + (opts.lift ?? 0) - (deckY - cy) * scale;
  const rotate = yaw(theta);
  const place = (v) => {
    const [x, z] = rotate([v[0] - cx, v[2] - cz]);
    return [x * scale + crossing.x, (v[1] - cy) * scale + yTop, z * scale + midZ];
  };

  /* The whole bridge is placed first, and then cut off at the riverbed: a pier
     modelled twenty metres into the mud is never seen (the bed is opaque), and
     left in it would drag the map's own origin — and with it every prop and
     every height in the city — down to the end of the deepest pier. */
  const floor = crossing.floor ?? -Infinity;
  const placed = [];
  let cut = 0;
  let trimmed = 0;
  /* a uniform scale leaves a direction alone, so a normal is only turned */
  const turn = (n) => {
    const [x, z] = rotate([n[0], n[2]]);
    return [x, n[1], z];
  };
  /*
   * The span is levelled onto the map's deck plane.
   *
   * A real bridge arches over its length and this one does by half a metre —
   * right on the model, awkward in a city: the roads that meet it from either
   * bank are flat, and a deck that rises and falls under the wheels is read by
   * the physics as a road that rises and falls. So the roadway's own profile
   * along the span is measured first — the mean height of the up-facing faces
   * on the carriageway, slice by slice — and then the whole bridge is sheared
   * vertically by the difference between that profile and the deck plane. The
   * model keeps every proportion and every joint it had: the railings stay
   * standing on the road, only the arch is taken out of it. `level` in
   * bridge.json sets how far from the deck a face may be and still count as
   * roadway, or 0 to leave the bridge exactly as it was modelled.
   */
  const level = opts.level === undefined ? 0.9 : opts.level;
  const prof = new Map();
  if (level > 0) {
    for (const t of model.tris) {
      if (t.n[1] < 0.7) continue;
      const [rx, rz] = rotate([
        (t.a[0] + t.b[0] + t.c[0]) / 3 - cx,
        (t.a[2] + t.b[2] + t.c[2]) / 3 - cz,
      ]);
      if (Math.abs(rx) > alongX * 0.42) continue;                 // the carriageway
      const y = (t.a[1] + t.b[1] + t.c[1]) / 3;
      if (Math.abs(y - model.deck.y) > level / Math.max(scale, 1e-6)) continue;
      const k = Math.round(rz / 4);
      const e = prof.get(k) ?? [0, 0];
      e[0] += y;
      e[1] += 1;
      prof.set(k, e);
    }
    for (const [k, e] of prof) prof.set(k, e[0] / e[1]);
  }
  const slices = [...prof.keys()].sort((a, b) => a - b);
  /** how far the span is off the model's own deck plane at this position */
  const shear = (rz) => {
    if (!slices.length) return 0;
    const k = Math.round(rz / 4);
    const hit = prof.get(k);
    if (hit !== undefined) return model.deck.y - hit;
    if (k < slices[0] || k > slices[slices.length - 1]) return 0;  // past the deck
    let near = slices[0];
    for (const s of slices) if (Math.abs(s - k) < Math.abs(near - k)) near = s;
    return model.deck.y - prof.get(near);
  };

  for (const t of model.tris) {
    const [rx, rz] = rotate([
      (t.a[0] + t.b[0] + t.c[0]) / 3 - cx,
      (t.a[2] + t.b[2] + t.c[2]) / 3 - cz,
    ]);
    const d = shear(rz);
    const lift = (v) => (d ? [v[0], v[1] + d, v[2]] : v);
    const tri = {
      a: place(lift(t.a)), b: place(lift(t.b)), c: place(lift(t.c)),
      na: turn(t.na), nb: turn(t.nb), nc: turn(t.nc),
      n: turn(t.n), mat: t.mat,
    };
    if (floor === -Infinity) {
      placed.push(tri);
      continue;
    }
    const rest = clipAbove(tri, floor);
    if (!rest) {
      cut++;
      continue;
    }
    if (rest.trimmed) trimmed++;
    placed.push(...rest.tris);
  }

  const width = alongX * scale;
  if (width > crossing.half * 2.4) {
    warnings.push(
      `the model is ${width.toFixed(0)} m across, wider than the road it lands on (${(crossing.half * 2).toFixed(0)} m) — try "fit": "width"`,
    );
  }
  if (scale > 40 || scale < 0.4) {
    warnings.push(`a scale of ${scale.toFixed(2)} usually means the model is in millimetres — set "scale" in bridge.json`);
  }
  if (model.triangles > TRIANGLE_WARN) {
    warnings.push(`${model.triangles.toLocaleString()} triangles is a heavy bridge for a map this size`);
  }
  if (model.materials.length > MATERIAL_WARN && !opts.material) {
    warnings.push(`${model.materials.length} materials: set "material": "concrete" to draw it as one`);
  }

  return {
    tris: placed,
    report: {
      x: crossing.x,
      scale,
      span: fit === "water" ? water : span,
      width,
      height: model.size[1] * scale,
      deckFraction,
      turned,
      baked: placed.length,
      cut,
      trimmed,
      warnings,
    },
  };
}

/**
 * The part of a triangle above a horizontal plane, as one triangle or a quad
 * split into two — the standard cut, done for the one plane that matters here.
 * Null when the whole triangle is below it.
 */
function clipAbove(tri, floor) {
  const pts = [tri.a, tri.b, tri.c];
  const nrm = [tri.na, tri.nb, tri.nc];
  const out = [];
  const shade = [];
  for (let i = 0; i < 3; i++) {
    const cur = pts[i];
    const nxt = pts[(i + 1) % 3];
    const curIn = cur[1] >= floor;
    const nxtIn = nxt[1] >= floor;
    if (curIn) {
      out.push(cur);
      shade.push(nrm[i]);
    }
    if (curIn !== nxtIn) {
      const k = (floor - cur[1]) / (nxt[1] - cur[1]);
      const j = (i + 1) % 3;
      out.push([cur[0] + (nxt[0] - cur[0]) * k, floor, cur[2] + (nxt[2] - cur[2]) * k]);
      const a = nrm[i], b = nrm[j];
      const l = Math.hypot(a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k) || 1;
      shade.push([
        (a[0] + (b[0] - a[0]) * k) / l,
        (a[1] + (b[1] - a[1]) * k) / l,
        (a[2] + (b[2] - a[2]) * k) / l,
      ]);
    }
  }
  if (out.length < 3) return null;
  const face = (i, j, k) => ({ a: out[i], b: out[j], c: out[k], na: shade[i], nb: shade[j], nc: shade[k], n: tri.n, mat: tri.mat });
  const tris = [face(0, 1, 2)];
  if (out.length === 4) tris.push(face(0, 2, 3));
  return { tris, trimmed: out.length !== 3 };
}
