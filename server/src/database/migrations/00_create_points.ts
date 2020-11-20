/**
 * Veja que estou utilizando letra maiúscula, isso porque quando estou
 * me referindo ao tipo da variável que estou importando e não a própria
 * variável em si. 
 * Então utilizamos letra maiúscula.
 */

import Knex from 'knex';

export async function up(knex: Knex) {
    // Criar a tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) {
    // Deletar a tabela - o método down reverte o método down
    return knex.schema.dropTable('points');
}