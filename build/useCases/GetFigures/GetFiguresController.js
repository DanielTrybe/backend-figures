"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFiguresController = void 0;
class GetFiguresController {
    constructor(getFiguresUserCase) {
        this.getFiguresUserCase = getFiguresUserCase;
    }
    async handle(request, response) {
        try {
            const figures = await this.getFiguresUserCase.executeGetFigures();
            return response.status(200).json(figures);
        }
        catch (err) {
            return response
                .status(400)
                .json({ message: err.message || "Unexpected error" });
        }
    }
    async handleOneFigure(request, response) {
        const { id } = request.params;
        try {
            const figure = await this.getFiguresUserCase.executeGetOneFigure(Number(id));
            return response.status(200).json(figure);
        }
        catch (err) {
            return response
                .status(400)
                .json({ message: err.message || "Unexpected error" });
        }
    }
}
exports.GetFiguresController = GetFiguresController;
