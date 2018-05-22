"use strict";
exports.__esModule = true;
var ifFalsy_1 = require("./ifFalsy");
var sinon = require("sinon");
describe('ifFalsy(): ', function () {
    var stub;
    beforeEach(function () {
        stub = sinon.stub();
    });
    function testFalsy(value, expected) {
        if (expected === void 0) { expected = true; }
        var cb = ifFalsy_1["default"](stub);
        cb(value);
        expect(stub.called).toEqual(expected);
    }
    it('should run the callback if value passed in is falsy', function () {
        testFalsy(null);
        testFalsy(0);
        testFalsy('');
        testFalsy(undefined);
    });
    it('should not run the callback if value passed in is truthy', function () {
        testFalsy(1, false);
        testFalsy('test', false);
        testFalsy(function () { }, false);
    });
});
//# sourceMappingURL=ifFalsy.spec.js.map