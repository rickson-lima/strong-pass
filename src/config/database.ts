import dotenv from 'dotenv';

dotenv.config(); // Carregando variaveis de ambiente

const config = {
    DATABASE: {
        'host': process.env.HOST_CONNECTION,
        'user': process.env.USER_CONNECTION,
        'password': process.env.PASSWORD_CONNECTION,
        'database': process.env.DATABASE_CONNECTION
    }
}

export default config;