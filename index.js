require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const print = require("./controller");

app.get("/", print);

app.get("/introduce", (req, res) => {
  res.send("hello I'm Hendry");
});

app.get("/home", (req, res) => {
  res.send("this is the home page");
});

app.post("/user", (req, res) => {
  const { name, email, password } = req.body;
  res.send(`Name: ${name}, email: ${email}, password: ${password}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
