"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFiguresUseCase = void 0;
// import { Figure } from "./../../entities";
class GetFiguresUseCase {
    constructor(figuresRepository) {
        this.figuresRepository = figuresRepository;
    }
    async executeGetFigures() {
        const getFigures = await this.figuresRepository.findAllFigures();
        if (!getFigures) {
            throw new Error("No figures");
        }
        return getFigures;
    }
    async executeGetOneFigure(id) {
        const getFigure = await this.figuresRepository.findByID(id);
        if (!getFigure) {
            throw new Error("No figure");
        }
        return getFigure;
    }
}
exports.GetFiguresUseCase = GetFiguresUseCase;
