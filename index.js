const {UserModel} = require("./modules/user.module")
const {connection} = require("./config/db")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors")
app.use(cors({
    origin : "*"
}))

app.get("/" , (req , res)=>{
    res.send("Home Page");
})



app.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;
    const isUser = await UserModel.findOne({ email });
  
    if (isUser) {
      return res.send("This email id is already registered. Please use another one.");
    }
  
    bcrypt.hash(password, 10, async function(err, hash) {
      if (err) {
        console.error("Error while hashing password:", err);
        return res.status(500).send("Internal server error");
      }
  
      const newUser = new UserModel({
        email: email,
        password: hash,
        name: name,
      });
  
      try {
        const data = await newUser.save();
        res.send(data);
      } catch (error) {
        console.error("Error while saving user:", error);
        res.status(500).send("Internal server error");
      }
    });
  });
  


  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const is_user = await UserModel.findOne({ email });
  
    if (is_user) {
      const hashed_pwd = is_user.password;
  
      bcrypt.compare(password, hashed_pwd, function(err, result) {
        if (result) {
          var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
          res.send({ msg: "Login successful", token: token });
        } else {
          res.send({ msg: "Wrong password. Please try again." });
        }
      });
    } else {
      res.send("User not found. Please sign up first.");
    }
  });
  





app.listen(8080 , async()=>{
    try {
        await connection 
        console.log("connected to db successfully");

    } catch(err){
        console.log("error while connecting" , err);
    }
    console.log("app is listning on port 8080")
})