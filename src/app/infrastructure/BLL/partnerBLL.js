const IPartnerMethods = require('../../domain/contracts/Partner');
const PartnerDAL = require('../DAL/partnerDAL');
const responseTreatment = require('../functional/responseTreatment');

const PartnerBLL = Object.assign({}, IPartnerMethods);

PartnerBLL.setNewPartner = async (partnerObj)=>{
  return await PartnerDAL.setNewPartner(partnerObj);
}

PartnerBLL.getAllPartners = async ()=>{
  return await PartnerDAL.getAllPartners();
}

PartnerBLL.getPartnerById = async (partnerCode)=>{
  const partner =await PartnerDAL.getPartnerById(partnerCode);

  if(partner){
    return responseTreatment.getSuccessResponseObj(partner);
  }else{
    return responseTreatment.getFailedResponseObj(404, 'Partner not found.');
  }
}

PartnerBLL.deletePartnerById = async (partnerCode)=>{
  return await PartnerDAL.deletePartnerById(partnerCode);
}

module.exports = PartnerBLL;
