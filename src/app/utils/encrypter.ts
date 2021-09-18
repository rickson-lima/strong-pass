import bcrypt from 'bcrypt';

interface Encrypter {
    genarate (senha: string): Promise<string>
    compare (senha: string, hash: string): Promise<string>
}

export const encrypter = (): EncrypterAdapter => {
    return new EncrypterAdapter()
}

export class EncrypterAdapter implements Encrypter {
    genarate (senha: string): Promise<string> {
        return bcrypt.hash(senha, 10)
    }

    compare (senha: string, hash: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(senha, hash, (err, result) => {
                if (err)
                    reject({ mensagem: 'Falha na autenticação' })

                if (result) {
                    resolve('')
                
                } else {
                    reject({ mensagem: 'Email ou Senha inválido' })
                }
            })
        })
    }
}