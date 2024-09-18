const express = require('express');
const path = require('path');
const router = express.Router();

// /admin/add-product => GET request
router.get('/add-product' , (req, res, next)=>{
    // console.log("Another middleware");
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/> <button type="submit">Add Product</button></form>');
    
    res.sendfile(path.join(__dirname , '../' , 'views' , 'add-product.html'));
});


// /admin/add-product => POSt request
// router.post('/product' , (req, res, next)=>{
router.post('/add-product' , (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;