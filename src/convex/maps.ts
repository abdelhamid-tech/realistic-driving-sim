import { v } from "convex/values";
import type { Doc } from "./_generated/dataModel";
import { mutation, query, type QueryCtx } from "./_generated/server";

/**
 * WORLD MAP IMPORT — the hidden page at /import.
 *
 * This is the only way a map gets into the game. The whole file runs on the
 * server, so the passphrase below never ships inside the browser bundle: the
 * page asks for it, sends it here, and this module decides.
 *
 * To change the key, edit PASS (or set WORLD_MAP_PASSWORD in the deployment's
 * environment variables, which wins if it is present).
 */
const PASS = (process.env.WORLD_MAP_PASSWORD ?? "C5454aie").trim();

function allowed(password: unknown) {
  return typeof password === "string" && password.trim() === PASS && PASS.length > 0;
}

function gate(password: unknown) {
  if (!allowed(password)) throw new Error("wrong key");
}

/** Guess how the loader should open a file, from its name. */
function kindOf(fileName: string) {
  const name = fileName.toLowerCase();
  if (name.endsWith(".zip")) return "zip";
  if (name.endsWith(".fbx")) return "fbx";
  return "glb";
}

const spawnValidator = v.object({
  x: v.number(),
  z: v.number(),
  yaw: v.number(),
});

/** Is this the right key? The page asks before it shows anything. */
export const unlock = mutation({
  args: { password: v.string() },
  handler: (_ctx, args) => allowed(args.password),
});

/** One row, shaped for the game and for the owner's page. */
async function present(ctx: QueryCtx, row: Doc<"worldMaps">) {
  return {
    id: row._id,
    name: row.name,
    fileName: row.fileName,
    bytes: row.bytes,
    kind: row.kind,
    active: row.active,
    published: row.published ?? false,
    fitTo: row.fitTo ?? null,
    turn: row.turn ?? 0,
    cell: row.cell ?? null,
    wallHeight: row.wallHeight ?? null,
    spawn: row.spawn ?? null,
    createdAt: row.createdAt,
    url: await ctx.storage.getUrl(row.storageId),
  };
}

/**
 * What the game may drive: the map the owner is running, plus everything the
 * owner has published. An unpublished map that is not active stays private.
 */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("worldMaps").collect();
    const out = [];
    for (const row of rows) {
      if (!row.active && !row.published) continue;
      out.push(await present(ctx, row));
    }
    out.sort((a, b) => b.createdAt - a.createdAt);
    return out;
  },
});

/** The owner's whole shelf, published or not. Empty without the key. */
export const owned = query({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    if (!allowed(args.password)) return [];
    const rows = await ctx.db.query("worldMaps").collect();
    const out = [];
    for (const row of rows) out.push(await present(ctx, row));
    out.sort((a, b) => b.createdAt - a.createdAt);
    return out;
  },
});

/** Offer a map to everybody (or take it back). */
export const setPublished = mutation({
  args: { password: v.string(), id: v.id("worldMaps"), published: v.boolean() },
  handler: async (ctx, args) => {
    gate(args.password);
    await ctx.db.patch(args.id, { published: args.published });
    return args.published;
  },
});

/** A short-lived URL the browser POSTs the model to. */
export const uploadUrl = mutation({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    gate(args.password);
    return await ctx.storage.generateUploadUrl();
  },
});

/** Called once the bytes landed, to record what they are. */
export const register = mutation({
  args: {
    password: v.string(),
    storageId: v.id("_storage"),
    name: v.string(),
    fileName: v.string(),
    bytes: v.number(),
  },
  handler: async (ctx, args) => {
    gate(args.password);
    /* a fresh import takes over: one active map at a time */
    const active = await ctx.db
      .query("worldMaps")
      .withIndex("by_active", (q) => q.eq("active", true))
      .collect();
    for (const row of active) await ctx.db.patch(row._id, { active: false });

    return await ctx.db.insert("worldMaps", {
      name: args.name.trim().slice(0, 60) || "IMPORTED MAP",
      fileName: args.fileName.slice(0, 160),
      storageId: args.storageId,
      bytes: args.bytes,
      kind: kindOf(args.fileName),
      active: true,
      published: false,
      createdAt: Date.now(),
    });
  },
});

/** Change how a map is fitted and driven. */
export const tune = mutation({
  args: {
    password: v.string(),
    id: v.id("worldMaps"),
    fitTo: v.optional(v.number()),
    turn: v.optional(v.number()),
    cell: v.optional(v.number()),
    wallHeight: v.optional(v.number()),
    spawn: v.optional(v.union(spawnValidator, v.null())),
  },
  handler: async (ctx, args) => {
    gate(args.password);
    const patch: Record<string, unknown> = {};
    if (args.fitTo !== undefined) patch.fitTo = Math.max(0, Math.min(20000, args.fitTo));
    if (args.turn !== undefined) patch.turn = args.turn;
    if (args.cell !== undefined) patch.cell = Math.max(1, Math.min(20, args.cell));
    if (args.wallHeight !== undefined) patch.wallHeight = Math.max(0.5, Math.min(20, args.wallHeight));
    if (args.spawn !== undefined) {
      patch.spawn = args.spawn ?? undefined;
    }
    await ctx.db.patch(args.id, patch);
    return true;
  },
});

/** Make a map the one the game drives on. `null` goes back to the built city. */
export const setActive = mutation({
  args: { password: v.string(), id: v.union(v.id("worldMaps"), v.null()) },
  handler: async (ctx, args) => {
    gate(args.password);
    const rows = await ctx.db.query("worldMaps").collect();
    for (const row of rows) {
      const shouldBeActive = args.id !== null && row._id === args.id;
      if (row.active !== shouldBeActive) await ctx.db.patch(row._id, { active: shouldBeActive });
    }
    return true;
  },
});

/** Throw a map away, and its bytes with it. */
export const remove = mutation({
  args: { password: v.string(), id: v.id("worldMaps") },
  handler: async (ctx, args) => {
    gate(args.password);
    const row = await ctx.db.get(args.id);
    if (!row) return false;
    await ctx.storage.delete(row.storageId);
    await ctx.db.delete(row._id);
    return true;
  },
});
