/* Comentários:
 *
 * Por padrão o express, não sabe que estamos desenvolvendo uma API rest. Por padrão ele não entende o body
 * da requisição no formato de JSON. Por isso é fundamental logo após de criarmos nosso app, declará-lo para que
 * ele possa entender o corpo de nossa requisição no formato de json.
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
 *
 * Resquest Param (Geralmente obrigatório):
 * Parâmetros que vem da própria rota que identificam um recurso. Geralmente é utilizando quando queremos
 * buscar um único usuário, quando queremos atualizar um único usuário, quando queremos deletar um único usuário.
 * Sempre que precisarmos identificar especificamente a entidade, utilizamos o request param.
 *
 * Query Param (Não obrigatórios):
 * São parâmetros que vem na própria rota. Exemplo:
 * http://localhost:3333/users/?search=li
 * Geralmente utilizamos para realizarmos filtros e paginação.
 * Veja que no caso acima, estou passando um query params, com search e procurando todos usuários que contenham
 * a palavra 'li', está implementado dessa forma no código.
 *
 * Request Body: Corpo da requisição.
 * Parâmetros para criação/atualização de informações.
 * Por exemplo quando vamos criar um usuário, todos os dados desse usuário DEVE estar no request body.
 * Ou por exemplo, vamos supor que estou atualizando a senha do usuário. Essa senha, precisa vir pelo request body.
 *
 * Qual banco de dados vamos utilizar?
 * Temos bancos de dados relacionais e bancos de dados não relacionais(NoSQL).
 * Vamos utilizar um banco relacional pois é padrão do mercado.
 * Vamos utilizar o SQLite, porque o SQLite não precisaremos instalar nada em nossa máquina. Fica bem prático.
 * O banco será criado em um arquivo específico de nosso projeto. Vamos chamar de database.sqlite
 *
 * Vamos utilizar o Knex => Esse Knex é basicamente uma biblioteca que nos permite trabalhar com banco de dados
 * SQL com uma linguagem unificada para todos os bancos (Postgres, MySQL, MariaDB...)
 * Além disso, vamos poder escrever nossas queries em formato de javascript =) .
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

app.use(express.json());

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); //O 'id' é totalmente customizado, podemos colocar qualquer nome
    const user = users[id];
    return response.json(user);
})

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
})

app.listen(3333);
