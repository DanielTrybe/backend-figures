import { Request, Response, NextFunction } from "express";

export interface IMiddlewaresRules {
  verifyBodyFigure(req: Request, res: Response, next: NextFunction): Response;
  // verifyBodySerie(req: Request, res: Response): Response;
  // verifyBodyImages(req: Request, res: Response): Response;
  // verifyBodyManufacturer(req: Request, res: Response): Response;
}
