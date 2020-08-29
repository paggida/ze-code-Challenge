import { Document } from 'mongoose';
import { IPartnerModel } from '../models/Partner';

export interface IPartnerMethods {
  setNewPartner(partnerObj: IPartnerModel): Promise<String>;
  getPartnerById(partnerCode: String): Promise<Document[]>;
  deletePartnerById(partnerCode: String): void;
}
