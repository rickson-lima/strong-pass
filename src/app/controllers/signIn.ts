import { Request, Response } from 'express';

import { accountMySQL } from '../db/account-repository/account'
import { fieldValidate } from '../utils';
import { 
    emailValidate,
    encrypter,
    identifier,
    token
} from '../utils'

class SignInController {
    async show(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;
            const params = ["email", "senha"]

            await fieldValidate().validate(req.body, params)
            await emailValidate().validate(email)

            const listUser = await accountMySQL().search(email)

            if (listUser.length === 0)
                return res.status(401).send({ mensagem: 'Email ou Senha inválido' });

            if (listUser.length === 1) {
                await encrypter().compare(senha, listUser[0].senha)
                const userID = identifier().convert(listUser[0].id)
                const tokenString = token().generate(userID)

                res.status(200).send({
                    mensagem: 'Autenticado com sucesso',
                    token: tokenString
                });
            }

        } catch (error) {
            return res.status(401).send(error);
        }
    }

}

export default SignInController;