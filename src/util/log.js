"use strict";
exports.__esModule = true;
/**
 * safe logging middleware for pipelines. Passes the value back out to the next function after logging
 * @param value
 */
function log(value) {
    console.log("piperize(): Current pipe value: ", value);
    return value;
}
exports["default"] = log;
//# sourceMappingURL=log.js.map