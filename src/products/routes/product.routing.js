taskRouter = require("express").Router();
const {saveProducts, updateProduct, deleteProduct} = require('../api/product.controller')

taskRouter.post('/saveProduct', saveProducts);
taskRouter.put('/updateProduct', updateProduct);
taskRouter.delete('/deleteProduct/:id', deleteProduct);
taskRouter.get('/searchProducts', searchProducts);

module.exports = taskRouter;