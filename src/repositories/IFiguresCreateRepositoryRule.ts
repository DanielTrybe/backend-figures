import { NewFigure, NewSerie, NewImages, NewManufacturer } from "../entities";

export interface IFiguresCreateRepositoryRule {
  createNewFigure(data: NewFigure): Promise<NewFigure | boolean>;
  createNewImagesFromFigure(data: NewImages[]): Promise<boolean>;
  createNewSerie(serie: NewSerie): Promise<NewSerie | boolean>;
  createNewManufacturer(
    manufacturer: NewManufacturer
  ): Promise<NewManufacturer | boolean>;
}
