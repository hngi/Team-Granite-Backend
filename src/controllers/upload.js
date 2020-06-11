const multer = require('multer');
const upload = multer({
        
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/.*\.(jpeg|jpg|png)/i)){
            return cb(new Error('Please upload jpeg or png image'))
        }
        cb(undefined, true)
    }
})

module.exports = upload;