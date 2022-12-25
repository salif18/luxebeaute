// Importation module mongoose
const mongoose = require ('mongoose')

//Creating table product
const Schema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Products',Schema)