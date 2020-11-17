import express from 'express';
import knex from './database/connection';

/* Dessa forma, conseguiremos desacoplar nossas rotas do arquivo principal. 
 * Toda vez que realizarmos uma query no banco de dados, precisamos utilizar o await.
 * É um processo que precisa ser sincronizado.
 */
const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');
    return response.json(items);
});


export default routes;