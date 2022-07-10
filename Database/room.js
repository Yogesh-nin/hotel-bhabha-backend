import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Room Name is required"],
    // maxlength: [100, "Room name must be 100 charcter long"],
  },
  pricePerNight: {
    type: Number,
    // required: [true, "Room Price is required"],
    default: 0.0,
  },
  description: {
    type: String,
    // required: [true, "Room Desc is required"],
  },

  guestCapacity: {
    type: Number,
    // required: [true, "Room guest number is required"],
  },

  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  ac: {
    type: Boolean,
    default: false,
  },

  roomCleaning: {
    type: Boolean,
    default: false,
  },

  images: [{ public_id: { type: String }, url: { type: String } }],
});

export const RoomModel = mongoose.model("Room", RoomSchema);
