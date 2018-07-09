"use strict";
/**
 * Test suite for filterWith module
 */
exports.__esModule = true;
var filterWith_1 = require("./filterWith");
describe('filterWith:', function () {
    it('should use a single filter function on the inputArray', function () {
        var filterFn = function (item) { return item === 'foo'; };
        var result = filterWith_1["default"](filterFn)(['foo', 'bar']);
        expect(result).toEqual(['foo']);
    });
    it('should use multiple filter functions on the inputArray', function () {
        var filter1 = function (item) { return item.indexOf('foo') >= 0; };
        var filter2 = function (item) { return item.indexOf('bar') >= 0; };
        var result = filterWith_1["default"](filter1, filter2)(['foo', 'foobar', 'bar']);
        expect(result).toEqual(['foobar']);
    });
});
//# sourceMappingURL=filterWith.spec.js.map