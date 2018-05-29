"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var log_1 = require("./src/util/log");
var double = function (num) { return num * 2; };
var minus2 = function (num) { return num - 2; };
var buildMessage = function (num) { return "Num is " + num; };
index_1["default"](double, log_1["default"], minus2, buildMessage, log_1["default"])(10);
//# sourceMappingURL=example.js.map