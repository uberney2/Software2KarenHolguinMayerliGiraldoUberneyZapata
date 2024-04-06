const {createProductRepository, getProductRepositoryByName} = require('../infrastructure/productReposiroty')

async function createProductUseCase(product){
    const productName = await getProductRepositoryByName(product.name);
    if(productName){
        console.log(productName)
        return;
    }
    return await createProductRepository(product);
}

module.exports = {createProductUseCase}