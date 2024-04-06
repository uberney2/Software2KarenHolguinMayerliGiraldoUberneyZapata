const { productModel } = require("./product");

async function createProductRepository(productRequest) {
  try {
    const product = new productModel({
      name: productRequest.name,
      description: productRequest.description,
      url: productRequest.url,
      tags: productRequest.tags,
      createdAt: productRequest.createdAt,
      updatedAt: productRequest.updatedAt,
    });

    const save = await product.save();
    return save;
  } catch (error) {
    return error;
  }
}

async function getProductRepositoryById(id) {
  try {
    const product = await productModel.findById(id);
    return product;
  } catch (error) {
    return error;
  }
}

async function getProductRepositoryByName(name){
  try {
    const product = await productModel.findOne({ name: name });
    return product;
  } catch (error) {
    return error;
  }
}

async function updateProductRepositoryById(productUpdate) {
  try {
    productUpdate.updatedAt = Date.now();
    const updatedProduct = await productModel.findByIdAndUpdate(productUpdate.id, productUpdate, { new: true });
    return updatedProduct;
  } catch (error) {
    return error;
  }
}

module.exports = { createProductRepository, getProductRepositoryByName, updateProductRepositoryById, getProductRepositoryById };
