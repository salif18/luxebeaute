//Importation module fs
const fs = require('fs')
const Products = require('../model/schema_product')

exports.CreatProducts = (req,res,next)=>{
    const products = new Products({
        image:req.body.image,
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        price:req.body.price
    })
    products.save()
    .then(()=>res.status(201).json({msg:'products save'}))
    .catch((err)=>res.status(400).json({err}))
}

exports.ReadProducts = (req,res,next)=>{
    Products.find()
    .then((products)=>res.status(200).json({products}))
    .catch((err)=>res.status(400).json({err}))
}

exports.ReadOneProducts = (req,res,next)=>{
    Products.findOne({_id: req.params.id})
    .then((product)=>res.status(200).json(product))
    .catch((err)=>res.status(400).json({err}))
}

exports.ModifyProducts = (req,res,next)=>{
    Products.updateOne({_id:req.params.id },
        {...req.body , _id: req.params.id }
)
.then(()=>res.status(200).json({msg:'Produit modifier'}))
.catch((err)=>res.status(400).json({err}))
}

exports.DeleteProducts = (req,res,next)=>{
    Products.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({msg:'Products supprimer'}))
    .catch((err)=>res.status(400).josn({err}))
}