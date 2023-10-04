require("dotenv").config();

// Cloud
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    ssl: {
      rejectUnauthorized: true,
    },
  },
});

const getHighestScores = async () => {
  try {
    let scores = await knex
      .select("id_user")
      .max("score as highest_score")
      .from("pam")
      .groupBy("id_user");

    return scores;
  } catch (error) {
    throw error;
  }
};

module.exports = { getHighestScores };
