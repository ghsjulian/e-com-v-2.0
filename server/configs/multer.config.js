// multer.config.js
const multer = require("multer");
const path = require("path");

const uploader = folderPath => {
    const fileName = Math.floor(100000 + Math.random() * 900000).toString();
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folderPath);
        },
        filename: (req, file, cb) => {
            cb(
                null,
                "product__" +
                    Math.floor(100000 + Math.random() * 900000).toString() +
                    path.extname(file.originalname)
            );
        }
    });

    return multer({ storage: storage });
};

module.exports = uploader
