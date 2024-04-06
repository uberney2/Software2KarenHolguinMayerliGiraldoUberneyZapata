taskRouter = require("express").Router();
const {saveProducts, updateProduct} = require('../api/product.controller')

taskRouter.post('/saveProduct', saveProducts);
taskRouter.put('/updateProduct', updateProduct);

module.exports = taskRouter;