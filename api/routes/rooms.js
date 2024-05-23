const express = require('express');
const Hotel = require('../models/Hotel');
const {CreateRoom , Deleteroom, Getallroom, Getroom, Updateroom } = require('../controllers/rooms');
const { verifyAdmin } = require('../utils/verify_token');
const router = express.Router();

//create
router.post('/:hostelid', verifyAdmin ,CreateRoom );
//update
router.put('/:id', verifyAdmin ,Updateroom );

//get
router.get('/:id',Getroom);

//getall
router.get('/',Getallroom );

//delete
router.delete('/:hotelid/:id', verifyAdmin,Deleteroom);

// Export the router
module.exports = router;
