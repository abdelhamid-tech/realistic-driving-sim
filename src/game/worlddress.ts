/**
 * WORLD DRESSING — the textures the ground wears.
 *
 * The shipped map carries world-space UVs (metres divided by the tile size),
 * so these textures repeat seamlessly across every road, bank and floor.
 * The road tile is drawn in the reference atlas style: asphalt with kerbs
 * and baked lane markings, one tile = one road strip.
 *
 * When the owner uploads their own textures (the /assets page → convex
 * assets.ts), the game swaps every texture here for theirs, globally: every
 * player, every session, until the owner removes them.
 */

import * as THREE from "three";

export type DressSlot =
  | "road" | "grass" | "concrete" | "sand" | "brick" | "leaf" | "water";

export const DRESS_SLOTS: DressSlot[] = [
  "road", "grass", "concrete", "sand", "brick", "leaf", "water",
];

export const DRESS_LABEL: Record<DressSlot, string> = {
  road: "Road (asphalt + kerbs + markings)",
  grass: "Grass & banks",
  concrete: "Concrete (kerbs, sidewalks, quays)",
  sand: "Sand & paths",
  brick: "Brick (warehouses, homes)",
  leaf: "Foliage (trees, parks)",
  water: "Water (river & ponds)",
};

/** GLTF material names the shipped map uses, mapped to dressing slots. */
const NAME_TO_SLOT: [RegExp, DressSlot][] = [
  [/^asphalt$/i, "road"],
  [/^road$/i, "road"],
  [/^grass$/i, "grass"],
  [/^leaf|^foliage$/i, "leaf"],
  [/^sand$/i, "sand"],
  [/^water$/i, "water"],
  [/^concrete$/i, "concrete"],
  [/^brick$/i, "brick"],
  [/^tile$/i, "brick"],
];

export function slotForMaterial(name: string | undefined): DressSlot | null {
  if (!name) return null;
  for (const [re, slot] of NAME_TO_SLOT) if (re.test(name)) return slot;
  return null;
}

/* ------------------------------------------------------------------ loading */

const loader = new THREE.TextureLoader();
loader.setCrossOrigin("anonymous");

const aniso = () => 8;

/** metres one texture tile spans on the ground, per slot */
export const TILE_METRES: Record<DressSlot, number> = {
  road: 14, grass: 5, concrete: 4, sand: 3, brick: 6, leaf: 3, water: 40,
};

function tune(t: THREE.Texture) {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso();
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** The shipped set, straight out of public/tex/. */
async function loadShipped(slot: DressSlot): Promise<THREE.Texture> {
  const t = await loader.loadAsync(`/tex/${slot}.png`);
  return tune(t);
}

/* --------------------------------------------------------------- the cache */

export interface WorldDress {
  textures: Map<DressSlot, THREE.Texture>;
  urls: Map<DressSlot, string>;
  dispose(): void;
}

async function fetchTexture(url: string): Promise<THREE.Texture> {
  const t = await loader.loadAsync(url);
  return tune(t);
}

/**
 * Build a dressing set: shipped textures for any slot the owner hasn't
 * overridden, their upload for the ones they have. `overrides` maps a slot
 * to a URL (a Convex storage URL for uploads, "" to force the shipped one).
 */
export async function loadWorldDress(
  overrides: Partial<Record<DressSlot, string>> = {},
): Promise<WorldDress> {
  const textures = new Map<DressSlot, THREE.Texture>();
  const urls = new Map<DressSlot, string>();
  await Promise.all(
    DRESS_SLOTS.map(async (slot) => {
      const url = overrides[slot];
      try {
        const tex = await fetchTexture(url || `/tex/${slot}.png`);
        textures.set(slot, tex);
        urls.set(slot, url || `/tex/${slot}.png`);
      } catch {
        /* a missing shipped texture or a dead URL: leave the material as is */
      }
    }),
  );
  return {
    textures,
    urls,
    dispose() {
      for (const t of textures.values()) t.dispose();
      textures.clear();
      urls.clear();
    },
  };
}

/**
 * Apply a dressing set to a whole scene: every material whose GLTF name maps
 * to a slot gets that slot's texture, with the repeat matching the map's
 * world-space UVs (which are already in metres / TILE_METRES — so repeat 1).
 * Materials keep their own colour, roughness and metalness.
 */
export function applyWorldDress(root: THREE.Object3D, dress: WorldDress) {
  const seen = new Set<THREE.Material>();
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    const list = Array.isArray(m.material) ? m.material : [m.material];
    for (const mat of list) {
      const std = mat as THREE.MeshStandardMaterial;
      if (!std || !("isMeshStandardMaterial" in std) || seen.has(std)) continue;
      seen.add(std);
      const slot = slotForMaterial(std.name);
      if (!slot) continue;
      const tex = dress.textures.get(slot);
      if (!tex) continue;
      std.map = tex;
      std.color?.setScalar(1);      // the texture carries the colour now
      std.roughness = slot === "water" ? 0.2 : 0.95;
      std.needsUpdate = true;
    }
  });
}
