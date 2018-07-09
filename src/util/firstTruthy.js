"use strict";
exports.__esModule = true;
var piperize_1 = require("../piperize");
var ifFalsy_1 = require("./ifFalsy");

function firstTruthy() {
	var callbacks = [];
	for (var _i = 0; _i < arguments.length; _i++) {
		callbacks[_i] = arguments[_i];
	}
	return function firstTruthyResolver() {
		var inputs = [];
		for (var _i = 0; _i < arguments.length; _i++) {
			inputs[_i] = arguments[_i];
		}
		if (!callbacks[0])
			return null;
		return piperize_1["default"](callbacks[0], ifFalsy_1["default"](function () {
			return firstTruthy.apply(void 0, (callbacks.slice(1))).apply(void 0, inputs);
		})).apply(void 0, inputs);
	};
}

exports["default"] = firstTruthy;
//# sourceMappingURL=firstTruthy.js.map