import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * GLOBAL ASSETS — the world's textures.
 *
 * The game's ground (roads, grass, water, ...) wears a set of named texture
 * slots. The shipped set lives in public/tex/; each row here replaces one
 * slot for *everybody*: one upload, every player, every session.
 *
 * Writing needs the owner's key (checked on the server, never in the bundle);
 * reading is open, because every player loads the world.
 */

const PASS = (process.env.WORLD_MAP_PASSWORD ?? "C5454aie").trim();

function gate(password: unknown) {
  if (typeof password !== "string" || password.trim() !== PASS || PASS.length === 0) {
    throw new Error("wrong key");
  }
}

const SLOTS = ["road", "grass", "concrete", "sand", "brick", "leaf", "water"] as const;
export type AssetSlot = (typeof SLOTS)[number];

export const isSlot = (s: string): s is AssetSlot =>
  (SLOTS as readonly string[]).includes(s);

/** Every override currently in force, with a fetchable URL. */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("worldAssets").collect();
    const out = [];
    for (const row of rows) {
      out.push({
        id: row._id,
        slot: row.slot,
        fileName: row.fileName,
        bytes: row.bytes,
        createdAt: row.createdAt,
        url: await ctx.storage.getUrl(row.storageId),
      });
    }
    out.sort((a, b) => a.slot.localeCompare(b.slot));
    return out;
  },
});

/** A short-lived URL the browser POSTs the image to. */
export const uploadUrl = mutation({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    gate(args.password);
    return await ctx.storage.generateUploadUrl();
  },
});

/** Called once the image landed: it replaces the slot's previous override. */
export const register = mutation({
  args: {
    password: v.string(),
    storageId: v.id("_storage"),
    slot: v.string(),
    fileName: v.string(),
    bytes: v.number(),
  },
  handler: async (ctx, args) => {
    gate(args.password);
    if (!isSlot(args.slot)) throw new Error(`unknown slot: ${args.slot}`);
    /* one row per slot: the new upload replaces the old one */
    const previous = await ctx.db
      .query("worldAssets")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .collect();
    for (const row of previous) {
      await ctx.storage.delete(row.storageId);
      await ctx.db.delete(row._id);
    }
    return await ctx.db.insert("worldAssets", {
      slot: args.slot,
      fileName: args.fileName.slice(0, 160),
      storageId: args.storageId,
      bytes: args.bytes,
      createdAt: Date.now(),
    });
  },
});

/** Reset a slot to the shipped texture. */
export const remove = mutation({
  args: { password: v.string(), id: v.id("worldAssets") },
  handler: async (ctx, args) => {
    gate(args.password);
    const row = await ctx.db.get(args.id);
    if (!row) return false;
    await ctx.storage.delete(row.storageId);
    await ctx.db.delete(row._id);
    return true;
  },
});
