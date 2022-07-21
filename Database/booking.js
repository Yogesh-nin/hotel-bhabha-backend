import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
    },

    totalGuest: {
      type: Number,
      required: true,
    },
    roomType: {
      type: String,
    },
    totalBill: {
      type: Number,
      required: true,
    },
    datesBooked: [],
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
