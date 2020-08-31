const GeoJSON = require('./GeoJson');

const GeoJSONMultiPolygon = Object.assign({}, GeoJSON);

GeoJSONMultiPolygon.type= 'MultiPolygon';
GeoJSONMultiPolygon.coordinates= [[[[]]]];

module.exports = GeoJSONMultiPolygon
