import { IFiguresUpdateRepositoryRule } from "../../repositories/IFigureUpdateRepositoryRule";
import {
  IUpdateFigureRequestDTO,
  IUpdateImagesDTO,
  IUpdateSeriesDTO,
  IUpdateManufacturerDTO,
} from "./UpdateFiguresDTO";

export class UpdateFigureUseCase {
  constructor(private updateFigureRepository: IFiguresUpdateRepositoryRule) {}

  async executeUpdateFigure(data: IUpdateFigureRequestDTO) {
    if (!data.id) {
      throw new Error("missing id, please provide or i can't find the figure");
    }
    const newfigure = await this.updateFigureRepository.updateFigure(data);

    if (!newfigure) {
      throw new Error("Failed to create a new figure, verify json input");
    }
    return newfigure;
  }

  async executeUpdateImages(data: IUpdateImagesDTO[]) {
    await this.updateFigureRepository.updateImagesFromFigure(data);
  }

  async executeUpdateSerie(data: IUpdateSeriesDTO) {
    if (!data.id) {
      throw new Error("missing id, please provide or i can't find the serie");
    }
    await this.updateFigureRepository.updateSerie(data);
  }

  async executeUpdateManufacturer(data: IUpdateManufacturerDTO) {
    if (!data.id) {
      throw new Error(
        "missing id, please provide or i can't find the manufacturer"
      );
    }
    await this.updateFigureRepository.updateManufacturer(data);
  }
}
