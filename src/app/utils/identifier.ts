import { v4 as uuidv4 } from 'uuid';
import { toString } from 'uuid-buffer';

interface Indentifier {
    genarate (): Buffer
}

export const identifier = (): IdentifierAdapter => {
    return new IdentifierAdapter()
}

export class IdentifierAdapter implements Indentifier {
    genarate (): Buffer {
        return Buffer.from(uuidv4().replace(/-/g, ''), 'hex')
    }

    convert (id: Buffer) {
        return toString(id)
    }
}