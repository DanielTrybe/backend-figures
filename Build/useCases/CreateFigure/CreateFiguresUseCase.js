"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFigureUseCase = void 0;
class CreateFigureUseCase {
    constructor(createFigureRepository) {
        this.createFigureRepository = createFigureRepository;
    }
    async executeCreateFigure(data) {
        const newfigure = await this.createFigureRepository.createNewFigure(data);
        if (!newfigure) {
            throw new Error("Failed to create a new figure, verify json input");
        }
        return newfigure;
    }
    async executeCreateImages(data) {
        // if (data.some((figure) => (figure.figureID ? false : true))) {
        //   throw new Error(
        //     "All Images need to be attached to the figureID, please provide the figureID"
        //   );
        // }
        await this.createFigureRepository.createNewImagesFromFigure(data);
    }
    async executeCreateSerie(data) {
        await this.createFigureRepository.createNewSerie(data);
    }
    async executeCreateManufacturer(data) {
        await this.createFigureRepository.createNewManufacturer(data);
    }
}
exports.CreateFigureUseCase = CreateFigureUseCase;
