import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem de usuários");

    return response.json([
        'Diego',
        'Cleiton',
        'Robson'
    ]);
});

app.listen(3333);