/**
 * Test suite for filterWith module
 */

import filterWith from './filterWith';

describe('filterWith:', function () {
    it('should use a single filter function on the inputArray', function () {
        const filterFn = item => item === 'foo';
        const result = filterWith(filterFn)(['foo', 'bar']);

        expect(result).toEqual(['foo']);
    });

    it('should use multiple filter functions on the inputArray', function () {
        const filter1 = (item: string) => item.indexOf('foo') >= 0;
        const filter2 = (item: string) => item.indexOf('bar') >= 0;
        const result = filterWith(filter1, filter2)(['foo', 'foobar', 'bar']);

        expect(result).toEqual(['foobar']);
    });
});