import express from "express";
import { login, register } from "../Controllers/authController.js";

const Router = new express.Router();

Router.post("/register", register);
Router.get("/login", login);

export default Router;
