/* Comentários:
 *
 * Rotas: (Endereço completo de nossa requisição)
 * http:localhost:3333/users
 *
 * Recurso: O recurso é qual entidade que queremos acessar. Nessa caso, nosso recurso é o 'users'
 * http:localhost:3333/users
 *
 * Métodos HTTP:
 * GET ->  Toda vez que acessamos uma rota por um navegador, o próprio navegador realiza uma requsição
 * do tipo 'GET', isso porque o navegador não realiza outros tipos de requisições.
 * GET serve para buscar uma ou mais informações do back-end.
 *
 * POST -> Utilizamos a requisição do tipo POST, quando queremos criar uma nova informação no back-end.
 *
 * PUT -> Atualizar uma informação existente no back-end.
 *
 * DELETE -> Deletar uma informação do back-end.
 *
 * As rotas são muito semântica. Então se utilizar um POST para acessar uma rota de usuários.
 * Logo estaremos criando um usuário.
 *
 * Podemos ter rotas com o mesmo recurso, porém com métodos diferentes. Então podemos ter uma rota POST e outra GET
 * para o recurso '/users'.
 *
 * Lembre-se que ao retornar uma rota, é fundamental utilizarmos o método 'return', se não todo o código que vier depois,
 * continuará sendo executado.
 *
 * Vamos utilizar o insomnia para realizar os testes em nossas APIs.
 *
 * Tipos de parâmetros:
 * Nossas rotas podem receber diferentes tipos de parâmetros. Por exemplo o 'id'.
 * Porque vamos supor que não queremos retornar uma listagem de usuários mas sim um único usuário do back-end.
 * Veja o exemplo:
 * app.get('/users/:id', (request, response) => {})
 * O ':id' é uma parâmetro que podemos passar para nossa rota. Além disso, ele poderá ser acessado dentro de nossa aplicação.
 */

const users = [
    'Thadeu',
    'Davi',
    'Eliel',
    'Júnior',
    'Liliane',
    'Filipe',
    'Mateus'
]

import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json(users);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); //O 'id' é totalmente customizado, podemos colocar qualquer nome
    const user = users[id];
    return response.json(user);
})

app.post('/users', (request, response) => {
    const user = {
        name: 'Thadeu',
        email: 'thadeu@email.com.br'
    };

    return response.json(user);
})

app.listen(3333);