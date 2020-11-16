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

app.get('/users', (request, response) => {
    console.log("Listagem de usuários");
    response.json([
        "Thadeu",
        "Karina",
        "Katharina",
    ]);
});

app.listen(3333);