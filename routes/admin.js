const path = require('path');
const rootDirectory = require('../utilities/path');
const express = require('express');
const router = express.Router();
const products = [];
//mini app pluggable to another express app

router.get('/add-product', (req, res) =>{
    res.render('add-product.ejs', {
        pageTitle: 'Add Product'
    });
});

router.post('/add-product', (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.products = products;