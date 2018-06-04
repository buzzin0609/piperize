"use strict";
/**
 * Test suite for combine module
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var combine_1 = require("./combine");
var sinon = require("sinon");
describe('combine:', function () {
    var stub1;
    var stub2;
    beforeEach(function () {
        stub1 = sinon.stub().returns({ foo: 'bar' });
        stub2 = sinon.stub().returns({ bar: 'foo' });
    });
    it('should call each callback', function () {
        combine_1["default"](stub1, stub2)(3);
        expect(stub1.called).toBeTruthy();
        expect(stub2.called).toBeTruthy();
    });
    it('should pass the initial inputs through to each callback', function () {
        combine_1["default"](stub1, stub2)(3);
        expect(stub1.args[0][0]).toEqual(3);
        expect(stub2.args[0][0]).toEqual(3);
    });
    it('should error if a callback doesnt return an object', function () {
        stub1.returns(1);
        stub2.returns(2);
        expect(function () { return combine_1["default"](stub1, stub2)(3); }).toThrow();
    });
    it('should finally resolve to an object that combines the return values of the other callbacks', function () {
        var result = combine_1["default"](stub1, stub2)(3);
        var expected = { foo: 'bar', bar: 'foo' };
        expect(result).toEqual(expected);
    });
    it('will combine larger objects into one', function () {
        var obj1 = {
            foo: {
                bar: 'fizz',
                fizz: {
                    buzz: 'foo'
                }
            }
        };
        var obj2 = {
            bar: {
                foo: 'haz',
                buzz: {
                    fizz: 'bar'
                }
            }
        };
        stub1.returns(obj1);
        stub2.returns(obj2);
        var result = combine_1["default"](stub1, stub2)(10);
        var expected = __assign({}, obj1, obj2);
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=combine.spec.js.map