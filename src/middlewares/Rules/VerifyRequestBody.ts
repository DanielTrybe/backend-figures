import { IMiddlewaresRules } from "../IMiddlewaresRules";
import { Request, Response, NextFunction } from "express";
import { figureBodySchema, figureSerieSchema } from "../zodschemas/schemasZod";
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
  constructor(private formatError: FormatError) {}

  verifyBodyFigure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | any {
    const { data } = req.body;

    try {
      figureBodySchema.parse(data);
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json(
          err.issues.map((err) => {
            const error = {
              message: err.message,
              key: err.path,
              code: 400,
            };
            return error;
          })
        );
      }
    }
    next();
  }

  verifyBodySerie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | any {
    const { data } = req.body;

    try {
      figureSerieSchema.parse(data);
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json(
          err.issues.map((err) => {
            const error = {
              message: err.message,
              key: err.path,
              code: 400,
            };
            return error;
          })
        );
      }
    }
    next();
  }

  verifyBodyImages(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | any {
    const images = req.body.data;
    const tags = ["link", "figureID"];

    for (let i = 0; i < images.length; i++) {
      if (JSON.stringify(tags) !== JSON.stringify(Object.keys(images[i]))) {
        return res
          .status(400)
          .json({ message: `Missing tags, please verify your array` });
      }

      if (typeof images[i].figureID !== "number") {
        return res.status(400).json({
          message: `postion ${i} in the array, figureID must be a number`,
        });
      }

      if (typeof images[i].link !== "string") {
        return res.status(400).json({
          message: `postion ${i} in the array, link must be a string`,
        });
      }
    }
    next();
  }

  verifyBodyManufacturer(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | any {
    const { manufacturer } = req.body.data;

    if (!manufacturer) {
      return res.status(400).json({ message: "Missing manufacturer" });
    }
    if (typeof manufacturer !== "string") {
      return res.status(400).json({ message: "manufacturer must be a string" });
    }
    next();
  }
}
