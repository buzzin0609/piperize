"use strict";
/**
 * Test suite for firstTruthy module
 */
exports.__esModule = true;
var firstTruthy_1 = require("./firstTruthy");
describe('firstTruthy:', function () {
    it('should return null if no functions return truthy', function () {
        var first = function () { return false; };
        var second = function () { return ''; };
        var value = firstTruthy_1["default"](first, second)('foo');
        expect(value).toEqual(null);
    });
    it('should return the truthy value from the first function', function () {
        var first = function () { return 'foo'; };
        var second = function () { return 'bar'; };
        var value = firstTruthy_1["default"](first, second)('fizz');
        expect(value).toEqual('foo');
    });
    it('should pass the value through to sequential functions if previous functions return falsy', function () {
        var first = function () { return false; };
        var second = function (num) { return num * 2; };
        var value = firstTruthy_1["default"](first, second)(2);
        expect(value).toEqual(4);
    });
    it('should keep passing inputs along a long chain of functions', function () {
        var first = function () { return false; };
        var second = function () { return ''; };
        var third = function () { return null; };
        var final = function (num, multiplier) { return num * multiplier * 2; };
        var value = firstTruthy_1["default"](first, second, third, final)(2, 2);
        expect(value).toEqual(8);
    });
});
//# sourceMappingURL=firstTruthy.spec.js.map