const { registerUser, getCredentials } = require("../services/users.service");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const { email, password } = req.body;
    const error = [];

    // TODO: Verificación de si es una contraseña o email correcto.
    if (error.length) {
      //! En caso de que haya un error en el formato de contraseña o correo.
      res.status(400).send("Aquí va el mensaje de error.");
    } else {
      const salt = crypto.randomBytes(128).toString("base64");
      const encryptedPassword = crypto
        .pbkdf2Sync(password, salt, 30000, 64, "sha256")
        .toString("base64");

      const [newUser] = await registerUser({
        ...req.body,
        encryptedPassword,
        salt,
      });

      res.send({ sucess: true, newUser });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500).send("Internal server error");
  }
}

module.exports = { register };
