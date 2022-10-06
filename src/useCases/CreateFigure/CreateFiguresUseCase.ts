import { IFiguresCreateRepositoryRule } from "../../repositories/IFiguresCreateRepositoryRule";
import {
  ICreateFigureRequestDTO,
  ICreateImagesDTO,
  ICreateSeriesDTO,
  ICreateManufacturerDTO,
} from "./CreateFiguresDTO";

export class CreateFigureUseCase {
  constructor(private createFigureRepository: IFiguresCreateRepositoryRule) {}

  async executeCreateFigure(data: ICreateFigureRequestDTO) {
    const newfigure = await this.createFigureRepository.createNewFigure(data);

    if (!newfigure) {
      throw new Error("Failed to create a new figure, verify json input");
    }
  }

  async executeCreateImages(data: ICreateImagesDTO[]) {
    // if (data.some((figure) => (figure.figureID ? false : true))) {
    //   throw new Error(
    //     "All Images need to be attached to the figureID, please provide the figureID"
    //   );
    // }

    await this.createFigureRepository.createNewImagesFromFigure(data);
  }

  async executeCreateSerie(data: ICreateSeriesDTO) {
    await this.createFigureRepository.createNewSerie(data);
  }

  async executeCreateManufacturer(data: ICreateManufacturerDTO) {
    await this.createFigureRepository.createNewManufacturer(data);
  }
}
