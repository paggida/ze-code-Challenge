const mongoose = require('mongoose')

const GeoJsonMultiPolygonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['MultiPolygon'],
    required: true
  },
  coordinates: {
    type: [[[[Number]]]],
    required: true
  }
})

module.exports = GeoJsonMultiPolygonSchema
