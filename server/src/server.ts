import express from 'express';

const app = express();

/**
 * Rota: Endereço completo de nossa requisição. 
 * Recurso: Qual entendidade estamos acessando do sistema.
 * 
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