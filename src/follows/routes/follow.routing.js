const express = require('express');
const verifyToken = require('../../middleware/authMiddleware');
const followController = require('../api/follow.controller');

const followRouter = express.Router();


followRouter.post('/follow', verifyToken, followController.followUserController);

followRouter.post('/unfollow', verifyToken, followController.unfollow);


followRouter.get('/followers/:id',verifyToken, followController.getFollowers);


followRouter.get('/followings/:id',verifyToken, followController.getFollowings);



module.exports = followRouter;
