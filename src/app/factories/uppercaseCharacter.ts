import { UppercaseCharacterAdapter } from "../utils/password-validate"

export const uppercaseCharacter = () => {
    return new UppercaseCharacterAdapter()
}