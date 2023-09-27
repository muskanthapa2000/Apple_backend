
const mongoose = require("mongoose");

const airPodsSchema = mongoose.Schema({
    name : {type : String},
    title : {type : String},
    price : {type : Number},
    image : {type : String},
})

const airPodsModel = mongoose.model("airPods" , airPodsSchema)

module.exports = {airPodsModel}