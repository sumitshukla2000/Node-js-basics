const path = require('path');
const fs = require('fs');
// const product = []

//path for file where we fetch or store data
const p = path.join(__dirname,
    '../',
    'data',
    'product.json');

//helper function for fetching data storing data into files 

const getProductFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([])
        }
        else {
            cb(JSON.parse(fileContent))
        }
    })

}

module.exports = class Product {
    constructor(title,imageUrl,price,description) {
        this.title = title
        this.imageUrl = imageUrl
        this.price = price
        this.description = description
        // console.log(t)
    }

    save() {
        // product.push(this)
        // console.log(product)

        // const p = path.join(__dirname,
        //     '../',
        //     'data',
        //     'product.json');
        // fs.readFile(p, (err, fileContent) => {
        //     let products = [];
        //     if (!err) {
        //         products = JSON.parse(fileContent);
        //     }
        //     products.push(this);
        //     fs.writeFile(p , JSON.stringify(products) , err => {
        //      console.log(err)
        //     })
        // })

                                              //after adding helper function 
        
            getProductFromFile(product => {
                product.push(this);
                fs.writeFile(p , JSON.stringify(product) , err=>{
                    console.log(err)
                })
            })

    }

    static fetchAll(cb) {
        // return product;
        getProductFromFile(cb);
    }

}
