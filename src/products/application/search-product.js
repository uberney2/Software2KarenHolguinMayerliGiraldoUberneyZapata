const { getProductRepositoryByCriteria } = require('../infrastructure/productReposiroty');
const { ProductNotFound } = require('../exceptions/productNotFound');

async function searchProductByCriteriaUseCase(criteria) {
    try {
        const products = await getProductRepositoryByCriteria(criteria);
        
        if (!products || products.length === 0) {
            throw new ProductNotFound(criteria.id); 
        }
        
        return products;
    } catch (error) {
        throw error;
    }
}

module.exports = { searchProductByCriteriaUseCase };
