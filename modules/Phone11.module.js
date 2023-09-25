
const mongoose = require("mongoose");

const iPhone11Schema = mongoose.Schema({
    iPhone11 : {type : String},
    iPhone11Blue : {type : String},
    iPhone11Purple : {type : String},
    iPhone11Yellow : {type : String},
    iPhone11Black : {type : String},
    iPhone11White : {type : String},
    iPhone11Blue128 : {type : String},
    iPhone11Purple128 : {type : String},
    iPhone11Yellow128 : {type : String},
    iPhone11Black128 : {type : String},
    iPhone11White128 : {type : String},
    iPhone11Blue256 : {type : String},
    iPhone11Purple256 : {type : String},
    iPhone11Yellow256 : {type : String},
    iPhone11Black256: {type : String},
    iPhone11White256 : {type : String},
    iPhone11Blue512 : {type : String},
    iPhone11Purple512 : {type : String},
    iPhone11Yellow512 : {type : String},
    iPhone11Black512 : {type : String},
    iPhone11White512 : {type : String},
    iPhone11Price : {type : String},
    iPhone11Price128  : {type : String},
    iPhone11Price256  : {type : String},
    iPhone11Price512  : {type : String},
    iPhone11Title : {type : String},
})

const iPhone11Model = mongoose.model("iPhone11" , iPhone11Schema)

module.exports = {iPhone11Model}