"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPost = void 0;
const VerifyRequestBody_1 = require("./../../middlewares/Rules/VerifyRequestBody");
const express_1 = require("express");
const CreateFigure_1 = require("../../useCases/CreateFigure");
const routerPost = (0, express_1.Router)();
exports.routerPost = routerPost;
const { verifyBodyFigure, verifyBodySerie, verifyBodyImages, verifyBodyManufacturer, } = new VerifyRequestBody_1.VerifyRequestsBody();
routerPost.post("/new-figure", verifyBodyFigure, (req, res) => {
    return CreateFigure_1.createFigureController.handleFigure(req, res);
});
routerPost.post("/new-images", verifyBodyImages, (req, res) => {
    return CreateFigure_1.createFigureController.handleImages(req, res);
});
routerPost.post("/new-series", verifyBodySerie, (req, res) => {
    return CreateFigure_1.createFigureController.handleSeries(req, res);
});
routerPost.post("/new-manufacturer", verifyBodyManufacturer, (req, res) => {
    return CreateFigure_1.createFigureController.handleManufacturer(req, res);
});
