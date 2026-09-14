import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  buildFleetTemplate, buildVehicle, cloneFleetVehicle, GROUND_LIFT, PAINT_COLORS,
  randomTrafficKind, VEHICLES,
  type FleetTemplate, type VehicleBuild, type VehicleKind, type VehicleSpec,
} from "./vehicles";
import {
  CITY_R, STREETS, WALK_H, blockAt, buildCity, cityH, cityState, onStreet,
} from "./city";
import type { GameHandle, GameOptions, Telemetry, Weather } from "./types";

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

  let mapField: { x0: number; z0: number; x1: number; z1: number; nx: number; nz: number; h: Float32Array } | null = null;
  function mapH(x: number, z: number): number | null {
    if (!mapField) return null;
    const F = mapField;
    const fx = (x - F.x0) / (F.x1 - F.x0);
    const fz = (z - F.z0) / (F.z1 - F.z0);
    if (fx < 0 || fx >= 1 || fz < 0 || fz >= 1) return null;
    const gx = fx * (F.nx - 1);
    const gz = fz * (F.nz - 1);
    const ix = Math.min(F.nx - 2, gx | 0);
    const iz = Math.min(F.nz - 2, gz | 0);
    const tx = gx - ix;
    const tz = gz - iz;
    const h00 = F.h[iz * F.nx + ix];
    const h10 = F.h[iz * F.nx + ix + 1];
    const h01 = F.h[(iz + 1) * F.nx + ix];
    const h11 = F.h[(iz + 1) * F.nx + ix + 1];
    return h00 * (1 - tx) * (1 - tz) + h10 * tx * (1 - tz) + h01 * (1 - tx) * tz + h11 * tx * tz;
  }
  function worldH(x: number, z: number) {
    const mh = mapH(x, z);
    if (mh !== null) {
      const F = mapField as NonNullable<typeof mapField>;
      const edge = Math.min(Math.min(x - F.x0, F.x1 - x), Math.min(z - F.z0, F.z1 - z));
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
    scene.add(m);
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
    scene.add(road);

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
      scene.add(new THREE.Mesh(gg, paintMat));
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
    scene.add(dash);
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
  const parkSpots = city.parkSpots;
  const parkedCarSpots = city.parkedCarSpots;
  const lampPoints = city.lampPoints;
  scene.add(cityRoot);

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
    scene.add(ring);
    const cross = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 56), paintMat);
    cross.rotation.x = -Math.PI / 2;
    cross.position.y = 0.06;
    scene.add(cross);
    const cross2 = cross.clone();
    cross2.rotation.z = Math.PI / 2;
    scene.add(cross2);
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
      scene.add(m);
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
      scene.add(m);
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
      scene.add(m);
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
    spec = VEHICLES[kind];
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

      /* buildings */
      if (cityState.on) {
        for (const p of BODYPTS) {
          t1.copy(p).applyQuaternion(q).add(this.pos);
          const b = blockAt(t1.x, t1.z);
          if (!b || !b.blds.length) continue;
          for (const bd of b.blds) {
            if (t1.y > bd.top) continue;
            const dx = t1.x - bd.x;
            const dz = t1.z - bd.z;
            const px = bd.hx - Math.abs(dx);
            const pz = bd.hz - Math.abs(dz);
            if (px <= 0 || pz <= 0) continue;
            t2.copy(t1).sub(this.pos);
            t3.copy(this.vel).add(t4.crossVectors(this.w, t2));
            let nx = 0;
            let nz = 0;
            if (px < pz) nx = Math.sign(dx) || 1;
            else nz = Math.sign(dz) || 1;
            const vn = t3.x * nx + t3.z * nz;
            let Fn = Math.min(px, pz) * 250000 + (vn < 0 ? -vn * 9000 : 0);
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
    const mute = muted || paused;
    const rn = car.rpm / 8000;
    eng.o1.frequency.setTargetAtTime(38 + rn * 205, t, 0.04);
    eng.o2.frequency.setTargetAtTime(19 + rn * 102, t, 0.04);
    eng.of.frequency.setTargetAtTime(240 + rn * 2500, t, 0.06);
    eng.og.gain.setTargetAtTime(mute ? 0 : 0.04 + car.throttle * 0.07 + rn * 0.045, t, 0.09);
    windN.wg.gain.setTargetAtTime(mute ? 0 : Math.min(0.16, car.spd * 0.0032), t, 0.15);
    skidN.sg.gain.setTargetAtTime(mute ? 0 : skidLevel * 0.16, t, 0.06);
    skidN.sf.frequency.setTargetAtTime(800 + car.spd * 14, t, 0.1);
    masterG.gain.setTargetAtTime(muted ? 0 : 0.5, t, 0.1);
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
    const strength = envState.night * 90;
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

  async function importCar(file: File) {
    if (!file) return "No file";
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (ext !== "glb" && ext !== "gltf") throw new Error(`Unsupported format .${ext} (use .glb)`);
    if (file.size > 150 * 1024 * 1024) throw new Error("File larger than 150 MB");
    const loader = new GLTFLoader();
    const data = ext === "glb" ? await file.arrayBuffer() : await file.text();
    const gltf = await new Promise<{ scene: THREE.Group }>((res, rej) => {
      loader.parse(data as ArrayBuffer, "", (g) => res(g as unknown as { scene: THREE.Group }), rej);
    });
    const root = gltf.scene;
    if (!root) throw new Error("Empty model");
    const wheels: THREE.Object3D[] = [];
    root.traverse((o) => {
      const n = (o.name || "").toLowerCase();
      if (/(wheel|whl|tire|tyre|rim)/.test(n) && /fl|fr|rl|rr|front|rear|left|right/.test(n)) wheels.push(o);
    });
    root.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(root);
    const size = bb.getSize(V3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (!isFinite(maxDim) || maxDim <= 1e-4) throw new Error("Empty model");
    root.scale.multiplyScalar(spec.length / maxDim);
    root.updateMatrixWorld(true);
    const bb2 = new THREE.Box3().setFromObject(root);
    const c = bb2.getCenter(V3());
    const min = bb2.min.clone();
    root.position.x -= c.x;
    root.position.z -= c.z;
    root.position.y += REST_WY - RAD + 0.02 - min.y;
    root.updateMatrixWorld(true);
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.castShadow = true;
        m.receiveShadow = false;
        const mat = m.material as THREE.MeshStandardMaterial;
        if (mat && "envMapIntensity" in mat) mat.envMapIntensity = 0.85;
      }
    });
    if (player) {
      carGroup.remove(player.root);
      for (const r of player.rigs) carGroup.remove(r.pivot);
    }
    carGroup.add(root);
    player = null;
    onToast(`Imported ${file.name.slice(0, 26)}`);
    return wheels.length ? "Imported (wheels detected)" : "Imported";
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
      for (let i = 0; i < 4; i++) {
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
        smokeAcc[i] += dt * rate;
        while (smokeAcc[i] >= 1) {
          smokeAcc[i] -= 1;
          smoke.spawn(wc.cp, car.vel, spd * 0.055);
        }
        if (envState.wet > 0.5 && spd > 12) {
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
    if (driftDeg > 12 && spd > 6) driftPts += driftDeg * dt * 8 * (1 + driftDeg / 40);
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
      headlights: headlightsOn,
      camera: camMode,
      weather: envState.weather,
      timeOfDay: envState.time,
      wet: envState.wet,
      kind: spec.kind,
      paint: lastTelPaint,
      traffic: traffic.length,
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
    uTime.value = now * 0.001;
    framePrevVel.copy(car.vel);

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

  /* ------------------------------------------------------------- bootstrap */
  applyCarSpec(spec.kind);
  mountPlayer(spec.kind);
  car.pos.set(0, REST_HEIGHT, -12);
  car.reset();
  updateEnvironment(true);
  rebuildEnvironment();
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
    reset() {
      car.reset();
      resetCones();
    },
    importCar,
    setVolume(v: number) {
      volume = clamp(v, 0, 1);
      muted = volume <= 0.01;
      if (masterG && AC) masterG.gain.setTargetAtTime(volume, AC.currentTime, 0.1);
    },
    sessionStats() {
      return {
        topSpeedKph: topSpeed * 3.6,
        best0to100,
        distanceKm: distance / 1000,
        driftPoints: driftPts,
        kind: spec.kind,
        seconds: sessionSeconds,
      };
    },
  };
}
