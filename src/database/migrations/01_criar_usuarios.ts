import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('usuarios', table => {
        table.binary('id', 16).primary();
        table.string('nome').notNullable();
        table.string('email')
            .unique()
            .notNullable();
        table.string('senha').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('usuarios');
}