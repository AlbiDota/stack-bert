const ForumService = require("../services/ForumService");

// --------------- FORUM POSTS ---------------

async function getAllPosts(req, res) {
    try {
        const posts = await ForumService.getAllPosts();
        res.json(posts);
    } catch(err) {
        console.error(err);
        res.status(500).send("Error fetching posts")
    }
}

async function createPost(req, res) {
    const {postcreator, title, content} = req.body;
    try {
        await ForumService.createPost(postcreator,title,content);
        res.status(201).send("Post created");
    } catch(err) {
        res.status(500).send("Error creating post");
    }
}

module.exports = {getAllPosts, createPost};