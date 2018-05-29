"use strict";
exports.__esModule = true;
/**
 * middleware to fire a callback only if the piped value is truthy. Returns false to prevent errors with undefined values
 * @param cb
 */
function ifTruthy(cb) {
    return function ifTruthyResolver(value) {
        return value && cb(value) || false;
    };
}
exports["default"] = ifTruthy;
//# sourceMappingURL=ifTruthy.js.map