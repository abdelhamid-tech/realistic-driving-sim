import { Link, useNavigate } from "react-router";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Gauge, LayoutDashboard, LogOut, Route, Timer, Trophy, Zap } from "lucide-react";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const stats = useQuery(api.driverStats.myStats);
  const leaderboard = useQuery(api.driverStats.leaderboard);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const displayName = user?.name ?? user?.email?.split("@")[0] ?? "Driver";

  return (
    <div className="flex min-h-screen flex-col bg-carbon text-chalk lg:flex-row">
      {/* sidebar */}
      <aside className="flex w-full shrink-0 flex-col border-b border-white/10 bg-black/35 p-5 lg:h-screen lg:w-60 lg:border-b-0 lg:border-r">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center border border-signal/60 bg-signal/10">
            <Zap className="size-3.5 text-signal" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.18em]">APEX CITY</span>
        </Link>

        <nav className="mt-6 flex gap-1.5 lg:flex-col">
          <span className="flex flex-1 items-center gap-2 border border-signal/40 bg-signal/10 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-signal">
            <LayoutDashboard className="size-3.5" /> GARAGE
          </span>
          <Link
            to="/drive"
            className="flex flex-1 items-center gap-2 border border-white/12 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground transition-colors hover:border-signal/50 hover:text-chalk"
          >
            <Gauge className="size-3.5" /> DRIVE
          </Link>
        </nav>

        <div className="mt-auto hidden lg:block">
          <div className="border border-white/10 bg-white/4 p-3">
            <div className="font-mono text-[9px] tracking-[0.24em] text-muted-foreground">SIGNED IN AS</div>
            <div className="mt-1 truncate font-display text-sm font-bold tracking-tight">{displayName}</div>
            {user?.email ? (
              <div className="truncate font-mono text-[10px] text-muted-foreground">{user.email}</div>
            ) : null}
          </div>
          <Button
            type="button"
            variant="outline"
            className="mt-3 w-full cursor-pointer gap-2"
            onClick={handleSignOut}
          >
            <LogOut className="size-4" /> Sign out
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.34em] text-signal">DRIVER PROFILE</div>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">
                Welcome back, {displayName}
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your best runs are merged into one record every time you save from the cockpit. Head back
                out and put a number on the board.
              </p>
            </div>
            <Button asChild className="cursor-pointer gap-2 font-mono text-[11px] tracking-[0.18em]">
              <Link to="/drive">
                <Zap className="size-4" /> DRIVE NOW
              </Link>
            </Button>
          </header>

          <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={Trophy}
              label="BEST DRIFT SCORE"
              value={stats ? Math.round(stats.bestDriftScore).toLocaleString() : "—"}
              hint={stats ? `${stats.runs} run${stats.runs === 1 ? "" : "s"} saved` : "No runs saved yet"}
            />
            <StatCard
              icon={Route}
              label="TOP SPEED"
              value={stats ? `${stats.topSpeedKph.toFixed(0)} km/h` : "—"}
              hint="Fastest recorded on the drag strip"
            />
            <StatCard
              icon={Timer}
              label="BEST 0-100 KM/H"
              value={stats?.best0to100 ? `${stats.best0to100.toFixed(2)} s` : "—"}
              hint="Standing start, no roll-out"
            />
            <StatCard
              icon={Gauge}
              label="DISTANCE LOGGED"
              value={stats ? `${stats.distanceKm.toFixed(1)} km` : "—"}
              hint={stats?.car ? `Usually in the ${stats.car}` : "Across the whole city"}
            />
          </section>

          <section className="mt-10">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
              <Trophy className="size-3.5 text-signal" /> DRIFT LEADERBOARD
            </div>
            <div className="mt-4 border border-white/12 bg-black/35">
              {leaderboard === undefined ? (
                <p className="p-5 font-mono text-[11px] text-muted-foreground">Loading drivers…</p>
              ) : leaderboard.length === 0 ? (
                <p className="p-5 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  The board is empty. Save your first run from the cockpit to claim P1.
                </p>
              ) : (
                <ul className="divide-y divide-white/8">
                  {leaderboard.map((row, i) => {
                    const isMe = user?.name ? row.name === user.name : false;
                    return (
                      <li
                        key={row.id}
                        className={`flex items-center gap-3 px-4 py-3 font-mono text-[11px] ${isMe ? "bg-signal/8" : ""}`}
                      >
                        <span className={`w-6 shrink-0 ${i === 0 ? "text-signal" : "text-muted-foreground"}`}>
                          {i + 1}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-chalk">{row.name}</span>
                        <span className="hidden shrink-0 text-muted-foreground sm:block">{row.car}</span>
                        <span className="shrink-0 tabular-nums text-signal">
                          {Math.round(row.driftScore).toLocaleString()}
                        </span>
                        <span className="w-16 shrink-0 text-right tabular-nums text-muted-foreground">
                          {row.topSpeedKph.toFixed(0)} km/h
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>

          <section className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="border border-white/12 bg-black/35 p-5">
              <h2 className="font-display text-base font-bold tracking-tight">How records are logged</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pause or open the garage while driving, then hit <span className="text-chalk">Save run</span>.
                Top speed, best 0-100, drift points and distance are compared against your record and only
                the best values are kept — totals like distance and session count accumulate.
              </p>
            </div>
            <div className="border border-white/12 bg-black/35 p-5">
              <h2 className="font-display text-base font-bold tracking-tight">Chase the board</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Drift points scale with slip angle and speed, so the roundabout at the plaza and the
                long plaza sweepers pay the most. Try the GT-S in DRIFT mode with rain off for a clean
                score, then flip to ARCADE if you want the assists back.
              </p>
              <Button asChild variant="outline" className="mt-4 w-full cursor-pointer">
                <Link to="/drive">Back to the city</Link>
              </Button>
            </div>
          </section>

          <div className="mt-8 lg:hidden">
            <Button
              type="button"
              variant="outline"
              className="w-full cursor-pointer gap-2"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" /> Sign out
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({
  icon: Icon, label, value, hint,
}: { icon: typeof Trophy; label: string; value: string; hint: string }) {
  return (
    <div className="border border-white/12 bg-black/35 p-4">
      <span className="flex size-8 items-center justify-center border border-signal/40 bg-signal/10 text-signal">
        <Icon className="size-4" />
      </span>
      <div className="mt-3 font-mono text-[9px] tracking-[0.22em] text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl font-bold tracking-tight tabular-nums">{value}</div>
      <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{hint}</div>
    </div>
  );
}
