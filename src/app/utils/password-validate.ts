type PasswordStatus = {
    status: string;
    funcao: string;
}

export interface PasswordValidation {
    validate (senha: string): PasswordStatus
}

export class MinLengthAdapter implements PasswordValidation {
    validate (senha: string): PasswordStatus {
        const resultado = {
            status: senha.length > 7 ? "valido" : "invalido",
            funcao: "tamanho_minimo"
        }
        return resultado;
    }
}

export class UppercaseCharacterAdapter implements PasswordValidation {
    validate (senha: string): PasswordStatus {
        const resultado = {
            status: senha.match(/[A-Z]+/) ? "valido" : "invalido",
            funcao: "caractere_maiusculo"
        }
        return resultado;
    }
}

export class LowercaseCharacterAdapter implements PasswordValidation {
    validate (senha: string): PasswordStatus {
        const resultado = {
            status: senha.match(/[a-z]+/) ? "valido" : "invalido",
            funcao: "caractere_minusculo"
        }
        return resultado;
    }
}

export class NumericCharacterAdapter implements PasswordValidation {
    validate (senha: string): PasswordStatus {
        const resultado = {
            status: senha.match(/[0-9]+/) ? "valido" : "invalido",
            funcao: "caractere_numerico"
        }
        return resultado;
    }
}

export class SpecialCharacterAdapter implements PasswordValidation {
    validate (senha: string): PasswordStatus {
        const resultado = {
            status: senha.match(/[^a-zA-Z 0-9]+/g) ? "valido" : "invalido",
            funcao: "caractere_especial"
        }
        return resultado;
    }
}

export class PasswordValidate implements PasswordValidation {
    private method;
    constructor (method: PasswordValidation) {
        this.method = method
    }

    validate (senha: string): PasswordStatus {
        const resultado = this.method.validate(senha)
        return resultado;
    }
}