//Importation du module express 
const express = require('express')
const router = express.Router()
const clientCtrl = require('../controllers/clients')

router.post('/signup',clientCtrl.signup)
router.post('/login',clientCtrl.login)

//Exportation
module.exports = router