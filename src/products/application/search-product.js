const { getProductByCriteria } = require('../infrastructure/productReposiroty');
const { ProductNotFound } = require('../exceptions/productNotFound');

async function searchProductByCriteria(criteria) {
    try {
        const products = await getProductByCriteria(criteria);
        
        if (!products || products.length === 0) {
            throw new ProductNotFound('No products found with the given criteria.');
        }
        
        return products;
    } catch (error) {
        throw error;
    }
}

module.exports = { searchProductByCriteria };