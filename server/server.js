
import express  from "express";
import { PORT, MONGO_DB_URL  } from "./connection.js";
import mongoose from "mongoose";
import cors from "cors";
import questionsRoute from "./routes/questionsRoute.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
  origin: "https://inquisitive-cascaron-3d4fb5.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))


app.use('/question', questionsRoute);
  
mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Running on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
