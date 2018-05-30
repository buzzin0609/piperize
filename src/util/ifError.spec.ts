/**
 * Test suite for ifError module
 */

import ifError from './ifError';
import {default as catchError, CatchErrorResult} from "./catchError";
import * as sinon from 'sinon';
import piperize from "../piperize";

describe('ifError:', function () {
    let stub;

    beforeEach(function () {
        stub = sinon.stub();
    });

    it('should fire the given callback if CatchErrorResult.error exists', function () {
        ifError(stub)({ error: true });

        expect(stub.called).toEqual(true);
    });

    it('should not fire the given callback if CatchErrorResult.error doesnt exist', function () {
        ifError(stub)({ error: null, value: true });

        expect(stub.called).toEqual(false);
    });

    it('should fire the callback when part of a pipeline', function () {
        const errorCb = value => { throw new Error('foo'); };
        piperize(
            catchError(errorCb),
            ifError(stub)
        )(10);

        expect(stub.called).toEqual(true);
    });

    it('should return the value of the callback when part of a pipeline', function () {
        stub.returns(2);
        const errorCb = value => { throw new Error('foo'); };
        const value = piperize(
            catchError(errorCb),
            ifError(stub)
        )(10);

        expect(value).toEqual(2);
    });

    it('should pass the pipeline value through to the end if no error caught', function () {
        const double = num => num * 2;
        const value = piperize(
            catchError(double),
            ifError(stub)
        )(10);

        expect(value).toEqual(20);
    });
});