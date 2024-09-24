const Product = require('../models/product');



exports.getProduct = (req, res, next) => {
    // res.send('<h1>Hello from Express JS</h1>');
    //for res.sendFile for sending file back to client

    //although this is not the good approach to share data across request and users because this data will share across all the users
    // console.log('shop', admintRouter.products);

    // res.sendFile(path.join(__dirname , '../' , 'views' , 'shop.html')); //this file only sending the plain static html file

    // const products = admintRouter.products;


    //bofore the files system
    // const product = Product.fetchAll();

    // // console.log(product)

    // res.render('shop',
    //     {
    //         prods: product,
    //         pageTitle: 'My Shop',
    //         path: "/"
    //     }); //this will point to the shop.pug file to render the dyanamic content ,,second argument should be passed in js object

    //after file system

    Product.fetchAll((product) => {
        res.render('shop/product-list',
            {
                prods: product,
                pageTitle: 'Products',
                path: "/product-list"
            })
    })
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/index',
            {
                prods: product,
                pageTitle: 'My Shop',
                path: "/"
            })
    })
}


exports.getCart = (req, res, next) => {
    res.render('shop/cart',
        {
            pageTitle: "My Cart",
            path: '/cart'
        });
}

exports.getOrder = (req, res, next) => {
    res.render('shop/order',
        {
            pageTitle: "My Order",
            path: '/order'
        });
}


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',
        {
            pageTitle: "Checkout",
            path: '/checkout'
        });
}