//Importation du module mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Configuration de dotenv
dotenv.config();

//Creating connection to MongoDB
const Key_CONNECT = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('---> Connecter a MongoDb'))
.catch(()=>console.log('---> Echec de connection a MongoDb'))