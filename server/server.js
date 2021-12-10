require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./config/connection");
const questionsRoute = require("./routes/questions");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/questions", questionsRoute);

app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
    console.log("MongoDB database connection established successfully!");
  });
});
