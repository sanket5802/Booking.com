const express = require('express');
const User = require('../models/User');
const {   GetUser , DeleteUser, UpdateUser , GetallUser } = require('../controllers/users');
const { verifyUser, verifyAdmin } = require('../utils/verify_token');
const router = express.Router();

//update
router.put('/:id' ,UpdateUser );

//get
router.get('/:id', verifyUser,GetUser);

//getall
router.get('/', verifyAdmin, GetallUser );

//delete
router.delete('/:id',  verifyUser,DeleteUser);

// Export the router
module.exports = router;
