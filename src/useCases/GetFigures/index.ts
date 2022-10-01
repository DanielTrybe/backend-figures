import { GetFiguresUseCase } from "./GetFiguresUseCase";
import { GetFiguresController } from "./GetFiguresController";
import { MySQLUserRepository } from "./../../repositories/implementations/MySQLFiguresRepository";

const mysqlFiguresRepository = new MySQLUserRepository();

const getFiguresUserCase = new GetFiguresUseCase(mysqlFiguresRepository);

const getFiguresController = new GetFiguresController(getFiguresUserCase);

export { getFiguresController, getFiguresUserCase };
