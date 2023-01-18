import mongoose from "mongoose";
const getotp= async (req,res)=>{
    var email = String(req.body.email);
    var username = String(req.body.username);
    var password = String(req.body.password);
    var phone = Number(req.body.mobilenum);
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        throw saltError
      } else {
        bcrypt.hash(password, salt, function(hashError, hash) {
          if (hashError) {
            throw hashError
          } else {
            password=hash;
          }
        })
      }
    })
}
