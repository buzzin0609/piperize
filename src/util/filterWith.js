"use strict";
exports.__esModule = true;
var arrayPipe_1 = require("./arrayPipe");
function filterWith() {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    return function filter(inputArray) {
        arrayPipe_1.arrayPipeCheck(inputArray);
        return inputArray.filter(arrayPipe_1.innerArrayPipe('every', callbacks));
    };
}
exports["default"] = filterWith;
//# sourceMappingURL=filterWith.js.map