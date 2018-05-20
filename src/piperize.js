"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a pipeline of functions.
 * @param {Function[]} callbacks - the callback functions. MUST ALL BE PURE FUNCTIONS
 */
const onlyPure_1 = require("./onlyPure");
function piperize(...callbacks) {
    return function piperizePipeline(...inputs) {
        const first = callbacks[0];
        return callbacks.slice(1).reduce((acc, cb) => {
            return onlyPure_1.default(cb(acc), cb);
        }, first(...inputs));
    };
}
exports.default = piperize;
//# sourceMappingURL=piperize.js.map