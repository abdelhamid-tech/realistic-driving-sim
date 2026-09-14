import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { PAINT_COLORS, VEHICLES, VEHICLE_ORDER } from "@/game/catalog";
import {
  CarFront, CloudRain, Compass, Gauge, Moon, Route, Snowflake, Sparkles, Thermometer,
  Timer, Trophy, Upload, Wind, Zap,
} from "lucide-react";

const hex = (n: number) => `#${n.toString(16).padStart(6, "0")}`;

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function Section({
  id, eyebrow, title, children,
}: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id={id} ref={ref} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        variants={fade}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-[10px] tracking-[0.34em] text-signal">{eyebrow}</div>
        <h2 className="mt-2 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </motion.div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function LiveTelemetry() {
  const [t, setT] = useState({ kph: 0, rpm: 900, gear: 1, lat: 0, lon: 0, heat: 0.2 });
  useEffect(() => {
    const id = window.setInterval(() => {
      setT((p) => {
        const boost = Math.random() < 0.06;
        const kph = Math.min(268, Math.max(0, p.kph + (boost ? 34 : 9) - Math.random() * 22));
        const gear = Math.min(6, Math.max(1, Math.round(kph / 45) + 1));
        return {
          kph,
          rpm: 900 + ((kph * 34) % 6300) + Math.random() * 180,
          gear,
          lat: (Math.random() - 0.5) * 1.5,
          lon: (Math.random() - 0.35) * 1.1,
          heat: Math.min(1, 0.18 + kph / 340 + Math.random() * 0.05),
        };
      });
    }, 110);
    return () => window.clearInterval(id);
  }, []);

  const angle = -118 + (Math.min(t.rpm, 8000) / 8000) * 236;

  return (
    <div className="relative border border-white/12 bg-black/50 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.28em] text-muted-foreground">
        <span>LIVE TELEMETRY</span>
        <span className="flex items-center gap-1 text-signal">
          <span className="size-1.5 animate-pulse rounded-full bg-signal" /> 240 HZ
        </span>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <svg viewBox="0 0 120 120" className="size-28 shrink-0">
          <path d="M 20 96 A 52 52 0 1 1 100 96" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="7" />
          <path d="M 20 96 A 52 52 0 1 1 100 96" fill="none" stroke="#ff6a2a" strokeWidth="7"
            strokeDasharray="272" strokeDashoffset={272 - (Math.min(t.rpm, 8000) / 8000) * 272 * 0.9}
            strokeLinecap="round" />
          <motion.line
            x1="60" y1="60" x2="60" y2="20" stroke="#ece9e2" strokeWidth="2.5" strokeLinecap="round"
            animate={{ rotate: angle }}
            transition={{ type: "spring", stiffness: 90, damping: 12 }}
            style={{ originX: "60px", originY: "60px" }}
          />
          <circle cx="60" cy="60" r="4" fill="#ff6a2a" />
        </svg>

        <div className="min-w-0 flex-1">
          <div className="font-display text-4xl leading-none font-bold tabular-nums">
            {Math.round(t.kph)}
            <span className="ml-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">KM/H</span>
          </div>
          <div className="mt-1 font-mono text-[10px] tracking-[0.16em] text-signal">
            {Math.round(t.rpm)} RPM · D{t.gear} · {t.heat > 0.7 ? "TYRES HOT" : t.heat > 0.45 ? "TYRES WARM" : "TYRES COLD"}
          </div>
          <div className="mt-3 space-y-1.5">
            <Bar label="LAT G" value={t.lat} max={1.6} />
            <Bar label="LON G" value={t.lon} max={1.6} />
            <Bar label="TYRE TEMP" value={t.heat} max={1} />
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-3 font-mono text-[9px] tracking-[0.12em] text-muted-foreground">
        <div>SURFACE<span className="mt-0.5 block text-[11px] text-chalk">TARMAC</span></div>
        <div>SLIP<span className="mt-0.5 block text-[11px] text-chalk">{(Math.abs(t.lat) * 4.2).toFixed(2)}°</span></div>
        <div>DRIFT PTS<span className="mt-0.5 block text-[11px] text-chalk">{(t.kph * 41).toFixed(0)}</span></div>
      </div>
    </div>
  );
}

function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = Math.min(Math.abs(value) / max, 1) * 100;
  return (
    <div className="flex items-center gap-2">
      <span className="w-16 shrink-0 font-mono text-[9px] tracking-[0.14em] text-muted-foreground">{label}</span>
      <span className="relative h-1.5 flex-1 bg-white/8">
        <motion.span
          className="absolute inset-y-0 left-0 bg-signal"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.25 }}
        />
      </span>
      <span className="w-10 shrink-0 text-right font-mono text-[9px] tabular-nums text-chalk">
        {value.toFixed(2)}
      </span>
    </div>
  );
}

const FEATURES = [
  {
    icon: Gauge,
    title: "240 Hz vehicle dynamics",
    body: "Raycast suspension, Pacejka-style tyre slip curves, a limited-slip diff, live wheel load transfer and per-axle aerodynamics running at 240 steps per second.",
  },
  {
    icon: Thermometer,
    title: "Tyre thermics that matter",
    body: "Sliding heats the rubber and heat adds grip. Launch cold and the rear steps out; keep the slip angle tidy and the lap comes to you.",
  },
  {
    icon: CloudRain,
    title: "Weather and time of day",
    body: "Rain darkens the tarmac, cuts grip roughly a third and fogs the horizon. Street lamps flicker on at dusk while headlights carve the road.",
  },
  {
    icon: Route,
    title: "A living city, not a track",
    body: "Ten boulevards, sixty blocks of instanced towers, parks, car parks, ramps, cones and fourteen AI traffic cars that stop, queue and turn through junctions.",
  },
  {
    icon: Compass,
    title: "Six camera rigs",
    body: "Chase, cockpit with a real interior, hood, bumper, cinematic and free orbit. Every camera reacts to speed, load and curb strikes.",
  },
  {
    icon: CarFront,
    title: "Garage records",
    body: "Sign in to bank top speed, 0-100 km/h, drift points and distance. Personal bests merge into one record and feed the drift leaderboard.",
  },
];

export default function Landing() {
  const { isAuthenticated, user } = useAuth();
  const leaderboard = useQuery(api.driverStats.leaderboard);

  return (
    <div className="min-h-screen bg-carbon text-chalk">
      {/* nav */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-carbon/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center border border-signal/60 bg-signal/10">
              <Zap className="size-3.5 text-signal" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.18em]">APEX CITY</span>
          </Link>
          <nav className="ml-2 hidden items-center gap-6 font-mono text-[10px] tracking-[0.2em] text-muted-foreground md:flex">
            <a className="transition-colors hover:text-chalk" href="#cars">CARS</a>
            <a className="transition-colors hover:text-chalk" href="#sim">SIMULATION</a>
            <a className="transition-colors hover:text-chalk" href="#board">LEADERBOARD</a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            {isAuthenticated ? (
              <Button asChild size="sm" variant="ghost" className="cursor-pointer font-mono text-[10px] tracking-[0.18em]">
                <Link to="/dashboard">MY GARAGE</Link>
              </Button>
            ) : null}
            <Button asChild size="sm" className="cursor-pointer font-mono text-[10px] tracking-[0.18em]">
              <Link to="/drive">DRIVE NOW</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* hero */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            background:
              "radial-gradient(120% 80% at 15% 0%, rgba(255,106,42,.20) 0%, transparent 55%), radial-gradient(90% 70% at 90% 20%, rgba(80,120,180,.18) 0%, transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(236,233,226,.7) 0 4px, transparent 4px 26px)",
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: 0.6 }}>
            <div className="font-mono text-[10px] tracking-[0.34em] text-signal">
              OPEN CITY DRIVING · 8 VEHICLES · LIVE TRAFFIC
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              The city is your
              <span className="block text-signal">test track.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Apex City is a browser driving simulator with real vehicle modelling at its core. Pick a
              sports coupe, a bus or anything between, then push it through rain, dusk and traffic on a
              city that reacts to the way you drive.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]">
                <Link to="/drive">
                  <Zap className="size-4" /> START DRIVING
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]">
                <Link to={isAuthenticated ? "/dashboard" : "/auth?returnTo=%2Fdashboard"}>
                  {isAuthenticated ? "MY GARAGE" : "CREATE ACCOUNT"}
                </Link>
              </Button>
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                NO DOWNLOAD · RUNS IN THE BROWSER
              </span>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {[
                { k: "240 Hz", v: "physics rate" },
                { k: "8", v: "driveable vehicles" },
                { k: "14", v: "AI traffic cars" },
                { k: "1.2 km²", v: "procedural city" },
              ].map((s) => (
                <div key={s.k} className="border-l border-signal/40 pl-3">
                  <dt className="font-display text-2xl font-bold tracking-tight">{s.k}</dt>
                  <dd className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">{s.v.toUpperCase()}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <LiveTelemetry />
            <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[9px] tracking-[0.14em] text-muted-foreground">
              <span className="flex items-center gap-1.5 border border-white/10 px-2 py-1.5">
                <Snowflake className="size-3" /> COLD TYRE GRIP
              </span>
              <span className="flex items-center gap-1.5 border border-white/10 px-2 py-1.5">
                <Wind className="size-3" /> DOWNFORCE
              </span>
              <span className="flex items-center gap-1.5 border border-white/10 px-2 py-1.5">
                <Moon className="size-3" /> NIGHT LIGHTS
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* cars */}
      <Section id="cars" eyebrow="THE LINEUP" title="Eight vehicles, eight completely different physics envelopes">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {VEHICLE_ORDER.map((k, i) => {
            const v = VEHICLES[k];
            const paint = PAINT_COLORS[(i * 3) % PAINT_COLORS.length];
            return (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group border border-white/12 bg-black/35 p-4 transition-colors hover:border-signal/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">{v.klass.toUpperCase()}</span>
                  <span
                    className="size-4 border border-white/25 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: hex(paint) }}
                  />
                </div>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{v.name}</h3>
                <div className="mt-3 space-y-1.5 font-mono text-[10px] text-muted-foreground">
                  <SpecLine label="POWER" value={`${v.powerKw} kW`} />
                  <SpecLine label="TORQUE" value={`${v.torqueNm} Nm`} />
                  <SpecLine label="MASS" value={`${v.mass} kg`} />
                  <SpecLine label="DRIVE" value={v.drivetrain.toUpperCase()} />
                  <SpecLine label="0-100" value={`${v.zeroTo100} s`} />
                  <SpecLine label="V-MAX" value={`${v.topSpeedKph} km/h`} />
                </div>
                <div className="mt-3 flex gap-1">
                  {[v.grip, v.downforce / 1.2, v.mass / 12000].map((val, idx) => (
                    <span key={idx} className="h-1 flex-1 bg-white/10">
                      <span className="block h-full bg-signal" style={{ width: `${Math.min(1, Math.max(0.1, val)) * 100}%` }} />
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* simulation features */}
      <div className="border-y border-white/10 bg-black/25">
        <Section id="sim" eyebrow="THE SIMULATION" title="Real systems, wired together">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-white/12 bg-carbon/70 p-5"
              >
                <span className="flex size-9 items-center justify-center border border-signal/40 bg-signal/10 text-signal">
                  <f.icon className="size-4" />
                </span>
                <h3 className="mt-3 font-display text-base font-bold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* leaderboard + controls */}
      <Section id="board" eyebrow="DRIVERS CLUB" title="Bank your records, climb the drift board">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="border border-white/12 bg-black/35 p-5">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
              <Trophy className="size-3.5 text-signal" /> TOP DRIFT SCORES
            </div>
            {leaderboard === undefined ? (
              <p className="mt-4 font-mono text-[11px] text-muted-foreground">Loading drivers…</p>
            ) : leaderboard.length === 0 ? (
              <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                No records yet — the board is empty. Drive, drift, then save your run to take P1.
              </p>
            ) : (
              <ol className="mt-4 space-y-1.5">
                {leaderboard.map((row, i) => (
                  <li
                    key={row.id}
                    className="flex items-center gap-3 border border-white/8 bg-white/3 px-3 py-2 font-mono text-[11px]"
                  >
                    <span className={`w-5 shrink-0 ${i === 0 ? "text-signal" : "text-muted-foreground"}`}>{i + 1}</span>
                    <span className="min-w-0 flex-1 truncate text-chalk">{row.name}</span>
                    <span className="hidden shrink-0 text-muted-foreground sm:block">{row.car}</span>
                    <span className="shrink-0 tabular-nums text-signal">{Math.round(row.driftScore).toLocaleString()}</span>
                    <span className="w-14 shrink-0 text-right tabular-nums text-muted-foreground">
                      {row.topSpeedKph.toFixed(0)} km/h
                    </span>
                  </li>
                ))}
              </ol>
            )}
            <Button asChild className="mt-5 w-full cursor-pointer font-mono text-[11px] tracking-[0.2em]">
              <Link to={isAuthenticated ? "/dashboard" : "/auth?returnTo=%2Fdashboard"}>
                {isAuthenticated ? `OPEN ${user?.name ? `${user.name.toUpperCase()}'S ` : ""}GARAGE` : "SIGN IN TO SAVE RUNS"}
              </Link>
            </Button>
          </div>

          <div className="border border-white/12 bg-black/35 p-5">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
              <Sparkles className="size-3.5 text-signal" /> CONTROLS
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <ControlRow keys="W / S" action="Throttle · brake and reverse" />
              <ControlRow keys="A / D" action="Steering (Ackermann geometry)" />
              <ControlRow keys="SPACE" action="Handbrake — lock the rears" />
              <ControlRow keys="1-4" action="Normal · Drift · Rally · Arcade" />
              <ControlRow keys="C" action="Cycle the six camera rigs" />
              <ControlRow keys="N" action="Headlights on / off" />
              <ControlRow keys="R" action="Reset to the start line" />
              <ControlRow keys="P" action="Pause" />
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-2 font-mono text-[9px] tracking-[0.14em] text-muted-foreground">
              <span className="flex items-center gap-1.5 border border-white/10 px-2 py-1.5">
                <Timer className="size-3" /> 0-100 TIMER
              </span>
              <span className="flex items-center gap-1.5 border border-white/10 px-2 py-1.5">
                <Upload className="size-3" /> IMPORT .GLB CARS
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* final CTA */}
      <div className="border-t border-white/10 bg-gradient-to-b from-black/40 to-carbon">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            Lights are on, the crosswalk is clear.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Free roam with no timers and no loading screens. Take the drag strip, hold a slide round the
            plaza roundabout, or take the bus and see what 12.5 tonnes feels like at a red light.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]">
              <Link to="/drive">
                <Zap className="size-4" /> ENTER APEX CITY
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cursor-pointer font-mono text-[11px] tracking-[0.2em]">
              <Link to="/auth?returnTo=%2Fdrive">SIGN IN FIRST</Link>
            </Button>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-[10px] tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>APEX CITY · PACEJKA TYRES · RAYCAST SUSPENSION · 240 HZ</span>
          <span className="flex items-center gap-3">
            <Link to="/drive" className="hover:text-chalk">DRIVE</Link>
            <Link to={isAuthenticated ? "/dashboard" : "/auth?returnTo=%2Fdashboard"} className="hover:text-chalk">
              GARAGE
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

function SpecLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="tracking-[0.12em]">{label}</span>
      <span className="text-chalk">{value}</span>
    </div>
  );
}

function ControlRow({ keys, action }: { keys: string; action: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-20 shrink-0 border border-white/15 bg-white/6 px-2 py-1 text-center font-mono text-[10px] tracking-[0.1em] text-chalk">
        {keys}
      </span>
      <span className="text-muted-foreground">{action}</span>
    </li>
  );
}
