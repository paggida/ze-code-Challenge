const Partner = require('../schemas/PartnerSchema');
const IPartnerMethods = require('../../app/domain/contracts/Partner');

const PartnerDBService = Object.assign({}, IPartnerMethods);

PartnerDBService.setNewPartner = async (partnerObj)=>{
  try{
      const dbResponse = await Partner.create(partnerObj);
      return { isSuccess:true, id: dbResponse.id };
  }catch(e){
    return getErrorObj(e);
  }
};

PartnerDBService.getAllPartners = async ()=>{
  return await Partner.find();
};

PartnerDBService.getPartnerById = async (partnerCode)=>{
  const partner = await Partner.find({ id: partnerCode });
  return partner.length>0?partner[0]: undefined;
};

PartnerDBService.deletePartnerById = async (partnerCode)=>{
  await Partner.findOneAndDelete({ id: partnerCode });
};

getErrorObj = ({ message }) => ({ isSuccess:false, message: message });

module.exports = PartnerDBService;
