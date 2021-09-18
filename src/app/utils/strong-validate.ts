import { 
    passwordValidate,
    minLength,
    uppercaseCharacter,
    lowercaseCharacter,
    numericCharacter,
    specialCharacter
} from '../factories';

type PasswordStatus = {
    status: string;
    funcao: string;
}

interface StrongPassword {
    validate(senha: string): Promise<string>
}

export const strongPasswordValidate = (): StrongPasswordValidateAdapter => {
    return new StrongPasswordValidateAdapter()
}

export class StrongPasswordValidateAdapter implements StrongPassword {
    validate(senha: string): Promise<string>{
        return new Promise(async (resolve, reject) => { 
            const tamanhoMinimo = passwordValidate(minLength()).validate(senha)
            const caractereMinusculo = passwordValidate(lowercaseCharacter()).validate(senha)
            const caractereMaiusculo = passwordValidate(uppercaseCharacter()).validate(senha)
            const caractereNumerico = passwordValidate(numericCharacter()).validate(senha)
            const caractereEspecial = passwordValidate(specialCharacter()).validate(senha)
    
            const status: PasswordStatus[] = [
                tamanhoMinimo, 
                caractereMinusculo, 
                caractereMaiusculo,
                caractereNumerico,
                caractereEspecial
            ]
    
            const resultado = status
                .map((status: any) => status.status)
                .filter((status) => status === "invalido")
    
            resultado.length === 0 ? resolve('') : reject({
                status: "invalido",
                mensagem: 'Senha fora do padrão',
                resultado: status
            })
        });
    }
}