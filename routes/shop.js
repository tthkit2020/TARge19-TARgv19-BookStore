//what the user sees
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
//mini express app pluggable to another express app

router.get('/', shopController.getProducts);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart');
router.get('/checkout');

module.exports = router;