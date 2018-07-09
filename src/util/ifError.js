"use strict";
exports.__esModule = true;

function ifError(callback) {
	return function ifErrorResolver(catchErrorResult) {
		var error = catchErrorResult.error, value = catchErrorResult.value;
		return !!error && callback(error) || value;
	};
}

exports["default"] = ifError;
//# sourceMappingURL=ifError.js.map