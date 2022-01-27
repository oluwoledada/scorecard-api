const playerScores = require("../model/model.js");

const getScores = (req, res) => {
  playerScores.find({ id: req.params.id }, { _id: 0, __v: 0 }, (err, data) => {
    if (err) {
      res.json(err);
    }
    res.json(data);
  });
};

module.exports = getScores;
