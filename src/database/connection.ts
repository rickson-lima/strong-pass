import knex from 'knex';
import config from '../config/database';

const connection = knex({
    client: 'mysql',
    version: '8.0.20',
    connection: config.DATABASE,
    useNullAsDefault: true
});

export default connection;