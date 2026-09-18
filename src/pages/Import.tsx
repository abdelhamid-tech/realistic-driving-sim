import { useCallback, useRef, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { CarPreview } from "@/components/CarPreview";
import { PaintPicker, readSavedPaint } from "@/components/PaintPicker";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { formatBytes, mapFromRow, type WorldMapRow } from "@/game/worldmaps";
import { CAR_PRESETS, carKind, importedCarEntry, type ImportedCar } from "@/game/carmodels";
import { CAR_FILE_ACCEPT, CAR_MODEL_EXT, convertCarModel, isCarModelFile } from "@/game/modelfile";
import { PAINT_COLORS } from "@/game/vehicles";
import {
  ArrowLeft, Car, Check, KeyRound, Loader2, Play, Trees, Trash2, TriangleAlert, UploadCloud,
} from "lucide-react";

/**
 * WORLD IMPORT — the owner's door.
 *
 * Not linked from anywhere: you come here by typing /import yourself. Nothing
 * on this page works without the key, and the key is checked on the server
 * (see convex/maps.ts), so it is never shipped inside the bundle.
 */

const KEY_STORE = "world-import-key";

const TURNS = [0, 90, 180, 270];

export default function Import() {
  const [key, setKey] = useState(() => window.sessionStorage.getItem(KEY_STORE) ?? "");
  const [unlocked, setUnlocked] = useState(false);

  /* the owner's whole shelf: every map, published or not */
  const owned = useQuery(api.maps.owned, unlocked ? { password: key } : "skip");
  const cars = useQuery(api.cars.list, unlocked ? {} : "skip") as ImportedCar[] | undefined;

  const unlock = useMutation(api.maps.unlock);
  const uploadUrl = useMutation(api.maps.uploadUrl);
  const register = useMutation(api.maps.register);
  const setActive = useMutation(api.maps.setActive);
  const setPublished = useMutation(api.maps.setPublished);
  const tune = useMutation(api.maps.tune);
  const removeMap = useMutation(api.maps.remove);

  const carUploadUrl = useMutation(api.cars.uploadUrl);
  const carRegister = useMutation(api.cars.register);
  const carTune = useMutation(api.cars.tune);
  const carRemove = useMutation(api.cars.remove);
  const carRemoveAll = useMutation(api.cars.removeAll);

  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* vehicle import state */
  const [carBusy, setCarBusy] = useState<string | null>(null);
  const [carPreset, setCarPreset] = useState("gt");
  const carInputRef = useRef<HTMLInputElement | null>(null);

  /* What the last import turned into: the row to preview, and the converter's
     own log — what format went in, what came out, how heavy it is. */
  const [justAdded, setJustAdded] = useState<{
    id: string;
    from: string;
    notes: string[];
    wheels: string[];
    meshes: number;
    triangles: number;
  } | null>(null);
  const [wipeBusy, setWipeBusy] = useState(false);
  /* A colour to look at the new model in. Deliberately NOT saved: this is the
     owner's workshop, it must not repaint the player's own car. */
  const [previewPaint, setPreviewPaint] = useState<number>(() => readSavedPaint(PAINT_COLORS[4]));

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

  /* every mutation needs the key, and a stale one should drop us back to the
     gate instead of throwing on every click */
  const guarded = useCallback(
    async <T,>(run: () => Promise<T>, what: string): Promise<T | null> => {
      try {
        return await run();
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        if (/wrong key/i.test(message)) {
          setUnlocked(false);
          window.sessionStorage.removeItem(KEY_STORE);
          setError("The key stopped working. Unlock again.");
        } else {
          toast.error(what + " failed", { description: message });
        }
        return null;
      }
    },
    [],
  );

  const send = useCallback(
    async (file: File) => {
      const label = file.name.toLowerCase();
      if (!/\.(glb|gltf|zip|fbx)$/.test(label)) {
        toast.error("That file cannot be a map", {
          description: "Use .glb, .zip (holding a .glb or .fbx plus its textures) or .fbx.",
        });
        return;
      }
      setBusy(file.name);
      setProgress(0);
      try {
        const url = await guarded(() => uploadUrl({ password: key }), "Upload");
        if (!url) return;
        /* XHR rather than fetch: it reports upload progress, and a city model
           can be a hundred megabytes */
        const storageId = await new Promise<string>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", url);
          xhr.setRequestHeader("Content-Type", file.type || "application/octet-stream");
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) setProgress(e.loaded / e.total);
          };
          xhr.onload = () => {
            try {
              const body = JSON.parse(xhr.responseText) as { storageId?: string };
              if (!body.storageId) throw new Error("no storage id came back");
              resolve(body.storageId);
            } catch (err) {
              reject(err instanceof Error ? err : new Error(String(err)));
            }
          };
          xhr.onerror = () => reject(new Error("the upload was cut off"));
          xhr.send(file);
        });
        const ok = await guarded(
          () =>
            register({
              password: key,
              storageId: storageId as never,
              name: name.trim() || file.name.replace(/\.[^.]+$/, ""),
              fileName: file.name,
              bytes: file.size,
            }),
          "Saving the map",
        );
        if (ok) {
          setName("");
          toast.success("Map stored", {
            description: file.name + " is now the active world. Open the game to drive it.",
          });
        }
      } catch (err) {
        toast.error("Upload failed", {
          description: err instanceof Error ? err.message : String(err),
        });
      } finally {
        setBusy(null);
        setProgress(0);
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [guarded, key, name, register, uploadUrl],
  );

  /* -------------------------------------------------------- vehicle upload */
  /*
   * A car can arrive in almost any format. Whatever it is, it is converted to
   * the one thing the engine loads — binary glTF — in the browser, before the
   * bytes are uploaded (see src/game/modelfile.ts), and the preview under the
   * drop zone shows the result straight away, wheels report included.
   */
  const sendCar = useCallback(
    async (file: File) => {
      if (!isCarModelFile(file.name)) {
        toast.error("That file cannot be a car", {
          description: `Vehicle models are ${CAR_MODEL_EXT.map((e) => `.${e}`).join(", ")} — anything else gets converted to .glb on the way in.`,
        });
        return;
      }
      setCarBusy(`${file.name} · reading`);
      setProgress(0);
      try {
        const converted = await convertCarModel(file);
        setCarBusy(`${converted.file.name} · uploading`);

        const url = await guarded(() => carUploadUrl({ password: key }), "Upload");
        if (!url) return;
        const storageId = await new Promise<string>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", url);
          xhr.setRequestHeader("Content-Type", converted.file.type || "application/octet-stream");
          /* a converted model can be tens of megabytes, so say how far it is */
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) setProgress(e.loaded / e.total);
          };
          xhr.onload = () => {
            try {
              const body = JSON.parse(xhr.responseText) as { storageId?: string };
              if (!body.storageId) throw new Error("no storage id came back");
              resolve(body.storageId);
            } catch (err) {
              reject(err instanceof Error ? err : new Error(String(err)));
            }
          };
          xhr.onerror = () => reject(new Error("the upload was cut off"));
          xhr.send(converted.file);
        });

        const id = await guarded(
          () =>
            carRegister({
              password: key,
              storageId: storageId as never,
              name: name.trim() || file.name.replace(/\.[^.]+$/, ""),
              fileName: converted.file.name,
              bytes: converted.file.size,
              preset: carPreset,
            }),
          "Saving the car",
        );
        if (id) {
          setName("");
          setJustAdded({
            id: String(id),
            from: file.name,
            notes: converted.notes,
            wheels: converted.wheels,
            meshes: converted.meshes,
            triangles: converted.triangles,
          });
          toast.success("Car in the garage", {
            description:
              converted.wheels.length >= 4
                ? `${file.name} → ${converted.file.name}. All four wheels found by name.`
                : converted.wheels.length > 0
                  ? `${file.name} → ${converted.file.name}. ${converted.wheels.length} wheel node(s) found — check the preview.`
                  : `${file.name} → ${converted.file.name}. No node is called "wheel…": the rigger will place them from the body.`,
          });
        }
      } catch (err) {
        toast.error("Import failed", {
          description: err instanceof Error ? err.message : String(err),
        });
      } finally {
        setCarBusy(null);
        setProgress(0);
        if (carInputRef.current) carInputRef.current.value = "";
      }
    },
    [carPreset, carRegister, carUploadUrl, guarded, key, name],
  );

  /* The fleet, gone: every imported model and the bytes behind it. The built-in
     library is not touched — it ships in the bundle, not in the table. */
  const wipeFleet = useCallback(async () => {
    setWipeBusy(true);
    const gone = await guarded(() => carRemoveAll({ password: key }), "Deleting");
    setWipeBusy(false);
    if (gone === null) return;
    setJustAdded(null);
    toast.success(gone === 0 ? "Nothing to delete" : `Deleted ${gone} vehicle${gone === 1 ? "" : "s"}`, {
      description: "Every imported model and its file are gone. The built-in fleet stays.",
    });
  }, [carRemoveAll, guarded, key]);

  /* -------------------------------------------------------------------- gate */
  if (!unlocked) {
    return (
      <div className="min-h-screen bg-carbon px-6 py-16 text-chalk">
        <div className="mx-auto max-w-md">
          <div className="font-mono text-[10px] tracking-[0.32em] text-signal">OPEN CITY DRIVING</div>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">WORLD IMPORT</h1>
          <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
            This page is the owner's entrance. Type the key to continue.
          </p>

          <form
            className="mt-6 border border-edge/12 bg-edge/4 p-4"
            onSubmit={(e) => {
              e.preventDefault();
              void tryUnlock(key);
            }}
          >
            <label className="font-mono text-[9px] tracking-[0.28em] text-muted-foreground">KEY</label>
            <div className="mt-2 flex gap-2">
              <input
                autoFocus
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                spellCheck={false}
                placeholder="••••••••"
                className="min-w-0 flex-1 border border-edge/12 bg-card/80 px-3 py-2 font-mono text-sm tracking-[0.2em] text-chalk outline-none placeholder:text-muted-foreground/50 focus:border-signal/60"
              />
              <Button type="submit" disabled={checking} className="cursor-pointer">
                {checking ? <Loader2 className="size-4 animate-spin" /> : <KeyRound className="size-4" />}
                UNLOCK
              </Button>
            </div>
            {error ? (
              <p className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-destructive">
                <TriangleAlert className="size-3" /> {error}
              </p>
            ) : null}
          </form>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground hover:text-chalk"
          >
            <ArrowLeft className="size-3" /> BACK
          </Link>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------ unlocked */
  const list = (owned ?? []) as unknown as WorldMapRow[];

  /* The row the preview is showing, read live: flipping it, repainting it or
     changing its preset updates the model on the turntable at once. */
  const justAddedRow = justAdded
    ? ((cars ?? []).find((c) => String(c.id) === justAdded.id) ?? null)
    : null;

  return (
    <div className="min-h-screen bg-carbon px-6 py-12 text-chalk">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] tracking-[0.32em] text-signal">OWNER · UNLOCKED</div>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">WORLD IMPORT</h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button variant="outline" asChild className="cursor-pointer">
              <Link to="/assets" title="World textures and the models of the trees, lamps and signals">
                <Trees className="size-3.5" /> WORLD ASSETS
              </Link>
            </Button>
            <Button variant="outline" asChild className="cursor-pointer">
              <Link to="/drive">
                <Play className="size-3.5" /> DRIVE
              </Link>
            </Button>
          </div>
        </div>

        {/* ------------------------------------------------------------ upload */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            const file = e.dataTransfer.files?.[0];
            if (file) void send(file);
          }}
          className={
            "mt-6 border border-dashed p-6 text-center transition-colors " +
            (dragging ? "border-signal bg-signal/10" : "border-edge/20 bg-edge/4")
          }
        >
          <UploadCloud className="mx-auto size-6 text-signal" />
          <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-chalk">
            DROP THE CITY MODEL HERE
          </p>
          <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground">
            .glb on its own · .zip holding a .glb or .fbx with its textures · .fbx with textures inside
            <br />
            No size limit. The file is stored on the server and becomes the world the game drives on.
            <br />
            A fresh import is private: publish it below to offer it to everyone.
          </p>

          <div className="mx-auto mt-4 flex max-w-sm gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              spellCheck={false}
              placeholder="name for the map (optional)"
              className="min-w-0 flex-1 border border-edge/12 bg-card/80 px-3 py-2 font-mono text-[11px] tracking-[0.1em] text-chalk outline-none placeholder:text-muted-foreground/60 focus:border-signal/60"
            />
            <Button
              variant="outline"
              className="cursor-pointer font-mono text-[10px]"
              onClick={() => inputRef.current?.click()}
            >
              CHOOSE FILE
            </Button>
            <input
              ref={inputRef}
              type="file"
              accept=".glb,.gltf,.zip,.fbx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void send(file);
              }}
            />
          </div>

          {busy ? (
            <div className="mx-auto mt-5 max-w-sm text-left">
              <div className="flex items-baseline justify-between font-mono text-[10px] text-muted-foreground">
                <span className="truncate">{busy}</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full bg-edge/10">
                <div className="h-full bg-signal transition-[width]" style={{ width: `${progress * 100}%` }} />
              </div>
            </div>
          ) : null}
        </div>

        {/* ---------------------------------------------------------- vehicles */}
        <div className="mt-8 border-t border-edge/10 pt-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground">
            <Car className="size-3.5 text-signal" /> VEHICLES / {(cars ?? []).length} IN EVERY GARAGE

            {/* the whole fleet, gone in one move — confirmed first, because the
                files behind it cannot be brought back */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  disabled={(cars ?? []).length === 0 || wipeBusy}
                  className="ml-auto cursor-pointer border-destructive/40 font-mono text-[10px] tracking-[0.14em] text-destructive"
                >
                  {wipeBusy ? <Loader2 className="size-3 animate-spin" /> : <Trash2 className="size-3" />}
                  DELETE ALL VEHICLES
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete every imported vehicle?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {(cars ?? []).length} imported model{(cars ?? []).length === 1 ? "" : "s"} and
                    the files behind {(cars ?? []).length === 1 ? "it" : "them"} are deleted for every
                    player, old and new alike. The built-in fleet is not touched. This cannot be
                    undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="cursor-pointer font-mono text-[10px]">
                    KEEP THEM
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => void wipeFleet()}
                    className="cursor-pointer bg-destructive font-mono text-[10px] text-primary-foreground hover:bg-destructive/90"
                  >
                    <Trash2 className="size-3" /> DELETE ALL
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <p className="mt-2 max-w-xl font-mono text-[10px] leading-relaxed text-muted-foreground">
            Drop a car model here and it joins the fleet: every player sees it
            in the garage, paints it, drives it. The wheels are found by name
            and rigged onto the real suspension automatically.
          </p>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              const file = e.dataTransfer.files?.[0];
              if (file) void sendCar(file);
            }}
            className={
              "mt-3 border border-dashed p-5 text-center transition-colors " +
              (dragging ? "border-signal bg-signal/10" : "border-edge/20 bg-edge/4")
            }
          >
            <UploadCloud className="mx-auto size-5 text-signal" />
            <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-chalk">DROP A CAR MODEL HERE</p>
            <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground">
              {CAR_MODEL_EXT.map((e) => `.${e}`).join(" · ")} — anything that is not a .glb is converted
              in your browser before it is stored
              <br />
              wheels named normally (wheel_FL, WheelFront_R, roue_av_g…); a .zip brings its textures and
              .bin files along
            </p>

            <div className="mx-auto mt-3 flex max-w-md flex-wrap items-center justify-center gap-2">
              <select
                value={carPreset}
                onChange={(e) => setCarPreset(e.target.value)}
                className="border border-edge/12 bg-card/80 px-2 py-1.5 font-mono text-[11px] text-chalk outline-none focus:border-signal/60"
                title="How this car drives"
              >
                {CAR_PRESETS.map((p) => (
                  <option key={p.id} value={p.id} className="bg-carbon">
                    {p.label}
                  </option>
                ))}
              </select>
              <Button
                variant="outline"
                className="cursor-pointer font-mono text-[10px]"
                disabled={!!carBusy}
                onClick={() => carInputRef.current?.click()}
              >
                CHOOSE FILE
              </Button>
              <input
                ref={carInputRef}
                type="file"
                accept={CAR_FILE_ACCEPT}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void sendCar(file);
                }}
              />
            </div>
            {carBusy ? (
              <div className="mx-auto mt-3 max-w-sm text-left">
                <p className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                  <Loader2 className="size-3 shrink-0 animate-spin" />
                  <span className="truncate">{carBusy}</span>
                  <span className="ml-auto shrink-0">{Math.round(progress * 100)}%</span>
                </p>
                <div className="mt-1 h-1.5 w-full bg-edge/10">
                  <div
                    className="h-full bg-signal transition-[width]"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>
            ) : null}
          </div>

          {/* the model you just added, turning on the turntable — so a body
              facing the wrong way, a missing wheel or a model that arrived
              untouchable is caught here instead of in the street */}
          {justAdded && justAddedRow ? (
            <div className="mt-3 border border-signal/45 bg-card/85 p-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.28em] text-signal">
                  <Check className="size-3" /> JUST ADDED TO EVERY GARAGE
                </span>
                <span className="font-display text-sm font-bold tracking-tight">
                  {justAddedRow.name}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {justAdded.from} → {justAddedRow.fileName}
                </span>
                <button
                  type="button"
                  onClick={() => setJustAdded(null)}
                  className="ml-auto cursor-pointer font-mono text-[10px] tracking-[0.16em] text-muted-foreground hover:text-chalk"
                >
                  CLOSE
                </button>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
                <div className="border border-edge/12 bg-card/85">
                  <CarPreview
                    url={justAddedRow.url ?? ""}
                    kind={carKind(importedCarEntry(justAddedRow))}
                    paint={previewPaint}
                    turn={justAddedRow.turn ?? 0}
                    className="h-[220px] w-full sm:h-[260px]"
                  />
                </div>

                <div className="min-w-0">
                  <div className="grid grid-cols-3 gap-2">
                    <PreviewStat
                      label="WHEELS"
                      value={justAdded.wheels.length ? `${justAdded.wheels.length} / 4` : "AUTO"}
                    />
                    <PreviewStat label="MESHES" value={String(justAdded.meshes)} />
                    <PreviewStat label="TRIANGLES" value={justAdded.triangles.toLocaleString()} />
                  </div>

                  {justAdded.wheels.length ? (
                    <p className="mt-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
                      RIGGED BY NAME: {justAdded.wheels.slice(0, 6).join(", ").toUpperCase()}
                    </p>
                  ) : (
                    <p className="mt-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
                      NO NODE IS CALLED “WHEEL…”: the rigger measures the body and places the four
                      corners itself.
                    </p>
                  )}

                  <div className="mt-3">
                    <PaintPicker paint={previewPaint} onChange={setPreviewPaint} compact />
                  </div>

                  <div className="mt-3">
                    <div className="mb-1 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                      SPEED
                    </div>
                    <SpeedPicker
                      value={justAddedRow.speed ?? 1}
                      onPick={(v) =>
                        void guarded(
                          () => carTune({ password: key, id: justAddedRow.id as never, speed: v }),
                          "Saving",
                        )
                      }
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <select
                      value={justAddedRow.preset}
                      onChange={(e) =>
                        void guarded(
                          () =>
                            carTune({
                              password: key,
                              id: justAddedRow.id as never,
                              preset: e.target.value,
                            }),
                          "Saving",
                        )
                      }
                      className="border border-edge/12 bg-card/80 px-1.5 py-1 font-mono text-[10px] text-chalk outline-none focus:border-signal/60"
                      title="How this car drives"
                    >
                      {CAR_PRESETS.map((p) => (
                        <option key={p.id} value={p.id} className="bg-carbon">
                          {p.label}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() =>
                        void guarded(
                          () =>
                            carTune({
                              password: key,
                              id: justAddedRow.id as never,
                              turn: justAddedRow.turn === 180 ? 0 : 180,
                            }),
                          "Saving",
                        )
                      }
                      className={
                        "cursor-pointer border px-2 py-1 font-mono text-[10px] transition-colors " +
                        (justAddedRow.turn === 180
                          ? "border-signal bg-signal text-carbon"
                          : "border-edge/12 text-muted-foreground hover:border-signal/50 hover:text-chalk")
                      }
                      title="Flip the body 180° if the model faces backwards"
                    >
                      {justAddedRow.turn === 180 ? "TURN AROUND ✓" : "TURN AROUND"}
                    </button>
                    <Button asChild size="sm" variant="outline" className="cursor-pointer font-mono text-[10px]">
                      <Link to="/drive">
                        <Play className="size-3" /> DRIVE IT
                      </Link>
                    </Button>
                  </div>

                  <ul className="mt-3 space-y-1 border-t border-edge/10 pt-2 font-mono text-[9px] leading-relaxed tracking-[0.1em] text-muted-foreground">
                    {justAdded.notes.map((n) => (
                      <li key={n} className="break-words">· {n.toUpperCase()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-3 space-y-2">
            {(cars ?? []).map((c) => (
              <div
                key={c.id}
                className="flex flex-wrap items-center gap-2 border border-edge/12 bg-edge/4 p-3"
              >
                <span className="font-display text-sm font-bold tracking-tight">{c.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {c.klass} · {CAR_PRESETS.find((p) => p.id === c.preset)?.label ?? c.preset} ·{" "}
                  ×{(c.speed ?? 1).toString()} · {formatBytes(c.bytes)}
                </span>
                <div className="ml-auto flex flex-wrap items-center gap-1.5">
                  <SpeedPicker
                    value={c.speed ?? 1}
                    onPick={(v) =>
                      void guarded(() => carTune({ password: key, id: c.id as never, speed: v }), "Saving")
                    }
                  />
                  <select
                    value={c.preset}
                    onChange={(e) =>
                      void guarded(
                        () => carTune({ password: key, id: c.id as never, preset: e.target.value }),
                        "Saving",
                      )
                    }
                    className="border border-edge/12 bg-card/80 px-1.5 py-1 font-mono text-[10px] text-chalk outline-none focus:border-signal/60"
                    title="How this car drives"
                  >
                    {CAR_PRESETS.map((p) => (
                      <option key={p.id} value={p.id} className="bg-carbon">
                        {p.label}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() =>
                      void guarded(
                        () => carTune({ password: key, id: c.id as never, turn: c.turn === 180 ? 0 : 180 }),
                        "Saving",
                      )
                    }
                    className={
                      "cursor-pointer border px-2 py-1 font-mono text-[10px] transition-colors " +
                      (c.turn === 180
                        ? "border-signal bg-signal text-carbon"
                        : "border-edge/12 text-muted-foreground hover:border-signal/50 hover:text-chalk")
                    }
                    title="Flip the body 180° if the rigger points it backwards"
                  >
                    {c.turn === 180 ? "TURN AROUND ✓" : "TURN AROUND"}
                  </button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer font-mono text-[10px] text-destructive"
                    onClick={() => void guarded(() => carRemove({ password: key, id: c.id as never }), "Deleting")}
                  >
                    <Trash2 className="size-3" />
                  </Button>
                </div>
              </div>
            ))}
            {(cars ?? []).length === 0 ? (
              <p className="font-mono text-[11px] text-muted-foreground">
                No imported vehicles yet — the garage runs on the built-in library.
              </p>
            ) : null}
          </div>
        </div>

        {/* -------------------------------------------------------------- maps */}
        <div className="mt-8 border-t border-edge/10 pt-4">
          <div className="font-mono text-[9px] tracking-[0.28em] text-muted-foreground">
            STORED WORLDS / {list.length}
          </div>

          <div className="mt-3 space-y-3">
            {list.length === 0 ? (
              <p className="font-mono text-[11px] text-muted-foreground">
                Nothing imported yet. The game is driving RIVERBEND, the city the game ships with.
              </p>
            ) : null}

            {list.map((row) => {
              const usable = mapFromRow(row);
              return (
                <div
                  key={row.id}
                  className={
                    "border p-3 " + (row.active ? "border-signal bg-signal/10" : "border-edge/12 bg-edge/4")
                  }
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-sm font-bold tracking-tight">{row.name}</span>
                    <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                      {row.active ? (
                        <>
                          <Check className="size-3 text-signal" /> ACTIVE
                        </>
                      ) : null}
                      {row.published ? <span className="text-signal">PUBLISHED</span> : "PRIVATE"} ·{" "}
                      {row.kind.toUpperCase()} · {formatBytes(row.bytes)}
                    </span>
                  </div>
                  <div className="mt-1 truncate font-mono text-[10px] text-muted-foreground">
                    {row.fileName}
                    {usable && usable.fitTo > 0 ? ` · fitted to ${usable.fitTo} m across` : " · true scale"}
                    {row.spawn ? " · saved start line" : " · start line found automatically"}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {row.active ? null : (
                      <Button
                        size="sm"
                        className="cursor-pointer font-mono text-[10px]"
                        onClick={() =>
                          void guarded(() => setActive({ password: key, id: row.id as never }), "Activating")
                        }
                      >
                        MAKE IT THE WORLD
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer font-mono text-[10px]"
                      onClick={() =>
                        void guarded(
                          () => tune({ password: key, id: row.id as never, fitTo: 0 }),
                          "Saving",
                        )
                      }
                      title="Keep the model's own units instead of fitting it to 1200 m"
                    >
                      TRUE SCALE
                    </Button>
                    <Button
                      size="sm"
                      variant={row.published ? "outline" : "default"}
                      className="cursor-pointer font-mono text-[10px]"
                      onClick={() =>
                        void guarded(
                          () =>
                            setPublished({
                              password: key,
                              id: row.id as never,
                              published: !row.published,
                            }),
                          "Publishing",
                        )
                      }
                    >
                      {row.published ? "UNPUBLISH" : "PUBLISH FOR EVERYONE"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer font-mono text-[10px] text-destructive"
                      onClick={() =>
                        void guarded(() => removeMap({ password: key, id: row.id as never }), "Deleting")
                      }
                    >
                      <Trash2 className="size-3" /> DELETE
                    </Button>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-edge/8 pt-3">
                    <label className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                      FIT TO (M)
                      <input
                        type="number"
                        min={0}
                        max={20000}
                        defaultValue={row.fitTo ?? 1200}
                        onBlur={(e) => {
                          const v = Math.max(0, Math.min(20000, Number(e.target.value) || 0));
                          void guarded(() => tune({ password: key, id: row.id as never, fitTo: v }), "Saving");
                        }}
                        className="mt-1 w-full border border-edge/12 bg-card/80 px-2 py-1 font-mono text-[11px] text-chalk outline-none focus:border-signal/60"
                      />
                    </label>
                    <label className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                      CELL (M)
                      <input
                        type="number"
                        min={1}
                        max={20}
                        step={0.5}
                        defaultValue={row.cell ?? 4}
                        onBlur={(e) => {
                          const v = Math.max(1, Math.min(20, Number(e.target.value) || 4));
                          void guarded(() => tune({ password: key, id: row.id as never, cell: v }), "Saving");
                        }}
                        className="mt-1 w-full border border-edge/12 bg-card/80 px-2 py-1 font-mono text-[11px] text-chalk outline-none focus:border-signal/60"
                      />
                    </label>
                    <label className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                      WALLS TALLER THAN (M)
                      <input
                        type="number"
                        min={0.5}
                        max={20}
                        step={0.5}
                        defaultValue={row.wallHeight ?? 2.2}
                        onBlur={(e) => {
                          const v = Math.max(0.5, Math.min(20, Number(e.target.value) || 2.2));
                          void guarded(() => tune({ password: key, id: row.id as never, wallHeight: v }), "Saving");
                        }}
                        className="mt-1 w-full border border-edge/12 bg-card/80 px-2 py-1 font-mono text-[11px] text-chalk outline-none focus:border-signal/60"
                      />
                    </label>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                      ROTATION
                      <div className="mt-1 flex gap-1">
                        {TURNS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() =>
                              void guarded(() => tune({ password: key, id: row.id as never, turn: t }), "Saving")
                            }
                            className={
                              "flex-1 cursor-pointer border py-1 font-mono text-[10px] transition-colors " +
                              ((row.turn ?? 0) === t
                                ? "border-signal bg-signal text-carbon"
                                : "border-edge/12 text-muted-foreground hover:border-signal/50 hover:text-chalk")
                            }
                          >
                            {t}°
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 font-mono text-[10px] leading-relaxed text-muted-foreground">
            Changing any setting reloads the world the next time you open the game. The defaults are
            usually right: the model is fitted to 1200 m across, thin vertical faces become walls, and
            the start line is put on the widest street. If the streets run the wrong way, rotate 90°.
            <br />
            PUBLISHED maps appear in every player's world picker, in the garage menu and on the start
            screen; PRIVATE ones only exist for you (the active one is still what everyone loads,
            because it is the world the game is running).
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground hover:text-chalk"
        >
          <ArrowLeft className="size-3" /> BACK TO THE CITY
        </Link>
      </div>
    </div>
  );
}

/** The speed dial an imported car gets: a multiplier on the preset's own. */
const SPEEDS = [
  { v: 0.6, label: "SLOW ×0.6" },
  { v: 0.8, label: "CALM ×0.8" },
  { v: 1, label: "NORMAL ×1" },
  { v: 1.3, label: "FAST ×1.3" },
  { v: 1.7, label: "RACE ×1.7" },
  { v: 2, label: "INSANE ×2" },
];

function SpeedPicker({
  value, onPick,
}: { value: number; onPick: (v: number) => void }) {
  return (
    <div className="flex flex-wrap gap-1">
      {SPEEDS.map((s) => (
        <button
          key={s.v}
          type="button"
          onClick={() => onPick(s.v)}
          className={
            "cursor-pointer border px-2 py-1 font-mono text-[10px] transition-colors " +
            (Math.abs((value || 1) - s.v) < 0.01
              ? "border-signal bg-signal text-carbon"
              : "border-edge/12 text-muted-foreground hover:border-signal/50 hover:text-chalk")
          }
          title={`Top speed and power ×${s.v}`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}

/** One number in the after-import preview. */
function PreviewStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 border border-edge/12 bg-edge/4 px-2 py-1.5">
      <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-0.5 truncate font-mono text-[11px] tracking-[0.08em] text-chalk">{value}</div>
    </div>
  );
}
