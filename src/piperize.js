"use strict";
exports.__esModule = true;
/**
 * Create a pipeline of functions.
 * @param {Function[]} callbacks - the callback functions. MUST ALL BE PURE FUNCTIONS
 */
var onlyPure_1 = require("./onlyPure");
function piperize() {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    return function piperizePipeline() {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var first = callbacks[0];
        return callbacks.slice(1).reduce(function (acc, cb) {
            return onlyPure_1["default"](cb(acc), cb);
        }, first.apply(void 0, inputs));
    };
}
exports["default"] = piperize;
//# sourceMappingURL=piperize.js.map