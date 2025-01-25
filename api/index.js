require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.json({ msg: "hello world test" });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
