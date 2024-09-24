const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',
        {
            pageTitle: "Add Product",
            path: "/admin/add-product"
        })
};


exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    
    const product = new Product(title,imageUrl,price,description);
    product.save();
    
    // products.push({ title: req.body.title });
    res.redirect('/');
};


exports.getProduct = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('admin/products',
            {
                prods: product,
                pageTitle: 'Admin Products',
                path: "/admin/products"
            })
    })
}


        //created its own controller


        /*

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

        Product.fetchAll( (product) => {
            res.render('shop/product-list',
                    {
                        prods: product,
                        pageTitle: 'My Shop',
                        path: "/"
                    })
        })

};

    */

