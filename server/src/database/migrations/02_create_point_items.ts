/**
 * Veja que estou utilizando letra maiúscula, isso porque quando estou
 * me referindo ao tipo da variável que estou importando e não a própria
 * variável em si. 
 * Então utilizamos letra maiúscula.
 */

import Knex from 'knex';

export async function up(knex: Knex) {
    // Criar a tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points'); //Criando chave estrangeira
        table.integer('item_id').notNullable().references('id').inTable('items');
    });
}

export async function down(knex: Knex) {
    // Deletar a tabela - o método down reverte o método down
    return knex.schema.dropTable('point_items');
}