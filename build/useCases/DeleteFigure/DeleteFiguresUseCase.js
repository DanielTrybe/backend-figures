"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFiguresUseCase = void 0;
// import { Figure } from "./../../entities";
class DeleteFiguresUseCase {
    constructor(figuresRepository) {
        this.figuresRepository = figuresRepository;
    }
    async executeDeleteFigure(id) {
        try {
            await this.figuresRepository.deleteFigureByID(id);
        }
        catch (err) {
            throw new Error(err.meta.cause);
        }
    }
    async executeDeleteImages(figureID) {
        try {
            await this.figuresRepository.deleteImagesByFigureID(figureID);
        }
        catch (err) {
            throw new Error(err.meta.cause);
        }
    }
}
exports.DeleteFiguresUseCase = DeleteFiguresUseCase;
