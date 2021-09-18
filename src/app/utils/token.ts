import jwt from 'jsonwebtoken';

import * as authConfig from '../../config/auth.json';

interface Token {
    generate (id: string): string
}

export const token = (): TokenAdapter => {
    return new TokenAdapter()
}

class TokenAdapter implements Token {
    generate (id: string): string {
        const token = jwt.sign({
            id
        },
            authConfig.secret,
        {
            expiresIn: 43200,
        });

        return token
    }
}