commentRouter = require('express').Router();
const { createComment } = require('../api/comment.controller');

commentRouter.post('/createComment', createComment);

module.exports = commentRouter;
