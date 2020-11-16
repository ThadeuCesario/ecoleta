import express from 'express';

const app = express();
app.use(express.json());

/**
 * Rota: Endereço completo de nossa requisição
 * Recurso: Qual entendidade estamos acessando do sistema
 * 
 * Requisições HTTP 
 * GET: Buscar uma ou mais informações do back-end
 * POST: Criar uma nova informação no back-end
 * PUT: Atualizar uma informação existente no back-end
 * DELETE: Deletar uma informação existente no back-end 
 * 
 * Request Param: 
 * Parâmetros que vem na própria rota e que identificam um recurso.
 * 
 * Query Param:
 * Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação.
 * 
 * Request Body:
 * Corpo da requisição. Basicamente são parâmetros para a criação/atualização de informações.
 * 
 * ----------------
 * Banco de dados
 * Vamos utilizar o SQLite através do Knex.
 * select * from user where name = 'Diego'
 * knex('users').where('name', 'Diego').select('*');
 */

const users = [
    "Thadeu",
    "Karina",
    "Katharina",
];

app.get('/users', (request, response) => {
    const {search} = request.query;

    if(!search) return response.json({message: "no users found"});

    const filteredUsers = users.filter(user => user.toLowerCase().includes(String(search)));

    return response.json(filteredUsers);
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

    const {body} = request;

    console.log(body);

    const user = {
        name: body.name,
        email: body.email,
    };

    return response.json(user);
});

app.listen(3333);