require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Database Connection
import ConnectDB from "./database/connection";

//API
import Room from "./API/rooms";

// const session = require("express-session");

const bha_bha = express();

bha_bha.use(cors());
bha_bha.use(express.json());
bha_bha.use(helmet());
// bha_bha.use(session({ secret: "ssshhhhh" }));

//Routes
bha_bha.use("/", Room);

bha_bha.get("/", (req, res) => {
  return res.json({ Welcome: `to my hotel-bhabha backend software` });
});

bha_bha.listen(4000, () => {
  ConnectDB(); //connect to database
});
