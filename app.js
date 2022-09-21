const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

// middle ware
app.use(cors());
app.use(express.json());

// router connect
const tourRoute = require("./routes/tour.route");

// database route api
app.use("/api/v1/tour", tourRoute);

app.get("/", (req, res) => {
  res.send("Wow, Our Tour server running!!!!");
});

app.get("/home", (req, res) => {
  res.send({ message: "this is Home Page" });
});

module.exports = app;
