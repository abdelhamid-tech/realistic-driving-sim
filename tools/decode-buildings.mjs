/**
 * Decode the owner's OBJ buildings in /building into GLBs under
 * building/.decoded/, one per source file, ready for tools/buildings.mjs.
 * The OBJs ship with no .mtl, so each material gets a plausible concrete/
 * glass palette colour that the map baker then carries into its own buckets.
 *
 *   bun run tools/decode-buildings.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const OUT = "building/.decoded";
mkdirSync(OUT, { recursive: true });

/** OBJ files -> building names (see tools/buildings.mjs ASSIGN) */
const NAMES = {
  "obj (1).obj": "tower-a",
  "obj (2).obj": "villa",
  "obj (3).obj": "office",
  "obj (4).obj": "depot",
  "obj (5).obj": "block-a",
  "obj.obj": "block-b",
};

/** plausible facade colours for the OBJ's unnamed materials */
const PALETTE = [
  [0.62, 0.60, 0.56],
  [0.30, 0.38, 0.44],
  [0.72, 0.70, 0.66],
  [0.45, 0.30, 0.24],
  [0.35, 0.36, 0.38],
  [0.80, 0.78, 0.74],
];

for (const [file, name] of Object.entries(NAMES)) {
  const bytes = readFileSync(`building/${file}`);
  const text = new TextDecoder().decode(bytes);
  const obj = new OBJLoader().parse(text);
  obj.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(obj);
  const centre = box.getCenter(new THREE.Vector3());

  const perMat = new Map();
  const v = new THREE.Vector3();
  const e1 = new THREE.Vector3();
  const e2 = new THREE.Vector3();
  const n = new THREE.Vector3();
  obj.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const matName = o.material?.name || "building";
    let list = perMat.get(matName);
    if (!list) perMat.set(matName, (list = []));
    const pos = o.geometry.getAttribute("position");
    const index = o.geometry.getIndex();
    const cnt = index ? index.count : pos.count;
    for (let i = 0; i + 2 < cnt; i += 3) {
      const tri = [];
      for (let k = 0; k < 3; k++) {
        const vi = index ? index.getX(i + k) : i + k;
        v.fromBufferAttribute(pos, vi).applyMatrix4(o.matrixWorld);
        tri.push(v.clone());
      }
      e1.subVectors(tri[1], tri[0]);
      e2.subVectors(tri[2], tri[0]);
      n.crossVectors(e1, e2).normalize();
      for (const p of tri) { p.x -= centre.x; p.z -= centre.z; p.y -= box.min.y; }
      list.push({ tri, nx: n.x, ny: n.y, nz: n.z });
    }
  });

  const prims = [];
  const mats = [];
  let mi = 0;
  for (const [matName, tris] of perMat) {
    const pos = [];
    const nrm = [];
    for (const { tri, nx, ny, nz } of tris) {
      for (const p of tri) { pos.push(p.x, p.y, p.z); nrm.push(nx, ny, nz); }
    }
    mats.push({
      name: matName,
      pbrMetallicRoughness: {
        baseColorFactor: [...PALETTE[mi % PALETTE.length], 1],
        metallicFactor: 0.05,
        roughnessFactor: 0.9,
      },
    });
    prims.push({
      attributes: { POSITION: 2 * mi, NORMAL: 2 * mi + 1 },
      material: mi,
      mode: 4,
      _pos: new Float32Array(pos),
      _nrm: new Float32Array(nrm),
    });
    mi++;
  }

  /* ---- minimal GLB writer: non-indexed prims, float32 pos + normal ---- */
  const chunks = [];
  let offset = 0;
  const views = [];
  const accessors = [];
  const align4 = (x) => (x + 3) & ~3;
  const addView = (f32) => {
    const pad = offset % 4 ? 4 - (offset % 4) : 0;
    if (pad) chunks.push(Buffer.alloc(pad));
    offset += pad;
    views.push({ buffer: 0, byteOffset: offset, byteLength: f32.byteLength });
    const min = [Infinity, Infinity, Infinity];
    const max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < f32.length; i += 3) {
      for (let k = 0; k < 3; k++) {
        const x = f32[i + k];
        if (x < min[k]) min[k] = x;
        if (x > max[k]) max[k] = x;
      }
    }
    accessors.push({
      bufferView: views.length - 1,
      componentType: 5126,
      count: f32.length / 3,
      type: "VEC3",
      min,
      max,
    });
    chunks.push(Buffer.from(f32.buffer, f32.byteOffset, f32.byteLength));
    offset += f32.byteLength;
    return accessors.length - 1;
  };

  const outPrims = prims.map((p) => ({
    attributes: { POSITION: addView(p._pos), NORMAL: addView(p._nrm) },
    material: p.material,
    mode: 4,
  }));

  const json = {
    asset: { version: "2.0", generator: "freebuff-obj-decode" },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0, name }],
    meshes: [{ name, primitives: outPrims }],
    materials: mats,
    buffers: [{ byteLength: align4(offset) }],
    bufferViews: views,
    accessors,
  };
  if (offset % 4) chunks.push(Buffer.alloc(4 - (offset % 4)));

  const enc = new TextEncoder().encode(JSON.stringify(json));
  const jsonPad = (4 - (enc.length % 4)) % 4;
  const jsonChunk = Buffer.concat([enc, Buffer.alloc(jsonPad, 0x20)]);
  const binChunk = Buffer.concat(chunks);
  const binPad = (4 - (binChunk.length % 4)) % 4;
  const bin = Buffer.concat([binChunk, Buffer.alloc(binPad)]);

  const total = 12 + 8 + jsonChunk.length + 8 + bin.length;
  const out = Buffer.alloc(total);
  out.writeUInt32LE(0x46546c67, 0);
  out.writeUInt32LE(2, 4);
  out.writeUInt32LE(total, 8);
  out.writeUInt32LE(jsonChunk.length, 12);
  out.writeUInt32LE(0x4e4f534a, 16);
  jsonChunk.copy(out, 20);
  const binAt = 20 + jsonChunk.length;
  out.writeUInt32LE(bin.length, binAt);
  out.writeUInt32LE(0x004e4942, binAt + 4);
  bin.copy(out, binAt + 8);

  writeFileSync(`${OUT}/${name}.glb`, out);
  console.log(`${OUT}/${name}.glb  ${prims.length} mats  ${(out.length / 1048576).toFixed(1)} MB`);
}
