import { IMiddlewaresRules } from "../IMiddlewaresRules";
import { Request, Response, NextFunction } from "express";
import {
  figureBodySchema,
  figureSerieSchema,
  figureImagesSchema,
  figureManufacturerSchema,
} from "../zodschemas/schemasZod";
import { ZodError } from "zod";

class FormatError {
  convertError(
    err: ZodError
  ): Array<{ message: string; key: (string | number)[]; code: number }> {
    console.log(err);
    return err.issues.map((err) => {
      const error = {
        message: err.message,
        key: err.path,
        code: 400,
      };
      return error;
    });
  }
}

export class VerifyRequestsBody implements IMiddlewaresRules {
  verifyBodyFigure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { data } = req.body;

    try {
      figureBodySchema.parse(data);
    } catch (err) {
      if (err instanceof ZodError) {
        const error = new FormatError();
        return res.status(400).json(error.convertError(err));
      }
    }
    next();
  }

  verifyBodySerie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { data } = req.body;

    try {
      figureSerieSchema.parse(data);
    } catch (err) {
      if (err instanceof ZodError) {
        const error = new FormatError();
        return res.status(400).json(error.convertError(err));
      }
    }
    next();
  }

  verifyBodyImages(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const images = req.body.data;

    try {
      images.every((image: { link: string; figureID: number }) =>
        figureImagesSchema.parse(image)
      );
    } catch (err) {
      if (err instanceof ZodError) {
        const error = new FormatError();
        return res.status(400).json(error.convertError(err));
      }
    }
    next();
  }

  verifyBodyManufacturer(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const { data } = req.body;

    try {
      figureManufacturerSchema.parse(data);
    } catch (err) {
      if (err instanceof ZodError) {
        const error = new FormatError();
        return res.status(400).json(error.convertError(err));
      }
    }
    next();
  }
}
