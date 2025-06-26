const userService = require("../services/UserService");
const jwt =require("jsonwebtoken");
// passord kinda for tokens
const SECRET_KEY = "verySecret"; //flytter til env-fil seinere >>ZZZzzz

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

        //bruk JWT og mekk token
        const token = jwt.sign(
            {userId: user.user_id, username: user.username },
            SECRET_KEY,
            {expiresIn:"1h"}
        );

        //send token som HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 //1000ms * 60(s) * 60(min) = en time i ms
        })

        res.status(200).json({message: "Login successful"});
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).send("logged out)");
}

async function me(req, res) { //vi trenger ikke try-catch her fordi auth.js skal brukes først
    res.json({loggedIn: true, user: req.user });
}

module.exports = {getAllUsers, signupUser, loginUser, logoutUser, me };