import { Router } from "express";
import { getFiguresController } from "../../useCases/GetFigures";

const routerGet = Router();

routerGet.get("/figures", (req, res) => {
  return getFiguresController.handle(req, res);
});

routerGet.get("/figures/:id", (req, res) => {
  return getFiguresController.handleOneFigure(req, res);
});

// get series e manufacturers
// get com filtros por nome

export { routerGet };
