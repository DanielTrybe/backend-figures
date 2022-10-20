"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFigureController = void 0;
class UpdateFigureController {
    constructor(updateFigureUserCase) {
        this.updateFigureUserCase = updateFigureUserCase;
    }
    async handleFigure(request, response) {
        const { data } = request.body;
        try {
            const figure = await this.updateFigureUserCase.executeUpdateFigure(data);
            return response
                .status(200)
                .json({ message: "You figure is updated", figure });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Failed to update this figure, try again",
            });
        }
    }
    async handleImages(request, response) {
        const { data } = request.body;
        try {
            await this.updateFigureUserCase.executeUpdateImages(data);
            return response.status(200).send("Successful updated this images");
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Failed to update this images, try again",
            });
        }
    }
    async handleSeries(request, response) {
        const { data } = request.body;
        try {
            await this.updateFigureUserCase.executeUpdateSerie(data);
            return response.status(200).send("Successful updated this serie");
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Failed to update this serie, try again",
            });
        }
    }
    async handleManufacturer(request, response) {
        const { data } = request.body;
        try {
            await this.updateFigureUserCase.executeUpdateManufacturer(data);
            return response.status(201).send("Successful updated this manufacturer");
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Failed to update this manufacturer, try again",
            });
        }
    }
}
exports.UpdateFigureController = UpdateFigureController;
