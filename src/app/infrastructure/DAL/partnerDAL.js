const IPartnerMethods = require('../../domain/contracts/IPartnerMethods');
const partnerDBServices = require('../../../database/services/PartnerDBServices');

const PartnerDAL = Object.assign({}, IPartnerMethods);

PartnerDAL.setNewPartner = async (partnerObj)=>{
  return await partnerDBServices.setNewPartner(partnerObj);
}

PartnerDAL.getAllPartners = async ()=>{
  return await partnerDBServices.getAllPartners();
}

PartnerDAL.getPartnerById = async (partnerCode)=>{
  return await partnerDBServices.getPartnerById(partnerCode);
}

PartnerDAL.deletePartnerById = async (partnerCode)=>{
  return await partnerDBServices.deletePartnerById(partnerCode);
}

module.exports = PartnerDAL;
