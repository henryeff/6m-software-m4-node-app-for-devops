require("dotenv").config();
const express = require("express");
const app = express();

const print = require("./controller");

app.get("/", print);

app.get("/introduce", (req, res) => {
  res.send("hello I'm Hendry");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
