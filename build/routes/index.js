"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerDelete = exports.routerPut = exports.routerPost = exports.routerGet = void 0;
var routes_1 = require("./get/routes");
Object.defineProperty(exports, "routerGet", { enumerable: true, get: function () { return routes_1.routerGet; } });
var routes_2 = require("./post/routes");
Object.defineProperty(exports, "routerPost", { enumerable: true, get: function () { return routes_2.routerPost; } });
var routes_3 = require("./put/routes");
Object.defineProperty(exports, "routerPut", { enumerable: true, get: function () { return routes_3.routerPut; } });
var routes_4 = require("./delete/routes");
Object.defineProperty(exports, "routerDelete", { enumerable: true, get: function () { return routes_4.routerDelete; } });