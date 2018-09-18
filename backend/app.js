

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/userSchema");
const app = express();



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kumareshmamundi@gmail.com',
    pass: 'Kumaresh@93'
  }
});

// configuration


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose
  .connect(
    "mongodb://kumaresh:bCqKmES31pU7H640@cluster0-shard-00-00-ogpx5.mongodb.net:27017,cluster0-shard-00-01-ogpx5.mongodb.net:27017,cluster0-shard-00-02-ogpx5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });




app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// app.use("/home",(req,res)=>{
//   res.send("home");
// });


//signup


app.post("/home/signup", (req, res) => {
 User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      mobileNo: req.body.mobileNo,
      address: req.body.address
  }).then(function(add){
        if(!add){
          res.status(400).json({
            message: "Not registered",
            userId: add.firstName
         });
        }
        else{
          res.status(200).json({
            message: "Registered successfully",
            userId: add.firstName
         });
                  
        }
    });

});

app.get("/home/signup",(req,res)=>{
  User.find().then(function(user){
    if(!user){
          res.status(400).send();
        }
        else{
          res.status(200).send(user);
                  
        }
  });
});
app.delete("/home/signup/:id",(req,res)=>{
  User.findOneAndRemove({
      "_id": req.params.id
    }).then(function(show){
      if(!show){
        res.status(400).send("cant delete");
      }else{
        res.status(200).send(show);
      }
    });
});

//Login

app.post("/home/login",(req,res)=>{

  User.find({
    email: req.body.email,
    password: req.body.password
  }).then((user)=>{
    console.log(user);
    if(user.length > 0){     
            res.status(200).json({
              message: "login successfully",
              userId: user.firstName
            });
    } else{
      res.status(200).json({
        messsage: "username or password is null",
        userId: user.firstName
        });
     }
  })

})

//forget Password

app.post("/home/forget",(req,res)=>{

   User.find({
      email: req.body.email
    }).then((user)=>{
      // console.log(user[0].password);
         if(user.length>0){
          res.status(200).json({
                message: "Email sent",
                userId: user.firstName
              });
         }
              
      
      var mailOptions = {
          from: 'kumareshmamundi@gmail.com',
          to: req.body.email,
          subject: 'Instantigo',
          text:'Your password is '+ user[0].password+' don\'t share any one' 
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
    })

    

})


app.listen(3001, () =>{
  console.log('Connected port on 3001');
});