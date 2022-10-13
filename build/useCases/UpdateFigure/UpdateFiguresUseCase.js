"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFigureUseCase = void 0;
class UpdateFigureUseCase {
    constructor(updateFigureRepository) {
        this.updateFigureRepository = updateFigureRepository;
    }
    async executeUpdateFigure(data) {
        if (!data.id) {
            throw new Error("missing id, please provide or i can't find the figure");
        }
        const newfigure = await this.updateFigureRepository.updateFigure(data);
        if (!newfigure) {
            throw new Error("Failed to create a new figure, verify json input");
        }
        return newfigure;
    }
    async executeUpdateImages(data) {
        await this.updateFigureRepository.updateImagesFromFigure(data);
    }
    async executeUpdateSerie(data) {
        if (!data.id) {
            throw new Error("missing id, please provide or i can't find the serie");
        }
        await this.updateFigureRepository.updateSerie(data);
    }
    async executeUpdateManufacturer(data) {
        if (!data.id) {
            throw new Error("missing id, please provide or i can't find the manufacturer");
        }
        await this.updateFigureRepository.updateManufacturer(data);
    }
}
exports.UpdateFigureUseCase = UpdateFigureUseCase;
