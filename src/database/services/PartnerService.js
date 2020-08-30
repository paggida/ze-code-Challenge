import Partner from '../schemas/PartnerSchema';
import IPartnerMethods from '../../app/domain/contracts/Partner';

const PartnerDBService = Object.assign({}, IPartnerMethods);

PartnerDBService.setNewPartner = async (partnerObj)=>{
  const dbResponse = await Partner.create(partnerObj);

  return dbResponse.id;
}

PartnerDBService.getAllPartners = async ()=>{
  return await Partner.find();
}

PartnerDBService.getPartnerById = async (partnerCode)=>{
  return await Partner.find({ id: partnerCode });
}

PartnerDBService.deletePartnerById = async (partnerCode)=>{
  await Partner.findOneAndDelete({ id: partnerCode });
}

export default PartnerDBService;
