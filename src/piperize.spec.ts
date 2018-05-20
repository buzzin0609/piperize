/**
 * Test suite for piperize module
 */

import piperize from './piperize';
import * as sinon from 'sinon';

describe('piperize:', function () {

    let spy1, spy2;

    beforeEach(function () {
        spy1 = sinon.stub().returns(1);
        spy2 = sinon.stub().returns(2);
    });

    it('should return a function', function () {
        expect(typeof piperize(
            foo => foo * 2
        )).toEqual('function');
    });

    it('should call each provided function when invoking the pipeline callback', function () {
        const pipeline = piperize(spy1, spy2);
        pipeline(10);

        expect(spy1.called).toEqual(true);
        expect(spy2.called).toEqual(true);
    });

    it('should call the first function with the initial params passed into the pipeline callback', function () {
        const pipeline = piperize(spy1, spy2);
        pipeline(10, 12);

        expect(spy1.args[0]).toEqual([10, 12]);
    });

    it('should call subsequent callbacks with the accumulated value', function () {
        const spy3 = sinon.stub().returns(14);
        const spy4 = sinon.stub().returns(25);
        const pipeline = piperize(spy1, spy2, spy3, spy4);
        pipeline(20);

        expect(spy2.args[0][0]).toEqual(1);
        expect(spy3.args[0][0]).toEqual(2);
        expect(spy4.args[0][0]).toEqual(14);
    });

    it('should return the value returned from the final function', function () {
        const pipeline = piperize(spy1, spy2);
        const result = pipeline(10);

        expect(result).toEqual(2);
    });

    it('should throw an error if one of the functions doesnt return anything', function () {
        function badEgg() {}
        const pipeline = piperize(spy1, badEgg, spy2);
        //mentions the function name in the error.
        expect(() => pipeline(10)).toThrow(/badEgg/);
    });
});