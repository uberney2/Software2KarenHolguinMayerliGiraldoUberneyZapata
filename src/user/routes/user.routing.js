userRouter = require("express").Router();
const {singUp, login} = require('../api/user.controller')

userRouter.post('/singUp', singUp);
userRouter.post('/logIn', login);

module.exports = userRouter;