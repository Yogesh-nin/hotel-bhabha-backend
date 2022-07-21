import Booking from "../Database/booking";

export const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    next(error);
  }
};

// export const updateRoom = async (req, res, next) => {
//   try {
//     const updatedRoom = await Room.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedRoom);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateRoomAvailability = async (req, res, next) => {
//   try {
//     await Room.updateOne(
//       { "roomNumbers._id": req.params.id },
//       {
//         $push: {
//           "roomNumbers.$.unavailableDates": req.body.dates,
//         },
//       }
//     );
//     res.status(200).json("Room status has been updated.");
//   } catch (error) {
//     next(error);
//   }
// };

export const deleteBooking = async (req, res, next) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const booking = await Booking.find();
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};