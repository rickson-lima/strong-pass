import { SpecialCharacterAdapter } from "../utils/password-validate"

export const specialCharacter = () => {
    return new SpecialCharacterAdapter()
}