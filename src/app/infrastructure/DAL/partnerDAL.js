const IPartnerMethods = require('../../domain/contracts/Partner');
const partnerDBService = require('../../../database/services/PartnerService');

const PartnerDAL = Object.assign({}, IPartnerMethods);

PartnerDAL.setNewPartner = async (partnerObj)=>{
  return await partnerDBService.setNewPartner(partnerObj);
}

PartnerDAL.getAllPartners = async ()=>{
  return await partnerDBService.getAllPartners();
}

PartnerDAL.getPartnerById = async (partnerCode)=>{
  return await partnerDBService.getPartnerById(partnerCode);
}

PartnerDAL.deletePartnerById = async (partnerCode)=>{
  return await partnerDBService.deletePartnerById(partnerCode);
}

module.exports = PartnerDAL;
