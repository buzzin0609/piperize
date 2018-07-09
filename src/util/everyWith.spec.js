"use strict";
/**
 * Test suite for everyWith module
 */
exports.__esModule = true;
var everyWith_1 = require("./everyWith");
describe('everyWith:', function () {
    it('should run a single function on the inputArray.every function', function () {
        var everyFn = function (item) { return item === 'foo'; };
        var result = everyWith_1["default"](everyFn)(['foo', 'bar']);
        expect(result).toEqual(false);
    });
    it('should run multiple functions through the inputArray.every function', function () {
        var everyFn1 = function (item) { return item.indexOf('foo') >= 0; };
        var everyFn2 = function (item) { return item.length > 3; };
        var pipe = everyWith_1["default"](everyFn1, everyFn2);
        var result = pipe(['foobar', 'foofizz']);
        var result2 = pipe(['foobar', 'fizz']);
        expect(result).toEqual(true);
        expect(result2).toEqual(false);
    });
});
//# sourceMappingURL=everyWith.spec.js.map