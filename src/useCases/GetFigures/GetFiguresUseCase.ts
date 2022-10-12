import { IFiguresRepositoryRule } from "./../../repositories/IFiguresRepositoryRule";
// import { Figure } from "./../../entities";

export class GetFiguresUseCase {
  constructor(private figuresRepository: IFiguresRepositoryRule) {}

  async executeGetFigures() {
    const getFigures = await this.figuresRepository.findAllFigures();

    if (!getFigures) {
      throw new Error("No figures");
    }

    return getFigures;
  }

  async executeGetOneFigure(id: number) {
    const getFigure = await this.figuresRepository.findByID(id);

    if (!getFigure) {
      throw new Error("No figure");
    }

    return getFigure;
  }
}
