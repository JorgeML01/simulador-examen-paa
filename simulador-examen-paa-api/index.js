const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const UserRouter = require("./src/routes/users.route");

require("dotenv").config();

// Haz un get de prueba para ver si funciona.
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(cors());
app.use(cookieParser());
app.use(UserRouter);

app.listen(3001);
