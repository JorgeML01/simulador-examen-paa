const express = require("express");
const router = express.Router();

const PAAController = require("../controllers/paa.controller");

router.get("/PAA", PAAController.getPaaHighestScores);

module.exports = router;
