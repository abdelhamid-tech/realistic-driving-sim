/**
 * ONE LINE THAT SAYS WHETHER THE CHOSEN CAR'S MODEL IS REALLY ON THE ROAD.
 *
 * The difference between "the car is selected" and "the car is in the world" is
 * invisible otherwise, and it is the thing players ask about most.
 */
import type { CarEntry } from "@/game/carmodels";

export interface ModelState {
  id: string;
  name: string;
  state: "loading" | "ready" | "failed";
  note: string;
}

export function ModelLine({
  model,
  entry,
  compact,
}: {
  model: ModelState | null;
  entry: CarEntry;
  compact?: boolean;
}) {
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
    <div
      className={
        "flex items-center gap-2 font-mono " +
        (compact ? "text-[10px] tracking-[0.14em]" : "text-[9px] tracking-[0.2em]")
      }
    >
      <span
        className={
          "inline-block size-1.5 rounded-full " +
          (state === "ready"
            ? "bg-emerald-400/85"
            : state === "failed"
              ? "bg-destructive"
              : "bg-signal animate-pulse")
        }
      />
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
