"use strict";
/**
 * Test suite for invoke module
 */
exports.__esModule = true;
var invoke_1 = require("./invoke");
var sinon = require("sinon");
describe('invoke:', function () {
    var spy;
    beforeEach(function () {
        spy = {
            foo: sinon.stub()
        };
    });
    it('should call the method of the supplied object in the curried function', function () {
        invoke_1["default"]('foo')(spy);
        expect(spy.foo.called).toEqual(true);
    });
    it('should call the method of the supplied object with the params', function () {
        var curried = invoke_1["default"]('foo', 1, 2, 3);
        var expectedParams = [1, 2, 3];
        curried(spy);
        expect(spy.foo.args[0]).toEqual(expectedParams);
    });
    it('should throw a custom error message if supplied method doesnt exist on object', function () {
        var curried = invoke_1["default"]('bar');
        expect(function () { return curried(spy); }).toThrow(/bar is not a function/);
    });
    it('should work with array map method for an array of objects to invoke a specific method of each object', function () {
        var items = [
            {
                foo: function (x) { return x * 2; }
            },
            {
                foo: function (x) { return x * 3; }
            }
        ];
        var result = items.map(invoke_1["default"]('foo', 2));
        var expected = [4, 6];
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=invoke.spec.js.map