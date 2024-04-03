const taskRouter = require('./src/products/routes/product.routing')

function setRoutes(app) {
    app.use('/api/product', taskRouter)
}

module.exports = setRoutes;