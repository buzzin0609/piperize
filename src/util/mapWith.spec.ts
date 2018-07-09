/**
 * Test suite for mapWith module
 */

import mapWith from './mapWith';

describe('mapWith:', function () {
    it('should take one function and use it for the inputArray map function', function () {
        const mapFn = item => item + 'bar';
        const result = mapWith(mapFn)(['foo']);

        expect(result).toEqual(['foobar']);
    });

    it('should take multiple functions and use them all on the inputArray map function', function () {
        const mapFn1 = item => item + 'bar';
        const mapFn2 = item => item + 'fizz';
        const result = mapWith(mapFn1, mapFn2)(['foo']);

        expect(result).toEqual(['foobarfizz']);
    });

    it('should throw an error with meaningful message when an array is not passed in to the mapper function', function () {
        const shouldThrow = () => mapWith(item => item + 'foo')('foo');

        expect(shouldThrow).toThrow(/not an array/i);
    });
});