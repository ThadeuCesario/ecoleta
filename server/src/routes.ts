/* Comentários:
 * Como nossa aplicação ficará cada vez maior, estamos destinando esse arquivo para todas as nossas rotas.
 *
 * Para desacoplarmos nossas rotas de um arquivo para outro, precisamos utilizar o .Router();
 * const routes = express.Router();
 *
 *
 */

import express from 'express';
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController()

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);

routes.get('/points/:id', pointsController.show);

export default routes;