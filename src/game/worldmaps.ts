/* ============================================================================
 *  WORLD MAPS
 *
 *  The game ships with one world: the procedural city ("APEX CITY"). A map
 *  imported from the hidden /import page replaces it — the model's own streets
 *  become the surface the tyres grip, its walls become solid, its widest road
 *  becomes the start line.
 *
 *  Everything here is the *description* of a world; the loading and the mesh
 *  analysis live in ./engine and ./mapbuild.
 * ==========================================================================*/

export type WorldMapKind = "procedural" | "glb" | "zip" | "fbx";

export interface WorldMapSource {
  id: string;
  name: string;
  kind: WorldMapKind;
  /** empty for the built-in city, otherwise somewhere the loader can fetch */
  url: string;
  bytes: number;
  /** metres across the longest side; 0 keeps the model's own units */
  fitTo: number;
  /** degrees to yaw the model, for a model authored facing another way */
  turn: number;
  /** drivable field cell size in metres; 0 takes the loader default */
  cell: number;
  /** vertical faces taller than this block the car; 0 takes the default */
  wallHeight: number;
  /** where the car starts; null means "find the widest street" */
  spawn: { x: number; z: number; yaw: number } | null;
  /**
   * A shipped map can bring the list of props it wants standing on it: the
   * spots its street furniture belongs on, in the coordinates the engine sees
   * once the model has been centred (see ./props). Watch out: a map without
   * one is driven exactly as its author modelled it.
   */
  propsUrl?: string;
  credit: string;
}

/** How wide an imported map is stretched by default. Metres. */
export const DEFAULT_FIT = 1200;

/** The world the game drives on when nothing has been imported. */
export const PROCEDURAL_MAP: WorldMapSource = {
  id: "apex-city",
  name: "APEX CITY",
  kind: "procedural",
  url: "",
  bytes: 0,
  fitTo: 0,
  turn: 0,
  cell: 0,
  wallHeight: 0,
  spawn: null,
  credit: "the built-in procedural city",
};

export function isProcedural(src: WorldMapSource) {
  return src.kind === "procedural" || !src.url;
}

/* ---------------------------------------------------------------------------
 *  THE MAP THE GAME SHIPS WITH — one world, built from code
 *  (tools/build-riverbend.mjs), served out of public/maps/. Metres already,
 *  so it is not re-fitted.
 *
 *  The URL is a *bundle-relative* path (no leading slash), which is what the
 *  CrazyGames technical requirements ask for: an uploaded bundle is served from
 *  a subfolder, where "/maps/riverbend.glb" would point at the root of their
 *  host and 404. Relative paths resolve against the document in every case —
 *  local dev, the owner's domain, and the game host.
 * -------------------------------------------------------------------------*/
export const BUILT_IN_MAPS: WorldMapSource[] = [
  {
    id: "riverbend",
    name: "RIVERBEND",
    kind: "glb",
    url: "maps/riverbend.glb",
    bytes: 7530104,
    fitTo: 0,
    turn: 0,
    cell: 4,
    wallHeight: 2.2,
    spawn: null,
    propsUrl: "maps/riverbend.props.json",
    credit:
      "1800 × 1800 m river city · 6 crossings with real roads over every one, downtown, industrial, mall, river island, tunnels, forest · real trees, lamps and signals",
  },
];

/**
 * The world the game opens on. RIVERBEND is the city the game ships with — the
 * one built by tools/build-riverbend.mjs, with the owner's own bridge baked into
 * it — so it is where a player starts, and the generated city is the one you go
 * and find in the world list (or the one the game falls back to).
 */
export const HOME_MAP: WorldMapSource = BUILT_IN_MAPS[0] ?? PROCEDURAL_MAP;

/** What everybody can drive: the world it ships with, then the generated city. */
export const WORLD_MAP_LIST: WorldMapSource[] = [...BUILT_IN_MAPS, PROCEDURAL_MAP];

/** One row of the `worldMaps` table, as the query returns it. */
export interface WorldMapRow {
  id: string;
  name: string;
  fileName: string;
  url: string | null;
  kind: string;
  bytes: number;
  active: boolean;
  /** published maps show up in everybody's world picker */
  published?: boolean;
  fitTo: number | null;
  turn: number;
  cell: number | null;
  wallHeight: number | null;
  spawn: { x: number; z: number; yaw: number } | null;
  createdAt: number;
}

/** A stored map, ready to hand to the engine. Null if its bytes are gone. */
export function mapFromRow(row: WorldMapRow): WorldMapSource | null {
  if (!row.url) return null;
  const kind: WorldMapKind = row.kind === "zip" || row.kind === "fbx" ? row.kind : "glb";
  return {
    id: row.id,
    name: row.name,
    kind,
    url: row.url,
    bytes: row.bytes,
    fitTo: row.fitTo ?? DEFAULT_FIT,
    turn: row.turn ?? 0,
    cell: row.cell ?? 0,
    wallHeight: row.wallHeight ?? 0,
    spawn: row.spawn ?? null,
    credit: `${row.fileName} · ${kind.toUpperCase()}${row.published ? " · published" : ""}`,
  };
}

export function formatBytes(bytes: number) {
  if (!bytes) return "—";
  if (bytes >= 1073741824) return `${(bytes / 1073741824).toFixed(2)} GB`;
  if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
