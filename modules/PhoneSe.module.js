
const mongoose = require("mongoose");

const iPhoneSeSchema = mongoose.Schema({
    iPhoneSe : {type : String},
    iPhoneSeBlue : {type : String},
    iPhoneSePurple : {type : String},
    iPhoneSeYellow : {type : String},
    iPhoneSeBlack : {type : String},
    iPhoneSeWhite : {type : String},
    iPhoneSeRed : {type : String},
    iPhoneSeBlue128 : {type : String},
    iPhoneSePurple128 : {type : String},
    iPhoneSeYellow128 : {type : String},
    iPhoneSeBlack128 : {type : String},
    iPhoneSeWhite128 : {type : String},
    iPhoneSeRed128 : {type : String},
    iPhoneSeBlue256 : {type : String},
    iPhoneSePurple256 : {type : String},
    iPhoneSeYellow256 : {type : String},
    iPhoneSeBlack256: {type : String},
    iPhoneSeWhite256 : {type : String},
    iPhoneSeRed256: {type : String},
    iPhoneSeBlue512 : {type : String},
    iPhoneSePurple512 : {type : String},
    iPhoneSeYellow512 : {type : String},
    iPhoneSeBlack512 : {type : String},
    iPhoneSeWhite512 : {type : String},
    iPhoneSeRed512 : {type : String},
    iPhoneSePrice : {type : String},
    iPhoneSePrice128 : {type : String},
    iPhoneSePrice256 : {type : String},
    iPhoneSePrice512 : {type : String},
    iPhoneSeTitle : {type : String},
})

const iPhoneSeModel = mongoose.model("iPhoneSe" , iPhoneSeSchema)

module.exports = {iPhoneSeModel}