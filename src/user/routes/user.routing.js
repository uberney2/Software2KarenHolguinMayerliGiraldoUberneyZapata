userRouter = require("express").Router();
const {singUp} = require('../api/user.controller')

userRouter.post('/singUp', singUp);

module.exports = userRouter;