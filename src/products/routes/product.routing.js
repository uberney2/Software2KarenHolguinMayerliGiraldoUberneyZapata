taskRouter = require("express").Router();
const {saveProducts, updateProduct, deleteProduct, getProductDetails} = require('../api/product.controller')

taskRouter.post('/saveProduct', saveProducts);
taskRouter.put('/updateProduct', updateProduct);
taskRouter.delete('/deleteProduct/:id', deleteProduct);
taskRouter.get('/product/:id', getProductDetails);

module.exports = taskRouter;