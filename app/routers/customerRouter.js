const express = require('express');
const routes = require('../../routes');
const customerRouter = express(); 
const { 
  getCutomer,
  postCutomer,
  deleteCutomer 
} = require('../controllers/customer');
const { uploadMiddleWare } = require('../util/middleswares');


customerRouter.get(routes.home, getCutomer);
customerRouter.post(routes.home, uploadMiddleWare, postCutomer);
customerRouter.delete(routes.id, deleteCutomer);

module.exports = customerRouter;