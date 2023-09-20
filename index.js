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

app.post("/signup" , async(req , res)=>{
    const {email , password , name} = req.body;
    const is_user = await UserModel.findOne({email , password , name})
    if (is_user)
    {
        res.send("This email id is already registerd try another one")
    }

    bcrypt.hash(password, 3 , async function(err, hash) {
        const new_user = new UserModel({
            email : email, 
            password : hash,
            name : name
        })
        const data = await new_user.save();
        res.send(data)
    });
})


app.post("/login" , async(req , res)=>{

    const {email , password} = req.body;

    const is_user = await UserModel.findOne({email})
    if (is_user)
    {
        const hashed_pwd = is_user.password
        bcrypt.compare(password, hashed_pwd , function(err, result) {
            if (result)
            {
                var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
                 res.send({msg :"login successful" , token : token})
            }
            else {
                res.send({msg : "Login first"})
            }
        }); 
    }
    else {
        res.send("signup first");
    }
    
})





app.listen(8080 , async()=>{
    try {
        await connection 
        console.log("connected to db successfully");

    } catch(err){
        console.log("error while connecting" , err);
    }
    console.log("app is listning on port 8080")
})