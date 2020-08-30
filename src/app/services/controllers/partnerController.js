const PartnerBLL = require('../../infrastructure/BLL/partnerBLL');

module.exports = {
  async Show(req, res) {
    const { partnerCode } = req.params;

    const { code , data } = await PartnerBLL.getPartnerById(partnerCode);

    return res.status(code).json(data);
  },
  async Search(req, res) {
    const { longitude, latitude } = req.params;

    return res.status(200).json({ address : { type:'Point', coordinates:[longitude, latitude] } });
  }
};
