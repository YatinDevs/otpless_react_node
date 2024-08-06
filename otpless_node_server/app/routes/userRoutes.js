const express = require("express");
const { verifyTokenOTPless } = require("../middleware/verifyTokenMiddleware");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/verify-user", verifyTokenOTPless, userController.createUser);

module.exports = router;
