"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLDeleteFiguresRepository = void 0;
const client_1 = require("@prisma/client");
class MySQLDeleteFiguresRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async deleteFigureByID(id) {
        const deletedFigure = await this.prisma.figures.delete({
            where: { id },
        });
        if (deletedFigure) {
            return true;
        }
        else {
            return false;
        }
    }
    async deleteImagesByFigureID(figureID) {
        const deletedImages = await this.prisma.images.deleteMany({
            where: { figureID },
        });
        if (deletedImages) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.MySQLDeleteFiguresRepository = MySQLDeleteFiguresRepository;
