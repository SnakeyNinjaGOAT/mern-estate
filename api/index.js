import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Routes
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server is currently listening on PORT: ${PORT}!`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
