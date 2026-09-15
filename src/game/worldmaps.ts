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

/** One row of the `worldMaps` table, as the query returns it. */
export interface WorldMapRow {
  id: string;
  name: string;
  fileName: string;
  url: string | null;
  kind: string;
  bytes: number;
  active: boolean;
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
    credit: `${row.fileName} · ${kind.toUpperCase()}`,
  };
}

export function formatBytes(bytes: number) {
  if (!bytes) return "—";
  if (bytes >= 1073741824) return `${(bytes / 1073741824).toFixed(2)} GB`;
  if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
