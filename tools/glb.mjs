/**
 * A tiny GLB writer — just enough to build a city out of boxes and quads and
 * hand it to three.js. One mesh, one primitive per material, positions and
 * normals as float32, indices as uint32.
 */

/* every buffer view starts on a four-byte boundary */
const ALIGN = 4;

function alignUp(n) {
  return (n + ALIGN - 1) & ~(ALIGN - 1);
}

/**
 * The same triangles, with every vertex that is already there written once.
 *
 * The builder hands over three vertices per triangle because that is how a
 * triangle is made — but a quad's diagonal, a wall's corner and every coplanar
 * pair in the city hand over the same numbers twice, and each repeat costs 32
 * bytes. Welding identical (position, normal, uv) triples into one vertex and
 * pointing the index at it changes nothing that can be seen — they were the
 * same vertex — and takes a third to a half off every map the game ships.
 *
 * Positions are welded only when the whole vertex matches, so a hard corner
 * keeps its two normals and the shading stays exactly as it was.
 */
function welded(prim) {
  const { positions, normals, uvs, indices } = prim;
  const hasUv = !!uvs;
  const seen = new Map();
  const pos = [];
  const nrm = [];
  const uv = [];
  const index = new Uint32Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    const v = indices[i] * 3;
    const u = indices[i] * 2;
    const key = hasUv
      ? `${positions[v]},${positions[v + 1]},${positions[v + 2]}|${normals[v]},${normals[v + 1]},${normals[v + 2]}|${uvs[u]},${uvs[u + 1]}`
      : `${positions[v]},${positions[v + 1]},${positions[v + 2]}|${normals[v]},${normals[v + 1]},${normals[v + 2]}`;
    let hit = seen.get(key);
    if (hit === undefined) {
      hit = pos.length / 3;
      seen.set(key, hit);
      pos.push(positions[v], positions[v + 1], positions[v + 2]);
      nrm.push(normals[v], normals[v + 1], normals[v + 2]);
      if (hasUv) uv.push(uvs[u], uvs[u + 1]);
    }
    index[i] = hit;
  }
  return {
    positions: new Float32Array(pos),
    normals: new Float32Array(nrm),
    uvs: hasUv ? new Float32Array(uv) : null,
    indices: index,
    material: prim.material,
  };
}

export function writeGLB({ materials, primitives: given, generator = "open-city-tools" }) {
  const primitives = given.map(welded);
  const chunks = [];
  const bufferViews = [];
  const accessors = [];
  const prims = [];
  let offset = 0;

  const addView = (data, target) => {
    const padded = offset % ALIGN === 0 ? offset : alignUp(offset);
    if (padded > offset) chunks.push(Buffer.alloc(padded - offset));
    const buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    chunks.push(buf);
    bufferViews.push({ buffer: 0, byteOffset: padded, byteLength: buf.length, target });
    offset = padded + buf.length;
    return bufferViews.length - 1;
  };

  for (const prim of primitives) {
    const pos = accessors.length;
    const min = [Infinity, Infinity, Infinity];
    const max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < prim.positions.length; i += 3) {
      for (let k = 0; k < 3; k++) {
        const v = prim.positions[i + k];
        if (v < min[k]) min[k] = v;
        if (v > max[k]) max[k] = v;
      }
    }
    accessors.push({
      bufferView: addView(prim.positions, 34962),
      componentType: 5126,
      count: prim.positions.length / 3,
      type: "VEC3",
      min,
      max,
    });
    const nrm = accessors.length;
    accessors.push({
      bufferView: addView(prim.normals, 34962),
      componentType: 5126,
      count: prim.normals.length / 3,
      type: "VEC3",
    });
    const idx = accessors.length;
    accessors.push({
      bufferView: addView(prim.indices, 34963),
      componentType: 5125,
      count: prim.indices.length,
      type: "SCALAR",
    });
    const attrs = { POSITION: pos, NORMAL: nrm };
    if (prim.uvs) {
      const uvs = accessors.length;
      accessors.push({
        bufferView: addView(prim.uvs, 34962),
        componentType: 5126,
        count: prim.uvs.length / 2,
        type: "VEC2",
      });
      attrs.TEXCOORD_0 = uvs;
    }
    prims.push({
      attributes: attrs,
      indices: idx,
      material: prim.material,
      mode: 4,
    });
  }

  const bin = Buffer.concat(chunks);
  const json = {
    asset: { version: "2.0", generator },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ name: "city", mesh: 0 }],
    meshes: [{ name: "city", primitives: prims }],
    materials: materials.map((m) => ({
      name: m.name,
      doubleSided: false,
      pbrMetallicRoughness: {
        baseColorFactor: [m.color[0], m.color[1], m.color[2], 1],
        metallicFactor: m.metal ?? 0,
        roughnessFactor: m.rough ?? 0.9,
      },
      ...(m.emissive ? { emissiveFactor: m.emissive } : {}),
    })),
    accessors,
    bufferViews,
    buffers: [{ byteLength: bin.length }],
  };

  const jsonBuf = Buffer.from(JSON.stringify(json), "utf8");
  const jsonPad = Buffer.concat([jsonBuf, Buffer.alloc((4 - (jsonBuf.length % 4)) % 4, 0x20)]);
  const binPad = Buffer.concat([bin, Buffer.alloc((4 - (bin.length % 4)) % 4, 0)]);

  const header = Buffer.alloc(12);
  header.write("glTF", 0, "ascii");
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(12 + 8 + jsonPad.length + 8 + binPad.length, 8);
  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(jsonPad.length, 0);
  jsonHeader.write("JSON", 4, "ascii");
  const binHeader = Buffer.alloc(8);
  binHeader.writeUInt32LE(binPad.length, 0);
  binHeader.writeUInt32LE(0x004e4942, 4);

  return Buffer.concat([header, jsonHeader, jsonPad, binHeader, binPad]);
}

/** Collects triangles per material and hands back ready-made primitives. */
export function geometryBuilder(materials) {
  const buckets = materials.map((m) => ({
    positions: [],
    normals: [],
    uvs: [],
    indices: [],
    count: 0,
    uvScale: m.uv ?? 8,   // metres per texture tile; 0 disables UVs
  }));
  const p = [0, 0, 0];
  const q = [0, 0, 0];
  const n = [0, 0, 0];

  const sub = (a, b, out) => {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
  };
  const cross = (a, b, out) => {
    out[0] = a[1] * b[2] - a[2] * b[1];
    out[1] = a[2] * b[0] - a[0] * b[2];
    out[2] = a[0] * b[1] - a[1] * b[0];
  };
  const norm = (v) => {
    const l = Math.hypot(v[0], v[1], v[2]) || 1;
    v[0] /= l;
    v[1] /= l;
    v[2] /= l;
    return v;
  };

  /** Triangle with a normal computed from its own winding. */
  function tri(a, b, c, mat, hint) {
    const bucket = buckets[mat];
    sub(b, a, p);
    sub(c, a, q);
    cross(p, q, n);
    norm(n);
    if (hint && n[0] * hint[0] + n[1] * hint[1] + n[2] * hint[2] < 0) {
      const t = b;
      b = c;
      c = t;
      sub(b, a, p);
      sub(c, a, q);
      cross(p, q, n);
      norm(n);
    }
    const base = bucket.count;
    /* planar world-space UVs on the dominant normal axis, scaled to metres */
    const doUv = bucket.uvScale > 0;
    const ax = Math.abs(n[0]), ay = Math.abs(n[1]), az = Math.abs(n[2]);
    for (const v of [a, b, c]) {
      bucket.positions.push(v[0], v[1], v[2]);
      bucket.normals.push(n[0], n[1], n[2]);
      if (doUv) {
        const s = 1 / bucket.uvScale;
        if (ay >= ax && ay >= az) bucket.uvs.push(v[0] * s, v[2] * s);
        else if (ax >= az) bucket.uvs.push(v[2] * s, v[1] * s);
        else bucket.uvs.push(v[0] * s, v[1] * s);
      }
    }
    bucket.indices.push(base, base + 1, base + 2);
    bucket.count += 3;
  }

  /**
   * Triangle whose three vertices carry their own normals — a piece of a
   * triangle that came from somewhere else (the owner's bridge is baked this
   * way) where a shared normal per vertex is what keeps a curved cable round
   * and lets the writer weld neighbours back together.
   */
  function triN(a, b, c, mat, na, nb, nc) {
    const bucket = buckets[mat];
    sub(b, a, p);
    sub(c, a, q);
    cross(p, q, n);
    norm(n);
    const base = bucket.count;
    const doUv = bucket.uvScale > 0;
    const ax = Math.abs(n[0]), ay = Math.abs(n[1]), az = Math.abs(n[2]);
    const shades = [na, nb, nc];
    let i = 0;
    for (const v of [a, b, c]) {
      bucket.positions.push(v[0], v[1], v[2]);
      const s = shades[i++];
      bucket.normals.push(s[0], s[1], s[2]);
      if (doUv) {
        const u = 1 / bucket.uvScale;
        if (ay >= ax && ay >= az) bucket.uvs.push(v[0] * u, v[2] * u);
        else if (ax >= az) bucket.uvs.push(v[2] * u, v[1] * u);
        else bucket.uvs.push(v[0] * u, v[1] * u);
      }
    }
    bucket.indices.push(base, base + 1, base + 2);
    bucket.count += 3;
  }

  /** Quad, wound as given, flipped if `hint` says the normal points inwards. */
  function quad(a, b, c, d, mat, hint) {
    tri(a, b, c, mat, hint);
    tri(a, c, d, mat, hint);
  }

  /** Axis-aligned box: 6 faces, outward normals. */
  function box(x0, y0, z0, x1, y1, z1, mat, opts = {}) {
    const skip = opts.skip ?? [];
    const y0p = opts.base ?? y0;
    const X0 = Math.min(x0, x1), X1 = Math.max(x0, x1);
    const Y0 = Math.min(y0p, y1), Y1 = Math.max(y0p, y1);
    const Z0 = Math.min(z0, z1), Z1 = Math.max(z0, z1);
    const v = (x, y, z) => [x, y, z];
    if (!skip.includes("top")) {
      quad(v(X0, Y1, Z0), v(X1, Y1, Z0), v(X1, Y1, Z1), v(X0, Y1, Z1), mat, [0, 1, 0]);
    }
    if (!skip.includes("bottom")) {
      quad(v(X0, Y0, Z0), v(X1, Y0, Z0), v(X1, Y0, Z1), v(X0, Y0, Z1), mat, [0, -1, 0]);
    }
    if (!skip.includes("south")) {
      quad(v(X0, Y0, Z0), v(X1, Y0, Z0), v(X1, Y1, Z0), v(X0, Y1, Z0), mat, [0, 0, -1]);
    }
    if (!skip.includes("north")) {
      quad(v(X0, Y0, Z1), v(X1, Y0, Z1), v(X1, Y1, Z1), v(X0, Y1, Z1), mat, [0, 0, 1]);
    }
    if (!skip.includes("west")) {
      quad(v(X0, Y0, Z0), v(X0, Y0, Z1), v(X0, Y1, Z1), v(X0, Y1, Z0), mat, [-1, 0, 0]);
    }
    if (!skip.includes("east")) {
      quad(v(X1, Y0, Z0), v(X1, Y0, Z1), v(X1, Y1, Z1), v(X1, Y1, Z0), mat, [1, 0, 0]);
    }
  }

  /** Flat horizontal patch at height y. */
  function slab(x0, z0, x1, z1, y, mat) {
    quad([x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1], mat, [0, 1, 0]);
  }

  function primitives() {
    return buckets
      .map((b, i) => ({
        positions: new Float32Array(b.positions),
        normals: new Float32Array(b.normals),
        uvs: b.uvScale > 0 ? new Float32Array(b.uvs) : null,
        indices: new Uint32Array(b.indices),
        material: i,
      }))
      .filter((p) => p.indices.length > 0);
  }

  return { tri, triN, quad, box, slab, primitives, triangles: () => buckets.reduce((n, b) => n + b.count / 3, 0) };
}
