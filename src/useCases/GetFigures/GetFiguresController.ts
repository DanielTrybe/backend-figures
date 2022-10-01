// controler
import { Request, Response } from "express";
import { GetFiguresUseCase } from "./GetFiguresUseCase";

export class GetFiguresController {
  constructor(private getFiguresUserCase: GetFiguresUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const figures = await this.getFiguresUserCase.execute();

      return response.status(200).json(figures);
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  }
}
