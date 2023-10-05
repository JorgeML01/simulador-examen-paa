const express = require("express");
const router = express.Router();

const PCCNSController = require("../controllers/pccns.controller");

router.get("/PCCNS", PCCNSController.getPccnsHighestScores);

module.exports = router;
