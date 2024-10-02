const Product = require('../models/product');
const Cart = require('../models/cart');


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

    // Product.fetchAll((product) => {
    //     res.render('shop/product-list',
    //         {
    //             prods: product,
    //             pageTitle: 'Products',
    //             path: "/product-list"
    //         })
    // })

    Product.fetchAll()
    .then(([rows , fieldData]) => {
        res.render('shop/product-list',
                    {
                        prods: rows,
                        pageTitle: 'Products',
                        path: "/product-list"
                    })
    })
    .catch(err => console.log(err))
};

exports.getIndex = (req, res, next) => {
    // Product.fetchAll((product) => {
    //     res.render('shop/index',
    //         {
    //             prods: product,
    //             pageTitle: 'My Shop',
    //             path: "/"
    //         })
    // })

                    // after database
    Product.fetchAll()
    .then(([rows , fieldData]) => {
        res.render('shop/index',
                    {
                        prods: rows,
                        pageTitle: 'My Shop',
                        path: "/"
                    })
    })
    .catch(err => console.log(err))
}


//here we use callback function to get back data from model
exports.getProd = (req, res, next) => {
    const prodId = req.params.productId;
    // Product.findById(prodId, product => {
    //     console.log(product);
    //     res.render('shop/product-detail', {
    //         product: product,
    //         pageTitle: product.title,
    //         path: '/products'
    //     });
    // })

                // after database
    Product.findById(prodId)
    .then(([product]) => {
        res.render('shop/product-detail', {
                    product: product[0],
                    pageTitle: product.title,
                    path: '/products'
                });
    })
    .catch(err => cons0ole.log(err))
    
}

exports.getCart = (req, res, next) => {
    Cart.getProduct(cart => {
        Product.fetchAll(products => {
            // in the below cartProducts we are creating new array for representing cart
            let cartProducts = [];
            for (prod of products) {
                // here we are finding the cart product tha matched with the products to get data for that particular product and stored in a [{}] array of object
                const cartProductData = cart.product.find(p => p.id === prod.id)
                if (cartProductData) {
                    cartProducts.push({ productData: prod, qty: cartProductData.qty })
                }
            }
            res.render('shop/cart',
                {
                    pageTitle: "My Cart",
                    path: '/cart',
                    products : cartProducts
                });
        })

    })

}

exports.postCart = (req, res, next) => {
    // const prodId = req.params.prodId;
    // console.log(prodId);
    // res.redirect('/cart')
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
        // Cart.addProduct(product.id , product.price);
    })
    res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res , next) => {
    const prodId = req.body.productId;
    Product.findById(prodId ,  p => {
        Cart.deleteProduct(prodId , p.price)
        res.redirect('/cart')
    })
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