const { log } = require('console');
const fs = require('fs');
const path = require('path');

const p = path.join(__dirname,
    '../',
    'data',
    'cart.json')

module.exports = class Cart{
    static addProduct(id, productPrice){
        fs.readFile(p , (err , fileContent) => {
            let cart = { product : [] , totalPrice : 0 }
            if(!err){
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.product.findIndex(prod => prod.id === id)
            const existingProduct = cart.product[existingProductIndex]
            let updateProduct;
            if(existingProduct){
                updateProduct = { ...existingProduct };
                updateProduct.qty = updateProduct.qty + 1;
                cart.product = [...cart.product]
                cart.product[existingProductIndex] = updateProduct
            } else{
                updateProduct = { id: id , qty : 1}
                cart.product = [...cart.product , updateProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice
            fs.writeFile(p , JSON.stringify(cart) ,  (err) => {
                console.log(err)
            });

            
        });
    }
    static deleteProduct(id , productPrice){
        fs.readFile(p , (err , fileContent) => {
            if(err){
                return;
            }
            const updatedProduct = { ...JSON.parse(fileContent) };
            const prod = updatedProduct.product.find(prod => prod.id === id);
            if(!prod){
                return;
            }
    const productQty = prod.qty;
    updatedProduct.product = updatedProduct.product.filter((prod) => prod.id !== id);
            updatedProduct.totalPrice = updatedProduct.totalPrice - productPrice * productQty;

            fs.writeFile(p , JSON.stringify(updatedProduct) , err => {
                console.log(err);
                
            })
        })
    }

    static getProduct(cb){
        fs.readFile(p , (err , fileContent) => {
            let cart = JSON.parse(fileContent)
            if(err){
                cb(null)
            }
            else{
                cb(cart)
            }
        })
    }
}