const { registerUser, getCredentials } = require("../services/users.service");
const { isEmail, isPassword } = require("../utils/validator");
const HTTPCodes = require("../utils/HTTPCodes");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const { email, password } = req.body;
    const error = [];

    // Verifies if the email and password are valid.
    if (!isEmail(email)) error.push("Invalid email");
    if (!isPassword(password)) error.push("Invalid password.");

    if (error.length) {
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
    console.log("User already exists.");
    res
      .status(HTTPCodes.INTERNAL_SERVER_ERROR)
      .send({ error: "Internal server error" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
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
