//import bcrypt from "bcrypt";
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors()); //trengs for å kommunisere på tvers av adresser


app.get("/users/get-all", (req,res) => {
    const getStatement = `SELECT user_id, username FROM users ORDER BY user_id ASC`

    pool.query(getStatement).then((response) => {
        console.log("Data recieved");
        console.log(response.rows);
        res.json(response.rows)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Error :(");
    })
});
//---
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

    const getUser = `SELECT * FROM users WHERE username = $1 ORDER BY user_id ASC`;
    const result = await pool.query(getUser, [username]);

    if (result.rows.length === 0) {
        console.log("User not found!");
        res.status(404).send("User not found!");
        return;
    };

    const user = result.rows[0];

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        console.log("Wrong password!");
        res.status(401).send("Wrong password!");
        return;
    }
    console.log("Success!")
    res.status(200).json({message: "Login successful", userId: user.user_id});
});
//---

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server runnign on ${PORT}`));

