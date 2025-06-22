const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Spot = require('../models/Spot');

// POST /api/comments/:spotId
router.post('/comments/:spotId', async (req, res) => {
  try {
    const { spotId } = req.params;
    const { user, text, isPublic } = req.body;

    const spot = await Spot.findById(spotId);
    if (!spot) return res.status(404).json({ message: 'Spot not found' });

    const comment = new Comment({
      spot: spotId,
      user: user || 'Anonymous',
      text,
      isPublic: isPublic !== undefined ? isPublic : true
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/ratings/:spotId
router.post('/ratings/:spotId', async (req, res) => {
  try {
    const { spotId } = req.params;
    const { uniqueness, vibe, safety, crowd } = req.body;

    const spot = await Spot.findById(spotId);
    if (!spot) return res.status(404).json({ message: 'Spot not found' });

    spot.ratings = {
      uniqueness,
      vibe,
      safety,
      crowd,
    };

    await spot.save();
    res.status(200).json({ message: 'Rating updated', ratings: spot.ratings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
