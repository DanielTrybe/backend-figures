"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFigureController = void 0;
class CreateFigureController {
    constructor(createFigureUserCase) {
        this.createFigureUserCase = createFigureUserCase;
    }
    async handleFigure(request, response) {
        const { data } = request.body;
        try {
            const figure = await this.createFigureUserCase.executeCreateFigure(data);
            return response.status(201).json({ figure, message: "Sucess" });
        }
        catch (err) {
            return response
                .status(400)
                .json({ message: err.message || "Unexpected error" });
        }
    }
    async handleImages(request, response) {
        const { data } = request.body;
        try {
            await this.createFigureUserCase.executeCreateImages(data);
            return response.status(201).send("Successful add images to the figureID");
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Failed to add images to the figureID",
            });
        }
    }
    async handleSeries(request, response) {
        const { data } = request.body;
        try {
            await this.createFigureUserCase.executeCreateSerie(data);
            return response.status(201).send("Successful created a new serie");
        }
        catch (err) {
            return response
                .status(400)
                .json({ message: err.message || "Failed to create a new serie" });
        }
    }
    async handleManufacturer(request, response) {
        const { data } = request.body;
        try {
            await this.createFigureUserCase.executeCreateManufacturer(data);
            return response.status(201).send("Successful created a new manufacturer");
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Failed to create a new manufacturer",
            });
        }
    }
}
exports.CreateFigureController = CreateFigureController;
