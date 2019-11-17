const express = require('express');
const routes = require('../../routes');
const userRouter = express(); 
const { 
  getUser
} = require('../controllers/user');

userRouter.get(routes.home, getUser);

module.exports = userRouter;