const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const customerRouter = require('./app/routers/customerRouter');

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use('/image', express.static(__dirname + '/upload'));
app.use(routes.customer, customerRouter);

module.exports.app = app;