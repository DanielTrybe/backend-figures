import { MySQLFiguresUpdateRepository } from "../../repositories/implementations//MySQLFiguresUpdateRepository";
import { UpdateFigureController } from "./UpdateFiguresController";
import { UpdateFigureUseCase } from "./UpdateFiguresUseCase";

const MySQLFigureUpdateRepository = new MySQLFiguresUpdateRepository();

const updateFigureUseCase = new UpdateFigureUseCase(
  MySQLFigureUpdateRepository
);

const updateFigureController = new UpdateFigureController(updateFigureUseCase);

export { updateFigureController, updateFigureUseCase };
