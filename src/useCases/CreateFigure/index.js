"use strict";
exports.__esModule = true;
exports.createFigureUseCase = exports.createFigureController = void 0;
var MySQLFiguresCreateRepository_1 = require("../../repositories/implementations/MySQLFiguresCreateRepository");
var CreateFiguresController_1 = require("./CreateFiguresController");
var CreateFiguresUseCase_1 = require("./CreateFiguresUseCase");
var MySQLCreateFigureRepository = new MySQLFiguresCreateRepository_1.MySQLFiguresCreateRepository();
var createFigureUseCase = new CreateFiguresUseCase_1.CreateFigureUseCase(MySQLCreateFigureRepository);
exports.createFigureUseCase = createFigureUseCase;
var createFigureController = new CreateFiguresController_1.CreateFigureController(createFigureUseCase);
exports.createFigureController = createFigureController;