const express = require("express");
const userController = require("../controllers/UserController");

//mapper endpoints til controllere

const router = express.Router();

router.get("/get-all", userController.getAllUsers);
router.post("/user-signup", userController.signupUser);
router.post("/user-login", userController.loginUser);

module.exports = router;