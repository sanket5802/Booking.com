const express = require('express');
const Hotel = require('../models/Hotel');
const { CreateHotel, UpdateHotel, GetHotel, getHotels, DeleteHotel, CountHotel, Counttype, GetHotelRoom, GetallHotelLoca } = require('../controllers/hotels');
const { verifyAdmin } = require('../utils/verify_token');
const router = express.Router();

//create
router.post('/', verifyAdmin ,CreateHotel );
//update
router.put('/:id', verifyAdmin ,UpdateHotel );



//getall
router.get('/', getHotels );

//delete
router.delete('/:id', verifyAdmin,DeleteHotel);
//get
router.get('/find/:id',GetHotel);
router.get('/room/:id' ,GetHotelRoom )
router.get('/Countcity' , CountHotel)
router.get('/Counttype' , Counttype)

// Export the router
module.exports = router;
