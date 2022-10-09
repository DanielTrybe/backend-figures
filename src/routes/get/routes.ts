import { Router } from "express";
import { getFiguresController } from "../../useCases/GetFigures";

const routerGet = Router();

routerGet.get("/figures", (req, res) => {
  return getFiguresController.handle(req, res);
});

export { routerGet };
