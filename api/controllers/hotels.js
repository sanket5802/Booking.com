const { default: mongoose } = require("mongoose");
const Hotel = require("../models/Hotel");
const Room = require('../models/Room')
const Getroom = require('./rooms').Getroom; 
const CreateHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

const UpdateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};
const DeleteHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted");
  } catch (error) {
    next(error);
  }
};

 const getHotels = async (req, res, next) => {
  const { city, min, max, limit } = req.query;
  try {
    let query = {};
    if (city) {
      query.city = city;
    }
    if (min && !isNaN(min)) {
      query.cheapestRoom = { $gt: parseInt(min) };
    }
    
    const hotels = await Hotel.find(query).limit(parseInt(limit) || 10);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};




const GetHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

const CountHotel = async (req, res, next) => {
  try {
    const cities = req.query.cities.split(",");
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

const Counttype = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

const { Types } = require('mongoose').mongo;

const GetHotelRoom = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
   

   
 
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
  

  } catch (err) {
    next(err);
  }
};



module.exports = {
  CreateHotel,
  GetHotel,
  DeleteHotel,
  UpdateHotel,
  CountHotel,
  Counttype,
  GetHotelRoom,
  getHotels
};
