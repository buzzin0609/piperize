"use strict";
exports.__esModule = true;
var piperize_1 = require("../piperize");

function combine() {
	var callbacks = [];
	for (var _i = 0; _i < arguments.length; _i++) {
		callbacks[_i] = arguments[_i];
	}
	return function combineResolver() {
		var inputs = [];
		for (var _i = 0; _i < arguments.length; _i++) {
			inputs[_i] = arguments[_i];
		}
		return callbacks.reduce(combineReducerPipeline.apply(void 0, inputs), {});
	};
}

exports["default"] = combine;

function combineReducerPipeline() {
	var inputs = [];
	for (var _i = 0; _i < arguments.length; _i++) {
		inputs[_i] = arguments[_i];
	}
	return function combineReducerPipelineResolver(acc, callback) {
		return piperize_1["default"](callback, errorIfNotObject(callback), applyNewValue(acc)).apply(void 0, inputs.concat([acc]));
	};
}

function errorIfNotObject(callback) {
	return function errorIfNotObjectResolver(value) {
		if (!Object.keys(value).length) {
			throw new TypeError("piperize - combine(): callback " + callback.name + " supplied to combine returned non object");
		}
		return value;
	};
}

function applyNewValue(acc) {
	return function applyNewValueResolver(value) {
		return Object.assign({}, acc, value);
	};
}

//# sourceMappingURL=combine.js.map