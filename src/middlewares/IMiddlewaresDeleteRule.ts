import { Request, Response, NextFunction } from "express";

export interface IMiddlewaresDeleteRules {
  verifyParamFigure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
  verifyParamImages(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void;
}
