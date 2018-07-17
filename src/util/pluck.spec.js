"use strict";
/**
 * Test suite for pluck module
 */
exports.__esModule = true;
var pluck_1 = require("./pluck");
describe('pluck:', function () {
    it('should return the value of the supplied property name', function () {
        var obj = {
            foo: 'bar'
        };
        expect(pluck_1["default"]('foo')(obj)).toEqual('bar');
    });
    it('should throw a custom error if property is undefined on supplied object', function () {
        var obj = {};
        var curry = pluck_1["default"]('foo');
        expect(function () { return curry(obj); }).toThrow(/foo is undefined/);
    });
    it('should pluck the specified property and return it when used within an array map', function () {
        var items = [
            {
                foo: 'bar'
            },
            {
                foo: 'fizz'
            }
        ];
        var curry = pluck_1["default"]('foo');
        var result = items.map(curry);
        var expected = [
            'bar',
            'fizz'
        ];
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=pluck.spec.js.map