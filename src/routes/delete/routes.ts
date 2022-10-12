import { Router } from "express";
import { deleteFiguresController } from "../../useCases/DeleteFigure/";
import { VerifyRequestsParams } from "./../../middlewares/Rules/VerifyParamsRequest";
const routerDelete = Router();

const { verifyParamFigure, verifyParamImages } = new VerifyRequestsParams();

routerDelete.delete("/delete-figure/:id", verifyParamFigure, (req, res) => {
  return deleteFiguresController.handleDeleteFigure(req, res);
});

routerDelete.delete(
  "/delete-images/:figureID",
  verifyParamImages,
  (req, res) => {
    return deleteFiguresController.handleDeleteImages(req, res);
  }
);

export { routerDelete };
