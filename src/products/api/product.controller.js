const {createProductUseCase} = require('../application/create-product')
const {ExcepcionProductAlreadyExist} = require('../exceptions/productAlreadyExist')

async function saveProducts(req, res){
    try {
        const newProduct = await createProductUseCase(req.body)
        return res.status(201).json({author:newProduct})
    } catch (error) {
        if (error instanceof ExcepcionProductAlreadyExist) {
            return res.status(400).send({ error: error.message });
          }
        return res.status(500).json({message: error})
    }
}

async function getProducts(req, res){
    const test = {
        test: 'hola mundo'
    }

    return res.status(201).json({author:test})
}

module.exports = {saveProducts, getProducts}