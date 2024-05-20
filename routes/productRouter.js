const{handleProductCreate}= require('../constrollers/productContoller');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, _file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname );
    }
  });
  const upload = multer({ storage: storage });
  
 router.post('/',upload.single('avatar'),handleProductCreate);


module.exports = router;