const express = require('express');
const routes = require('../../routes');
const userRouter = express(); 
const { 
  getUser,
  postUser
} = require('../controllers/user');
const { uploadMiddleWare } = require('../util/middleswares');

userRouter.get(routes.home, getUser);
userRouter.get(routes.home, uploadMiddleWare, postUser);

module.exports = userRouter;