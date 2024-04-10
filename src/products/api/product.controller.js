const { createProductUseCase } = require("../application/create-product");
const { updateProductUseCase } = require("../application/update-product");
const { deleteProductUseCase} = require("../application/delete-product");
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

async function deleteProduct(req, res) {
  try {
    const deletedProduct = await deleteProductUseCase(req.params.id);
    return res.status(201).json({ product: deletedProduct });
  } catch (error) {
    if (error instanceof ProductNotFound) {
      return res.status(404).send({ error: error.message });
    }
    return res.status(500).json({ message: error });
  }
}

async function getProductDetails(req, res) {
  try {
    const productId = req.params.id;
    const product = await getProductRepositoryById(productId);
    
    if (!product) {
      throw new ProductNotFound(productId);
    }

    return res.status(200).json({ product });
  } catch (error) {
    if (error instanceof ProductNotFound) {
      return res.status(404).send({ error: error.message });
    }
    return res.status(500).json({ message: error });
  }
}


module.exports = { saveProducts, updateProduct, deleteProduct, getProductDetails };
 