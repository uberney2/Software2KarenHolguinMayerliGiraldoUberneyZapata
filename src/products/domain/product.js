const mongoose = require('mongoose');
const {productSchema} = require('../infrastructure/product.schema');

const productModel = mongoose.model('Product', productSchema);

module.exports = {productModel}