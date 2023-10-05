const { getHighestScores } = require("../services/pccns.service");

async function getPccnsHighestScores(req, res) {
  const scores = await getHighestScores();
  res.json(scores);
}

module.exports = { getPccnsHighestScores };
