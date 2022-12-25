//Importaion module express
const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/products')

router.post('/',productCtrl.CreatProducts)
router.get('/',productCtrl.ReadProducts)
router.get('/:id',productCtrl.ReadOneProducts)
router.put('/:id',productCtrl.ModifyProducts)
router.delete('/:id',productCtrl.DeleteProducts)

//Exportation
module.exports = router