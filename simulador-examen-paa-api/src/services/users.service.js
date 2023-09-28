require("dotenv").config();

// LOCAL
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
      ca: process.env.DB_SSL_CA, // Provide the CA certificate content here
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
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCredentials = async (email) => {
  try {
    // Utiliza una consulta parametrizada para obtener las credenciales del usuario
    const result = await knex("users")
      .select("id", "password", "salt")
      .where({ email });

    // Verifica si se encontraron resultados y devuelve el primer resultado
    if (result.length > 0) {
      return {
        id: result[0].id,
        password: result[0].password,
        salt: result[0].salt,
      };
    } else {
      return null; // El usuario no se encontró
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getCredentials,
  registerUser,
};
