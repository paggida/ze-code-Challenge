const Partner = require('../schemas/PartnerSchema');
const IPartnerMethods = require('../../app/domain/contracts/IPartnerMethods');

const PartnerDBServices = Object.assign({}, IPartnerMethods);

PartnerDBServices.setNewPartner = async (partnerObj)=>{
  try{
      const dbResponse = await Partner.create(partnerObj);
      return { isSuccess:true, id: dbResponse.id };
  }catch(e){
    return getErrorObj(e);
  }
};

PartnerDBServices.getAllPartners = async ()=>{
  return await Partner.find();
};

PartnerDBServices.getPartnerById = async (partnerCode)=>{
  const partner = await Partner.find({ id: partnerCode });
  return partner.length>0?partner[0]: undefined;
};

PartnerDBServices.deletePartnerById = async (partnerCode)=>{
  await Partner.findOneAndDelete({ id: partnerCode });
};

getErrorObj = ({ message }) => ({ isSuccess:false, message: message });

module.exports = PartnerDBServices;
