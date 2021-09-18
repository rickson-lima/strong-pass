import { PasswordValidation } from './../utils/password-validate';
import { PasswordValidate } from "../utils/password-validate"

export const passwordValidate = (method: PasswordValidation) => {
    return new PasswordValidate(method)
}