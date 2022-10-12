import { IFiguresDeleteRepositoryRule } from "../../repositories/IFiguresDeleteRepositoryRule";
// import { Figure } from "./../../entities";

export class DeleteFiguresUseCase {
  constructor(private figuresRepository: IFiguresDeleteRepositoryRule) {}

  async executeDeleteFigure(id: number) {
    try {
      await this.figuresRepository.deleteFigureByID(id);
    } catch (err: any) {
      throw new Error(err.meta.cause);
    }
  }

  async executeDeleteImages(figureID: number) {
    try {
      await this.figuresRepository.deleteImagesByFigureID(figureID);
    } catch (err: any) {
      throw new Error(err.meta.cause);
    }
  }
}
