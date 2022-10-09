import { Request, Response } from "express";
import { UpdateFigureUseCase } from "./UpdateFiguresUseCase";

export class UpdateFigureController {
  constructor(private updateFigureUserCase: UpdateFigureUseCase) {}

  async handleFigure(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;

    try {
      const figure = await this.updateFigureUserCase.executeUpdateFigure(data);

      return response
        .status(200)
        .json({ message: "You figure is updated", figure });
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Failed to update this figure, try again",
      });
    }
  }

  async handleImages(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    try {
      await this.updateFigureUserCase.executeUpdateImages(data);

      return response.status(200).send("Successful updated this images");
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Failed to update this images, try again",
      });
    }
  }

  async handleSeries(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    try {
      await this.updateFigureUserCase.executeUpdateSerie(data);

      return response.status(200).send("Successful updated this serie");
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Failed to update this serie, try again",
      });
    }
  }

  async handleManufacturer(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { data } = request.body;
    try {
      await this.updateFigureUserCase.executeUpdateManufacturer(data);

      return response.status(201).send("Successful updated this manufacturer");
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Failed to update this manufacturer, try again",
      });
    }
  }
}
