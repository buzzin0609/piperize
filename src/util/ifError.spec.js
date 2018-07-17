"use strict";
/**
 * Test suite for ifError module
 */
exports.__esModule = true;
var ifError_1 = require("./ifError");
var catchError_1 = require("./catchError");
var sinon = require("sinon");
var piperize_1 = require("../piperize");
describe('ifError:', function () {
    var stub;
    beforeEach(function () {
        stub = sinon.stub();
    });
    it('should fire the given callback if CatchErrorResult.error exists', function () {
        ifError_1["default"](stub)({ error: true });
        expect(stub.called).toEqual(true);
    });
    it('should not fire the given callback if CatchErrorResult.error doesnt exist', function () {
        ifError_1["default"](stub)({ error: null, value: true });
        expect(stub.called).toEqual(false);
    });
    it('should fire the callback when part of a pipeline', function () {
        var errorCb = function (value) {
            throw new Error('foo');
        };
        piperize_1["default"](catchError_1["default"](errorCb), ifError_1["default"](stub))(10);
        expect(stub.called).toEqual(true);
    });
    it('should return the value of the callback when part of a pipeline', function () {
        stub.returns(2);
        var errorCb = function (value) {
            throw new Error('foo');
        };
        var value = piperize_1["default"](catchError_1["default"](errorCb), ifError_1["default"](stub))(10);
        expect(value).toEqual(2);
    });
    it('should pass the pipeline value through to the end if no error caught', function () {
        var double = function (num) { return num * 2; };
        var value = piperize_1["default"](catchError_1["default"](double), ifError_1["default"](stub))(10);
        expect(value).toEqual(20);
    });
});
//# sourceMappingURL=ifError.spec.js.map