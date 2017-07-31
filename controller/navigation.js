const express = require('express');
const router = express.Router();

const Category = require('../model/Category');

router.get('/', (req, res) => {
    res.render('navigation', {
        data: Category.getCategory('select * from "category"', [])
    });
});

module.exports = router;
