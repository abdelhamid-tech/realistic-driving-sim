/**
 * THE RADAR — where the car is, and where everyone else is.
 *
 * An open city with a multiplayer room in it needs one thing on screen at all
 * times: a map. This is that map — the real city plan (see src/game/cityplan),
 * cropped around the car, north up, with the player as the one arrow that never
 * moves off the middle and everyone else as coloured dots wherever they really
 * are. Their colour is their paint, so the red car you saw at the lights is the
 * red dot at the lights.
 *
 * It is deliberately not a game mechanic: no objectives, nothing hidden. It is
 * the thing every driving game has and this one was missing, and in a room of
 * eight it is the difference between driving together and driving near each
 * other.
 *
 * Two levels of zoom, and a click opens the whole city with street names on it.
 */
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Map as MapIcon, Maximize2, Minimize2 } from "lucide-react";
import { cityPlan, planX, planY, PLAN_METRES, PLAN_SCALE } from "@/game/cityplan";
import type { NetSnapshot, Telemetry } from "@/game/types";

/** the backing store of the corner radar; CSS decides how big it looks */
const BACKING = 480;
const BIG_BACKING = 1024;

const ZOOMS = [
  { label: "BLOCK", radius: 155 },
  { label: "CITY", radius: 660 },
] as const;

export interface RadarPeer {
  session?: string;
  name: string;
  x: number;
  z: number;
  yaw?: number;
  paint?: number;
  carName?: string;
}

const paintCss = (paint: number | undefined) => {
  if (typeof paint !== "number" || !Number.isFinite(paint)) return "#8b8677";
  return "#" + (paint & 0xffffff).toString(16).padStart(6, "0");
};

interface PaintOptions {
  size: number;
  radius: number;
  snapshot: NetSnapshot | null;
  peers: RadarPeer[];
  /** street names, for the big map */
  labels?: boolean;
  /** names beside the dots, for the big map */
  names?: boolean;
  /** hold the city in the middle instead of the car (the big map) */
  centred?: boolean;
  /** a square frame instead of a round one, so no corner of the city is cut */
  square?: boolean;
}

/** One frame of map. Everything here is in canvas pixels. */
function paintMap(canvas: HTMLCanvasElement, o: PaintOptions) {
  const ctx = canvas.getContext("2d");
  const plan = cityPlan(undefined, o.labels);
  if (!ctx || !plan) return;
  const size = o.size;
  const half = size / 2;
  const px = o.snapshot?.x ?? 0;
  const pz = o.snapshot?.z ?? 0;
  const yaw = o.snapshot?.yaw ?? 0;
  const scale = half / o.radius;
  /* the corner radar follows the car; the big map holds the whole city still,
     so the arrow walks across it instead of the city sliding under it */
  const cx = o.centred ? 0 : px;
  const cz = o.centred ? 0 : pz;
  const project = (wx: number, wz: number) => [half + (wx - cx) * scale, half - (wz - cz) * scale];

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, size, size);
  ctx.save();
  /* a circle rather than a square: the map reads as an instrument, and the
     city's own corners never have to be drawn at all. The big map is square
     for the opposite reason: the whole city has to fit in it. */
  ctx.beginPath();
  if (o.square) ctx.rect(1, 1, size - 2, size - 2);
  else ctx.arc(half, half, half - 1, 0, Math.PI * 2);
  ctx.clip();

  const span = 2 * o.radius * PLAN_SCALE;
  ctx.drawImage(plan, planX(cx - o.radius), planY(cz + o.radius), span, span, 0, 0, size, size);

  /* everyone else: a dot in their own colour, anchored on the rim if they are
     outside the window. Everything scales with the canvas, so the corner radar
     and the big map read the same at their own sizes. */
  const k = size / BACKING;
  const dot = Math.round((o.size > 600 ? 11 : 9) * k);
  let offscreen = 0;
  for (const peer of o.peers) {
    const dx = peer.x - cx;
    const dz = peer.z - cz;
    const sx = half + dx * scale;
    const sy = half - dz * scale;
    const inside = Math.abs(dx) < o.radius * 0.94 && Math.abs(dz) < o.radius * 0.94;
    if (!inside) {
      if (offscreen++ > 5) continue;
      /* off the edge: a chevron on the rim, pointing where they are */
      const a = Math.atan2(dx, dz);
      const rx = half + Math.sin(a) * (half - 12);
      const ry = half - Math.cos(a) * (half - 12);
      ctx.save();
      ctx.translate(rx, ry);
      /* up is north, so a chevron turned by the bearing points outward */
      ctx.rotate(a);
      ctx.fillStyle = paintCss(peer.paint);
      ctx.beginPath();
      ctx.moveTo(0, -8 * k);
      ctx.lineTo(7 * k, 7 * k);
      ctx.lineTo(-7 * k, 7 * k);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      continue;
    }
    ctx.beginPath();
    ctx.arc(sx, sy, dot, 0, Math.PI * 2);
    ctx.fillStyle = paintCss(peer.paint);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(20,20,19,.55)";
    ctx.stroke();
    if (o.names) {
      ctx.font = `600 ${Math.round(18 * k)}px Rajdhani, system-ui, sans-serif`;
      ctx.fillStyle = "rgba(20,20,19,.82)";
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(peer.name.slice(0, 14).toUpperCase(), sx, sy - dot - 6 * k);
    }
  }

  /* the player: the one mark that never leaves the middle of the radar, and
     walks across the big map */
  const [ax, ay] = project(px, pz);
  ctx.save();
  ctx.translate(ax, ay);
  ctx.rotate(yaw);
  ctx.beginPath();
  ctx.moveTo(0, -17 * k);
  ctx.lineTo(12 * k, 13 * k);
  ctx.lineTo(0, 6 * k);
  ctx.lineTo(-12 * k, 13 * k);
  ctx.closePath();
  ctx.fillStyle = "#d97757";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(20,20,19,.6)";
  ctx.stroke();
  ctx.restore();

  ctx.restore();

  /* the rim, and the compass ticks: north is +z, which is up */
  ctx.beginPath();
  if (o.square) ctx.rect(1.5, 1.5, size - 3, size - 3);
  else ctx.arc(half, half, half - 1.5, 0, Math.PI * 2);
  ctx.lineWidth = 3 * k;
  ctx.strokeStyle = "rgba(20,20,19,.35)";
  ctx.stroke();
  ctx.strokeStyle = "rgba(20,20,19,.22)";
  ctx.lineWidth = 2 * k;
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    ctx.beginPath();
    ctx.moveTo(half + Math.sin(a) * (half - 14 * k), half - Math.cos(a) * (half - 14 * k));
    ctx.lineTo(half + Math.sin(a) * (half - 5 * k), half - Math.cos(a) * (half - 5 * k));
    ctx.stroke();
  }
  ctx.font = `700 ${Math.round(20 * k)}px Rajdhani, system-ui, sans-serif`;
  ctx.fillStyle = "rgba(20,20,19,.65)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("N", half, 22 * k);
}

export function Radar({
  snapshot,
  peers,
  tel,
  quality,
  className,
}: {
  /** read straight from the engine, once per frame — never React state */
  snapshot: () => NetSnapshot | null;
  peers: RadarPeer[];
  tel: Telemetry | null;
  /** "AUTO · HIGH" or a pinned tier name */
  quality: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bigRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(0);
  const [open, setOpen] = useState(false);
  /* The draw loop runs outside React and must always read the latest props;
     a ref synced by an effect is the honest way to do that, and it keeps the
     loop off the render path: telemetry arrives ten times a second and none
     of it should restart a frame. */
  const liveRef = useRef<{ snapshot: () => NetSnapshot | null; peers: RadarPeer[] }>({ snapshot, peers });
  useEffect(() => {
    liveRef.current = { snapshot, peers };
  }, [snapshot, peers]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let raf = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      paintMap(canvas, {
        size: BACKING,
        radius: ZOOMS[zoom].radius,
        snapshot: liveRef.current.snapshot(),
        peers: liveRef.current.peers,
      });
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [zoom]);

  useEffect(() => {
    if (!open) return;
    const canvas = bigRef.current;
    if (!canvas) return;
    let raf = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      paintMap(canvas, {
        size: BIG_BACKING,
        radius: PLAN_METRES / 2,
        snapshot: liveRef.current.snapshot(),
        peers: liveRef.current.peers,
        labels: true,
        names: true,
        centred: true,
        square: true,
      });
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [open]);

  const online = peers.length;
  const speed = tel ? Math.round(tel.speedKph) : 0;

  return (
    <>
      <div
        className={
          "pointer-events-auto border border-edge/12 bg-card/88 backdrop-blur-sm " + (className ?? "")
        }
      >
        {/* the readout the mobile HUD is built around: the desktop panels hide
            on a phone, and speed, gear and drift points have to live somewhere */}
        <div className="flex items-end justify-between gap-2 px-2 pt-1.5">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl leading-none font-bold tracking-tight text-chalk">
              {speed}
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground">KM/H</span>
            <span className="ml-1 font-mono text-[10px] tracking-[0.1em] text-signal">
              {tel?.gear ?? "D1"}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setZoom((z) => (z + 1) % ZOOMS.length)}
            className="cursor-pointer border border-edge/12 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal/60 hover:text-chalk"
          >
            {ZOOMS[zoom].label}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          title="Open the city map"
          className="relative mx-auto my-1.5 block size-[128px] cursor-pointer sm:size-[150px]"
        >
          <canvas ref={canvasRef} width={BACKING} height={BACKING} className="size-full" />
        </button>

        <div className="flex items-center justify-between gap-2 border-t border-edge/8 px-2 py-1 font-mono text-[9px] tracking-[0.12em] text-muted-foreground">
          <span>
            DRIFT <span className="text-chalk">{Math.round(tel?.driftPoints ?? 0).toLocaleString()}</span>
          </span>
          <span className={online > 0 ? "text-emerald-400" : ""}>
            {online > 0 ? online + " NEARBY" : "SOLO"}
          </span>
          <span className="hidden sm:inline">{quality}</span>
          <span>{tel ? Math.round(tel.fps) + " FPS" : ""}</span>
        </div>
      </div>

      {open
        ? createPortal(
            /* Portalled to the body: the HUD is a stacking context of its own,
               and a map that opens under the buttons of the game it is
               covering would be the wrong kind of full screen. */
            <div
              className="pointer-events-auto fixed inset-0 z-[40] flex flex-col items-center justify-center gap-3 bg-carbon/95 p-4"
              onClick={() => setOpen(false)}
            >
              <div
                className="flex w-full max-w-[min(92vh,900px)] items-center justify-between"
                onClick={(e) => e.stopPropagation()}
              >
            <div className="flex items-center gap-2">
              <MapIcon className="size-4 text-signal" />
              <span className="font-display text-lg font-bold tracking-tight">THE CITY</span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                NORTH UP / YOU ARE THE ORANGE ARROW
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex cursor-pointer items-center gap-1.5 border border-edge/12 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground transition-colors hover:border-signal/60 hover:text-chalk"
            >
              <Minimize2 className="size-3" /> CLOSE
            </button>
          </div>
              <canvas
                ref={bigRef}
                width={BIG_BACKING}
                height={BIG_BACKING}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[76vh] w-auto max-w-full border border-edge/12 bg-card/88"
              />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2.5 bg-[#cdc6b0]" /> DOWNTOWN
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2.5 bg-[#dbd5c4]" /> MIDTOWN
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2.5 bg-[#e6e2d5]" /> OUTER
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2.5 bg-[#cfdcc0]" /> PARK
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2.5 bg-[#d97757]" /> YOU
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2.5 bg-[#8b8677]" /> {online} OTHER{online === 1 ? "" : "S"}
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize2 className="size-3" /> CLICK THE RADAR ANY TIME
            </span>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
