const {UserModel} = require("./modules/user.module")
const {connection} = require("./config/db")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {iPhone14Model} = require("./modules/Phone14.module") 
const {iPhone15Model} = require("./modules/Phone15.module")
const {iPhone13Model} = require("./modules/Phone13.module")

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


// .............................SIGN UP ..................................
app.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;
    const isUser = await UserModel.findOne({ email });
  
    if (isUser) {
      return res.status(409).send("This email id is already registered. Please use another one.");
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
        res.status(200).send(data);
      } catch (error) {
        console.error("Error while saving user:", error);
        res.status(500).send("Internal server error");
      }
    });
  });
  
//...........................................LOGIN.....................................................

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const is_user = await UserModel.findOne({ email });
  
    if (is_user) {
      const hashed_pwd = is_user.password;
  
      bcrypt.compare(password, hashed_pwd, function(err, result) {
        if (result) {
          var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
          res.status(200).send({ msg: "Login successful", token: token });
        } else {
          res.status(422).send({ msg: "Wrong password. Please try again." });
        }
      });
    }
     else {
      res.status(409).send("User not found. Please sign up first.");
    }
  });


// .......................GET IPHONE 14 .................................
  app.get("/iphone14/:id", async (req, res) => {
    const { id } = req.params; // Use "id" as the parameter name
    try {
      const data = await iPhone14Model.findById(id); // Use "id" directly
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("iPhone14 not found"); // Handle the case when the data is not found
      }
    } catch (error) {
      console.error("Error retrieving iPhone14 data:", error);
      res.status(500).send("Internal server error"); // Handle other errors
    }
  });
  

  app.post("/iphone14add", async (req, res) => {
    const {
      iPhone14, iPhone14Blue, iPhone14Purple, iPhone14Yellow,
      iPhone14Black, iPhone14White, iPhone14Red,
      iPhone14Blue128, iPhone14Purple128, iPhone14Yellow128,
      iPhone14Black128, iPhone14White128, iPhone14Red128,
      iPhone14Blue256, iPhone14Purple256, iPhone14Yellow256,
      iPhone14Black256, iPhone14White256, iPhone14Red256,
      iPhone14Blue512, iPhone14Purple512, iPhone14Yellow512,
      iPhone14Black512, iPhone14White512, iPhone14Red512
    } = req.body;
  
    const iphone14Data = {
      iPhone14, iPhone14Blue, iPhone14Purple, iPhone14Yellow,
      iPhone14Black, iPhone14White, iPhone14Red,
      iPhone14Blue128, iPhone14Purple128, iPhone14Yellow128,
      iPhone14Black128, iPhone14White128, iPhone14Red128,
      iPhone14Blue256, iPhone14Purple256, iPhone14Yellow256,
      iPhone14Black256, iPhone14White256, iPhone14Red256,
      iPhone14Blue512, iPhone14Purple512, iPhone14Yellow512,
      iPhone14Black512, iPhone14White512, iPhone14Red512
    };
  
    try {
      const data = await iPhone14Model.create(iphone14Data);
      res.send(data);
    } catch (error) {
      console.error("Error creating iPhone14 record:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  

  // ............................ GET IPHONE 15  ...........................

  app.get("/iphone15/:id", async (req, res) => {
    const { id } = req.params; // Use "id" as the parameter name
    try {
      const data = await iPhone15Model.findById(id); // Use "id" directly
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("iPhone15 not found"); // Handle the case when the data is not found
      }
    } catch (error) {
      console.error("Error retrieving iPhone14 data:", error);
      res.status(500).send("Internal server error"); // Handle other errors
    }
  });
  

  app.post("/iphone15add", async (req, res) => {
    const {
      iPhone15, iPhone15Blue, iPhone15Purple, iPhone15Yellow,
      iPhone15Black, iPhone15White, iPhone15Red,
      iPhone15Blue128, iPhone15Purple128, iPhone15Yellow128,
      iPhone15Black128, iPhone15White128, iPhone15Red128,
      iPhone15Blue256, iPhone15Purple256, iPhone15Yellow256,
      iPhone15Black256, iPhone15White256, iPhone15Red256,
      iPhone15Blue512, iPhone15Purple512, iPhone15Yellow512,
      iPhone15Black512, iPhone15White512, iPhone15Red512
    } = req.body;
  
    const iphone15Data = {
      iPhone15, iPhone15Blue, iPhone15Purple, iPhone15Yellow,
      iPhone15Black, iPhone15White, iPhone15Red,
      iPhone15Blue128, iPhone15Purple128, iPhone15Yellow128,
      iPhone15Black128, iPhone15White128, iPhone15Red128,
      iPhone15Blue256, iPhone15Purple256, iPhone15Yellow256,
      iPhone15Black256, iPhone15White256, iPhone15Red256,
      iPhone15Blue512, iPhone15Purple512, iPhone15Yellow512,
      iPhone15Black512, iPhone15White512, iPhone15Red512
    };
  
    try {
      const data = await iPhone15Model.create(iphone15Data);
      res.send(data);
    } catch (error) {
      console.error("Error creating iPhone15 record:", error);
      res.status(500).send("Internal Server Error");
    }
  });


  
  // ............................ GET IPHONE 13  ...........................

  app.get("/iphone13/:id", async (req, res) => {
    const { id } = req.params; // Use "id" as the parameter name
    try {
      const data = await iPhone13Model.findById(id); // Use "id" directly
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("iPhone13 not found"); // Handle the case when the data is not found
      }
    } catch (error) {
      console.error("Error retrieving iPhone13 data:", error);
      res.status(500).send("Internal server error"); // Handle other errors
    }
  });
  

  app.post("/iphone13add", async (req, res) => {
    const {
      iPhone13, iPhone13Blue, iPhone13Purple, iPhone13Yellow,
      iPhone13Black, iPhone13White, 
      iPhone13Blue128, iPhone13Purple128, iPhone13Yellow128,
      iPhone13Black128, iPhone13White128, 
      iPhone13Blue256, iPhone13Purple256, iPhone13Yellow256,
      iPhone13Black256, iPhone13White256, 
      iPhone13Blue512, iPhone13Purple512, iPhone13Yellow512,
      iPhone13Black512, iPhone13White512, 
    } = req.body;
  
    const iphone13Data = {
      iPhone13, iPhone13Blue, iPhone13Purple, iPhone13Yellow,
      iPhone13Black, iPhone13White, 
      iPhone13Blue128, iPhone13Purple128, iPhone13Yellow128,
      iPhone13Black128, iPhone13White128, 
      iPhone13Blue256, iPhone13Purple256, iPhone13Yellow256,
      iPhone13Black256, iPhone13White256, 
      iPhone13Blue512, iPhone13Purple512, iPhone13Yellow512,
      iPhone13Black512, iPhone13White512, 
    };
  
    try {
      const data = await iPhone13Model.create(iphone13Data);
      res.send(data);
    } catch (error) {
      console.error("Error creating iPhone15 record:", error);
      res.status(500).send("Internal Server Error");
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