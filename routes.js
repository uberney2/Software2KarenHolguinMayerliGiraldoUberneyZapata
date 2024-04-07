const taskRouter = require('./src/products/routes/product.routing')
const userRouter = require('./src/user/routes/user.routing')

function setRoutes(app) {
    app.use('/api/product', taskRouter)
    app.use('/api/user', userRouter)
}

module.exports = setRoutes;