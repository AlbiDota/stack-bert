const pool = require("../database");


// --------------- FORUM POSTS ---------------
//denna bør sikkert begrenses egt, 
async function getAllPosts() {
    const getStatement = `SELECT * FROM forumposts ORDER BY created_at DESC`;
    try {
        const res = await pool.query(getStatement);
        return res.rows;
    } catch (err) {
        throw new Error("Error fetchign forum posts: " + err.message);
    }
}

async function createPost(username, title, content) {
    const postStatement = `INSERT INTO forumposts (postcreator, title, postcontent) 
        values ($1, $2, $3);`;
    try {
        await pool.query(postStatement, [username, title, content]);
    } catch (err) {
        throw new Error("Error creating post: " + err.message);
    }
}

module.exports = {getAllPosts, createPost, };