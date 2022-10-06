import { MySQLFiguresCreateRepository } from "../../repositories/implementations/MySQLFiguresCreateRepository";
import { CreateFigureController } from "./CreateFiguresController";
import { CreateFigureUseCase } from "./CreateFiguresUseCase";

const MySQLCreateFigureRepository = new MySQLFiguresCreateRepository();

const createFigureUseCase = new CreateFigureUseCase(
  MySQLCreateFigureRepository
);

const createFigureController = new CreateFigureController(createFigureUseCase);

export { createFigureController, createFigureUseCase };
