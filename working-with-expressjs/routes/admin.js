const express = require('express');
// const path = require('path');
const router = express.Router();

const adminController = require('../controller/admin');

// var products = [];

// /admin/add-product => GET request

// router.get('/add-product' , (req, res, next)=>{
//     // console.log("Another middleware");
//     // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/> <button type="submit">Add Product</button></form>');

//     // res.sendfile(path.join(__dirname , '../' , 'views' , 'add-product.html'));
//     res.render('add-product' , {pageTitle : "Add Product" , path : "/admin/add-product" });
// });

//after using controller

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProduct);
// /admin/add-product => POSt request
// router.post('/product' , (req, res, next)=>{


// router.post('/add-product' , (req, res, next)=>{
//     products.push({title : req.body.title});
//     res.redirect('/');
// });

router.get('/edit-product/:productId', adminController.getEditProduct);

//after using controller

router.post('/add-product', adminController.postAddProduct);
// router.post('/edit-product')
router.post('/edit-product', adminController.postEditProduct)
router.post('/delete-product' , adminController.postDeleteProduct)

// exports.router = router;
// exports.products = products;

module.exports = router;
