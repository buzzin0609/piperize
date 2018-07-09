/**
 * Test suite for catchError module
 */

import catchError from './catchError';
import piperize from "../piperize";

describe('catchError:', function () {
    it('should return the error caught from the callback function', function () {
        const cb = value => {
            throw new Error('hey');
        };
        const {error} = catchError(cb)('foo');

        expect(error).toBeTruthy();
        expect(error.message).toEqual('hey');
    });

    it('should return the value from the callback when it doesnt error', function () {
        const double = num => num * 2;
        const {value} = catchError(double)(2);

        expect(value).toEqual(4);
    });

    it('should pass the CatchErrorResult through a piperize pipeline', function () {
        const errorCb = value => {
            throw new Error('foo');
        };
        const double = num => num * 2;
        const {error} = piperize(
            double,
            catchError(errorCb)
        )(2);

        expect(error).toBeTruthy();
        expect(error.message).toEqual('foo');
    });
});