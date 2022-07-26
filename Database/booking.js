import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
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

    totalGuest: {
      type: Number,
      
    },
    roomType: {
      type: String,
    },
    totalBill: {
      type: Number,
     
    },
    datesBooked: [],
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
