const GeoJSON = require('./GeoJson');

const GeoJSONPoint = Object.assign({}, GeoJSON);

GeoJSONPoint.type= 'Point';
GeoJSONPoint.coordinates= [];

module.exports = GeoJSONPoint
