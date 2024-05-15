const express = require('express');
const followController = require('../api/follow.controller');

const followRouter = express.Router();


followRouter.post('/follow', followController.followUserController);


followRouter.get('/followers', followController.getFollowers);


followRouter.get('/followings', followController.getFollowings);

module.exports = followRouter;
