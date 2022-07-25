import mongoose from "mongoose";
const cartDataSchema = new mongoose.Schema(
  {
    totalGuest: {
      type: Number,
    },
    roomType: {
      type: String,
    },
    totalRoom: {
      type: Number,
    },
    totalBill: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("cartData", cartDataSchema);
