import bcrypt from "bcrypt";
const express = require("express");
const cors = require("cors");
const pool = require("./database");

const password = "bazinga1";

const hash = await bcrypt.hash(password, 10);

const erLike = await bcrypt.compare("bazinga1", hash); //returnerer true hvis de matcher
const app = express();

app.use(express.json());
app.use(cors()); //trengs for å kommunisere på tvers av adresser

app.post("/users/user-signup", async (req,res) => {
    const {username, password} = req.body;
    const hash = await bcrypt.hash(password, 12)

    //viktig med backticks og single quotes og ikke hermetegn
    const insertStatement = `INSERT INTO users ( username, password ) 
        VALUES ('${username}', '${hash}');`; 
    pool.query(insertStatement).then((response) => {
        console.log("Data saved");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

    console.log(req.body)
    res.send("Response recieved: " + req.body);
});

app.post("/users/user-login", async (req,res) => {
    const {username,password} = req.body;
    const getUser = `SELECT * FROM users WEHERE username = '${username}' ORDER BY user_id ASC`;
    const user = await pool.query(getUser);
    if (!user) {
        console.log("User not found!");
        res.status(404).send("User not found!");
        return;
    };

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        console.log("Wrong password!");
        res.status(401).send("Wrong password!");
        return;
    }

    res.status(200).send("Ok");
});

app.listen(4000, () => console.log("Server on localhost:4000"));