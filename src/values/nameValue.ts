import { Value } from './value';

export class NameValue implements Value {
    generate(): string {
        const prefixes = [
            'Mr.',
            'Mrs.',
        ];
        const letters = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
        ];
        const prefixIndex = Math.floor(Math.random() * (prefixes.length - 1))
        let name = prefixes[prefixIndex] + ' ';
        for (let i = 0; i < 10; i++) {
            const index = Math.floor(Math.random() * (letters.length - 1))
            name += letters[index];
        }
        return name;
    }
}