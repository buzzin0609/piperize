"use strict";
/**
 * Test suite for catchErrorAsync module
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var catchErrorAsync_1 = require("./catchErrorAsync");
var pipeAsync_1 = require("../pipeAsync");
describe('catchErrorAsync:', function () {
    var _this = this;
    var willError = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error('async error');
        });
    }); };
    var double = function (num) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, num * 2];
    }); }); };
    it('should resolve to have an error property if function errors', function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pipeAsync_1["default"](catchErrorAsync_1["default"](willError))(10)];
                    case 1:
                        value = _a.sent();
                        expect(value.error).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should resolve to have a value property if function doesnt error', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pipeAsync_1["default"](catchErrorAsync_1["default"](double))(10)];
                    case 1:
                        result = _a.sent();
                        expect(result.value).toEqual(20);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should resolve the catch error result error in a pipeline', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pipeAsync_1["default"](double, catchErrorAsync_1["default"](willError))(10)];
                    case 1:
                        result = _a.sent();
                        expect(result.error).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should resolve the catch error result value in a pipeline', function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pipeAsync_1["default"](double, catchErrorAsync_1["default"](double))(10)];
                    case 1:
                        result = _a.sent();
                        expect(result.value).toEqual(40);
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=catchErrorAsync.spec.js.map