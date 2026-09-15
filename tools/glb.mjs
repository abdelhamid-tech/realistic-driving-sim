/**
 * A tiny GLB writer — just enough to build a city out of boxes and quads and
 * hand it to three.js. One mesh, one primitive per material, positions and
 * normals as float32, indices as uint32.
 */

const ALIGN = 4;

function alignUp(n) {
  return (n + ALIGN - 1) & ~(ALIGN - 1);
}

export function writeGLB({ materials, primitives, generator = "open-city-tools" }) {
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
    prims.push({
      attributes: { POSITION: pos, NORMAL: nrm },
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
  const buckets = materials.map(() => ({ positions: [], normals: [], indices: [], count: 0 }));
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
    for (const v of [a, b, c]) {
      bucket.positions.push(v[0], v[1], v[2]);
      bucket.normals.push(n[0], n[1], n[2]);
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
        indices: new Uint32Array(b.indices),
        material: i,
      }))
      .filter((p) => p.indices.length > 0);
  }

  return { tri, quad, box, slab, primitives, triangles: () => buckets.reduce((n, b) => n + b.count / 3, 0) };
}
