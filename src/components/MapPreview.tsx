/**
 * THE PICTURE ON A MAP CARD.
 *
 * A map is a model, not a photograph: nothing anywhere holds an image of an
 * imported map, so one is made here. The model is loaded once, looked straight
 * down on through an orthographic camera and photographed, and the picture is
 * kept in the browser's storage under the map's id — the next visit shows the
 * finished card instantly and the model is never fetched twice for it.
 *
 * The built-in city has no model to photograph at all (it is generated from
 * code), so its card is a plan drawn by hand instead. Both end up in the same
 * frame, so every world reads the same way in the picker.
 */
import { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import type { WorldMapSource } from "@/game/worldmaps";
import { cityPlan } from "@/game/cityplan";

const THUMB = 384;
const KEY = "riverbend.mapthumb.v2.";
/** above this, photographing a world costs more than the card is worth */
const MAX_BYTES = 64 * 1024 * 1024;

/* ------------------------------------------------------------------ storage */

function cached(id: string): string | null {
  try {
    return window.localStorage.getItem(KEY + id);
  } catch {
    return null;
  }
}

function remember(id: string, data: string) {
  try {
    window.localStorage.setItem(KEY + id, data);
  } catch {
    /* the picture still shows this visit; the next visit draws it again */
  }
}

/* ------------------------------------------------- one renderer, one at a time */

let worker: THREE.WebGLRenderer | null = null;

function workerRenderer(): THREE.WebGLRenderer | null {
  if (worker) return worker;
  try {
    const canvas = document.createElement("canvas");
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
    r.setPixelRatio(1);
    r.setSize(THUMB, THUMB, false);
    worker = r;
    return r;
  } catch {
    return null;
  }
}

let queue: Promise<unknown> = Promise.resolve();
/** one job per map, however many cards ask for it at once */
const inflight = new Map<string, Promise<string | null>>();

/** Worlds are photographed one after another: a queue, not four downloads. */
function oneAtATime<T>(job: () => Promise<T>): Promise<T> {
  const next = queue.then(job, job);
  queue = next.catch(() => undefined);
  return next;
}

/* ------------------------------------------------------------- the drawn plan */

/**
 * A plan of the generated city. The city is code rather than a model, so its
 * card is drawn from the same data the world is built from (see
 * src/game/cityplan) — the streets on the card are the streets the car can
 * drive down, the parks are the parks, and the boulevard through the plaza is
 * exactly where the boulevard is.
 */
function drawPlan(): string {
  const c = document.createElement("canvas");
  c.width = THUMB;
  c.height = THUMB;
  const x = c.getContext("2d");
  const plan = cityPlan();
  if (!x || !plan) return "";
  x.fillStyle = "#efeadc";
  x.fillRect(0, 0, THUMB, THUMB);
  x.drawImage(plan, 0, 0, THUMB, THUMB);
  return c.toDataURL("image/jpeg", 0.85);
}

/* --------------------------------------------------------- the photographed map */

let gltf: GLTFLoader | null = null;
function loader(): GLTFLoader {
  if (!gltf) {
    const draco = new DRACOLoader();
    draco.setDecoderPath(new URL("draco/gltf/", document.baseURI).href);
    gltf = new GLTFLoader();
    gltf.setDRACOLoader(draco);
  }
  return gltf;
}

async function shoot(source: WorldMapSource): Promise<string | null> {
  const renderer = workerRenderer();
  if (!renderer) return null;

  const scene = new THREE.Scene();
  /* warm dark, so the thumbnail reads as a print of the city rather than a
     hole punched in the ivory card it sits in */
  scene.background = new THREE.Color(0x1c1a17);
  const model = await loader().loadAsync(source.url);
  const root = model.scene;
  root.rotation.y = (source.turn * Math.PI) / 180;
  root.updateMatrixWorld(true);

  /* An aerial plan wants flat, readable colour: metallic PBR surfaces render
     black without an environment map, so the surfaces are swapped for unlit
     copies that keep their own colour and texture. */
  const made: THREE.Material[] = [];
  const textures = new Set<THREE.Texture>();
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const first = list[0] as THREE.MeshStandardMaterial | undefined;
    if (first?.map) textures.add(first.map);
    const flat = new THREE.MeshBasicMaterial({
      color: first?.color ? first.color.clone() : new THREE.Color(0x8b9098),
      map: first?.map ?? null,
      toneMapped: false,
    });
    mesh.material = flat;
    made.push(flat);
  });

  scene.add(root);
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const centre = box.getCenter(new THREE.Vector3());
  const span = Math.max(size.x, size.z) * 1.04 || 100;

  const camera = new THREE.OrthographicCamera(-span / 2, span / 2, span / 2, -span / 2, 1, span * 4 + 500);
  camera.up.set(0, 0, -1);
  camera.position.set(centre.x, box.max.y + span, centre.z);
  camera.lookAt(centre.x, centre.y, centre.z);

  renderer.render(scene, camera);
  const data = renderer.domElement.toDataURL("image/jpeg", 0.78);

  /* and let the whole thing go: a photograph is all we keep */
  scene.remove(root);
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (mesh.isMesh) mesh.geometry?.dispose();
  });
  for (const m of made) m.dispose();
  for (const t of textures) t.dispose();
  renderer.clear();

  return data;
}

/* --------------------------------------------------------------- the component */

export async function mapThumbnail(source: WorldMapSource): Promise<string | null> {
  const hit = cached(source.id);
  if (hit) return hit;
  if (source.kind === "procedural" || !source.url) {
    const plan = drawPlan();
    if (plan) remember(source.id, plan);
    return plan || null;
  }
  if (source.kind !== "glb" || source.bytes > MAX_BYTES) return null;
  const running = inflight.get(source.id);
  if (running) return running;
  const job = oneAtATime(() => shoot(source).catch(() => null)).then((shot) => {
    inflight.delete(source.id);
    if (shot) remember(source.id, shot);
    return shot;
  });
  inflight.set(source.id, job);
  return job;
}

export function MapPreview({
  source,
  className,
  badge,
}: {
  source: WorldMapSource;
  className?: string;
  /** drawn under the picture, over the fade */
  badge?: string;
}) {
  const [image, setImage] = useState<string | null>(() => cached(source.id));
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const hit = cached(source.id);
    setImage(hit);
    if (hit) return;
    let alive = true;
    setBusy(true);
    void mapThumbnail(source)
      .then((url) => {
        if (alive && url) setImage(url);
      })
      .finally(() => {
        if (alive) setBusy(false);
      });
    return () => {
      alive = false;
    };
    /* the picture is a function of these two, not of the object identity */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source.id, source.url]);

  return (
    <div className={"relative overflow-hidden bg-carbon-2 " + (className ?? "")}>
      {image ? (
        <img src={image} alt={source.name} className="absolute inset-0 size-full object-cover" />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(217,119,87,.14), transparent 70%), linear-gradient(160deg, #2b2823, #16150f)",
          }}
        />
      )}
      {busy ? (
        <div className="absolute inset-0 flex items-center justify-center bg-carbon/55 backdrop-blur-[1px]">
          <span className="animate-pulse font-mono text-[9px] tracking-[0.24em] text-signal">
            DRAWING THE MAP…
          </span>
        </div>
      ) : null}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "linear-gradient(to top, rgba(22,21,18,.92), transparent)" }}
      />
      {badge ? (
        <span className="absolute left-2 top-2 border border-edge/15 bg-card/88 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.18em] text-chalk/85 backdrop-blur-sm">
          {badge}
        </span>
      ) : null}
    </div>
  );
}
