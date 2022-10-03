import { Figure } from "../entities";

export interface IFiguresRepositoryRule {
  findByID(id: Number): Promise<Figure | boolean>;
  findAllFigures(): Promise<Figure[] | boolean>;
  // save(figure: Figure): Promise<void>;
}
