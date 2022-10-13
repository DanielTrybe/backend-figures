"use strict";
exports.__esModule = true;
exports.routerPost = void 0;
var VerifyRequestBody_1 = require("./../../middlewares/Rules/VerifyRequestBody");
var express_1 = require("express");
var CreateFigure_1 = require("../../useCases/CreateFigure");
var routerPost = (0, express_1.Router)();
exports.routerPost = routerPost;
var _a = new VerifyRequestBody_1.VerifyRequestsBody(), verifyBodyFigure = _a.verifyBodyFigure, verifyBodySerie = _a.verifyBodySerie, verifyBodyImages = _a.verifyBodyImages, verifyBodyManufacturer = _a.verifyBodyManufacturer;
routerPost.post("/new-figure", verifyBodyFigure, function (req, res) {
    return CreateFigure_1.createFigureController.handleFigure(req, res);
});
routerPost.post("/new-images", verifyBodyImages, function (req, res) {
    return CreateFigure_1.createFigureController.handleImages(req, res);
});
routerPost.post("/new-series", verifyBodySerie, function (req, res) {
    return CreateFigure_1.createFigureController.handleSeries(req, res);
});
routerPost.post("/new-manufacturer", verifyBodyManufacturer, function (req, res) {
    return CreateFigure_1.createFigureController.handleManufacturer(req, res);
});
