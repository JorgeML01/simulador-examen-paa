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
    const scores = await knex
      .select("pccns.id_user", "users.name")
      .max("pccns.score as highest_score")
      .from("pccns")
      .join("users", "users.id", "pccns.id_user")
      .groupBy("pccns.id_user", "users.name");

    return scores;
  } catch (error) {
    throw error;
  }
};

module.exports = { getHighestScores };
