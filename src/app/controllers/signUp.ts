import { Request, Response } from 'express';

import { accountMySQL } from '../db/account-repository/account'
import { 
    identifier,
    emailValidate,
    encrypter,
    fieldValidate,
    strongPasswordValidate
} from '../utils';

class SignUpController {
    async create(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;
            const params = ["nome", "email", "senha"]
            
            await fieldValidate().validate(req.body, params)
            await emailValidate().validate(email)

            const listUser = await accountMySQL().search(email)

            if (listUser.length === 1)
                return res.status(409).send({ mensagem: 'O e-mail do usuário já esta cadastrado'});

            if (listUser.length === 0) {
                await strongPasswordValidate().validate(senha)
                const userID = identifier().genarate()
                const passwordHash = await encrypter().genarate(senha);

                const account = Object.assign({}, req.body, { id: userID, senha: passwordHash})
                await accountMySQL().add(account)

                return res.status(201).send({ mensagem: 'Usuário cadastrado com sucesso' });
            }

        } catch (error) {
            return res.status(500).send(error);
        }
    }

}

export default SignUpController