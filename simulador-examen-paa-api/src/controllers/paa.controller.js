const { getHighestScores } = require("../services/paa.service");

async function getPaaHighestScores(req, res) {
  const scores = await getHighestScores();
  res.json(scores);
}

module.exports = { getPaaHighestScores };
