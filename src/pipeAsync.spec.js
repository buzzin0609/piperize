"use strict";
/**
 * Test suite for pipeAsync module
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
var pipeAsync_1 = require("./pipeAsync");
var sinon = require("sinon");
describe('pipeAsync:', function () {
    var stub1, stub2;
    beforeEach(function () {
        stub1 = sinon.stub().resolves(1);
        stub2 = sinon.stub().resolves(2);
    });
    it('should correctly resolve each function before piping it', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pipeAsync_1["default"](stub1, stub2)(10)];
                    case 1:
                        _a.sent();
                        expect(stub1.args[0][0]).toEqual(10);
                        expect(stub2.args[0][0]).toEqual(1);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should correctly resolve the piped value', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var first, second, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        first = function (num) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, num * 2];
                            });
                        }); };
                        second = function (num) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, num - 2];
                            });
                        }); };
                        return [4 /*yield*/, pipeAsync_1["default"](first, second)(10)];
                    case 1:
                        value = _a.sent();
                        expect(value).toEqual(18);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should correctly resolve the piped value with non async functions included', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var first, second, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        first = function (num) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, num * 2];
                        }); }); };
                        second = function (num) { return num - 2; };
                        return [4 /*yield*/, pipeAsync_1["default"](first, second)(10)];
                    case 1:
                        value = _a.sent();
                        expect(value).toEqual(18);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should correctly reject if a non pure function is included', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pure, nonPure, err, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pure = function (num) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, num * 2];
                        }); }); };
                        nonPure = function (num) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/];
                        }); }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, pipeAsync_1["default"](pure, nonPure)(2)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        err = e_1;
                        return [3 /*break*/, 4];
                    case 4:
                        expect(err).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=pipeAsync.spec.js.map