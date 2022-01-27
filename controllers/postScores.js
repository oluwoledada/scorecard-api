const playerScores = require("../model/model.js");

const postScores = (req, res) => {
  const credit = new playerScores({
    id: req.body.id,
    scores: req.body.scores,
  });

  playerScores.countDocuments({ id: req.body.id }, function (err, count) {
    if (count > 0) {
      playerScores.findOneAndUpdate(
        { id: req.body.id },
        {
          $inc: {
            scores: req.body.scores,
          },
        },
        { new: true },
        (err, playerScore) => {
          if (err) {
            res.send(err);
          } else res.json(playerScore);
        }
      );
    } else {
      credit.save((err, image) => {
        if (err) {
          res.send(err);
        }
        res.json(image);
      });
    }
  });
};

module.exports = postScores;
