import { IMiddlewaresRules } from "../IMiddlewaresRules";
import { Request, Response, NextFunction } from "express";

export class VerifyRequestsBody implements IMiddlewaresRules {
  verifyBodyFigure(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | any {
    const data = req.body.data;
    console.log(data.name);
    switch (data) {
      case !data.name:
        return res.status(400).json({ message: "Missing name" });
      case !data.category:
        return res.status(400).json({ message: "Missing category" });
      case !data.price:
        return res.status(400).json({ message: "Missing price" });
      case !data.specifications:
        return res.status(400).json({ message: "Missing specifications" });
      case !data.releaseInfo:
        return res.status(400).json({ message: "Missing releaseInfo" });
      case !data.serieID:
        return res.status(400).json({ message: "Missing serieID" });
      case !data.manufacturerID:
        return res.status(400).json({ message: "Missing manufacturerID" });
      default:
        return next();
    }
  }
}
