const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
var swal =require("sweetalert");
const app = express();
const path =require("path")
// var fetchController=require('node-fetch')
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = process.env.URL;
require('dotenv').config();


// to make otp

function otp(length) {
  var result = "";
  var characters = "0123456789";
  var characterslength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characterslength));
  }
  
  return Number(result);
}

// New app using express module
app.use(express.json()
  );
  app.post('/getotp', (req, res) => {
    const yourObject = req.body.object;
    // Do something with your object
  });
  app.get("/api",(req,res)=>{
    res.json({"hello":["Ladies","Gentlemen","Nigga"]})
  })

  // app.get("/login", function (_req, res) {
  //   res.sendFile(__dirname + "/sample1.html");
  // });
  // app.get("/signup", (_req, res) => {
  //   res.sendFile(__dirname + "/sample.html");
  // });
  // app.get("/Profile", (_req, res) => {
  //   // res.sendFile(__dirname + "/dash.html");
  //   app.set('views',path.join(__dirname,'views'));
  //   app.set('view engine','pug');
  //   res.render('index',{
  //     username:'helloworld'
  //   })
  // });
  
  // method to retrieve email password and username from index.html
  app.post("/getotp", function (req, _res) {
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
    
    
    //creating Database
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = { 'email':email, 'username': username,
      'password':password,'phone':phone,
      'otp':torp1
    }
    if((dbo.collection("users").find({'email':email}).count())){
      swal("Good job!", "You clicked the button!", "error");
      
    }
    else{  
      dbo.collection("reg").insertOne(myobj, function(err, _res) {
        if (err) throw err;
        console.log("1 new user added to list for");
      })
      db.close(); 
    }
    });
      
      
    //node mailer transport
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  var torp1 = otp(5);
  var mailOptions = {
    from: process.env.EMAIL,
    to: email,
    text:
    "OTP for user " +
    username +
    " " +
    String(torp1) +
    " phone: " +
    phone,
    subject: "Welcome to lunchin",
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent! " + info.response);
    }
  });
  
  app.post("/totp-validate", (req, res) => {
    
    // if (Number(req.body.totp) == torp1) {
      swal("Welcome!", "User Created sucessfully!", "success");
      
      console.log("true");
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      var myobj = { 'email':email, 'username': username,
      'password':password,'phone':phone
    };
      dbo.collection("users").insertOne(myobj, function(err, _res) {
        if (err) throw err;
        console.log("1 user verified");
        db.close();
      });
    });
    const databasename = "mydb";  // Database name
    
     MongoClient.connect(url).then((client) => {
      
        const connect = client.db(databasename);
      
        // Connect to collection
          const collection = connect
            .collection("users");
            
        collection.findOne({'email':email}).then((ans) => {
        console.log(ans.username);
        console.log(ans.email);
        console.log(ans.phone);
        
      });
    }).catch((err) => {
      
      // Printing the error message
      console.log(err.Message); 
    }) 
    // res.sendFile(__dirname + "/dash.html");
    app.set('views',path.join(__dirname,'views'));
    app.set('view engine','pug');
    res.render('index',{
      username: username,
      email:email,
      phone:phone

    })
      
    // } else {
    //   console.log("Wrong password");
    //   res.redirect("/");
    // }
  });
  
});



app.listen(4444, function () {
  console.log("started!!!");
});
