import express from 'express';

const app = express();

/**
 * Rota: Endereço completo de nossa requisição
 * Recurso: Qual entendidade estamos acessando do sistema
 * 
 * Requisições HTTP 
 * GET: Buscar uma ou mais informações do back-end
 * POST: Criar uma nova informação no back-end
 * PUT: Atualizar uma informação existente no back-end
 * DELETE: Deletar uma informação existente no back-end 
 */

const users = [
    "Thadeu",
    "Karina",
    "Katharina",
];

app.get('/users', (request, response) => {
    console.log("Listagem de usuários");
    response.json(users);
});

app.get('/users/:id', (request, response) => {
    const {id} = request.params;
    
    /* O Typescript apontou um problema, pois estamos utilizando o id como string, porém precisa 
     * ser um número. 
     * Para isso, bastou converter em número.
     */

    console.log("user id", id);

    const user = users[Number(id)];

    return response.json({user});
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Thadeu',
        email: 'thadeu.cesario@icloud.com',
    };

    return response.json(user);
});

app.listen(3333);