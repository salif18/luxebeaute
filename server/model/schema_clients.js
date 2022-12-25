//Importation module mongoose ,mongoose-unique-validator
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

//Creation table clients
const Schema = mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    numero:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

Schema.plugin(uniqueValidator)

//Exportation
module.exports = mongoose.model('Clients',Schema)