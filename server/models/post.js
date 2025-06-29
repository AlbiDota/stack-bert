import { response } from "express";
import pool from "../database";

const createTblQry = `CREATE TABLE forumposts (
	post_id serial PRIMARY KEY,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_edited TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	postcreator VARCHAR(100) REFERENCES users(username) ON DELETE CASCADE,
	title VARCHAR(255),
	postcontent TEXT NOT NULL
);`;

pool.query(createTblQry)
.then((Response)=> {
    console.log("Table 'forumposts' crated");
    console.log(Response);
})
.catch((err) => {
    console.warn(err);
});