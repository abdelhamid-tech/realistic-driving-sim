import * as THREE from "three";
import { junctionPhase, type LampState } from "./city";

/* =====================================================================
 *  STREET DRESSING
 *
 *  What makes a junction read as a junction, and tarmac read as tarmac.
 *
 *  Signals. The city's mast, head and lamps are simple volumes; this puts
 *  the parts the eye actually uses in front of them: a full-height housing
 *  that swallows the lamp block, the black back-plate with its bright
 *  border, a hood over each lens, a dark ring the lamp sits recessed
 *  inside, a two-lamp pedestrian signal on the pole — and then what those
 *  lamps throw on the world, the pool of light down the lane each head
 *  governs and the halo around a lit lens at night.
 *
 *  Tarmac. Fifty years of cars leave a city's asphalt anything but even:
 *  two polished bands where the wheels of every lane run, grease and soot
 *  pooled on every approach that has to stand and wait for the lights, and
 *  a storm drain in the gutter of every kerb.
 *
 *  The lamps here are driven by junctionPhase — the same function, on the
 *  same wall clock, that drives the city's own lenses — so the pool on the
 *  road and the lamp on the mast can never disagree, and every client sees
 *  the same lights.
 * =====================================================================*/

export interface StreetDressOptions {
  /** Street centre lines on both axes: the same list the city is built from. */
  streets: number[];
  /** Half the length of the grid, in metres. */
  cityR: number;
  /** The city's own lamp material; its emissive intensity tells us the hour. */
  lampMaterial?: THREE.MeshStandardMaterial | null;
}

/* The city stands its signal heads on these numbers, so the harness is built
   from the same ones and lands on the head instead of beside it. */
const CORNER_OFF = 10.6;
const ARM_LEN = 7;
const ARM_DROP = 0.6;
const HEAD_H = 6.2;
/** the three lenses of a head, top to bottom: red, amber, green */
const LENS_Y = [HEAD_H - 0.95, HEAD_H - 1.5, HEAD_H - 2.05];
const HEAD_MID = HEAD_H - 1.5 + 0.675;
/** the road half-width, and where a car's two wheel tracks run in each lane */
const ROAD_HALF = 7;
const LANE_WHEEL = [1.71, 3.21];

/* the lamp colours, so the harness agrees with the heads the city lights */
const LAMP_ON: Record<LampState, THREE.Color> = {
  r: new THREE.Color(1, 0.18, 0.12),
  a: new THREE.Color(1, 0.62, 0.1),
  g: new THREE.Color(0.22, 1, 0.35),
};
const LAMP_OFF: Record<LampState, THREE.Color> = {
  r: new THREE.Color(0.07, 0.015, 0.012),
  a: new THREE.Color(0.07, 0.045, 0.01),
  g: new THREE.Color(0.015, 0.07, 0.03),
};

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

function paint(
  w: number, h: number, draw: (x: CanvasRenderingContext2D, w: number, h: number) => void,
) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d") as CanvasRenderingContext2D, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function grain(x: CanvasRenderingContext2D, w: number, h: number, n: number, alpha: number) {
  for (let i = 0; i < n; i++) {
    const g = 20 + Math.random() * 60;
    x.fillStyle = `rgba(${g},${g},${g},${alpha})`;
    x.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 1 + Math.random() * 3);
  }
}

/**
 * Dress the city's junctions and its asphalt. Returns the group it added, or
 * null when there was nothing to dress.
 */
export function dressStreets(root: THREE.Object3D, opts: StreetDressOptions) {
  const street = opts.streets;
  if (!street.length || root.getObjectByName("street-dress")) {
    return (root.getObjectByName("street-dress") as THREE.Group | undefined) ?? null;
  }

  const group = new THREE.Group();
  group.name = "street-dress";

  /* ------------------------------------------------------------ geometry */
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  boxGeo.translate(0, 0.5, 0); /* origin on the floor, like the city's boxes */
  const flatGeo = new THREE.PlaneGeometry(1, 1);
  flatGeo.rotateX(-Math.PI / 2);
  const lensGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.06, 10);
  lensGeo.rotateX(Math.PI / 2);
  const bezelGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.07, 12, 1, true);
  bezelGeo.rotateX(Math.PI / 2);
  const haloGeo = new THREE.IcosahedronGeometry(0.7, 1);

  /* ----------------------------------------------------------- materials */
  const shellMat = new THREE.MeshStandardMaterial({
    color: 0x101216, roughness: 0.74, metalness: 0.2, envMapIntensity: 0.45,
  });
  const plateTex = paint(128, 200, (x, w, h) => {
    x.fillStyle = "#0b0d10";
    x.fillRect(0, 0, w, h);
    x.strokeStyle = "#e2ded0";
    x.lineWidth = 10;
    x.strokeRect(7, 7, w - 14, h - 14);
    grain(x, w, h, 900, 0.05);
  });
  const plateMat = new THREE.MeshStandardMaterial({
    map: plateTex, roughness: 0.72, metalness: 0.12, envMapIntensity: 0.5,
  });
  const bezelMat = new THREE.MeshStandardMaterial({
    color: 0x07080a, roughness: 0.68, metalness: 0.3, envMapIntensity: 0.35,
    side: THREE.DoubleSide,
  });
  const poolTex = paint(256, 256, (x, w, h) => {
    const g = x.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.92)");
    g.addColorStop(0.38, "rgba(255,255,255,0.3)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
  });
  const poolMat = new THREE.MeshBasicMaterial({
    map: poolTex, transparent: true, opacity: 0, depthWrite: false,
    blending: THREE.AdditiveBlending, toneMapped: false,
  });
  const haloMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0, depthWrite: false,
    blending: THREE.AdditiveBlending, toneMapped: false,
  });
  const pedRedMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const pedGreenMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });

  /* two dark bands where the wheels run, with the grit of real asphalt in them */
  const bandTex = paint(64, 512, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(0.36, "rgba(0,0,0,0.58)");
    g.addColorStop(0.64, "rgba(0,0,0,0.58)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
    grain(x, w, h, 2600, 0.045);
  });
  bandTex.repeat.set(1, 240);
  const bandMat = new THREE.MeshStandardMaterial({
    map: bandTex, transparent: true, depthWrite: false, roughness: 0.94, metalness: 0.05,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
  const greaseTex = paint(256, 256, (x, w, h) => {
    const g = x.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(0,0,0,0.5)");
    g.addColorStop(0.55, "rgba(0,0,0,0.22)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
  });
  const greaseMat = new THREE.MeshStandardMaterial({
    map: greaseTex, transparent: true, depthWrite: false, roughness: 0.74, metalness: 0.16,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
  const grateTex = paint(64, 128, (x, w, h) => {
    x.fillStyle = "#23262c";
    x.fillRect(0, 0, w, h);
    x.fillStyle = "#08090b";
    for (let i = 0; i < 7; i++) x.fillRect(7, 12 + i * 17, w - 14, 5);
    x.strokeStyle = "#41464f";
    x.lineWidth = 3;
    x.strokeRect(3, 3, w - 6, h - 6);
  });
  const grateMat = new THREE.MeshStandardMaterial({
    map: grateTex, roughness: 0.6, metalness: 0.55, envMapIntensity: 0.65,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });

  /* ------------------------------------------------------------ placement */
  const head: THREE.Matrix4[] = [];
  const plate: THREE.Matrix4[] = [];
  const hood: THREE.Matrix4[] = [];
  const bezel: THREE.Matrix4[] = [];
  const pool: THREE.Matrix4[] = [];
  const halo: THREE.Matrix4[] = [];
  const pedHead: THREE.Matrix4[] = [];
  const pedRed: THREE.Matrix4[] = [];
  const pedGreen: THREE.Matrix4[] = [];

  const _m = new THREE.Matrix4();
  const _p = new THREE.Vector3();
  const _q = new THREE.Quaternion();
  const _e = new THREE.Euler();
  const _s = new THREE.Vector3();
  /** y is the floor of a box or cylinder, the surface of a flat piece */
  const put = (
    list: THREE.Matrix4[], x: number, y: number, z: number,
    sx = 1, sy = 1, sz = 1, yaw = 0,
  ) => {
    _p.set(x, y, z);
    _e.set(0, yaw, 0);
    _q.setFromEuler(_e);
    _s.set(sx, sy, sz);
    _m.compose(_p, _q, _s);
    list.push(_m.clone());
  };

  /* junctions in the order the city lights them: an x street, then a z street */
  const junctions: { ix: number; iz: number }[] = [];
  for (let ai = 0; ai < street.length; ai++) {
    for (let bi = 0; bi < street.length; bi++) junctions.push({ ix: ai, iz: bi });
  }
  const corners = [
    { dx: -1, dz: -1, axis: "x", sign: 1, yaw: Math.PI },
    { dx: 1, dz: 1, axis: "x", sign: -1, yaw: 0 },
    { dx: -1, dz: 1, axis: "z", sign: -1, yaw: Math.PI / 2 },
    { dx: 1, dz: -1, axis: "z", sign: 1, yaw: -Math.PI / 2 },
  ] as const;

  for (const { ix, iz } of junctions) {
    const cx = street[ix];
    const cz = street[iz];
    for (const c of corners) {
      const px = cx + c.dx * CORNER_OFF;
      const pz = cz + c.dz * CORNER_OFF;
      const hx = c.axis === "x" ? px + c.sign * (ARM_LEN - ARM_DROP) : px;
      const hz = c.axis === "z" ? pz + c.sign * (ARM_LEN - ARM_DROP) : pz;
      const fx = Math.sin(c.yaw);
      const fz = Math.cos(c.yaw);
      const wx = Math.cos(c.yaw);
      const wz = -Math.sin(c.yaw);

      /* the housing: tall enough for all three lamps, deep enough to swallow
         the city's own head block so no bare box floats under the arm */
      put(head, hx, HEAD_MID - 1.5, hz, 0.46, 2.2, 0.42, c.yaw);
      /* the black plate with its bright border, just behind it */
      put(plate, hx - fx * 0.24, HEAD_MID - 1.6, hz - fz * 0.24, 0.68, 2.4, 0.06, c.yaw);
      for (let li = 0; li < 3; li++) {
        const ly = LENS_Y[li];
        put(hood, hx + fx * 0.12, ly + 0.2, hz + fz * 0.12, 0.54, 0.06, 0.34, c.yaw);
        put(hood, hx + fx * 0.12 + wx * 0.26, ly - 0.14, hz + fz * 0.12 + wz * 0.26, 0.06, 0.34, 0.34, c.yaw);
        put(hood, hx + fx * 0.12 - wx * 0.26, ly - 0.14, hz + fz * 0.12 - wz * 0.26, 0.06, 0.34, 0.34, c.yaw);
        put(bezel, hx + fx * 0.275, ly, hz + fz * 0.275, 1, 1, 1, c.yaw);
        put(halo, hx + fx * 0.42, ly, hz + fz * 0.42, 0.6, 0.6, 0.6, c.yaw);
      }
      /* what the head throws down the lane it governs */
      put(pool, hx + fx * 5.2, 0.062, hz + fz * 5.2, 9, 1, 13, c.yaw);

      /* pedestrian signal on the pole, facing its crossing */
      const pedYaw = Math.atan2(cx - px, cz - pz);
      const pfx = Math.sin(pedYaw);
      const pfz = Math.cos(pedYaw);
      const ex = px + pfx * 0.15;
      const ez = pz + pfz * 0.15;
      put(pedHead, ex, 2.55, ez, 0.38, 0.76, 0.26, pedYaw);
      put(pedRed, ex + pfx * 0.17, 3.09, ez + pfz * 0.17, 1, 1, 1, pedYaw);
      put(pedGreen, ex + pfx * 0.17, 2.73, ez + pfz * 0.17, 1, 1, 1, pedYaw);
    }
  }

  /* the wear of every lane, and the gutters that carry the rain away */
  const band: THREE.Matrix4[] = [];
  const grease: THREE.Matrix4[] = [];
  const grate: THREE.Matrix4[] = [];
  for (const c of street) {
    for (const s of [1, -1]) {
      for (const lane of LANE_WHEEL) {
        put(band, c + s * lane, 0.044, 0, 0.95, 1, 2 * opts.cityR, 0);
        put(band, 0, 0.044, c + s * lane, 0.95, 1, 2 * opts.cityR, Math.PI / 2);
      }
      for (let along = -opts.cityR + 24; along <= opts.cityR - 24; along += 34) {
        /* a drain in the gutter, never in a junction box */
        if (street.some((t) => Math.abs(t - along) < 20)) continue;
        put(grate, c + s * (ROAD_HALF - 0.35), 0.038, along, 0.55, 1, 0.95, 0);
        put(grate, along, 0.038, c + s * (ROAD_HALF - 0.35), 0.95, 1, 0.55, 0);
      }
    }
  }
  /* grease and soot where every approach stands waiting for the lights */
  for (const { ix, iz } of junctions) {
    const cx = street[ix];
    const cz = street[iz];
    for (const s of [1, -1]) {
      put(grease, cx + 3.5 * s, 0.045, cz + 14.6 * s, 7.2, 1, 5.6, 0);
      put(grease, cx + 14.6 * s, 0.045, cz + 3.5 * s, 5.6, 1, 7.2, 0);
    }
  }

  /* ---------------------------------------------------------- the meshes */
  const instance = (
    list: THREE.Matrix4[], geo: THREE.BufferGeometry, mat: THREE.Material,
    tag: string, init: THREE.Color | null, shadow = false,
  ) => {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((m, i) => im.setMatrixAt(i, m));
    im.instanceMatrix.needsUpdate = true;
    im.frustumCulled = false;
    im.castShadow = shadow;
    im.receiveShadow = true;
    /* the hardware answers to the signal slot; the light it casts does not,
       since a model can replace the head but never the pool on the road */
    if (tag) im.name = `prop:${tag}`;
    if (init) {
      const colors = new Float32Array(list.length * 3);
      for (let i = 0; i < list.length; i++) {
        colors[i * 3] = init.r;
        colors[i * 3 + 1] = init.g;
        colors[i * 3 + 2] = init.b;
      }
      im.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
      im.instanceColor.needsUpdate = true;
    }
    group.add(im);
    return im;
  };
  const BLACK = new THREE.Color(0, 0, 0);
  instance(head, boxGeo, shellMat, "signal", null, true);
  instance(plate, boxGeo, plateMat, "signal", null);
  instance(hood, boxGeo, shellMat, "signal", null);
  instance(bezel, bezelGeo, bezelMat, "signal", null);
  instance(pedHead, boxGeo, shellMat, "signal", null);
  const pedRedMesh = instance(pedRed, lensGeo, pedRedMat, "signal", LAMP_OFF.r);
  const pedGreenMesh = instance(pedGreen, lensGeo, pedGreenMat, "signal", LAMP_OFF.g);
  const poolMesh = instance(pool, flatGeo, poolMat, "", BLACK);
  const haloMesh = instance(halo, haloGeo, haloMat, "", BLACK);
  instance(band, flatGeo, bandMat, "", null);
  instance(grease, flatGeo, greaseMat, "", null);
  instance(grate, flatGeo, grateMat, "", null);

  /* ------------------------------------------------------------- the drive
   * One pass per frame, and work only when a phase actually changes: the
   * lamps the city lights are read straight off junctionPhase, so the pool,
   * the halo and the pedestrian signal are always on the same cycle. */
  const poolColor = poolMesh.instanceColor as THREE.InstancedBufferAttribute;
  const haloColor = haloMesh.instanceColor as THREE.InstancedBufferAttribute;
  const pedRedColor = pedRedMesh.instanceColor as THREE.InstancedBufferAttribute;
  const pedGreenColor = pedGreenMesh.instanceColor as THREE.InstancedBufferAttribute;
  const _col = new THREE.Color();
  let lastKey = "";
  const sync = () => {
    const lamp = opts.lampMaterial;
    /* the city drives its lamp glow from dusk to dawn; follow the same dial */
    const night = lamp ? clamp01((lamp.emissiveIntensity - 0.05) / 1.9) : 0;
    poolMat.opacity = 0.05 + 0.4 * night;
    haloMat.opacity = 0.02 + 0.42 * night;
    let key = "";
    for (const j of junctions) {
      const ph = junctionPhase(j.ix, j.iz, 0);
      key += ph.ns + ph.ew;
    }
    if (key === lastKey) return;
    lastKey = key;
    for (let h = 0; h < junctions.length; h++) {
      const j = junctions[h];
      const ph = junctionPhase(j.ix, j.iz, 0);
      for (let k = 0; k < 4; k++) {
        const i = h * 4 + k;
        const st: LampState = k < 2 ? ph.ns : ph.ew;
        const lit = LAMP_ON[st];
        /* the pool on the road is half the lamp: it is light on dark asphalt */
        _col.copy(lit).multiplyScalar(st === "g" ? 0.62 : 0.5);
        poolColor.setXYZ(i, _col.r, _col.g, _col.b);
        for (let li = 0; li < 3; li++) {
          const on = (li === 0 && st === "r") || (li === 1 && st === "a") || (li === 2 && st === "g");
          const src = li === 0 ? LAMP_ON.r : li === 1 ? LAMP_ON.a : LAMP_ON.g;
          haloColor.setXYZ(i * 3 + li, on ? src.r : 0, on ? src.g : 0, on ? src.b : 0);
        }
        /* pedestrians cross the street whose traffic has stopped, and only
           while the street across it is really running */
        const own = k < 2 ? ph.ns : ph.ew;
        const other = k < 2 ? ph.ew : ph.ns;
        if (own === "r" && other === "g") {
          pedRedColor.setXYZ(i, LAMP_OFF.r.r, LAMP_OFF.r.g, LAMP_OFF.r.b);
          pedGreenColor.setXYZ(i, LAMP_ON.g.r, LAMP_ON.g.g, LAMP_ON.g.b);
        } else {
          pedRedColor.setXYZ(i, LAMP_ON.r.r, LAMP_ON.r.g, LAMP_ON.r.b);
          pedGreenColor.setXYZ(i, LAMP_OFF.g.r, LAMP_OFF.g.g, LAMP_OFF.g.b);
        }
      }
    }
    poolColor.needsUpdate = true;
    haloColor.needsUpdate = true;
    pedRedColor.needsUpdate = true;
    pedGreenColor.needsUpdate = true;
  };
  sync();
  poolMesh.onBeforeRender = () => sync();

  root.add(group);
  return group;
}
