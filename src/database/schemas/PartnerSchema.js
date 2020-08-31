const mongoose = require('mongoose')
const GeoJsonPointSchema =  require('./GeoJsonPointSchema');
const GeoJsonMultiPolygonSchema = require('./GeoJsonMultiPolygonSchema');

const PartnerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  tradingName: {
    type: String,
    required: true,
    trim: true
  },
  ownerName: {
    type: String,
    required: true,
    trim: true
  },
  document: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  coverageArea: GeoJsonMultiPolygonSchema,
  address: GeoJsonPointSchema,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Partner', PartnerSchema)
