import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {

    guest: {

      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    cart: [{
      roomid: {
        type: String,
      },
      roomName: {
        type: String,
      },
      quantity: {
        type: Number,
      },

    }],
    totalGuest: {
      type: Number,
    },
    totalBill: {
      type: Number,
    },
    razorpay_payment_id: {
      type: String,
    },

  },
  { timestamps: true },

);

export default mongoose.model("Booking", BookingSchema);
