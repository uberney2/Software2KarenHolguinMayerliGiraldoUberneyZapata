const commentRouter = require('express').Router();
const { createComment } = require('../api/comment.controller');

commentRouter.post('/new', createComment);

module.exports = commentRouter;
