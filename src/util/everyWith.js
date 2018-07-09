"use strict";
exports.__esModule = true;
/**
 * run the array every function using a list of callbacks
 * @param callbacks
 */
function everyWith() {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    // return arrayPipe('every', ...callbacks);
    return function everyPipe(inputArray) {
        return inputArray.every(function (item) { return callbacks.every(function (cb) { return cb(item); }); });
    };
}
exports["default"] = everyWith;
//# sourceMappingURL=everyWith.js.map