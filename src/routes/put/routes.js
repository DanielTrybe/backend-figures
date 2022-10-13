"use strict";
exports.__esModule = true;
exports.routerPut = void 0;
var VerifyRequestBody_1 = require("./../../middlewares/Rules/VerifyRequestBody");
var express_1 = require("express");
var UpdateFigure_1 = require("../../useCases/UpdateFigure");
var routerPut = (0, express_1.Router)();
exports.routerPut = routerPut;
var _a = new VerifyRequestBody_1.VerifyRequestsBody(), verifyBodyFigure = _a.verifyBodyFigure, verifyBodySerie = _a.verifyBodySerie, verifyBodyManufacturer = _a.verifyBodyManufacturer, verifyBodyImagesUpdate = _a.verifyBodyImagesUpdate;
routerPut.put("/update-figure", verifyBodyFigure, function (req, res) {
    return UpdateFigure_1.updateFigureController.handleFigure(req, res);
});
routerPut.put("/update-images", verifyBodyImagesUpdate, function (req, res) {
    return UpdateFigure_1.updateFigureController.handleImages(req, res);
});
routerPut.put("/update-series", verifyBodySerie, function (req, res) {
    return UpdateFigure_1.updateFigureController.handleSeries(req, res);
});
routerPut.put("/update-manufacturer", verifyBodyManufacturer, function (req, res) {
    return UpdateFigure_1.updateFigureController.handleManufacturer(req, res);
});
