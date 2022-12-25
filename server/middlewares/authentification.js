//Importation module jwt 
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

//configuration
dotenv.config()

module.exports = (req,res,next)=>{
    try{
        //recuperation du token de l'entete du requette rentrant
        const token = req.headers.authorization.spli(' ')[1]

        //decoder le token recuperer
        const decodedToken = jwt.verify(token,`${process.env.KEY_TOKEN}`)

        //recuperer userId du token recuperer
        const userId = decodedToken.userId

        //Inserer userId dans le requette authentification
        req.auth = {
            userId:userId
        },
        next()
    }catch(err){
        return res.status(401).json({
            message:'no authentification',
            err
        })
    }
}