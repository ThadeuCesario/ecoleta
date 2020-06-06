/* Comentários:
 * Esse arquivo será responsável por realizar a conexão com nosso banco de dados.
 * Feito isso basta criarmos nossa conexão, passando algumas configurações específicas.
 * Primeira configuração:
 * 1) Nosso Client (no caso sqlite3 -> também precisamos instalar 'npm install sqlite3')
 * 2) Dentro de 'connection' especificamos nosso filename, que é o arquivo que estará armazenado nosso banco de dados.
 *    quando estamos tratando sobre caminho, é muito importante utilizarmos um pacote que vem com o node chamado 'path'.
 *    Vamos utilizar o path.resolve(), que basicamente resolve alguns caminhos para nós, com base em nosso sistema operacional.
 *    __dirname -> variavel global do 'path', que retorna o diretório que essa mesma variável está sendo executada.
 *
 * -----------
 * Banco de dados:
 * Quando temos um relacionamento de muitos para muitos, ou seja, N para N. Utilizamos geralmente uma tabela Pivot.
 * Geralmente essa tabela tem um nome derivado das duas tabelas que estamos relacionando. Então por exemplo:
 * Tabela 'points' e Tabela 'items' . Nossa tabela pivot seria: 'point_items'.
 * Basicamente essa tabela armazenará os relacionamentos dos itens que um ponte de coleta poderá coletar =) .
 */

import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    }
});

export default connection;