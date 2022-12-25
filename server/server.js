//Importation du module http
const http =require('http')
const dotenv = require('dotenv')
const app = require('./App')

//Configuration of App and Dotenv
dotenv.config()
app.set(process.env.PORT || 3001)

//Creating server
const server = http.createServer(app)

//Start server
server.listen(process.env.PORT,()=>console.log("---->SERVER EN MARCHE..."))