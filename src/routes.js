const express = require('express');
const routes = express.Router();
const ctrl = require('./app/services/controllers')

routes.get("/partner/:partnerCode", ctrl.partnerController.Show);
routes.get("/partner/nearest/:longitude/:latitude", ctrl.partnerController.Search);

module.exports = routes;
