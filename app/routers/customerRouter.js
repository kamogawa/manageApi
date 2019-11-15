const express = require('express');
const routes = require('../../routes');
const customerRouter = express(); 
const { 
  getCutomer, 
  deleteCutomer 
} = require('../controllers/customerController');
const { uploadMiddleWare } = require('../util/middleswares');


customerRouter.get(routes.home, getCutomer);
customerRouter.post(routes.home, uploadMiddleWare, deleteCutomer);
customerRouter.delete(routes.id, deleteCutomer);

module.exports = customerRouter;