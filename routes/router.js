const getScores = require("../controllers/getScores");
const getTopScores = require("../controllers/getTopScores");
const postScores = require("../controllers/postScores");

const router = require("express").Router();

router.get("/get/:id", getScores);
router.post("/post", postScores);
router.get("/top", getTopScores);

module.exports = router;
