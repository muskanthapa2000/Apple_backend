
const mongoose = require("mongoose");

const iPhone13Schema = mongoose.Schema({
    iPhone13 : {type : String},
    iPhone13Blue : {type : String},
    iPhone13Purple : {type : String},
    iPhone13Yellow : {type : String},
    iPhone13Black : {type : String},
    iPhone13White : {type : String},
    iPhone13Blue128 : {type : String},
    iPhone13Purple128 : {type : String},
    iPhone13Yellow128 : {type : String},
    iPhone13Black128 : {type : String},
    iPhone13White128 : {type : String},
    iPhone13Blue256 : {type : String},
    iPhone13Purple256 : {type : String},
    iPhone13Yellow256 : {type : String},
    iPhone13Black256: {type : String},
    iPhone13White256 : {type : String},
    iPhone13Blue512 : {type : String},
    iPhone13Purple512 : {type : String},
    iPhone13Yellow512 : {type : String},
    iPhone13Black512 : {type : String},
    iPhone13White512 : {type : String},
    iPhone13Price : {type : String},
    iPhone13Price128 : {type : String},
    iPhone13Price256: {type : String},
    iPhone13Price512 : {type : String}, 
    iPhone13Title: {type : String}, 
})

const iPhone13Model = mongoose.model("iPhone13" , iPhone13Schema)

module.exports = {iPhone13Model}