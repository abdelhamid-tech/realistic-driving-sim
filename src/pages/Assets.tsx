import { useCallback, useRef, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, Check, ImageIcon, KeyRound, Loader2, RefreshCw, RotateCw, Trash2, Trees,
  TriangleAlert, UploadCloud,
} from "lucide-react";
import { PROP_SLOTS } from "@/game/props";

/**
 * GLOBAL ASSETS — the owner's texture door.
 *
 * Not linked from anywhere: you come here by typing /assets yourself. The key
 * is the same one /import asks for, and it is checked on the server. What you
 * upload here replaces that texture for EVERY player, in every session,
 * everywhere in the game (the roads of the city, the banks, the water...).
 */

const KEY_STORE = "world-import-key";

const SLOTS = [
  { slot: "road", label: "Road", hint: "asphalt strip with kerbs + lane markings; tile spans 14 m; dashes run along V" },
  { slot: "grass", label: "Grass", hint: "banks, parks, forest floor; 5 m per tile" },
  { slot: "concrete", label: "Concrete", hint: "sidewalks, bridge parts, quays; 4 m per tile" },
  { slot: "sand", label: "Sand", hint: "river bed, park paths; 3 m per tile" },
  { slot: "brick", label: "Brick", hint: "warehouse and house walls; 6 m per tile" },
  { slot: "leaf", label: "Foliage", hint: "tree crowns, park bushes; 3 m per tile" },
  { slot: "water", label: "Water", hint: "the river and the ponds; 40 m per tile" },
] as const;

type Slot = (typeof SLOTS)[number]["slot"];

interface AssetRow {
  id: string;
  slot: string;
  fileName: string;
  bytes: number;
  url: string | null;
}

/** One row of `props.list`: the model standing in for a slot. */
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

export default function Assets() {
  const [key, setKey] = useState(() => window.sessionStorage.getItem(KEY_STORE) ?? "");
  const [unlocked, setUnlocked] = useState(false);

  const overrides = useQuery(api.assets.list, unlocked ? {} : "skip");
  const props = useQuery(api.props.list, unlocked ? {} : "skip") as PropRow[] | undefined;

  const unlock = useMutation(api.maps.unlock);
  const uploadUrl = useMutation(api.assets.uploadUrl);
  const register = useMutation(api.assets.register);
  const removeAsset = useMutation(api.assets.remove);
  const propUploadUrl = useMutation(api.props.uploadUrl);
  const registerProp = useMutation(api.props.register);
  const removeProp = useMutation(api.props.remove);
  const tuneProp = useMutation(api.props.tune);

  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<Slot | null>(null);
  const [dragSlot, setDragSlot] = useState<Slot | null>(null);
  const [propBusy, setPropBusy] = useState<string | null>(null);
  const inputs = useRef<Record<string, HTMLInputElement | null>>({});
  const propInputs = useRef<Record<string, HTMLInputElement | null>>({});

  const tryUnlock = useCallback(
    async (value: string) => {
      const cleaned = value.trim();
      if (!cleaned) return;
      setChecking(true);
      setError(null);
      try {
        const ok = await unlock({ password: cleaned });
        if (ok) {
          window.sessionStorage.setItem(KEY_STORE, cleaned);
          setKey(cleaned);
          setUnlocked(true);
        } else {
          setError("That is not the key.");
        }
      } catch {
        setError("The key could not be checked. Try again.");
      } finally {
        setChecking(false);
      }
    },
    [unlock],
  );

  const send = useCallback(
    async (slot: Slot, file: File) => {
      if (!/image\/(png|jpeg|webp)/.test(file.type)) {
        toast.error("That is not an image", { description: "PNG, JPEG or WebP only." });
        return;
      }
      setBusy(slot);
      try {
        const url = await uploadUrl({ password: key });
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        if (!res.ok) throw new Error(`upload failed (${res.status})`);
        const { storageId } = (await res.json()) as { storageId: string };
        await register({
          password: key,
          storageId: storageId as never,
          slot,
          fileName: file.name,
          bytes: file.size,
        });
        toast.success(`${slot} replaced`, { description: "Every player now drives on it." });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        if (/wrong key/i.test(message)) {
          setUnlocked(false);
          window.sessionStorage.removeItem(KEY_STORE);
          setError("The key stopped working. Unlock again.");
        } else {
          toast.error("Upload failed", { description: message });
        }
      } finally {
        setBusy(null);
      }
    },
    [key, register, uploadUrl],
  );

  const remove = useCallback(
    async (id: string, slot: string) => {
      try {
        await removeAsset({ password: key, id: id as never });
        toast.success(`${slot} reset to the shipped texture`);
      } catch (err) {
        toast.error("Remove failed", { description: err instanceof Error ? err.message : String(err) });
      }
    },
    [key, removeAsset],
  );

  /* ------------------------------------------------- the owner's own models
   *  One model per street-furniture slot: it is stamped on every tree, planter,
   *  lamp post and traffic light of the world, for everybody, live. */
  const sendProp = useCallback(
    async (slot: string, file: File) => {
      if (!/\.(glb)$/i.test(file.name)) {
        toast.error("That is not a model", { description: "glTF binary (.glb) only." });
        return;
      }
      setPropBusy(slot);
      try {
        const url = await propUploadUrl({ password: key });
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "model/gltf-binary" },
          body: file,
        });
        if (!res.ok) throw new Error(`upload failed (${res.status})`);
        const { storageId } = (await res.json()) as { storageId: string };
        await registerProp({
          password: key,
          storageId: storageId as never,
          slot,
          name: file.name.replace(/\.[^.]+$/, ""),
          fileName: file.name,
          bytes: file.size,
        });
        toast.success(`${slot} replaced`, {
          description: "Every player drives past it now.",
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        if (/wrong key/i.test(message)) {
          setUnlocked(false);
          window.sessionStorage.removeItem(KEY_STORE);
          setError("The key stopped working. Unlock again.");
        } else {
          toast.error("Upload failed", { description: message });
        }
      } finally {
        setPropBusy(null);
      }
    },
    [key, propUploadUrl, registerProp],
  );

  const dropProp = useCallback(
    async (id: string, slot: string) => {
      try {
        await removeProp({ password: key, id: id as never });
        toast.success(`${slot} back to the shipped model`);
      } catch (err) {
        toast.error("Remove failed", { description: err instanceof Error ? err.message : String(err) });
      }
    },
    [key, removeProp],
  );

  /** A model facing the wrong way: turn it without uploading it again. */
  const turnProp = useCallback(
    async (id: string, angle: number) => {
      try {
        await tuneProp({ password: key, id: id as never, turn: angle });
      } catch (err) {
        toast.error("Turn failed", { description: err instanceof Error ? err.message : String(err) });
      }
    },
    [key, tuneProp],
  );

  /* ----------------------------------------------------------------- gate */
  if (!unlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-carbon p-6">
        <div className="w-full max-w-sm border border-edge/10 bg-card/80 p-6">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-signal">
            <ImageIcon className="size-3.5" /> GLOBAL TEXTURES
          </div>
          <h1 className="mt-2 font-display text-2xl font-bold tracking-tight">World assets</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The same door as /import. What you upload here becomes the world's
            ground for every player.
          </p>
          <form
            className="mt-5 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              void tryUnlock(key);
            }}
          >
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="owner key"
              autoFocus
              className="min-w-0 flex-1 border border-edge/12 bg-card/80 px-3 py-2 font-mono text-sm text-chalk outline-none focus:border-signal/60"
            />
            <Button type="submit" disabled={checking || !key} className="cursor-pointer">
              {checking ? <Loader2 className="size-4 animate-spin" /> : <KeyRound className="size-4" />}
            </Button>
          </form>
          {error ? (
            <p className="mt-3 flex items-center gap-1.5 text-sm text-destructive">
              <TriangleAlert className="size-3.5" /> {error}
            </p>
          ) : null}
          <Link
            to="/drive"
            className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground hover:text-chalk"
          >
            <ArrowLeft className="size-3" /> BACK TO THE CITY
          </Link>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- page */
  const bySlot = new Map<string, AssetRow>();
  for (const row of overrides ?? []) bySlot.set(row.slot, row);
  const propBySlot = new Map<string, PropRow>();
  for (const row of props ?? []) propBySlot.set(row.slot, row);

  return (
    <div className="min-h-screen bg-carbon p-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-signal">
              <ImageIcon className="size-3.5" /> GLOBAL TEXTURES
            </div>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">World assets</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              One upload per slot. It replaces that texture everywhere in the
              game, for everyone, immediately — no rebuild, no redeploy.
            </p>
          </div>
          <Link to="/import" className="text-muted-foreground hover:text-chalk" title="Map import">
            <ImageIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-3">
          {SLOTS.map(({ slot, label, hint }) => {
            const row = bySlot.get(slot);
            return (
              <div
                key={slot}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragSlot(slot);
                }}
                onDragLeave={() => setDragSlot((s) => (s === slot ? null : s))}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragSlot(null);
                  const f = e.dataTransfer.files?.[0];
                  if (f) void send(slot, f);
                }}
                className={
                  "flex items-center gap-4 border p-4 transition-colors " +
                  (dragSlot === slot ? "border-signal bg-signal/10" : "border-edge/10 bg-edge/[0.03]")
                }
              >
                {/* current texture, shipped or override */}
                <div className="size-20 shrink-0 overflow-hidden border border-edge/10 bg-card/80">
                  <img
                    src={row?.url ?? `tex/${slot}.png`}
                    alt={label}
                    className="size-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "0.15";
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-sm font-bold tracking-tight">{label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{slot.toUpperCase()}</span>
                    {row ? (
                      <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                        <Check className="size-3" /> OVERRIDE LIVE
                      </span>
                    ) : (
                      <span className="ml-auto font-mono text-[10px] text-muted-foreground">SHIPPED</span>
                    )}
                  </div>
                  <p className="mt-1 truncate font-mono text-[10px] leading-relaxed text-muted-foreground">
                    {row ? `${row.fileName} · ${(row.bytes / 1024).toFixed(0)} KB` : hint}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <input
                    ref={(el) => {
                      inputs.current[slot] = el;
                    }}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) void send(slot, f);
                      e.currentTarget.value = "";
                    }}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer font-mono text-[10px]"
                    disabled={busy === slot}
                    onClick={() => inputs.current[slot]?.click()}
                  >
                    {busy === slot ? (
                      <Loader2 className="size-3.5 animate-spin" />
                    ) : (
                      <UploadCloud className="size-3.5" />
                    )}
                    UPLOAD
                  </Button>
                  {row ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="cursor-pointer text-muted-foreground"
                      onClick={() => void remove(row.id, slot)}
                      title="Reset to the shipped texture"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-signal">
          <Trees className="size-3.5" /> STREET FURNITURE
        </div>
        <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">Real models in the world</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every tree, every planting, every street lamp and every traffic light in the game wears one
          of these. Upload a <span className="font-mono text-chalk">.glb</span> and it stands in for the
          shipped model at every spot in the world — the built-in city and the shipped map alike — for
          every player. The engine measures the file and scales it to the slot's real height, so any
          model fits.
        </p>

        <div className="mt-4 grid gap-3">
          {PROP_SLOTS.map((slot) => {
            const row = propBySlot.get(slot.id);
            return (
              <div
                key={slot.id}
                className="flex flex-wrap items-center gap-4 border border-edge/10 bg-edge/[0.03] p-4"
              >
                <div className="flex size-16 shrink-0 items-center justify-center border border-edge/10 bg-card/80">
                  <Trees className="size-6 text-signal/70" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-sm font-bold tracking-tight">{slot.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {slot.id.toUpperCase()} · {slot.height} M
                    </span>
                    {row ? (
                      <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                        <Check className="size-3" /> YOURS
                      </span>
                    ) : (
                      <span className="ml-auto font-mono text-[10px] text-muted-foreground">SHIPPED</span>
                    )}
                  </div>
                  <p className="mt-1 truncate font-mono text-[10px] leading-relaxed text-muted-foreground">
                    {row ? `${row.fileName} · ${(row.bytes / 1048576).toFixed(2)} MB` : slot.hint}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] text-muted-foreground/70">
                    {slot.credit} · {slot.license}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  {row ? (
                    <label
                      className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground"
                      title="Turn the model: 90 puts a model facing sideways back in line"
                    >
                      <RotateCw className="size-3" />
                      <input
                        type="number"
                        step={90}
                        defaultValue={row.turn}
                        onChange={(e) => void turnProp(row.id, Number(e.target.value) || 0)}
                        className="w-16 border border-edge/12 bg-card/80 px-2 py-1 font-mono text-[11px] text-chalk outline-none focus:border-signal/60"
                      />
                    </label>
                  ) : null}
                  <input
                    ref={(el) => {
                      propInputs.current[slot.id] = el;
                    }}
                    type="file"
                    accept=".glb,model/gltf-binary"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) void sendProp(slot.id, f);
                      e.currentTarget.value = "";
                    }}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer font-mono text-[10px]"
                    disabled={propBusy === slot.id}
                    onClick={() => propInputs.current[slot.id]?.click()}
                  >
                    {propBusy === slot.id ? (
                      <Loader2 className="size-3.5 animate-spin" />
                    ) : (
                      <UploadCloud className="size-3.5" />
                    )}
                    UPLOAD
                  </Button>
                  {row ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="cursor-pointer text-muted-foreground"
                      onClick={() => void dropProp(row.id, slot.id)}
                      title="Back to the shipped model"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
          <RefreshCw className="size-3" /> TEXTURES SHOW ON RELOAD · MODELS SWAP IN LIVE
        </div>
        <Link
          to="/drive"
          className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground hover:text-chalk"
        >
          <ArrowLeft className="size-3" /> BACK TO THE CITY
        </Link>
      </div>
    </div>
  );
}
