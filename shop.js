const path = require('path')
const express = require('express');
const router = express.Router();
const Myproduct = require('../controllers/product');

router.get("/",Myproduct.getshop);

    module.exports = router;