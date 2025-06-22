const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: [Number], // [longitude, latitude]
  },
  category: String,
  story: String,
  images: [String],
  ratings: {
    vibe: { type: Number, default: 0 },
    safety: { type: Number, default: 0 },
    uniqueness: { type: Number, default: 0 },
    crowd: { type: Number, default: 0 },
  },
  createdAt: { type: Date, default: Date.now },
});

spotSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Spot", spotSchema);
