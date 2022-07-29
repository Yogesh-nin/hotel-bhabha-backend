import express from "express";
import {
  createBooking,
  getBooking,
  getBookings,
  deleteBooking,
  createCartData,
  createGuestDetails,
} from "../controllers/bookingController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const Router = express.Router();
//CREATE
Router.post("/", createBooking);
Router.post("/cart", createCartData);
Router.post("/guest", createGuestDetails);

//DELETE
Router.delete("/:id", deleteBooking);
//GET

Router.get("/:id", verifyAdmin, getBooking);
//GET ALL

Router.get("/", verifyAdmin, getBookings);

export default Router;
