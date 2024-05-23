const jwt = require('jsonwebtoken')
const User = require('../models/User');
const CreatError = require('../utils/customError')
 const VerifyToken = async (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token)
    {
        return next(CreatError(401 , "You are not Authenticated"));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(CreatError(403, "Token is not valid!"));
        req.user = user;
        next();
      });

}
    




 const verifyUser = (req, res, next) => {
    VerifyToken(req, res, next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(CreatError(403, "You are not authorized!"));
      }
    });
  };
  
   const verifyAdmin = (req, res, next) => {
    VerifyToken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return next(CreatError(403, "You are not authorized!"));
      }
    });
  };

  module.exports = {verifyAdmin , verifyUser , verifyUser , VerifyToken}