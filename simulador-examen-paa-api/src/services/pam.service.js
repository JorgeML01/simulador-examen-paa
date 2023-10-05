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
      .select("pam.id_user", "users.name")
      .max({ highest_score: "pam.score" })
      .from("pam")
      .join("users", "users.id", "pam.id_user")
      .groupBy("pam.id_user", "users.name")
      .orderBy("highest_score", "desc");

    return scores;
  } catch (error) {
    throw error;
  }
};

module.exports = { getHighestScores };
