const mongoose = require("mongoose");

const playerScores = new mongoose.Schema({
  scores: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("playerScores", playerScores);
