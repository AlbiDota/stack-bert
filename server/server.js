const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(express.json());
app.use(cors()); //trengs for å kommunisere på tvers av adresser

app.use("/users", userRoutes);



const PORT = process.env.PORT || 4000; //for seinere når jeg evt må bruke secrets
app.listen(PORT, () => console.log(`Server runnign on ${PORT}`));

