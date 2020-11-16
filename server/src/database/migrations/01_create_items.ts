/**
 * Veja que estou utilizando letra maiúscula, isso porque quando estou
 * me referindo ao tipo da variável que estou importando e não a própria
 * variável em si. 
 * Então utilizamos letra maiúscula.
 */

import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('point');
}