/**
 * PAINT — twelve factory colours and a colour wheel.
 *
 * A car's paint is the one thing about it a player really owns, so it is a
 * first-class choice rather than a settings row: the swatches sit next to the
 * turntable in the garage and the same control appears in the in-game panel, so
 * a colour can be changed at the lights too. Whatever is picked is kept for the
 * next visit.
 */
import { PAINT_COLORS } from "@/game/vehicles";
import { cgGet } from "@/lib/crazygames";
import { loadProfile, saveProfile } from "@/game/profile";

/** The key the colour used to live under on its own, before the profile. */
export const PAINT_STORE_KEY = "riverbend.paint";

export function hexOf(hex: number) {
  return "#" + (hex & 0xffffff).toString(16).padStart(6, "0");
}

/**
 * The colour is part of the player profile (see @/game/profile), which is saved
 * through the CrazyGames data module — so on the platform it follows the
 * account instead of the browser. The old standalone key is still read once, so
 * a player who painted their car before the profile existed keeps their paint.
 */
export function readSavedPaint(fallback: number) {
  const fromProfile = loadProfile().paint;
  if (fromProfile > 0) return fromProfile & 0xffffff;
  const legacy = Number(cgGet(PAINT_STORE_KEY));
  return Number.isFinite(legacy) && legacy > 0 ? legacy & 0xffffff : fallback;
}

export function savePaint(hex: number) {
  saveProfile({ paint: hex & 0xffffff });
}

export function PaintPicker({
  paint,
  onChange,
  compact,
}: {
  paint: number;
  onChange: (hex: number) => void;
  compact?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-mono text-[9px] tracking-[0.28em] text-muted-foreground">PAINT</span>
        <span className="font-mono text-[10px] tracking-[0.14em] text-signal">
          {hexOf(paint).toUpperCase()}
        </span>
      </div>
      <div className={"grid gap-1.5 " + (compact ? "grid-cols-6" : "grid-cols-6 sm:grid-cols-7")}>
        {PAINT_COLORS.map((c) => {
          const active = (paint & 0xffffff) === (c & 0xffffff);
          return (
            <button
              key={c}
              type="button"
              title={hexOf(c)}
              onClick={() => onChange(c)}
              style={{ background: hexOf(c) }}
              className={
                "h-7 w-full border transition-transform " +
                (active
                  ? "scale-[1.06] border-signal ring-1 ring-signal/60"
                  : "border-white/20 hover:scale-[1.04] hover:border-chalk/50")
              }
            />
          );
        })}
        <label
          title="Custom colour"
          className="relative flex h-7 cursor-pointer items-center justify-center border border-white/20 bg-[conic-gradient(at_50%_50%,#ff6a2a,#ffe066,#5ad27a,#3ba7ff,#a06bff,#ff6a2a)] font-mono text-[9px] tracking-[0.1em] text-carbon transition-transform hover:scale-[1.04]"
        >
          <span className="bg-black/45 px-1 text-[9px] text-chalk">+</span>
          <input
            type="color"
            value={hexOf(paint)}
            onChange={(e) => {
              const next = Number.parseInt(e.target.value.slice(1), 16);
              if (Number.isFinite(next)) onChange(next);
            }}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>
      </div>
    </div>
  );
}
