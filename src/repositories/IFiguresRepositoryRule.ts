import { Figure } from "../entities";

export interface IFiguresRepositoryRule {
  findByID(id: string): Promise<Figure | boolean>;
  findAllFigures(): Promise<Figure[] | boolean>;
  save(figure: Figure): Promise<void>;
}
