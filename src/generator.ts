import { Value } from './values/value'
export class Generator {
    execute(generator: Value) {
        return generator.generate();
    }
}