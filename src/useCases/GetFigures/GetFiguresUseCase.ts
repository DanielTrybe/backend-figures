import { IFiguresRepositoryRule } from "./../../repositories/IFiguresRepositoryRule";
// import { Figure } from "./../../entities";

export class GetFiguresUseCase {
  constructor(private figuresRepository: IFiguresRepositoryRule) {}

  async execute() {
    const getFigures = await this.figuresRepository.findAllFigures();

    if (!getFigures) {
      throw new Error("No figures");
    }

    return getFigures;
  }
}
