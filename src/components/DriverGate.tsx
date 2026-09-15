import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDriver } from "@/hooks/use-driver";

/**
 * THE DOOR — one field, no account.
 *
 * Replaces sign up / sign in entirely: type a pseudonym, press enter, you are
 * in the garage. Nothing is verified, nothing is sent anywhere, and the name
 * is remembered in this browser so the next visit goes straight through.
 */
export function DriverGate({ children }: { children: React.ReactNode }) {
  const { name, setName } = useDriver();
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!name) inputRef.current?.focus();
  }, [name]);

  if (name) return <>{children}</>;

  const ready = draft.trim().length >= 2;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-carbon p-6 text-chalk">
      {/* the same dusk wash the garage uses, so the door feels like the game */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 15%, rgba(255,106,42,.16), transparent 65%), radial-gradient(ellipse 60% 50% at 80% 90%, rgba(56,120,190,.14), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          opacity: 0.07,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative w-[min(94vw,480px)] border border-white/12 bg-black/55 p-6 backdrop-blur-sm sm:p-8">
        <div className="font-mono text-[10px] tracking-[0.34em] text-signal">RIVERBEND</div>
        <h1 className="mt-2 font-display text-4xl leading-none font-bold tracking-tight sm:text-5xl">
          WHO IS DRIVING?
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Type a pseudonym and you are in. No account, no email, no password — it is just the name
          the other drivers see next to your car.
        </p>

        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (ready) setName(draft);
          }}
        >
          <label className="font-mono text-[9px] tracking-[0.28em] text-muted-foreground">PSEUDONYM</label>
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value.slice(0, 16))}
            placeholder="FAST PHIL"
            spellCheck={false}
            autoComplete="off"
            className="mt-2 w-full border border-white/12 bg-black/40 px-3 py-3 font-display text-xl font-bold tracking-wide text-chalk uppercase outline-none placeholder:text-muted-foreground/50 focus:border-signal/70"
          />
          <Button
            type="submit"
            size="lg"
            disabled={!ready}
            className="mt-4 w-full cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]"
          >
            ENTER THE GARAGE <ArrowRight className="size-4" />
          </Button>
          {!ready ? (
            <p className="mt-2 font-mono text-[10px] text-muted-foreground">AT LEAST TWO CHARACTERS</p>
          ) : null}
        </form>

        <div className="mt-6 border-t border-white/10 pt-3 font-mono text-[9px] leading-relaxed tracking-[0.14em] text-muted-foreground">
          SAVED IN THIS BROWSER ONLY · CLEAR IT FROM THE GARAGE TO CHANGE NAME
        </div>
      </div>
    </div>
  );
}
