import express from 'express';

/* Dessa forma, conseguiremos desacoplar nossas rotas do arquivo principal. 
 * 
 */
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});


export default routes;