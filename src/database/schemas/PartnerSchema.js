const mongoose = require('mongoose')

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
  coverageArea:{
    type: {
      type: String,
      enum: ['MultiPolygon'],
      required: true
    },
    coordinates: {
      type: [[[[Number]]]],
      required: true
    }
  },
  address: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Partner', PartnerSchema)
