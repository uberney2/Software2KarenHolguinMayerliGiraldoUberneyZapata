const { getProductRepositoryByCriteria } = require('../infrastructure/productReposiroty');
const { ProductNotFound } = require('../exceptions/productNotFound');

async function searchProductByCriteriaUseCase(criteria) {
    try {
        const products = await getProductRepositoryByCriteria(criteria);
        
        if (!products || products.length === 0) {
            throw new ProductNotFound('No products found with the given criteria.');
        }
        
        return products;
    } catch (error) {
        throw error;
    }
}

module.exports = { searchProductByCriteriaUseCase };