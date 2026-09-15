import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { unzipSync } from "three/examples/jsm/libs/fflate.module.js";
import {
  buildMapField, findSpawn, sampleMap, wallsNear,
  type MapField, type MapSpawn, type MapWall,
} from "./mapbuild";
import { isProcedural, type WorldMapSource } from "./worldmaps";
import { loadWorldDress, applyWorldDress, type WorldDress } from "./worlddress";
import {
  buildFleetTemplate, buildVehicle, cloneFleetVehicle, GROUND_LIFT, PAINT_COLORS,
  randomTrafficKind, VEHICLES,
  type FleetTemplate, type VehicleBuild, type VehicleKind, type VehicleMaterials,
  type VehicleSpec, type WheelRig,
} from "./vehicles";
import {
  decideRig, detectWheels, parseWheelName, planRig, sanitiseMeasured, subtreeBoxes,
  type RigPlan, type WheelSample,
} from "./rigging";
import {
  CITY_R, KERB_APRON, STREETS, WALK_H, blockAt, buildCity, cityH, cityPropSpots, cityState,
  onStreet,
} from "./city";
import {
  buildPropLayer, hideLowPolyProps, registerPropSink, showLowPolyProps,
  type PropLayer, type PropModel, type PropSpotMap,
} from "./props";
import type {
  CarLoadOptions, GameHandle, GameOptions, NetSnapshot, RemoteDriver, Telemetry, Weather,
} from "./types";

/* ============================================================================
 *  Driving engine. Everything lives inside createGame() so React StrictMode
 *  can mount / unmount it safely.
 * ==========================================================================*/
export function createGame(opts: GameOptions): GameHandle {
  const { canvas, cluster, gmeter } = opts;
  const onToast = opts.onToast ?? (() => {});
  const onTelemetry = opts.onTelemetry ?? (() => {});

  /* ---------------------------------------------------------------- utils */
  const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
  const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
  const sstep = (a: number, b: number, x: number) => {
    const t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  };
  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  const TAU = Math.PI * 2;

  /* ------------------------------------------------------------- renderer */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  let pixelRatioCap = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(pixelRatioCap);
  renderer.setSize(canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, 16 / 9, 0.15, 3200);

  /* --------------------------------------------------------------- camera */
  const envState = {
    time: opts.initialTimeOfDay ?? 15.2,
    weather: (opts.initialWeather ?? "clear") as Weather,
    day: 1,
    night: 0,
    wet: 0,
  };
  const SUN_DIR = V3(0.5, 0.7, -0.4).normalize();

  /* ------------------------------------------------------------ sky shader */
  const uTime = { value: 0 };
  const skyUniforms = {
    sunDir: { value: SUN_DIR.clone() },
    uDay: { value: 1 },
    uDusk: { value: 0 },
    uNight: { value: 0 },
    uOvercast: { value: 0 },
    uTime,
  };
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: skyUniforms,
    vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      varying vec3 vP;
      uniform vec3 sunDir; uniform float uDay; uniform float uDusk; uniform float uNight;
      uniform float uOvercast; uniform float uTime;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for(int i=0;i<5;i++){ v += a*noise(p); p = p*2.02 + 13.7; a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vP);
        float h = max(d.y, 0.0);
        vec3 zen = mix(vec3(0.012,0.022,0.045), vec3(0.20,0.40,0.68), uDay);
        vec3 mid = mix(vec3(0.030,0.045,0.080), vec3(0.62,0.72,0.84), uDay);
        vec3 hor = mix(vec3(0.055,0.065,0.095), vec3(0.90,0.87,0.78), uDay);
        vec3 c = mix(hor, mix(mid, zen, pow(h, 0.5)), smoothstep(0.0, 0.42, h));
        /* warm band at golden hour */
        c = mix(c, vec3(0.98, 0.50, 0.26), uDusk * pow(1.0 - h, 3.0) * 0.75);
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.80, 0.52) * (pow(s, 1200.0) * 4.0 + pow(s, 90.0) * 0.45 * uDay + pow(s, 8.0) * 0.18 * uDay);
        float mo = max(dot(d, -sunDir), 0.0);
        c += vec3(0.72, 0.78, 0.98) * pow(mo, 3000.0) * 4.5 * uNight;
        /* stars */
        if (uNight > 0.02 && d.y > 0.0) {
          vec3 sp = floor(normalize(vP) * 320.0);
          float hs = hash(sp.xy + sp.z * 21.7);
          float star = smoothstep(0.9972, 0.9995, hs);
          c += vec3(0.85, 0.90, 1.0) * star * uNight * smoothstep(0.0, 0.25, d.y) * 1.7;
        }
        /* clouds */
        if (d.y > 0.012) {
          vec2 cuv = d.xz / (d.y + 0.18);
          float t = uTime * 0.0055;
          float den = fbm(cuv * 0.5 + vec2(t, -t * 0.35));
          float cov = smoothstep(0.55 - uOvercast * 0.35, 0.80 - uOvercast * 0.25, den) * smoothstep(0.02, 0.18, d.y);
          vec3 cb = mix(vec3(0.96, 0.93, 0.90), vec3(0.42, 0.45, 0.52), smoothstep(0.5, 0.96, den));
          cb = mix(cb, vec3(0.55, 0.57, 0.62), uOvercast);
          cb *= mix(0.20, 1.0, uDay);
          cb = mix(cb, vec3(1.05, 0.90, 0.72), pow(s, 3.0) * 0.45 * uDay);
          c = mix(c, cb, cov * (0.85 - 0.25 * uOvercast));
        }
        /* distant ridge line */
        float ang = atan(d.z, d.x);
        vec2 md = vec2(cos(ang), sin(ang));
        float ridge = 0.028 + 0.075 * fbm(md * 2.6 + vec2(4.7, 1.3)) + 0.03 * fbm(md * 6.1);
        float mt = (1.0 - smoothstep(ridge - 0.012, ridge, d.y)) * smoothstep(-0.035, -0.006, d.y);
        if (mt > 0.001) {
          float t2 = clamp((ridge - d.y) / 0.09, 0.0, 1.0);
          vec3 rock = mix(vec3(0.42, 0.40, 0.39), hor, 0.42 + 0.45 * t2);
          c = mix(c, rock, mt * 0.9);
        }
        if (d.y < -0.035) c = hor;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(2000, 32, 20), skyMat);
  sky.frustumCulled = false;
  scene.add(sky);

  const fog = new THREE.Fog(0xe6d7ae, 340, 1500);
  scene.fog = fog;

  const hemi = new THREE.HemisphereLight(0xbccfe6, 0x77754c, 0.45);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffe0ae, 2.1);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -60;
  sun.shadow.camera.right = 60;
  sun.shadow.camera.top = 60;
  sun.shadow.camera.bottom = -60;
  sun.shadow.camera.near = 20;
  sun.shadow.camera.far = 460;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.03;
  scene.add(sun);
  scene.add(sun.target);

  /* Everything the procedural city is made of hangs off here, so importing a
     world map can switch the whole city off in one line. The grass plain
     stays: an imported map sits on the same landscape. */
  const worldRoot = new THREE.Group();

  /* ------------------------------------------------------------ the ground
   * The world's textures load in the background and are applied wherever
   * they land — the built city or an imported map — once ready. The owner's
   * global overrides (worldTextures) win over the shipped set.
   */
  let dress: WorldDress | null = null;
  const dressTargets: THREE.Object3D[] = [];
  {
    const overrides: Partial<Record<string, string>> = {};
    for (const [k, v] of Object.entries(opts.worldTextures ?? {})) {
      if (v) overrides[k] = v;
    }
    loadWorldDress(overrides)
      .then((d) => {
        dress = d;
        for (const t of dressTargets) applyWorldDress(t, d);
        dressTargets.length = 0;
        opts.onDressed?.();
      })
      .catch(() => {
        /* no textures: the materials' own colours carry the world */
      });
  }
  function dressScene(root: THREE.Object3D) {
    if (dress) applyWorldDress(root, dress);
    else dressTargets.push(root);
  }
  scene.add(worldRoot);

  /* =====================================================================
   *  QUALITY — three tiers, chosen by measurement unless the player pins one
   *
   *  A driving game has one job: keep the frame rate steady while the world
   *  streams past. So the frame rate is measured, and when it sags the
   *  expensive things come off in order — resolution first, then shadow
   *  detail, then traffic, then effects — and they come back when there is
   *  headroom again. Pinning a tier skips the whole thing.
   * ===================================================================*/
  const QUALITY_NAMES = ["LOW", "MEDIUM", "HIGH"];
  const TIERS = [
    { pixel: 1, shadowPx: 512, shadowsOn: false, traffic: 5, particles: 0.35, rain: 0.35 },
    { pixel: 1.25, shadowPx: 1024, shadowsOn: true, traffic: 9, particles: 0.7, rain: 0.7 },
    { pixel: 2, shadowPx: 2048, shadowsOn: true, traffic: 14, particles: 1, rain: 1 },
  ];
  /** -1 is automatic; 0..2 pin a tier */
  let qualityMode = -1;
  let qualityTier = 2;
  /** grace period: the first seconds are always slow (shaders, model loads) */
  let qualityHold = 4;
  let fastFor = 0;

  function applyQuality(tier: number, announce = false) {
    const t = clamp(tier | 0, 0, TIERS.length - 1);
    const q = TIERS[t];
    const changed = t !== qualityTier || announce;
    qualityTier = t;
    pixelRatioCap = Math.min(window.devicePixelRatio || 1, q.pixel);
    renderer.setPixelRatio(pixelRatioCap);
    onResize();
    if (sun.shadow.mapSize.width !== q.shadowPx) {
      sun.shadow.mapSize.set(q.shadowPx, q.shadowPx);
      sun.shadow.map?.dispose();
      sun.shadow.map = null;
    }
    if (renderer.shadowMap.enabled !== q.shadowsOn) {
      renderer.shadowMap.enabled = q.shadowsOn;
      /* every material has to recompile when the shadow pass comes or goes */
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        const list = Array.isArray(m.material) ? m.material : [m.material];
        for (const mat of list) if (mat) mat.needsUpdate = true;
      });
    }
    while (traffic.length > q.traffic) {
      const tc = traffic.pop();
      if (tc) scene.remove(tc.grp);
    }
    rainGeo.setDrawRange(0, Math.max(2, Math.floor(RAIN_N * q.rain) * 2));
    if (changed && announce) onToast(`Quality · ${QUALITY_NAMES[t]}`);
  }

  function setQuality(mode: number) {
    qualityMode = mode < 0 ? -1 : clamp(mode | 0, 0, TIERS.length - 1);
    qualityHold = 2;
    fastFor = 0;
    if (qualityMode === -1) {
      onToast("Quality · automatic");
      return;
    }
    applyQuality(qualityMode, true);
  }

  let envMap: THREE.Texture | null = null;
  const pmrem = new THREE.PMREMGenerator(renderer);
  function rebuildEnvironment() {
    const es = new THREE.Scene();
    es.add(new THREE.Mesh(new THREE.SphereGeometry(60, 24, 12), skyMat));
    const sunBall = new THREE.Mesh(
      new THREE.SphereGeometry(4, 12, 12),
      new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.09, 0.5, 0.35 + 0.55 * envState.day) }),
    );
    sunBall.position.copy(SUN_DIR).multiplyScalar(45);
    es.add(sunBall);
    const gnd = new THREE.Mesh(
      new THREE.CircleGeometry(55, 32),
      new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.11, 0.18, 0.05 + 0.16 * envState.day) }),
    );
    gnd.rotation.x = -Math.PI / 2;
    gnd.position.y = -3;
    es.add(gnd);
    if (envMap) envMap.dispose();
    envMap = pmrem.fromScene(es, 0.04, 0.1, 120).texture;
    scene.environment = envMap;
  }

  /* ------------------------------------------------------------- textures */
  const MAX_ANISO = renderer.capabilities.getMaxAnisotropy();
  function makeTex(w: number, h: number, fn: (x: CanvasRenderingContext2D, w: number, h: number) => void, rx = 1, ry = 1) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    fn(c.getContext("2d") as CanvasRenderingContext2D, w, h);
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(rx, ry);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = MAX_ANISO;
    return t;
  }

  const grassTex = makeTex(256, 256, (x, w, h) => {
    x.fillStyle = "#8f9164";
    x.fillRect(0, 0, w, h);
    for (let i = 0; i < 26; i++) {
      const g = x.createRadialGradient(Math.random() * w, Math.random() * h, 4, Math.random() * w, Math.random() * h, rand(30, 80));
      const dry = Math.random() < 0.5;
      g.addColorStop(0, dry ? "rgba(168,158,96,.35)" : "rgba(110,134,74,.30)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      x.fillStyle = g;
      x.fillRect(0, 0, w, h);
    }
    for (let i = 0; i < 4200; i++) {
      const px = Math.random() * w;
      const py = Math.random() * h;
      const g2 = (125 + Math.random() * 80) | 0;
      x.strokeStyle = `rgba(${g2 - 10},${g2},${g2 - 45},${0.5 + Math.random() * 0.5})`;
      x.lineWidth = 1;
      x.beginPath();
      x.moveTo(px, py);
      x.lineTo(px + rand(-1.5, 1.5), py - rand(2, 5));
      x.stroke();
    }
  }, 190, 190);

  const asphBase = makeTex(256, 256, (x, w, h) => {
    x.fillStyle = "#41444a";
    x.fillRect(0, 0, w, h);
    for (let i = 0; i < 3600; i++) {
      const g = (52 + Math.random() * 34) | 0;
      x.fillStyle = `rgb(${g},${g + 2},${g + 5})`;
      x.fillRect(Math.random() * w, Math.random() * h, 1.4, 1.4);
    }
    for (let i = 0; i < 10; i++) {
      x.strokeStyle = "rgba(25,27,30,.35)";
      x.beginPath();
      let px = Math.random() * w;
      let py = Math.random() * h;
      x.moveTo(px, py);
      for (let k = 0; k < 5; k++) {
        px += rand(-30, 30);
        py += rand(-30, 30);
        x.lineTo(px, py);
      }
      x.stroke();
    }
  });

  const asphaltMats: THREE.MeshStandardMaterial[] = [];
  function asphaltMat(rx: number, ry: number) {
    const t = asphBase.clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.96, metalness: 0.0, envMapIntensity: 0.35 });
    asphaltMats.push(m);
    return m;
  }

  const paintMat = new THREE.MeshStandardMaterial({
    color: 0xdcd8cc, roughness: 0.9, envMapIntensity: 0.3,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });

  /* -------------------------------------------------------------- terrain */
  function vnoise(x: number, z: number) {
    const xi = Math.floor(x);
    const zi = Math.floor(z);
    const xf = x - xi;
    const zf = z - zi;
    const hh = (a: number, b: number) => {
      const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
      return s - Math.floor(s);
    };
    const u = xf * xf * (3 - 2 * xf);
    const v = zf * zf * (3 - 2 * zf);
    return hh(xi, zi) * (1 - u) * (1 - v) + hh(xi + 1, zi) * u * (1 - v) + hh(xi, zi + 1) * (1 - u) * v + hh(xi + 1, zi + 1) * u * v;
  }
  function fbm2(x: number, z: number) {
    let v = 0;
    let a = 0.5;
    for (let i = 0; i < 4; i++) {
      v += a * vnoise(x, z);
      x = x * 2.13 + 7.31;
      z = z * 2.11 + 3.77;
      a *= 0.5;
    }
    return v;
  }
  function terrainH(x: number, z: number) {
    const d = Math.sqrt(x * x + z * z);
    const m = sstep(860, 1150, d);
    if (m <= 0) return 0;
    return m * (7 + fbm2(x * 0.004 + 3.7, z * 0.004 + 1.9) * 15 +
      Math.sin(x * 0.012) * Math.cos(z * 0.014) * 4 + Math.sin(x * 0.033 + z * 0.021) * 1.6);
  }

  const ramps = [
    { x: -60, z: -8, yaw: -Math.PI / 2, w: 9, l: 16, h1: 2.3 },
    { x: 165, z: -110, yaw: Math.atan2(0.6, 0.8), w: 10, l: 20, h1: 4.6 },
  ].map((r) => {
    const c = Math.cos(r.yaw);
    const s = Math.sin(r.yaw);
    const nl = Math.hypot(r.l, r.h1);
    return {
      ...r, c, s,
      nx: (r.l / nl) * s, ny: r.l / nl, nz: (r.l / nl) * c,
      px: r.x, py: r.h1 / 2, pz: r.z,
    };
  });

  /* ------------------------------------------------------------- the city */
  /* The built environment lives in ./city: the grid, blocks, street walls,
     markings, furniture, traffic signals and skyline are all instanced there. */

  /* The world being driven on. Null means the built-in city; otherwise an
     imported map whose mesh has been turned into a height field (./mapbuild)
     is the ground, and the procedural city is switched off. */
  interface LoadedWorldMap {
    source: WorldMapSource;
    root: THREE.Group;
    field: MapField;
    spawn: MapSpawn;
    /** object URLs handed out to the model's textures, freed on unload */
    blobs: string[];
  }
  let worldMap: LoadedWorldMap | null = null;
  /** the car's own height: it decides which deck of a stacked cell we mean */
  let mapRefY = 0;
  const mapWallScratch: MapWall[] = [];

  function mapH(x: number, z: number): number | null {
    const F = worldMap?.field;
    if (!F) return null;
    return sampleMap(F, x, z, mapRefY);
  }
  function worldH(x: number, z: number) {
    const mh = mapH(x, z);
    const F = worldMap?.field;
    if (mh !== null && F) {
      const ex = F.x0 + (F.nx - 1) * F.cell;
      const ez = F.z0 + (F.nz - 1) * F.cell;
      const edge = Math.min(Math.min(x - F.x0, ex - x), Math.min(z - F.z0, ez - z));
      if (edge >= 20) return mh;
      const base = terrainH(x, z) + cityH(x, z);
      return base + (mh - base) * (edge / 20);
    }
    return terrainH(x, z) + cityH(x, z);
  }
  const gHN = { h: 0, n: V3() };
  function rampAt(x: number, z: number) {
    let bh = -1;
    let bn: (typeof ramps)[number] | null = null;
    for (const r of ramps) {
      const dx = x - r.x;
      const dz = z - r.z;
      const lx = dx * r.c - dz * r.s;
      const lz = dx * r.s + dz * r.c;
      if (Math.abs(lx) <= r.w / 2 && Math.abs(lz) <= r.l / 2) {
        const h = r.h1 * (lz + r.l / 2) / r.l;
        if (h > bh) {
          bh = h;
          bn = r;
        }
      }
    }
    if (bn) {
      gHN.h = bh;
      gHN.n.set(bn.nx, bn.ny, bn.nz);
      return true;
    }
    return false;
  }
  function bumpH(x: number, z: number) {
    return (vnoise(x * 0.5, z * 0.5) - 0.5) * 0.05;
  }
  function surfaceAt(x: number, z: number) {
    if (mapH(x, z) !== null) return "TARMAC";
    /* the built city's surfaces only exist while it is standing: with an
       imported map loaded, its old street grid is not tarmac any more */
    if (!cityState.on) return "GRASS";
    if (Math.abs(x) < 104 && Math.abs(z) < 104) return "TARMAC";
    if (onStreet(x, z)) return "TARMAC";
    const b = blockAt(x, z);
    if (b) return b.type === "park" ? "GRASS" : "TARMAC";
    if (cityH(x, z) > 0) return "TARMAC";   /* pavement apron / kerb */

    if (onRoad(x, z)) return "TARMAC";
    return "GRASS";
  }
  function groundHN(x: number, z: number) {
    const h = worldH(x, z);
    if (rampAt(x, z) && gHN.h > h) {
      /* on a ramp */
    } else {
      const e = 1.2;
      gHN.n.set(worldH(x - e, z) - worldH(x + e, z), 2 * e, worldH(x, z - e) - worldH(x, z + e)).normalize();
      gHN.h = h + (surfaceAt(x, z) === "GRASS" ? bumpH(x, z) : 0);
    }
    return gHN;
  }
  function groundH(x: number, z: number) {
    let h = worldH(x, z);
    if (rampAt(x, z) && gHN.h > h) h = gHN.h;
    else if (surfaceAt(x, z) === "GRASS") h += bumpH(x, z);
    return h;
  }

  /* terrain mesh */
  {
    const g = new THREE.PlaneGeometry(1900, 1900, 150, 150);
    g.rotateX(-Math.PI / 2);
    const p = g.attributes.position as THREE.BufferAttribute;
    const col: number[] = [];
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const z = p.getZ(i);
      p.setY(i, terrainH(x, z));
      const n = fbm2(x * 0.012, z * 0.012);
      const n2 = fbm2(x * 0.06 + 7.7, z * 0.06 + 2.3);
      let r = 0.70 + 0.45 * n + 0.15 * n2;
      let gg = 0.68 + 0.48 * n + 0.18 * n2;
      let b = 0.58 + 0.30 * n + 0.08 * n2;
      const e = 8;
      const sl = (Math.abs(terrainH(x + e, z) - terrainH(x - e, z)) + Math.abs(terrainH(x, z + e) - terrainH(x, z - e))) / (2 * e);
      const rk = clamp((sl - 0.30) * 1.5, 0, 1);
      r += rk * 0.45;
      gg += rk * 0.40;
      b += rk * 0.42;
      const v = 0.88 + 0.20 * n2;
      col.push(r * v, gg * v, b * v);
    }
    g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({
      color: 0x8c8a5e, map: grassTex, roughness: 1, vertexColors: true, envMapIntensity: 0.3,
    }));
    m.receiveShadow = true;
    scene.add(m);
  }

  /* --------------------------------------------------- roads & ribbon ring */
  let roadPts: number[] = [];
  function flatPlane(w: number, d: number, x: number, z: number, y: number, mat: THREE.Material) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, y, z);
    m.receiveShadow = true;
    worldRoot.add(m);
    return m;
  }
  flatPlane(206, 206, 0, 0, 0.02, asphaltMat(48, 48));
  flatPlane(16, 806, 0, 447, 0.045, asphaltMat(2, 100));
  flatPlane(16, 806, 0, -447, 0.043, asphaltMat(2, 100));

  {
    const cps = [[560, 36], [450, 450], [110, 690], [-335, 650], [-690, 335], [-725, -150], [-520, -560], [-110, -745], [355, -800], [670, -335]]
      .map((p) => V3(p[0], 0, p[1]));
    const curve = new THREE.CatmullRomCurve3(cps, true);
    const N = 460;
    const pos: number[] = [];
    const uv: number[] = [];
    const idx: number[] = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const p = curve.getPointAt(t);
      const tg = curve.getTangentAt(t);
      const nx = -tg.z;
      const nz = tg.x;
      const l = Math.hypot(nx, nz);
      pos.push(p.x - (nx / l) * 5, 0.04, p.z - (nz / l) * 5, p.x + (nx / l) * 5, 0.04, p.z + (nz / l) * 5);
      uv.push(0, t * 44, 10, t * 44);
      if (i < N) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    for (let i = 0; i <= 190; i++) {
      const p = curve.getPointAt(i / 190);
      roadPts.push(p.x, p.z);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    const road = new THREE.Mesh(g, asphaltMat(1, 1));
    road.receiveShadow = true;
    worldRoot.add(road);

    const ribbon = (off: number, wid: number, y: number) => {
      const P: number[] = [];
      const I: number[] = [];
      for (let i = 0; i <= N; i++) {
        const t = i / N;
        const p = curve.getPointAt(t);
        const tg = curve.getTangentAt(t);
        const nx = -tg.z;
        const nz = tg.x;
        const l = Math.hypot(nx, nz);
        P.push(
          p.x + (nx / l) * off - (wid / 2) * (nx / l), y, p.z + (nz / l) * off - (wid / 2) * (nz / l),
          p.x + (nx / l) * off + (wid / 2) * (nx / l), y, p.z + (nz / l) * off + (wid / 2) * (nz / l),
        );
        if (i < N) {
          const a = i * 2;
          I.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }
      const gg = new THREE.BufferGeometry();
      gg.setAttribute("position", new THREE.Float32BufferAttribute(P, 3));
      gg.setIndex(I);
      gg.computeVertexNormals();
      worldRoot.add(new THREE.Mesh(gg, paintMat));
    };
    ribbon(4.55, 0.14, 0.07);
    ribbon(-4.55, 0.14, 0.07);

    const nd = 170;
    const dash = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.16, 1.8), paintMat, nd);
    const M = new THREE.Matrix4();
    const Q = new THREE.Quaternion();
    const S = V3(1, 1, 1);
    const Pz = V3();
    const up = V3(0, 1, 0);
    for (let i = 0; i < nd; i++) {
      const t = i / nd;
      const p = curve.getPointAt(t);
      const tg = curve.getTangentAt(t);
      Q.setFromAxisAngle(up, Math.atan2(tg.x, tg.z));
      Pz.set(p.x, 0.07, p.z);
      M.compose(Pz, Q, S);
      dash.setMatrixAt(i, M);
    }
    dash.instanceMatrix.needsUpdate = true;
    worldRoot.add(dash);
  }

  /* spatial hash so surfaceAt() stays cheap in the physics loop */
  const roadGrid = new Map<string, number[]>();
  const CELL = 24;
  for (let i = 0; i < roadPts.length; i += 2) {
    const key = `${Math.floor(roadPts[i] / CELL)},${Math.floor(roadPts[i + 1] / CELL)}`;
    const arr = roadGrid.get(key);
    if (arr) arr.push(i);
    else roadGrid.set(key, [i]);
  }
  function onRoad(x: number, z: number) {
    const cx = Math.floor(x / CELL);
    const cz = Math.floor(z / CELL);
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const arr = roadGrid.get(`${cx + dx},${cz + dz}`);
        if (!arr) continue;
        for (const i of arr) {
          const ddx = x - roadPts[i];
          const ddz = z - roadPts[i + 1];
          if (ddx * ddx + ddz * ddz < 5.4 * 5.4) return true;
        }
      }
    }
    return false;
  }

  /* ------------------------------------------------ build the blocks/buildings */
  const city = buildCity({ aniso: MAX_ANISO });
  const cityRoot = city.root;
  dressScene(cityRoot);
  const parkSpots = city.parkSpots;
  const parkedCarSpots = city.parkedCarSpots;
  const lampPoints = city.lampPoints;
  worldRoot.add(cityRoot);

  /* ------------------------------------------------------- the prop layer *
   *  The street furniture is made of real models: the city recorded where
   *  every tree, planting, lamp and signal stands (cityPropSpots), the
   *  shipped map brings its own list, and this puts a model on every spot —
   *  the shipped library, or the owner's own upload for that slot. The
   *  low-poly version of every slot the layer could cover is hidden, so the
   *  two never show at once. */
  let propModels: PropModel[] = (opts.propModels ?? []).filter((m) => m && m.url);
  let cityPropLayer: PropLayer | null = null;
  let worldPropLayer: PropLayer | null = null;
  let worldPropSpots: PropSpotMap | null = null;
  let cityPropToken = 0;
  let worldPropToken = 0;

  function dropCityProps() {
    if (cityPropLayer) {
      worldRoot.remove(cityPropLayer.group);
      cityPropLayer.dispose();
      cityPropLayer = null;
    }
    showLowPolyProps(cityRoot);
  }

  function dropWorldProps() {
    if (worldPropLayer) {
      scene.remove(worldPropLayer.group);
      worldPropLayer.dispose();
      worldPropLayer = null;
    }
  }

  async function applyCityProps() {
    const token = ++cityPropToken;
    if (canvas.isConnected === false) return;
    const layer = await buildPropLayer({ spots: cityPropSpots, models: propModels });
    if (token !== cityPropToken) {
      layer.dispose();
      return;
    }
    dropCityProps();
    cityPropLayer = layer;
    /* a slot whose model did not load keeps its low-poly version */
    hideLowPolyProps(cityRoot, layer.slots);
    worldRoot.add(layer.group);
  }

  async function applyWorldProps() {
    const token = ++worldPropToken;
    const spots = worldPropSpots;
    if (!spots) {
      dropWorldProps();
      return;
    }
    const layer = await buildPropLayer({ spots, models: propModels });
    if (token !== worldPropToken) {
      layer.dispose();
      return;
    }
    dropWorldProps();
    worldPropLayer = layer;
    scene.add(layer.group);
  }

  /* the app owns the Convex data; it pushes it here by canvas */
  registerPropSink(canvas, {
    setModels(models) {
      propModels = models.filter((m) => m && m.url);
      void applyCityProps();
      void applyWorldProps();
    },
    setWorldSpots(spots) {
      worldPropSpots = spots;
      void applyWorldProps();
    },
  });
  void applyCityProps();

  {
    const streetMat = asphaltMat(2, 72);
    for (const c of STREETS) {
      const ns = new THREE.Mesh(new THREE.PlaneGeometry(14, 2 * CITY_R), streetMat);
      ns.rotation.x = -Math.PI / 2;
      ns.position.set(c, 0.03, 0);
      ns.receiveShadow = true;
      cityRoot.add(ns);
      const ew = new THREE.Mesh(new THREE.PlaneGeometry(2 * CITY_R, 14), streetMat);
      ew.rotation.x = -Math.PI / 2;
      ew.position.set(0, 0.032, c);
      ew.receiveShadow = true;
      cityRoot.add(ew);
    }
  }

  /* skid pad markings */
  {
    const ring = new THREE.Mesh(new THREE.RingGeometry(29.55, 30.45, 96), paintMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.06;
    worldRoot.add(ring);
    const cross = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 56), paintMat);
    cross.rotation.x = -Math.PI / 2;
    cross.position.y = 0.06;
    worldRoot.add(cross);
    const cross2 = cross.clone();
    cross2.rotation.z = Math.PI / 2;
    worldRoot.add(cross2);
  }

  /* signage */
  function textCanvas(w: number, h: number, fn: (x: CanvasRenderingContext2D, w: number, h: number) => void) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    fn(c.getContext("2d") as CanvasRenderingContext2D, w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  document.fonts?.ready?.then(() => {
    const postMat = new THREE.MeshStandardMaterial({ color: 0x2a2c2f, roughness: 0.7, metalness: 0.3, envMapIntensity: 0.4 });
    for (let i = 1; i <= 6; i++) {
      const tex = textCanvas(256, 128, (x, w, h) => {
        x.fillStyle = "#17181a";
        x.fillRect(0, 0, w, h);
        x.strokeStyle = "#ff6a2a";
        x.lineWidth = 8;
        x.strokeRect(4, 4, w - 8, h - 8);
        x.fillStyle = "#ece9e2";
        x.font = "700 62px Rajdhani, system-ui, sans-serif";
        x.textAlign = "center";
        x.fillText(`${i * 100} m`, w / 2, h / 2 + 22);
      });
      const g = new THREE.Group();
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.7), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.35 }));
      pl.rotation.y = -Math.PI / 2;
      pl.position.y = 2.42;
      g.add(pl);
      for (const zz of [-0.7, 0.7]) {
        const p = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.4, 0.12), postMat);
        p.position.set(0, 1.2, zz);
        g.add(p);
      }
      g.position.set(11.2, WALK_H, 90 + i * 100);
      cityRoot.add(g);
    }
    const beamTex = textCanvas(1024, 96, (x, w, h) => {
      x.fillStyle = "#17181a";
      x.fillRect(0, 0, w, h);
      x.fillStyle = "#ff6a2a";
      x.fillRect(0, h - 10, w, 10);
      x.fillStyle = "#ece9e2";
      x.font = "600 46px Rajdhani, system-ui, sans-serif";
      x.textAlign = "center";
      x.fillText("APEX CITY  ·  DRAG AVENUE", w / 2, 58);
    });
    const gan = new THREE.Group();
    gan.position.set(0, 0, 90);
    for (const px of [-10.5, 10.5]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.55, 6.4, 0.55), postMat);
      p.position.set(px, 3.2, 0);
      p.castShadow = true;
      gan.add(p);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(21.6, 1.2, 0.7), postMat);
    beam.position.y = 6.2;
    beam.castShadow = true;
    gan.add(beam);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(20, 1.05), new THREE.MeshStandardMaterial({ map: beamTex, roughness: 0.8, envMapIntensity: 0.35 }));
    sign.rotation.y = Math.PI;
    sign.position.set(0, 6.2, -0.37);
    gan.add(sign);
    cityRoot.add(gan);
  });

  /* ramps geometry */
  {
    const conc = new THREE.MeshStandardMaterial({ color: 0x9b9a93, roughness: 0.95, envMapIntensity: 0.3 });
    for (const r of ramps) {
      const w2 = r.w / 2;
      const l2 = r.l / 2;
      const h = r.h1;
      const A = [-w2, 0, -l2];
      const B = [w2, 0, -l2];
      const C = [w2, 0, l2];
      const D = [-w2, 0, l2];
      const E = [w2, h, l2];
      const F = [-w2, h, l2];
      const tris = [A, F, E, A, E, B, D, C, E, D, E, F, B, E, C, A, D, F].flat();
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(tris, 3));
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, conc);
      m.castShadow = true;
      m.receiveShadow = true;
      m.position.set(r.x, 0, r.z);
      m.rotation.y = r.yaw;
      worldRoot.add(m);
    }
  }

  /* -------------------------------------------------------------- greenery */
  {
    const NT = 190;
    const UP = V3(0, 1, 0);
    const trunkG = new THREE.CylinderGeometry(0.12, 0.24, 1, 7).translate(0, 0.5, 0);
    const coneG = new THREE.ConeGeometry(1, 1, 8).translate(0, 0.5, 0);
    const blobG = new THREE.IcosahedronGeometry(1, 1);
    const barkMat = new THREE.MeshStandardMaterial({ color: 0x6a5138, roughness: 1, envMapIntensity: 0.2 });
    const folMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, envMapIntensity: 0.25 });
    folMat.onBeforeCompile = (s) => {
      s.uniforms.uT = uTime;
      s.vertexShader = "uniform float uT;\n" + s.vertexShader.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec4 wpo = instanceMatrix * vec4(0.0,0.0,0.0,1.0);
          float sw = sin(uT * 1.1 + wpo.x * 0.21 + wpo.z * 0.17);
          transformed.x += sw * 0.05 * max(position.y, 0.0);
          transformed.z += cos(uT * 0.9 + wpo.x * 0.13) * 0.04 * max(position.y, 0.0);
        #endif`,
      );
    };
    const trunks = new THREE.InstancedMesh(trunkG, barkMat, NT);
    const lays = [0, 1, 2].map(() => new THREE.InstancedMesh(coneG, folMat, NT));
    const blobs = new THREE.InstancedMesh(blobG, folMat, NT * 2);
    const M = new THREE.Matrix4();
    const Q = new THREE.Quaternion();
    const S = V3();
    const P = V3();
    const C = new THREE.Color();
    const spots: [number, number, number][] = [];
    for (const s of parkSpots) spots.push([s[0], s[1], 0.8]);
    let guard = 0;
    while (spots.length < NT && guard++ < 5000) {
      const a = Math.random() * TAU;
      const d = rand(730, 900);
      const x = Math.cos(a) * d;
      const z = Math.sin(a) * d;
      if (onRoad(x, z) || surfaceAt(x, z) !== "GRASS") continue;
      let bad = false;
      for (const r of ramps) if (Math.hypot(x - r.x, z - r.z) < 30) bad = true;
      if (bad) continue;
      spots.push([x, z, 1]);
    }
    let ti = 0;
    let nC = 0;
    let nB = 0;
    for (const [x, z, sc] of spots) {
      const h = terrainH(x, z);
      Q.setFromAxisAngle(UP, Math.random() * TAU);
      const th = rand(1.6, 2.6) * sc;
      P.set(x, h - 0.1, z);
      S.set(rand(0.8, 1.2), th, rand(0.8, 1.2));
      M.compose(P, Q, S);
      trunks.setMatrixAt(ti++, M);
      if (Math.random() < 0.68) {
        const fh = rand(4.5, 7.5) * sc;
        const cr = rand(1.7, 2.6);
        const baseY = h + th * 0.35;
        const lv: [number, number, number][] = [[0, 0.55, 1.0], [0.30, 0.42, 0.75], [0.60, 0.34, 0.48]];
        for (let k = 0; k < 3; k++) {
          const [dy, hf, rf] = lv[k];
          P.set(x, baseY + fh * dy, z);
          S.set(cr * rf, fh * hf, cr * rf);
          M.compose(P, Q, S);
          lays[k].setMatrixAt(nC, M);
        }
        C.setHSL(0.26 + Math.random() * 0.05, 0.28 + Math.random() * 0.12, 0.17 + Math.random() * 0.07);
        lays.forEach((l, k) => l.setColorAt(nC, C.clone().offsetHSL(0, 0, k * 0.015)));
        nC++;
      } else {
        const r1 = rand(1.6, 2.6) * sc;
        const fh = rand(2.4, 3.6);
        P.set(x, h + th + fh * 0.45, z);
        S.set(r1, fh * 0.62, r1);
        M.compose(P, Q, S);
        blobs.setMatrixAt(nB * 2, M);
        P.set(x + rand(-0.9, 0.9), h + th + fh * 0.85, z + rand(-0.9, 0.9));
        S.set(r1 * 0.62, fh * 0.45, r1 * 0.62);
        M.compose(P, Q, S);
        blobs.setMatrixAt(nB * 2 + 1, M);
        C.setHSL(0.21 + Math.random() * 0.06, 0.35, 0.26 + Math.random() * 0.08);
        blobs.setColorAt(nB * 2, C);
        blobs.setColorAt(nB * 2 + 1, C.clone().offsetHSL(0, 0, 0.03));
        nB++;
      }
    }
    trunks.count = ti;
    lays.forEach((l) => (l.count = nC));
    blobs.count = nB * 2;
    [trunks, ...lays, blobs].forEach((m) => {
      m.castShadow = true;
      m.receiveShadow = true;
      worldRoot.add(m);
    });
  }

  /* ---------------------------------------------------------------- cones */
  interface Cone {
    mesh: THREE.Mesh; home: THREE.Vector3; p: THREE.Vector3; v: THREE.Vector3;
    q: THREE.Quaternion; cw: THREE.Vector3; cool: number;
  }
  const cones: Cone[] = [];
  {
    const geo = new THREE.ConeGeometry(0.22, 0.55, 10);
    geo.translate(0, 0.275, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0xe0521f, roughness: 0.6, envMapIntensity: 0.35 });
    const add = (x: number, z: number) => {
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = true;
      worldRoot.add(m);
      cones.push({
        mesh: m, home: V3(x, groundH(x, z), z), p: V3(x, groundH(x, z), z), v: V3(),
        q: new THREE.Quaternion(), cw: V3(), cool: 0,
      });
    };
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * TAU;
      add(Math.cos(a) * 30, Math.sin(a) * 30);
    }
    for (let i = 0; i < 8; i++) add(i % 2 ? 2.4 : -2.4, 120 + i * 18);
  }
  function resetCones() {
    for (const c of cones) {
      c.p.copy(c.home);
      c.v.set(0, 0, 0);
      c.q.identity();
      c.cw.set(0, 0, 0);
      c.cool = 0;
      c.mesh.position.copy(c.p);
      c.mesh.quaternion.copy(c.q);
    }
  }

  /* -------------------------------------------------------- vehicle budget */
  const FLEET = new Map<VehicleKind, FleetTemplate>();
  function fleetTemplate(kind: VehicleKind): FleetTemplate {
    let t = FLEET.get(kind);
    if (!t) {
      t = buildFleetTemplate(kind, 0xffffff);
      FLEET.set(kind, t);
    }
    return t;
  }
  const TRAFFIC_MAX = 14;
  const PARKED_MAX = 26;
  const traffic: {
    grp: THREE.Group; axis: "x" | "z"; street: number; dir: number; lane: number;
    speed: number; vmax: number; stopT: number; lastS: number | null;
    yaw: number; x: number; z: number; spins: THREE.Object3D[];
  }[] = [];
  const parkedCars: { x: number; z: number; yaw: number }[] = [];

  function cloneRigSpins(g: THREE.Group) {
    const spins: THREE.Object3D[] = [];
    g.traverse((o) => {
      if (o.userData?.wheelSpin) spins.push(o);
    });
    return spins;
  }

  function spawnTrafficCar() {
    const kind = randomTrafficKind();
    const tpl = fleetTemplate(kind);
    const g = cloneFleetVehicle(tpl, PAINT_COLORS[(Math.random() * PAINT_COLORS.length) | 0]);
    const axis: "x" | "z" = Math.random() < 0.5 ? "z" : "x";
    const street = STREETS[(Math.random() * STREETS.length) | 0];
    const dir = Math.random() < 0.5 ? 1 : -1;
    const lane = axis === "z" ? -3.5 * dir : 3.5 * dir;
    const along = rand(-520, 520);
    const c = {
      grp: g, axis, street, dir, lane,
      speed: rand(4, 8), vmax: rand(9, 14), stopT: 0, lastS: null,
      yaw: axis === "z" ? (dir > 0 ? 0 : Math.PI) : (dir > 0 ? Math.PI / 2 : -Math.PI / 2),
      x: axis === "z" ? street + lane : along,
      z: axis === "z" ? along : street + lane,
      spins: cloneRigSpins(g),
    };
    g.position.set(c.x, 0.03, c.z);
    g.rotation.y = c.yaw;
    scene.add(g);
    traffic.push(c);
  }

  let cityCarsDone = false;
  function populateCityCars() {
    if (!cityState.on) return;
    if (!cityCarsDone) {
      cityCarsDone = true;
      let n = 0;
      const order = parkedCarSpots.slice();
      for (let i = order.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        const tmp = order[i];
        order[i] = order[j];
        order[j] = tmp;
      }
      for (const s of order) {
        if (n >= PARKED_MAX) break;
        if (Math.random() < 0.35) continue;
        const kind = randomTrafficKind();
        const tpl = fleetTemplate(kind);
        const g = cloneFleetVehicle(tpl, PAINT_COLORS[(Math.random() * PAINT_COLORS.length) | 0]);
        g.position.set(s[0], WALK_H * 0.2 + 0.03, s[1]);
        g.rotation.y = s[2];
        g.traverse((o) => {
          o.castShadow = false;
          o.receiveShadow = true;
        });
        cityRoot.add(g);
        parkedCars.push({ x: s[0], z: s[1], yaw: s[2] });
        n++;
      }
    }
    while (traffic.length < TRAFFIC_MAX) spawnTrafficCar();
  }

  /* ------------------------------------------------------------- player car */
  /* -------------------------------------------------------------- other drivers
   *  Peers arrive as sparse network samples (about eight a second), so each one
   *  is drawn with the procedural fleet template of its car's class, tinted to
   *  its paint colour, and smoothed towards the last sample. Motion therefore
   *  reads as driving rather than teleporting, and no remote ever costs the
   *  player a 12 MB download. */
  const remoteCars = new Map<string, {
    root: THREE.Group;
    spins: THREE.Object3D[];
    tag: THREE.Sprite;
    tex: THREE.CanvasTexture;
    label: string;
    tx: number; ty: number; tz: number; tyaw: number;
    speed: number; radius: number; angle: number; tagY: number;
  }>();
  let peersOnline = 0;
  const KIND_OK = new Set(Object.keys(VEHICLES));

  function nameTag(title: string, sub: string) {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 128;
    const g = c.getContext("2d");
    if (g) {
      g.clearRect(0, 0, 512, 128);
      g.fillStyle = "rgba(8,9,11,0.78)";
      g.fillRect(26, 12, 460, 78);
      g.strokeStyle = "rgba(255,106,42,0.9)";
      g.lineWidth = 3;
      g.strokeRect(26, 12, 460, 78);
      g.fillStyle = "#ece9e2";
      g.font = "bold 42px Rajdhani, sans-serif";
      g.fillText(title.slice(0, 20), 42, 52);
      g.fillStyle = "#96928a";
      g.font = "500 24px monospace";
      g.fillText(sub.slice(0, 26).toUpperCase(), 42, 82);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false,
    }));
    sprite.scale.set(3.4, 0.85, 1);
    return { sprite, tex, label: `${title}|${sub}` };
  }

  function setRemoteDrivers(list: RemoteDriver[]) {
    const seen = new Set<string>();
    for (const d of list) {
      seen.add(d.id);
      /* a hostile or stale payload must never be able to blow this up */
      if (!isFinite(d.x) || !isFinite(d.y) || !isFinite(d.z) || !isFinite(d.yaw)) continue;
      const kind = (KIND_OK.has(d.kind) ? d.kind : "sedan") as VehicleKind;
      let rc = remoteCars.get(d.id);
      if (!rc) {
        const root = cloneFleetVehicle(fleetTemplate(kind), d.paint);
        root.traverse((o) => {
          o.castShadow = false;
        });
        const tag = nameTag(d.name, d.carName);
        root.add(tag.sprite);
        root.position.set(d.x, d.y, d.z);
        root.rotation.y = d.yaw;
        scene.add(root);
        rc = {
          root, spins: cloneRigSpins(root), tag: tag.sprite, tex: tag.tex, label: tag.label,
          tx: d.x, ty: d.y, tz: d.z, tyaw: d.yaw,
          speed: d.speed, radius: VEHICLES[kind].wheelR, angle: 0,
          tagY: VEHICLES[kind].height + 0.75,
        };
        remoteCars.set(d.id, rc);
      } else if (rc.label !== `${d.name}|${d.carName}`) {
        const tag = nameTag(d.name, d.carName);
        rc.tex.dispose();
        rc.tag.material.map = tag.tex;
        rc.tag.material.needsUpdate = true;
        rc.tex = tag.tex;
        rc.label = tag.label;
      }
      rc.tx = d.x;
      rc.ty = d.y;
      rc.tz = d.z;
      rc.tyaw = d.yaw;
      rc.speed = d.speed;
    }
    for (const [id, rc] of remoteCars) {
      if (seen.has(id)) continue;
      scene.remove(rc.root);
      rc.tex.dispose();
      rc.tag.material.dispose();
      /* the fleet template owns the geometry and materials, so only the group
         we cloned is thrown away here */
      remoteCars.delete(id);
    }
    peersOnline = remoteCars.size;
  }

  function updateRemoteDrivers(dt: number) {
    if (!remoteCars.size) return;
    const k = 1 - Math.exp(-dt * 11);
    const ky = 1 - Math.exp(-dt * 8);
    for (const rc of remoteCars.values()) {
      const p = rc.root.position;
      /* nobody can see a car four hundred metres away through the fog */
      const far = (p.x - car.pos.x) ** 2 + (p.z - car.pos.z) ** 2 > 420 * 420;
      rc.root.visible = !far;
      if (far) continue;
      p.x += (rc.tx - p.x) * k;
      p.z += (rc.tz - p.z) * k;
      const want = Math.max(groundH(p.x, p.z) + 0.03, rc.ty);
      p.y += (want - p.y) * ky;
      let dy = rc.tyaw - rc.root.rotation.y;
      dy = Math.atan2(Math.sin(dy), Math.cos(dy));
      rc.root.rotation.y += dy * k;
      rc.angle += (rc.speed / Math.max(0.22, rc.radius)) * dt;
      for (const s of rc.spins) s.rotation.x = rc.angle;
      rc.tag.position.set(0, rc.tagY, 0);
    }
  }

  const netFwd = V3();
  function netSnapshot(): NetSnapshot | null {
    if (!player) return null;
    netFwd.set(0, 0, 1).applyQuaternion(car.quat);
    return {
      x: car.pos.x,
      y: car.pos.y - REST_HEIGHT,
      z: car.pos.z,
      yaw: Math.atan2(netFwd.x, netFwd.z),
      speed: car.spd,
    };
  }

  const carGroup = new THREE.Group();
  scene.add(carGroup);
  let player: VehicleBuild | null = null;
  let paintHex = opts.initialPaint ?? 0xd94a1a;

  /* headlights */
  const headL = new THREE.SpotLight(0xffeecb, 0, 110, 0.44, 0.55, 1.6);
  const headR = new THREE.SpotLight(0xffeecb, 0, 110, 0.44, 0.55, 1.6);
  const headTL = new THREE.Object3D();
  const headTR = new THREE.Object3D();
  headL.target = headTL;
  headR.target = headTR;
  carGroup.add(headL, headR, headTL, headTR);
  const tailGlowL = new THREE.PointLight(0xff2a10, 0, 8, 2);
  const tailGlowR = new THREE.PointLight(0xff2a10, 0, 8, 2);
  carGroup.add(tailGlowL, tailGlowR);
  let headlightsOn = false;
  let headlightsAuto = true;

  /* --------------------------------------------------- physics core state */
  const DMODES = [
    {
      name: "NORMAL", muT: 1.25, muG: 0.55, pkF: 0.115, pkR: 0.115, paF: 0.150, paR: 0.150,
      assist: true, steerMax: 0.50, steerFade: 26, coup: 0.90,
      upLo: 2800, upHi: 6400, shift: 0.22, suspK: 1.0, suspD: 1.0, dfd: 0.55, tcCap: 0.40,
    },
    {
      name: "DRIFT", muT: 1.22, muG: 0.60, pkF: 0.100, pkR: 0.128, paF: 0.180, paR: 0.110,
      assist: false, steerMax: 0.68, steerFade: 33, coup: 1.15,
      upLo: 3800, upHi: 7300, shift: 0.10, suspK: 1.06, suspD: 1.10, dfd: 0.42, tcCap: 0,
    },
    {
      name: "RALLY", muT: 1.02, muG: 1.00, pkF: 0.105, pkR: 0.120, paF: 0.165, paR: 0.125,
      assist: false, steerMax: 0.62, steerFade: 30, coup: 1.05,
      upLo: 3400, upHi: 6900, shift: 0.14, suspK: 0.72, suspD: 0.80, dfd: 0.45, tcCap: 0,
    },
    {
      name: "ARCADE", muT: 1.60, muG: 1.20, pkF: 0.130, pkR: 0.130, paF: 0.190, paR: 0.190,
      assist: true, steerMax: 0.55, steerFade: 29, coup: 1.35,
      upLo: 4200, upHi: 7600, shift: 0.09, suspK: 1.15, suspD: 1.15, dfd: 1.05, tcCap: 0.25,
    },
  ];
  let dmode = 0;
  let assists = true;

  const REST = 0.30;
  const HARD_Y = -0.02;
  const BODYPTS_DEF: [number, number, number][] = [
    [0.88, -0.30, 2.30], [-0.88, -0.30, 2.30], [0.90, -0.30, -2.28], [-0.90, -0.30, -2.28],
    [0.62, 0.64, 0.9], [-0.62, 0.64, 0.9], [0.62, 0.64, -1.0], [-0.62, 0.64, -1.0],
  ];
  let BODYPTS = BODYPTS_DEF.map((p) => V3(p[0], p[1], p[2]));

  const TQPTS: [number, number][] = [
    [900, 360], [2000, 480], [3200, 545], [4500, 570], [6200, 570], [6800, 545], [7400, 515], [7900, 470],
  ];
  function torqueCurve(r: number) {
    if (r <= TQPTS[0][0]) return TQPTS[0][1];
    for (let i = 1; i < TQPTS.length; i++) {
      if (r <= TQPTS[i][0]) {
        const a = TQPTS[i - 1];
        const b = TQPTS[i];
        return a[1] + (b[1] - a[1]) * (r - a[0]) / (b[0] - a[0]);
      }
    }
    return TQPTS[TQPTS.length - 1][1];
  }
  const pj = (s: number) => Math.sin(1.65 * Math.atan(1.7 * s));

  interface WheelDef {
    x: number; z: number; steer: number; driveW: number; brake: number; arb: number; driven: boolean;
  }
  let spec: VehicleSpec = VEHICLES[opts.initialVehicle ?? "gt"];
  let MASS = spec.mass;
  let KSPR = 62000;
  let CDAMP = 5600;
  let RDAMP = 7400;
  let IW = 1.15;
  let RAD = spec.wheelR;
  let REST_HEIGHT = GROUND_LIFT + RAD;
  const INERTIA = V3(2600, 3050, 560);
  let KSPR_LOAD = 1;
  let TORQUE_SCALE = 1;
  let DRAG_C = 0.4;
  let DF_SCALE = 1;
  let GRIP_SCALE = 1;
  let WHEELS: WheelDef[] = [];
  let PHYS_WB = 2.68;
  let FRONT_AXLE_Z = 1.34;
  let REAR_AXLE_Z = -1.34;
  let REST_WY = -0.2666;
  let CAR_HX = 0.98;
  let CAR_HZ = 2.26;
  let CAR_TOP = 1.5;

  function wheelLayout(): WheelDef[] {
    const fz = spec.wheelbase / 2;
    const rz = -fz;
    const fx = (spec.track / 2) * 0.985;
    const rx = (spec.track / 2) * 1.01;
    const mr = MASS / 1350;
    const brakeF = 1360 * mr;
    const brakeR = 620 * mr;
    const arbF = 20000 * mr;
    const arbR = 14500 * mr;
    const dt = spec.drivetrain;
    const drive: [number, number, number, number] =
      dt === "fwd" ? [0.5, 0.5, 0, 0] : dt === "awd" ? [0.27, 0.27, 0.23, 0.23] : [0, 0, 0.5, 0.5];
    const mk = (x: number, z: number, steer: number, driveW: number, brake: number, arb: number): WheelDef =>
      ({ x, z, steer, driveW, brake, arb, driven: driveW > 0 });
    return [
      mk(fx, fz, 1, drive[0], brakeF, arbF),
      mk(-fx, fz, 1, drive[1], brakeF, arbF),
      mk(rx, rz, 0, drive[2], brakeR, arbR),
      mk(-rx, rz, 0, drive[3], brakeR, arbR),
    ];
  }

  function applyCarSpec(kind: VehicleKind) {
    applySpecObject(VEHICLES[kind]);
  }

  /** Installs a spec — catalogue kind or measurements taken off a model. */
  function applySpecObject(next: VehicleSpec) {
    spec = next;
    MASS = spec.mass;
    const mr = MASS / 1350;
    KSPR = 62000 * mr;
    CDAMP = 5600 * mr;
    RDAMP = 7400 * mr;
    IW = 1.15 * Math.pow(spec.wheelR / 0.33, 2) * Math.pow(mr, 0.35);
    RAD = spec.wheelR;
    REST_HEIGHT = GROUND_LIFT + RAD;
    INERTIA.set(
      (MASS * (spec.width * spec.width + spec.height * spec.height)) / 12,
      (MASS * (spec.length * spec.length + spec.width * spec.width)) / 12,
      (MASS * (spec.length * spec.length + spec.height * spec.height)) / 12,
    );
    const scale = Math.max(1, spec.wheelbase / 2.68);
    BODYPTS = BODYPTS_DEF.map((p) => V3(p[0] * (spec.width / 1.9), p[1] * Math.min(1.1, spec.height / 1.25), p[2] * scale));
    CAR_HX = spec.width / 2 + 0.06;
    CAR_HZ = spec.length / 2 + 0.06;
    CAR_TOP = spec.height * 1.15;
    TORQUE_SCALE = spec.torqueNm / 570;
    DRAG_C = spec.drag;
    DF_SCALE = spec.downforce;
    GRIP_SCALE = spec.grip;
    WHEELS = wheelLayout();
    PHYS_WB = spec.wheelbase;
    FRONT_AXLE_Z = spec.wheelbase / 2;
    REAR_AXLE_Z = -spec.wheelbase / 2;
    REST_WY = HARD_Y - REST + COMP_STATIC();
    KSPR_LOAD = Math.max(1, MASS / 1350);
  }
  const COMP_STATIC = () => (MASS * 9.81) / 4 / KSPR;

  const hitN = V3();
  const hit = { t: 0, surf: "GRASS" };
  function castGround(o: THREE.Vector3, d: THREE.Vector3, L: number) {
    hit.t = Infinity;
    hit.surf = "GRASS";
    let found = false;
    const h0 = worldH(o.x, o.z) + (surfaceAt(o.x, o.z) === "GRASS" ? bumpH(o.x, o.z) : 0);
    if (o.y < h0 - 0.001) {
      hitN.set(0, 1, 0);
      hit.t = 0.001;
      hit.surf = surfaceAt(o.x, o.z);
      return true;
    }
    if (d.y < -1e-4) {
      let t = clamp(o.y / -d.y, 0, L);
      for (let i = 0; i < 3; i++) {
        const h = worldH(o.x + d.x * t, o.z + d.z * t);
        t = clamp((o.y - h) / -d.y, 0, L);
      }
      const hx = o.x + d.x * t;
      const hz = o.z + d.z * t;
      let h = worldH(hx, hz);
      const surf = surfaceAt(hx, hz);
      if (surf === "GRASS") h += bumpH(hx, hz);
      if (o.y + d.y * t <= h + 1e-3) {
        const e = 1.2;
        hitN.set(worldH(hx - e, hz) - worldH(hx + e, hz), 2 * e, worldH(hx, hz - e) - worldH(hx, hz + e)).normalize();
        hit.t = clamp((o.y - h) / -d.y, 0, L);
        hit.surf = surf;
        found = true;
      }
    }
    for (const r of ramps) {
      const den = d.x * r.nx + d.y * r.ny + d.z * r.nz;
      if (den >= -1e-4) continue;
      const t = ((r.px - o.x) * r.nx + (r.py - o.y) * r.ny + (r.pz - o.z) * r.nz) / den;
      if (t > 0 && t < L && t < hit.t) {
        const px = o.x + d.x * t;
        const pz = o.z + d.z * t;
        const dx = px - r.x;
        const dz = pz - r.z;
        const lx = dx * r.c - dz * r.s;
        const lz = dx * r.s + dz * r.c;
        if (Math.abs(lx) <= r.w / 2 + 0.05 && Math.abs(lz) <= r.l / 2) {
          hitN.set(r.nx, r.ny, r.nz);
          hit.t = t;
          hit.surf = "TARMAC";
          found = true;
        }
      }
    }
    return found;
  }

  const eUp = V3();
  const eFwd = V3();
  const eLeft = V3();
  const eF = V3();
  const eT = V3();
  const eRay = V3();
  const eVH = V3();
  const eWF = V3();
  const eWR = V3();
  const eVCP = V3();
  const eFF = V3();
  const t1 = V3();
  const t2 = V3();
  const t3 = V3();
  const t4 = V3();
  const t5 = V3();
  const eTL = V3();
  const eAL = V3();
  const eQ = new THREE.Quaternion();
  const YUP = V3(0, 1, 0);

  /**
   * One contact against a wall: the normal force from the overlap plus the
   * friction that scrubs speed off sideways. Shared by the city's buildings
   * and by the walls of an imported map, so a wall behaves the same either way.
   * Clobbers t2..t5 and eFF, so callers must not hold anything in them.
   */
  function wallImpulse(p: THREE.Vector3, nx: number, nz: number, pen: number) {
    t2.copy(p).sub(car.pos);
    t3.copy(car.vel).add(t4.crossVectors(car.w, t2));
    const vn = t3.x * nx + t3.z * nz;
    let Fn = pen * 250000 + (vn < 0 ? -vn * 9000 : 0);
    Fn = Math.min(Fn, 300000);
    eFF.set(nx * Fn, 0, nz * Fn);
    const tx = t3.x - vn * nx;
    const tz = t3.z - vn * nz;
    const vt = Math.hypot(tx, tz);
    if (vt > 0.01) {
      const f = -Math.min(Fn * 0.6, vt * 2500);
      eFF.x += (tx / vt) * f;
      eFF.z += (tz / vt) * f;
    }
    eF.add(eFF);
    eT.add(t5.crossVectors(t2, eFF));
  }

  interface WheelState {
    comp: number; compV: number; contact: boolean; cp: THREE.Vector3; hard: THREE.Vector3;
    n: THREE.Vector3; wR: THREE.Vector3; Fs: number; Fx: number; Fy: number;
    s: number; kappa: number; kF: number; aF: number; surf: string;
  }
  function newWheelState(): WheelState {
    return {
      comp: 0, compV: 0, contact: false, cp: V3(), hard: V3(), n: V3(), wR: V3(),
      Fs: 0, Fx: 0, Fy: 0, s: 0, kappa: 0, kF: 0, aF: 0, surf: "TARMAC",
    };
  }

  const keys: Record<string, boolean> = {};
  const car = {
    pos: V3(0, REST_HEIGHT, -12),
    quat: new THREE.Quaternion(),
    vel: V3(),
    w: V3(),
    wSpin: [0, 0, 0, 0],
    wAngle: [0, 0, 0, 0],
    heat: [0, 0, 0, 0],
    wc: [newWheelState(), newWheelState(), newWheelState(), newWheelState()],
    prevContact: [false, false, false, false],
    abs: [1, 1, 1, 1],
    tcS: 0,
    kickT: 0,
    rpm: 900,
    cutT: 0,
    gear: 1,
    mode: "D",
    shiftT: 0,
    revT: 0,
    steerVal: 0,
    steerAngle: 0,
    ack: [0, 0],
    throttle: 0,
    brakeIn: 0,
    hand: false,
    spd: 0,
    reset() {
      const f = V3(0, 0, 1).applyQuaternion(this.quat);
      const yaw = Math.atan2(f.x, f.z);
      this.quat.setFromAxisAngle(YUP, yaw);
      this.pos.y = groundH(this.pos.x, this.pos.z) + REST_HEIGHT;
      this.vel.set(0, 0, 0);
      this.w.set(0, 0, 0);
      this.wSpin = [0, 0, 0, 0];
      this.gear = 1;
      this.mode = "D";
      this.shiftT = 0;
      this.cutT = 0;
      this.rpm = 900;
      this.tcS = 0;
      this.kickT = 0;
      this.heat = [0, 0, 0, 0];
      for (const w of this.wc) {
        w.kF = 0;
        w.aF = 0;
      }
      this.abs = [1, 1, 1, 1];
    },
    carOBB(ox: number, oz: number, yaw: number, tc: { stopT: number } | null) {
      let strong = false;
      const cs = Math.cos(yaw);
      const sn = Math.sin(yaw);
      for (const p of BODYPTS) {
        t1.copy(p).applyQuaternion(this.quat).add(this.pos);
        if (t1.y > CAR_TOP) continue;
        const wx = t1.x - ox;
        const wz = t1.z - oz;
        const lx = wx * cs - wz * sn;
        const lz = wx * sn + wz * cs;
        const px = CAR_HX - Math.abs(lx);
        const pz = CAR_HZ - Math.abs(lz);
        if (px <= 0 || pz <= 0) continue;
        let nlx = 0;
        let nlz = 0;
        if (px < pz) nlx = Math.sign(lx) || 1;
        else nlz = Math.sign(lz) || 1;
        const wnx = nlx * cs + nlz * sn;
        const wnz = -nlx * sn + nlz * cs;
        t2.copy(t1).sub(this.pos);
        t3.copy(this.vel).add(t4.crossVectors(this.w, t2));
        const vn = t3.x * wnx + t3.z * wnz;
        let Fn = Math.min(px, pz) * 260000 + (vn < 0 ? -vn * 10000 : 0);
        Fn = Math.min(Fn, 280000);
        eFF.set(wnx * Fn, 0, wnz * Fn);
        const tx = t3.x - vn * wnx;
        const tz = t3.z - vn * wnz;
        const vt = Math.hypot(tx, tz);
        if (vt > 0.01) {
          const f = -Math.min(Fn * 0.55, vt * 2400);
          eFF.x += (tx / vt) * f;
          eFF.z += (tz / vt) * f;
        }
        eF.add(eFF);
        eT.add(t5.crossVectors(t2, eFF));
        if (vn < -3) strong = true;
      }
      if (strong && tc) sfxImpact(clamp(this.spd * 0.035, 0.15, 0.6));
      return strong;
    },
    step(dt: number) {
      const D = DMODES[dmode];
      const q = this.quat;
      eUp.set(0, 1, 0).applyQuaternion(q);
      eFwd.set(0, 0, 1).applyQuaternion(q);
      eLeft.set(1, 0, 0).applyQuaternion(q);
      const spd = this.vel.length();
      const fwdSpd = this.vel.dot(eFwd);

      /* inputs */
      const thrKey = keys.KeyW || keys.ArrowUp ? 1 : 0;
      const brkKey = keys.KeyS || keys.ArrowDown ? 1 : 0;
      let gas = 0;
      let brk = 0;
      if (this.mode === "D") {
        gas = thrKey;
        brk = brkKey;
        if (fwdSpd < 0.8 && brkKey > 0.5 && thrKey < 0.1) {
          this.revT += dt;
          if (this.revT > 0.3) {
            this.mode = "R";
            this.revT = 0;
            onToast("Gearbox · reverse");
          }
        } else this.revT = 0;
      } else {
        if (thrKey > 0.5) {
          gas = 0;
          brk = 1;
          if (fwdSpd > -0.8) {
            this.mode = "D";
            onToast("Gearbox · drive");
          }
        } else {
          gas = brkKey;
          brk = 0;
        }
      }
      if (this.mode === "R" && fwdSpd < -3.2) gas = 0;
      this.throttle += clamp(gas - this.throttle, -dt * 8, dt * 5);
      this.brakeIn += clamp(brk - this.brakeIn, -dt * 10, dt * 7);
      this.hand = !!keys.Space;
      const sTgt = (keys.KeyA || keys.ArrowLeft ? 1 : 0) - (keys.KeyD || keys.ArrowRight ? 1 : 0);
      const sRate = sTgt !== 0 ? 3.2 : 4.6;
      this.steerVal += clamp(sTgt - this.steerVal, -sRate * dt, sRate * dt);
      const maxSteer = (D.steerMax * spec.steerFactor) / (1 + Math.pow(spd / D.steerFade, 1.5));
      this.steerAngle = this.steerVal * maxSteer;

      /* Ackermann */
      const tck = 2 * Math.abs(WHEELS[0].x);
      let aL = this.steerAngle;
      let aR = this.steerAngle;
      if (Math.abs(this.steerAngle) > 0.004) {
        const R0 = PHYS_WB / Math.tan(Math.abs(this.steerAngle));
        const inn = Math.atan(PHYS_WB / Math.max(0.5, R0 - tck / 2));
        const out = Math.atan(PHYS_WB / (R0 + tck / 2));
        if (this.steerAngle > 0) {
          aL = inn;
          aR = out;
        } else {
          aL = -out;
          aR = -inn;
        }
      }
      this.ack[0] = aL;
      this.ack[1] = aR;

      /* gearbox */
      const ratio = this.mode === "R" ? -3.3 : [3.55, 2.24, 1.55, 1.21, 1.0, 0.83][this.gear - 1] * 3.7;
      const driven = WHEELS.map((w, i) => (w.driven ? i : -1)).filter((i) => i >= 0);
      let wsum = 0;
      for (const i of driven) wsum += this.wSpin[i];
      const wheelW = wsum / Math.max(1, driven.length);
      const wrpm = Math.abs(wheelW) * Math.abs(ratio) * 9.5493;
      const stall = 900 + this.throttle * 2300;
      const flare = spd < 6 ? Math.max(0, stall - wrpm) : 0;
      const tgtRpm = clamp(Math.max(wrpm, 900 + flare * (0.4 + 0.6 * this.throttle)), 900, 7900);
      this.rpm += (tgtRpm - this.rpm) * Math.min(1, dt * 8);
      if (this.kickT > 0) this.kickT -= dt;
      if (this.shiftT > 0) this.shiftT -= dt;
      else if (this.mode === "D") {
        const upLo = D.upLo + (D.upHi - D.upLo) * this.throttle;
        if (this.rpm > upLo && this.gear < 6) {
          this.gear++;
          this.shiftT = D.shift;
        } else if (this.rpm > 7400 && this.gear < 6) {
          this.gear++;
          this.shiftT = D.shift * 0.8;
        } else if (this.throttle > 0.85 && this.gear > 1 && this.kickT <= 0 && spd > 5) {
          const rpmDown = wheelW * 9.5493 * [3.55, 2.24, 1.55, 1.21, 1.0, 0.83][this.gear - 2] * 3.7;
          if (rpmDown < 6600) {
            this.gear--;
            this.shiftT = D.shift * 1.1;
            this.kickT = 0.8;
          }
        } else if (this.rpm < 1500 && this.gear > 1) {
          this.gear--;
          this.shiftT = D.shift * 0.9;
        }
      }
      if (this.cutT > 0) this.cutT -= dt;
      let engT = torqueCurve(this.rpm) * this.throttle * D.coup * TORQUE_SCALE -
        (this.throttle < 0.05 ? 30 + this.rpm * 0.018 : 0);
      if (this.rpm > 7700) this.cutT = 0.08;
      if (this.cutT > 0) engT = 0;
      if (dmode === 1 && this.throttle > 0.3 && spd > 8) {
        const rw = Math.max(this.wc[2].kappa, this.wc[3].kappa);
        if (rw > 0.115 * 1.4) engT += clamp((4600 - this.rpm) * 0.12, -260, 520);
      }
      if (this.brakeIn < 0.1 && spd < 1.8) engT += 26 * (1 - sstep(0.5, 1.8, Math.abs(fwdSpd)));
      if (this.shiftT > 0) engT *= 0.15 + 0.85 * (1 - this.shiftT / Math.max(D.shift, 0.01));
      if (D.assist && D.tcCap > 0 && this.mode === "D") {
        const rw = Math.max(this.wc[2].kappa, this.wc[3].kappa);
        const over = clamp((rw - D.pkR * 1.5) / (D.pkR * 2.0), 0, 1);
        this.tcS += (over - this.tcS) * Math.min(1, dt * 14);
        engT *= 1 - D.tcCap * this.tcS;
      } else this.tcS *= Math.max(0, 1 - dt * 6);
      const Tq = engT * ratio * 0.9;
      const lsdCap = Math.min(420 * (dmode === 1 ? 1.25 : 1), 60 + Math.abs(Tq) * 0.14);
      const Tdrive = WHEELS.map((w) => Tq * w.driveW);
      if (spec.drivetrain !== "fwd") {
        const Tl = clamp(26 * (this.wSpin[2] - this.wSpin[3]), -lsdCap, lsdCap);
        Tdrive[2] -= Tl;
        Tdrive[3] += Tl;
      }
      if (spec.drivetrain !== "rwd") {
        const cap2 = lsdCap * 0.6;
        const Tl2 = clamp(16 * (this.wSpin[0] - this.wSpin[1]), -cap2, cap2);
        Tdrive[0] -= Tl2;
        Tdrive[1] += Tl2;
      }

      /* raycasts */
      eRay.copy(eUp).negate();
      const L = REST + RAD;
      for (let i = 0; i < 4; i++) {
        const wl = WHEELS[i];
        const wc = this.wc[i];
        wc.hard.copy(this.pos).addScaledVector(eLeft, wl.x).addScaledVector(eUp, HARD_Y).addScaledVector(eFwd, wl.z);
        if (castGround(wc.hard, eRay, L)) {
          const comp = L - hit.t;
          if (comp > 0) {
            wc.contact = true;
            wc.comp = Math.min(comp, REST);
            wc.cp.copy(wc.hard).addScaledVector(eRay, hit.t);
            wc.n.copy(hitN);
            wc.surf = hit.surf;
            t1.copy(wc.hard).sub(this.pos);
            eVH.copy(this.vel).add(t2.crossVectors(this.w, t1));
            wc.compV = eVH.dot(eRay);
          } else {
            wc.contact = false;
            wc.comp = 0;
            wc.compV = 0;
          }
        } else {
          wc.contact = false;
          wc.comp = 0;
          wc.compV = 0;
        }
      }

      eF.set(0, -9.81 * MASS, 0);
      eT.set(0, 0, 0);

      /* suspension */
      const SK = D.suspK;
      const SD = D.suspD;
      for (const [a, b] of [[0, 1], [2, 3]]) {
        const wa = this.wc[a];
        const wb = this.wc[b];
        const dC = wa.comp - wb.comp;
        const arbPair: [WheelState, number][] = [[wa, dC * WHEELS[a].arb], [wb, -dC * WHEELS[b].arb]];
        for (const [wc] of arbPair) {
          let Fs = wc.comp * (KSPR * SK + wc.comp * 48000 * Math.min(2, MASS / 1350));
          Fs += clamp((wc.compV > 0 ? CDAMP : RDAMP) * SD * wc.compV, -5600 * SD * (MASS / 1350), 6800 * SD * (MASS / 1350));
          if (wc.comp > 0.245) Fs += (wc.comp - 0.245) * 170000;
          Fs = clamp(Fs, 0, 32000 * Math.max(1, MASS / 1350));
          wc.Fs = Fs;
          if (!wc.contact) continue;
          eFF.copy(eUp).multiplyScalar(Fs);
          eF.add(eFF);
          t1.copy(wc.hard).sub(this.pos);
          eT.add(t2.crossVectors(t1, eFF));
        }
      }

      /* tyres */
      const brakeT = this.brakeIn;
      const hand = this.hand;
      const wetGrip = 1 - 0.32 * envState.wet;
      for (let i = 0; i < 4; i++) {
        const wl = WHEELS[i];
        const wc = this.wc[i];
        const PK = wl.driven ? D.pkR : D.pkF;
        const PA = wl.driven ? D.paR : D.paF;
        if (D.assist && wc.contact && brakeT > 0.3 && spd > 4 && Math.abs(this.wSpin[i]) < 0.8) {
          this.abs[i] += (0.22 - this.abs[i]) * Math.min(1, dt * 40);
        } else this.abs[i] += (1 - this.abs[i]) * Math.min(1, dt * 10);
        const bT = wl.brake * brakeT * this.abs[i] + (hand && wl.driven ? 2900 * (MASS / 1350) : 0);
        if (!wc.contact) {
          this.wSpin[i] += (Tdrive[i] / IW) * dt;
          const dwb = (bT * dt) / IW;
          if (Math.abs(this.wSpin[i]) < dwb) this.wSpin[i] = 0;
          else this.wSpin[i] -= Math.sign(this.wSpin[i]) * dwb;
          wc.Fx = 0;
          wc.Fy = 0;
          wc.s = 0;
          this.heat[i] = Math.max(0, this.heat[i] - dt * 0.05);
          continue;
        }
        const st = wl.steer ? this.ack[i] : 0;
        eWF.copy(eFwd).multiplyScalar(Math.cos(st)).addScaledVector(eLeft, Math.sin(st));
        eWF.addScaledVector(wc.n, -eWF.dot(wc.n)).normalize();
        eWR.crossVectors(eWF, wc.n).normalize();
        wc.wR.copy(eWR);
        t1.copy(wc.cp).sub(this.pos);
        eVCP.copy(this.vel).add(t2.crossVectors(this.w, t1));
        const vLong = eVCP.dot(eWF);
        const vLat = eVCP.dot(eWR);
        const vv = Math.max(Math.abs(vLong), 2.0);
        const kappa = (this.wSpin[i] * RAD - vLong) / vv;
        const alpha = Math.atan2(-vLat, Math.abs(vLong) + 0.5);
        const vr = Math.max(Math.abs(vLong), 2.2);
        wc.kF += (kappa - wc.kF) * clamp((vr * dt) / 0.12, 0, 1);
        wc.aF += (alpha - wc.aF) * clamp((vr * dt) / 0.26, 0, 1);
        const sx = wc.kF / PK;
        const sy = wc.aF / PA;
        const s = Math.hypot(sx, sy);
        wc.s = s;
        wc.kappa = kappa;
        this.heat[i] = clamp(this.heat[i] + Math.abs(s) * spd * dt * 0.012 - dt * 0.045, 0, 1);
        const Fz = wc.Fs;
        const mu = (wc.surf === "GRASS" ? D.muG : D.muT) * GRIP_SCALE * wetGrip *
          (0.90 + 0.10 * this.heat[i]) * clamp(1 - 0.000012 * (Fz - 3200), 0.78, 1.05);
        let Fx = 0;
        let Fy = 0;
        if (s > 1e-4) {
          const Fm = Fz * mu * pj(s);
          Fx = (Fm * sx) / s;
          Fy = (Fm * sy) / s;
        }
        wc.Fx = Fx;
        wc.Fy = Fy;
        Fx += (wc.surf === "GRASS" ? -0.055 : -0.011) * Fz * clamp(vLong / 3, -1, 1);
        eFF.copy(eWF).multiplyScalar(Fx).addScaledVector(eWR, Fy);
        eF.add(eFF);
        eT.add(t2.crossVectors(t1, eFF));
        const Kx = Math.min((mu * Fz * 2.4 * RAD) / vv / PK, 25000);
        const a = (dt * RAD * RAD * Kx) / IW;
        let wn = (this.wSpin[i] * (1 + a) + dt * (Tdrive[i] - wc.Fx * RAD) / IW) / (1 + a);
        const dwb = (bT * dt) / IW;
        if (Math.abs(wn) < dwb) wn = 0;
        else wn -= Math.sign(wn) * dwb;
        this.wSpin[i] = wn;
        if (!this.prevContact[i] && wc.compV > 3.5) sfxImpact(clamp((wc.compV - 3) / 9, 0.12, 1) * 0.7);
        this.prevContact[i] = true;
      }

      /* chassis contacts with the world */
      for (const p of BODYPTS) {
        t1.copy(p).applyQuaternion(q).add(this.pos);
        const gn = groundHN(t1.x, t1.z);
        const pen = gn.h - t1.y;
        if (pen > 0) {
          t2.copy(t1).sub(this.pos);
          t3.copy(this.vel).add(t4.crossVectors(this.w, t2));
          const vn = t3.dot(gn.n);
          let Fn = pen * 48000 + (vn < 0 ? -vn * 3800 : 0);
          Fn = Math.min(Fn, 32000 * Math.max(1, MASS / 1350));
          eFF.copy(gn.n).multiplyScalar(Fn);
          t3.addScaledVector(gn.n, -vn);
          const vt = t3.length();
          if (vt > 0.01) {
            t3.multiplyScalar(1 / vt);
            eFF.addScaledVector(t3, -Math.min(Fn * 0.55, vt * 2200));
          }
          eF.add(eFF);
          eT.add(t5.crossVectors(t2, eFF));
        }
      }

      /* buildings & street furniture */
      if (cityState.on) {
        for (const p of BODYPTS) {
          t1.copy(p).applyQuaternion(q).add(this.pos);
          /* the pavement apron belongs to the block it reaches back to, so a
             car up on the kerb still finds the benches and bollards it hits */
          const b = blockAt(t1.x, t1.z)
            ?? blockAt(t1.x - KERB_APRON, t1.z)
            ?? blockAt(t1.x + KERB_APRON, t1.z)
            ?? blockAt(t1.x, t1.z - KERB_APRON)
            ?? blockAt(t1.x, t1.z + KERB_APRON);
          if (!b || !b.blds.length) continue;
          for (const bd of b.blds) {
            if (t1.y > bd.top) continue;
            const dx = t1.x - bd.x;
            const dz = t1.z - bd.z;
            const px = bd.hx - Math.abs(dx);
            const pz = bd.hz - Math.abs(dz);
            if (px <= 0 || pz <= 0) continue;
            let nx = 0;
            let nz = 0;
            if (px < pz) nx = Math.sign(dx) || 1;
            else nz = Math.sign(dz) || 1;
            wallImpulse(t1, nx, nz, Math.min(px, pz));
          }
        }
      }

      /* walls of an imported map — thin boxes lying on its own geometry */
      const mapFieldNow = worldMap?.field;
      if (mapFieldNow) {
        const boxes = wallsNear(mapFieldNow, this.pos.x, this.pos.z, mapWallScratch);
        if (boxes.length) {
          for (const p of BODYPTS) {
            t1.copy(p).applyQuaternion(q).add(this.pos);
            let bestPen = 0;
            let bnx = 0;
            let bnz = 0;
            for (const b of boxes) {
              if (t1.y > b.top) continue;
              const rx = t1.x - b.x;
              const rz = t1.z - b.z;
              const lx = rx * b.ux + rz * b.uz;
              const lz = -rx * b.uz + rz * b.ux;
              const dx = b.hx - Math.abs(lx);
              const dz = b.hz - Math.abs(lz);
              if (dx <= 0 || dz <= 0) continue;
              /* a wall quad arrives as two coplanar boxes: let the deepest
                 one win, so one face never pushes the car twice as hard */
              if (dx < dz) {
                if (dx > bestPen) {
                  const s = Math.sign(lx) || 1;
                  bestPen = dx;
                  bnx = b.ux * s;
                  bnz = b.uz * s;
                }
              } else if (dz > bestPen) {
                const s = Math.sign(lz) || 1;
                bestPen = dz;
                bnx = -b.uz * s;
                bnz = b.ux * s;
              }
            }
            if (bestPen > 0) wallImpulse(t1, bnx, bnz, bestPen);
          }
        }
      }

      /* traffic & parked cars */
      if (cityState.on && spd > 0.4) {
        for (const tc of traffic) {
          if (Math.abs(tc.x - this.pos.x) > 12 || Math.abs(tc.z - this.pos.z) > 12) continue;
          if (this.carOBB(tc.x, tc.z, tc.yaw, tc)) tc.stopT = 1.6;
        }
        for (const pc of parkedCars) {
          if (Math.abs(pc.x - this.pos.x) > 12 || Math.abs(pc.z - this.pos.z) > 12) continue;
          this.carOBB(pc.x, pc.z, pc.yaw, null);
        }
      }

      /* aero */
      eFF.copy(this.vel).multiplyScalar(-DRAG_C * spd);
      eF.add(eFF);
      const dfd = D.dfd * DF_SCALE * spd * spd;
      t1.copy(this.pos).addScaledVector(eFwd, FRONT_AXLE_Z);
      eFF.copy(eUp).multiplyScalar(-dfd * 0.42);
      eF.add(eFF);
      eT.add(t2.crossVectors(t3.copy(t1).sub(this.pos), eFF));
      t1.copy(this.pos).addScaledVector(eFwd, REAR_AXLE_Z);
      eFF.copy(eUp).multiplyScalar(-dfd * 0.58);
      eF.add(eFF);
      eT.add(t2.crossVectors(t3.copy(t1).sub(this.pos), eFF));

      /* integrate */
      this.vel.addScaledVector(eF, dt / MASS);
      if (spd < 0.5 && this.throttle < 0.05 && this.brakeIn < 0.05 && !this.hand) {
        this.vel.multiplyScalar(Math.max(0, 1 - 5 * dt));
      }
      eTL.set(eT.dot(eLeft), eT.dot(eUp), eT.dot(eFwd));
      eAL.copy(eTL).divide(INERTIA);
      t1.set(0, 0, 0).addScaledVector(eLeft, eAL.x).addScaledVector(eUp, eAL.y).addScaledVector(eFwd, eAL.z);
      this.w.addScaledVector(t1, dt).multiplyScalar(Math.max(0, 1 - 0.05 * dt));
      this.pos.addScaledVector(this.vel, dt);
      if (this.pos.y < -50) {
        this.reset();
        return;
      }
      const h = 0.5 * dt;
      eQ.set(this.w.x * h, this.w.y * h, this.w.z * h, 0).multiply(q);
      q.x += eQ.x;
      q.y += eQ.y;
      q.z += eQ.z;
      q.w += eQ.w;
      q.normalize();
      for (let i = 0; i < 4; i++) this.wAngle[i] += this.wSpin[i] * dt;
      this.spd = this.vel.length();
      if (!isFinite(this.pos.x)) this.reset();
    },
  };

  /* ----------------------------------------------------------- skid marks */
  const marks = (() => {
    const MAXQ = 4200;
    const pos = new Float32Array(MAXQ * 12);
    const al = new Float32Array(MAXQ * 4);
    const idx = new Uint32Array(MAXQ * 6);
    for (let i = 0; i < MAXQ; i++) {
      const a = i * 4;
      idx.set([a, a + 1, a + 2, a, a + 2, a + 3], i * 6);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aA", new THREE.BufferAttribute(al, 1));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    const m = new THREE.Mesh(g, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      vertexShader: `attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `varying float vA; void main(){ gl_FragColor = vec4(0.045,0.045,0.05, vA * 0.72); }`,
    }));
    m.frustumCulled = false;
    m.renderOrder = 3;
    scene.add(m);
    let head = 0;
    return {
      st: [0, 1, 2, 3].map(() => ({ on: false, lastL: V3(), lastR: V3() })),
      add(aL: THREE.Vector3, aR: THREE.Vector3, bL: THREE.Vector3, bR: THREE.Vector3, a: number) {
        const o = head * 12;
        const e = head * 4;
        pos.set([aL.x, aL.y, aL.z, aR.x, aR.y, aR.z, bR.x, bR.y, bR.z, bL.x, bL.y, bL.z], o);
        al[e] = al[e + 1] = al[e + 2] = al[e + 3] = a;
        g.attributes.position.needsUpdate = true;
        g.attributes.aA.needsUpdate = true;
        head = (head + 1) % MAXQ;
      },
    };
  })();

  /* -------------------------------------------------------------- smoke FX */
  const softTex = makeTex(64, 64, (x) => {
    const gr = x.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, "rgba(255,255,255,.9)");
    gr.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = gr;
    x.fillRect(0, 0, 64, 64);
  });
  function makeParticles(count: number, colorHex: number, alpha: number) {
    const pos = new Float32Array(count * 3).fill(-9999);
    const size = new Float32Array(count);
    const al = new Float32Array(count);
    const vel = new Float32Array(count * 3);
    const age = new Float32Array(count);
    const dur = new Float32Array(count);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    g.setAttribute("aA", new THREE.BufferAttribute(al, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTex: { value: softTex }, uColor: { value: new THREE.Color(colorHex) }, uAlpha: { value: alpha } },
      vertexShader: `attribute float aSize; attribute float aA; varying float vA;
        void main(){ vA = aA; vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_PointSize = aSize * (200.0 / max(1.0, -mv.z)); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D uTex; uniform vec3 uColor; uniform float uAlpha; varying float vA;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(uColor, t.a * vA * uAlpha); }`,
    });
    const pts = new THREE.Points(g, mat);
    pts.frustumCulled = false;
    pts.renderOrder = 4;
    scene.add(pts);
    let head = 0;
    return {
      spawn(p: THREE.Vector3, v: THREE.Vector3, s: number) {
        const i = head;
        head = (head + 1) % count;
        pos[i * 3] = p.x + rand(-0.2, 0.2);
        pos[i * 3 + 1] = p.y + 0.1;
        pos[i * 3 + 2] = p.z + rand(-0.2, 0.2);
        vel[i * 3] = v.x * 0.4 + rand(-1, 1);
        vel[i * 3 + 1] = v.y * 0.3 + rand(0.8, 2);
        vel[i * 3 + 2] = v.z * 0.4 + rand(-1, 1);
        age[i] = 0;
        dur[i] = rand(0.9, 1.7);
        size[i] = 0.8 * s + 0.5;
      },
      update(dt: number) {
        let dirty = false;
        for (let i = 0; i < count; i++) {
          if (age[i] >= dur[i]) continue;
          dirty = true;
          age[i] += dt;
          if (age[i] >= dur[i]) {
            al[i] = 0;
            pos[i * 3 + 1] = -9999;
            continue;
          }
          pos[i * 3] += vel[i * 3] * dt;
          pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
          pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
          const dmp = Math.max(0, 1 - 1.4 * dt);
          vel[i * 3] *= dmp;
          vel[i * 3 + 2] *= dmp;
          vel[i * 3 + 1] = vel[i * 3 + 1] * dmp + dt;
          const t = age[i] / dur[i];
          al[i] = (1 - t) * 0.38;
          size[i] += dt * 2.6;
        }
        if (dirty) {
          g.attributes.position.needsUpdate = true;
          g.attributes.aSize.needsUpdate = true;
          g.attributes.aA.needsUpdate = true;
        }
      },
    };
  }
  const smoke = makeParticles(320, 0xd8d4cd, 1);
  const spray = makeParticles(260, 0xdfe9f2, 0.8);

  /* ----------------------------------------------------------------- rain */
  const RAIN_N = 1300;
  const rainPos = new Float32Array(RAIN_N * 2 * 3);
  const rainDrop = new Float32Array(RAIN_N * 3);
  const RAIN_R = 26;
  const RAIN_H = 16;
  {
    for (let i = 0; i < RAIN_N; i++) {
      rainDrop[i * 3] = rand(-RAIN_R, RAIN_R);
      rainDrop[i * 3 + 1] = rand(0, RAIN_H);
      rainDrop[i * 3 + 2] = rand(-RAIN_R, RAIN_R);
    }
  }
  const rainGeo = new THREE.BufferGeometry();
  rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPos, 3));
  const rainMat = new THREE.LineBasicMaterial({ color: 0xbcd0e0, transparent: true, opacity: 0.32, depthWrite: false });
  const rain = new THREE.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false;
  rain.visible = false;
  scene.add(rain);

  /* ---------------------------------------------------------- night lamps */
  const lampLights: THREE.PointLight[] = [];
  for (let i = 0; i < 4; i++) {
    const l = new THREE.PointLight(0xffd79a, 0, 34, 1.8);
    l.visible = false;
    scene.add(l);
    lampLights.push(l);
  }
  const lampScratch: { p: THREE.Vector3; d: number }[] = [];

  /* --------------------------------------------------------------- audio */
  let AC: AudioContext | null = null;
  let AN: AudioBuffer | null = null;
  let masterG: GainNode | null = null;
  /* Platform hard mute (CrazyGames settings.muteAudio): wins over the in-game
     volume and over the M key. */
  let hardMute = false;
  let eng: { o1: OscillatorNode; o2: OscillatorNode; og: GainNode; of: BiquadFilterNode } | null = null;
  let windN: { wg: GainNode; wf: BiquadFilterNode } | null = null;
  let skidN: { sg: GainNode; sf: BiquadFilterNode } | null = null;
  let muted = false;
  let skidLevel = 0;
  function initAudio() {
    if (AC) return;
    try {
      AC = new AudioContext();
      masterG = AC.createGain();
      masterG.gain.value = 0.5;
      const comp = AC.createDynamicsCompressor();
      masterG.connect(comp);
      comp.connect(AC.destination);
      const noise = AC.createBuffer(1, AC.sampleRate * 2, AC.sampleRate);
      const nd = noise.getChannelData(0);
      for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
      AN = noise;
      const o1 = AC.createOscillator();
      o1.type = "sawtooth";
      const o2 = AC.createOscillator();
      o2.type = "square";
      const og = AC.createGain();
      og.gain.value = 0;
      const of = AC.createBiquadFilter();
      of.type = "lowpass";
      of.frequency.value = 600;
      of.Q.value = 1.5;
      o1.connect(of);
      o2.connect(of);
      of.connect(og);
      og.connect(masterG);
      o1.start();
      o2.start();
      eng = { o1, o2, og, of };
      const ws = AC.createBufferSource();
      ws.buffer = noise;
      ws.loop = true;
      const wf = AC.createBiquadFilter();
      wf.type = "bandpass";
      wf.frequency.value = 480;
      wf.Q.value = 0.5;
      const wg = AC.createGain();
      wg.gain.value = 0;
      ws.connect(wf);
      wf.connect(wg);
      wg.connect(masterG);
      ws.start();
      windN = { wg, wf };
      const ss = AC.createBufferSource();
      ss.buffer = noise;
      ss.loop = true;
      const sf = AC.createBiquadFilter();
      sf.type = "bandpass";
      sf.frequency.value = 1100;
      sf.Q.value = 1.4;
      const sg = AC.createGain();
      sg.gain.value = 0;
      ss.connect(sf);
      sf.connect(sg);
      sg.connect(masterG);
      ss.start();
      skidN = { sg, sf };
    } catch {
      AC = null;
    }
  }
  function sfxImpact(v: number) {
    if (!AC || muted || !masterG) return;
    const t = AC.currentTime;
    const o = AC.createOscillator();
    o.type = "triangle";
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.14);
    const g = AC.createGain();
    g.gain.setValueAtTime(Math.min(0.9, v), t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    o.connect(g);
    g.connect(masterG);
    o.start(t);
    o.stop(t + 0.25);
    if (!AN) return;
    const ns = AC.createBufferSource();
    ns.buffer = AN;
    const nf = AC.createBiquadFilter();
    nf.type = "lowpass";
    nf.frequency.value = 900;
    const ng = AC.createGain();
    ng.gain.setValueAtTime(Math.min(0.7, v * 0.8), t);
    ng.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    ns.connect(nf);
    nf.connect(ng);
    ng.connect(masterG);
    ns.start(t);
  }
  function audioUpdate() {
    if (!AC || !eng || !windN || !skidN || !masterG) return;
    const t = AC.currentTime;
    const mute = muted || paused || hardMute;
    const rn = car.rpm / 8000;
    eng.o1.frequency.setTargetAtTime(38 + rn * 205, t, 0.04);
    eng.o2.frequency.setTargetAtTime(19 + rn * 102, t, 0.04);
    eng.of.frequency.setTargetAtTime(240 + rn * 2500, t, 0.06);
    eng.og.gain.setTargetAtTime(mute ? 0 : 0.04 + car.throttle * 0.07 + rn * 0.045, t, 0.09);
    windN.wg.gain.setTargetAtTime(mute ? 0 : Math.min(0.16, car.spd * 0.0032), t, 0.15);
    skidN.sg.gain.setTargetAtTime(mute ? 0 : skidLevel * 0.16, t, 0.06);
    skidN.sf.frequency.setTargetAtTime(800 + car.spd * 14, t, 0.1);
    masterG.gain.setTargetAtTime(muted || hardMute ? 0 : 0.5, t, 0.1);
  }

  /* ----------------------------------------------------------- environment */
  function updateEnvironment(full: boolean) {
    const el = ((envState.time - 6) / 12) * Math.PI;
    const az = 1.15;
    SUN_DIR.set(Math.cos(az) * Math.cos(el), Math.sin(el), Math.sin(az) * Math.cos(el)).normalize();
    const day = sstep(-0.04, 0.22, SUN_DIR.y);
    const night = 1 - day;
    const dusk = Math.exp(-Math.pow((SUN_DIR.y - 0.03) / 0.11, 2));
    const overcast = envState.weather === "overcast" ? 1 : envState.weather === "rain" ? 0.85 : 0;
    envState.day = day;
    envState.night = night;
    envState.wet = envState.weather === "rain" ? 1 : envState.weather === "overcast" ? 0.22 : 0;

    skyUniforms.sunDir.value.copy(SUN_DIR);
    skyUniforms.uDay.value = day;
    skyUniforms.uDusk.value = dusk * (1 - overcast * 0.7);
    skyUniforms.uNight.value = night;
    skyUniforms.uOvercast.value = overcast;

    sun.position.copy(car.pos).addScaledVector(SUN_DIR, 210);
    sun.target.position.copy(car.pos);
    sun.intensity = 2.15 * day * (1 - 0.6 * overcast) + 0.16 * night;
    const sunCol = new THREE.Color();
    if (SUN_DIR.y > 0.18) sunCol.setHex(0xfff2df);
    else sunCol.setHex(0xffb271);
    sunCol.lerp(new THREE.Color(0x9fb4d8), night);
    sun.color.copy(sunCol);

    hemi.intensity = 0.16 + 0.42 * day;
    hemi.color.setHex(0xbccfe6).lerp(new THREE.Color(0x22304a), night);
    hemi.groundColor.setHex(0x77754c).lerp(new THREE.Color(0x14161c), night);

    const horizon = new THREE.Color();
    horizon.setHex(0xe6d7ae).lerp(new THREE.Color(0x0b0e16), night);
    if (dusk > 0.2) horizon.lerp(new THREE.Color(0xe08a4a), dusk * 0.6 * (1 - overcast));
    if (overcast > 0) horizon.lerp(new THREE.Color(0x9aa0a6).multiplyScalar(0.25 + 0.75 * day), overcast * 0.75);
    fog.color.copy(horizon);
    const near = envState.weather === "rain" ? 110 : envState.weather === "overcast" ? 170 : 340;
    const far = envState.weather === "rain" ? 720 : envState.weather === "overcast" ? 1000 : 1600;
    fog.near = near * (0.55 + 0.45 * day);
    fog.far = far * (0.6 + 0.4 * day);
    renderer.toneMappingExposure = 0.95 + 0.35 * night;

    /* lamp, facade and signal emissives are driven by city.update() */

    /* wet tarmac */
    for (const m of asphaltMats) {
      m.roughness = 0.96 - 0.5 * envState.wet;
      m.metalness = 0.14 * envState.wet;
      m.envMapIntensity = 0.35 + 0.85 * envState.wet;
    }
    rain.visible = envState.weather === "rain";
    rainMat.opacity = 0.3;

    if (headlightsAuto) headlightsOn = SUN_DIR.y < 0.06 || envState.weather !== "clear";
    updateLampLights();
    if (full) scheduleEnvironmentRebuild();
  }

  /* Debounced: dragging the time-of-day slider must not rebuild the IBL every frame. */
  let envTimer = 0;
  function scheduleEnvironmentRebuild() {
    if (envTimer) window.clearTimeout(envTimer);
    envTimer = window.setTimeout(() => {
      envTimer = 0;
      rebuildEnvironment();
    }, 160);
  }

  function updateLampLights() {
    /* the street lamps belong to the procedural city: an imported map has no
       lamp list, so they go dark instead of glowing in mid-air */
    const strength = cityState.on ? envState.night * 90 : 0;
    if (strength < 1) {
      for (const l of lampLights) l.visible = false;
      return;
    }
    lampScratch.length = 0;
    for (const p of lampPoints) {
      const d = (p.x - car.pos.x) ** 2 + (p.z - car.pos.z) ** 2;
      if (d < 60 * 60) lampScratch.push({ p, d });
    }
    lampScratch.sort((a, b) => a.d - b.d);
    for (let i = 0; i < lampLights.length; i++) {
      const l = lampLights[i];
      const s = lampScratch[i];
      if (!s) {
        l.visible = false;
        continue;
      }
      l.visible = true;
      l.position.set(s.p.x, s.p.y, s.p.z);
      l.intensity = strength;
    }
  }

  /* ------------------------------------------------------------ player car */
  function mountPlayer(kind: VehicleKind) {
    imported = null;
    bodyPaintMats = [];
    if (player) {
      carGroup.remove(player.root);
      for (const r of player.rigs) carGroup.remove(r.pivot);
      player.root.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh) m.geometry.dispose();
      });
    }
    const built = buildVehicle(kind, paintHex, true);
    player = built;
    carGroup.add(built.root);
    built.root.position.y = -built.gy;
    built.rigs.forEach((rig) => {
      rig.pivot.parent?.remove(rig.pivot);
      rig.pivot.position.set(rig.x, REST_WY, rig.z);
      carGroup.add(rig.pivot);
    });
    /* headlights */
    const [hl, hr] = built.headAnchors;
    headL.position.set(hl.x, hl.y - built.gy, hl.z - 0.1);
    headR.position.set(hr.x, hr.y - built.gy, hr.z - 0.1);
    headTL.position.set(hl.x, hl.y - built.gy, hl.z + 34);
    headTR.position.set(hr.x, hr.y - built.gy, hr.z + 34);
    const [tl, tr] = built.tailAnchors;
    tailGlowL.position.set(tl.x, tl.y - built.gy, tl.z);
    tailGlowR.position.set(tr.x, tr.y - built.gy, tr.z);
  }

  function setVehicle(kind: VehicleKind) {
    applyCarSpec(kind);
    mountPlayer(kind);
    car.reset();
    opts.onReady?.(spec);
  }

  function applyPaint(hex: number) {
    paintHex = hex;
    if (player) (player.materials.paint as THREE.MeshPhysicalMaterial).color.setHex(hex);
    for (const m of bodyPaintMats) m.color.setHex(hex);
  }

  /* ----------------------------------------------------------- camera rigs */
  const CAMS = ["Chase", "Cockpit", "Hood", "Bumper", "Cinema", "Orbit"];
  let camMode = 0;
  let orbYaw = 0.6;
  let orbPitch = 0.35;
  let orbDist = 9;
  let dragging = false;
  let lx = 0;
  let ly = 0;
  const camPos = V3(0, 2.6, -8);
  const camLook = V3(0, 0.8, 0);
  const framePrevVel = V3();
  const accV = V3();

  function updateCamera(dt: number) {
    const up = eUp.set(0, 1, 0).applyQuaternion(car.quat);
    const fwd = eFwd.set(0, 0, 1).applyQuaternion(car.quat);
    const spd = car.spd;
    const shake = clamp((spd - 26) / 60, 0, 1) * 0.05;
    const gy = player ? player.gy : GROUND_LIFT + RAD;
    if (camMode === 0) {
      t1.copy(fwd).multiplyScalar(-(6.6 + spd * 0.06));
      t2.copy(up).multiplyScalar(2.5 + spd * 0.012);
      t3.copy(car.pos).add(t1).add(t2);
      camPos.lerp(t3, 1 - Math.exp(-dt * 5));
      const g = groundH(camPos.x, camPos.z) + 0.6;
      if (camPos.y < g) camPos.y = g;
      camera.position.copy(camPos);
      if (shake > 0) {
        camera.position.x += (Math.random() - 0.5) * shake;
        camera.position.y += (Math.random() - 0.5) * shake * 0.5;
        camera.position.z += (Math.random() - 0.5) * shake;
      }
      t1.copy(car.pos).addScaledVector(up, 1.0).addScaledVector(fwd, 2.4);
      camLook.lerp(t1, 1 - Math.exp(-dt * 10));
      camera.lookAt(camLook);
      camera.fov = 62 + clamp(spd - 18, 0, 50) * 0.22;
      camera.updateProjectionMatrix();
    } else if (camMode === 1) {
      const eyeY = spec.height * 0.78 - gy;
      camera.position.copy(car.pos).addScaledVector(up, eyeY).addScaledVector(eLeft.set(1, 0, 0).applyQuaternion(car.quat), 0.36 * (spec.width / 1.9));
      camera.position.addScaledVector(fwd, 0.12);
      t1.copy(car.pos).addScaledVector(fwd, 22).addScaledVector(up, eyeY + 0.1);
      camera.lookAt(t1);
      camera.fov = 74;
      camera.updateProjectionMatrix();
      camPos.copy(camera.position);
      camLook.copy(t1);
    } else if (camMode === 2) {
      camera.position.copy(car.pos).addScaledVector(up, spec.height * 0.52 - gy).addScaledVector(fwd, spec.length * 0.18);
      if (shake > 0) {
        camera.position.y += (Math.random() - 0.5) * shake * 0.6;
        camera.position.x += (Math.random() - 0.5) * shake * 0.4;
      }
      t1.copy(car.pos).addScaledVector(fwd, 14).addScaledVector(up, spec.height * 0.5 - gy);
      camera.lookAt(t1);
      camera.fov = 70;
      camera.updateProjectionMatrix();
      camPos.copy(camera.position);
      camLook.copy(t1);
    } else if (camMode === 3) {
      camera.position.copy(car.pos).addScaledVector(up, 0.42 - gy).addScaledVector(fwd, spec.length / 2 - 0.05);
      t1.copy(car.pos).addScaledVector(fwd, 16).addScaledVector(up, 0.42 - gy);
      camera.lookAt(t1);
      camera.fov = 68;
      camera.updateProjectionMatrix();
      camPos.copy(camera.position);
      camLook.copy(t1);
    } else if (camMode === 4) {
      const yaw = orbYaw + uTime.value * 0.22;
      const dist = Math.max(8, spec.length * 1.7);
      const cy = Math.cos(0.32);
      t1.set(Math.sin(yaw) * cy, 0.32, Math.cos(yaw) * cy).multiplyScalar(dist);
      camera.position.copy(car.pos).add(t1).addScaledVector(up, 0.5);
      const g = groundH(camera.position.x, camera.position.z) + 0.45;
      if (camera.position.y < g) camera.position.y = g;
      camera.lookAt(t2.copy(car.pos).addScaledVector(up, 0.5));
      camera.fov = 50;
      camera.updateProjectionMatrix();
      camPos.copy(camera.position);
      camLook.copy(car.pos);
    } else {
      if (!dragging) orbYaw += dt * 0.08;
      const cy = Math.cos(orbPitch);
      const sy = Math.sin(orbPitch);
      t1.set(Math.sin(orbYaw) * cy, sy, Math.cos(orbYaw) * cy).multiplyScalar(orbDist);
      camera.position.copy(car.pos).add(t1).addScaledVector(up, 0.4);
      const g = groundH(camera.position.x, camera.position.z) + 0.4;
      if (camera.position.y < g) camera.position.y = g;
      camera.lookAt(t2.copy(car.pos).addScaledVector(up, 0.6));
      camera.fov = 55;
      camera.updateProjectionMatrix();
      camPos.copy(camera.position);
      camLook.copy(car.pos);
    }
  }

  /* ------------------------------------------------------------- HUD draw */
  const tctx = cluster.getContext("2d") as CanvasRenderingContext2D;
  cluster.width = 232;
  cluster.height = 132;
  const gctx = gmeter.getContext("2d") as CanvasRenderingContext2D;
  gmeter.width = 118;
  gmeter.height = 118;
  const gTrail: [number, number][] = [];
  let gLatS = 0;
  let gLonS = 0;
  let driftDeg = 0;
  let driftPts = 0;
  /* Rewarded-ad bonus: 1 normally, 2 while a player is on a boost. */
  let scoreMultiplier = 1;
  let lastSurf = "TARMAC";

  function drawTach() {
    const W = 232;
    const H = 132;
    const cx = 116;
    const cy = 126;
    const R = 104;
    tctx.clearRect(0, 0, W, H);
    const a0 = Math.PI * 0.78;
    const a1 = Math.PI * 2.22;
    const amap = (r: number) => a0 + (a1 - a0) * clamp(r / 8000, 0, 1);
    tctx.lineWidth = 7;
    tctx.strokeStyle = "rgba(255,255,255,.10)";
    tctx.beginPath();
    tctx.arc(cx, cy, R, a0, a1);
    tctx.stroke();
    tctx.strokeStyle = "#ff6a2a";
    tctx.beginPath();
    tctx.arc(cx, cy, R, amap(7200), a1);
    tctx.stroke();
    tctx.font = "600 9px 'IBM Plex Mono', ui-monospace, monospace";
    tctx.textAlign = "center";
    tctx.textBaseline = "middle";
    for (let k = 0; k <= 8; k++) {
      const a = amap(k * 1000);
      const c = Math.cos(a);
      const s = Math.sin(a);
      tctx.strokeStyle = k >= 7 ? "#ff6a2a" : "rgba(236,233,226,.75)";
      tctx.lineWidth = k % 2 ? 1 : 2;
      tctx.beginPath();
      tctx.moveTo(cx + c * (R - 5), cy + s * (R - 5));
      tctx.lineTo(cx + c * (R - 14), cy + s * (R - 14));
      tctx.stroke();
      tctx.fillStyle = k >= 7 ? "#ff6a2a" : "#96928a";
      tctx.fillText(String(k), cx + c * (R - 25), cy + s * (R - 25));
    }
    const a = amap(car.rpm);
    const c = Math.cos(a);
    const s = Math.sin(a);
    tctx.strokeStyle = "#ece9e2";
    tctx.lineWidth = 2.6;
    tctx.beginPath();
    tctx.moveTo(cx - c * 10, cy - s * 10);
    tctx.lineTo(cx + c * (R - 18), cy + s * (R - 18));
    tctx.stroke();
    tctx.fillStyle = "#ff6a2a";
    tctx.beginPath();
    tctx.arc(cx, cy, 4, 0, TAU);
    tctx.fill();
    tctx.fillStyle = "#ece9e2";
    tctx.font = "700 32px Rajdhani, system-ui, sans-serif";
    tctx.fillText(String(Math.round(car.spd * 3.6)), cx, cy - 34);
    tctx.fillStyle = "#96928a";
    tctx.font = "500 9px 'IBM Plex Mono', ui-monospace, monospace";
    tctx.fillText("KM/H", cx, cy - 15);
    tctx.fillStyle = "#ff6a2a";
    tctx.font = "700 16px Rajdhani, system-ui, sans-serif";
    tctx.fillText(car.mode === "R" ? "R" : `D${car.gear}`, cx, cy + 2);
  }

  function drawGMeter() {
    const W = 118;
    const cx = 59;
    const cy = 59;
    const SC = 40;
    gctx.clearRect(0, 0, W, W);
    gctx.strokeStyle = "rgba(255,255,255,.12)";
    gctx.lineWidth = 1;
    for (const r of [0.5, 1, 1.5]) {
      gctx.beginPath();
      gctx.arc(cx, cy, r * SC, 0, TAU);
      gctx.stroke();
    }
    gctx.beginPath();
    gctx.moveTo(cx - 4, cy);
    gctx.lineTo(cx + 4, cy);
    gctx.moveTo(cx, cy - 4);
    gctx.lineTo(cx, cy + 4);
    gctx.stroke();
    gTrail.push([gLatS, gLonS]);
    if (gTrail.length > 45) gTrail.shift();
    for (let i = 0; i < gTrail.length; i++) {
      const [px, py] = gTrail[i];
      gctx.fillStyle = `rgba(143,184,204,${(i / gTrail.length) * 0.5})`;
      gctx.fillRect(cx + px * SC - 1, cy - py * SC - 1, 2, 2);
    }
    gctx.fillStyle = "#ff6a2a";
    gctx.beginPath();
    gctx.arc(cx + clamp(gLatS, -1.6, 1.6) * SC, cy - clamp(gLonS, -1.6, 1.6) * SC, 3.4, 0, TAU);
    gctx.fill();
  }

  /* ---------------------------------------------------------------- state */
  let paused = false;
  let stopped = false;
  let avgFps = 60;
  let topSpeed = 0;
  let best0to100: number | null = null;
  let distance = 0;
  let sessionSeconds = 0;
  let perfT = 0;
  let stopT = 0;
  let telAcc = 0;
  let lastTelPaint = paintHex;
  let volume = 0.5;

  /* ---------------------------------------------------------------- input */
  function typingInField() {
    const el = document.activeElement as HTMLElement | null;
    if (!el) return false;
    const tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
  }
  function handleKey(e: KeyboardEvent) {
    /* typing a room code must never drive the car */
    const fld = e.target as HTMLElement | null;
    if (fld && (fld.tagName === "INPUT" || fld.tagName === "TEXTAREA" || fld.isContentEditable)) return;
    initAudio();
    if (AC && AC.state === "suspended") void AC.resume();
    if (typingInField()) return;
    if (e.code === "Digit1") return setMode(0);
    if (e.code === "Digit2") return setMode(1);
    if (e.code === "Digit3") return setMode(2);
    if (e.code === "Digit4") return setMode(3);
    if (e.code === "KeyN") {
      headlightsAuto = false;
      headlightsOn = !headlightsOn;
      onToast(headlightsOn ? "Headlights on" : "Headlights off");
      return;
    }
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) e.preventDefault();
    keys[e.code] = true;
    if (e.code === "KeyC") {
      camMode = (camMode + 1) % CAMS.length;
      onToast(`Camera · ${CAMS[camMode]}`);
    }
    if (e.code === "KeyR") {
      car.reset();
      resetCones();
      onToast("Reset to start line");
    }
    if (e.code === "KeyM") {
      muted = !muted;
      onToast(muted ? "Sound off" : "Sound on");
    }
    if (e.code === "KeyP") {
      setPaused(!paused);
    }
  }
  function onKeyUp(e: KeyboardEvent) {
    keys[e.code] = false;
  }
  function onBlur() {
    for (const k of Object.keys(keys)) keys[k] = false;
    dragging = false;
  }
  function onPointerDown(e: PointerEvent) {
    initAudio();
    if (AC && AC.state === "suspended") void AC.resume();
    if (typingInField()) return;
    dragging = true;
    lx = e.clientX;
    ly = e.clientY;
  }
  function onPointerMove(e: PointerEvent) {
    if (!dragging) return;
    orbYaw -= (e.clientX - lx) * 0.006;
    orbPitch = clamp(orbPitch + (e.clientY - ly) * 0.005, -0.15, 1.25);
    lx = e.clientX;
    ly = e.clientY;
  }
  function onPointerUp() {
    dragging = false;
  }
  function onWheel(e: WheelEvent) {
    orbDist = clamp(orbDist + e.deltaY * 0.008, 4.5, 26);
  }
  function onResize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  function onContextLost(e: Event) {
    e.preventDefault();
  }

  window.addEventListener("keydown", handleKey, { capture: true });
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("blur", onBlur);
  window.addEventListener("pointerdown", onPointerDown, { capture: true });
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("resize", onResize);
  canvas.addEventListener("webglcontextlost", onContextLost, { passive: false });

  /* ------------------------------------------------------------------- API */
  function setMode(i: number) {
    dmode = clamp(i | 0, 0, 3);
    const d = DMODES[dmode];
    assists = d.assist;
    onToast(`Mode · ${d.name} · grip ${(d.muT * spec.grip).toFixed(2)}`);
  }
  function setPaused(p: boolean) {
    paused = p;
    for (const k of Object.keys(keys)) keys[k] = false;
    onToast(p ? "Paused" : "Back on the road");
  }
  function applyWeather(w: Weather) {
    envState.weather = w;
    updateEnvironment(true);
    onToast(w === "rain" ? "Rain · grip reduced" : w === "overcast" ? "Overcast sky" : "Clear sky");
  }
  function setTimeOfDay(h: number) {
    envState.time = ((h % 24) + 24) % 24;
    updateEnvironment(true);
  }

  /* =====================================================================
   *  LIBRARY CARS — the only cars in the game.
   *
   *  Players pick from the library in src/game/carmodels.ts and can change
   *  nothing else: there is no file import and no url box. A model arrives
   *  knowing nothing about being a car — wheels are just nodes somewhere in
   *  the hierarchy and the units are arbitrary — so it is measured, turned
   *  nose-forward, and its wheels are re-parented onto the real rigs so they
   *  steer, spin and take suspension travel instead of sliding about as a
   *  static prop. Its physics come from the entry's own spec block.
   * ===================================================================*/
  const AXIS_Y = V3(0, 1, 0);
  let modelLoaderInstance: GLTFLoader | null = null;
  function modelLoader(): GLTFLoader {
    if (!modelLoaderInstance) {
      const draco = new DRACOLoader();
      /* the decoder ships in /public/draco, so there is no CDN round trip */
      draco.setDecoderPath(new URL("draco/gltf/", document.baseURI).href);
      modelLoaderInstance = new GLTFLoader();
      modelLoaderInstance.setDRACOLoader(draco);
    }
    return modelLoaderInstance;
  }

  interface RigJoint {
    pivot: THREE.Group;
    orient: THREE.Group;
    /** hub position and wheel orientation in raw model space */
    x: number;
    y: number;
    z: number;
    quat: THREE.Quaternion;
    scale: THREE.Vector3;
  }
  interface ImportedModel {
    holder: THREE.Group;
    label: string;
    yaw: number;
    scale: number;
    /** raw-space point that must land on the car's origin */
    centre: THREE.Vector3;
    /** raw-space height that must land on the wheel centre line */
    yRef: number;
    joints: RigJoint[];
    measured: { length: number; width: number; height: number; wheelbase: number; track: number; wheelR: number };
  }
  let imported: ImportedModel | null = null;
  let bodyPaintMats: THREE.MeshStandardMaterial[] = [];

  const PAINT_MAT = /paint|body_?colou?r|shell|exterior|koerper|carroceria/i;
  const NOT_PAINT_MAT = /glass|window|chrome|trim|light|lamp|brake|tire|tyre|rim|interior|leather|seat|mirror|plate|panel|badge|logo|grill|wiper|exhaust|carpet|fabric|rubber|metal/i;
  const HEAD_MAT = /headlight|head_?lamp|projector|front_?light|lights?_front/i;
  const TAIL_MAT = /tail_?light|tail_?lamp|rear_?light|lights?_rear/i;
  const BRAKE_MAT = /brake_?light|stop_?lamp/i;
  const REVERSE_MAT = /reverse|backup/i;

  const dummyMat = (color: number, emissive = 0x000000, intensity = 0) =>
    new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: intensity });

  /** The model's own materials, keyed by lower-cased name. */
  function materialsByName(root: THREE.Object3D) {
    const map = new Map<string, THREE.MeshStandardMaterial>();
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      const list = Array.isArray(m.material) ? m.material : [m.material];
      for (const mat of list) {
        const std = mat as THREE.MeshStandardMaterial;
        if (!std || !std.name) continue;
        const key = std.name.toLowerCase();
        if (!map.has(key)) map.set(key, std);
      }
    });
    return map;
  }
  const findMat = (map: Map<string, THREE.MeshStandardMaterial>, re: RegExp) => {
    for (const [k, m] of map) if (re.test(k)) return m;
    return null;
  };

  /** Frees a model's geometry, materials and textures. */
  function disposeModel(root: THREE.Object3D) {
    const KEYS = [
      "map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap", "aoMap", "alphaMap",
      "clearcoatMap", "clearcoatNormalMap", "clearcoatRoughnessMap", "sheenColorMap",
      "sheenRoughnessMap", "specularMap", "specularColorMap", "iridescenceMap",
      "transmissionMap", "thicknessMap", "lightMap",
    ];
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.geometry?.dispose();
      const list = Array.isArray(m.material) ? m.material : [m.material];
      for (const mat of list) {
        const std = mat as unknown as Record<string, unknown>;
        if (!std) continue;
        for (const k of KEYS) {
          const tex = std[k] as THREE.Texture | undefined;
          if (tex && tex.isTexture) tex.dispose();
        }
        (std as unknown as THREE.Material).dispose?.();
      }
    });
  }

  /** Places the model and its wheels, honouring any manual flip. */
  function layoutImported() {
    const imp = imported;
    if (!imp) return;
    const s = imp.scale;
    const yaw = imp.yaw;
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const rx = (x: number, z: number) => x * cy + z * sy;
    const rz = (x: number, z: number) => -x * sy + z * cy;
    imp.holder.rotation.y = yaw;
    imp.holder.scale.setScalar(s);
    const cx = imp.centre.x * s;
    const cz = imp.centre.z * s;
    /* wheels on the ride-height line, body centred over them */
    imp.holder.position.set(-rx(cx, cz), REST_WY - imp.yRef * s, -rz(cx, cz));
    const qy = new THREE.Quaternion().setFromAxisAngle(AXIS_Y, yaw);
    imp.joints.forEach((j, i) => {
      const jx = j.x * s;
      const jz = j.z * s;
      j.pivot.position.set(rx(jx, jz), REST_WY, rz(jx, jz));
      j.orient.quaternion.copy(qy).multiply(j.quat);
      j.orient.scale.copy(j.scale).multiplyScalar(s);
      const rig = player?.rigs[i];
      if (rig) {
        rig.x = j.pivot.position.x;
        rig.z = j.pivot.position.z;
      }
    });
  }

  /** Hub, radius and box of each candidate node, in the holder's frame. */
  function wheelSamplesOf(nodes: THREE.Object3D[]) {
    const samples: WheelSample[] = [];
    const boxes: THREE.Box3[] = [];
    for (const o of nodes) {
      const box = new THREE.Box3().setFromObject(o);
      const hub = box.getCenter(V3());
      samples.push({
        id: samples.length, name: o.name, x: hub.x, y: hub.y, z: hub.z,
        radius: Math.max(0.002, (box.max.y - box.min.y) / 2),
      });
      boxes.push(box);
    }
    return { samples, boxes };
  }

  /**
   * No usable wheel names: find four round things low in the car instead of
   * leaving it planted on a rigid body with no wheels at all.
   */
  function wheelsByShape(root: THREE.Object3D, raw: THREE.Box3) {
    const boxes = subtreeBoxes(root);
    const nodes: THREE.Object3D[] = [];
    root.traverse((o) => {
      if (o === root) return;
      const b = boxes.get(o);
      if (b && !b.isEmpty()) nodes.push(o);
    });
    const pool = nodes.map((o, i) => {
      const b = boxes.get(o) as THREE.Box3;
      return {
        index: i,
        min: [b.min.x, b.min.y, b.min.z] as [number, number, number],
        max: [b.max.x, b.max.y, b.max.z] as [number, number, number],
      };
    });
    const picked = detectWheels(pool, {
      min: [raw.min.x, raw.min.y, raw.min.z],
      max: [raw.max.x, raw.max.y, raw.max.z],
    });
    if (!picked || picked.some((i) => i === null)) return null;
    const chosen = (picked as number[]).map((i) => nodes[i]).filter(Boolean);
    return chosen.length === 4 ? chosen : null;
  }

  /**
   * Takes a loaded glTF scene and makes it the player's car: measures it,
   * rigs the wheels it can find, and hands the physics a spec from the model.
   */
  function installModel(scene: THREE.Object3D, label: string, carSpec: VehicleSpec, load: CarLoadOptions = {}): string {
    /* ---- 1. measure the untouched model on an identity stage ---------- */
    const holder = new THREE.Group();
    holder.add(scene);
    const stage = new THREE.Group();
    stage.add(holder);
    stage.updateMatrixWorld(true);
    const raw = new THREE.Box3().setFromObject(holder);
    if (raw.isEmpty() || !isFinite(raw.min.x)) throw new Error("Model has no geometry");
    const rawSize = raw.getSize(V3());

    /* ---- 2. which nodes are wheels ------------------------------------ */
    const named: THREE.Object3D[] = [];
    holder.traverse((o) => {
      if (!o.name || !parseWheelName(o.name)) return;
      for (let a = o.parent; a && a !== holder; a = a.parent) {
        if (a.name && parseWheelName(a.name)) return; /* inner rim, disc, nut… */
      }
      named.push(o);
    });
    const modelBox = {
      min: [raw.min.x, raw.min.y, raw.min.z] as [number, number, number],
      max: [raw.max.x, raw.max.y, raw.max.z] as [number, number, number],
    };
    let { samples, boxes } = wheelSamplesOf(named);
    let wheelNodes = named;
    let plan = samples.length >= 4 ? planRig(samples, modelBox) : null;
    let byShape = false;

    /* plenty of downloads call their wheels `Object_37`: look for four round
       things low in the car rather than leave it planted on a rigid body */
    if (!plan) {
      const found = wheelsByShape(holder, raw);
      if (found) {
        const s2 = wheelSamplesOf(found);
        samples = s2.samples;
        boxes = s2.boxes;
        wheelNodes = found;
        plan = null;
        byShape = true;
      }
    }
    let wheelBoxes = boxes;

    /* the owner's own correction, applied to the body and to the wheels'
       roles together, so a car turned around still steers from its nose */
    const { yaw, slots, metrics } = decideRig(samples, plan, load);

    /* ---- 3. size it so the wheels meet the physics -------------------- */
    const baseSpec = carSpec;
    const horizontal = Math.max(rawSize.x, rawSize.z);
    let scale = plan && plan.wheelbase > 0.01
      ? baseSpec.wheelbase / plan.wheelbase
      : baseSpec.length / Math.max(1e-3, horizontal);
    if (!isFinite(scale) || scale <= 0) scale = baseSpec.length / Math.max(1e-3, horizontal);
    scale = clamp(scale, 1e-3, 400);

    /* measure again in the final frame, so numbers match what is drawn */
    const fit = new THREE.Group();
    fit.rotation.y = yaw;
    fit.scale.setScalar(scale);
    fit.add(holder);
    fit.updateMatrixWorld(true);
    const sized = new THREE.Box3().setFromObject(holder);
    const size = sized.getSize(V3());

    /* ---- 4. rig the wheels ------------------------------------------- */
    const joints: RigJoint[] = [];
    const rigs: WheelRig[] = [];
    for (let i = 0; i < 4; i++) {
      const id = slots[i];
      if (id === null || !wheelNodes[id]) continue;
      const node = wheelNodes[id];
      const sample = samples[id];
      const box = wheelBoxes[id];
      const quat = new THREE.Quaternion();
      const sc = V3();
      const at = V3();
      node.updateWorldMatrix(true, false);
      node.matrixWorld.decompose(at, quat, sc);
      /* put the tyre's centre on the spin axis, not merely its origin */
      const local = box.getCenter(V3()).applyMatrix4(node.matrixWorld.clone().invert()).negate();
      const pivot = new THREE.Group();
      pivot.userData.wheelRig = true;
      const spin = new THREE.Group();
      spin.userData.wheelSpin = true;
      const orient = new THREE.Group();
      pivot.add(spin);
      spin.add(orient);
      orient.add(node);
      node.position.copy(local);
      node.quaternion.identity();
      node.scale.set(1, 1, 1);
      joints.push({ pivot, orient, x: sample.x, y: sample.y, z: sample.z, quat, scale: sc.clone() });
      rigs.push({
        pivot, spin, front: i < 2, x: sample.x * scale, z: sample.z * scale,
        radius: sample.radius * scale,
        width: Math.max(0.05, Math.min(box.max.x - box.min.x, box.max.z - box.min.z) * 0.5 * scale),
      });
    }

    /* ---- 5. the car the physics drives ------------------------------- */
    const measured = sanitiseMeasured({
      length: size.z,
      width: size.x,
      height: size.y,
      wheelbase: metrics ? metrics.wheelbase * scale : baseSpec.wheelbase,
      track: metrics ? metrics.track * scale : baseSpec.track,
      /* with no wheels to measure, the preset keeps its own radius: the model's
         own bottom is placed on the road by measurement anyway, so nothing
         sinks — only the suspension travel stays as the preset had it */
      wheelR: metrics ? metrics.wheelR * scale : baseSpec.wheelR,
    });
    const derived: VehicleSpec = {
      ...baseSpec, name: label,
      length: measured.length, width: measured.width, height: measured.height,
      wheelbase: measured.wheelbase, track: measured.track, wheelR: measured.wheelR,
    };
    applySpecObject(derived);

    /* ---- 6. paint and the model's own lamps -------------------------- */
    const mats = materialsByName(scene);
    bodyPaintMats = [];
    for (const [key, m] of mats) {
      if (!PAINT_MAT.test(key) || NOT_PAINT_MAT.test(key)) continue;
      bodyPaintMats.push(m);
      m.color.setHex(paintHex);
      if ("clearcoat" in m) {
        const phys = m as THREE.MeshPhysicalMaterial;
        phys.clearcoat = Math.max(0.55, phys.clearcoat ?? 0);
        phys.clearcoatRoughness = Math.min(0.14, phys.clearcoatRoughness ?? 0.1);
      }
    }
    const light = (re: RegExp, emissive: number) => {
      const found = findMat(mats, re);
      if (found) {
        found.emissive.setHex(emissive);
        found.emissiveIntensity = 0.12;
        return found;
      }
      return dummyMat(0x16181c, emissive, 0);
    };
    const materials: VehicleMaterials = {
      paint: bodyPaintMats[0] ?? dummyMat(paintHex),
      glass: findMat(mats, /glass|window/i) ?? dummyMat(0x22303c),
      trim: findMat(mats, /trim|plastic|rubber|rubberised/i) ?? dummyMat(0x2a2c30),
      chrome: findMat(mats, /chrome|metal/i) ?? dummyMat(0xb9c0c6),
      tyre: findMat(mats, /tire|tyre/i) ?? dummyMat(0x14161a),
      rim: findMat(mats, /rim|alloy/i) ?? dummyMat(0x9aa2a8),
      caliper: findMat(mats, /caliper|disc|brake/i) ?? dummyMat(0xa8352a),
      head: light(HEAD_MAT, 0xfff4e0),
      tail: light(TAIL_MAT, 0xff2a10),
      brake: light(BRAKE_MAT, 0xff2a10),
      reverse: light(REVERSE_MAT, 0xfff8f0),
      plate: findMat(mats, /plate|licen/i) ?? dummyMat(0xe8e4d8),
      cabin: findMat(mats, /interior|leather|carpet|dash|seat/i) ?? dummyMat(0x1d1f24),
    };

    /* ---- 7. mount it ------------------------------------------------- */
    if (player) {
      carGroup.remove(player.root);
      disposeModel(player.root);
      for (const r of player.rigs) {
        carGroup.remove(r.pivot);
        disposeModel(r.pivot);
      }
    }
    carGroup.add(holder);
    for (const r of rigs) carGroup.add(r.pivot);

    const hz = measured.length / 2 - 0.12;
    const hx = measured.track * 0.36;
    const hy = REST_WY + measured.wheelR * 0.8;
    headL.position.set(hx, hy, hz - 0.05);
    headR.position.set(-hx, hy, hz - 0.05);
    headTL.position.set(hx, hy, hz + 32);
    headTR.position.set(-hx, hy, hz + 32);
    tailGlowL.position.set(hx, hy, -hz);
    tailGlowR.position.set(-hx, hy, -hz);

    /* centre the body on the wheelbase, not the bounding box, so the drawn
       wheels land exactly on the axles the physics integrates */
    const centre = V3();
    if (plan && joints.length) {
      centre.set(
        joints.reduce((a, j) => a + j.x, 0) / joints.length, 0,
        joints.reduce((a, j) => a + j.z, 0) / joints.length,
      );
    } else {
      raw.getCenter(centre);
      centre.y = 0;
    }
    const yRef = joints.length >= 3
      ? joints.reduce((a, j) => a + j.y, 0) / joints.length
      : raw.min.y + measured.wheelR / scale;
    player = {
      root: holder, rigs, steering: null, materials, spec: derived,
      gy: GROUND_LIFT + measured.wheelR,
      headAnchors: [headL.position.clone(), headR.position.clone()],
      tailAnchors: [tailGlowL.position.clone(), tailGlowR.position.clone()],
    };
    imported = { holder, label, yaw, scale, centre, yRef, joints, measured };
    layoutImported();
    car.reset();
    opts.onReady?.(derived);

    const dims = `${measured.length.toFixed(2)} × ${measured.width.toFixed(2)} m`;
    if (rigs.length === 4) {
      return `Rigged 4 wheels · ${measured.wheelbase.toFixed(2)} m wheelbase · ${dims}`;
    }
    if (rigs.length) {
      const how = byShape ? "found by shape" : "found by name";
      return `Rigged ${rigs.length} wheels (${how}) · ${measured.wheelbase.toFixed(2)} m wheelbase · ${dims}`;
    }
    return `Loaded rigid · no wheels found · ${dims}`;
  }

  /** Downloads a library car with progress and installs it. */
  async function loadCar(url: string, label: string, carSpec: VehicleSpec, load: CarLoadOptions = {}): Promise<string> {
    if (!url) throw new Error("This car has no model file");
    onToast(`Downloading ${label}…`);
    let data: ArrayBuffer;
    try {
      const res = await fetch(url, { mode: "cors", credentials: "omit" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const total = Number(res.headers.get("content-length") ?? 0);
      if (res.body && total > 1_500_000) {
        const reader = res.body.getReader();
        const chunks: Uint8Array[] = [];
        let got = 0;
        let shown = -1;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            chunks.push(value);
            got += value.length;
            const pct = Math.round((got / total) * 100);
            if (pct !== shown) {
              shown = pct;
              onToast(`${label} · ${pct}%`);
            }
          }
        }
        const merge = new Uint8Array(got);
        let off = 0;
        for (const c of chunks) {
          merge.set(c, off);
          off += c.length;
        }
        data = merge.buffer;
      } else {
        data = await res.arrayBuffer();
      }
    } catch (err) {
      throw new Error(`Download failed: ${err instanceof Error ? err.message : String(err)}`);
    }
    const scene = await new Promise<THREE.Group>((resolve, reject) => {
      modelLoader().parse(data, "", (g) => resolve(g.scene as THREE.Group), reject);
    });
    const report = installModel(scene, label, carSpec, load);
    onToast(report);
    return report;
  }

  /* --------------------------------------------------------------- the loop */
  const STEP = 1 / 240;
  let acc = 0;
  let last = performance.now();
  let raf = 0;

  function updateTraffic(dt: number) {
    if (!traffic.length || !cityState.on) return;
    const px = car.pos.x;
    const pz = car.pos.z;
    for (const t of traffic) {
      let block = false;
      if (city.lightBlocks(t.x, t.z, t.axis, t.dir, t.speed)) block = true;
      {
        const dx = px - t.x;
        const dz = pz - t.z;
        const f = t.axis === "z" ? dz * t.dir : dx * t.dir;
        const l = t.axis === "z" ? dx : dz;
        if (f > 0 && f < 16 && Math.abs(l) < 3.4) block = true;
      }
      if (!block) {
        for (const o of traffic) {
          if (o === t || o.axis !== t.axis || o.street !== t.street || o.dir !== t.dir) continue;
          const f = t.axis === "z" ? (o.z - t.z) * t.dir : (o.x - t.x) * t.dir;
          const l = t.axis === "z" ? o.x - t.x : o.z - t.z;
          if (f > 0 && f < 9 && Math.abs(l) < 2.6) {
            block = true;
            break;
          }
        }
      }
      if (t.stopT > 0) {
        t.stopT -= dt;
        t.speed = Math.max(0, t.speed - 9 * dt);
      } else t.speed += clamp((block ? 0 : t.vmax) - t.speed, -7 * dt, 3 * dt);
      if (t.axis === "z") {
        t.z += t.dir * t.speed * dt;
        t.x = t.street + t.lane;
      } else {
        t.x += t.dir * t.speed * dt;
        t.z = t.street + t.lane;
      }
      const coord = t.axis === "z" ? t.z : t.x;
      if (Math.abs(coord) > 584) {
        t.dir *= -1;
        t.lane = -t.lane;
      }
      if (t.speed > 1) {
        const along = t.axis === "z" ? t.z : t.x;
        for (const s of STREETS) {
          if (Math.abs(along - s) < 0.9 && t.lastS !== s) {
            t.lastS = s;
            if (Math.random() < 0.3) {
              t.axis = t.axis === "z" ? "x" : "z";
              t.street = s;
              t.dir = Math.random() < 0.5 ? 1 : -1;
              t.lane = t.axis === "z" ? -3.5 * t.dir : 3.5 * t.dir;
              if (t.axis === "z") {
                t.x = s + t.lane;
                t.z = s;
              } else {
                t.z = s + t.lane;
                t.x = s;
              }
            }
            break;
          } else if (Math.abs(along - s) > 6 && t.lastS === s) t.lastS = null;
        }
      }
      const ty = t.axis === "z" ? (t.dir > 0 ? 0 : Math.PI) : (t.dir > 0 ? Math.PI / 2 : -Math.PI / 2);
      let d = ty - t.yaw;
      while (d > Math.PI) d -= TAU;
      while (d < -Math.PI) d += TAU;
      t.yaw += d * Math.min(1, dt * 4);
      t.grp.position.set(t.x, 0.03, t.z);
      t.grp.rotation.y = t.yaw;
      const dw = (t.speed / RAD) * dt;
      for (const spin of t.spins) spin.rotation.x += dw;
    }
  }

  const cq = new THREE.Quaternion();
  const cL = V3();
  const cN = V3();
  const cT = V3();
  const IDENT = new THREE.Quaternion();
  function stepCones(dt: number) {
    for (const c of cones) {
      c.cool -= dt;
      c.v.y -= 9.81 * dt;
      cT.copy(c.v).multiplyScalar(dt);
      c.p.add(cT);
      if (c.cw.lengthSq() > 1e-4) {
        const ang = c.cw.length() * dt;
        cN.copy(c.cw).multiplyScalar(1 / c.cw.length());
        cq.setFromAxisAngle(cN, ang);
        c.q.premultiply(cq).normalize();
        c.cw.multiplyScalar(Math.max(0, 1 - 0.8 * dt));
      }
      cL.copy(c.p).sub(car.pos);
      cL.applyQuaternion(cq.copy(car.quat).conjugate());
      const hx = CAR_HX;
      const hz = CAR_HZ;
      if (cL.y > -0.6 && cL.y < 0.9 && Math.abs(cL.x) < hx && Math.abs(cL.z) < hz) {
        const px = hx - Math.abs(cL.x);
        const pz = hz - Math.abs(cL.z);
        let nx = 0;
        let nz = 0;
        if (px < pz) {
          nx = Math.sign(cL.x) || 1;
          cL.x = nx * hx;
        } else {
          nz = Math.sign(cL.z) || 1;
          cL.z = nz * hz;
        }
        cN.set(nx, 0, nz).applyQuaternion(car.quat);
        cL.applyQuaternion(car.quat).add(car.pos);
        c.p.copy(cL);
        const sp = car.vel.length();
        if (sp > 1 && c.cool <= 0) {
          c.v.copy(car.vel).multiplyScalar(0.75).addScaledVector(cN, 1.5 + sp * 0.15);
          c.v.y += rand(1.5, 3.5);
          c.cw.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(Math.min(sp * 1.2, 9));
          c.cool = 0.35;
          sfxImpact(clamp(sp * 0.03, 0.08, 0.35));
        }
      }
      const gh = groundH(c.p.x, c.p.z);
      if (c.p.y < gh) {
        c.p.y = gh;
        if (c.v.y < 0) c.v.y *= -0.3;
        const f = Math.max(0, 1 - 4 * dt);
        c.v.x *= f;
        c.v.z *= f;
        c.cw.multiplyScalar(Math.max(0, 1 - 4 * dt));
        if (c.v.lengthSq() < 0.3) c.q.slerp(IDENT, Math.min(1, dt * 2.5));
      }
      if (cityState.on) {
        const b = blockAt(c.p.x, c.p.z);
        if (b) {
          for (const bd of b.blds) {
            const dx = c.p.x - bd.x;
            const dz = c.p.z - bd.z;
            const px = bd.hx - Math.abs(dx);
            const pz = bd.hz - Math.abs(dz);
            if (px > 0 && pz > 0 && c.p.y < bd.top) {
              if (px < pz) {
                c.p.x = bd.x + (Math.sign(dx) || 1) * bd.hx;
                c.v.x *= -0.25;
              } else {
                c.p.z = bd.z + (Math.sign(dz) || 1) * bd.hz;
                c.v.z *= -0.25;
              }
            }
          }
        }
      }
      c.mesh.position.copy(c.p);
      c.mesh.quaternion.copy(c.q);
    }
  }

  const smokeAcc = [0, 0, 0, 0];
  function updateVisuals(dt: number) {
    carGroup.position.copy(car.pos);
    carGroup.quaternion.copy(car.quat);
    if (player) {
      for (let i = 0; i < Math.min(4, player.rigs.length); i++) {
        const rig = player.rigs[i];
        const wc = car.wc[i];
        const wy = HARD_Y - (REST - (wc.contact ? Math.min(wc.comp, REST) : REST));
        rig.pivot.position.y = wy;
        rig.pivot.rotation.y = WHEELS[i].steer ? car.ack[i] : 0;
        rig.spin.rotation.x = car.wAngle[i];
      }
      if (player.steering) player.steering.rotation.z = -car.steerAngle * 3.1;
      const M = player.materials;
      const braking = car.brakeIn > 0.1 || car.hand;
      M.brake.emissiveIntensity = braking ? 3.2 : 0.55;
      M.tail.emissiveIntensity = envState.night > 0.4 || braking ? 0.9 : 0.5;
      M.head.emissiveIntensity = headlightsOn ? 2.6 : 0.12;
      M.reverse.emissiveIntensity = car.mode === "R" ? 1.7 : 0;
      headL.intensity = headR.intensity = headlightsOn ? 110 : 0;
      tailGlowL.intensity = tailGlowR.intensity = braking ? 6 * (0.4 + 0.6 * envState.night) : 0;
    }
    sun.position.copy(car.pos).addScaledVector(SUN_DIR, 210);
    sun.target.position.copy(car.pos);
    sky.position.copy(camera.position);

    skidLevel = 0;
    const spd = car.spd;
    for (let i = 0; i < 4; i++) {
      const wc = car.wc[i];
      const st = marks.st[i];
      if (wc.contact && spd > 3) {
        const sliding = wc.s > 0.95 || (car.hand && WHEELS[i].driven && spd > 3);
        if (sliding && wc.surf === "TARMAC") {
          const hw = WHEELS[i].driven ? 0.15 : 0.12;
          t1.copy(wc.cp).addScaledVector(wc.wR, -hw);
          t2.copy(wc.cp).addScaledVector(wc.wR, hw);
          if (!st.on) {
            st.on = true;
            st.lastL.copy(t1);
            st.lastR.copy(t2);
          } else if (st.lastL.distanceToSquared(t1) > 0.07) {
            marks.add(st.lastL, st.lastR, t1, t2, clamp(0.12 + (wc.s - 0.95) * 0.22, 0.12, 0.55));
            st.lastL.copy(t1);
            st.lastR.copy(t2);
          }
        } else st.on = false;
        const sl = clamp((wc.s - 1) / 1.5, 0, 1);
        if (sl > skidLevel) skidLevel = sl;
        let rate = 0;
        if (wc.s > 1.05 && spd > 4) rate = Math.min(22, (wc.s - 1) * 9);
        if (car.hand && WHEELS[i].driven && spd > 4) rate = Math.max(rate, 10);
        if (wc.surf === "GRASS" && spd > 6) rate = Math.max(rate, spd * 0.18);
        smokeAcc[i] += dt * rate * TIERS[qualityTier].particles;
        while (smokeAcc[i] >= 1) {
          smokeAcc[i] -= 1;
          smoke.spawn(wc.cp, car.vel, spd * 0.055);
        }
        if (envState.wet > 0.5 && spd > 12 && TIERS[qualityTier].particles > 0.4) {
          const sprayRate = Math.min(30, spd * 0.35);
          if (Math.random() < dt * sprayRate) spray.spawn(wc.cp, car.vel, 0.06 + spd * 0.004);
        }
      } else {
        st.on = false;
        smokeAcc[i] = 0;
      }
    }

    accV.copy(car.vel).sub(framePrevVel).divideScalar(Math.max(dt, 1e-3));
    const left = eLeft.set(1, 0, 0).applyQuaternion(car.quat);
    const fwd = eFwd.set(0, 0, 1).applyQuaternion(car.quat);
    const rawLat = accV.dot(left) / 9.81;
    const rawLon = accV.dot(fwd) / 9.81;
    gLatS += (rawLat - gLatS) * 0.25;
    gLonS += (rawLon - gLonS) * 0.25;
    const vl = car.vel.dot(left);
    const vf = car.vel.dot(fwd);
    driftDeg = spd > 4 ? Math.abs(Math.atan2(vl, Math.abs(vf))) * 57.3 : 0;
    for (let i = 0; i < 4; i++) if (car.wc[i].contact) lastSurf = car.wc[i].surf;
    if (driftDeg > 12 && spd > 6)
      driftPts += driftDeg * dt * 8 * (1 + driftDeg / 40) * scoreMultiplier;
  }

  function updateRain(dt: number) {
    if (!rain.visible) return;
    const cx = car.pos.x;
    const cz = car.pos.z;
    const cy = car.pos.y;
    for (let i = 0; i < RAIN_N; i++) {
      let x = rainDrop[i * 3];
      let y = rainDrop[i * 3 + 1];
      let z = rainDrop[i * 3 + 2];
      y -= dt * 24;
      x += dt * 3.2;
      if (y < cy - 8) y += RAIN_H;
      if (x > cx + RAIN_R) x -= RAIN_R * 2;
      if (x < cx - RAIN_R) x += RAIN_R * 2;
      if (z > cz + RAIN_R) z -= RAIN_R * 2;
      if (z < cz - RAIN_R) z += RAIN_R * 2;
      rainDrop[i * 3] = x;
      rainDrop[i * 3 + 1] = y;
      rainDrop[i * 3 + 2] = z;
      const o = i * 6;
      rainPos[o] = x;
      rainPos[o + 1] = y;
      rainPos[o + 2] = z;
      rainPos[o + 3] = x + 0.06;
      rainPos[o + 4] = y - 0.9;
      rainPos[o + 5] = z;
    }
    rainGeo.attributes.position.needsUpdate = true;
  }

  function pushTelemetry() {
    const slip = car.wc.map((w) => w.s);
    const load = car.wc.map((w) => w.Fs);
    const t: Telemetry = {
      speedKph: car.spd * 3.6,
      rpm: car.rpm,
      gear: car.mode === "R" ? "R" : `D${car.gear}`,
      modeIndex: dmode,
      surface: lastSurf,
      driftDeg,
      driftPoints: driftPts,
      combo: 1 + driftDeg / 40,
      gLat: gLatS,
      gLon: gLonS,
      heat: car.heat.slice(),
      slip,
      load,
      fps: avgFps,
      quality: qualityMode === -1 ? `AUTO / ${QUALITY_NAMES[qualityTier]}` : QUALITY_NAMES[qualityTier],
      headlights: headlightsOn,
      camera: camMode,
      weather: envState.weather,
      timeOfDay: envState.time,
      wet: envState.wet,
      kind: spec.kind,
      paint: lastTelPaint,
      traffic: traffic.length,
      peers: peersOnline,
      topSpeedKph: topSpeed * 3.6,
      best0to100,
      distanceKm: distance / 1000,
      physicsHz: 240,
    };
    onTelemetry(t);
  }

  function frame(now: number) {
    if (stopped) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (dt > 0) avgFps += (1 / dt - avgFps) * 0.02;

    /* automatic quality: step down when it sags, back up when it is easy,
       and never thrash — each step holds for a few seconds */
    if (qualityMode === -1) {
      qualityHold = Math.max(0, qualityHold - dt);
      if (qualityHold === 0) {
        if (avgFps < 44 && qualityTier > 0) {
          applyQuality(qualityTier - 1);
          qualityHold = 4;
          fastFor = 0;
        } else if (avgFps > 57 && qualityTier < TIERS.length - 1) {
          fastFor += dt;
          if (fastFor > 6) {
            applyQuality(qualityTier + 1);
            qualityHold = 8;
            fastFor = 0;
          }
        } else {
          fastFor = 0;
        }
      }
    }
    uTime.value = now * 0.001;
    framePrevVel.copy(car.vel);
    if (worldMap) mapRefY = car.pos.y;

    if (!paused) {
      city.update(dt, envState.night, envState.wet);
      if (cityState.on) updateTraffic(dt);
      acc += dt;
      let n = 0;
      while (acc >= STEP && n++ < 12) {
        car.step(STEP);
        stepCones(STEP);
        acc -= STEP;
      }
      sessionSeconds += dt;
      distance += car.spd * dt;
      if (car.spd > topSpeed) topSpeed = car.spd;
      const kmh = car.spd * 3.6;
      if (kmh < 2) {
        stopT += dt;
        if (stopT > 0.6) perfT = 0;
      } else {
        stopT = 0;
        perfT += dt;
        if (best0to100 === null && kmh >= 100 && perfT < 20) best0to100 = perfT;
      }
      if (avgFps < 25 && traffic.length > 6 && now % 15000 < 20) {
        const drop = Math.ceil(traffic.length / 3);
        for (let k = 0; k < drop; k++) {
          const tc = traffic.pop();
          if (tc) scene.remove(tc.grp);
        }
        onToast("Performance mode · traffic reduced");
      }
    }

    updateVisuals(dt);
    updateRemoteDrivers(dt);
    updateCamera(dt);
    updateRain(dt);
    smoke.update(dt);
    spray.update(dt);
    if (!paused && envState.night > 0.05 && Math.random() < 0.06) updateLampLights();
    drawTach();
    drawGMeter();
    audioUpdate();
    telAcc += dt;
    if (telAcc > 0.1) {
      telAcc = 0;
      lastTelPaint = paintHex;
      pushTelemetry();
    }
    renderer.render(scene, camera);
  }

  /* =====================================================================
   *  IMPORTED WORLD MAPS
   *
   *  A city model is downloaded, opened (GLB, FBX, or a .zip holding either
   *  one plus its texture folder), measured, stretched to a sane size, laid
   *  on the ground, and then read exactly once into a drivable height field
   *  (./mapbuild). From then on the physics samples that field: it never has
   *  to touch the model's millions of triangles at 240 Hz.
   * ===================================================================*/
  const MAP_CELL = 4;
  const MAP_WALL_H = 2.2;
  /** past this many triangles the model stops casting shadows (it is huge) */
  const MAP_SHADOW_TRI_LIMIT = 900000;

  function bufferOf(bytes: Uint8Array) {
    return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
  }

  /** Every triangle of a loaded model, in world space, as a flat array. */
  function collectTriangles(root: THREE.Object3D) {
    root.updateMatrixWorld(true);
    let count = 0;
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh || !m.geometry) return;
      const pos = m.geometry.getAttribute("position");
      if (!pos) return;
      const index = m.geometry.getIndex();
      count += Math.floor((index ? index.count : pos.count) / 3);
    });
    const out = new Float32Array(count * 9);
    const v = new THREE.Vector3();
    let w = 0;
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh || !m.geometry) return;
      const pos = m.geometry.getAttribute("position") as THREE.BufferAttribute | undefined;
      if (!pos) return;
      const index = m.geometry.getIndex();
      const n = index ? index.count : pos.count;
      for (let i = 0; i + 2 < n; i += 3) {
        for (let k = 0; k < 3; k++) {
          const vi = index ? index.getX(i + k) : i + k;
          v.fromBufferAttribute(pos, vi).applyMatrix4(m.matrixWorld);
          out[w++] = v.x;
          out[w++] = v.y;
          out[w++] = v.z;
        }
      }
    });
    return out;
  }

  /** A GLB of a city is a lot of geometry: shadows are the first thing to go. */
  function dressMapModel(root: THREE.Object3D, heavy: boolean) {
    dressScene(root);
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.receiveShadow = true;
      m.castShadow = !heavy;
      const list = Array.isArray(m.material) ? m.material : [m.material];
      for (const mat of list) {
        const std = mat as THREE.MeshStandardMaterial;
        if (std && (std as unknown as { isMeshStandardMaterial?: boolean }).isMeshStandardMaterial) {
          std.envMapIntensity = 0.35;
        }
      }
    });
  }

  /** Download with a progress figure, streamed a chunk at a time. */
  async function fetchWithProgress(url: string, onProgress?: (p: number, note: string) => void) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`the map came back with ${res.status}`);
    if (!res.body) return new Uint8Array(await res.arrayBuffer());
    const total = Number(res.headers.get("content-length") ?? 0);
    const reader = res.body.getReader();
    const chunks: Uint8Array[] = [];
    let got = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;
      chunks.push(value);
      got += value.length;
      if (total) {
        const pct = Math.min(0.7, (got / total) * 0.7);
        onProgress?.(pct, `downloading ${(got / 1048576).toFixed(0)} / ${(total / 1048576).toFixed(0)} MB`);
      }
    }
    const all = new Uint8Array(got);
    let off = 0;
    for (const c of chunks) {
      all.set(c, off);
      off += c.length;
    }
    return all;
  }

  function gltfWith(manager?: THREE.LoadingManager) {
    const draco = new DRACOLoader();
    draco.setDecoderPath(new URL("draco/gltf/", document.baseURI).href);
    const loader = manager ? new GLTFLoader(manager) : new GLTFLoader();
    loader.setDRACOLoader(draco);
    return loader;
  }

  /**
   * Get an Object3D out of whatever the owner uploaded. A zip is unpacked in
   * the browser and its files are handed to the loader through a URL modifier,
   * which is what lets an FBX or glTF find its textures by name no matter how
   * the folders were arranged inside the archive.
   */
  async function openMapFile(source: WorldMapSource, onProgress?: (p: number, note: string) => void) {
    const blobs: string[] = [];

    if (source.kind === "zip") {
      const bytes = await fetchWithProgress(source.url, onProgress);
      onProgress?.(0.72, "unpacking the archive");
      const entries = unzipSync(bytes);
      const files = new Map<string, Uint8Array>();
      const paths = Object.keys(entries);
      for (const path of paths) {
        if (path.endsWith("/") || !entries[path] || entries[path].length === 0) continue;
        const base = (path.split("/").pop() ?? "").toLowerCase();
        if (base && !files.has(base)) files.set(base, entries[path]);
      }
      const manager = new THREE.LoadingManager();
      manager.setURLModifier((url) => {
        const base = decodeURIComponent((url.split("?")[0].split("/").pop() ?? "")).toLowerCase();
        const hit = files.get(base);
        if (!hit) return url;
        const blob = URL.createObjectURL(new Blob([bufferOf(hit)]));
        blobs.push(blob);
        return blob;
      });
      const find = (ext: string) => paths.find((n) => n.toLowerCase().endsWith(ext) && entries[n]?.length);
      const glb = find(".glb");
      if (glb) {
        const gltf = await gltfWith(manager).parseAsync(bufferOf(entries[glb]), "");
        return { object: gltf.scene as THREE.Object3D, blobs };
      }
      const fbx = find(".fbx");
      if (fbx) {
        const obj = new FBXLoader(manager).parse(bufferOf(entries[fbx]), "");
        return { object: obj as THREE.Object3D, blobs };
      }
      const gltfFile = find(".gltf");
      if (gltfFile) {
        const json = new TextDecoder().decode(entries[gltfFile]);
        const gltf = await gltfWith(manager).parseAsync(json, "");
        return { object: gltf.scene as THREE.Object3D, blobs };
      }
      throw new Error("no .glb, .fbx or .gltf inside that archive");
    }

    if (source.kind === "fbx") {
      const obj = await new FBXLoader().loadAsync(source.url, (e) => {
        if (e.total) onProgress?.(0.1 + 0.6 * (e.loaded / e.total), "downloading");
      });
      return { object: obj as THREE.Object3D, blobs };
    }

    const gltf = await gltfWith().loadAsync(source.url, (e) => {
      if (e.total) onProgress?.(0.1 + 0.6 * (e.loaded / e.total), "downloading");
    });
    return { object: gltf.scene as THREE.Object3D, blobs };
  }

  function freeWorldMap() {
    const w = worldMap;
    worldMap = null;
    if (!w) return;
    scene.remove(w.root);
    disposeModel(w.root);
    for (const url of w.blobs) URL.revokeObjectURL(url);
  }

  function showProceduralWorld() {
    worldRoot.visible = true;
    cityState.on = true;
    mapRefY = 0;
    cityCarsDone = false;
    populateCityCars();
  }

  /** Put the car down at the map's start line (or the city's). */
  function respawn() {
    const sp = worldMap?.spawn;
    mapRefY = REST_HEIGHT + 0.4;
    if (sp) {
      car.pos.set(sp.x, mapRefY, sp.z);
      car.quat.setFromAxisAngle(YUP, sp.yaw);
    } else {
      car.pos.set(0, REST_HEIGHT, -12);
      car.quat.setFromAxisAngle(YUP, 0);
    }
    car.vel.set(0, 0, 0);
    car.w.set(0, 0, 0);
    car.reset();
    mapRefY = car.pos.y;
    /* put the camera where it belongs instead of flying it across the map */
    const f = V3(0, 0, 1).applyQuaternion(car.quat);
    camPos.set(car.pos.x - f.x * 7.5, car.pos.y + 3.2, car.pos.z - f.z * 7.5);
    const g = groundH(camPos.x, camPos.z) + 0.6;
    if (camPos.y < g) camPos.y = g;
    camLook.copy(car.pos);
  }

  /** Drop an imported map in place of the built city. */
  async function loadWorldMap(
    source: WorldMapSource,
    onProgress?: (p: number, note: string) => void,
  ): Promise<string> {
    if (isProcedural(source)) {
      unloadWorldMap();
      return "APEX CITY · the built-in city";
    }
    freeWorldMap();
    const started = performance.now();
    onProgress?.(0.02, "opening");
    const opened = await openMapFile(source, onProgress);
    const object = opened.object;
    if (!object) throw new Error("that file has no scene in it");

    onProgress?.(0.78, "measuring");
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const span = Math.max(size.x, size.z) || 1;
    const scale = source.fitTo > 0 ? source.fitTo / span : 1;
    const root = new THREE.Group();
    root.add(object);
    object.scale.setScalar(scale);
    object.rotation.y = THREE.MathUtils.degToRad(source.turn || 0);
    root.updateMatrixWorld(true);
    /* centre it on the origin and sit it on the ground */
    const placed = new THREE.Box3().setFromObject(root);
    const centre = placed.getCenter(new THREE.Vector3());
    root.position.set(-centre.x, -placed.min.y, -centre.z);
    root.updateMatrixWorld(true);

    /* the built city stands down while an imported one is on the road */
    scene.add(root);
    worldRoot.visible = false;
    cityState.on = false;
    for (const t of traffic) scene.remove(t.grp);
    traffic.length = 0;
    cityCarsDone = false;

    onProgress?.(0.86, "reading the streets");
    const tris = collectTriangles(root);
    const field = buildMapField(tris, {
      cell: source.cell > 0 ? source.cell : MAP_CELL,
      wallHeight: source.wallHeight > 0 ? source.wallHeight : MAP_WALL_H,
    });
    const spawn = source.spawn ?? findSpawn(field);
    worldMap = { source, root, field, spawn, blobs: opened.blobs };
    dressMapModel(root, field.stats.triangles > MAP_SHADOW_TRI_LIMIT);
    /* nothing in it ever moves: freeze the whole matrix tree */
    root.updateMatrixWorld(true);
    root.traverse((o) => {
      o.matrixAutoUpdate = false;
    });
    respawn();
    onProgress?.(1, "ready");

    const st = field.stats;
    return `${source.name} · ${st.sizeX.toFixed(0)} × ${st.sizeZ.toFixed(0)} m of streets · ` +
      `${st.walls} walls · built in ${Math.round(performance.now() - started)} ms`;
  }

  /** Go back to the built-in city. */
  function unloadWorldMap() {
    freeWorldMap();
    showProceduralWorld();
    respawn();
  }

  /* ------------------------------------------------------------- bootstrap */
  applyCarSpec(spec.kind);
  mountPlayer(spec.kind);
  car.pos.set(0, REST_HEIGHT, -12);
  car.reset();
  updateEnvironment(true);
  rebuildEnvironment();
  applyQuality(2);
  populateCityCars();
  onResize();
  raf = requestAnimationFrame(frame);
  opts.onReady?.(spec);

  return {
    destroy() {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", handleKey, { capture: true });
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("pointerdown", onPointerDown, { capture: true });
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      try {
        AC?.close();
      } catch {
        /* ignore */
      }
      pmrem.dispose();
      renderer.dispose();
    },
    setVehicle,
    setMode,
    setCamera(i: number) {
      camMode = clamp(i | 0, 0, CAMS.length - 1);
      onToast(`Camera · ${CAMS[camMode]}`);
    },
    setTimeOfDay,
    setWeather: applyWeather,
    setPaint: applyPaint,
    setHeadlights(on: boolean) {
      headlightsAuto = false;
      headlightsOn = on;
    },
    setPaused,
    setQuality,
    reset() {
      respawn();
      resetCones();
    },
    loadCar,
    loadWorldMap,
    unloadWorldMap,
    setRemoteDrivers,
    netSnapshot,
    setVolume(v: number) {
      volume = clamp(v, 0, 1);
      muted = volume <= 0.01;
      if (masterG && AC) masterG.gain.setTargetAtTime(volume, AC.currentTime, 0.1);
    },
    /* The platform setting takes priority over anything set in the game. */
    setAudioMuted(on: boolean) {
      hardMute = on;
      if (masterG && AC) masterG.gain.setTargetAtTime(on ? 0 : 0.5, AC.currentTime, 0.1);
    },
    setScoreMultiplier(m: number) {
      scoreMultiplier = clamp(m, 1, 8);
    },
    sessionStats() {
      return {
        topSpeedKph: topSpeed * 3.6,
        best0to100,
        distanceKm: distance / 1000,
        driftPoints: driftPts,
        kind: spec.kind,
        car: spec.name,
        seconds: sessionSeconds,
      };
    },
  };
}
