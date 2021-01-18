//what the user sees
const express = require('express');
const path = require('path');
const rootDir = require('../utilities/path');
const adminData = require('./admin');
const router = express.Router();
//mini express app pluggable to another express app

router.get('/', (req, res)=> {
   const products = adminData.products;

   res.render('shop.ejs', {
        productsMain: products,
        pageTitle: 'Main Page',
        path: '/'
   });

});

module.exports = router;