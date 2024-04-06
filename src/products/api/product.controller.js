const { createProductUseCase } = require("../application/create-product");
const { updateProductUseCase } = require("../application/update-product");
const {
  ExcepcionProductAlreadyExist,
} = require("../exceptions/productAlreadyExist");
const {
  ProductNotFound
} = require("../exceptions/productNotFound");

async function saveProducts(req, res) {
  try {
    const newProduct = await createProductUseCase(req.body);
    return res.status(201).json({ product: newProduct });
  } catch (error) {
    if (error instanceof ExcepcionProductAlreadyExist) {
      return res.status(400).send({ error: error.message });
    }
    return res.status(500).json({ message: error });
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await updateProductUseCase(req.body);
    return res.status(201).json({ product: updatedProduct });
  } catch (error) {
    if (error instanceof ProductNotFound) {
      return res.status(404).send({ error: error.message });
    }
    return res.status(500).json({ message: error });
  }
}

module.exports = { saveProducts, updateProduct };
