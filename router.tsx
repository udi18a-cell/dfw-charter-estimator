import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    departure: v.string(),
    destination: v.string(),
    date: v.string(),
    passengers: v.number(),
    tripType: v.string(),
    aircraftCategory: v.string(),
    bags: v.number(),
    pets: v.boolean(),
    catering: v.string(),
    wifi: v.boolean(),
    estimateRange: v.string(),
  },
  returns: v.id("leads"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", args);
  },
});
