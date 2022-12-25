//Importation module mongoose
const mongoose = require('mongoose')

//Creating table panier
const Schema = mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Commandes',Schema)