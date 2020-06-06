/* Comentários:
 * As migrations são executadas de forma sequencial. Por isso, precisamos que seja ordenada as migrations
 * de forma que não gere nenhum tipo de problema.
 *
 * Sempre precisaremos ter duas função, a função up() e a função down().
 * Basicamente a função up() realiza as alterações que desejamos, e a função down() é executada em caso
 * de problema, para desfazer as alterações que tentaram ser realizadas.
 * Então se no método up() adicionamos um campo em uma tabela, no método down() removemos esse campo
 * da tabela.
 *
 * --------------
 * Typescript
 * Vamos importar o Knex com letra maiúscula, lembrando que typescript os tipos geralmente
 * são referenciados por letra maiúscula.
 * É muito interessante no typescript, basicamente dizer qual a tipagem de uma variável a automaticamente
 * ganhar toda a inteligência e atributos que são herdados.
 */

import Knex from 'knex'

export async function up(knex: Knex){
    knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(){}