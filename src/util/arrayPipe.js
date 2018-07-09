"use strict";
exports.__esModule = true;
var piperize_1 = require("../piperize");
/**
 * Pipe a list of callbacks to an array by the methodName, e.g. map, filter, reduce
 * @param methodName
 * @param callbacks
 */
function arrayPipe(methodName) {
    var callbacks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        callbacks[_i - 1] = arguments[_i];
    }
    return function pipe(inputArray) {
        arrayPipeCheck(inputArray);
        return inputArray[methodName](piperize_1["default"].apply(void 0, callbacks));
    };
}
exports["default"] = arrayPipe;
function arrayPipeCheck(inputArray) {
    if (!Array.isArray(inputArray)) {
        throw new ReferenceError('arrayPipe(): inputArray parameter is not an array. Instead received ' + inputArray.toString());
    }
}
exports.arrayPipeCheck = arrayPipeCheck;
function innerArrayPipe(methodName, callbacks) {
    return function pipe(item) {
        return callbacks[methodName](function (cb) { return cb(item); });
    };
}
exports.innerArrayPipe = innerArrayPipe;
//# sourceMappingURL=arrayPipe.js.map