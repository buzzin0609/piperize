/**
 * Test suite for pluck module
 */

import pluck from './pluck';

describe('pluck:', function () {
    it('should return the value of the supplied property name', function () {
        const obj = {
            foo: 'bar'
        };

        expect(pluck('foo')(obj)).toEqual('bar');
    });

    it('should throw a custom error if property is undefined on supplied object', function () {
        const obj = {};
        const curry = pluck('foo');

        expect(() => curry(obj)).toThrow(/foo is undefined/);
    });

    it('should pluck the specified property and return it when used within an array map', function () {
        const items = [
            {
                foo: 'bar'
            },
            {
                foo: 'fizz'
            }
        ];
        const curry = pluck('foo');
        const result = items.map(curry);
        const expected = [
            'bar',
            'fizz'
        ];

        expect(result).toEqual(expected);
    });
});