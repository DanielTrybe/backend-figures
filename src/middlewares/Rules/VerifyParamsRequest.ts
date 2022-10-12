import { IMiddlewaresDeleteRules } from "../IMiddlewaresDeleteRule";
import { Request, Response, NextFunction } from "express";
import { idParam, figureIDParam } from "../zodschemas/schemaZodDelete";
import { ZodError } from "zod";
import { FormatError } from "./FormatError";

export class VerifyRequestsParams implements IMiddlewaresDeleteRules {
  verifyParamFigure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { id } = req.params;

    try {
      idParam.parse(Number(id));
    } catch (err) {
      if (err instanceof ZodError) {
        const error = new FormatError();
        return res.status(400).json(error.convertError(err));
      }
    }
    next();
  }

  verifyParamImages(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { figureID } = req.params;

    try {
      figureIDParam.parse(Number(figureID));
    } catch (err) {
      if (err instanceof ZodError) {
        const error = new FormatError();
        return res.status(400).json(error.convertError(err));
      }
    }
    next();
  }
}
