/* Comentários:
 * Como nossa aplicação ficará cada vez maior, estamos destinando esse arquivo para todas as nossas rotas.
 *
 * Para desacoplarmos nossas rotas de um arquivo para outro, precisamos utilizar o .Router();
 * const routes = express.Router();
 *
 *
 */

import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');
    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItems);
});

export default routes;