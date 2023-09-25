
const mongoose = require("mongoose");

const iPhone10Schema = mongoose.Schema({
    iPhone10 : {type : String},
    iPhone10Blue : {type : String},
    iPhone10Purple : {type : String},
    iPhone10Yellow : {type : String},
    iPhone10Black : {type : String},
    iPhone10White : {type : String},
    iPhone10Blue128 : {type : String},
    iPhone10Purple128 : {type : String},
    iPhone10Yellow128 : {type : String},
    iPhone10Black128 : {type : String},
    iPhone10White128 : {type : String},
    iPhone10Blue256 : {type : String},
    iPhone10Purple256 : {type : String},
    iPhone10Yellow256 : {type : String},
    iPhone10Black256: {type : String},
    iPhone10White256 : {type : String},
    iPhone10Blue512 : {type : String},
    iPhone10Purple512 : {type : String},
    iPhone10Yellow512 : {type : String},
    iPhone10Black512 : {type : String},
    iPhone10White512 : {type : String},
    iPhone10Price : {type : String},
    iPhone10Price128 : {type : String},
    iPhone10Price256 : {type : String},
    iPhone10Price512 : {type : String},
    iPhone10Title : {type : String},
})

const iPhone10Model = mongoose.model("iPhone10" , iPhone10Schema)

module.exports = {iPhone10Model}