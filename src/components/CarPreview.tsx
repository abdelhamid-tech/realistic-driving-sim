/**
 * THE SHOWROOM — a car, turning on its own little turntable.
 *
 * This is a second, tiny renderer that exists only while a car is being chosen:
 * the real game's canvas is still behind the menu, paused and dark, and it is
 * not where a player picking a car wants to look. The selected model is loaded
 * here, dropped on the floor, framed, and spun slowly.
 *
 * Paint is live. Materials the model calls paint (or, failing that, the surface
 * most of the model's body uses) are re-coloured in place the instant the
 * player picks a colour — the same rule the engine uses when it paints a car on
 * the road, so what is on the turntable is what turns up in the street.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { buildVehicle, type VehicleKind } from "@/game/vehicles";

const PAINT_MAT = /paint|body|shell|exterior|carroceria|koerper|lack/i;
const NOT_PAINT =
  /glass|window|tyre|tire|rim|wheel|brake|disc|interior|leather|seat|dash|plate|licen|light|lamp|chrome|grill|mesh|shadow/i;

let shared: GLTFLoader | null = null;
function loader(): GLTFLoader {
  if (!shared) {
    const draco = new DRACOLoader();
    /* the decoder the game ships with, resolved relative to the document so it
       survives being served from a subfolder on a game host */
    draco.setDecoderPath(new URL("draco/gltf/", document.baseURI).href);
    shared = new GLTFLoader();
    shared.setDRACOLoader(draco);
  }
  return shared;
}

function disposeTree(root: THREE.Object3D) {
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.geometry?.dispose();
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of list) {
      const mat = m as THREE.MeshStandardMaterial | undefined;
      if (!mat) continue;
      for (const key of ["map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap"]) {
        const tex = (mat as unknown as Record<string, THREE.Texture | null>)[key];
        tex?.dispose?.();
      }
      mat.dispose();
    }
  });
}

/** The colourable surfaces of a model: by name first, then by weight. */
function paintSurfaces(scene: THREE.Object3D): THREE.MeshStandardMaterial[] {
  const named: THREE.MeshStandardMaterial[] = [];
  const weight = new Map<string, { count: number; mat: THREE.MeshStandardMaterial }>();
  scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const raw of list) {
      const mat = raw as THREE.MeshStandardMaterial | undefined;
      if (!mat || !("color" in mat)) continue;
      const key = `${mat.name || ""} ${mesh.name || ""}`;
      const seen = weight.get(mat.uuid) ?? { count: 0, mat };
      seen.count += 1;
      weight.set(mat.uuid, seen);
      if (PAINT_MAT.test(key) && !NOT_PAINT.test(key) && !named.includes(mat)) named.push(mat);
    }
  });
  if (named.length) return named;
  /* nothing calls itself paint: the body of a car is the surface it is mostly
     made of, so take the one that covers the most meshes */
  const ranked = [...weight.values()]
    .sort((a, b) => b.count - a.count)
    .filter((w) => !NOT_PAINT.test(`${w.mat.name || ""}`));
  return ranked.length ? [ranked[0].mat] : [];
}

export interface CarPreviewProps {
  /** "" draws the procedural body of `kind` — no model to fetch */
  url: string;
  kind: VehicleKind;
  paint: number;
  /** degrees, for a model authored facing the other way */
  turn?: number;
  className?: string;
}

export function CarPreview({ url, kind, paint, turn = 0, className }: CarPreviewProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const paintMats = useRef<THREE.MeshStandardMaterial[]>([]);
  const paintRef = useRef(paint);
  paintRef.current = paint;

  /* the turntable itself — rebuilt only when the car changes, never on paint */
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    /* A browser that cannot give us another context still gets a car list: the
       turntable is the only thing that goes missing. */
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 400);

    scene.add(new THREE.HemisphereLight(0xbdd4ff, 0x2a2622, 1.25));
    const key = new THREE.DirectionalLight(0xfff3e2, 2.5);
    key.position.set(5, 7, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x7fb0ff, 1.7);
    rim.position.set(-6, 4, -5);
    scene.add(rim);
    const bounce = new THREE.DirectionalLight(0xffb27a, 0.55);
    bounce.position.set(0, -4, 3);
    scene.add(bounce);

    /* the floor: a dark disc with the game's signal ring around it */
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(4.4, 64),
      new THREE.MeshStandardMaterial({ color: 0x101319, roughness: 0.72, metalness: 0.28 }),
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(3.34, 3.4, 128),
      new THREE.MeshBasicMaterial({ color: 0xff6a2a, transparent: true, opacity: 0.5, side: THREE.DoubleSide }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.004;
    scene.add(ring);
    const grid = new THREE.GridHelper(8.8, 22, 0x28303c, 0x1a2027);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.5;
    grid.position.y = 0.002;
    scene.add(grid);

    const turntable = new THREE.Group();
    scene.add(turntable);

    let alive = true;
    let raf = 0;
    let held: THREE.Object3D | null = null;

    const fit = (obj: THREE.Object3D, mats: THREE.MeshStandardMaterial[]) => {
      if (held) {
        turntable.remove(held);
        disposeTree(held);
      }
      held = obj;
      paintMats.current = mats;
      for (const m of mats) m.color.setHex(paintRef.current);

      const pivot = new THREE.Group();
      pivot.rotation.y = (turn * Math.PI) / 180;
      pivot.add(obj);
      turntable.add(pivot);

      /* measured, then normalised: car-sized, centred, wheels on the floor */
      const raw = new THREE.Box3().setFromObject(obj);
      const rawSize = raw.getSize(new THREE.Vector3());
      const length = Math.max(rawSize.x, rawSize.z) || 1;
      const scale = THREE.MathUtils.clamp(4.6 / length, 0.05, 40);
      obj.scale.multiplyScalar(scale);
      obj.updateMatrixWorld(true);

      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const centre = box.getCenter(new THREE.Vector3());
      obj.position.sub(new THREE.Vector3(centre.x, box.min.y, centre.z));
      obj.updateMatrixWorld(true);

      const radius = Math.max(size.x, size.y, size.z) * 0.5;
      const dist = (radius / Math.tan((camera.fov * Math.PI) / 360)) * 1.18;
      camera.position.set(dist * 0.36, Math.max(1.05, radius * 0.62), dist * 1.2);
      camera.lookAt(0, Math.max(0.3, radius * 0.5), 0);
    };

    const procedural = () => {
      if (!alive) return;
      const built = buildVehicle(kind, paintRef.current, false);
      fit(built.root, [built.materials.paint]);
    };

    /* the class's own body shows at once; the real model swaps in behind it */
    procedural();
    if (url) {
      loader().load(
        url,
        (gltf) => {
          if (!alive) {
            disposeTree(gltf.scene);
            return;
          }
          const mats = paintSurfaces(gltf.scene);
          fit(gltf.scene, mats.length ? mats : paintMats.current);
        },
        undefined,
        () => {
          /* the model never arrived: the class body is already on the floor */
        },
      );
    }

    const resize = () => {
      const w = host.clientWidth || 640;
      const h = host.clientHeight || 360;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      turntable.rotation.y += dt * 0.36;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      paintMats.current = [];
      if (held) disposeTree(held);
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [url, kind, turn]);

  /* colour only: no reload, no re-render of the scene graph */
  useEffect(() => {
    for (const m of paintMats.current) m.color.setHex(paint);
  }, [paint]);

  return <div ref={hostRef} className={className} />;
}
