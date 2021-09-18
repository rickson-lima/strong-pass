import path from 'path';
import config from './src/config/database';

module.exports = {
    client: 'mysql',
    version: '8.0.20',
    connection: config.DATABASE,
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
}