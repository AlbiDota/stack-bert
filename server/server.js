const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({ //trengs for å kommunisere på tvers av adresser
    origin: process.env.ORIGIN || "http://localhost:3000",
    credentials: true
})); 

app.use("/users", userRoutes);



const PORT = process.env.PORT || 4000; //for seinere når jeg evt må bruke secrets
app.listen(PORT, () => console.log(`Server runnign on ${PORT}`));

