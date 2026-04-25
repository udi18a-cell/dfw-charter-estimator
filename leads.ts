import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
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
  }),
});
