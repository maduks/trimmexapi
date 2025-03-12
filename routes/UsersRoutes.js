const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");
router.post("/create", AuthController.createUser);
router.post("/login", AuthController.loginUser);
module.exports = router;
