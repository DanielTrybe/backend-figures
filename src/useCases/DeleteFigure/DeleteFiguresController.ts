// controler
import { Request, Response } from "express";
import { DeleteFiguresUseCase } from "./DeleteFiguresUseCase";

export class DeleteFiguresController {
  constructor(private deleteFiguresUserCase: DeleteFiguresUseCase) {}

  async handleDeleteFigure(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    try {
      await this.deleteFiguresUserCase.executeDeleteFigure(Number(id));

      return response.status(200).json({ message: "Figure deleted" });
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  }

  async handleDeleteImages(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { figureID } = request.params;
    console.log(figureID);
    try {
      await this.deleteFiguresUserCase.executeDeleteImages(Number(figureID));

      return response.status(200).json({ message: "Images deleted" });
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  }
}
