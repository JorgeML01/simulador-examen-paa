const { getHighestScores } = require("../services/pam.service");

async function getPamHighestScores(req, res) {
  const scores = await getHighestScores();
  res.json(scores);
}

module.exports = { getPamHighestScores };
