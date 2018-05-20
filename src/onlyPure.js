"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onlyPure(value, cb) {
    if (value === undefined) {
        const message = `${cb.name || 'Anonymous'} function returned undefined. This is an indication that this isn't a pure function.`;
        throw new TypeError(message);
    }
    return value;
}
exports.default = onlyPure;
//# sourceMappingURL=onlyPure.js.map