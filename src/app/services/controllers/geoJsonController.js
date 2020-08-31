const GeoJsonBLL = require('../../infrastructure/BLL/geoJsonBLL');

module.exports = {
  async nearestPartner(req, res) {
    const { longitude, latitude } = req.params;

    return res.status(200).json({ address : { type:'Point', coordinates:[longitude, latitude] } });
  }
};
