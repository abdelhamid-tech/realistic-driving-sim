import type { VehicleKind, VehicleSpec } from "./vehicles";
import type { WorldMapSource } from "./worldmaps";

export type Weather = "clear" | "overcast" | "rain";

export const WEATHER_LABEL: Record<Weather, string> = {
  clear: "Clear",
  overcast: "Overcast",
  rain: "Rain",
};

export const CAMERA_LABEL = ["Chase", "Cockpit", "Hood", "Bumper", "Cinema", "Orbit"];

/** Another driver in the room, as sent over the network. */
export interface RemoteDriver {
  /** session id — stable while they are online */
  id: string;
  name: string;
  /** the library car they picked, for the nameplate */
  carName: string;
  /** base body shape to draw them with */
  kind: VehicleKind;
  paint: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  speed: number;
}

/** What we send about ourselves, sampled from the physics at ~8 Hz. */
export interface NetSnapshot {
  x: number;
  y: number;
  z: number;
  yaw: number;
  speed: number;
}

export interface Telemetry {
  /** km/h */
  speedKph: number;
  rpm: number;
  gear: string;
  modeIndex: number;
  surface: string;
  driftDeg: number;
  driftPoints: number;
  combo: number;
  gLat: number;
  gLon: number;
  heat: number[];
  slip: number[];
  load: number[];
  fps: number;
  /** the quality tier actually in use, e.g. "AUTO / MEDIUM" */
  quality: string;
  headlights: boolean;
  camera: number;
  weather: Weather;
  timeOfDay: number;
  wet: number;
  kind: VehicleKind;
  paint: number;
  traffic: number;
  /** other drivers currently drawn in the world */
  peers: number;
  topSpeedKph: number;
  best0to100: number | null;
  distanceKm: number;
  physicsHz: number;
}

export interface SessionStats {
  topSpeedKph: number;
  best0to100: number | null;
  distanceKm: number;
  driftPoints: number;
  kind: VehicleKind;
  /** name of the car that was driven, from the library */
  car: string;
  seconds: number;
}

export interface GameOptions {
  canvas: HTMLCanvasElement;
  cluster: HTMLCanvasElement;
  gmeter: HTMLCanvasElement;
  onTelemetry: (t: Telemetry) => void;
  onToast: (message: string) => void;
  onReady?: (spec: VehicleSpec) => void;
  onError?: (message: string) => void;
  initialVehicle?: VehicleKind;
  initialWeather?: Weather;
  initialTimeOfDay?: number;
  initialPaint?: number;
  /** URL per dressing slot the owner has overridden; absent = shipped texture */
  worldTextures?: Partial<Record<string, string>>;
  /** called when the ground textures finish loading */
  onDressed?: () => void;
}

/**
 * How a model the rigger cannot see the way its author did should be turned:
 * `turn` rotates the body *and* re-labels the wheels, so a car facing
 * backwards still steers from its nose. 0 or 180.
 */
export interface CarLoadOptions {
  /** degrees, clockwise seen from above */
  turn?: number;
}

export interface GameHandle {
  destroy(): void;
  /** Procedural body of that class — the fallback while a model downloads. */
  setVehicle(kind: VehicleKind): void;
  setMode(index: number): void;
  setCamera(index: number): void;
  setTimeOfDay(hours: number): void;
  setWeather(weather: Weather): void;
  setPaint(hex: number): void;
  setHeadlights(on: boolean): void;
  setPaused(paused: boolean): void;
  /** -1 keeps it automatic; 0 low, 1 medium, 2 high */
  setQuality(mode: number): void;
  reset(): void;
  /**
   * Installs a car from the library: fetches the GLB, measures it, rigs the
   * wheels it can find and drives it with the given physics spec.
   */
  loadCar(url: string, label: string, spec: VehicleSpec, opts?: CarLoadOptions): Promise<string>;
  /**
   * Swaps the built-in city for an imported map: the model is downloaded,
   * measured and read into a drivable surface. `onProgress` gets 0..1 and a
   * short note. Resolves with a one-line report.
   */
  loadWorldMap(
    source: WorldMapSource,
    onProgress?: (progress: number, note: string) => void,
  ): Promise<string>;
  /** Back to the built-in procedural city. */
  unloadWorldMap(): void;
  /** Draws the other drivers in the room; call with a new list whenever it changes. */
  setRemoteDrivers(list: RemoteDriver[]): void;
  /** Our own transform for the network. Null before the first frame. */
  netSnapshot(): NetSnapshot | null;
  setVolume(v: number): void;
  sessionStats(): SessionStats;
}
