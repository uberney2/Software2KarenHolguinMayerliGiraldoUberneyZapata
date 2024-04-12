commentRouter = require('express').Router();
const { createComment, getAvgRating } = require('../api/comment.controller');
const verifyToken = require('../../middleware/authMiddleware');

commentRouter.post('/createComment', verifyToken, createComment);
commentRouter.get('/average-raiting/:productId', verifyToken, getAvgRating);

module.exports = commentRouter;
