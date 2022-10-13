"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFiguresController = void 0;
class DeleteFiguresController {
    constructor(deleteFiguresUserCase) {
        this.deleteFiguresUserCase = deleteFiguresUserCase;
    }
    async handleDeleteFigure(request, response) {
        const { id } = request.params;
        try {
            await this.deleteFiguresUserCase.executeDeleteFigure(Number(id));
            return response.status(200).json({ message: "Figure deleted" });
        }
        catch (err) {
            return response
                .status(400)
                .json({ message: err.message || "Unexpected error" });
        }
    }
    async handleDeleteImages(request, response) {
        const { figureID } = request.params;
        console.log(figureID);
        try {
            await this.deleteFiguresUserCase.executeDeleteImages(Number(figureID));
            return response.status(200).json({ message: "Images deleted" });
        }
        catch (err) {
            return response
                .status(400)
                .json({ message: err.message || "Unexpected error" });
        }
    }
}
exports.DeleteFiguresController = DeleteFiguresController;
