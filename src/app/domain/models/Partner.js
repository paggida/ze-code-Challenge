const GeoJSONPoint = require('./GeoJsonPoint');
const GeoJSONMultiPolygon = require('./GeoJsonMultiPolygon');

const PartnerModel = {
  id: '',
  tradingName: '',
  ownerName: '',
  document: '',
  coverageArea: GeoJSONMultiPolygon,
  address: GeoJSONPoint,
  createdAt: ''
}

module.exports = PartnerModel
