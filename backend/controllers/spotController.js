const Spot = require("../models/Spot");

exports.getSpots = async (req, res) => {
  try {
    const { lat, lng } = req.query;
    let spots = [];

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    // Check if both lat and lng are valid numbers
    const isValidCoords = !isNaN(latitude) && !isNaN(longitude);

    if (isValidCoords) {
      spots = await Spot.find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });
    } else {
      // If not valid, return all spots (e.g., for Feed, Search, etc.)
      spots = await Spot.find();
    }

    res.json(spots);
  } catch (err) {
    console.error("Error fetching spots:", err);
    res.status(500).json({ error: "Server error while fetching spots" });
  }
};

exports.addSpot = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      story,
      latitude,
      longitude,
      vibe,
      safety,
      uniqueness,
    } = req.body;

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lng)) {
      return res.status(400).json({ error: "Invalid latitude or longitude" });
    }

    const images = req.files.map((file) => file.path);

    const spot = new Spot({
      name,
      description,
      category,
      story,
      location: { type: "Point", coordinates: [lng, lat] },
      images,
      ratings: {
        vibe: parseInt(vibe) || 0,
        safety: parseInt(safety) || 0,
        uniqueness: parseInt(uniqueness) || 0,
        crowd: 0,
      },
    });

    await spot.save();
    res.status(201).json(spot);
  } catch (err) {
    console.error("Error adding spot:", err);
    res.status(500).json({ error: "Failed to add spot" });
  }
};
