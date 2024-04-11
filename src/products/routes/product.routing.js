taskRouter = require("express").Router();
const {saveProducts, updateProduct, deleteProduct, searchProduct} = require('../api/product.controller')

taskRouter.post('/saveProduct', saveProducts);
taskRouter.put('/updateProduct', updateProduct);
taskRouter.delete('/deleteProduct/:id', deleteProduct);
taskRouter.get('/searchProduct', searchProduct);

module.exports = taskRouter;