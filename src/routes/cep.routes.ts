import { Router } from 'express';
import checkData from "../middlewares/checkData.middleware";
import cepController from '../controllers/cepController';

const cepRouter = Router();

cepRouter.get('/', cepController.screen);
cepRouter.post('/cep',checkData, cepController.show);

export default cepRouter;
