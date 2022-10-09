import { VerifyRequestsBody } from "./../../middlewares/Rules/VerifyRequestBody";
import { Router } from "express";
import { updateFigureController } from "../../useCases/UpdateFigure";

const routerPut = Router();
const {
  verifyBodyFigure,
  verifyBodySerie,
  verifyBodyImages,
  verifyBodyManufacturer,
} = new VerifyRequestsBody();

routerPut.put("/update-figure", verifyBodyFigure, (req, res) => {
  return updateFigureController.handleFigure(req, res);
});

routerPut.put("/update-images", verifyBodyImages, (req, res) => {
  return updateFigureController.handleImages(req, res);
});

routerPut.put("/update-series", verifyBodySerie, (req, res) => {
  return updateFigureController.handleSeries(req, res);
});

routerPut.put("/update-manufacturer", verifyBodyManufacturer, (req, res) => {
  return updateFigureController.handleManufacturer(req, res);
});

export { routerPut };
