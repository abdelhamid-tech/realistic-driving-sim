import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // one record per driver, holding their personal bests
    driverRecords: defineTable({
      userId: v.id("users"),
      car: v.optional(v.string()),
      topSpeedKph: v.number(),
      best0to100: v.optional(v.number()),
      bestDriftScore: v.number(),
      distanceKm: v.number(),
      seconds: v.number(),
      runs: v.number(),
      updatedAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_drift", ["bestDriftScore"]),

    // one row per driver currently on the road. Rows are written a handful of
    // times a second and deleted when a driver leaves or goes quiet, so this
    // table stays small: it is a live map, not a history.
    presence: defineTable({
      room: v.string(),
      session: v.string(),
      userId: v.optional(v.id("users")),
      name: v.string(),
      carId: v.string(),
      carName: v.string(),
      kind: v.string(),
      paint: v.number(),
      x: v.number(),
      y: v.number(),
      z: v.number(),
      yaw: v.number(),
      speed: v.number(),
      updatedAt: v.number(),
    })
      .index("by_room", ["room", "updatedAt"])
      .index("by_session", ["session"]),

    // World maps dropped in from the hidden import page: one row per model,
    // plus the tuning the loader reads. `active` marks the one the game
    // drives on; no active row means the built-in procedural city.
    worldMaps: defineTable({
      name: v.string(),
      fileName: v.string(),
      storageId: v.id("_storage"),
      bytes: v.number(),
      /** "glb" | "zip" | "fbx" — how the loader has to open it */
      kind: v.string(),
      active: v.boolean(),
      /** metres across the longest side; 0 keeps the model's own units */
      fitTo: v.optional(v.number()),
      /** degrees to yaw the model so its streets line up with the car */
      turn: v.optional(v.number()),
      /** height field cell size in metres */
      cell: v.optional(v.number()),
      /** vertical faces taller than this become walls */
      wallHeight: v.optional(v.number()),
      /** where the car starts; absent means "find the widest street" */
      spawn: v.optional(
        v.object({ x: v.number(), z: v.number(), yaw: v.number() }),
      ),
      createdAt: v.number(),
    }).index("by_active", ["active"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
