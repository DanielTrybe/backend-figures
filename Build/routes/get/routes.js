"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerGet = void 0;
const express_1 = require("express");
const GetFigures_1 = require("../../useCases/GetFigures");
const routerGet = (0, express_1.Router)();
exports.routerGet = routerGet;
routerGet.get("/figures", (req, res) => {
    return GetFigures_1.getFiguresController.handle(req, res);
});
routerGet.get("/figures/:id", (req, res) => {
    return GetFigures_1.getFiguresController.handleOneFigure(req, res);
});
