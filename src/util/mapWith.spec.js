"use strict";
/**
 * Test suite for mapWith module
 */
exports.__esModule = true;
var mapWith_1 = require("./mapWith");
describe('mapWith:', function () {
    it('should take one function and use it for the inputArray map function', function () {
        var mapFn = function (item) { return item + 'bar'; };
        var result = mapWith_1["default"](mapFn)(['foo']);
        expect(result).toEqual(['foobar']);
    });
    it('should take multiple functions and use them all on the inputArray map function', function () {
        var mapFn1 = function (item) { return item + 'bar'; };
        var mapFn2 = function (item) { return item + 'fizz'; };
        var result = mapWith_1["default"](mapFn1, mapFn2)(['foo']);
        expect(result).toEqual(['foobarfizz']);
    });
    it('should throw an error with meaningful message when an array is not passed in to the mapper function', function () {
        var shouldThrow = function () { return mapWith_1["default"](function (item) { return item + 'foo'; })('foo'); };
        expect(shouldThrow).toThrow(/not an array/i);
    });
});
//# sourceMappingURL=mapWith.spec.js.map