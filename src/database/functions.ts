const partnerContract = require("../app/domain/contracts/Partner");
const model = require("../app/domain/models");

partnerContract.setNewPartner = async partnerObj =>
{
  const dbResponse = await model.Partner.create(partnerObj);

  return dbResponse.id;
}

partnerContract.getPartnerById = async partnerCode =>
{
  return await model.Partner.find({ id: partnerCode });
}

partnerContract.deletePartnerById = async partnerCode =>
{
  await model.Partner.findOneAndDelete({ id: partnerCode });
}

export default partnerContract;
