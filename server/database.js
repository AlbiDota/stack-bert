const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "2424",
    host: "localhost",
    port: 5432,
    database: "stackbertdb"
})


/* 
pool.query("CREATE DATABASE stackbertdb;")
.then((Response) => {
    console.log("Database created");
    console.log(Response);
})
.catch((err) => {
    console.warn(err);
});


const createTblQry = `CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL);`;

pool.query(createTblQry)
.then((Response) => {
    console.log("Table created");
    console.log(Response);
})
.catch((err) => {
    console.warn(err);
});
*/

module.exports = pool