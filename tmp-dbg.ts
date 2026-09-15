import { buildMapField, wallsNear } from "./src/game/mapbuild";
const tris: number[] = [];
function box(x0:number,y0:number,z0:number,x1:number,y1:number,z1:number){
  const p:[number,number,number][]=[[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]];
  const q=[[0,1,2],[0,2,3],[4,6,5],[4,7,6],[0,4,5],[0,5,1],[1,5,6],[1,6,2],[2,6,7],[2,7,3],[3,7,4],[3,4,0]];
  for(const f of q) for(const i of f) tris.push(...p[i]);
}
box(-2,0,-2,2,9,2);           // the pillar at x=0
const F = buildMapField(new Float32Array(tris), { cell: 4 });
console.log("walls:", F.walls.length);
for (const w of F.walls) console.log(`  c=(${w.x.toFixed(2)},${w.z.toFixed(2)}) hx=${w.hx.toFixed(2)} hz=${w.hz.toFixed(2)} u=(${w.ux.toFixed(2)},${w.uz.toFixed(2)}) top=${w.top}`);
console.log("near (0,0):", wallsNear(F, 0, 0, []).length);
console.log("buckets:", [...F.buckets.keys()].map(k=>`${Math.floor(k/8192)-4096},${(k%8192)-4096}`).join(" "));
