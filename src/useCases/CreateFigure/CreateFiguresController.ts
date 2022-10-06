import { Request, Response } from "express";
import { CreateFigureUseCase } from "./CreateFiguresUseCase";

export class CreateFigureController {
  constructor(private createFigureUserCase: CreateFigureUseCase) {}

  async handleFigure(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;

    try {
      const figure = await this.createFigureUserCase.executeCreateFigure(data);

      return response.status(201).json({ figure, message: "Sucess" });
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error" });
    }
  }

  async handleImages(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    try {
      await this.createFigureUserCase.executeCreateImages(data);

      return response.status(201).send("Successful add images to the figureID");
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Failed to add images to the figureID",
      });
    }
  }

  async handleSeries(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    try {
      await this.createFigureUserCase.executeCreateSerie(data);

      return response.status(201).send("Successful created a new serie");
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message || "Failed to create a new serie" });
    }
  }

  async handleManufacturer(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { data } = request.body;
    try {
      await this.createFigureUserCase.executeCreateManufacturer(data);

      return response.status(201).send("Successful created a new manufacturer");
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Failed to create a new manufacturer",
      });
    }
  }
}
