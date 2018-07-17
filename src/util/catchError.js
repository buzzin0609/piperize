"use strict";
exports.__esModule = true;
/**
 * catches an error for the supplied callback and returns a structured return value to parse in a pipeline
 * @param callback
 */
function catchError(callback) {
    /**
     * Resolver wraps the callback in a try/catch and populates the correct property of the return value while the other remains null
     * @param {*} value - the pipeline value
     */
    return function catchErrorResolver(value) {
        var ret = {
            error: null,
            value: null
        };
        try {
            ret.value = callback(value);
        }
        catch (e) {
            ret.error = e;
        }
        return ret;
    };
}
exports["default"] = catchError;
//# sourceMappingURL=catchError.js.map