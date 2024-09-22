const express = require('express');
// const path = require('path');
const router = express.Router();
const productController = require('../controller/products');

// var products = [];

// /admin/add-product => GET request

// router.get('/add-product' , (req, res, next)=>{
//     // console.log("Another middleware");
//     // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/> <button type="submit">Add Product</button></form>');
    
//     // res.sendfile(path.join(__dirname , '../' , 'views' , 'add-product.html'));
//     res.render('add-product' , {pageTitle : "Add Product" , path : "/admin/add-product" });
// });

                                                    //after using controller

                                                    router.get('/add-product'  , productController.getAddProduct);


// /admin/add-product => POSt request
// router.post('/product' , (req, res, next)=>{


// router.post('/add-product' , (req, res, next)=>{
//     products.push({title : req.body.title});
//     res.redirect('/');
// });

                                                //after using controller

                                        router.post('/add-product' , productController.postAddProduct);
// exports.router = router;
// exports.products = products;

module.exports = router;
