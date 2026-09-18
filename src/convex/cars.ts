import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * IMPORTED CARS — vehicles the owner adds from /import.
 *
 * Every player sees them in the garage, appended to the built-in library,
 * like any other car. Writing needs the owner's key (checked on the server,
 * never shipped in the bundle); reading is open, because every player loads
 * the garage.
 */

const PASS = (process.env.WORLD_MAP_PASSWORD ?? "C5454aie").trim();

function gate(password: unknown) {
  if (typeof password !== "string" || password.trim() !== PASS || PASS.length === 0) {
    throw new Error("wrong key");
  }
}

/** Every imported car, with a fetchable URL, newest first. */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("importedCars").collect();
    const out = [];
    for (const row of rows) {
      out.push({
        id: row._id,
        name: row.name,
        fileName: row.fileName,
        bytes: row.bytes,
        preset: row.preset,
        turn: row.turn ?? 0,
        speed: row.speed ?? 1,
        klass: row.klass ?? "Imported car",
        createdAt: row.createdAt,
        url: await ctx.storage.getUrl(row.storageId),
      });
    }
    out.sort((a, b) => b.createdAt - a.createdAt);
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

/** Called once the bytes landed: records the car in the public garage. */
export const register = mutation({
  args: {
    password: v.string(),
    storageId: v.id("_storage"),
    name: v.string(),
    fileName: v.string(),
    bytes: v.number(),
    preset: v.string(),
    turn: v.optional(v.number()),
    speed: v.optional(v.number()),
    klass: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    gate(args.password);
    return await ctx.db.insert("importedCars", {
      name: args.name.trim().slice(0, 40) || args.fileName.replace(/\.[^.]+$/, "").slice(0, 40) || "IMPORTED",
      fileName: args.fileName.slice(0, 160),
      storageId: args.storageId,
      bytes: args.bytes,
      preset: args.preset,
      turn: args.turn ?? 0,
      speed: args.speed ?? 1,
      klass: args.klass?.trim().slice(0, 60) || undefined,
      createdAt: Date.now(),
    });
  },
});

/** Change how a car drives or which way its body faces. */
export const tune = mutation({
  args: {
    password: v.string(),
    id: v.id("importedCars"),
    preset: v.optional(v.string()),
    turn: v.optional(v.number()),
    speed: v.optional(v.number()),
    name: v.optional(v.string()),
    klass: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    gate(args.password);
    const patch: Record<string, unknown> = {};
    if (args.preset !== undefined) patch.preset = args.preset;
    if (args.turn !== undefined) patch.turn = Math.max(-1, Math.min(360, args.turn));
    if (args.speed !== undefined) patch.speed = Math.max(0.5, Math.min(2, args.speed));
    if (args.name !== undefined && args.name.trim()) patch.name = args.name.trim().slice(0, 40);
    if (args.klass !== undefined) patch.klass = args.klass.trim().slice(0, 60) || undefined;
    await ctx.db.patch(args.id, patch);
    return true;
  },
});

/** Remove the car and its bytes. */
export const remove = mutation({
  args: { password: v.string(), id: v.id("importedCars") },
  handler: async (ctx, args) => {
    gate(args.password);
    const row = await ctx.db.get(args.id);
    if (!row) return false;
    await ctx.storage.delete(row.storageId);
    await ctx.db.delete(row._id);
    return true;
  },
});

/**
 * Clear the whole imported fleet — every row, and the bytes behind it, so a
 * wiped garage does not leave storage bills behind. The built-in library is
 * not touched: it lives in the bundle, not in this table.
 *
 * Returns how many cars went, so the button can say it out loud.
 */
export const removeAll = mutation({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    gate(args.password);
    const rows = await ctx.db.query("importedCars").collect();
    for (const row of rows) {
      await ctx.storage.delete(row.storageId);
      await ctx.db.delete(row._id);
    }
    return rows.length;
  },
});
