import { greet } from './string-array.component';

describe('greet', () => {
    it('Should include the name in the message', () => {
        // expect(greet('Ganesh')).toBe('Welcome Ganesh');
        expect(greet('Prince')).toContain('Prince');
    })
})