import { VerifyRequestsBody } from "./../../middlewares/Rules/VerifyRequestBody";
import { Router } from "express";
import { createFigureController } from "../../useCases/CreateFigure";

const routerPost = Router();
const {
  verifyBodyFigure,
  verifyBodySerie,
  verifyBodyImages,
  verifyBodyManufacturer,
} = new VerifyRequestsBody();

routerPost.post("/new-figure", verifyBodyFigure, (req, res) => {
  return createFigureController.handleFigure(req, res);
});

routerPost.post("/new-images", verifyBodyImages, (req, res) => {
  return createFigureController.handleImages(req, res);
});

routerPost.post("/new-series", verifyBodySerie, (req, res) => {
  return createFigureController.handleSeries(req, res);
});

routerPost.post("/new-manufacturer", verifyBodyManufacturer, (req, res) => {
  return createFigureController.handleManufacturer(req, res);
});

export { routerPost };
