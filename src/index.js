const express = require("express");
const tagRoutes = require("./routes/tag");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", tagRoutes);

app.get("/health", ({ res }) => {
  res.status(200).send("Ok");
});

module.exports = app;
