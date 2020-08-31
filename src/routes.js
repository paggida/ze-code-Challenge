const express = require('express');
const partnerController = require('./app/services/controllers/partnerController');

const routes = express.Router();

routes.get('/partner/:partnerCode', partnerController.show);
routes.get('/partner/nearest/:longitude/:latitude', partnerController.search);

module.exports = routes;
