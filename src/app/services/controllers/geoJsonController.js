const GeoJsonBLL = require('../../infrastructure/BLL/geoJsonBLL');
const Partner = require('../../../database/schemas/PartnerSchema');

module.exports = {
  async nearestPartner(req, res) {
    const { longitude, latitude } = req.params;

    const { code , data }  = await GeoJsonBLL.nearestPartner([longitude, latitude]);

    return res.status(code).json(data);
  }
};
