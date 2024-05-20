const express = require("express");
const Product = require("../models/productModel"); 
const router = express.Router();
const multer = require('multer');
const {restrictTO} = require('../middlewares/auth')
const {handleGetCartProduct} = require('../constrollers/productContoller')

const storage = multer.diskStorage({
  destination: function (req, _file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname );
  }
});
const upload = multer({ storage: storage });

router.get('/', async function(req, res) {

 try {
  const filter = req.query.category;
  const Query ={};
  if(filter && filter !== ''){
    Query.category = filter
  }
  const allProducts = await Product.find(Query);
  return res.render('yourproduct',{
    allProducts: allProducts,
  });
 } catch (error) {
      throw error
 }
});
router.get('/delete/:id',restrictTO(['ADMIN']),async(req,res)=>{
   await Product.findOneAndDelete({_id:req.params.id});
  return res.status(400),res.redirect('/allProducts');
});
 router.get('/edit/:id',restrictTO(['ADMIN']),async(req,res)=>{
 const product = await Product.findOne({_id:req.params.id})
  return res.render('edit',{product : product})
 });
 
 router.post('/update/:id',upload.single('avatar'),async(req,res)=>{
  const {imageurl,name,price,desc,catagory} = req.body;
  await Product.findByIdAndUpdate({_id:req.params.id},{imageurl,name,price,desc,catagory},{new:true})
  return res.redirect('/allProducts');
 });
 router.post('/addToCart',handleGetCartProduct)

module.exports = router;
