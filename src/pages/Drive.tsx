import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { createGame } from "@/game/engine";
import {
  CAR_LIBRARY, DEFAULT_CAR_ID, allCars, carById, carFromAll, carKind, carSpec, formatBytes, type CarEntry, type ImportedCar,
} from "@/game/carmodels";
import { PAINT_COLORS, VEHICLE_ORDER, type VehicleSpec } from "@/game/vehicles";
import { CAMERA_LABEL, WEATHER_LABEL, type GameHandle, type RemoteDriver, type Telemetry, type Weather } from "@/game/types";
import {
  PROCEDURAL_MAP, WORLD_MAP_LIST, mapFromRow, type WorldMapRow, type WorldMapSource,
} from "@/game/worldmaps";
import { ArrowLeft, Check, Cloud, CloudRain, Download, Gauge, Link2, Loader2, Moon, Settings2, Sun, Users, X, Zap } from "lucide-react";

const MODES = ["NORMAL", "DRIFT", "RALLY", "ARCADE"];

/** The public room everybody lands in unless an invite says otherwise. */
const DEFAULT_ROOM = "apex-city";
/** How often our position goes out. About eight a second: smooth and cheap. */
const PUBLISH_MS = 130;

const TIME_PRESETS: { label: string; hour: number; icon: typeof Sun }[] = [
  { label: "Dawn", hour: 6.4, icon: Sun },
  { label: "Noon", hour: 12.5, icon: Sun },
  { label: "Dusk", hour: 18.6, icon: Sun },
  { label: "Night", hour: 22.5, icon: Moon },
];

const WEATHER_PRESETS: { key: Weather; icon: typeof Sun }[] = [
  { key: "clear", icon: Sun },
  { key: "overcast", icon: Cloud },
  { key: "rain", icon: CloudRain },
];

function key(code: string, down: boolean) {
  window.dispatchEvent(new KeyboardEvent(down ? "keydown" : "keyup", { code, bubbles: true }));
}

/** Per-tab identity: unique, stable while the tab lives, never a user id. */
function makeSession() {
  const c = globalThis.crypto as Crypto | undefined;
  if (c?.randomUUID) return c.randomUUID();
  return "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

function cleanRoom(raw: string) {
  return raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 20) || DEFAULT_ROOM;
}

function readRoom() {
  return cleanRoom(new URLSearchParams(window.location.search).get("room") ?? DEFAULT_ROOM);
}

function makeCode() {
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 5; i++) out += A[(Math.random() * A.length) | 0];
  return out;
}

function asKind(raw: string) {
  return ((VEHICLE_ORDER as string[]).includes(raw) ? raw : "sedan") as (typeof VEHICLE_ORDER)[number];
}

function setRoomInUrl(room: string) {
  const url = new URL(window.location.href);
  url.searchParams.set("room", room);
  window.history.replaceState(null, "", url.toString());
}

export default function Drive() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const clusterRef = useRef<HTMLCanvasElement | null>(null);
  const gmeterRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<GameHandle | null>(null);
  const loadedCarRef = useRef<string | null>(null);

  const [tel, setTel] = useState<Telemetry | null>(null);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [panel, setPanel] = useState<"none" | "settings" | "car">("none");
  const [booted, setBooted] = useState(false);
  const [bootError, setBootError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [carId, setCarId] = useState(DEFAULT_CAR_ID);
  const [equipping, setEquipping] = useState<string | null>(null);
  const [paint, setPaint] = useState(PAINT_COLORS[4]);
  const [weather, setWeather] = useState<Weather>("clear");
  const [hour, setHour] = useState(16.2);
  const [camera, setCamera] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [headlights, setHeadlights] = useState(false);
  const [quality, setQualityMode] = useState(-1);

  const [room, setRoom] = useState(readRoom);
  const [roomDraft, setRoomDraft] = useState(readRoom);
  const [netOn, setNetOn] = useState(true);
  const [netState, setNetState] = useState<"idle" | "connecting" | "live" | "error">("idle");
  const [session] = useState(makeSession);

  /* the world we are driving on: the built city, or an imported map */
  const [worldName, setWorldName] = useState(PROCEDURAL_MAP.name);
  const [worldLoad, setWorldLoad] = useState<{ p: number; note: string } | null>(null);
  const loadedWorldRef = useRef<string | null>(null);

  const { isAuthenticated } = useAuth();
  const submitRun = useMutation(api.driverStats.submitRun);
  const publish = useMutation(api.multiplayer.publish);
  const leaveRoom = useMutation(api.multiplayer.leave);
  const myStats = useQuery(api.driverStats.myStats, isAuthenticated ? {} : "skip");
  const peers = useQuery(api.multiplayer.peers, netOn ? { room } : "skip");
  const worldMaps = useQuery(api.maps.list);
  const worldAssets = useQuery(api.assets.list);
  const importedCars = useQuery(api.cars.list) as ImportedCar[] | undefined;
  /* the full garage: the built-in library plus the owner's imported cars */
  const garage = useMemo(() => allCars(importedCars ?? []), [importedCars]);

  const entry = useMemo(
    () => carFromAll(carId, importedCars ?? []) ?? carById(DEFAULT_CAR_ID),
    [carId, importedCars],
  );
  const spec: VehicleSpec = useMemo(() => carSpec(entry), [entry]);
  const textureOverrides = useMemo(() => {
    const out: Record<string, string> = {};
    for (const a of worldAssets ?? []) if (a.url) out[a.slot] = a.url;
    return out;
  }, [worldAssets]);

  const notify = useCallback((message: string) => {
    setNotice(message);
    window.clearTimeout((notify as unknown as { t?: number }).t);
    (notify as unknown as { t?: number }).t = window.setTimeout(() => setNotice(null), 2400);
  }, []);

  /* ---------------------------------------------------------------- engine */
  useEffect(() => {
    const host = hostRef.current;
    if (!host || !clusterRef.current || !gmeterRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 h-full w-full block";
    host.appendChild(canvas);
    let handle: GameHandle | null = null;
    try {
      handle = createGame({
        canvas,
        cluster: clusterRef.current,
        gmeter: gmeterRef.current,
        onTelemetry: setTel,
        onToast: notify,
        onError: (m) => setBootError(m),
        initialVehicle: carKind(carById(DEFAULT_CAR_ID)),
        initialWeather: "clear",
        initialTimeOfDay: 16.2,
        initialPaint: PAINT_COLORS[4],
        worldTextures: textureOverrides,
      });
      gameRef.current = handle;
      handle.setPaused(true);
      setBooted(true);
    } catch (err) {
      setBootError(err instanceof Error ? err.message : String(err));
    }
    return () => {
      handle?.destroy();
      gameRef.current = null;
      loadedCarRef.current = null;
      loadedWorldRef.current = null;
      canvas.remove();
    };
  }, [notify]);

  useEffect(() => {
    if (booted) return;
    const t = window.setTimeout(() => {
      if (!gameRef.current) setBootError((e) => e ?? "The renderer took too long to start.");
    }, 12000);
    return () => window.clearTimeout(t);
  }, [booted]);

  /* -------------------------------------------------------- the player's car
   *  The library is fixed: the only thing a player can do is pick one of these
   *  cars. A pick swaps the procedural body of that class in immediately, so
   *  the shape changes at once, then streams the real model in behind it. */
  useEffect(() => {
    if (!booted) return;
    const game = gameRef.current;
    /* imported cars live in the garage too: look in the whole list */
    const target = carFromAll(carId, importedCars ?? []) ?? carById(DEFAULT_CAR_ID);
    if (!game || !target.url || loadedCarRef.current === carId) return;
    loadedCarRef.current = carId;
    let live = true;
    setEquipping(target.id);
    game
      .loadCar(target.url, target.name, carSpec(target), target.turn ?? 0)
      .then((report) => {
        if (live) toast.success(report, { description: target.author + " / " + target.license });
      })
      .catch((err) => {
        if (live) {
          toast.error("Could not load the " + target.name, {
            description: err instanceof Error ? err.message : String(err),
          });
        }
      })
      .finally(() => {
        if (live) setEquipping(null);
      });
    return () => {
      live = false;
    };
  }, [booted, carId, importedCars]);

  const chooseCar = useCallback(
    (id: string) => {
      const target = carFromAll(id, importedCars ?? []) ?? carById(DEFAULT_CAR_ID);
      /* the fallback body of the right class shows instantly */
      gameRef.current?.setVehicle(carKind(target));
      setCarId(id);
    },
    [importedCars],
  );

  const start = useCallback(() => {
    setStarted(true);
    setPaused(false);
    gameRef.current?.setPaused(false);
  }, []);
  const startedRef = useRef(false);
  const startRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (!startedRef.current) {
        if (["Enter", "Space", "KeyW", "ArrowUp"].includes(e.code)) {
          e.preventDefault();
          startRef.current?.();
        }
        return;
      }
      if (e.key !== "Escape") return;
      setPanel((p) => (p === "none" ? "settings" : "none"));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const togglePause = useCallback(() => {
    setPaused((p) => {
      gameRef.current?.setPaused(!p);
      return !p;
    });
  }, []);

  const choosePaint = useCallback((hex: number) => {
    setPaint(hex);
    gameRef.current?.setPaint(hex);
  }, []);

  const chooseWeather = useCallback((w: Weather) => {
    setWeather(w);
    gameRef.current?.setWeather(w);
  }, []);

  const chooseHour = useCallback((h: number) => {
    setHour(h);
    gameRef.current?.setTimeOfDay(h);
  }, []);

  const chooseCamera = useCallback((c: number) => {
    setCamera(c);
    gameRef.current?.setCamera(c);
  }, []);

  /* ------------------------------------------------------------- the world
   *  If an imported map is marked active it takes the place of the built city.
   *  The model is fetched, measured and read into the drivable surface once
   *  per visit, and the settings panel can switch worlds by hand. */
  const worldRows = useMemo(() => ((worldMaps ?? []) as unknown as WorldMapRow[]), [worldMaps]);
  const activeMap = useMemo(() => {
    const row = worldRows.find((m) => m.active);
    return row ? mapFromRow(row) : null;
  }, [worldRows]);

  /* what everybody can drive: the built city, the shipped maps, and anything
     the owner has published */
  const worldList = useMemo(() => {
    const out: WorldMapSource[] = [...WORLD_MAP_LIST];
    for (const row of worldRows) {
      const source = mapFromRow(row);
      if (source && !out.some((w) => w.id === source.id)) out.push(source);
    }
    return out;
  }, [worldRows]);

  const chooseWorld = useCallback((source: WorldMapSource) => {
    const game = gameRef.current;
    if (!game) return;
    loadedWorldRef.current = source.id;
    setWorldName(source.name);
    setWorldLoad({ p: 0.01, note: "opening" });
    game
      .loadWorldMap(source, (p, note) => setWorldLoad({ p, note }))
      .then((report) => toast.success(source.name + " is live", { description: report }))
      .catch((err) => {
        loadedWorldRef.current = null;
        toast.error("That world did not load", {
          description: err instanceof Error ? err.message : String(err),
        });
      })
      .finally(() => setWorldLoad(null));
  }, []);

  useEffect(() => {
    if (!booted || worldMaps === undefined) return;
    const game = gameRef.current;
    if (!game) return;
    const wanted = activeMap?.id ?? PROCEDURAL_MAP.id;
    if (loadedWorldRef.current === wanted) return;
    loadedWorldRef.current = wanted;
    if (!activeMap) {
      setWorldName(PROCEDURAL_MAP.name);
      return;
    }
    let live = true;
    setWorldName(activeMap.name);
    setWorldLoad({ p: 0.01, note: "opening" });
    game
      .loadWorldMap(activeMap, (p, note) => {
        if (live) setWorldLoad({ p, note });
      })
      .then((report) => {
        if (live) toast.success(activeMap.name + " is live", { description: report });
      })
      .catch((err) => {
        if (live) loadedWorldRef.current = null;
        toast.error("The active map did not load", {
          description: err instanceof Error ? err.message : String(err),
        });
      })
      .finally(() => {
        if (live) setWorldLoad(null);
      });
    return () => {
      live = false;
    };
  }, [booted, activeMap, worldMaps]);

  /* ------------------------------------------------------------------- net */
  const publishRef = useRef(publish);
  const leaveRef = useRef(leaveRoom);
  const infoRef = useRef({ carId: entry.id, carName: entry.name, kind: carKind(entry), paint });
  useEffect(() => {
    publishRef.current = publish;
  }, [publish]);
  useEffect(() => {
    leaveRef.current = leaveRoom;
  }, [leaveRoom]);
  useEffect(() => {
    infoRef.current = { carId: entry.id, carName: entry.name, kind: carKind(entry), paint };
  }, [entry, paint]);

  /* our own transform, straight out of the physics, about eight times a second */
  useEffect(() => {
    if (!started || !netOn) {
      if (started) setNetState("idle");
      return;
    }
    setNetState("connecting");
    let beat = 0;
    const tick = () => {
      const game = gameRef.current;
      if (!game || document.hidden) return;
      const s = game.netSnapshot();
      if (!s) return;
      const info = infoRef.current;
      const seq = ++beat;
      void publishRef
        .current({
          room,
          session,
          carId: info.carId,
          carName: info.carName,
          kind: info.kind,
          paint: info.paint,
          x: s.x,
          y: s.y,
          z: s.z,
          yaw: s.yaw,
          speed: s.speed,
        })
        .then(() => {
          if (seq === beat) setNetState("live");
        })
        .catch(() => {
          if (seq === beat) setNetState("error");
        });
    };
    tick();
    const id = window.setInterval(tick, PUBLISH_MS);
    /* a hidden tab stops transmitting, and closing it says goodbye properly */
    const onHide = () => {
      if (document.hidden) void leaveRef.current({ session }).catch(() => {});
    };
    const onPageHide = () => {
      void leaveRef.current({ session }).catch(() => {});
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", onPageHide);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", onPageHide);
      setNetState("idle");
      void leaveRef.current({ session }).catch(() => {});
    };
  }, [started, netOn, room, session]);

  const remoteList = useMemo<RemoteDriver[]>(
    () =>
      (peers ?? [])
        .filter((p) => p.session !== session)
        .map((p) => ({
          id: p.session,
          name: p.name,
          carName: p.carName,
          kind: asKind(p.kind),
          paint: p.paint,
          x: p.x,
          y: p.y,
          z: p.z,
          yaw: p.yaw,
          speed: p.speed,
        })),
    [peers, session],
  );

  useEffect(() => {
    if (!booted) return;
    gameRef.current?.setRemoteDrivers(netOn ? remoteList : []);
  }, [booted, netOn, remoteList]);

  const otherDrivers = useMemo(
    () => (peers ?? []).filter((p) => p.session !== session),
    [peers, session],
  );

  const inviteLink = useMemo(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("room", room);
    return url.toString();
  }, [room]);

  const joinRoom = useCallback((raw: string) => {
    const next = cleanRoom(raw);
    setRoom(next);
    setRoomDraft(next);
    setRoomInUrl(next);
  }, []);

  const copyInvite = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      toast.success("Invite link copied", { description: inviteLink });
    } catch {
      toast.message("Share this link", { description: inviteLink });
    }
  }, [inviteLink]);

  /* --------------------------------------------------------------- saving */
  const saveRun = useCallback(async () => {
    const stats = gameRef.current?.sessionStats();
    if (!stats) return;
    try {
      await submitRun({
        topSpeedKph: Number(stats.topSpeedKph.toFixed(1)),
        best0to100: stats.best0to100 === null ? undefined : Number(stats.best0to100.toFixed(2)),
        distanceKm: Number(stats.distanceKm.toFixed(2)),
        driftPoints: Math.round(stats.driftPoints),
        car: stats.car,
        seconds: Math.round(stats.seconds),
      });
      toast.success("Run saved to your garage", {
        description: Math.round(stats.driftPoints) + " drift pts / " + stats.topSpeedKph.toFixed(0) + " km/h top",
      });
    } catch (err) {
      toast.error("Could not save run", {
        description: err instanceof Error ? err.message : String(err),
      });
    }
  }, [submitRun]);

  useEffect(() => {
    startedRef.current = started;
  }, [started]);
  useEffect(() => {
    startRef.current = start;
  }, [start]);

  const heat = tel ? tel.heat.reduce((a, b) => a + b, 0) / 4 : 0;
  const tyreState = useMemo(() => {
    if (heat < 0.25) return { label: "COLD", className: "text-muted-foreground" };
    if (heat < 0.65) return { label: "WARM", className: "text-emerald-400" };
    return { label: "HOT", className: "text-signal" };
  }, [heat]);

  const othersOnline = otherDrivers.length;

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-carbon text-chalk select-none">
      {/* 3D viewport */}
      <div ref={hostRef} className="absolute inset-0" />

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(4,5,8,.55) 100%)" }}
      />

      {/* ------------------------------------------------------------ HUD */}
      <div className={"pointer-events-none absolute inset-0 z-[3] transition-opacity duration-500 " + (started ? "opacity-100" : "opacity-0")}>
        {/* brand */}
        <div className="absolute left-4 top-4 sm:left-6 sm:top-5">
          <div className="font-mono text-[10px] tracking-[0.34em] text-signal">RIVERBEND / DRIVE</div>
          <div className="font-display text-xl leading-tight font-bold tracking-tight sm:text-2xl">
            {spec.name}
          </div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
            {spec.klass} / {spec.drivetrain.toUpperCase()} / {spec.mass} KG
          </div>
        </div>

        {/* mode pills */}
        <div className="pointer-events-auto absolute left-4 top-24 flex flex-wrap gap-1.5 sm:left-6 sm:top-28">
          {MODES.map((m, i) => (
            <button
              key={m}
              type="button"
              onClick={() => gameRef.current?.setMode(i)}
              className={"cursor-pointer border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] transition-colors " + (
                tel?.modeIndex === i
                  ? "border-signal bg-signal text-carbon font-semibold"
                  : "border-white/15 bg-black/45 text-muted-foreground hover:border-signal/60 hover:text-chalk"
              )}
            >
              {i + 1}/{m}
            </button>
          ))}
        </div>

        {/* telemetry */}
        <div className="absolute bottom-4 right-4 w-[212px] border border-white/12 bg-black/60 p-3 backdrop-blur-sm sm:bottom-6 sm:right-6">
          <div className="mb-2 font-mono text-[9px] tracking-[0.3em] text-muted-foreground">TELEMETRY</div>
          <canvas ref={gmeterRef} className="mx-auto block" width={118} height={118} />
          <Row label="SPEED" value={tel ? Math.round(tel.speedKph) + " km/h" : "-"} />
          <Row label="RPM" value={tel ? Math.round(tel.rpm).toString() : "-"} />
          <Row label="SURFACE" value={tel?.surface ?? "TARMAC"} />
          <Row label="DRIFT" value={tel ? Math.round(Math.min(tel.driftDeg, 120)) + " deg" : "0 deg"} />
          <Row label="DRIFT PTS" value={tel ? Math.round(tel.driftPoints).toLocaleString() : "0"} hot={(tel?.driftDeg ?? 0) > 12} />
          <Row label="LOAD" value={tel ? Math.hypot(tel.gLat, tel.gLon).toFixed(2) + " g" : "0.00 g"} />
          <Row label="TYRES" value={tyreState.label} valueClass={tyreState.className} />
          <Row
            label="DRIVERS"
            value={netOn ? 1 + othersOnline + " in " + room.toUpperCase().slice(0, 12) : "SOLO"}
            hot={othersOnline > 0}
          />

          <div className="mt-2 flex items-end justify-between gap-2">
            {["FL", "FR", "RL", "RR"].map((w, i) => {
              const slip = tel ? tel.slip[i] ?? 0 : 0;
              const pct = Math.min(slip, 1.5) / 1.5;
              return (
                <div key={w} className="flex flex-1 flex-col items-center gap-1">
                  <div className="relative h-11 w-full overflow-hidden bg-white/8">
                    <div
                      className={"absolute bottom-0 left-0 right-0 transition-[height] duration-100 " + (slip > 0.9 ? "bg-signal" : "bg-emerald-400/80")}
                      style={{ height: pct * 100 + "%" }}
                    />
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.1em] text-muted-foreground">{w}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px] text-muted-foreground">
            <span>{tel?.fps ? Math.round(tel.fps) + " FPS" : "-"}</span>
            <span>{worldName}</span>
            <span>{(tel?.physicsHz ?? 240) + " HZ PHYSICS"}</span>
            <span>{(tel?.traffic ?? 0) + " CARS"}</span>
          </div>
        </div>

        {/* cluster */}
        <div className="absolute bottom-4 left-4 border border-white/12 bg-black/60 p-2 backdrop-blur-sm sm:bottom-6 sm:left-6">
          <canvas ref={clusterRef} className="block" width={232} height={132} />
          <div className="px-1 pb-0.5 font-mono text-[8px] tracking-[0.2em] text-muted-foreground">
            {(tel?.gear ?? "D1") + " / " + WEATHER_LABEL[weather].toUpperCase()}
            {headlights ? " / LIGHTS" : ""}
            {tel?.quality ? " / " + tel.quality : ""}
            {netOn ? " / " + (1 + othersOnline) + " ONLINE" : ""}
          </div>
        </div>

        {/* controls legend */}
        <div className="absolute right-4 top-4 hidden border border-white/12 bg-black/60 p-3 font-mono text-[10px] leading-relaxed text-muted-foreground backdrop-blur-sm lg:block">
          <div className="mb-1 tracking-[0.2em] text-chalk">CONTROLS</div>
          <div><kbd className="text-signal">W</kbd>/<kbd className="text-signal">S</kbd> throttle / brake</div>
          <div><kbd className="text-signal">A</kbd>/<kbd className="text-signal">D</kbd> steer / <kbd className="text-signal">SPACE</kbd> handbrake</div>
          <div><kbd className="text-signal">1-4</kbd> drive modes / <kbd className="text-signal">C</kbd> camera</div>
          <div><kbd className="text-signal">N</kbd> lights / <kbd className="text-signal">R</kbd> reset / <kbd className="text-signal">M</kbd> mute</div>
          <div><kbd className="text-signal">P</kbd> pause / <kbd className="text-signal">ESC</kbd> settings</div>
        </div>
      </div>

      {/* ------------------------------------------------------- top actions */}
      <div className={"absolute right-4 top-4 z-[5] flex gap-2 transition-opacity duration-500 lg:top-auto lg:bottom-[268px] " + (started ? "opacity-100" : "opacity-0")}>
        <HudButton label="Garage" onClick={() => setPanel(panel === "car" ? "none" : "car")}>
          <Gauge className="size-4" />
        </HudButton>
        <HudButton label="Settings" onClick={() => setPanel(panel === "settings" ? "none" : "settings")}>
          <Settings2 className="size-4" />
        </HudButton>
        <HudButton label={paused ? "Resume" : "Pause"} onClick={togglePause}>
          {paused ? <Zap className="size-4" /> : <X className="size-4" />}
        </HudButton>
      </div>

      {/* mobile touch controls */}
      {started && (
        <div className="absolute inset-x-0 bottom-3 z-[5] flex items-end justify-between px-3 lg:hidden">
          <div className="flex gap-2">
            <TouchButton code="KeyA" onPointerDown={() => key("KeyA", true)} onPointerUp={() => key("KeyA", false)}>LEFT</TouchButton>
            <TouchButton code="KeyD" onPointerDown={() => key("KeyD", true)} onPointerUp={() => key("KeyD", false)}>RIGHT</TouchButton>
          </div>
          <div className="flex gap-2">
            <TouchButton code="Space" onPointerDown={() => key("Space", true)} onPointerUp={() => key("Space", false)}>HB</TouchButton>
            <TouchButton code="KeyS" onPointerDown={() => key("KeyS", true)} onPointerUp={() => key("KeyS", false)}>BRK</TouchButton>
            <TouchButton code="KeyW" onPointerDown={() => key("KeyW", true)} onPointerUp={() => key("KeyW", false)}>GAS</TouchButton>
          </div>
        </div>
      )}

      {/* notice */}
      <div
        className={"pointer-events-none absolute left-1/2 z-[6] -translate-x-1/2 border border-white/12 bg-black/70 px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] backdrop-blur-sm transition-all duration-300 " + (
          notice ? "bottom-28 opacity-100" : "bottom-24 opacity-0"
        )}
      >
        {notice}
      </div>

      {/* --------------------------------------------------------- overlays */}
      {!booted && !bootError && (
        <div className="absolute inset-0 z-[8] flex items-center justify-center bg-carbon">
          <div className="text-center">
            <div className="mx-auto mb-3 size-8 animate-spin rounded-full border-2 border-signal border-t-transparent" />
            <div className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground">BUILDING THE CITY...</div>
          </div>
        </div>
      )}

      {worldLoad && started ? (
        <div className="pointer-events-none absolute inset-x-0 top-16 z-[7] flex justify-center">
          <div className="border border-white/12 bg-black/75 px-4 py-2 text-center backdrop-blur-sm">
            <div className="font-mono text-[10px] tracking-[0.24em] text-signal">
              BUILDING {worldName.toUpperCase()} · {Math.round(worldLoad.p * 100)}%
            </div>
            <div className="mt-0.5 font-mono text-[10px] text-muted-foreground">{worldLoad.note}</div>
          </div>
        </div>
      ) : null}

      {bootError && (
        <div className="absolute inset-0 z-[8] flex items-center justify-center bg-carbon/95 p-6">
          <div className="max-w-md border border-destructive/50 bg-black/60 p-6 text-center">
            <div className="font-display text-xl font-bold tracking-tight">WebGL could not start</div>
            <p className="mt-2 text-sm text-muted-foreground">{bootError}</p>
            <Button asChild className="mt-4 cursor-pointer" variant="outline">
              <Link to="/">Back to home</Link>
            </Button>
          </div>
        </div>
      )}

      {booted && !started && (
        <IntroOverlay
          entry={entry}
          garage={garage}
          spec={spec}
          equipping={equipping}
          onChooseCar={chooseCar}
          onStart={start}
          paint={paint}
          onPaint={choosePaint}
          weather={weather}
          onWeather={chooseWeather}
          hour={hour}
          onHour={chooseHour}
          isAuthenticated={isAuthenticated}
          others={othersOnline}
          room={room}
          netOn={netOn}
          onNet={setNetOn}
          worlds={worldList}
          worldName={worldName}
          onWorld={chooseWorld}
        />
      )}

      {started && paused && (
        <div className="absolute inset-0 z-[7] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-[min(92vw,420px)] border border-white/12 bg-carbon p-6 text-center">
            <div className="font-mono text-[10px] tracking-[0.3em] text-signal">PAUSED</div>
            <div className="mt-1 font-display text-2xl font-bold tracking-tight">Engine idling</div>
            {othersOnline > 0 ? (
              <div className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                {othersOnline} OTHER {othersOnline === 1 ? "DRIVER" : "DRIVERS"} ON THE ROAD
              </div>
            ) : null}
            <div className="mt-4 grid gap-2">
              <Button className="cursor-pointer" onClick={togglePause}>Resume driving</Button>
              <Button variant="outline" className="cursor-pointer" onClick={() => setPanel("car")}>Open garage</Button>
              {isAuthenticated ? (
                <Button variant="outline" className="cursor-pointer" onClick={saveRun}>Save run to garage</Button>
              ) : (
                <Button variant="outline" asChild className="cursor-pointer">
                  <Link to="/auth?returnTo=%2Fdrive">Sign in to save runs</Link>
                </Button>
              )}
              <Button variant="ghost" asChild className="cursor-pointer">
                <Link to="/">Leave the city</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {started && panel === "settings" && (
        <SidePanel title="Settings" onClose={() => setPanel("none")}>
          <Group label="Multiplayer">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-xs">Drive with others</Label>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  Shares your position in this room and draws everyone else on the road.
                </p>
              </div>
              <Switch checked={netOn} className="cursor-pointer" onCheckedChange={setNetOn} />
            </div>

            <div className="mt-3 flex gap-1.5">
              <input
                value={roomDraft}
                onChange={(e) => setRoomDraft(e.target.value.slice(0, 20))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    joinRoom(roomDraft);
                    e.currentTarget.blur();
                  }
                }}
                spellCheck={false}
                placeholder="room code"
                className="min-w-0 flex-1 border border-white/12 bg-black/40 px-2 py-1.5 font-mono text-[11px] tracking-[0.14em] text-chalk uppercase outline-none placeholder:text-muted-foreground/60 focus:border-signal/60"
              />
              <Button size="sm" variant="outline" className="cursor-pointer font-mono text-[10px]" onClick={() => joinRoom(roomDraft)}>
                JOIN
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer font-mono text-[10px]"
                onClick={() => joinRoom(makeCode())}
              >
                NEW
              </Button>
            </div>

            <div className="mt-2 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={copyInvite}
                className="flex cursor-pointer items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-chalk"
              >
                <Link2 className="size-3" /> COPY INVITE LINK
              </button>
              <span
                className={"font-mono text-[10px] tracking-[0.14em] " + (
                  netState === "live" ? "text-emerald-400" : netState === "error" ? "text-destructive" : "text-muted-foreground"
                )}
              >
                {!netOn ? "OFFLINE" : netState === "live" ? "LIVE" : netState === "error" ? "RETRYING" : "CONNECTING"}
              </span>
            </div>

            <div className="mt-3 border border-white/10 bg-white/4">
              <div className="flex items-center gap-1.5 border-b border-white/8 px-2 py-1.5 font-mono text-[9px] tracking-[0.22em] text-muted-foreground">
                <Users className="size-3 text-signal" /> {room.toUpperCase()} / {1 + othersOnline} ONLINE
              </div>
              <ul className="divide-y divide-white/8">
                <li className="flex items-center gap-2 px-2 py-1.5 font-mono text-[10px]">
                  <span className="size-1.5 bg-signal" />
                  <span className="min-w-0 flex-1 truncate text-chalk">YOU</span>
                  <span className="truncate text-muted-foreground">{entry.name}</span>
                </li>
                {otherDrivers.map((d) => (
                  <li key={d.session} className="flex items-center gap-2 px-2 py-1.5 font-mono text-[10px]">
                    <span className={"size-1.5 " + (d.age < 1200 ? "bg-emerald-400" : "bg-muted-foreground/50")} />
                    <span className="min-w-0 flex-1 truncate text-chalk">{d.name}</span>
                    <span className="truncate text-muted-foreground">{d.carName}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              Everyone who opens the invite link lands in the same room. Positions are relayed
              about eight times a second and drop out on their own when a driver goes quiet.
            </p>
          </Group>

          <Group label="Monde / world">
            <div className="space-y-2">
              {worldList.map((source) => {
                const driving = worldName === source.name;
                const badge = driving
                  ? "DRIVING"
                  : source.kind === "procedural"
                    ? "PROCEDURAL"
                    : source.url.startsWith("/maps/")
                      ? "SHIPPED"
                      : source.kind.toUpperCase() + (source.bytes ? " · " + formatBytes(source.bytes) : "");
                return (
                  <button
                    key={source.id}
                    type="button"
                    onClick={() => chooseWorld(source)}
                    className={"w-full cursor-pointer border p-3 text-left transition-colors " + (
                      driving ? "border-signal bg-signal/10" : "border-white/12 hover:border-signal/50"
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-sm font-bold tracking-tight">{source.name}</span>
                      <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{badge}</span>
                    </div>
                    <div className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground">
                      {source.credit}
                    </div>
                  </button>
                );
              })}
            </div>

            {worldLoad ? (
              <div className="mt-3">
                <div className="flex items-baseline justify-between font-mono text-[10px] text-muted-foreground">
                  <span>{worldLoad.note}</span>
                  <span>{Math.round(worldLoad.p * 100)}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full bg-white/10">
                  <div className="h-full bg-signal transition-[width]" style={{ width: `${worldLoad.p * 100}%` }} />
                </div>
              </div>
            ) : null}
          </Group>

          <Group label="Time of day">
            <div className="grid grid-cols-4 gap-1.5">
              {TIME_PRESETS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => chooseHour(p.hour)}
                  className={"cursor-pointer border px-2 py-2 font-mono text-[10px] tracking-[0.1em] transition-colors " + (
                    Math.abs(hour - p.hour) < 0.2
                      ? "border-signal bg-signal/15 text-signal"
                      : "border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"
                  )}
                >
                  <p.icon className="mx-auto mb-1 size-3.5" />
                  {p.label}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-mono text-[10px] text-muted-foreground">00</span>
              <Slider
                value={[hour]}
                min={0}
                max={24}
                step={0.25}
                onValueChange={(v) => chooseHour(v[0] ?? 12)}
                className="cursor-pointer"
              />
              <span className="w-10 text-right font-mono text-[10px] text-chalk">
                {hour.toFixed(1).padStart(4, "0")}
              </span>
            </div>
          </Group>

          <Group label="Weather">
            <div className="grid grid-cols-3 gap-1.5">
              {WEATHER_PRESETS.map((w) => {
                const Icon = w.icon;
                return (
                  <button
                    key={w.key}
                    type="button"
                    onClick={() => chooseWeather(w.key)}
                    className={"cursor-pointer border px-2 py-2 font-mono text-[10px] tracking-[0.1em] transition-colors " + (
                      weather === w.key
                        ? "border-signal bg-signal/15 text-signal"
                        : "border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"
                    )}
                  >
                    <Icon className="mx-auto mb-1 size-3.5" />
                    {WEATHER_LABEL[w.key].toUpperCase()}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              Rain and overcast skies cut tyre grip and switch the headlights on automatically.
            </p>
          </Group>

          <Group label="Camera">
            <div className="flex flex-wrap gap-1.5">
              {CAMERA_LABEL.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => chooseCamera(i)}
                  className={"cursor-pointer border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-colors " + (
                    camera === i
                      ? "border-signal bg-signal text-carbon font-semibold"
                      : "border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"
                  )}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </Group>

          <Group label="Performance">
            <div className="flex flex-wrap gap-1.5">
              {["AUTO", "HIGH", "MEDIUM", "LOW"].map((label, i) => {
                const value = i - 1;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      setQualityMode(value);
                      gameRef.current?.setQuality(value);
                    }}
                    className={"cursor-pointer border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-colors " + (
                      quality === value
                        ? "border-signal bg-signal font-semibold text-carbon"
                        : "border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
              {tel ? `RUNNING AT ${tel.quality} · ${Math.round(tel.fps)} FPS` : "MEASURING..."}
              <br />
              Automatic drops resolution, shadow detail, traffic and tyre smoke when the frame rate
              sags, and brings them back when it recovers. Pin a tier if you would rather decide.
            </p>
          </Group>

          <Group label="Assists">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-xs">Headlights</Label>
                <p className="text-[11px] text-muted-foreground">Override the automatic dusk switch.</p>
              </div>
              <Switch
                checked={headlights}
                className="cursor-pointer"
                onCheckedChange={(v) => {
                  setHeadlights(v);
                  gameRef.current?.setHeadlights(v);
                }}
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Label className="text-xs">Volume</Label>
              <Slider
                value={[volume * 100]}
                min={0}
                max={100}
                step={5}
                className="cursor-pointer"
                onValueChange={(v) => {
                  const val = (v[0] ?? 50) / 100;
                  setVolume(val);
                  gameRef.current?.setVolume(val);
                }}
              />
            </div>
          </Group>

          <div className="grid gap-2">
            <Button variant="outline" className="cursor-pointer" onClick={() => gameRef.current?.reset()}>
              Reset to the start line
            </Button>
          </div>
        </SidePanel>
      )}

      {panel === "car" && (
        <SidePanel title="Garage" onClose={() => setPanel("none")}>
          <Group label={"Cars / " + garage.length}>
            <p className="mb-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
              The fleet is fixed. Pick one and it downloads itself: wheels rigged, size measured,
              paint applied. The shape swaps in immediately while the model streams.
            </p>
            <div className="space-y-2">
              {garage.map((m) => {
                const active = carId === m.id;
                const busy = equipping === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => chooseCar(m.id)}
                    className={"w-full cursor-pointer border p-3 text-left transition-colors " + (
                      active ? "border-signal bg-signal/10" : "border-white/12 hover:border-signal/50"
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-sm font-bold tracking-tight">{m.name}</span>
                      <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                        {busy ? (
                          <>
                            <Loader2 className="size-3 animate-spin" /> EQUIPPING
                          </>
                        ) : active ? (
                          <>
                            <Check className="size-3 text-signal" /> {formatBytes(m.bytes)}
                          </>
                        ) : (
                          <>
                            {formatBytes(m.bytes)} <Download className="size-3" />
                          </>
                        )}
                      </span>
                    </div>
                    <div className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground">
                      {m.detail}
                      <br />
                      {m.physics.powerKw} kW / {m.physics.mass} kg / {m.physics.drivetrain.toUpperCase()} / {m.physics.zeroTo100}s 0-100
                      <br />
                      {m.license} / {m.author}
                    </div>
                  </button>
                );
              })}
            </div>
          </Group>

          <Group label="Paint">
            <div className="flex flex-wrap gap-2">
              {PAINT_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-label="paint"
                  onClick={() => choosePaint(c)}
                  className={"size-7 cursor-pointer border transition-transform hover:scale-110 " + (
                    paint === c ? "border-signal" : "border-white/20"
                  )}
                  style={{ backgroundColor: "#" + c.toString(16).padStart(6, "0") }}
                />
              ))}
            </div>
          </Group>

          <Group label="This run">
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
              <Stat label="TOP SPEED" value={tel ? tel.topSpeedKph.toFixed(0) + " km/h" : "-"} />
              <Stat label="0-100 KM/H" value={tel?.best0to100 ? tel.best0to100.toFixed(2) + " s" : "-"} />
              <Stat label="DISTANCE" value={tel ? tel.distanceKm.toFixed(2) + " km" : "-"} />
              <Stat label="DRIFT PTS" value={tel ? Math.round(tel.driftPoints).toLocaleString() : "0"} />
            </div>
            {isAuthenticated ? (
              <Button className="mt-3 w-full cursor-pointer" onClick={saveRun}>
                Save run to garage
              </Button>
            ) : (
              <Button variant="outline" asChild className="mt-3 w-full cursor-pointer">
                <Link to="/auth?returnTo=%2Fdrive">Sign in to save runs</Link>
              </Button>
            )}
            {myStats ? (
              <p className="mt-3 font-mono text-[10px] leading-relaxed text-muted-foreground">
                GARAGE RECORD / {myStats.topSpeedKph.toFixed(0)} km/h / {Math.round(myStats.bestDriftScore).toLocaleString()} drift pts
                {myStats.best0to100 ? " / 0-100 " + myStats.best0to100.toFixed(2) + " s" : ""}
              </p>
            ) : null}
          </Group>
        </SidePanel>
      )}

      {/* back link */}
      <Link
        to="/"
        className={"absolute left-4 top-4 z-[6] hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground transition-opacity hover:text-chalk " + (started ? "" : "pointer-events-none opacity-0")}
      >
        <ArrowLeft className="size-3" /> EXIT
      </Link>
    </div>
  );
}

/* ---------------------------------------------------------------- pieces */

function Row({ label, value, hot, valueClass }: { label: string; value: string; hot?: boolean; valueClass?: string }) {
  return (
    <div className="mt-1 flex items-baseline justify-between gap-2">
      <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">{label}</span>
      <span className={"font-mono text-[11px] font-medium " + (hot ? "text-signal" : (valueClass ?? "text-chalk"))}>{value}</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-white/4 p-2">
      <div className="text-[9px] tracking-[0.16em] text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-xs text-chalk">{value}</div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">{label.toUpperCase()}</div>
      {children}
    </div>
  );
}

function HudButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      title={label}
      onClick={onClick}
      className="pointer-events-auto flex size-9 cursor-pointer items-center justify-center border border-white/12 bg-black/60 text-muted-foreground backdrop-blur-sm transition-colors hover:border-signal/60 hover:text-chalk"
    >
      {children}
    </button>
  );
}

function TouchButton({
  code, onPointerDown, onPointerUp, children,
}: { code: string; onPointerDown: () => void; onPointerUp: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      data-code={code}
      onPointerDown={(e) => {
        e.preventDefault();
        onPointerDown();
      }}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onTouchStart={(e) => {
        e.preventDefault();
        onPointerDown();
      }}
      onTouchEnd={onPointerUp}
      className="size-14 cursor-pointer touch-none border border-white/15 bg-black/55 font-mono text-[11px] tracking-[0.1em] text-chalk/80 backdrop-blur-sm active:border-signal active:bg-signal/25"
    >
      {children}
    </button>
  );
}

function SidePanel({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="absolute right-0 top-0 z-[8] flex h-full w-[min(92vw,360px)] flex-col border-l border-white/12 bg-carbon/95 backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="font-mono text-[11px] tracking-[0.28em] text-chalk">{title.toUpperCase()}</span>
        <button type="button" onClick={onClose} className="cursor-pointer text-muted-foreground hover:text-chalk">
          <X className="size-4" />
        </button>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto px-4 py-4">{children}</div>
    </div>
  );
}

function IntroOverlay({
  entry, spec, equipping, onChooseCar, onStart, paint, onPaint, weather, onWeather, hour, onHour,
  isAuthenticated, others, room, netOn, onNet, worlds, worldName, onWorld, garage,
}: {
  entry: CarEntry;
  spec: VehicleSpec;
  equipping: string | null;
  onChooseCar: (id: string) => void;
  onStart: () => void;
  paint: number;
  onPaint: (hex: number) => void;
  weather: Weather;
  onWeather: (w: Weather) => void;
  hour: number;
  onHour: (h: number) => void;
  isAuthenticated: boolean;
  others: number;
  room: string;
  netOn: boolean;
  onNet: (v: boolean) => void;
  worlds: WorldMapSource[];
  worldName: string;
  onWorld: (source: WorldMapSource) => void;
  garage: CarEntry[];
}) {
  return (
    <div className="absolute inset-0 z-[8] flex items-center justify-center bg-gradient-to-b from-carbon/95 via-carbon/85 to-carbon/95 p-4 backdrop-blur-[3px]">
      <div className="max-h-full w-[min(94vw,760px)] overflow-y-auto border border-white/12 bg-black/55 p-5 sm:p-7">
        <div className="font-mono text-[10px] tracking-[0.34em] text-signal">
          OPEN CITY / LIVE MULTIPLAYER / 240 HZ VEHICLE DYNAMICS
        </div>
        <h1 className="mt-1 font-display text-4xl leading-none font-bold tracking-tight sm:text-5xl">RIVERBEND</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A fixed fleet of real car models on one 240 Hz physics core: Pacejka tyre slip, live
          suspension load, tyre thermics, weather grip and a city that wakes up at dusk. Pick your
          car, set the sky, share the room code, then hold <span className="text-chalk">W</span>.
        </p>

        <div className="mt-4">
          <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">
            WHERE YOU DRIVE
          </div>
          <div className="flex flex-wrap gap-1.5">
            {worlds.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => onWorld(w)}
                className={"cursor-pointer border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-colors " + (
                  worldName === w.name
                    ? "border-signal bg-signal font-semibold text-carbon"
                    : "border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"
                )}
              >
                {w.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">
              CHOOSE YOUR CAR
            </div>
            <div className="grid max-h-[240px] gap-1.5 overflow-y-auto pr-1">
              {garage.map((c) => {
                const active = entry.id === c.id;
                const busy = equipping === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => onChooseCar(c.id)}
                    className={"flex cursor-pointer items-center justify-between gap-3 border px-3 py-2 text-left transition-colors " + (
                      active ? "border-signal bg-signal/10" : "border-white/12 hover:border-signal/50"
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-bold tracking-tight">{c.name}</span>
                      <span className="block truncate font-mono text-[10px] text-muted-foreground">{c.klass}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-muted-foreground">
                      {busy ? <Loader2 className="size-3 animate-spin" /> : null}
                      {c.physics.powerKw} kW / {formatBytes(c.bytes)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">PAINT</div>
              <div className="flex flex-wrap gap-1.5">
                {PAINT_COLORS.slice(0, 9).map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-label="paint"
                    onClick={() => onPaint(c)}
                    className={"size-6 cursor-pointer border transition-transform hover:scale-110 " + (
                      paint === c ? "border-signal" : "border-white/20"
                    )}
                    style={{ backgroundColor: "#" + c.toString(16).padStart(6, "0") }}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">SKY</div>
              <div className="grid grid-cols-4 gap-1">
                {TIME_PRESETS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => onHour(p.hour)}
                    className={"cursor-pointer border py-2 font-mono text-[9px] tracking-[0.08em] " + (
                      Math.abs(hour - p.hour) < 0.2 ? "border-signal text-signal" : "border-white/12 text-muted-foreground"
                    )}
                  >
                    {p.label.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                {WEATHER_PRESETS.map((w) => (
                  <button
                    key={w.key}
                    type="button"
                    onClick={() => onWeather(w.key)}
                    className={"cursor-pointer border py-2 font-mono text-[9px] tracking-[0.08em] " + (
                      weather === w.key ? "border-signal text-signal" : "border-white/12 text-muted-foreground"
                    )}
                  >
                    {WEATHER_LABEL[w.key].toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/4 p-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
              {spec.length.toFixed(2)} m / {spec.mass} kg / {spec.torqueNm} Nm / {spec.drivetrain.toUpperCase()}
              <br />
              grip {spec.grip.toFixed(2)} / drag {spec.drag.toFixed(2)} / {spec.zeroTo100}s 0-100
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border border-white/10 bg-white/4 px-3 py-2">
          <div className="flex items-center gap-2">
            <Users className="size-3.5 text-signal" />
            <span className="font-mono text-[10px] tracking-[0.14em] text-chalk">
              {others > 0 ? others + " DRIVER" + (others === 1 ? "" : "S") + " ON THE ROAD" : "NOBODY ELSE ON THE ROAD YET"}
            </span>
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
              / ROOM {room.toUpperCase()}
            </span>
          </div>
          <Switch checked={netOn} className="cursor-pointer" onCheckedChange={onNet} />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button className="cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]" size="lg" onClick={onStart}>
            <Zap className="size-4" /> START ENGINE
          </Button>
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
            W / A / S / D to drive - SPACE handbrake
          </span>
          <span className="ml-auto flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground">
              240 HZ
            </Badge>
            <Badge variant="outline" className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground">
              MULTIPLAYER
            </Badge>
            {isAuthenticated ? (
              <Link to="/dashboard" className="font-mono text-[10px] tracking-[0.16em] text-signal hover:underline">
                MY GARAGE
              </Link>
            ) : (
              <Link to="/auth?returnTo=%2Fdashboard" className="font-mono text-[10px] tracking-[0.16em] text-signal hover:underline">
                SIGN IN
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
