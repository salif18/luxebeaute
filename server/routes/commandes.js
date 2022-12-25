//Importaion module express
const express = require('express')
const router = express.Router()
const commandeCtrl = require('../controllers/commandes')

router.post('/',commandeCtrl.CreatProducts)
router.get('/',commandeCtrl.ReadProducts)
router.get('/:id',commandeCtrl.ReadOneProducts)
router.delete('/:id',commandeCtrl.DeleteProducts)

//Exportation
module.exports = router