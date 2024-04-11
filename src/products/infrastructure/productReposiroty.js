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

async function getProductRepositoryByCriteria(criteria) {
  try {
    const query = {};

    if (criteria.name) {
      query.name = criteria.name;
    }
    if (criteria.category) {
      query.category = criteria.category;
    }
    if (criteria.tags && criteria.tags.length > 0) {
      query.tags = { $all: criteria.tags };
    }
    if (criteria.rate) {
      query.rating = criteria.rate;
    }
    
    const products = await productModel.find(query);
    return products;
  } catch (error) {
    throw error;
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

async function deleteProductRepositoryById(idRequest) {
  
  try {
    const deletedProduct = await productModel.findByIdAndDelete(idRequest);
    return deletedProduct;
  } catch (error) {
    return error;
  }
}

module.exports = { createProductRepository, getProductRepositoryByCriteria, updateProductRepositoryById, getProductRepositoryById, 
  deleteProductRepositoryById };
