const taskRouter = require('./src/products/routes/product.routing')
const userRouter = require('./src/user/routes/user.routing')
const commentRouter= require('./src/comments/routes/comment.routing')
const followRouter = require('./src/follows/routes/follow.routing')

function setRoutes(app) {
    app.use('/api/product', taskRouter)
    app.use('/api/user', userRouter)
    app.use('/api/comment', commentRouter)
    app.use('/api/follow', followRouter);
}

module.exports = setRoutes;