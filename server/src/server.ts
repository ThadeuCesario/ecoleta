import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json({message: '\'Ecoleta Project\''});
});

app.listen(3333);
