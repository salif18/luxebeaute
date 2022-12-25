//Importation module multer
const multer = require('multer')

//Configuration extension image
const MIME_TYPES = {
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png'
}

//configuration disK storage
const storage = multer.diskStorage({
    //destination images
    destination:(req,file,callback)=>{
        callback(null,'images')
    },
    //renommer l'image
    filename:(req,file,callback)=>{
        //renommer
        const name = file.originalname.split(' ').join('_')
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now() + '.' + extension)
    }
})

module.exports = multer({storage:storage}).single("image")