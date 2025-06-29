const express = require("express");
const forumController = require("../controllers/ForumController");

const router = express.Router();

// --------------- FORUM POSTS ---------------
router.get("/get-all", forumController.getAllPosts);
router.post("/create-post", forumController.createPost);

module.exports = router;