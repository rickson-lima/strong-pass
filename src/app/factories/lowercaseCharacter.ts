import { LowercaseCharacterAdapter } from "../utils/password-validate"

export const lowercaseCharacter = () => {
    return new LowercaseCharacterAdapter()
}