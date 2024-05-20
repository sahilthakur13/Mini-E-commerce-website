const express = require('express');
const app = express();
const PORT = 5000;
const {dbconnection} = require('./connect');
const  cookie = require('cookie-parser');
const path = require('path');
const userRouter =  require('./routes/userRouter');
const staticRouter = require('./routes/staticRouter');
const createProductRoute = require('./routes/productRouter');
const allYourProduct = require('./routes/yourproduct');
const {checkForAuthentication,restrictTO}= require('./middlewares/auth')

//db
dbconnection('mongodb://127.0.0.1:27017/e-commerce-app');

//set ejs 
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));
app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookie());

//routes
app.use('/',staticRouter);
app.use('/users',userRouter);
app.use('/create',restrictTO(['ADMIN']),createProductRoute);
app.use('/allProducts',checkForAuthentication,allYourProduct);

 
// for images only 
app.use(express.static('./uploads'));


app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})