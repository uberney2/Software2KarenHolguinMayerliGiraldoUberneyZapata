const { productModel } = require('../domain/product');
async function saveProducts(req, res){
    try {
        const name = req.body.name;
        const description = req.body.description;
        const url = req.body.url;
        const tags = req.body.tags;
        const createdAt = req.body.createdAt;
        const updatedAt = req.body.updatedAt;

        console.log('ingrese')

        const product = new productModel({
            name: name,
            description: description,
            url: url,
            tags: tags,
            createdAt: createdAt,
            updatedAt: updatedAt
          });

        const save = await product.save();
        return res.status(201).json({author:save})
    } catch (error) {
        console.log(error)
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