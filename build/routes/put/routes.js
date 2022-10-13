"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPut = void 0;
const VerifyRequestBody_1 = require("./../../middlewares/Rules/VerifyRequestBody");
const express_1 = require("express");
const UpdateFigure_1 = require("../../useCases/UpdateFigure");
const routerPut = (0, express_1.Router)();
exports.routerPut = routerPut;
const { verifyBodyFigure, verifyBodySerie, verifyBodyManufacturer, verifyBodyImagesUpdate, } = new VerifyRequestBody_1.VerifyRequestsBody();
routerPut.put("/update-figure", verifyBodyFigure, (req, res) => {
    return UpdateFigure_1.updateFigureController.handleFigure(req, res);
});
routerPut.put("/update-images", verifyBodyImagesUpdate, (req, res) => {
    return UpdateFigure_1.updateFigureController.handleImages(req, res);
});
routerPut.put("/update-series", verifyBodySerie, (req, res) => {
    return UpdateFigure_1.updateFigureController.handleSeries(req, res);
});
routerPut.put("/update-manufacturer", verifyBodyManufacturer, (req, res) => {
    return UpdateFigure_1.updateFigureController.handleManufacturer(req, res);
});
