const express = require("express");
const router = express.Router();

const PamController = require("../controllers/pam.controller");

router.get("/PAM", PamController.getPamHighestScores);

module.exports = router;
