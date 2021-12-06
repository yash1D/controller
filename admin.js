const path = require('path')
const express = require("express");

const router = express.Router();

const Myproduct = require('../controllers/product');

router.get('/add-product',Myproduct.routerget);
router.post('/add-product',Myproduct.routerpost1);
router.post('/add-product',Myproduct.routerpost2);

module.exports = router;
