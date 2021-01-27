const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsfromfile = (cb) => {
    fs.readFile(filePath, (error, fileContent) => {
        if(error){
           return cb([]);
        }

        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title, url, price, description) {
        this.title = title;
        this.imageUrl = url;
        this.price = price;
        this.description = description;
    }

    save(){ //save to products.json
        this.id = Math.random().toString();
        getProductsfromfile(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (error) => {
                console.log(error);
            });
        });
    }

    static fetchAll(cb) {
        getProductsfromfile(cb);
    }

    static findById(id, cb){
        getProductsfromfile(products => {
            //filter a product by its id
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }

}