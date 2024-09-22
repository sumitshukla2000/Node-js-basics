const path = require('path');
const fs = require('fs');
// const product = []

module.exports = class Product {
    constructor(t) {
        this.title = t
        // console.log(t)
    }

    save() {
        // product.push(this)
        // console.log(product)
        
        const p = path.join(__dirname,
            '../',
            'data',
            'product.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p , JSON.stringify(products) , err => {
                console.log(err)
            })
        })
    }


    static fetchAll(cb) {
        // return product;
        const p = path.join(__dirname,
            '../',
            'data',
            'product.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([])
            }
            
            cb(JSON.parse(fileContent))
        })
    }

}
