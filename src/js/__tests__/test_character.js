import { Character } from '../Character';

const validNames = [
    { name: 'Dana', type: 'Swordsman' },
    { name: 'Masha', type: 'Magician' },
    { name: 'Vova', type: 'Bowerman' },
];

const invalidNames = [
    { name: 'A', errorMessage: 'Invalid character name length' },
    { name: 'Abcdefghijk', errorMessage: 'Invalid character name length' },
    { name: 12, errorMessage: 'Invalid character name length' },
];

const invalidTypes = [
    { type: 'KonVPalto', errorMessage: 'There is no such character' },
    { type: '', errorMessage: 'There is no such character' },
];

describe('Tests for the Character class', () => {
    test.each(validNames)(
        'create an instance with valid data %o',
        ({ name, type }) => {
            const char = new Character(name, type);
            expect(char.health).toBe(100);
            expect(char.level).toBe(1);
        }
    );

    test.each(invalidNames)(
        'create instance with invalid name "%s"',
        ({ name, errorMessage }) => {
            expect(() => new Character(name, 'Swordsman')).toThrow(errorMessage);
        }
    );

    test.each(invalidTypes)(
        'create instance with invalid type "%s"',
        ({ type, errorMessage }) => {
            expect(() => new Character('ValidName', type)).toThrow(errorMessage);
        }
    );
});
