//Importation module bcrypt jswt
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Clients = require('../model/schema_clients')
const dotenv = require('dotenv')

dotenv.config()

//Inscription clients
exports.signup = (req,res,next)=>{
    bcrypt.hash(req.body.password, 10)
    .then((hash)=>{
        const clients = new Clients({
            nom:req.body.nom,
            prenom:req.body.prenom,
            numero:req.body.numero,
            password:hash
        })
        clients.save()
        .then(()=>res.status(201).json({msg:'client creer'}))
        .catch((err)=>res.status(500).json({err}))
    })
    .catch((err)=>res.status(500).json({err}))
}

//Connection au compte clients
exports.login = (req,res,next)=>{
    Clients.findOne({email:req.body.email})
    .then((user)=>{
        if(!user){
             res.status(400).json({msg:'client nexiste pas'})
        }
        bcrypt.compare(req.body.password , user.password)
        .then((valid)=>{
            if(!valid){
               return res.status(400).json({msg:'mot de passe incorrect'})
            }
            return res.status(200).json({
                userId:user.id,
                token:jwt.sign(
                    {userId:user.id},
                    `${process.env.KEY_TOKEN}`,
                    {expiresIn:'24h'}
                )
            })
        })
        .catch((err)=>res.status(500).json({err}))
    })
    .catch((err)=>res.status(500).json({err}))
}