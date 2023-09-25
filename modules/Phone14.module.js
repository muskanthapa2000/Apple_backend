const mongoose = require("mongoose");

const iPhone14Schema = mongoose.Schema({
    iPhone14 : {type : String},
    iPhone14Blue : {type : String},
    iPhone14Purple : {type : String},
    iPhone14Yellow : {type : String},
    iPhone14Black : {type : String},
    iPhone14White : {type : String},
    iPhone14Red : {type : String},
    iPhone14Blue128 : {type : String},
    iPhone14Purple128 : {type : String},
    iPhone14Yellow128 : {type : String},
    iPhone14Black128 : {type : String},
    iPhone14White128 : {type : String},
    iPhone14Red128 : {type : String},
    iPhone14Blue256 : {type : String},
    iPhone14Purple256 : {type : String},
    iPhone14Yellow256 : {type : String},
    iPhone14Black256: {type : String},
    iPhone14White256 : {type : String},
    iPhone14Red256: {type : String},
    iPhone14Blue512 : {type : String},
    iPhone14Purple512 : {type : String},
    iPhone14Yellow512 : {type : String},
    iPhone14Black512 : {type : String},
    iPhone14White512 : {type : String},
    iPhone14Red512 : {type : String},   
    iPhone14Price : {type : String},
    iPhone14Price128  : {type : String},
    iPhone14Price256 : {type : String},
    iPhone14Price512  : {type : String},
    iPhone14Title : {type : String},       
})

const iPhone14Model = mongoose.model("iPhone14" , iPhone14Schema);

module.exports = {iPhone14Model}