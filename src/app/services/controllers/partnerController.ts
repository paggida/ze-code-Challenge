import {Request, Response} from 'express';

export default {
  async Show(req:Request, res:Response) {
    const { partnerCode } = req.params;

    return res.status(200).json({ id: partnerCode });
  },
  async Search(req:Request, res:Response) {
    const { longitude, latitude } = req.params;

    return res.status(200).json({ address : { type:'Point', coordinates:[longitude, latitude] } });
  }
};
