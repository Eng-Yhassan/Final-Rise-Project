const multer = require("multer");

const StroreImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const uploadImage = multer({
    storage:StroreImage
});

module.exports = uploadImage