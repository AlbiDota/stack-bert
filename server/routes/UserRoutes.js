const express = require("express");
const userController = require("../controllers/UserController");
const authenticateToken = require("../utils/auth");

//mapper endpoints til controllere

const router = express.Router();

router.get("/get-all", userController.getAllUsers);
router.post("/user-signup", userController.signupUser);
router.post("/user-login", userController.loginUser);
router.post("/user-logout",userController.logoutUser);
router.get("/me", authenticateToken, userController.me)

module.exports = router;