const IGeoJSONPoint = require('./GeoJsonPoint');
const IGeoJSONMultiPolygon = require('./GeoJsonMultiPolygon');

const IPartnerModel = {
  id: '',
  tradingName: '',
  ownerName: '',
  document: '',
  coverageArea: IGeoJSONMultiPolygon,
  address: IGeoJSONPoint,
  createdAt: ''
}

module.exports = IPartnerModel
