const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors()); //trengs for å kommunisere på tvers av adresser

app.post("/users/adduser", (req, res) => {
    const username = req.body["username"]
    const password = req.body["password"]

    console.log("Username:" + username);
    console.log("Password:" + password);

    const insertStatement = `INSERT INTO users ( username, password ) 
        VALUES ('${username}', '${password}');`; //viktig med single quotes og ikke hermetegn

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

app.listen(4000, () => console.log("Server on localhost:4000"));

