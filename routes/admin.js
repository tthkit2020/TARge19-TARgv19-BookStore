const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

//mini app pluggable to another express app

router.get('/add-product', productController.getAddProduct);
router.get('/products');

router.post('/add-product', productController.postAddProduct);

module.exports = router;
