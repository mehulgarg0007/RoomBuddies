const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");
const CookieParser = require('cookie-parser')

const Authenticate = async (req , res , next) => {
   try{
      const token = req.cookies.jwttoken ;
      const verifyToken = jwt.verify(token , process.env.SECRET_KEY) ;
      
      const rootUser = await User.findOne({_id : verifyToken._id,"tokens.token" : token }) ;

      if(!rootUser){
        throw new Error('User Not Found');
      }

      req.token = token ;
      req.rootUser = rootUser ;
      req.userId = rootUser._id ;

      next();
   }
   catch (err){
      res.status(401).send('Unauthorised : No token Provided') ;
      console.log(err) ;
   }
}

module.exports = Authenticate ;

