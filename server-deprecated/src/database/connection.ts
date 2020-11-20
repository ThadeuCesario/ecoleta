import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default connection;

/*
 * Migrations = Histórico do banco de dados
 * A ordem em que as migrations estão dentro de sua pasta, será a mesma 
 * que ela será executada.
 */