const playerScores = require("../model/model.js");

const getTopScores = (req, res) => {
  playerScores
    .find()
    .sort({ scores: -1 })
    .exec(function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
};

module.exports = getTopScores;
