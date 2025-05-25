import pool from "../database";
import bcrypt from "bcrypt";

//export async function

const createTblQry = `CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) UNIQUE NOT NULL);`;

pool.query(createTblQry)
.then((Response) => {
    console.log("Table created");
    console.log(Response);
})
.catch((err) => {
    console.warn(err);
});