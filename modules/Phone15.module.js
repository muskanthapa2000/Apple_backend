
const mongoose = require("mongoose");

const iPhone15Schema = mongoose.Schema({
    iPhone15 : {type : String},
    iPhone15Blue : {type : String},
    iPhone15Purple : {type : String},
    iPhone15Yellow : {type : String},
    iPhone15Black : {type : String},
    iPhone15White : {type : String},
    iPhone15Red : {type : String},
    iPhone15Blue128 : {type : String},
    iPhone15Purple128 : {type : String},
    iPhone15Yellow128 : {type : String},
    iPhone15Black128 : {type : String},
    iPhone15White128 : {type : String},
    iPhone15Red128 : {type : String},
    iPhone15Blue256 : {type : String},
    iPhone15Purple256 : {type : String},
    iPhone15Yellow256 : {type : String},
    iPhone15Black256: {type : String},
    iPhone15White256 : {type : String},
    iPhone15Red256: {type : String},
    iPhone15Blue512 : {type : String},
    iPhone15Purple512 : {type : String},
    iPhone15Yellow512 : {type : String},
    iPhone15Black512 : {type : String},
    iPhone15White512 : {type : String},
    iPhone15Red512 : {type : String},
    iPhone15Price : {type : String},
    iPhone15Price128 : {type : String},
    iPhone15Price256 : {type : String},
    iPhone15Price512 : {type : String},
    iPhone15Title : {type : String},
})

const iPhone15Model = mongoose.model("iPhone15" , iPhone15Schema)

module.exports = {iPhone15Model}