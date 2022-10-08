import { IMiddlewaresRules } from "../IMiddlewaresRules";
import { Request, Response, NextFunction } from "express";

export class VerifyRequestsBody implements IMiddlewaresRules {
  verifyBodyFigure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | any {
    const { data } = req.body;

    const tags = [
      { name: "name", type: "string" },
      { name: "category", type: "string" },
      { name: "price", type: "string" },
      { name: "specifications", type: "string" },
      { name: "releaseInfo", type: "string" },
      { name: "serieID", type: 0 },
      { name: "manufacturerID", type: 0 },
    ];

    for (let i = 0; i < tags.length; i++) {
      if (!Object.keys(data).includes(tags[i].name)) {
        return res.status(400).json({ message: `Missing ${tags[i]}` });
      }
      if (typeof data[tags[i].name] !== typeof tags[i].type) {
        return res.status(400).json({
          message: `${tags[i].name} must be a ${typeof tags[i].type}`,
        });
      }
    }
    next();
  }

  verifyBodySerie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | any {
    const { serie } = req.body.data;

    if (!serie) {
      return res.status(400).json({ message: "Missing serie" });
    }
    if (typeof serie !== "string") {
      return res.status(400).json({ message: "Serie must be a string" });
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
