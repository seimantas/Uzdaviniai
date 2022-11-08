const express = require("express");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ age: 27 });
});

app.post("/", (req, res) => {
  res.send({ age: req.body.age * 2 });
});

app.listen(PORT, () => {
  console.log(`${PORT} Server is running`);
});
