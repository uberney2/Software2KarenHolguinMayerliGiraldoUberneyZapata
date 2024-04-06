const {createProductRepository} = require('../infrastructure/productReposiroty')

async function createProductUseCase(product){
     return await createProductRepository(product);
}

module.exports = {createProductUseCase}