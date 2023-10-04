const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const UserRouter = require("./src/routes/users.route");
const PAMRouter = require("./src/routes/pam.route");

require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(cors());
app.use(cookieParser());
app.use(UserRouter);
app.use(PAMRouter);

app.listen(3001);
