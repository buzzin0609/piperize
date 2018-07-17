/**
 * Test suite for invoke module
 */

import invoke from './invoke';
import * as sinon from 'sinon';

describe('invoke:', function () {

    let spy;

    beforeEach(function () {
        spy = {
            foo: sinon.stub()
        };
    });

    it('should call the method of the supplied object in the curried function', function () {
        invoke('foo')(spy);

        expect(spy.foo.called).toEqual(true);
    });

    it('should call the method of the supplied object with the params', function () {
        const curried = invoke('foo', 1, 2, 3);
        const expectedParams = [1, 2, 3];
        curried(spy);

        expect(spy.foo.args[0]).toEqual(expectedParams);
    });

    it('should throw a custom error message if supplied method doesnt exist on object', function () {
        const curried = invoke('bar');
        expect(() => curried(spy)).toThrow(/bar is not a function/);
    });

    it('should work with array map method for an array of objects to invoke a specific method of each object', function () {
        const items = [
            {
                foo: x => x * 2
            },
            {
                foo: x => x * 3
            }
        ];
        const result = items.map(invoke('foo', 2));
        const expected = [4, 6];

        expect(result).toEqual(expected);
    });
});