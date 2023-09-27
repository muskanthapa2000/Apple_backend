
const mongoose = require("mongoose");

const watchSchema = mongoose.Schema({
    name : {type : String},
    title : {type : String},
    price : {type : Number},
    image : {type : String},
})

const watchModel = mongoose.model("watches" , watchSchema)

module.exports = {watchModel}