const IGeoJsonMethods = require('../../domain/contracts/IGeoJsonMethods');
const geoJsonDBServices = require('../../../database/services/GeoJsonDBServices');

const geoJsonDAL = Object.assign({}, IGeoJsonMethods);

geoJsonDAL.nearestPartner = async coordinates => {
  const numberCoordinates = [Number(coordinates[0]), Number(coordinates[1])]
  const partner = await geoJsonDBServices.nearestPartner(numberCoordinates);
  return partner.length?partner[0]:undefined;
}

module.exports = geoJsonDAL;
