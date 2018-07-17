"use strict";
exports.__esModule = true;
/**
 * Functional curry utility to extract a specified property from an object
 * @param propName - the name of the property to get
 */
function pluck(propName) {
    return function pluckResolver(obj) {
        if (obj[propName] === undefined) {
            throw new ReferenceError("pluck(): property " + propName + " is undefined on supplied object");
        }
        return obj[propName];
    };
}
exports["default"] = pluck;
//# sourceMappingURL=pluck.js.map