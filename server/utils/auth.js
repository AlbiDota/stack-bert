const jwt = require("jsonwebtoken");

const SECRET_KEY = "verySecret";

//"middleware" brukes for å validere tokens
//"next()" går videre liksom- typ caller ->
// authenticateToken, så brukern next(),
// og går til feks getAllUsers i routes
function authenticateToken(req, res, next) {
    const token = req.cookies.token;

    //send 401 hvis ingen token
    if (!token) {return res.status(401).send(401); } //idk klein setning

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) { return res.status(403).send(403);}
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;