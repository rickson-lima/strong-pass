interface EmailValidate {
    validate (email: string): Promise<string>;
}

export const emailValidate = (): EmailValidateAdapter => {
    return new EmailValidateAdapter()
}

export class EmailValidateAdapter implements EmailValidate  {
    validate (email: string): Promise<string> {
        return new Promise((resolve, reject) => {
            email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/) ? resolve('') : reject({
                status: 'invalido',
                mensagem: 'E-mail invalido'
            }) 
        })
    }
}