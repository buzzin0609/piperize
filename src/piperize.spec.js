"use strict";
/**
 * Test suite for piperize module
 */
exports.__esModule = true;
var piperize_1 = require("./piperize");
var sinon = require("sinon");
describe('piperize:', function () {
    var spy1, spy2;
    beforeEach(function () {
        spy1 = sinon.stub().returns(1);
        spy2 = sinon.stub().returns(2);
    });
    it('should return a function', function () {
        expect(typeof piperize_1["default"](function (foo) { return foo * 2; })).toEqual('function');
    });
    it('should call each provided function when invoking the pipeline callback', function () {
        var pipeline = piperize_1["default"](spy1, spy2);
        pipeline(10);
        expect(spy1.called).toEqual(true);
        expect(spy2.called).toEqual(true);
    });
    it('should call the first function with the initial params passed into the pipeline callback', function () {
        var pipeline = piperize_1["default"](spy1, spy2);
        pipeline(10, 12);
        expect(spy1.args[0]).toEqual([10, 12]);
    });
    it('should call subsequent callbacks with the accumulated value', function () {
        var spy3 = sinon.stub().returns(14);
        var spy4 = sinon.stub().returns(25);
        var pipeline = piperize_1["default"](spy1, spy2, spy3, spy4);
        pipeline(20);
        expect(spy2.args[0][0]).toEqual(1);
        expect(spy3.args[0][0]).toEqual(2);
        expect(spy4.args[0][0]).toEqual(14);
    });
    it('should return the value returned from the final function', function () {
        var pipeline = piperize_1["default"](spy1, spy2);
        var result = pipeline(10);
        expect(result).toEqual(2);
    });
    it('should throw an error if one of the functions doesnt return anything', function () {
        function badEgg() { }
        var pipeline = piperize_1["default"](spy1, badEgg, spy2);
        //mentions the function name in the error.
        expect(function () { return pipeline(10); }).toThrow(/badEgg/);
    });
});
//# sourceMappingURL=piperize.spec.js.map