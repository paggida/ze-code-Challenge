const Partner = require('../schemas/PartnerSchema');
const IPartnerMethods = require('../../app/domain/contracts/IPartnerMethods');
const ResponseObj = require('../../app/domain/models/ResponseObj');

const PartnerDBServices = Object.assign({}, IPartnerMethods);
const responseObj = Object.assign({}, ResponseObj);

PartnerDBServices.setNewPartner = async partnerObj => {
  try{
    const dbResponse = await Partner.create(partnerObj);

    responseObj.code=200
    responseObj.data = { id: dbResponse.id };

  }catch(e){

    responseObj.code=400
    responseObj.data = { message: e.message };

  }finally {

    return responseObj;
  }
};

PartnerDBServices.getAllPartners = async () => {
  return await Partner.find();
};

PartnerDBServices.getPartnerById = async  partnerCode => {
  const partner = await Partner.findOne({ id: partnerCode });
  return partner;
};

PartnerDBServices.deletePartnerById = async partnerCode => {
  await Partner.findOneAndDelete({ id: partnerCode });
};

module.exports = PartnerDBServices;
