import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
    guestDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GuestDetails",
    },
    cartData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CartData",
    },

    paymentID: {
      type: String,
    },
    datesBooked: [],
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
