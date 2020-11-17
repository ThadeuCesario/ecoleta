import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

/* Dessa forma, conseguiremos desacoplar nossas rotas do arquivo principal. 
 * Toda vez que realizarmos uma query no banco de dados, precisamos utilizar o await.
 * É um processo que precisa ser sincronizado.
 */

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.create);

routes.post('/points', pointsController.create);


export default routes;