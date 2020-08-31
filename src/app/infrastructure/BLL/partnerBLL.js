const IPartnerMethods = require('../../domain/contracts/IPartnerMethods');
const partnerDAL = require('../DAL/partnerDAL');
const responseTreatment = require('../functional/responseTreatment');

const PartnerBLL = Object.assign({}, IPartnerMethods);

PartnerBLL.setNewPartner = async (partnerObj)=>{
  return await partnerDAL.setNewPartner(partnerObj);
}

PartnerBLL.getAllPartners = async ()=>{
  return await partnerDAL.getAllPartners();
}

PartnerBLL.getPartnerById = async (partnerCode)=>{
  const partner =await partnerDAL.getPartnerById(partnerCode);

  if(partner){
    return responseTreatment.getSuccessResponseObj(partner);
  }else{
    return responseTreatment.getFailedResponseObj(404, 'Partner not found.');
  }
}

PartnerBLL.deletePartnerById = async (partnerCode)=>{
  return await partnerDAL.deletePartnerById(partnerCode);
}

module.exports = PartnerBLL;
