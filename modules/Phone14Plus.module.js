
const mongoose = require("mongoose");

const iPhone14PlusSchema = mongoose.Schema({
    iPhone14Plus : {type : String},
    iPhone14PlusBlue : {type : String},
    iPhone14PlusPurple : {type : String},
    iPhone14PlusYellow : {type : String},
    iPhone14PlusBlack : {type : String},
    iPhone14PlusWhite : {type : String},
    iPhone14PlusRed : {type : String},
    iPhone14PlusBlue128 : {type : String},
    iPhone14PlusPurple128 : {type : String},
    iPhone14PlusYellow128 : {type : String},
    iPhone14PlusBlack128 : {type : String},
    iPhone14PlusWhite128 : {type : String},
    iPhone14PlusRed128 : {type : String},
    iPhone14PlusBlue256 : {type : String},
    iPhone14PlusPurple256 : {type : String},
    iPhone14PlusYellow256 : {type : String},
    iPhone14PlusBlack256: {type : String},
    iPhone14PlusWhite256 : {type : String},
    iPhone14PlusRed256: {type : String},
    iPhone14PlusBlue512 : {type : String},
    iPhone14PlusPurple512 : {type : String},
    iPhone14PlusYellow512 : {type : String},
    iPhone14PlusBlack512 : {type : String},
    iPhone14PlusWhite512 : {type : String},
    iPhone14PlusRed512 : {type : String},
})

const iPhone14PlusModel = mongoose.model("iPhone14Plus" , iPhone14PlusSchema)

module.exports = {iPhone14PlusModel}