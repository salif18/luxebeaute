//Importation 
const Commandes = require('../model/schema_commande')

exports.CreatProducts = (req,res,next)=>{
    const commandes = new Commandes({
        imageUrl:req.body.imageUrl,
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        quantity:req.body.quantity,
        price:req.body.price
    })
    commandes.save()
    .then(()=>res.status(201).json({msg:'products save'}))
    .catch((err)=>res.status(400).json({err}))
}

exports.ReadProducts = (req,res,next)=>{
    Commandes.find()
    .then((products)=>res.status(200).json({products}))
    .catch((err)=>res.status(400).json({err}))
}

exports.ReadOneProducts = (req,res,next)=>{
    Commandes.findOne({_id: req.params.id})
    .then((product)=>res.status(200).json(product))
    .catch((err)=>res.status(400).json({err}))
}

exports.DeleteProducts = (req,res,next)=>{
    Commandes.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({msg:'Products supprimer'}))
    .catch((err)=>res.status(400).josn({err}))
}