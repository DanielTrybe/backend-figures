"use strict";
exports.__esModule = true;
exports.routerGet = void 0;
var express_1 = require("express");
var GetFigures_1 = require("../../useCases/GetFigures");
var routerGet = (0, express_1.Router)();
exports.routerGet = routerGet;
routerGet.get("/figures", function (req, res) {
    return GetFigures_1.getFiguresController.handle(req, res);
});
routerGet.get("/figures/:id", function (req, res) {
    return GetFigures_1.getFiguresController.handleOneFigure(req, res);
});
