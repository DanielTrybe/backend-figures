import { NewFigure, NewSerie, NewImages, NewManufacturer } from "../entities";

export interface IFiguresUpdateRepositoryRule {
  updateFigure(data: NewFigure): Promise<NewFigure | boolean>;
  updateImagesFromFigure(data: NewImages[]): Promise<boolean>;
  updateSerie(serie: NewSerie): Promise<NewSerie | boolean>;

  updateManufacturer(
    manufacturer: NewManufacturer
  ): Promise<NewManufacturer | boolean>;
}
