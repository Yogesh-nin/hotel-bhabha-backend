// Libraries
import express from "express";

// Database modal
import { RoomModel } from "../Database/room";

const Router = new express.Router();

/**
 * Route        /booking
 * Des          GET rooms
 * Params       _id
 * Access       Public
 * Method       get
 */
Router.get("/booking", async (req, res) => {
  try {
    const rooms = await RoomModel.find();

    return res.json({ rooms });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /room/:_id
 * Des          GET room based on id
 * Params       _id
 * Access       Public
 * Method       GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const rooms = await RoomModel.findById(_id);
    return res.json({ rooms });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /room
 * Des          post room
 * Params       _id
 * Access       Public
 * Method       post
 */

Router.post("/room", async (req, res) => {
  try {
    const { room } = req.body;
    const newRoom = await RoomModel.create(room);
    return res.json({ newRoom });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
