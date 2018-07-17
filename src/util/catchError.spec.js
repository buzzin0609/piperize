"use strict";
/**
 * Test suite for catchError module
 */
exports.__esModule = true;
var catchError_1 = require("./catchError");
var piperize_1 = require("../piperize");
describe('catchError:', function () {
    it('should return the error caught from the callback function', function () {
        var cb = function (value) {
            throw new Error('hey');
        };
        var error = catchError_1["default"](cb)('foo').error;
        expect(error).toBeTruthy();
        expect(error.message).toEqual('hey');
    });
    it('should return the value from the callback when it doesnt error', function () {
        var double = function (num) { return num * 2; };
        var value = catchError_1["default"](double)(2).value;
        expect(value).toEqual(4);
    });
    it('should pass the CatchErrorResult through a piperize pipeline', function () {
        var errorCb = function (value) {
            throw new Error('foo');
        };
        var double = function (num) { return num * 2; };
        var error = piperize_1["default"](double, catchError_1["default"](errorCb))(2).error;
        expect(error).toBeTruthy();
        expect(error.message).toEqual('foo');
    });
});
//# sourceMappingURL=catchError.spec.js.map