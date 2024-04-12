const { getProductDetailRepository } = require('../infrastructure/productReposiroty');

async function getProductDetaislUseCase(productId) {

    const productDetails = await getProductDetailRepository(productId);
    return productDetails;

}

module.exports = { getProductDetaislUseCase };