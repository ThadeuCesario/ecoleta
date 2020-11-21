import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});

app.listen(3333);