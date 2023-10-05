const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const UserRouter = require("./src/routes/users.route");
const PAMRouter = require("./src/routes/pam.route");
const PAARouter = require("./src/routes/paa.route");
const PCCNSRouter = require("./src/routes/pccns.route");

require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(cors());
app.use(cookieParser());
app.use(UserRouter);
app.use(PAMRouter);
app.use(PAARouter);
app.use(PCCNSRouter);

app.listen(3001);
