import mongoose from "mongoose";
const GuestDetailsSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export default mongoose.model("GuestDetails", GuestDetailsSchema);
