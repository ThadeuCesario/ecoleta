/**
 * Veja que estou utilizando letra maiúscula, isso porque quando estou
 * me referindo ao tipo da variável que estou importando e não a própria
 * variável em si. 
 * Então utilizamos letra maiúscula.
 */

import Knex from 'knex';

export async function up(knex: Knex) {
    // Criar a tabela
}

export async function down(knex) {
    // Deletar a tabela - o método down reverte o método down
}