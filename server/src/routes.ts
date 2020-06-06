/* Comentários:
 * Como nossa aplicação ficará cada vez maior, estamos destinando esse arquivo para todas as nossas rotas.
 *
 * Para desacoplarmos nossas rotas de um arquivo para outro, precisamos utilizar o .Router();
 * const routes = express.Router();
 *
 *
 */

import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message: 'Hello world'});
});