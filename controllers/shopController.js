const Product = require('../models/product');


exports.getProducts = (req, res)=> {
    Product.fetchAll(products => {
        res.render('shop/product-list.ejs', {
        products: products,
        pageTitle: 'All Products',
        path: '/products'
        }); 
    });
};

exports.getProduct = (req, res) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        res.render('shop/product-detail.ejs', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        });
    });  
}