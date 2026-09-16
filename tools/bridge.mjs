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

/* ---------------------------------------------------- turning it to numbers */

const baseColor = (color) => (color ? { r: color.r, g: color.g, b: color.b } : { r: 0.54, g: 0.56, b: 0.58 });

async function parseBytes(name, bytes, files) {
  const manager = managerFor(files);
  const e = ext(name);
  const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  if (e === "glb") return (await gltfLoader(manager).parseAsync(buf, "")).scene;
  if (e === "gltf") return (await gltfLoader(manager).parseAsync(bytes.toString("utf8"), "")).scene;
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
        tris.push({ a, b, c, n: [normal.x, normal.y, normal.z], mat });
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

  const { materials, tris, min, max } = triangulate(root);
  if (!tris.length) {
    console.warn(`  ! tools/bridge/${short} holds no triangles — building the map without your bridge`);
    return null;
  }
  const deck = findDeck(tris, min[1], max[1]);
  return {
    file,
    short,
    materials,
    tris,
    min,
    max,
    deck,
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
  for (const t of model.tris) {
    const tri = { a: place(t.a), b: place(t.b), c: place(t.c), n: t.n, mat: t.mat };
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
  const out = [];
  for (let i = 0; i < 3; i++) {
    const cur = pts[i];
    const nxt = pts[(i + 1) % 3];
    const curIn = cur[1] >= floor;
    const nxtIn = nxt[1] >= floor;
    if (curIn) out.push(cur);
    if (curIn !== nxtIn) {
      const k = (floor - cur[1]) / (nxt[1] - cur[1]);
      out.push([cur[0] + (nxt[0] - cur[0]) * k, floor, cur[2] + (nxt[2] - cur[2]) * k]);
    }
  }
  if (out.length < 3) return null;
  const tris = [{ a: out[0], b: out[1], c: out[2], n: tri.n, mat: tri.mat }];
  if (out.length === 4) tris.push({ a: out[0], b: out[2], c: out[3], n: tri.n, mat: tri.mat });
  return { tris, trimmed: out.length !== 3 };
}
