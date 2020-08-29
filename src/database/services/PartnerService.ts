import Partner from '../schemas/PartnerSchema';
import { IPartnerModel } from '../../app/domain/models/Partner';
import { IPartnerMethods } from '../../app/domain/contracts/Partner';

class PartnerDBService implements IPartnerMethods {
  async setNewPartner(partnerObj: IPartnerModel)
  {
    const dbResponse = await Partner.create(partnerObj);

    return dbResponse.id;
  }
  async getPartnerById(partnerCode: String)
  {
    return await Partner.find({ id: partnerCode });
  }
  async deletePartnerById(partnerCode: String)
  {
    await Partner.findOneAndDelete({ id: partnerCode });
  }
}

export default new PartnerDBService();
