import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Save a finished session. Best values are merged into a single record per user
 * so the garage always shows personal records rather than raw runs.
 */
export const submitRun = mutation({
  args: {
    topSpeedKph: v.number(),
    best0to100: v.optional(v.number()),
    distanceKm: v.number(),
    driftPoints: v.number(),
    car: v.optional(v.string()),
    seconds: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Sign in to save your run");
    }

    const existing = await ctx.db
      .query("driverRecords")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (existing) {
      const best0to100 =
        args.best0to100 === undefined
          ? existing.best0to100
          : Math.min(existing.best0to100 ?? args.best0to100, args.best0to100);

      await ctx.db.patch(existing._id, {
        topSpeedKph: Math.max(existing.topSpeedKph, args.topSpeedKph),
        best0to100,
        bestDriftScore: Math.max(existing.bestDriftScore, args.driftPoints),
        distanceKm: existing.distanceKm + args.distanceKm,
        seconds: existing.seconds + args.seconds,
        runs: existing.runs + 1,
        car: args.car ?? existing.car,
        updatedAt: Date.now(),
      });
      return existing._id;
    }

    return await ctx.db.insert("driverRecords", {
      userId,
      car: args.car,
      topSpeedKph: args.topSpeedKph,
      best0to100: args.best0to100,
      bestDriftScore: args.driftPoints,
      distanceKm: args.distanceKm,
      seconds: args.seconds,
      runs: 1,
      updatedAt: Date.now(),
    });
  },
});

/** The signed in driver's records, or null. */
export const myStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;
    return await ctx.db
      .query("driverRecords")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
  },
});

/** Top drift scores across every driver. */
export const leaderboard = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db
      .query("driverRecords")
      .withIndex("by_drift")
      .order("desc")
      .take(12);

    return await Promise.all(
      rows.map(async (row) => {
        const user = await ctx.db.get(row.userId);
        const fallback = user?.email?.split("@")[0] ?? "Driver";
        return {
          id: row._id,
          name: user?.name ?? fallback,
          car: row.car ?? "—",
          driftScore: row.bestDriftScore,
          topSpeedKph: row.topSpeedKph,
          best0to100: row.best0to100 ?? null,
          runs: row.runs,
        };
      }),
    );
  },
});
