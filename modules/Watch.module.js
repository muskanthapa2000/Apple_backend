
const mongoose = require("mongoose");

const watchSchema = mongoose.Schema({
    name : {type : String},
    title : {type : String},
    price : {type : String},
    image : {type : String},
})

const watchModel = mongoose.model("watches" , watchSchema)

module.exports = {watchModel}