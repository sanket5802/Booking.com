
const Hotel = require("../models/Hotel");
const  Room  = require("../models/Room");
const CreateRoom = async (req, res, next) => {
  const id = req.params.hostelid;
  const newroom = new Room(req.body);

  try {
    const savedroom = await newroom.save();

    // Check if the saved room is valid before pushing its ID
    if (savedroom && savedroom._id) {
      try {
        await Hotel.findByIdAndUpdate(id, {
          $push: { rooms: savedroom._id },
        });
        res.status(200).json(savedroom);
      } catch (error) {
        next(error);
      }
    } else {
      // Handle the case where the saved room is not valid
      res.status(400).json({ error: "Invalid room data" });
    }
  } catch (error) {
    next(error);
  }
};


const Updateroom = async (req, res, next) => {
  try {
    const updateroom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateroom);
  } catch (error) {
    next(error);
  }
};
const Deleteroom = async (req, res, next) => {
  const hotelId = req.params.hotelid;

  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
const Getallroom = async (req, res, next) => {
  try {
    const getroom = await Room.find();
    res.status(200).json(getroom);
  } catch (error) {
    next(error);
  }
};

const Getroom = async (req, res, next) => {
  try {
    const getroom = await Room.findById(req.params.id);
    res.status(200).json(getroom);
  } catch (error) {
    next(error);
  }
};
module.exports = { CreateRoom, Updateroom, Deleteroom, Getroom, Getallroom };
