"use strict";
exports.__esModule = true;
exports.routerDelete = void 0;
var express_1 = require("express");
var DeleteFigure_1 = require("../../useCases/DeleteFigure/");
var VerifyParamsRequest_1 = require("./../../middlewares/Rules/VerifyParamsRequest");
var routerDelete = (0, express_1.Router)();
exports.routerDelete = routerDelete;
var _a = new VerifyParamsRequest_1.VerifyRequestsParams(), verifyParamFigure = _a.verifyParamFigure, verifyParamImages = _a.verifyParamImages;
routerDelete["delete"]("/delete-figure/:id", verifyParamFigure, function (req, res) {
    return DeleteFigure_1.deleteFiguresController.handleDeleteFigure(req, res);
});
routerDelete["delete"]("/delete-images/:figureID", verifyParamImages, function (req, res) {
    return DeleteFigure_1.deleteFiguresController.handleDeleteImages(req, res);
});
