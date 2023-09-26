const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    number : {type : String},
    code : {type : String},
    fname : {type : String},
    lname : {type : String},
    address : {type : String},
    city : {type : String},
    country : {type : String},
    pin : {type : String},
})

const addressModel = mongoose.model("address" , addressSchema)

module.exports = {addressModel}