require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Database Connection
import ConnectDB from "./database/connection";

// const session = require("express-session");

const bha_bha = express();

bha_bha.use(cors());
bha_bha.use(express.json());
bha_bha.use(helmet());
// bha_bha.use(session({ secret: "ssshhhhh" }));

bha_bha.listen(4000, () => {
  ConnectDB(); //connect to database
});
