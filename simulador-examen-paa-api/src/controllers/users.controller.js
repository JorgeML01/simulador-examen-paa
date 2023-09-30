const { registerUser, getCredentials } = require("../services/users.service");
const { isEmail, isPassword } = require("../utils/validator");
const HTTPCodes = require("../utils/HTTPCodes");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// TODO: Poner los HTTP codes desde el archivo utils si no me equivoco.

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

// TODO: Falta hacer todas las validaciones para que no truene el programa.
async function login(req, res) {
  const { email, password } = req.body;

  try {
    //! Ver por qué aquí sí puede ser const.
    const errorMessages = [];

    if (!isEmail(email)) errorMessages.push("Invalid email");
    else if (!isPassword(password)) errorMessages.push("Invalid password.");

    if (errorMessages.length) {
      res.status(400).send({ error: errorMessages });
    } else {
      const [credentials] = await getCredentials(email);

      const encryptedPassword = crypto
        .pbkdf2Sync(password, credentials.salt, 30000, 64, "sha256")
        .toString("base64");

      if (credentials.password === encryptedPassword) {
        const accessToken = jwt.sign(
          {
            email,
            id: credentials.id,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );

        const refreshToken = jwt.sign(
          { email, id: credentials.id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1m" }
        );

        res.send({ sucess: true, data: { accessToken, refreshToken } });
      } else {
        res
          .status(HTTPCodes.UNAUTHORIZED)
          .send({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    res
      .status(HTTPCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Try again later" });
  }
}

module.exports = { register, login };
