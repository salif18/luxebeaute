//Importation module express
const express = require('express');
const app = express();
const cors = require('cors');
const Connection = require('./data/Con_MongoDb')
const clientRter = require('./routes/clients')
const productRter = require('./routes/products')
const commandRter = require('./routes/commandes')
//Configuration
app.use(express.json())
app.use(cors())

//The Functions of application
app.use('/products',productRter)
app.use('/clients',clientRter)
app.use('/commandes',commandRter)
//Exportation of app
module.exports = app