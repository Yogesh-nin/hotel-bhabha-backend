import express from "express";
import {
  createBooking,
  getBooking,
  getBookings,
  deleteBooking,
} from "../controllers/bookingController";

import { verifyAdmin } from "../utils/verifyToken.js";

const Router = express.Router();
//CREATE
Router.post("/", createBooking);

//DELETE
Router.delete("/:id", deleteBooking);
//GET

Router.get("/:id", verifyAdmin, getBooking);
//GET ALL

Router.get("/", verifyAdmin, getBookings);

export default Router;
