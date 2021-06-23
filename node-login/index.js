const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

// create express app
const app = express();
const cors = require("cors");
// parse requests of content-type - application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.get("/", (req, res, next) => {
  res.send("API Works!!!!!");
});
app.get("/api", (req, res) => {
  res.json({
    message: "Hey there",
  });
});

app.post("/api/posts", (req, res) => {
  res.json({ message: "post created" });
});

app.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    username: "JOhn",
    email: "john@gmail.com",
  };

  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token,
      name: req.body.username,
    });
  });
});

app.listen(3000, () => {
  console.log(`App running on port`);
});
