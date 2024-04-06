const { productModel } = require('./product');

async function createProductRepository(productRequest){
    try {
        console.log('product')
        console.log(productRequest)
        const product = new productModel({
            name: productRequest.name,
            description: productRequest.description,
            url: productRequest.url,
            tags: productRequest.tags,
            createdAt: productRequest.createdAt,
            updatedAt: productRequest.updatedAt
          });
    
        const save = await product.save();
        return save
    } catch (error) {
        return error;
    }
}

module.exports = {createProductRepository}