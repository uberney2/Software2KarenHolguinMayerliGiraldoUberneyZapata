commentRouter = require('express').Router();
const { createComment, getAvgRating } = require('../api/comment.controller');

commentRouter.post('/createComment', createComment);
commentRouter.get('/average-raiting/:productId', getAvgRating);

module.exports = commentRouter;
