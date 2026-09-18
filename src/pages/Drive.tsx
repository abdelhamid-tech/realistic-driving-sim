import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { LaunchFlow, type LaunchCheck } from "@/components/LaunchFlow";
import { Radar } from "@/components/Radar";
import { PaintPicker, readSavedPaint, savePaint } from "@/components/PaintPicker";
import { createGame } from "@/game/engine";
import {
  DEFAULT_CAR_ID, allCars, carById, carFromAll, carKind, carSpec, formatBytes,
  isImportedCarId, type CarEntry, type ImportedCar,
} from "@/game/carmodels";
import { PAINT_COLORS, VEHICLE_ORDER, type VehicleSpec } from "@/game/vehicles";
import { useDriver } from "@/hooks/use-driver";
import { CAMERA_LABEL, type GameHandle, type RemoteDriver, type Telemetry } from "@/game/types";
import { completion, markCarDriven, markWorldVisited } from "@/game/progress";
import { useCrazyGames } from "@/hooks/use-crazygames";
import type { CgUser } from "@/lib/crazygames";
import {
  clearBanner,
  gameplayStart,
  gameplayStop,
  getInviteParam,
  happyTime,
  hasAdblock,
  hideInviteButton,
  isInstantMultiplayer,
  leftRoom,
  loadingStop,
  onJoinRoom,
  showInviteButton,
  reportProgress,
  requestMidgameAd,
  requestRewardedAd,
  setGameContext,
  showBanner,
  updateRoom,
} from "@/lib/crazygames";
import { lobbyFull } from "@/game/lobby";
import { loadProfile, saveProfile } from "@/game/profile";
import { QualityWatch, TIER_NAMES, initialTier } from "@/game/perf";
import {
  HOME_MAP, PROCEDURAL_MAP, WORLD_MAP_LIST, mapFromRow, type WorldMapRow, type WorldMapSource,
} from "@/game/worldmaps";
import { worldMapPlan, type MapPlan } from "@/game/plan";
import { pushPropModels, pushWorldSpots, type PropModel, type PropSpotMap } from "@/game/props";
import { Check, Download, Gauge, Link2, Loader2, PlayCircle, Settings2, Users, X, Zap } from "lucide-react";

const MODES = ["NORMAL", "DRIFT", "RALLY", "ARCADE"];

/** Drift scores worth celebrating. Deliberately rare — see happyTime(). */
const MILESTONES = [10000, 40000, 100000];
/** The rewarded-ad boost: double drift points for ten minutes. */
const BOOST_MS = 10 * 60 * 1000;
/** The banner container on the menu screen. */
const BANNER_ID = "riverbend-menu-banner";

/**
 * Draws the radar's plan for a world that has just gone live.
 *
 * A world that is a model holds no picture of itself, so its plan is cut from
 * its own file — deliberately *after* the engine has loaded and read it, so the
 * two never fight over the download or the main thread, which on a 7 MB city is
 * the difference between a second of loading and three. The generated city is
 * code, not a model, and draws its own plan (see src/game/plan): null says so.
 */
function drawRadarPlan(
  source: WorldMapSource,
  alive: () => boolean,
  set: (plan: MapPlan | null) => void,
) {
  set(null);
  if (source.kind === "procedural" || !source.url) return;
  void worldMapPlan(source).then((plan) => {
    if (alive() && plan) set(plan);
  });
}

/** One row of `props.list`: the owner's model for a street-furniture slot. */
interface PropRow {
  id: string;
  slot: string;
  name: string;
  fileName: string;
  bytes: number;
  turn: number;
  scale: number;
  url: string | null;
}

/** The public room everybody lands in unless an invite says otherwise. */
const DEFAULT_ROOM = "apex-city";
/** How often our position goes out. About eight a second: smooth and cheap. */
const PUBLISH_MS = 90;

/** One tap to set the mood. Nothing else about the sky is adjustable. */
const SKY_PRESETS: { label: string; hour: number }[] = [
  { label: "DAY", hour: 12.5 },
  { label: "DUSK", hour: 18.6 },
  { label: "NIGHT", hour: 22.5 },
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
  /* the canvas the engine draws on: the handle the app pushes world data to */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const clusterRef = useRef<HTMLCanvasElement | null>(null);
  const gmeterRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<GameHandle | null>(null);
  const loadedCarRef = useRef<string | null>(null);

  const [tel, setTel] = useState<Telemetry | null>(null);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [panel, setPanel] = useState<"none" | "settings" | "car">("none");
  const [booted, setBooted] = useState(false);
  /* the loading screen is done with and the launch flow may take over */
  const [launchReady, setLaunchReady] = useState(false);
  const [bootError, setBootError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  /* The player's own setup is read back from the save before the first frame:
     the platform data module on CrazyGames (so it follows the account across
     devices), localStorage everywhere else — see @/game/profile. */
  const [carId, setCarId] = useState(() => loadProfile().car || DEFAULT_CAR_ID);
  const [equipping, setEquipping] = useState<string | null>(null);
  /* what actually happened to the chosen model: the difference between "the
     car is selected" and "the car is on the road" used to be a toast nobody
     could read while driving */
  const [modelState, setModelState] = useState<ModelState | null>(null);
  /* the paint is the player's own, and it is remembered for the next visit */
  const [paint, setPaint] = useState<number>(() => readSavedPaint(PAINT_COLORS[4]));
  const [hour, setHour] = useState(() => loadProfile().hour);
  const [camera, setCamera] = useState(() => loadProfile().camera);
  const [volume, setVolume] = useState(() => loadProfile().volume);
  const [headlights, setHeadlights] = useState(false);
  /* the desktop telemetry panel, off and on in the settings panel */
  const [telemetry, setTelemetry] = useState(() => loadProfile().telemetry);

  const [room, setRoom] = useState(readRoom);
  const [roomDraft, setRoomDraft] = useState(readRoom);
  const [netOn, setNetOn] = useState(() => loadProfile().net);
  /* one shout, not eight a second, when the relay refuses a position */
  const fullRef = useRef(false);
  const [netState, setNetState] = useState<"idle" | "connecting" | "live" | "error">("idle");
  /* what the relay actually said when it refused a position, so a failure is
     readable instead of a bare "RETRYING" */
  const [netError, setNetError] = useState<string | null>(null);
  const [session] = useState(makeSession);

  /* the world we are driving on: the city the game ships with, a map the owner
     has made active, or the generated city */
  const [worldName, setWorldName] = useState(HOME_MAP.name);
  const [worldSource, setWorldSource] = useState<WorldMapSource>(HOME_MAP);
  const [worldLoad, setWorldLoad] = useState<{ p: number; note: string } | null>(null);
  const loadedWorldRef = useRef<string | null>(null);
  /* The radar draws the world it is in, and a world that is a model has to be
     read to be drawn: its plan is cut from the map's own file, once per visit,
     while the world it belongs to is being driven. Null means the generated
     city, which draws its own plan from the code it is built from. */
  const [worldPlan, setWorldPlan] = useState<MapPlan | null>(null);

  const { name: driver, setName: setDriverName, forget: forgetDriver } = useDriver();
  /* the platform this build is running on: CrazyGames, localhost, or nowhere */
  const cg = useCrazyGames();
  const publish = useMutation(api.multiplayer.publish);
  const leaveRoom = useMutation(api.multiplayer.leave);
  const peers = useQuery(api.multiplayer.peers, netOn ? { room } : "skip");
  const worldMaps = useQuery(api.maps.list);
  const worldAssets = useQuery(api.assets.list);
  const importedCars = useQuery(api.cars.list) as ImportedCar[] | undefined;
  /* the owner's real models for the street furniture, one row per slot */
  const propRows = useQuery(api.props.list) as PropRow[] | undefined;
  const propModels = useMemo<PropModel[]>(() => {
    const out: PropModel[] = [];
    for (const row of propRows ?? []) {
      if (!row.url) continue;
      out.push({ slot: row.slot, url: row.url, turn: row.turn, scale: row.scale });
    }
    return out;
  }, [propRows]);
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
    canvasRef.current = canvas;
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
        initialTimeOfDay: loadProfile().hour,
        initialPaint: readSavedPaint(PAINT_COLORS[4]),
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
      canvasRef.current = null;
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

  /* The player's colour goes straight on: the turntable, the car on the road
     and the next visit all read the same number. */
  useEffect(() => {
    if (!booted) return;
    gameRef.current?.setPaint(paint);
    savePaint(paint);
  }, [booted, paint]);

  /* ------------------------------------------------- the street furniture *
   *  The owner's real models for the world's trees, planting, street lamps
   *  and traffic lights. The app owns the data, the engine owns the world, so
   *  it is pushed across by canvas: the models always, the map's own list of
   *  prop spots when the world being driven has one. */
  useEffect(() => {
    if (!booted) return;
    pushPropModels(canvasRef.current, propModels);
  }, [booted, propModels]);

  useEffect(() => {
    if (!booted) return;
    const canvas = canvasRef.current;
    const url = worldSource.propsUrl;
    if (!url) {
      /* an imported map is driven exactly as its author modelled it */
      pushWorldSpots(canvas, null);
      return;
    }
    let live = true;
    fetch(url)
      .then((res) => (res.ok ? (res.json() as Promise<PropSpotMap>) : null))
      .then((spots) => {
        if (live) pushWorldSpots(canvas, spots);
      })
      .catch(() => {
        if (live) pushWorldSpots(canvas, null);
      });
    return () => {
      live = false;
    };
  }, [booted, worldSource]);

  /* -------------------------------------------------------- the player's car
   *  The library is fixed: the only thing a player can do is pick one of these
   *  cars. A pick swaps the procedural body of that class in immediately, so
   *  the shape changes at once, then streams the real model in behind it. */
  useEffect(() => {
    if (!booted) return;
    const game = gameRef.current;
    if (!game) return;
    /* An imported car picked before its row has arrived is not a missing car:
       wait for the garage list instead of silently equipping the default, and
       never mark a car as loaded when that is not what was installed. */
    const asked = carFromAll(carId, importedCars ?? []);
    if (!asked && isImportedCarId(carId) && importedCars === undefined) return;
    const target = asked ?? carById(DEFAULT_CAR_ID);
    const signature = `${target.id}|${target.url}`;
    if (!target.url || loadedCarRef.current === signature) return;
    loadedCarRef.current = signature;
    let live = true;
    setEquipping(target.id);
    setModelState({ id: target.id, name: target.name, state: "loading", note: "" });
    game
      .loadCar(target.url, target.name, carSpec(target), { turn: target.turn ?? 0 })
      .then((report) => {
        if (live) {
          setModelState({ id: target.id, name: target.name, state: "ready", note: report });
          toast.success(report, { description: target.author + " / " + target.license });
        }
      })
      .catch((err) => {
        /* the model never made it: say so instead of leaving the player
           driving something else and wondering where their car went */
        loadedCarRef.current = null;
        if (live) {
          const why = err instanceof Error ? err.message : String(err);
          setModelState({ id: target.id, name: target.name, state: "failed", note: why });
          toast.error("Could not load the " + target.name, {
            description: why + " — the body you see is the fallback for its class.",
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

  /* The launch flow owns the run-up: the car, the world, the hour and the room
     are all chosen before this is ever called, so DRIVE only has to let go. */
  const start = useCallback(() => {
    setStarted(true);
    setPaused(false);
    gameRef.current?.setPaused(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
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

  const chooseSky = useCallback((h: number) => {
    setHour(h);
    gameRef.current?.setTimeOfDay(h);
  }, []);

  const chooseCamera = useCallback((c: number) => {
    setCamera(c);
    gameRef.current?.setCamera(c);
  }, []);

  /* ------------------------------------------------------------- the world
   *  The game opens on RIVERBEND, the city it ships with, and an imported map
   *  the owner has marked active takes its place. Whichever it is, the model is
   *  fetched, measured and read into the drivable surface once per visit, and
   *  the settings panel can switch worlds by hand. */
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
    setWorldSource(source);
    setWorldLoad({ p: 0.01, note: "opening" });
    game
      .loadWorldMap(source, (p, note) => setWorldLoad({ p, note }))
      .then((report) => {
        toast.success(source.name + " is live", { description: report });
        drawRadarPlan(source, () => loadedWorldRef.current === source.id, setWorldPlan);
      })
      .catch((err) => {
        /* the city stays on the road, and so does its furniture list */
        loadedWorldRef.current = null;
        setWorldSource(PROCEDURAL_MAP);
        setWorldPlan(null);
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
    /* the owner's active map wins; with none active the game drives the city it
       ships with, and the generated city is what is left if that will not load */
    const target = activeMap ?? HOME_MAP;
    if (loadedWorldRef.current === target.id) return;
    loadedWorldRef.current = target.id;
    let live = true;
    setWorldName(target.name);
    setWorldSource(target);
    setWorldLoad({ p: 0.01, note: "opening" });
    game
      .loadWorldMap(target, (p, note) => {
        if (live) setWorldLoad({ p, note });
      })
      .then((report) => {
        if (!live) return;
        toast.success(target.name + " is live", { description: report });
        drawRadarPlan(target, () => live, setWorldPlan);
      })
      .catch((err) => {
        if (live) {
          loadedWorldRef.current = null;
          setWorldName(PROCEDURAL_MAP.name);
          setWorldSource(PROCEDURAL_MAP);
          setWorldPlan(null);
        }
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
  const infoRef = useRef({ carId: entry.id, carName: entry.name, kind: carKind(entry), paint, name: driver });
  useEffect(() => {
    publishRef.current = publish;
  }, [publish]);
  useEffect(() => {
    leaveRef.current = leaveRoom;
  }, [leaveRoom]);
  useEffect(() => {
    infoRef.current = { carId: entry.id, carName: entry.name, kind: carKind(entry), paint, name: driver };
  }, [entry, paint, driver]);

  /* our own transform, straight out of the physics, about eight times a second */
  useEffect(() => {
    if (!started || !netOn) {
      if (started) setNetState("idle");
      setNetError(null);
      return;
    }
    setNetState("connecting");
    setNetError(null);
    fullRef.current = false;
    let beat = 0;
    const tick = () => {
      const game = gameRef.current;
      if (!game || document.hidden) return;
      const s = game.netSnapshot();
      if (!s) return;
      /* One non-finite number — a physics blow-up on a bad frame, a car that
         fell out of the world — makes the server reject the WHOLE publish, and
         a rejection keeps repeating until the car is sane again. Skip the
         frame instead and let the last good position stand. */
      if (![s.x, s.y, s.z, s.yaw, s.speed].every((n) => Number.isFinite(n))) return;
      const info = infoRef.current;
      const seq = ++beat;
      void publishRef
        .current({
          room,
          session,
          name: info.name,
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
          if (seq === beat) {
            setNetState("live");
            setNetError(null);
          }
        })
        .catch((err: unknown) => {
          if (seq !== beat) return;
          setNetState("error");
          /* the reason, verbatim: a bare "RETRYING" tells the driver nothing,
             and this is the one place the server's own words can be read */
          const message = err instanceof Error ? err.message : String(err);
          setNetError(message);
          /* a lobby at its submitted maximum is not a network problem, and the
             driver should be told once rather than every eighth of a second */
          if (message.toLowerCase().includes("full") && !fullRef.current) {
            fullRef.current = true;
            toast.error("Room full", { description: message });
          }
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
      setNetError(null);
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

  /* ============================================================== the platform
   *  Everything CrazyGames asks for, in one place. On any other domain every
   *  call below is a no-op (see src/lib/crazygames.ts) and the game behaves
   *  exactly as it does on the owner's own host. Adblockers too: nothing here
   *  can throw, so the game always keeps working. */

  /* The platform times the load from page load to the first gameplay start.
     This is what the "initial download size" is measured against, so the stop
     waits until the world is really built — not merely the moment the menu
     appears while a map is still streaming in. */
  /* The platform's loader was already put up by main.tsx, on the first tick of
     the page — before this bundle had even been parsed — so this page only
     ever takes it down, and only once the world exists. */
  useEffect(() => {
    return () => loadingStop();
  }, []);
  useEffect(() => {
    if (booted && !worldLoad) loadingStop();
  }, [booted, worldLoad]);

  /* Play / not playing. The platform uses this to know when the player is
     really on the road; menus, pauses and the garage are all a stop. */
  const playing = started && !paused && panel === "none";
  useEffect(() => {
    if (!booted) return;
    if (playing) gameplayStart();
    else gameplayStop();
  }, [booted, playing]);

  /* Platform settings take priority over anything set in the game: the hard
     mute wins over the volume slider and over the M key, and chat — which this
     game does not have — is simply not built. */
  useEffect(() => {
    if (!booted) return;
    gameRef.current?.setAudioMuted(cg.settings.muteAudio);
  }, [booted, cg.settings.muteAudio]);

  /* Adblockers are required not to break the game; detect, never gate. */
  useEffect(() => {
    void hasAdblock().then((blocked) => {
      if (blocked) console.info("[crazygames] adblocker present; the game runs unchanged");
    });
  }, []);

  /* Room data. This is what makes a player joinable from the CrazyGames UI
     (friends drawer, invite button, multiplayer landing page), and it is
     reported from the moment the world exists — so a friend can join while the
     player is still choosing a car in the garage. */
  useEffect(() => {
    if (!booted || !netOn) {
      leftRoom();
      return;
    }
    updateRoom({ roomId: room, isJoinable: true, inviteParams: { room } });
    return () => leftRoom();
  }, [booted, netOn, room]);

  /* The invite button, kept honest with the room data above: offered while the
     room is open, taken away the moment it is full or the player goes solo. It
     is deprecated in favour of the room data (which is why the room is always
     reported), so it is used where the host still has it and skipped where it
     does not. */
  useEffect(() => {
    if (!booted || !netOn || lobbyFull(1 + otherDrivers.length)) {
      hideInviteButton();
      return;
    }
    showInviteButton({ room });
    return () => hideInviteButton();
  }, [booted, netOn, room, otherDrivers.length]);

  /* An invitation carries the room code. Off-platform that is the
     /drive?room=CODE link; on CrazyGames it arrives as an invite param. */
  useEffect(() => {
    if (!cg.ready) return;
    const invited = getInviteParam("room");
    if (!invited) return;
    const next = cleanRoom(invited);
    setRoom(next);
    setRoomDraft(next);
    setRoomInUrl(next);
    /* an invitation is a multiplayer invitation, whatever the player's last
       run was set to */
    setNetOn(true);
  }, [cg.ready]);

  /* A friend joining while the player is already in the game must not need a
     page reload. */
  useEffect(
    () =>
      onJoinRoom((joined) => {
        const next = cleanRoom(joined.inviteParams?.room ?? joined.roomId);
        setRoom(next);
        setRoomDraft(next);
        setRoomInUrl(next);
        toast.success("Joined room " + next.toUpperCase());
      }),
    [],
  );

  /* Instant multiplayer: launched from the CrazyGames multiplayer page, the
     player lands directly on the road in a brand-new joinable room — no menu
     to click through, and their friends can join immediately. */
  const instantRef = useRef(false);
  useEffect(() => {
    if (!booted || !cg.ready || instantRef.current) return;
    if (!isInstantMultiplayer()) return;
    instantRef.current = true;
    /* Launched to *join* somebody: their invite wins over opening a brand new
       room beside it, and the party goes straight onto the road. */
    if (getInviteParam("room")) {
      setNetOn(true);
      start();
      return;
    }
    const code = makeCode();
    setRoom(code);
    setRoomDraft(code);
    setRoomInUrl(code);
    setNetOn(true);
    start();
    toast.success("Instant multiplayer · room " + code, {
      description: "Your friends can join you from the CrazyGames friends list.",
    });
  }, [booted, cg.ready, start]);

  /* Progress: which shipped cars have been driven and which shipped worlds
     have been opened. An open sandbox has no ending, so that is the definition
     of 100% — reported as a percentage, never as a claim of completion. */
  useEffect(() => {
    if (!booted) return;
    reportProgress(completion().percentage);
  }, [booted]);
  useEffect(() => {
    if (!booted) return;
    if (markWorldVisited(activeMap?.id ?? HOME_MAP.id)) reportProgress(completion().percentage);
  }, [booted, activeMap]);
  useEffect(() => {
    if (!booted || !started) return;
    if (markCarDriven(entry.id)) reportProgress(completion().percentage);
  }, [booted, started, entry]);

  /* The rest of the setup goes to the same save as the paint and the progress,
     so the next visit opens on the same car, at the same hour, at the same
     volume — on any device the player signs in on. */
  useEffect(() => {
    saveProfile({ car: carId, hour, camera, volume, net: netOn, telemetry });
  }, [carId, hour, camera, volume, netOn, telemetry]);

  /* so a bug report from the platform's feedback form can be reproduced */
  useEffect(() => {
    if (!booted) return;
    setGameContext({
      world: worldName,
      car: spec.name,
      room: netOn ? room : "solo",
      drivers: 1 + otherDrivers.length,
      quality: tel?.quality ?? "auto",
    });
  }, [booted, worldName, spec.name, room, netOn, otherDrivers.length, tel?.quality]);

  /* A big drift is the one real achievement this game has, so it is the one
     thing worth a celebration — and only at three thresholds per session. */
  const celebrated = useRef<Set<number>>(new Set());
  const driftScore = tel?.driftPoints ?? 0;
  useEffect(() => {
    for (const mark of MILESTONES) {
      if (driftScore >= mark && !celebrated.current.has(mark)) {
        celebrated.current.add(mark);
        happyTime();
      }
    }
  }, [driftScore]);

  /* --------------------------------------------------------------- the ads
   *  A banner sits on the menu screen only — never over the road, and never
   *  where a button can be hit by accident. The slot is reserved at its real
   *  size before the SDK is asked (it refuses to fill a container it cannot
   *  measure), and when the platform has nothing to show — Basic Launch, no
   *  fill, an adblocker — it simply stays an empty strip instead of shifting
   *  the menu around. */
  const [bannerLive, setBannerLive] = useState(false);
  useEffect(() => {
    if (!booted || started) {
      clearBanner(BANNER_ID);
      return;
    }
    let live = true;
    /* the answer arrives from the platform, so the state is set in a callback
       and never synchronously while the effect is running */
    void showBanner(BANNER_ID).then((ok) => {
      if (live) setBannerLive(ok);
    });
    return () => {
      live = false;
      clearBanner(BANNER_ID);
    };
  }, [booted, started]);

  /* The rewarded ad: an opt-in video in exchange for a real, temporary
     advantage. It is only offered from the pause screen, where the game is
     already stopped and the sound already down. */
  const [boostUntil, setBoostUntil] = useState(0);
  const [adBusy, setAdBusy] = useState(false);
  const [clock, setClock] = useState(() => Date.now());
  useEffect(() => {
    if (!boostUntil) return;
    const id = window.setInterval(() => setClock(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [boostUntil]);
  const boostLeftMs = Math.max(0, boostUntil - clock);
  const boosted = boostLeftMs > 0;
  useEffect(() => {
    gameRef.current?.setScoreMultiplier(boosted ? 2 : 1);
  }, [boosted, booted]);

  const watchForBoost = useCallback(async () => {
    setAdBusy(true);
    const earned = await requestRewardedAd();
    setAdBusy(false);
    if (earned) setBoostUntil(Date.now() + BOOST_MS);
    else toast.message("No video available right now");
  }, []);

  /* A run ends in a natural break — which is exactly where a midgame ad
     belongs. The game is paused first, so it is silent and frozen behind the
     video, and the room is kept so the next run starts with the same people. */
  const endRun = useCallback(() => {
    setPanel("none");
    setPaused(true);
    gameRef.current?.setPaused(true);
    requestMidgameAd({
      onEnd: () => {
        setStarted(false);
        setPaused(false);
      },
    });
  }, []);

  const heat = tel ? tel.heat.reduce((a, b) => a + b, 0) / 4 : 0;
  const tyreState = useMemo(() => {
    if (heat < 0.25) return { label: "COLD", className: "text-muted-foreground" };
    if (heat < 0.65) return { label: "WARM", className: "text-emerald-400" };
    return { label: "HOT", className: "text-signal" };
  }, [heat]);

  const othersOnline = otherDrivers.length;

  /* ----------------------------------------------------- the launch sequence
   *  The loading screen holds until the world really exists — renderer up,
   *  fleet and maps answered, any active map built — instead of hiding behind
   *  a bar that is done before the city is. A ceiling keeps one slow query
   *  from ever holding the door shut. */
  const checks: LaunchCheck[] = [
    { label: "RENDERER · PHYSICS CORE", done: booted },
    { label: "VEHICLE FLEET", done: importedCars !== undefined },
    { label: "WORLD MAPS", done: worldMaps !== undefined },
    { label: "STREET FURNITURE", done: propRows !== undefined && worldAssets !== undefined },
    { label: "BUILDING THE CITY", done: booted && !worldLoad },
  ];
  const launchProgress = checks.filter((c) => c.done).length / checks.length;
  const launchNote = !booted
    ? "warming up the engine"
    : worldLoad
      ? `building ${worldName.toLowerCase()}`
      : "final checks";
  const launchDone =
    booted &&
    importedCars !== undefined &&
    worldMaps !== undefined &&
    propRows !== undefined &&
    worldAssets !== undefined &&
    !worldLoad;
  /* The loading screen ends when the world really exists — or after a bounded
     wait, so one silent query can never hold the door shut. */
  useEffect(() => {
    if (launchReady) return;
    if (launchDone) {
      setLaunchReady(true);
      return;
    }
    const t = window.setTimeout(() => setLaunchReady(true), 9000);
    return () => window.clearTimeout(t);
  }, [launchReady, launchDone]);

  /* ================================================= the frame rate, owned here
   *  The engine has a watchdog of its own, but this page knows two things the
   *  engine cannot: the tier this machine measurably settled on last time (read
   *  before the engine even builds its renderer — see src/game/perf), and the
   *  difference between a slow machine and a tab that was simply in the
   *  background. Alt-tabbing is not a slow frame, and it must not cost the
   *  player a tier.
   */
  const watchRef = useRef<QualityWatch | null>(null);
  /* -1 means the game chooses; anything else is the player's own tier, read
     from the save the platform syncs. It is state so the panel follows it. */
  const [pinned, setPinned] = useState(() => loadProfile().quality);
  const [tier, setTier] = useState(initialTier);
  const pinnedRef = useRef(pinned);
  const autoQuality = pinned < 0;

  useEffect(() => {
    if (!booted) return;
    const watch = new QualityWatch(
      { apply: (t) => gameRef.current?.setQuality(t) },
      initialTier(),
    );
    watchRef.current = watch;
    /* The engine already opened on the measured tier by itself (see the first
       call in applyQuality), so there is nothing to announce here: this only
       has to put the player's own choice back on top of it. */
    if (pinnedRef.current >= 0) watch.pin(pinnedRef.current);
    const interrupt = () => watch.interrupt();
    document.addEventListener("visibilitychange", interrupt);
    window.addEventListener("pagehide", interrupt);
    window.addEventListener("focus", interrupt);
    return () => {
      watchRef.current = null;
      document.removeEventListener("visibilitychange", interrupt);
      window.removeEventListener("pagehide", interrupt);
      window.removeEventListener("focus", interrupt);
    };
  }, [booted]);

  /* The engine already reports the frame rate to the HUD about ten times a
     second, so the watchdog reads that number rather than measuring again. */
  useEffect(() => {
    const watch = watchRef.current;
    if (!watch || !tel || !Number.isFinite(tel.fps) || tel.fps <= 0) return;
    watch.sample(tel.fps);
    setTier((t) => (t === watch.tier ? t : watch.tier));
  }, [tel]);

  const chooseQuality = useCallback((mode: number) => {
    const watch = watchRef.current;
    pinnedRef.current = mode;
    setPinned(mode);
    if (!watch) return;
    watch.pin(mode);
    setTier(watch.tier);
    saveProfile({ quality: mode });
    if (mode < 0) {
      toast.message("Graphics · automatic", {
        description: "the frame rate is measured and the tier follows it",
      });
    }
  }, []);

  /* Read straight from the engine every frame: never mirrored into state. */
  const radarSnapshot = useCallback(() => gameRef.current?.netSnapshot() ?? null, []);
  const qualityLabel = (autoQuality ? "AUTO · " : "") + TIER_NAMES[tier];

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-carbon text-chalk select-none">
      {/* 3D viewport */}
      <div ref={hostRef} className="absolute inset-0" />

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(30,28,23,.5) 100%)" }}
      />

      {/* ------------------------------------------------------------ HUD */}
      <div className={"safe-inset pointer-events-none absolute inset-0 z-[3] transition-opacity duration-500 " + (started ? "opacity-100" : "opacity-0")}>
        {/* brand */}
        <div className="absolute left-4 top-4 sm:left-6 sm:top-5">
          <div className="font-mono text-[10px] tracking-[0.34em] text-signal">CANTACT PATCH / DRIVE</div>
          <div className="font-display text-xl leading-tight font-bold tracking-tight sm:text-2xl">
            {spec.name}
          </div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
            {spec.klass} / {spec.drivetrain.toUpperCase()} / {spec.mass} KG
          </div>
          <div className="mt-1">
            <ModelLine model={modelState} entry={entry} compact />
          </div>
        </div>

        {/* mode pills */}
        <div className="pointer-events-auto absolute left-4 top-[192px] flex flex-wrap gap-1.5 sm:left-6 sm:top-[244px] lg:top-28">
          {MODES.map((m, i) => (
            <button
              key={m}
              type="button"
              onClick={() => gameRef.current?.setMode(i)}
              className={"cursor-pointer border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] transition-colors " + (
                tel?.modeIndex === i
                  ? "border-signal bg-signal text-carbon font-semibold"
                  : "border-edge/15 bg-card/85 text-muted-foreground hover:border-signal/60 hover:text-chalk"
              )}
            >
              {i + 1}/{m}
            </button>
          ))}
        </div>

        {/* telemetry — the desktop panel, which the player can turn off in the
            settings. On a phone the radar carries speed, gear and drift points,
            and the two big panels would land on the pedals. */}
        {telemetry ? (
        <div className="absolute bottom-6 right-6 hidden w-[212px] paper border border-edge/12 bg-card/88 p-3 backdrop-blur-sm lg:block">
          <div className="mb-2 font-mono text-[9px] tracking-[0.3em] text-muted-foreground">TELEMETRY</div>
          {/* the gauge and the cluster are drawn light-on-dark in code
              (src/game/engine.ts, out of reach of this file's tools), so on the
              light HUD they sit in an ink instrument well — the dial reads, and
              the panel around it stays paper. */}
          <div className="mx-auto w-fit border border-edge/10 bg-ink p-1">
            <canvas ref={gmeterRef} className="block" width={118} height={118} />
          </div>
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
                  <div className="relative h-11 w-full overflow-hidden bg-edge/8">
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
        ) : null}

        {/* cluster — desktop only, for the same reason as the telemetry panel */}
        <div className="absolute bottom-6 left-6 hidden paper border border-edge/12 bg-card/88 p-2 backdrop-blur-sm lg:block">
          <div className="w-fit border border-edge/10 bg-ink px-1.5 pt-1">
            <canvas ref={clusterRef} className="block" width={232} height={132} />
          </div>
          <div className="px-1 pb-0.5 font-mono text-[8px] tracking-[0.2em] text-muted-foreground">
            {(tel?.gear ?? "D1") + " / " + (driver || "DRIVER").toUpperCase().slice(0, 14)}
            {headlights ? " / LIGHTS" : ""}
            {tel?.quality ? " / " + tel.quality : ""}
            {boosted ? " / 2× DRIFT POINTS" : ""}
            {netOn ? " / " + (1 + othersOnline) + " ONLINE" : ""}
          </div>
        </div>

        {/* controls legend */}
        <div className="absolute right-4 top-4 hidden paper border border-edge/12 bg-card/88 p-3 font-mono text-[10px] leading-relaxed text-muted-foreground backdrop-blur-sm lg:block">
          <div className="mb-1 tracking-[0.2em] text-chalk">CONTROLS</div>
          <div><kbd className="text-signal">W</kbd>/<kbd className="text-signal">S</kbd> throttle / brake</div>
          <div><kbd className="text-signal">A</kbd>/<kbd className="text-signal">D</kbd> steer / <kbd className="text-signal">SPACE</kbd> handbrake</div>
          <div><kbd className="text-signal">1-4</kbd> drive modes / <kbd className="text-signal">C</kbd> camera</div>
          <div><kbd className="text-signal">N</kbd> lights / <kbd className="text-signal">R</kbd> reset / <kbd className="text-signal">M</kbd> mute</div>
          <div><kbd className="text-signal">P</kbd> pause / <kbd className="text-signal">ESC</kbd> settings</div>
        </div>
        {/* the radar: bottom left on a phone, top centre on a desktop, where
            it is the one instrument always in the corner of the eye */}
        {started ? (
          <Radar
            snapshot={radarSnapshot}
            peers={otherDrivers}
            tel={tel}
            plan={worldPlan}
            quality={qualityLabel}
            className="absolute bottom-[104px] left-3 z-[6] w-[152px] sm:left-6 sm:w-[176px] lg:bottom-auto lg:left-1/2 lg:top-3 lg:-translate-x-1/2"
          />
        ) : null}
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
        /* the pedals keep clear of the home indicator on a phone in fullscreen */
        <div className="absolute inset-x-0 bottom-0 z-[5] flex items-end justify-between px-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] lg:hidden">
          <div className="flex flex-col gap-2">
            {/* the two keys a phone has no way of pressing: camera and reset.
                TouchButton sends the same key event the keyboard does, so
                there is only one driving path in the engine. */}
            <div className="flex gap-2">
              <TouchButton code="KeyC" onPointerDown={() => key("KeyC", true)} onPointerUp={() => key("KeyC", false)}>CAM</TouchButton>
              <TouchButton code="KeyR" onPointerDown={() => key("KeyR", true)} onPointerUp={() => key("KeyR", false)}>RESET</TouchButton>
              <TouchButton code="KeyN" onPointerDown={() => key("KeyN", true)} onPointerUp={() => key("KeyN", false)}>LIGHTS</TouchButton>
            </div>
            <div className="flex gap-2">
              <TouchButton code="KeyA" onPointerDown={() => key("KeyA", true)} onPointerUp={() => key("KeyA", false)}>LEFT</TouchButton>
              <TouchButton code="KeyD" onPointerDown={() => key("KeyD", true)} onPointerUp={() => key("KeyD", false)}>RIGHT</TouchButton>
            </div>
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
        className={"pointer-events-none absolute left-1/2 z-[6] -translate-x-1/2 paper border border-edge/12 bg-card/92 px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] backdrop-blur-sm transition-all duration-300 " + (
          notice ? "bottom-[304px] opacity-100 lg:bottom-28" : "bottom-[300px] opacity-0 lg:bottom-24"
        )}
      >
        {notice}
      </div>

      {/* the menu banner. Menus only, never over the road, and the container
          has to exist at its real size before the SDK is asked for a banner. */}
      {booted && !started ? (
        <div className="safe-inset pointer-events-none absolute inset-x-0 bottom-0 z-[9] flex justify-center">
          <div
            id={BANNER_ID}
            className={
              "pointer-events-auto h-[60px] w-full max-w-[728px] sm:h-[90px] " +
              (bannerLive ? "border-t border-edge/10" : "")
            }
          />
        </div>
      ) : null}

      {/* --------------------------------------------------------- overlays */}
      {worldLoad && started ? (
        <div className="pointer-events-none absolute inset-x-0 top-16 z-[7] flex justify-center">
          <div className="border border-edge/12 bg-card/94 px-4 py-2 text-center backdrop-blur-sm">
            <div className="font-mono text-[10px] tracking-[0.24em] text-signal">
              BUILDING {worldName.toUpperCase()} · {Math.round(worldLoad.p * 100)}%
            </div>
            <div className="mt-0.5 font-mono text-[10px] text-muted-foreground">{worldLoad.note}</div>
          </div>
        </div>
      ) : null}

      {bootError && (
        <div className="absolute inset-0 z-[8] flex items-center justify-center bg-carbon/95 p-6">
          <div className="max-w-md border border-destructive/50 bg-card/88 p-6 text-center">
            <div className="font-display text-xl font-bold tracking-tight">WebGL could not start</div>
            <p className="mt-2 text-sm text-muted-foreground">{bootError}</p>
            <Button
              className="mt-4 cursor-pointer"
              variant="outline"
              onClick={() => window.location.reload()}
            >
              Reload
            </Button>
          </div>
        </div>
      )}

      {!started && (
        <LaunchFlow
          ready={launchReady}
          bannerSpace={bannerLive}
          progress={launchProgress}
          note={launchNote}
          checks={checks}
          garage={garage}
          entry={entry}
          spec={spec}
          equipping={equipping}
          model={modelState}
          onChooseCar={chooseCar}
          paint={paint}
          onPaint={setPaint}
          worlds={worldList}
          worldName={worldName}
          onWorld={chooseWorld}
          worldLoad={worldLoad}
          hour={hour}
          onHour={chooseSky}
          driver={driver}
          onName={setDriverName}
          platform={cg.user}
          onForgetDriver={forgetDriver}
          netOn={netOn}
          onNet={setNetOn}
          room={room}
          peers={otherDrivers}
          netState={netState}
          netError={netError}
          onJoinRoom={joinRoom}
          onCreateRoom={() => joinRoom(makeCode())}
          inviteLink={inviteLink}
          onStart={start}
        />
      )}

      {started && paused && (
        <div className="absolute inset-0 z-[7] flex items-center justify-center bg-ink/45 backdrop-blur-md">
          <div className="w-[min(92vw,420px)] border border-edge/12 bg-carbon p-6 text-center">
            <div className="font-mono text-[10px] tracking-[0.3em] text-signal">PAUSED</div>
            <div className="mt-1 font-display text-2xl font-bold tracking-tight">Engine idling</div>
            {othersOnline > 0 ? (
              <div className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                {othersOnline} OTHER {othersOnline === 1 ? "DRIVER" : "DRIVERS"} ON THE ROAD
              </div>
            ) : null}
            <div className="mt-4 grid gap-2">
              <Button className="cursor-pointer" onClick={togglePause}>Resume driving</Button>
              <Button
                variant="outline"
                className="cursor-pointer gap-2"
                disabled={adBusy}
                onClick={() => void watchForBoost()}
              >
                {adBusy ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <PlayCircle className="size-4" />
                )}
                {boosted ? "EXTEND 2× DRIFT POINTS" : "WATCH A VIDEO · 2× DRIFT POINTS"}
              </Button>
              {boosted ? (
                <div className="font-mono text-[10px] tracking-[0.14em] text-emerald-400">
                  2× DRIFT POINTS · {Math.max(1, Math.ceil(boostLeftMs / 60000))} MIN LEFT
                </div>
              ) : (
                <div className="font-mono text-[9px] leading-relaxed tracking-[0.1em] text-muted-foreground">
                  OPTIONAL. NOTHING IN THE GAME IS LOCKED BEHIND IT — THE VIDEO IS THE ONLY PRICE.
                </div>
              )}
              <Button variant="outline" className="cursor-pointer" onClick={() => setPanel("car")}>Open garage</Button>
              <Button
                variant="ghost"
                className="cursor-pointer font-mono text-[10px] tracking-[0.16em] text-muted-foreground"
                onClick={endRun}
              >
                END RUN · BACK TO THE GARAGE
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
                className="min-w-0 flex-1 border border-edge/12 bg-card/80 px-2 py-1.5 font-mono text-[11px] tracking-[0.14em] text-chalk uppercase outline-none placeholder:text-muted-foreground/60 focus:border-signal/60"
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

            {netOn && netError && (
              <p className="mt-1.5 border border-destructive/40 bg-destructive/10 px-2 py-1 font-mono text-[10px] leading-relaxed text-destructive">
                RELAY · {netError}
              </p>
            )}

            <div className="mt-3 border border-edge/10 bg-edge/4">
              <div className="flex items-center gap-1.5 border-b border-edge/8 px-2 py-1.5 font-mono text-[9px] tracking-[0.22em] text-muted-foreground">
                <Users className="size-3 text-signal" /> {room.toUpperCase()} / {1 + othersOnline} ONLINE
              </div>
              <ul className="divide-y divide-edge/8">
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

          <Group label="Graphics">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              The game measures the frame rate and picks a tier for this machine, remembered for
              the next visit. Pinning one keeps it: shadow maps, pixel density, traffic and weather
              all follow it.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["AUTO", ...TIER_NAMES].map((label, i) => {
                const mode = i - 1;
                const on = mode < 0 ? autoQuality : mode === pinned;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => chooseQuality(mode)}
                    className={
                      "cursor-pointer border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] transition-colors " +
                      (on
                        ? "border-signal bg-signal font-semibold text-carbon"
                        : "border-edge/15 text-muted-foreground hover:border-signal/60 hover:text-chalk")
                    }
                  >
                    {label}
                  </button>
                );
              })}
              <span className="self-center font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                NOW · {qualityLabel}
              </span>
            </div>
          </Group>

          <Group label="World">
            <div className="space-y-2">
              {worldList.map((source) => {
                const driving = worldName === source.name;
                const badge = driving
                  ? "DRIVING"
                  : source.kind === "procedural"
                    ? "PROCEDURAL"
                    : source.url.startsWith("maps/")
                      ? "SHIPPED"
                      : source.kind.toUpperCase() + (source.bytes ? " · " + formatBytes(source.bytes) : "");
                return (
                  <button
                    key={source.id}
                    type="button"
                    onClick={() => chooseWorld(source)}
                    className={"w-full cursor-pointer border p-3 text-left transition-colors " + (
                      driving ? "border-signal bg-signal/10" : "border-edge/12 hover:border-signal/50"
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
                <div className="mt-1 h-1.5 w-full bg-edge/10">
                  <div className="h-full bg-signal transition-[width]" style={{ width: `${worldLoad.p * 100}%` }} />
                </div>
              </div>
            ) : null}
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
                      : "border-edge/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"
                  )}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </Group>

          <Group label="Hud">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-xs">Telemetry panel</Label>
                <p className="text-[11px] text-muted-foreground">
                  The desktop instrument panel — G-meter, tyre temps, drift angle. Off, only the
                  radar and the cluster stay on the screen.
                </p>
              </div>
              <Switch checked={telemetry} className="cursor-pointer" onCheckedChange={setTelemetry} />
            </div>
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
                value={[cg.settings.muteAudio ? 0 : volume * 100]}
                min={0}
                max={100}
                step={5}
                disabled={cg.settings.muteAudio}
                className={cg.settings.muteAudio ? "" : "cursor-pointer"}
                onValueChange={(v) => {
                  const val = (v[0] ?? 50) / 100;
                  setVolume(val);
                  gameRef.current?.setVolume(val);
                }}
              />
            </div>
            {cg.settings.muteAudio ? (
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                Sound is muted for this session by the platform, which takes priority over this
                slider.
              </p>
            ) : null}
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
                      active ? "border-signal bg-signal/10" : "border-edge/12 hover:border-signal/50"
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
            <p className="mb-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
              Repainted here, it is repainted on the road — no reload, no waiting.
            </p>
            <PaintPicker paint={paint} onChange={setPaint} compact />
          </Group>

          <Group label="This run">
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
              <Stat label="TOP SPEED" value={tel ? tel.topSpeedKph.toFixed(0) + " km/h" : "-"} />
              <Stat label="0-100 KM/H" value={tel?.best0to100 ? tel.best0to100.toFixed(2) + " s" : "-"} />
              <Stat label="DISTANCE" value={tel ? tel.distanceKm.toFixed(2) + " km" : "-"} />
              <Stat label="DRIFT PTS" value={tel ? Math.round(tel.driftPoints).toLocaleString() : "0"} />
            </div>
          </Group>
        </SidePanel>
      )}

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

export interface ModelState {
  id: string;
  name: string;
  state: "loading" | "ready" | "failed";
  note: string;
}

/** One line that says whether the chosen car's model is really on the road. */
function ModelLine({ model, entry, compact }: { model: ModelState | null; entry: CarEntry; compact?: boolean }) {
  const mine = model && model.id === entry.id ? model : null;
  const state = !mine ? "loading" : mine.state;
  const label =
    state === "ready"
      ? "MODEL ON THE ROAD"
      : state === "failed"
        ? "MODEL FAILED — FALLBACK BODY"
        : "MODEL LOADING…";
  const tone =
    state === "ready" ? "text-emerald-400/85" : state === "failed" ? "text-destructive" : "text-signal";
  return (
    <div className={"flex items-center gap-2 font-mono " + (compact ? "text-[10px] tracking-[0.14em]" : "text-[9px] tracking-[0.2em]")}>
      <span className={"inline-block size-1.5 rounded-full " + (state === "ready" ? "bg-emerald-400/85" : state === "failed" ? "bg-destructive" : "bg-signal animate-pulse")} />
      <span className={tone}>{label}</span>
      {mine?.note && !compact ? (
        <span className="truncate text-muted-foreground">/ {mine.note}</span>
      ) : null}
      {mine?.state === "failed" ? (
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="cursor-pointer border border-destructive/60 px-1.5 py-0.5 text-[9px] tracking-[0.16em] text-destructive hover:bg-destructive/15"
        >
          RETRY
        </button>
      ) : null}
    </div>
  );
}

function IntroOverlay({
  entry, spec, equipping, onChooseCar, onStart, sky, onSky, driver, onForgetDriver, platform,
  others, room, netOn, onNet, worlds, worldName, onWorld, garage, model,
}: {
  entry: CarEntry;
  spec: VehicleSpec;
  equipping: string | null;
  onChooseCar: (id: string) => void;
  onStart: () => void;
  sky: number;
  onSky: (h: number) => void;
  driver: string;
  onForgetDriver: () => void;
  /** the CrazyGames account behind the name, when there is one */
  platform: CgUser | null;
  others: number;
  room: string;
  netOn: boolean;
  onNet: (v: boolean) => void;
  worlds: WorldMapSource[];
  worldName: string;
  onWorld: (source: WorldMapSource) => void;
  garage: CarEntry[];
  model: ModelState | null;
}) {
  return (
    <div className="absolute inset-0 z-[8] flex items-center justify-center bg-gradient-to-b from-carbon/95 via-carbon/85 to-carbon/95 p-4 pb-[76px] backdrop-blur-[3px] sm:pb-[104px]">
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
            <div className="mt-2 border border-white/10 bg-white/4 px-2 py-1.5">
              <ModelLine model={model} entry={entry} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">SKY</div>
              <div className="grid grid-cols-3 gap-1">
                {SKY_PRESETS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => onSky(p.hour)}
                    className={"cursor-pointer border py-2 font-mono text-[9px] tracking-[0.08em] " + (
                      Math.abs(sky - p.hour) < 0.2
                        ? "border-signal text-signal"
                        : "border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"
                    )}
                  >
                    {p.label}
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

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border border-white/10 bg-white/4 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">DRIVING AS</span>
            <span className="font-display text-sm font-bold tracking-tight text-chalk">{driver.toUpperCase()}</span>
            {platform ? (
              <span className="flex items-center gap-1.5 border border-white/12 px-1.5 py-0.5">
                {platform.profilePictureUrl ? (
                  <img
                    src={platform.profilePictureUrl}
                    alt=""
                    className="size-4 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : null}
                <span className="font-mono text-[9px] tracking-[0.16em] text-signal">
                  CRAZYGAMES ACCOUNT
                </span>
              </span>
            ) : (
              <button
                type="button"
                onClick={onForgetDriver}
                className="cursor-pointer border border-white/12 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.16em] text-muted-foreground transition-colors hover:border-signal/50 hover:text-chalk"
              >
                CHANGE
              </button>
            )}
          </div>
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
            <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
              {platform ? "SIGNED IN WITH CRAZYGAMES" : "ENTER A PSEUDONYM, DRIVE"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
