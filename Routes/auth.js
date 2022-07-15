import express from "express";
import { login, register } from "../Controllers/authController";

const Router = new express.Router();

Router.post("/register", register);
Router.get("/login", login);

export default Router;
