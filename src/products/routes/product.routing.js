taskRouter = require("express").Router();
const {saveProducts, getProducts} = require('../api/product.controller')

taskRouter.post('/saveProduct', saveProducts);
taskRouter.get('/get', getProducts);

module.exports = taskRouter;