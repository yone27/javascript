const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/", (req, res) => {
  res.json({
    text: "api works"
  });
});
app.post("/api/login", (req, res) => {
  const user = { id: 3 };
  const token = jwt.sign({ user }, "my_secret_key");
  res.json({
    token
  });
});
app.get("/api/protected",ensureToken, (req, res) => {
  res.json({
    text: "protected"
  });
});

function ensureToken(req, res, next){
    const bearerHeader = req.headers['autorization']
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }else {
        res.sendStatus(403)
    }
}
app.listen(3000, (req, res) => {
  console.log("server on port 3000");
});
