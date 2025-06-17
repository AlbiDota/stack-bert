const bcrypt = require("bcrypt");
const pool = require("../database");

//Service blir for business logic som databehandling og queries og whatevs

async function getAllUsers() {
    const getStatement = `SELECT user_id, username FROM users ORDER BY user_id ASC`;
    try {
        const response = await pool.query(getStatement);
        return response.rows;
    } catch (err) {
        throw new Error("Error fetching users: " + err.message);
    }
}

async function signupUser(username, password) {
    const hash = await bcrypt.hash(password,12) //4096
    const insertStatement = `INSERT INTO users ( username, password ) 
        VALUES ('$1', '$2');`;
    try {
        await pool.query(insertStatement,[username, hash]);
    } catch (err) {
        throw new Error("Error saving user: " + err.message);
    }
}

async function loginUser(username, password) {
    const getUser = `SELECT * FROM users WHERE username = $1 ORDER BY user_id ASC`;
    const result = await pool.query(getUser, [username]);
    if (result.rows.length === 0) {
        throw new Error("User not found");
    }

    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error("Wrong credentials");
    }

    return user;
}

module.exports = { getAllUsers, signupUser, loginUser };