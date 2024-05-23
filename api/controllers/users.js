const express = require('express');
const User = require('../models/User');


  const UpdateUser = async (req, res, next) => {
    try {
      const updateUser =  await User.findByIdAndUpdate(req.params.id , {$set: req.body} , {new:true})
      res.status(200).json(updateUser)
    } catch (error) {
      next(error)
    }
  }
  const DeleteUser =  async (req, res , next) => {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("Hotel Deleted")
    } catch (error) {
      next(error)
    }
  }
  const GetallUser = async (req, res , next) => {
    try {
      const getUser =  await User.find()
      res.status(200).json(getUser)
    } catch (error) {
     next(error)
    }
  }

const GetUser = async (req, res , next) => {
    try {
      const getUser =  await User.findById(req.params.id)
      res.status(200).json(getUser)
    } catch (error) {
      next(error)

    }
  }
module.exports = { GetUser , DeleteUser, UpdateUser , GetallUser };