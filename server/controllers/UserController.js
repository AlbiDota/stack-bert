const userService = require("../services/UserService");

//controller blir logikk for requests, og gjør at requests kaller riktig service + 
//gir riktig respons

async function getAllUsers(req,res) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching users.");
    }
}

async function signupUser(req, res) {
    const {username, password } = req.body;
    try {
        await userService.signupUser(username, password);
        res.status(201).send("Sign-up successful!");
    } catch (err) {
        res.status(500).send("Error signing up.");
    }
}

async function loginUser(req, res) {
    const {username, password } = req.body;
    try {
        const user = await userService.loginUser(username, password);
        res.status(200).json({message: "Login successful", userId: user.user_id});
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {getAllUsers, signupUser, loginUser };