"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerDelete = void 0;
const express_1 = require("express");
const DeleteFigure_1 = require("../../useCases/DeleteFigure/");
const VerifyParamsRequest_1 = require("./../../middlewares/Rules/VerifyParamsRequest");
const routerDelete = (0, express_1.Router)();
exports.routerDelete = routerDelete;
const { verifyParamFigure, verifyParamImages } = new VerifyParamsRequest_1.VerifyRequestsParams();
routerDelete.delete("/delete-figure/:id", verifyParamFigure, (req, res) => {
    return DeleteFigure_1.deleteFiguresController.handleDeleteFigure(req, res);
});
routerDelete.delete("/delete-images/:figureID", verifyParamImages, (req, res) => {
    return DeleteFigure_1.deleteFiguresController.handleDeleteImages(req, res);
});
