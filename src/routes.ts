import { Router } from 'express';
import partnerController from './app/services/controllers/partnerController';
const routes = Router();

routes.get("/partner/:partnerCode", partnerController.Show);
routes.get("/partner/nearest/:longitude/:latitude", partnerController.Search);

export default routes;
