const express = require('express');
const path = require('path'); // for managin paths
const router = express.Router();
const admintRouter = require('./admin');


router.get('/' , (req,res,next)=>{
    // res.send('<h1>Hello from Express JS</h1>');
    //for res.sendFile for sending file back to client
    console.log('shop', admintRouter.products); //although this is not the good approach to share data across request and users because this data will share across all the users
    // res.sendFile(path.join(__dirname , '../' , 'views' , 'shop.html')); //this file only sending the plain static html file
    const products = admintRouter.products; 
    res.render('shop' , {prods : products , pageTitle : 'My Shop' , path:"/"} ); //this will point to the shop.pug file to render the dyanamic content ,,second argument should be passed in js object


});

module.exports = router;