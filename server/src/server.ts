import express, { response } from 'express';

const app = express();
app.use(express.json());

const users = [
    'Diego',
    'Cleiton',
    'Thadeu'
];

app.get('/users', (request, response) => {
    const {search} = request.query;
    
    const filteredUsers = users.filter(user => user.includes(String(search)))
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const {id} = request.params;
    const user = users[Number(id)];
    return response.json(user);
}); 

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
})

app.listen(3333);