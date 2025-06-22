const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    required: true,
  },
  user: {
    type: String, 
    default: 'Anonymous',
  },
  text: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Comment', commentSchema);
