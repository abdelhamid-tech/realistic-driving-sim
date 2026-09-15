import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * IMPORTED PROPS — the owner's real models for the street furniture.
 *
 * One row per slot (tree, plant, lamp, signal). The game dresses every tree,
 * planter, lamp post and traffic light of the world with these, in place of
 * the models it ships, for *every* player and in every session — on the
 * built-in city and on the shipped maps. Writing needs the owner's key
 * (checked on the server, never shipped in the bundle); reading is open,
 * because every player loads the world.
 */

const PASS = (process.env.WORLD_MAP_PASSWORD ?? "C5454aie").trim();

function gate(password: unknown) {
  if (typeof password !== "string" || password.trim() !== PASS || PASS.length === 0) {
    throw new Error("wrong key");
  }
}

/** The slots the world knows how to dress — keep in step with src/game/props.ts. */
const SLOTS = ["tree", "plant", "lamp", "signal"] as const;
export type PropSlotId = (typeof SLOTS)[number];

const isSlot = (s: string): s is PropSlotId => (SLOTS as readonly string[]).includes(s);

/** Every override currently in force, with a fetchable URL. */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("importedProps").collect();
    const out = [];
    for (const row of rows) {
      out.push({
        id: row._id,
        slot: row.slot,
        name: row.name,
        fileName: row.fileName,
        bytes: row.bytes,
        turn: row.turn ?? 0,
        scale: row.scale ?? 1,
        createdAt: row.createdAt,
        url: await ctx.storage.getUrl(row.storageId),
      });
    }
    out.sort((a, b) => a.slot.localeCompare(b.slot));
    return out;
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

/** Called once the model landed: it replaces that slot's previous override. */
export const register = mutation({
  args: {
    password: v.string(),
    storageId: v.id("_storage"),
    slot: v.string(),
    name: v.string(),
    fileName: v.string(),
    bytes: v.number(),
    turn: v.optional(v.number()),
    scale: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    gate(args.password);
    if (!isSlot(args.slot)) throw new Error(`unknown slot: ${args.slot}`);
    /* one row per slot: the new model replaces the old one everywhere */
    const previous = await ctx.db
      .query("importedProps")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .collect();
    for (const row of previous) {
      await ctx.storage.delete(row.storageId);
      await ctx.db.delete(row._id);
    }
    return await ctx.db.insert("importedProps", {
      slot: args.slot,
      name: args.name.trim().slice(0, 60) || args.fileName.replace(/\.[^.]+$/, "").slice(0, 60) || "IMPORTED",
      fileName: args.fileName.slice(0, 160),
      storageId: args.storageId,
      bytes: args.bytes,
      turn: args.turn ?? 0,
      scale: args.scale && args.scale > 0 ? args.scale : 1,
      createdAt: Date.now(),
    });
  },
});

/** Re-aim or re-size a model without uploading it again. */
export const tune = mutation({
  args: {
    password: v.string(),
    id: v.id("importedProps"),
    turn: v.optional(v.number()),
    scale: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    gate(args.password);
    const patch: Record<string, unknown> = {};
    if (args.turn !== undefined) patch.turn = Math.max(-360, Math.min(360, args.turn));
    if (args.scale !== undefined) patch.scale = Math.max(0.1, Math.min(10, args.scale));
    await ctx.db.patch(args.id, patch);
    return true;
  },
});

/** Put the shipped model back for that slot. */
export const remove = mutation({
  args: { password: v.string(), id: v.id("importedProps") },
  handler: async (ctx, args) => {
    gate(args.password);
    const row = await ctx.db.get(args.id);
    if (!row) return false;
    await ctx.storage.delete(row.storageId);
    await ctx.db.delete(row._id);
    return true;
  },
});
