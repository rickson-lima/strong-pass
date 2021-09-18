import { MinLengthAdapter } from "../utils/password-validate"

export const minLength = () => {
    return new MinLengthAdapter()
}