module.exports = {
  async Show(req, res) {
    const { partnerCode } = req.params;

    return res.status(200).json({ id: partnerCode });
  },
  async Search(req, res) {
    const { longitude, latitude } = req.params;

    return res.status(200).json({ address : { type:'Point', coordinates:[longitude, latitude] } });
  }
};
