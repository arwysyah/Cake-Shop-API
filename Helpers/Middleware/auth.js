

require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const auth = {
  verifyToken: (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader !== undefined) {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];

      try {
        const data = jwt.verify(token, secret);
        if (data) {
          req.id = data.id;
          req.username = data.username;
          req.email = data.email;
          req.password =data.password
          req.level = data.level;
          next();
        }
      } catch (err) {
        console.log(err);
        res.sendStatus(403);
      }
    } else {
      console.error("no bearer", bearerHeader);
      res.sendStatus(403);
    }
  },

  verifyAdmin: (req, res, next) => {
    if (req.level === 2) {
      next();
    } else {
      res.sendStatus(403);
    }
  },
  verifyUser: (req, res, next) => {
    if (req.level === 1) {
      next();
    } else {
      res.sendStatus(403);
    }
  }
};

module.exports = auth;




















// const {verify} = require('jsonwebtoken')

// module.exports = {
//   checkToken:(req,res,next)=>{
//     let token = req.get('authorization');
//     if (token){
//       token = token.slice(7)
//       verify(token,'kenzo',(error,decoded)=>{
//         if(error){
//           res.json({
//             success:0,
//             message:'invalid token'
//           })
//           next()
//         }else{
//           next()
//         }
//         res.json({
//           success:0,
//           message:'access denied ! unauthorized user'
//         })
//       })
//     }
//   }
// }