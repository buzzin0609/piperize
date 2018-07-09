"use strict";
exports.__esModule = true;

function ifElse(trueValue, falseValue) {
	return function ifElseResolver(value) {
		if (!!value)
			return trueValue;
		return falseValue;
	};
}

exports["default"] = ifElse;
//# sourceMappingURL=ifElse.js.map