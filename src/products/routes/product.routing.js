taskRouter = require("express").Router();
const {saveProducts, updateProduct, deleteProduct, getProductDetails,searchProduct} = require('../api/product.controller')
const verifyToken = require('../../middleware/authMiddleware');

taskRouter.post('/saveProduct',verifyToken, saveProducts);
taskRouter.put('/updateProduct', verifyToken, updateProduct);
taskRouter.delete('/deleteProduct/:id',verifyToken, deleteProduct);
taskRouter.get('/productDetails/:id',verifyToken, getProductDetails);
taskRouter.get('/searchProduct',verifyToken, searchProduct);

module.exports = taskRouter;