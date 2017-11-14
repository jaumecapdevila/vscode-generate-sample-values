import uuidv4 from 'uuid/v4';
import { Value } from './value';

export class UuidValue implements Value{
    generate():string {
        return uuidv4();
    }
}