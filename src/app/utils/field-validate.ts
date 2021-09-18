interface FieldValidate {
    validate (httpRequest: any, params: string[]): Promise<string>;
}

export const fieldValidate = (): FieldValidateAdapter => {
    return new FieldValidateAdapter()
}

export class FieldValidateAdapter implements FieldValidate {
    validate (httpRequest: any, params: string[]): Promise<string>{
        return new Promise((resolve, reject) => {
            let index = 0;
            for (const param of params) {
                if(!httpRequest[param]){
                    reject({
                        status: "invalido",
                        mensagem: `Parametro ausente: ${param}`
                    })
                }
                else if (index === params.length - 1){
                    resolve('')
                }
                index++;
            }
        })
    }
}