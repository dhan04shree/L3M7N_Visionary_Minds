import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";

import playlistRoutes from "./routes/playlistRoutes.js";

import dotenv from "dotenv";
dotenv.config();
const DB_URL = process.env.MONGO_URL;
mongoose.connect(DB_URL)
   .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error("Error connecting to db", err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/playlists", playlistRoutes);
app.use("/api/auth",authRoute);
app.listen(process.env.PORT, () => {
  console.log(`app listetning to port ${process.env.PORT}`);
});