// controler
import { Request, Response } from "express";
import { GetFiguresUseCase } from "./GetFiguresUseCase";

export class GetFiguresController {
  constructor(private getFiguresUserCase: GetFiguresUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.getFiguresUserCase.execute();

      return response.status(201).send();
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  }
}
