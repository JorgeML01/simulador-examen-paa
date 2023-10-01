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
      // Enable SSL/TLS
      rejectUnauthorized: true, // Reject unauthorized connections
    },
  },
});

const registerUser = async (user) => {
  try {
    // Utiliza una consulta parametrizada para insertar un nuevo usuario
    return await knex("users").insert({
      email: user.email,
      password: user.encryptedPassword,
      salt: user.salt,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCredentials = async (email) => {
  let credentials = await knex
    .select("password", "salt", "id")
    .from("users")
    .where("email", email);
  credentials = JSON.stringify(credentials);
  return JSON.parse(credentials);
};

module.exports = {
  getCredentials,
  registerUser,
};
