// const mongoose = require ("mongoose");

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/apple")

// module.exports = {connection}

const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://muskanthapa:muskan@cluster0.lh0f6z8.mongodb.net/applestore?retryWrites=true&w=majority")
        
    module.exports = {
        connection
    }
