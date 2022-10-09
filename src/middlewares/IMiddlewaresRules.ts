import { Request, Response, NextFunction } from "express";

export interface IMiddlewaresRules {
  verifyBodyFigure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
  verifyBodySerie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
  verifyBodyImages(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
  verifyBodyManufacturer(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
}
