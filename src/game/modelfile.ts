/**
 * WHAT THE OWNER DROPS — turned into something the game can drive.
 *
 * The engine loads exactly one thing for a car: a binary glTF (see `loadCar`
 * in src/game/engine.ts — a GLTFLoader with the Draco decoder, parsed from the
 * bytes). It has to stay that way: that path is what the player's machine
 * spends its first second on, and one loader means one code path to keep fast
 * and correct.
 *
 * So the conversion happens here, in the owner's browser, *before* the file is
 * uploaded. Whatever shows up — the formats people actually have their models
 * in — is parsed with the official three.js loader, then written back out as a
 * GLB with the official exporter:
 *
 *   .glb   · passed through untouched (the same file, no re-encoding)
 *   .gltf  · parsed (embedded buffers only), or from inside a .zip
 *   .fbx   · Autodesk FBX, embedded textures included
 *   .obj   · Wavefront geometry (colours come from the .mtl we cannot read, so
 *            the model arrives in its geometry with plain materials)
 *   .stl   · 3D printing meshes: geometry only, no materials, so it gets one
 *   .dae   · Collada, textures from the same .zip
 *   .zip   · any of the above plus its loose textures and .bin files, which the
 *            loaders resolve by name out of the archive
 *
 * Node names survive the round trip, which is the whole point: the rigger
 * (src/game/rigging.ts) finds the wheels by name in the GLB exactly as it
 * would have in the original file, so an FBX with `wheel_FL` rigs and steers
 * like a hand-made glTF.
 *
 * Textures: three re-encodes them as PNG/JPEG inside the GLB and caps the size
 * at MAX_TEXTURE, so a 8K-quilted FBX does not arrive as a 400 MB file.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { unzipSync } from "three/examples/jsm/libs/fflate.module.js";
import { parseWheelName } from "./rigging";

/** The biggest texture that survives an import, in pixels. */
const MAX_TEXTURE = 2048;

/** Every extension /import accepts for a car, in the order the UI lists them. */
export const CAR_MODEL_EXT = ["glb", "gltf", "fbx", "obj", "stl", "dae", "zip"] as const;

/** The same list, as an `accept` attribute. */
export const CAR_FILE_ACCEPT = CAR_MODEL_EXT.map((e) => `.${e}`).join(",");

export function isCarModelFile(fileName: string): boolean {
  return new RegExp(`\\.(${CAR_MODEL_EXT.join("|")})$`, "i").test(fileName);
}

export interface ConvertedCar {
  /** the .glb to upload — the original file when it already was one */
  file: File;
  /** what the conversion did, in the order it did it, for the preview card */
  notes: string[];
  /** every node name the rigger will recognise as a wheel */
  wheels: string[];
  meshes: number;
  triangles: number;
}

/* ------------------------------------------------------------------ helpers */

function stem(name: string) {
  return name.replace(/\.[^.]+$/, "").replace(/[^\w.\- ]+/g, "_").slice(0, 60) || "imported-car";
}

function bytes(n: number) {
  if (n >= 1048576) return `${(n / 1048576).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(n / 1024))} KB`;
}

/** A DRACO decoder pointed at the copy the game already ships, so a compressed
 *  glTF inside a .zip still opens. Nothing is fetched unless one is used. */
function newGltf(manager?: THREE.LoadingManager) {
  const draco = new DRACOLoader();
  /* the decoder the build already ships, resolved against the document so it
     survives being served from a subfolder. Nothing is fetched unless the
     model actually uses it. */
  const base = typeof document === "undefined" ? "http://localhost/" : document.baseURI;
  draco.setDecoderPath(new URL("draco/gltf/", base).href);
  const gltf = new GLTFLoader(manager);
  gltf.setDRACOLoader(draco);
  return gltf;
}

/**
 * The loose files of a .zip, addressed the way a loader asks for them: a
 * LoadingManager rewrites every relative URL the model mentions — `textures/
 * body.png`, `./car.bin`, a Windows-style `Car\textures\body.png` — to an
 * object URL, matching on the full path first and then on the file name alone,
 * because models are routinely moved between folders.
 */
function zipReader(entries: Record<string, Uint8Array>) {
  const urls = new Map<string, string>();
  const byName = new Map<string, string>();
  for (const [path, data] of Object.entries(entries)) {
    if (path.endsWith("/") || data.length === 0) continue;
    const clean = path.replace(/^\.\//, "").replace(/\\/g, "/");
    const url = URL.createObjectURL(new Blob([data as unknown as BlobPart]));
    urls.set(clean.toLowerCase(), url);
    const base = clean.split("/").pop()?.toLowerCase();
    if (base && !byName.has(base)) byName.set(base, url);
  }

  const manager = new THREE.LoadingManager();
  manager.setURLModifier((url) => {
    if (/^(blob:|data:|https?:)/i.test(url)) return url;
    const clean = decodeURIComponent(url).replace(/^\.\//, "").replace(/\\/g, "/").toLowerCase();
    return (
      urls.get(clean) ??
      byName.get(clean.split("/").pop() ?? "") ??
      url
    );
  });

  const revoke = () => {
    for (const url of urls.values()) URL.revokeObjectURL(url);
    for (const url of byName.values()) URL.revokeObjectURL(url);
  };

  return { manager, revoke };
}

/** The model inside a .zip: the .glb if there is one, then the rest in order. */
function pickModel(entries: Record<string, Uint8Array>): string | null {
  const paths = Object.keys(entries).filter((p) => !p.endsWith("/"));
  for (const ext of ["glb", "gltf", "fbx", "dae", "obj", "stl"]) {
    const hit = paths.find((p) => new RegExp(`\\.${ext}$`, "i").test(p));
    if (hit) return hit;
  }
  return null;
}

/** Parse one model file into a scene graph. `path` is only for relative refs. */
async function readModel(
  ext: string,
  data: ArrayBuffer,
  text: () => Promise<string>,
  manager?: THREE.LoadingManager,
): Promise<THREE.Object3D> {
  switch (ext) {
    case "glb": {
      const gltf = await newGltf(manager).parseAsync(data, "");
      return gltf.scene;
    }
    case "gltf": {
      const parsed = JSON.parse(await text()) as unknown;
      const gltf = await newGltf(manager).parseAsync(parsed as never, "");
      return gltf.scene;
    }
    case "fbx":
      return new FBXLoader(manager).parse(data, "");
    case "obj":
      return new OBJLoader(manager).parse(await text());
    case "stl": {
      /* no materials at all in the format: a printer mesh, so it gets a shell */
      const geometry = new STLLoader().parse(data);
      const material = new THREE.MeshStandardMaterial({
        color: 0xb9bcbf,
        metalness: 0.35,
        roughness: 0.45,
      });
      const mesh = new THREE.Mesh(geometry, material);
      const wrap = new THREE.Group();
      wrap.name = "stl-model";
      wrap.add(mesh);
      return wrap;
    }
    case "dae": {
      /* The published types for this one loader come through as possibly null,
         which the value never is at runtime; the cast is only to get past it. */
      const DaeLoader = ColladaLoader as unknown as new (
        manager?: THREE.LoadingManager,
      ) => { parse(text: string, path: string): { scene: THREE.Object3D } };
      return new DaeLoader(manager).parse(await text(), "").scene;
    }
    default:
      throw new Error(`no reader for a .${ext} file`);
  }
}

/** What the rigger is going to find, and how heavy the model is. */
function survey(root: THREE.Object3D) {
  const wheels: string[] = [];
  let meshes = 0;
  let triangles = 0;
  root.traverse((o) => {
    if (o.name && parseWheelName(o.name)) wheels.push(o.name);
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    meshes += 1;
    const geometry = mesh.geometry as THREE.BufferGeometry | undefined;
    if (!geometry) return;
    const count = geometry.index?.count ?? geometry.attributes?.position?.count ?? 0;
    triangles += Math.floor(count / 3);
  });
  return { wheels: [...new Set(wheels)], meshes, triangles };
}

/* ------------------------------------------------------------------ the door */

/**
 * Turn anything the owner dropped into the GLB the game loads. Throws with a
 * sentence worth reading in a toast when the file is not a model.
 */
export async function convertCarModel(file: File): Promise<ConvertedCar> {
  const ext = (file.name.split(".").pop() ?? "").toLowerCase();
  const notes: string[] = [];

  /* Already the right format: pass the bytes straight through, so a hand-made
     GLB is stored exactly as it was authored. */
  if (ext === "glb") {
    const data = await file.arrayBuffer();
    /* the four bytes every binary glTF opens with, so a file that was renamed
       to .glb is caught here instead of in a player's garage */
    if (data.byteLength < 12 || new DataView(data).getUint32(0, true) !== 0x46546c67) {
      throw new Error("that .glb is not binary glTF — it does not start with the glTF header");
    }
    let surveyOf = { wheels: [] as string[], meshes: 0, triangles: 0 };
    try {
      surveyOf = survey(await readModel("glb", data, () => Promise.resolve("")));
      notes.push(
        `${surveyOf.meshes} meshes · ${surveyOf.triangles.toLocaleString()} triangles read back`,
      );
    } catch {
      /* Stored anyway. Reading it needs the Draco decoder and the browser's
         image pipeline, which the game has and this page may not. */
      notes.push(".glb stored as it is — it could not be read back here (often a Draco model)");
    }
    notes.push(`.glb untouched (${bytes(file.size)})`);
    return { file, notes, ...surveyOf };
  }

  /* Everything else is read, converted, and written back out as a GLB. */
  let root: THREE.Object3D;
  let revoke = () => {};
  let sourceName = file.name;

  try {
    if (ext === "zip") {
      const entries = unzipSync(new Uint8Array(await file.arrayBuffer()));
      const chosen = pickModel(entries);
      if (!chosen) {
        throw new Error("no model found inside the .zip — it needs a .glb, .gltf, .fbx, .dae, .obj or .stl");
      }
      const reader = zipReader(entries);
      revoke = reader.revoke;
      const inner = entries[chosen];
      const innerExt = (chosen.split(".").pop() ?? "").toLowerCase();
      sourceName = chosen.split("/").pop() ?? chosen;
      const buffer = inner.buffer.slice(inner.byteOffset, inner.byteOffset + inner.byteLength) as ArrayBuffer;
      notes.push(`.zip opened — ${Object.keys(entries).length} files inside, model: ${chosen}`);
      root = await readModel(innerExt, buffer, () => new Blob([inner as unknown as BlobPart]).text(), reader.manager);
      notes.push(`.${innerExt} → glTF`);
    } else {
      const buffer = await file.arrayBuffer();
      root = await readModel(ext, buffer, () => file.text(), undefined);
      notes.push(`.${ext} → glTF`);
      /* One file at a time is all the browser gets: anything the model keeps
         in a folder beside itself — FBX and Collada textures, a .gltf's .bin,
         an .obj's .mtl — is out of reach. Say so, because the car will show up
         without them. */
      if (ext === "fbx" || ext === "dae") {
        notes.push("side textures are not fetched — a .zip brings them along");
      } else if (ext === "obj") {
        notes.push("geometry only — a .obj's .mtl is not read");
      }
    }

    const { wheels, meshes, triangles } = survey(root);
    if (meshes === 0) throw new Error("that model has no meshes in it");

    const exporter = new GLTFExporter();
    const out = await exporter.parseAsync(root, { binary: true, maxTextureSize: MAX_TEXTURE });
    if (!(out instanceof ArrayBuffer)) throw new Error("the exporter did not produce binary glTF");

    const glb = new File([out], `${stem(file.name)}.glb`, { type: "model/gltf-binary" });
    notes.push(`written as ${glb.name} (${bytes(glb.size)}) · ${meshes} meshes · ${triangles.toLocaleString()} triangles`);
    notes.push(`textures embedded, capped at ${MAX_TEXTURE}px`);

    return { file: glb, notes, wheels, meshes, triangles };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    /* a .gltf that points at its own folder is the one common trap */
    if (ext === "gltf" && /fetch|load|404|resolve/i.test(message)) {
      throw new Error(
        "this .gltf points at other files — put the model and its textures in a .zip and drop that instead",
      );
    }
    throw new Error(`could not read ${sourceName}: ${message}`);
  } finally {
    revoke();
  }
}
