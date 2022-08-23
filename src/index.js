const express = require("express");
const tagRoutes = require("./routes/tag");
const tagsRoutes = require("./routes/tags");
const articleRoutes = require("./routes/article");
const commentRoutes = require("./routes/comment");
const sourceRoutes = require("./routes/source");
const profileRoutes = require("./routes/profile");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, OPTIONS");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.use("/", tagRoutes);
app.use("/", tagsRoutes);
app.use("/", articleRoutes);
app.use("/", commentRoutes);
app.use("/", sourceRoutes);
app.use("/", profileRoutes);

app.get("/health", ({ res }) => {
  res.status(200).send("Ok");
});

module.exports = app;
