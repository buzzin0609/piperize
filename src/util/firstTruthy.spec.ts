/**
 * Test suite for firstTruthy module
 */

import firstTruthy from './firstTruthy';

describe('firstTruthy:', function () {

    it('should return null if no functions return truthy', function () {
        const first = () => false;
        const second = () => '';
        const value = firstTruthy(first, second)('foo');

        expect(value).toEqual(null);
    });

    it('should return the truthy value from the first function', function () {
        const first = () => 'foo';
        const second = () => 'bar';
        const value = firstTruthy(first, second)('fizz');

        expect(value).toEqual('foo');
    });

    it('should pass the value through to sequential functions if previous functions return falsy', function () {
        const first = () => false;
        const second = num => num * 2;
        const value = firstTruthy(first, second)(2);

        expect(value).toEqual(4);
    });

    it('should keep passing inputs along a long chain of functions', function () {
        const first = () => false;
        const second = () => '';
        const third = () => null;
        const final = (num, multiplier) => num * multiplier * 2;
        const value = firstTruthy(first, second, third, final)(2, 2);

        expect(value).toEqual(8);
    });
});