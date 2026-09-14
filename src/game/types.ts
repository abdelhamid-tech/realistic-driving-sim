import type { VehicleKind, VehicleSpec } from "./vehicles";

export type Weather = "clear" | "overcast" | "rain";

export const WEATHER_LABEL: Record<Weather, string> = {
  clear: "Clear",
  overcast: "Overcast",
  rain: "Rain",
};

export const CAMERA_LABEL = ["Chase", "Cockpit", "Hood", "Bumper", "Cinema", "Orbit"];

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
  headlights: boolean;
  camera: number;
  weather: Weather;
  timeOfDay: number;
  wet: number;
  kind: VehicleKind;
  paint: number;
  traffic: number;
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
}

export interface GameHandle {
  destroy(): void;
  setVehicle(kind: VehicleKind): void;
  setMode(index: number): void;
  setCamera(index: number): void;
  setTimeOfDay(hours: number): void;
  setWeather(weather: Weather): void;
  setPaint(hex: number): void;
  setHeadlights(on: boolean): void;
  setPaused(paused: boolean): void;
  reset(): void;
  importCar(file: File): Promise<string>;
  setVolume(v: number): void;
  sessionStats(): SessionStats;
}
