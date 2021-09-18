import { NumericCharacterAdapter } from "../utils/password-validate"

export const numericCharacter = () => {
    return new NumericCharacterAdapter()
}