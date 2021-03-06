/**
 * Test suite for ifElse module
 */

import ifElse from './ifElse';

describe('ifElse:', function () {

    const tester = ifElse('foo', 'bar');

    it('should return the trueValue if value to callback is truthy', function () {

        expect(tester('test')).toEqual('foo');
        expect(tester(1)).toEqual('foo');
        expect(tester(true)).toEqual('foo');

    });

    it('should return the falseValue if value to callback is falsy', function () {
        expect(tester('')).toEqual('bar');
        expect(tester(0)).toEqual('bar');
        expect(tester(false)).toEqual('bar');
        expect(tester(undefined)).toEqual('bar');
    });
});