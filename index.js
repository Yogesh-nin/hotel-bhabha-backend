// require("dotenv").config();
import {} from 'dotenv/config'
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

//Database Connection
import ConnectDB from "./Database/connection.js";

//route
import authRoute from "./Routes/auth.js";
import roomRoute from "./Routes/rooms.js";
import userRoute from "./Routes/user.js";

const bha_bha = express();

bha_bha.use(cors());
bha_bha.use(express.json());
bha_bha.use(helmet());
bha_bha.use(cookieParser());

//middleware
bha_bha.use("/api/auth", authRoute);
bha_bha.use("/api/user", userRoute);
bha_bha.use("/api/room", roomRoute);

bha_bha.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

bha_bha.get("/", (req, res) => {
  return res.json({ Welcome: `to my hotel-bhabha backend software` });
});

bha_bha.listen(4000, () => {
  ConnectDB(); //connect to database
});
