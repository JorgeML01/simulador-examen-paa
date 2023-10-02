const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users.controller");
const { authenticateToken } = require("../middlewares/middleware");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

// Make a get test route to test the middleware
router.get("/test", authenticateToken, (req, res) => {
  res.send("You are authenticated");
});

module.exports = router;
