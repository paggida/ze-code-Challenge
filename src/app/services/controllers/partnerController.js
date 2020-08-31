const PartnerBLL = require('../../infrastructure/BLL/partnerBLL');

module.exports = {
  async getPartnerById(req, res) {
    const { partnerCode } = req.params;

    const { code , data } = await PartnerBLL.getPartnerById(partnerCode);

    return res.status(code).json(data);
  }
};
