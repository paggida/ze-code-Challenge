const IPartnerMethods = require('../../domain/contracts/Partner');
const PartnerDBService = require('../../../database/services/PartnerService');

const PartnerDAL = Object.assign({}, IPartnerMethods);

PartnerDAL.setNewPartner = async (partnerObj)=>{
  return await PartnerDBService.setNewPartner(partnerObj);
}

PartnerDAL.getAllPartners = async ()=>{
  return await PartnerDBService.getAllPartners();
}

PartnerDAL.getPartnerById = async (partnerCode)=>{
  return await PartnerDBService.getPartnerById(partnerCode);
}

PartnerDAL.deletePartnerById = async (partnerCode)=>{
  return await PartnerDBService.deletePartnerById(partnerCode);
}

module.exports = PartnerDAL;
