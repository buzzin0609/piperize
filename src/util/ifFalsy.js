"use strict";
exports.__esModule = true;
/**
 * Middleware that will fire the given callback if the passed in value is falsy
 * @param cb
 */
function ifFalsy(cb) {
	return function ifFalsyResolver(value) {
		if (!value) {
			return cb(value);
		}
		return value;
	};
}
exports["default"] = ifFalsy;
//# sourceMappingURL=ifFalsy.js.map