import knex from '../../../database/connection';

type AccountModel = {
    id: string
    nome: string
    email: string
    senha: string
}

export const accountMySQL = (): AccountMySQLRepository => {
    return new AccountMySQLRepository()
}

export class AccountMySQLRepository {
    async search (email: string) {
        return await knex.select('*').from('usuarios').where('email', email);
    }

    async add (accountData: AccountModel) {
        return await knex('usuarios').insert([
            {
                id: accountData.id,
                nome: accountData.nome,
                email: accountData.email,
                senha: accountData.senha
            }
        ]);
    }
}