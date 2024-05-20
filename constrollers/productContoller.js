 const products = require('../models/productModel');
 const cartProduct = require('../models/cartModel')

 async function handleProductCreate(req,res){
        const {name,price ,desc,category} = req.body;
          await products.create({
            imageurl:req.file.filename,
            name,
            price,
            desc,
            category,
        });    
        return res.redirect('/allProducts'); 
 };

 async function handleGetCartProduct(req,res){
  const {name,price ,desc,category} = req.body;
  await cartProduct.create({
    imageurl:req.file.filename,
    name,
    price,
    desc,
    category,
});  
return res  

 }
 module.exports={
    handleProductCreate,
    handleGetCartProduct,
    
 }