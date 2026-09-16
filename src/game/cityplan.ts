/**
 * THE PLAN OF THE CITY — drawn from the city itself.
 *
 * Nothing anywhere holds a picture of the generated city: it is code, not a
 * model, so its map is drawn here — and drawn from the *same* data the world is
 * built from (`BLOCKS`, `STREETS`, `CITY_R` in ./city), which is the only way a
 * map stays honest. Roads are the streets the car can actually drive down, the
 * block plates are the ones that are really there, the parks are the parks, and
 * the numbers come from the constants the world uses rather than from a
 * remembered approximation.
 *
 * One canvas is drawn for the whole city and kept, and everything that needs a
 * map crops it: the radar in the corner, the big map, and the card in the world
 * picker. Both consumers ask for the plan in world metres — the mapping between
 * metres and pixels is a single constant, `PLAN_SCALE`.
 *
 * North is +z. That is not a choice: the city's own street names run SOUTHPORT
 * at the far -z edge to NORTHPORT at +z (see STREET_NAMES_EW in ./city), so a
 * map that puts +z at the top is the one that matches the signs.
 */
import {
  BLOCKS, CITY_R, PLAZA, STREET_NAMES_EW, STREET_NAMES_NS, STREETS, ST_ASPHALT,
} from "./city";

/** the plan covers the city and the apron of pavement around it */
export const PLAN_METRES = 2 * (CITY_R + 24);
export const PLAN_PX = 2048;
/** pixels per metre in the plan canvas */
export const PLAN_SCALE = PLAN_PX / PLAN_METRES;

export interface PlanInk {
  /** the pavement between the blocks and the kerb line */
  ground: string;
  /** carriageway */
  road: string;
  /** the hairline either side of a carriageway */
  kerb: string;
  outer: string;
  midtown: string;
  downtown: string;
  park: string;
  plaza: string;
  /** the city limit */
  edge: string;
  label: string;
}

/** The light theme: the game's own paper, ink and signal colours. */
export const PLAN_PAPER: PlanInk = {
  ground: "#e9e4d6",
  road: "#fbfaf6",
  kerb: "#d9d3c2",
  outer: "#e6e2d5",
  midtown: "#dbd5c4",
  downtown: "#cdc6b0",
  park: "#cfdcc0",
  plaza: "#e8dfc8",
  edge: "#c6bfa9",
  label: "#8b8677",
};

export const planX = (x: number) => (x + PLAN_METRES / 2) * PLAN_SCALE;
/** north (+z) is up, so z grows towards the top of the canvas */
export const planY = (z: number) => (PLAN_METRES / 2 - z) * PLAN_SCALE;

const kerb = ST_ASPHALT;
const boulevard = 8;

function parkCount() {
  let n = 0;
  for (const b of BLOCKS) if (b.park) n++;
  return n;
}

/**
 * Draws the city into a 2D context of PLAN_PX. Exported because the radar and
 * the map card both want it, and neither of them should own it.
 */
export function drawCityPlan(x: CanvasRenderingContext2D, ink: PlanInk = PLAN_PAPER, labels = false) {
  const size = PLAN_PX;

  /* ground: the pavement plate the whole city sits on */
  x.fillStyle = ink.ground;
  x.fillRect(0, 0, size, size);

  /* blocks, by what they are and how tall they get */
  for (const b of BLOCKS) {
    const x0 = planX(b.x0);
    const x1 = planX(b.x1);
    const y0 = planY(b.z1);
    const y1 = planY(b.z0);
    x.fillStyle = b.park ? ink.park : b.type === "downtown" ? ink.downtown : b.type === "midtown" ? ink.midtown : ink.outer;
    x.fillRect(x0, y0, x1 - x0, y1 - y0);
  }

  /* the central plaza, which is not a block at all */
  x.fillStyle = ink.plaza;
  x.fillRect(planX(-PLAZA), planY(PLAZA), (2 * PLAZA) * PLAN_SCALE, (2 * PLAZA) * PLAN_SCALE);

  /* carriageway: every street, plus the boulevard through the plaza */
  const band = (cx: number, cz: number, w: number, d: number) => {
    x.fillStyle = ink.kerb;
    x.fillRect(planX(cx - w) - 1, planY(cz + d) - 1, (2 * w) * PLAN_SCALE + 2, (2 * d) * PLAN_SCALE + 2);
    x.fillStyle = ink.road;
    x.fillRect(planX(cx - w), planY(cz + d), (2 * w) * PLAN_SCALE, (2 * d) * PLAN_SCALE);
  };
  for (const c of STREETS) {
    band(c, 0, kerb, CITY_R);
    band(0, c, CITY_R, kerb);
  }
  /* the boulevard runs through the middle of the city, but it stops either side
     of the plaza — the plaza is not a roundabout anyone can drive across */
  band(0, (PLAZA + CITY_R) / 2, boulevard, (CITY_R - PLAZA) / 2);
  band(0, -(PLAZA + CITY_R) / 2, boulevard, (CITY_R - PLAZA) / 2);

  /* the city limit, drawn as a hairline so the map has an edge to read */
  x.strokeStyle = ink.edge;
  x.lineWidth = 3;
  x.strokeRect(planX(-CITY_R), planY(CITY_R), 2 * CITY_R * PLAN_SCALE, 2 * CITY_R * PLAN_SCALE);

  if (labels) {
    x.fillStyle = ink.label;
    x.font = `500 ${Math.round(PLAN_SCALE * 7)}px ui-monospace, monospace`;
    x.textAlign = "center";
    x.textBaseline = "middle";
    /* names live in ./city on the same grid, so read them the way it does */
    for (let i = 0; i < STREETS.length; i++) {
      const c = STREETS[i];
      const ns = STREET_NAMES_NS[i];
      const ew = STREET_NAMES_EW[i];
      if (ns) {
        x.save();
        x.translate(planX(c), planY(CITY_R - 40));
        x.rotate(-Math.PI / 2);
        x.fillText(ns, 0, 0);
        x.restore();
      }
      if (ew) x.fillText(ew, planX(CITY_R - 60), planY(c));
    }
  }
}

let cached: { key: string; canvas: HTMLCanvasElement } | null = null;

/**
 * The plan, drawn once and kept. Re-drawn only when the picture would really
 * change (the parks are chosen while the city is built, so the first plan of a
 * session can predate them).
 */
export function cityPlan(ink: PlanInk = PLAN_PAPER, labels = false): HTMLCanvasElement | null {
  const key = (labels ? "L" : "R") + ":" + BLOCKS.length + ":" + parkCount() + ":" + ink.road;
  if (cached && cached.key === key) return cached.canvas;
  const canvas = document.createElement("canvas");
  canvas.width = PLAN_PX;
  canvas.height = PLAN_PX;
  const x = canvas.getContext("2d");
  if (!x) return null;
  drawCityPlan(x, ink, labels);
  cached = { key, canvas };
  return canvas;
}
