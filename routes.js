const taskRouter = require('./src/products/routes/product.routing')
const userRouter = require('./src/user/routes/user.routing')
const commentRouter= require('./src/comments/routes/comment.routing')

function setRoutes(app) {
    app.use('/api/product', taskRouter)
    app.use('/api/user', userRouter)
    app.use('/api/comment', commentRouter)
}

module.exports = setRoutes;