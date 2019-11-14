const express = require('express');
const routes = require('../../routes');
const { getCutomer } = require('../controllers/customerController');

const costomerRouter = express.Router();

costomerRouter.get(routes.customer, getCutomer );

module.exports.costomerRouter = costomerRouter;