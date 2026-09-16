/**
 * THE LAUNCH SEQUENCE — loading, then four steps, then the road.
 *
 *   01 CAR     pick the car, paint it, watch it turn
 *   02 MAP     pick the world, with a picture of each one
 *   03 TIME    pick the hour the city wakes up at
 *   04 ONLINE  solo, or a room to share — a code you type or one we make
 *
 * It replaces the old single-screen garage: same type, same palette, same
 * clipped panels, but a player now walks through it the way the game reads.
 * Everything here is presentation — the car, the world and the weather are
 * switched on the engine behind the panel as each choice is made, so what the
 * player sees on the turntable and in the map cards is what they drive.
 */
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CarPreview } from "@/components/CarPreview";
import { GameLogo } from "@/components/GameLogo";
import { MapPreview } from "@/components/MapPreview";
import { ModelLine, type ModelState } from "@/components/ModelLine";
import { PaintPicker } from "@/components/PaintPicker";
import { carKind, formatBytes, type CarEntry } from "@/game/carmodels";
import type { VehicleSpec } from "@/game/vehicles";
import type { WorldMapSource } from "@/game/worldmaps";
import type { CgUser } from "@/lib/crazygames";
import {
  ArrowLeft, ArrowRight, Check, Download, Link2, Loader2, Plus, Users, Zap,
} from "lucide-react";

const STEPS = [
  { key: "CAR", label: "Choose your car" },
  { key: "MAP", label: "Choose the map" },
  { key: "TIME", label: "Set the time of day" },
  { key: "ONLINE", label: "Drive" },
] as const;

/** One tap for the mood, and the slider stays for anything in between. */
const SKY_PRESETS: { label: string; hour: number }[] = [
  { label: "NIGHT", hour: 3 },
  { label: "DAWN", hour: 6.2 },
  { label: "DAY", hour: 12.5 },
  { label: "GOLDEN", hour: 18.6 },
  { label: "DUSK", hour: 21 },
];

/* A sky, as three stops, keyed to the hour. Interpolated, so the strip above
   the slider always looks like the sky the slider is asking for. */
const SKY_KEYS: { hour: number; top: number; mid: number; low: number }[] = [
  { hour: 0, top: 0x05070f, mid: 0x0a1020, low: 0x121a2c },
  { hour: 5.2, top: 0x18213c, mid: 0x59456a, low: 0xd98a5c },
  { hour: 7.5, top: 0x2c5f9c, mid: 0x86b2d8, low: 0xd9cfb6 },
  { hour: 12.5, top: 0x2f6cb8, mid: 0x8fc0e8, low: 0xdfe6ea },
  { hour: 17.6, top: 0x27568f, mid: 0x7ea6cd, low: 0xe8c39a },
  { hour: 19.6, top: 0x1b2450, mid: 0xa55c3e, low: 0xf0a35c },
  { hour: 22.4, top: 0x060812, mid: 0x0c1224, low: 0x131a2a },
  { hour: 24, top: 0x05070f, mid: 0x0a1020, low: 0x121a2c },
];

function lerpHex(a: number, b: number, t: number) {
  const mix = (sh: number) => {
    const x = (a >> sh) & 255;
    const y = (b >> sh) & 255;
    return Math.round(x + (y - x) * t);
  };
  return `rgb(${mix(16)}, ${mix(8)}, ${mix(0)})`;
}

function skyFor(hour: number) {
  const h = ((hour % 24) + 24) % 24;
  let i = 0;
  while (i < SKY_KEYS.length - 2 && h > SKY_KEYS[i + 1].hour) i++;
  const a = SKY_KEYS[i];
  const b = SKY_KEYS[i + 1];
  const t = b.hour === a.hour ? 0 : Math.min(1, Math.max(0, (h - a.hour) / (b.hour - a.hour)));
  return {
    top: lerpHex(a.top, b.top, t),
    mid: lerpHex(a.mid, b.mid, t),
    low: lerpHex(a.low, b.low, t),
  };
}

function hourLabel(hour: number) {
  const h = ((hour % 24) + 24) % 24;
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  return {
    clock: `${String(hh).padStart(2, "0")}:${String(mm % 60).padStart(2, "0")}`,
    phase:
      h < 4.6
        ? "NIGHT"
        : h < 7
          ? "DAWN"
          : h < 11
            ? "MORNING"
            : h < 15
              ? "MIDDAY"
              : h < 17.5
                ? "AFTERNOON"
                : h < 20.5
                  ? "GOLDEN HOUR"
                  : "NIGHT",
  };
}

export interface LaunchCheck {
  label: string;
  done: boolean;
}

export interface LaunchPeer {
  session: string;
  name: string;
  carName: string;
  age: number;
}

export interface LaunchFlowProps {
  /* the loading screen */
  ready: boolean;
  progress: number;
  note: string;
  checks: LaunchCheck[];

  /* 01 car */
  garage: CarEntry[];
  entry: CarEntry;
  spec: VehicleSpec;
  equipping: string | null;
  model: ModelState | null;
  onChooseCar: (id: string) => void;
  paint: number;
  onPaint: (hex: number) => void;

  /* 02 map */
  worlds: WorldMapSource[];
  worldName: string;
  onWorld: (source: WorldMapSource) => void;
  worldLoad: { p: number; note: string } | null;

  /* 03 time */
  hour: number;
  onHour: (hour: number) => void;

  /* 04 online */
  driver: string;
  platform: CgUser | null;
  onForgetDriver: () => void;
  netOn: boolean;
  onNet: (on: boolean) => void;
  room: string;
  peers: LaunchPeer[];
  netState: "idle" | "connecting" | "live" | "error";
  netError: string | null;
  onJoinRoom: (raw: string) => void;
  onCreateRoom: () => void;
  inviteLink: string;

  /** the platform's banner owns a strip at the bottom of the menu screen */
  bannerSpace: boolean;

  /* and away */
  onStart: () => void;
}

export function LaunchFlow(props: LaunchFlowProps) {
  /* Coming back from a run the world already exists, so the loading screen is
     only ever shown when there is really something to wait for. */
  const [phase, setPhase] = useState<"loading" | "flow">(props.ready ? "flow" : "loading");
  const [step, setStep] = useState(0);
  const [roomDraft, setRoomDraft] = useState(props.room);

  /* the loading screen holds for a beat at 100% so it is read, not glimpsed */
  useEffect(() => {
    if (!props.ready) return;
    const t = window.setTimeout(() => setPhase("flow"), 850);
    return () => window.clearTimeout(t);
  }, [props.ready]);

  useEffect(() => {
    setRoomDraft(props.room);
  }, [props.room]);

  const last = step === STEPS.length - 1;
  const next = () => (last ? props.onStart() : setStep((s) => Math.min(STEPS.length - 1, s + 1)));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight") setStep((s) => Math.min(STEPS.length - 1, s + 1));
      if (e.key === "ArrowLeft") setStep((s) => Math.max(0, s - 1));
      if (e.key === "Enter") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (phase === "loading") {
    return <LaunchSplash progress={props.progress} note={props.note} checks={props.checks} />;
  }

  return (
    <div className="fixed inset-0 z-[8] overflow-hidden bg-carbon/94 text-chalk backdrop-blur-[3px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(255,106,42,.13), transparent 62%), radial-gradient(ellipse 60% 50% at 85% 105%, rgba(56,120,190,.14), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className={
          "safe-inset relative flex h-full flex-col " +
          (props.bannerSpace ? "pb-[60px] sm:pb-[90px]" : "")
        }
      >
        <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-8">
          <div className="flex items-center gap-4">
            <GameLogo width={112} glow={false} />
            <span className="hidden font-mono text-[9px] tracking-[0.3em] text-muted-foreground lg:block">
              OPEN CITY DRIVING
            </span>
          </div>

          <nav className="hidden items-center gap-1.5 md:flex">
            {STEPS.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setStep(i)}
                className={
                  "font-mono text-[10px] tracking-[0.16em] transition-colors " +
                  "border px-2.5 py-1 " +
                  (i === step
                    ? "border-signal bg-signal font-semibold text-carbon"
                    : i < step
                      ? "border-white/15 text-chalk/70 hover:border-signal/60"
                      : "border-white/10 text-muted-foreground hover:border-signal/50 hover:text-chalk")
                }
              >
                {String(i + 1).padStart(2, "0")} {s.key}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {props.platform?.profilePictureUrl ? (
              <img
                src={props.platform.profilePictureUrl}
                alt=""
                referrerPolicy="no-referrer"
                className="size-6 object-cover"
              />
            ) : (
              <span className="size-1.5 bg-signal" />
            )}
            <span className="max-w-[7.5rem] truncate font-display text-sm font-bold tracking-tight">
              {(props.driver || "DRIVER").toUpperCase()}
            </span>
            {props.platform ? (
              <span className="hidden font-mono text-[9px] tracking-[0.16em] text-muted-foreground sm:block">
                CRAZYGAMES
              </span>
            ) : (
              <button
                type="button"
                onClick={props.onForgetDriver}
                className="cursor-pointer border border-white/12 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.16em] text-muted-foreground transition-colors hover:border-signal/50 hover:text-chalk"
              >
                CHANGE
              </button>
            )}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-5 sm:px-8">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-[10px] tracking-[0.34em] text-signal">
              STEP {String(step + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
            </span>
            <h1 className="font-display text-2xl leading-none font-bold tracking-tight sm:text-3xl">
              {STEPS[step].label.toUpperCase()}
            </h1>
          </div>

          {step === 0 ? <CarStep {...props} /> : null}
          {step === 1 ? <MapStep {...props} /> : null}
          {step === 2 ? <TimeStep {...props} /> : null}
          {step === 3 ? (
            <OnlineStep {...props} roomDraft={roomDraft} onRoomDraft={setRoomDraft} />
          ) : null}
        </main>

        <footer className="flex flex-wrap items-center gap-3 border-t border-white/10 px-4 py-3 sm:px-8">
          <Button
            variant="outline"
            className="cursor-pointer gap-2 font-mono text-[10px] tracking-[0.2em]"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            <ArrowLeft className="size-3.5" /> BACK
          </Button>

          <span className="hidden font-mono text-[10px] tracking-[0.16em] text-muted-foreground sm:block">
            {step === 0
              ? "CLICK A CAR · PICK A COLOUR · ENTER FOR NEXT"
              : step === 1
                ? "PICK THE WORLD YOU WANT UNDER THE WHEELS"
                : step === 2
                  ? "THE CITY LIGHTS UP WHATEVER HOUR YOU SET"
                  : props.netOn
                    ? "TYPE A ROOM CODE TO JOIN, OR MAKE ONE TO INVITE"
                    : "SOLO IS PRIVATE — NOBODY ELSE IS PUT IN YOUR WORLD"}
          </span>

          <div className="ml-auto flex items-center gap-2">
            {last ? null : (
              <Button
                className="cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]"
                onClick={next}
              >
                NEXT <ArrowRight className="size-3.5" />
              </Button>
            )}
            {last ? (
              <Button
                size="lg"
                className="cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]"
                onClick={props.onStart}
              >
                <Zap className="size-4" />
                {props.netOn ? "JOIN & DRIVE" : "DRIVE"}
              </Button>
            ) : null}
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ loading */

function LaunchSplash({
  progress,
  note,
  checks,
}: {
  progress: number;
  note: string;
  checks: LaunchCheck[];
}) {
  const pct = Math.round(Math.min(1, Math.max(0, progress)) * 100);
  return (
    <div className="fixed inset-0 z-[9] flex flex-col items-center justify-center bg-carbon px-6 text-chalk">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 42%, rgba(56,120,190,.16), transparent 68%), radial-gradient(ellipse 70% 40% at 50% 100%, rgba(255,106,42,.12), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative flex flex-col items-center">
        <GameLogo width={320} />
        <div className="mt-5 font-mono text-[10px] tracking-[0.42em] text-muted-foreground">
          OPEN CITY DRIVING
        </div>

        <div className="mt-8 w-[min(86vw,460px)]">
          <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.2em]">
            <span className="text-muted-foreground">{note.toUpperCase()}</span>
            <span className="text-signal">{pct}%</span>
          </div>
          <div className="mt-2 h-[3px] w-full overflow-hidden bg-white/10">
            <div
              className="h-full bg-signal transition-[width] duration-300 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="mt-4 grid gap-1.5">
            {checks.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em]"
              >
                <span className={c.done ? "text-emerald-400" : "text-muted-foreground/50"}>
                  {c.done ? "■" : "□"}
                </span>
                <span className={c.done ? "text-chalk/80" : "text-muted-foreground/60"}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 font-mono text-[9px] tracking-[0.28em] text-muted-foreground/60">
          240 HZ VEHICLE DYNAMICS · MULTIPLAYER · NO ACCOUNT NEEDED
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- 01 the car */

function CarStep({
  garage, entry, equipping, model, onChooseCar, paint, onPaint,
}: LaunchFlowProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
      <div>
        <div className="relative border border-white/12 bg-black/45">
          <CarPreview
            url={entry.url}
            kind={carKind(entry)}
            paint={paint}
            turn={entry.turn ?? 0}
            className="h-[240px] w-full sm:h-[330px]"
          />
          <div className="pointer-events-none absolute left-3 top-3">
            <div className="font-display text-2xl leading-none font-bold tracking-tight">
              {entry.name}
            </div>
            <div className="mt-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
              {entry.klass.toUpperCase()} · {entry.physics.powerKw} KW · {entry.physics.mass} KG ·{" "}
              {formatBytes(entry.bytes)}
            </div>
          </div>
          <div className="absolute inset-x-3 bottom-2 flex items-center justify-between gap-2">
            <ModelLine model={model} entry={entry} />
            {equipping === entry.id ? (
              <span className="flex items-center gap-1 font-mono text-[10px] tracking-[0.14em] text-signal">
                <Loader2 className="size-3 animate-spin" /> EQUIPPING
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-3 border border-white/10 bg-white/4 p-3">
          <PaintPicker paint={paint} onChange={onPaint} />
          <p className="mt-2 font-mono text-[9px] leading-relaxed tracking-[0.14em] text-muted-foreground">
            THE COLOUR GOES STRAIGHT ON — WHAT TURNS HERE IS WHAT LEAVES THE LINE.
          </p>
        </div>
      </div>

      <div className="border border-white/12 bg-black/45 p-3">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-mono text-[9px] tracking-[0.28em] text-muted-foreground">
            THE FLEET
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">{garage.length} CARS</span>
        </div>
        <div className="grid max-h-[300px] gap-1.5 overflow-y-auto pr-1 sm:max-h-[430px]">
          {garage.map((c) => {
            const active = entry.id === c.id;
            const busy = equipping === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => onChooseCar(c.id)}
                className={
                  "flex cursor-pointer items-center justify-between gap-3 border px-3 py-2 text-left transition-colors " +
                  (active ? "border-signal bg-signal/10" : "border-white/12 hover:border-signal/50")
                }
              >
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-bold tracking-tight">
                    {c.name}
                  </span>
                  <span className="block truncate font-mono text-[10px] text-muted-foreground">
                    {c.klass}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-muted-foreground">
                  {busy ? <Loader2 className="size-3 animate-spin" /> : null}
                  {active ? <Check className="size-3 text-signal" /> : null}
                  {c.physics.powerKw} KW
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- 02 the map */

function MapStep({ worlds, worldName, onWorld, worldLoad }: LaunchFlowProps) {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {worlds.map((w) => {
          const driving = worldName === w.name;
          const badge =
            w.kind === "procedural"
              ? "GENERATED"
              : w.url.startsWith("maps/")
                ? "SHIPPED"
                : "IMPORTED";
          return (
            <button
              key={w.id}
              type="button"
              onClick={() => onWorld(w)}
              className={
                "group cursor-pointer border text-left transition-colors " +
                (driving ? "border-signal bg-signal/10" : "border-white/12 hover:border-signal/50")
              }
            >
              <MapPreview source={w} badge={badge} className="aspect-[16/10] w-full" />
              <div className="border-t border-white/10 p-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-base font-bold tracking-tight">{w.name}</span>
                  <span
                    className={
                      "shrink-0 font-mono text-[10px] tracking-[0.14em] " +
                      (driving ? "text-signal" : "text-muted-foreground")
                    }
                  >
                    {driving ? "DRIVING" : "SELECT"}
                  </span>
                </div>
                <div className="mt-1 line-clamp-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
                  {w.credit}
                </div>
                {w.bytes ? (
                  <div className="mt-1 font-mono text-[9px] tracking-[0.14em] text-muted-foreground/70">
                    {formatBytes(w.bytes)} · {w.kind.toUpperCase()}
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>

      {worldLoad ? (
        <div className="mt-4 border border-white/12 bg-black/50 p-3">
          <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
            <span>BUILDING {worldName.toUpperCase()}</span>
            <span className="text-signal">{Math.round(worldLoad.p * 100)}%</span>
          </div>
          <div className="mt-2 h-1 w-full bg-white/10">
            <div
              className="h-full bg-signal transition-[width]"
              style={{ width: `${worldLoad.p * 100}%` }}
            />
          </div>
          <div className="mt-1 font-mono text-[10px] text-muted-foreground">{worldLoad.note}</div>
        </div>
      ) : (
        <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground">
          EVERY MAP IS DRIVEN AS ITS AUTHOR MODELLED IT — THE WIDEST STREET BECOMES THE START LINE,
          AND THE WALLS BECOME SOLID.
        </p>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- 03 the time */

function TimeStep({ hour, onHour }: LaunchFlowProps) {
  const sky = useMemo(() => skyFor(hour), [hour]);
  const { clock, phase } = hourLabel(hour);
  return (
    <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
      <div className="border border-white/12">
        <div
          className="relative h-[210px] w-full sm:h-[280px]"
          style={{
            background: `linear-gradient(to bottom, ${sky.top}, ${sky.mid} 55%, ${sky.low})`,
          }}
        >
          {/* the sun / moon rides the arc, so the strip reads as a real sky */}
          <div
            className="absolute size-8 rounded-full"
            style={{
              left: `calc(${(((hour % 24) + 24) % 24 / 24) * 99}% - 1rem)`,
              top: `${Math.max(4, 22 + 26 * Math.cos(((((hour % 24) + 24) % 24) / 24) * Math.PI * 2))}%`,
              background:
                hour < 5.5 || hour > 21
                  ? "radial-gradient(circle, #e8eefc, rgba(232,238,252,0))"
                  : "radial-gradient(circle, #fff4d8, rgba(255,214,138,0))",
              boxShadow: "0 0 60px 18px rgba(255,220,170,.28)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-carbon/95 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <div className="font-display text-4xl leading-none font-bold tracking-tight">
              {clock}
            </div>
            <div className="mt-1 font-mono text-[10px] tracking-[0.24em] text-signal">{phase}</div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/45 p-4">
          <input
            type="range"
            min={0}
            max={24}
            step={0.1}
            value={hour}
            onChange={(e) => onHour(Number(e.target.value))}
            className="w-full cursor-pointer accent-[#ff6a2a]"
          />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {SKY_PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => onHour(p.hour)}
                className={
                  "cursor-pointer border px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] transition-colors " +
                  (Math.abs(hour - p.hour) < 0.35
                    ? "border-signal bg-signal font-semibold text-carbon"
                    : "border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk")
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="border border-white/12 bg-black/45 p-4 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground">
          <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-chalk/80">WHAT THE HOUR CHANGES</div>
          DARKNESS FALLS, THE STREET LAMPS COME ON AND THE TYRES FEEL THE COLD. GRIP IS HIGHEST AT
          MIDDAY, LOWEST JUST BEFORE DAWN — THE SAME CAR IS A DIFFERENT CAR AT 03:00.
        </div>
        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
          {(SKY_PRESETS as { label: string; hour: number }[]).map((p) => {
            const s = skyFor(p.hour);
            const l = hourLabel(p.hour);
            return (
              <button
                key={"card" + p.label}
                type="button"
                onClick={() => onHour(p.hour)}
                className={
                  "cursor-pointer border p-2 text-left transition-colors " +
                  (Math.abs(hour - p.hour) < 0.35
                    ? "border-signal"
                    : "border-white/12 hover:border-signal/50")
                }
              >
                <div
                  className="mb-1.5 h-8 w-full"
                  style={{ background: `linear-gradient(to bottom, ${s.top}, ${s.mid}, ${s.low})` }}
                />
                <div className="text-chalk/85">{p.label}</div>
                <div className="text-muted-foreground">
                  {l.clock} · {l.phase}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- 04 the online */

function OnlineStep({
  netOn, onNet, room, peers, netState, netError, onJoinRoom, onCreateRoom, inviteLink,
  roomDraft, onRoomDraft,
}: LaunchFlowProps & { roomDraft: string; onRoomDraft: (v: string) => void }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* the link is on screen either way */
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <ModeCard
          active={!netOn}
          onClick={() => onNet(false)}
          title="SOLO"
          line="Straight onto the road. Nobody else is in your world."
        />
        <ModeCard
          active={netOn}
          onClick={() => onNet(true)}
          title="MULTIPLAYER"
          line="Enter a friend's server code, or create one and share it."
        />
      </div>

      {netOn ? (
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="border border-white/12 bg-black/45 p-4">
            <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">
              SERVER CODE
            </div>
            <div className="flex gap-1.5">
              <input
                value={roomDraft}
                onChange={(e) => onRoomDraft(e.target.value.slice(0, 20))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onJoinRoom(roomDraft);
                }}
                spellCheck={false}
                placeholder="ENTER CODE"
                className="min-w-0 flex-1 border border-white/12 bg-black/40 px-3 py-2 font-mono text-sm tracking-[0.24em] text-chalk uppercase outline-none placeholder:text-muted-foreground/50 focus:border-signal/70"
              />
              <Button
                className="cursor-pointer gap-1.5 font-mono text-[10px] tracking-[0.16em]"
                onClick={() => onJoinRoom(roomDraft)}
              >
                <ArrowRight className="size-3.5" /> JOIN
              </Button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="cursor-pointer gap-1.5 font-mono text-[10px] tracking-[0.16em]"
                onClick={onCreateRoom}
              >
                <Plus className="size-3.5" /> CREATE A CODE
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer gap-1.5 font-mono text-[10px] tracking-[0.16em]"
                onClick={() => void copy()}
              >
                <Link2 className="size-3.5" /> {copied ? "LINK COPIED" : "COPY INVITE"}
              </Button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                YOU ARE JOINING
              </span>
              <span className="font-display text-lg font-bold tracking-[0.18em] text-signal">
                {room.toUpperCase()}
              </span>
            </div>
            <p className="mt-2 font-mono text-[9px] leading-relaxed tracking-[0.12em] text-muted-foreground">
              ANYONE WHO OPENS THE INVITE LINK LANDS IN THE SAME ROOM. POSITIONS GO OUT ABOUT EIGHT
              TIMES A SECOND.
            </p>
          </div>

          <div className="border border-white/12 bg-black/45">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <Users className="size-3.5 text-signal" />
              <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                {room.toUpperCase()} / {1 + peers.length} ONLINE
              </span>
              <span
                className={
                  "ml-auto font-mono text-[10px] tracking-[0.14em] " +
                  (netState === "live"
                    ? "text-emerald-400"
                    : netState === "error"
                      ? "text-destructive"
                      : "text-muted-foreground")
                }
              >
                {netState === "live"
                  ? "LIVE"
                  : netState === "error"
                    ? "RETRYING"
                    : netState === "connecting"
                      ? "CONNECTING"
                      : "WAITING"}
              </span>
            </div>
            <ul className="divide-y divide-white/8">
              <li className="flex items-center gap-2 px-4 py-2 font-mono text-[11px]">
                <span className="size-1.5 bg-signal" />
                <span className="min-w-0 flex-1 truncate text-chalk">YOU</span>
                <span className="text-muted-foreground">READY</span>
              </li>
              {peers.map((p) => (
                <li key={p.session} className="flex items-center gap-2 px-4 py-2 font-mono text-[11px]">
                  <span className={"size-1.5 " + (p.age < 1200 ? "bg-emerald-400" : "bg-muted-foreground/50")} />
                  <span className="min-w-0 flex-1 truncate text-chalk">{p.name}</span>
                  <span className="truncate text-muted-foreground">{p.carName}</span>
                </li>
              ))}
            </ul>
            {netError ? (
              <p className="m-3 border border-destructive/40 bg-destructive/10 px-2 py-1 font-mono text-[10px] leading-relaxed text-destructive">
                RELAY · {netError}
              </p>
            ) : (
              <p className="m-3 font-mono text-[9px] leading-relaxed tracking-[0.12em] text-muted-foreground">
                THE ROAD IS SHARED THE MOMENT YOU PRESS DRIVE — FRIENDS CAN ALSO JOIN FROM THE
                PLATFORM'S OWN FRIENDS LIST.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="border border-white/12 bg-black/45 p-4 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground">
          <div className="mb-2 flex items-center gap-2 text-chalk/80">
            <Download className="size-3.5 text-signal" /> SOLO RUN
          </div>
          YOU DRIVE ALONE IN A PRIVATE WORLD: NOBODY PUBLISHES A POSITION, NOBODY IS DRAWN ON YOUR
          ROAD, AND THE CITY IS EXACTLY THE ONE YOU PICKED. SWITCH TO MULTIPLAYER ANY TIME — EVEN
          AT THE LIGHTS, FROM THE SETTINGS PANEL.
        </div>
      )}
    </div>
  );
}

function ModeCard({
  active, onClick, title, line,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  line: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "cursor-pointer border p-4 text-left transition-colors " +
        (active ? "border-signal bg-signal/10" : "border-white/12 hover:border-signal/50")
      }
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-xl font-bold tracking-tight">{title}</span>
        <span
          className={
            "flex size-5 items-center justify-center border " +
            (active ? "border-signal bg-signal text-carbon" : "border-white/20 text-transparent")
          }
        >
          <Check className="size-3" />
        </span>
      </div>
      <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground">{line}</p>
    </button>
  );
}
