import { DeleteFiguresController } from "./DeleteFiguresController";
import { MySQLDeleteFiguresRepository } from "../../repositories/implementations/MySQLFiguresDeleteRepository";
import { DeleteFiguresUseCase } from "./DeleteFiguresUseCase";

const mySQLDeleteFiguresRepository = new MySQLDeleteFiguresRepository();

const deleteFiguresUserCase = new DeleteFiguresUseCase(
  mySQLDeleteFiguresRepository
);

const deleteFiguresController = new DeleteFiguresController(
  deleteFiguresUserCase
);

export { deleteFiguresController, deleteFiguresUserCase };
