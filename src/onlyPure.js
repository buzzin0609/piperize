"use strict";
exports.__esModule = true;
function onlyPure(value, cb) {
    if (value === undefined) {
        var message = (cb.name || 'Anonymous') + " function returned undefined. This is an indication that this isn't a pure function.";
        throw new TypeError(message);
    }
    return value;
}
exports["default"] = onlyPure;
//# sourceMappingURL=onlyPure.js.map