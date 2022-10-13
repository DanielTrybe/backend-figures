"use strict";
exports.__esModule = true;
exports.app = void 0;
var express_1 = require("express");
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
exports.app = app;
app.use(express_1["default"].json());
app.use(routes_1.routerGet, routes_1.routerPost, routes_1.routerPut, routes_1.routerDelete);
