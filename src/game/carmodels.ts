/* ============================================================================
 *  CAR MODEL LIBRARY — one click, nothing to sign up for.
 *
 *  Every entry is a direct link to a GLB on a public CDN that answers with
 *  `access-control-allow-origin: *`, so the browser can fetch it straight into
 *  the game: no Sketchfab account, no API key, no download-and-upload step.
 *  Credits and licences are shown in the garage, so attribution travels with
 *  the model. Verified working at the time of writing; if a link ever rots,
 *  the local .glb import in the garage still works.
 *
 *  Adding your own is a one-liner: any `https://…/something.glb` that sends
 *  the CORS header will do.
 * ==========================================================================*/

import type { VehicleKind } from "./catalog";

export interface CarModelSource {
  id: string;
  name: string;
  /** short line for the card */
  detail: string;
  /** the dynamics this model inherits (mass, torque, drivetrain, grip) */
  base: VehicleKind;
  url: string;
  /** content length, for the "12 MB" hint */
  bytes: number;
  author: string;
  license: string;
}

export const CAR_MODELS: CarModelSource[] = [
  {
    id: "concept",
    name: "KHR CONCEPT",
    detail: "Concept car · full interior · 445 parts",
    base: "gt",
    url: "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/CarConcept/glTF-Binary/CarConcept.glb",
    bytes: 11778688,
    author: "Khronos glTF Sample Assets · source asset by Unity Fan",
    license: "CC0 / public domain",
  },
  {
    id: "ferrari",
    name: "458 ITALIA",
    detail: "Mid-engine V8 · rigged wheels · 1.7 MB",
    base: "gt",
    url: "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r160/examples/models/gltf/ferrari.glb",
    bytes: 1681572,
    author: "vicent091036 · shipped with three.js",
    license: "CC BY 4.0",
  },
  {
    id: "sedan",
    name: "STREET SEDAN",
    detail: "Low-poly sedan · loads instantly",
    base: "sedan",
    url: "https://assets.babylonjs.com/meshes/car.glb",
    bytes: 167272,
    author: "Babylon.js sample assets",
    license: "free sample asset",
  },
];

export function formatBytes(n: number): string {
  if (n >= 1048576) return `${(n / 1048576).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(n / 1024))} KB`;
}
