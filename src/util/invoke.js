"use strict";
exports.__esModule = true;
/**
 * *Functional utility to invoke a specified method on an object
 * @param methodName - name of the method to invoke
 * @param params - parameters to pass into the method call
 */
function invoke(methodName) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return function invokeResolver(obj) {
        if (!obj[methodName]) {
            throw new ReferenceError("invoke(): method " + methodName + " is not a function of supplied object");
        }
        return obj[methodName].apply(obj, params);
    };
}
exports["default"] = invoke;
//# sourceMappingURL=invoke.js.map