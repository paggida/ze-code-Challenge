const Partner = require('../schemas/PartnerSchema');
const IGeoJsonMethods = require('../../app/domain/contracts/IGeoJsonMethods');

const GeoJsonDBServices = Object.assign({}, IGeoJsonMethods);

GeoJsonDBServices.nearestPartner = async coordinates => (
  await Partner.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates },
        key: "address",
        distanceField: "dist.calculated",
        query: {
          coverageArea: {
            $geoIntersects: {
              $geometry: { type: "Point", coordinates }
            }
          }
        },
        spherical: true
      }
    },
    { $limit: 1 }
  ])
);

module.exports = GeoJsonDBServices;
