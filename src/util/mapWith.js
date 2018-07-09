"use strict";
exports.__esModule = true;
var arrayPipe_1 = require("./arrayPipe");
/**
 * map an array with multiple callback functions.
 * @param callbacks
 */
function mapWith() {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    return arrayPipe_1["default"].apply(void 0, ['map'].concat(callbacks));
}
exports["default"] = mapWith;
//# sourceMappingURL=mapWith.js.map