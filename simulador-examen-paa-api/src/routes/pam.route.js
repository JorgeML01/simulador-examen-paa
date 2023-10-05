const express = require("express");
const router = express.Router();

const PAMController = require("../controllers/pam.controller");

router.get("/PAM", PAMController.getPamHighestScores);

module.exports = router;
