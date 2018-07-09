/**
 * Test suite for everyWith module
 */

import everyWith from './everyWith';

describe('everyWith:', function () {
    it('should run a single function on the inputArray.every function', function () {
        const everyFn = item => item === 'foo';
        const result = everyWith(everyFn)(['foo', 'bar']);

        expect(result).toEqual(false);
    });

    it('should run multiple functions through the inputArray.every function', function () {
        const everyFn1 = item => item.indexOf('foo') >= 0;
        const everyFn2 = item => item.length > 3;
        const pipe = everyWith(everyFn1, everyFn2);
        const result = pipe(['foobar', 'foofizz']);
        const result2 = pipe(['foobar', 'fizz']);

        expect(result).toEqual(true);
        expect(result2).toEqual(false);
    });
});