import { Router } from "express";
import { getFiguresController } from "./useCases/GetFigures";

const router = Router();

router.get("/figures", (req, res) => {
  return getFiguresController.handle(req, res);
});

export { router };
