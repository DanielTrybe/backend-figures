"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.MySQLFiguresUpdateRepository = void 0;
var client_1 = require("@prisma/client");
var MySQLFiguresUpdateRepository = /** @class */ (function () {
    function MySQLFiguresUpdateRepository() {
        this.prisma = new client_1.PrismaClient();
    }
    MySQLFiguresUpdateRepository.prototype.updateFigure = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newFigure;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.figures.update({
                            where: { id: data.id },
                            data: {
                                name: data.name,
                                category: data.category,
                                price: data.price,
                                specifications: data.specifications,
                                releaseInfo: data.releaseInfo,
                                details: data.details,
                                serieID: data.serieID,
                                manufacturerID: data.manufacturerID
                            }
                        })];
                    case 1:
                        newFigure = _a.sent();
                        if (newFigure) {
                            return [2 /*return*/, newFigure];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MySQLFiguresUpdateRepository.prototype.updateImagesFromFigure = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var updateTransactions, figuresImages;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateTransactions = data.map(function (image) {
                            return _this.prisma.images.update({
                                where: { id: image.id },
                                data: {
                                    link: image.link,
                                    figureID: image.figureID
                                }
                            });
                        });
                        return [4 /*yield*/, this.prisma.$transaction(updateTransactions)];
                    case 1:
                        figuresImages = _a.sent();
                        if (figuresImages) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MySQLFiguresUpdateRepository.prototype.updateSerie = function (serie) {
        return __awaiter(this, void 0, void 0, function () {
            var newSerie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.series.update({
                            where: { id: serie.id },
                            data: serie
                        })];
                    case 1:
                        newSerie = _a.sent();
                        if (newSerie) {
                            return [2 /*return*/, newSerie];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MySQLFiguresUpdateRepository.prototype.updateManufacturer = function (manufacturer) {
        return __awaiter(this, void 0, void 0, function () {
            var newManufacturer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.manufacturers.update({
                            where: { id: manufacturer.id },
                            data: manufacturer
                        })];
                    case 1:
                        newManufacturer = _a.sent();
                        if (newManufacturer) {
                            return [2 /*return*/, newManufacturer];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return MySQLFiguresUpdateRepository;
}());
exports.MySQLFiguresUpdateRepository = MySQLFiguresUpdateRepository;
