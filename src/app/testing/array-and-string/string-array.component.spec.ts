import { greet, getCurrencies } from './string-array.component';

describe('greet', () => {
    it('Should include the name in the message', () => {
        // expect(greet('Ganesh')).toBe('Welcome Ganesh');
        expect(greet('Prince')).toContain('Prince');
    })
})


describe('getCurrencies', () => {
    it('Should return the supported Currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('INR');
        expect(result).toContain('USD');
        expect(result).toContain('URO');
        expect(result).toContain('AUD');
    })
})