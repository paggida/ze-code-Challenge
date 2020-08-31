const express = require('express');
const partnerController = require('./app/services/controllers/partnerController');
const geoJsonController = require('./app/services/controllers/geoJsonController');

const routes = express.Router();

routes.get('/partner/:partnerCode', partnerController.getPartnerById);
routes.get('/partner/nearest/:longitude/:latitude', geoJsonController.nearestPartner);

module.exports = routes;
