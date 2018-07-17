"use strict";
exports.__esModule = true;
var ifTruthy_1 = require("./ifTruthy");
var sinon = require("sinon");
describe('ifTruthy(): ', function () {
    var stub;
    beforeEach(function () {
        stub = sinon.stub();
    });
    function truthyTest(value) {
        stub.returns(true);
        var cb = ifTruthy_1["default"](stub);
        cb(value);
        expect(stub.called).toEqual(true);
    }
    function falsyTest(value) {
        var cb = ifTruthy_1["default"](stub);
        cb(value);
        expect(stub.called).toEqual(false);
    }
    it('should trigger the passed callback if value passed to resolver is truthy', function () {
        truthyTest(true);
        truthyTest(function () {
        });
        truthyTest('foo');
        truthyTest(1);
    });
    it('should not trigger the passed callback if value passed to resolver is falsy', function () {
        falsyTest(false);
        falsyTest('');
        falsyTest(null);
        falsyTest(0);
        falsyTest(undefined);
    });
});
//# sourceMappingURL=ifTruthy.spec.js.map