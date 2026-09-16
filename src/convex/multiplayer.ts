import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
/* the lobby size the game submitted to CrazyGames, shared with the lobby UI so
   the cap on screen is the cap the relay enforces */
import { LOBBY_MAX, lobbyFullMessage } from "../game/lobby";

/**
 * Live multiplayer: one row per driver in a room, rewritten a handful of times
 * a second. A room is just a string, so an invite is a link (`/drive?room=XYZ`).
 * Rows older than a few seconds are treated as gone and swept up on the next
 * publish, which keeps the table to the number of people actually driving.
 */

/** How long a silent driver stays visible, in ms. */
const TTL = 9000;
/**
 * Hard cap per room: the maximum lobby size the game submitted to CrazyGames
 * (src/game/lobby.ts), so it is also the cap that stops a scripted client
 * flooding a room.
 */
const MAX_DRIVERS = LOBBY_MAX;
const MAX_SWEEP = 24;

function cleanRoom(raw: string) {
  return raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 20) || "apex-city";
}

/** Upsert our own position and return the room we landed in. */
export const publish = mutation({
  args: {
    room: v.string(),
    session: v.string(),
    /** the pseudonym the driver typed at the door; falls back to the session */
    name: v.optional(v.string()),
    carId: v.string(),
    carName: v.string(),
    kind: v.string(),
    paint: v.number(),
    x: v.number(),
    y: v.number(),
    z: v.number(),
    yaw: v.number(),
    speed: v.number(),
  },
  handler: async (ctx, args) => {
    const room = cleanRoom(args.room);
    const session = args.session.slice(0, 64);
    const now = Date.now();

    /* there are no accounts: a driver is only ever the name they typed */
    const userId = await getAuthUserId(ctx);
    const user = userId ? await ctx.db.get(userId) : null;
    const name =
      args.name?.trim().slice(0, 16) ||
      user?.name ||
      `DRIVER ${session.slice(-4).toUpperCase()}`;

    const rows = await ctx.db
      .query("presence")
      .withIndex("by_room", (q) => q.eq("room", room))
      .collect();

    /* sweep the room: gone-quiet drivers, and anyone over the cap */
    let swept = 0;
    const live = [];
    for (const row of rows) {
      if (row.updatedAt < now - TTL) {
        if (swept++ < MAX_SWEEP) await ctx.db.delete(row._id);
        continue;
      }
      live.push(row);
    }

    const mine = live.find((row) => row.session === session);
    /* A full lobby turns the next driver away instead of quietly dropping the
       one who has been here longest: the player has to be told, and the lobby
       size the game was submitted with has to mean something. Rows that went
       quiet were already swept above, so a stale row can never lock a room. */
    if (!mine && live.length >= MAX_DRIVERS) throw new Error(lobbyFullMessage(room));

    const fields = {
      room,
      session,
      userId: userId ?? undefined,
      name,
      carId: args.carId.slice(0, 48),
      carName: args.carName.slice(0, 48),
      kind: args.kind.slice(0, 16),
      paint: args.paint,
      x: args.x,
      y: args.y,
      z: args.z,
      yaw: args.yaw,
      speed: args.speed,
      updatedAt: now,
    };

    if (mine) {
      await ctx.db.patch(mine._id, fields);
    } else {
      await ctx.db.insert("presence", fields);
    }

    return { room, name, drivers: live.length + (mine ? 0 : 1) };
  },
});

/** Everyone driving in this room right now, ourselves included. */
export const peers = query({
  args: { room: v.string() },
  handler: async (ctx, args) => {
    const room = cleanRoom(args.room);
    const cutoff = Date.now() - TTL;
    const rows = await ctx.db
      .query("presence")
      .withIndex("by_room", (q) => q.eq("room", room).gt("updatedAt", cutoff))
      .take(MAX_DRIVERS);

    return rows.map((row) => ({
      session: row.session,
      name: row.name,
      carId: row.carId,
      carName: row.carName,
      kind: row.kind,
      paint: row.paint,
      x: row.x,
      y: row.y,
      z: row.z,
      yaw: row.yaw,
      speed: row.speed,
      /** ms since their last update — drives the "connecting…" hint */
      age: Date.now() - row.updatedAt,
    }));
  },
});

/** Called when a driver leaves the room or closes the tab. */
export const leave = mutation({
  args: { session: v.string() },
  handler: async (ctx, args) => {
    const session = args.session.slice(0, 64);
    const rows = await ctx.db
      .query("presence")
      .withIndex("by_session", (q) => q.eq("session", session))
      .collect();
    for (const row of rows) await ctx.db.delete(row._id);
    return rows.length;
  },
});
