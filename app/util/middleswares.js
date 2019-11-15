const multer = require('multer');
const upload = multer({dest: '../../upload'});

module.exports.uploadMiddleWare = upload.single('image');