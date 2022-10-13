"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLFiguresUpdateRepository = void 0;
const client_1 = require("@prisma/client");
class MySQLFiguresUpdateRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async updateFigure(data) {
        const newFigure = await this.prisma.figures.update({
            where: { id: data.id },
            data: {
                name: data.name,
                category: data.category,
                price: data.price,
                specifications: data.specifications,
                releaseInfo: data.releaseInfo,
                details: data.details,
                serieID: data.serieID,
                manufacturerID: data.manufacturerID,
            },
        });
        if (newFigure) {
            return newFigure;
        }
        else {
            return false;
        }
    }
    async updateImagesFromFigure(data) {
        const updateTransactions = data.map((image) => this.prisma.images.update({
            where: { id: image.id },
            data: {
                link: image.link,
                figureID: image.figureID,
            },
        }));
        const figuresImages = await this.prisma.$transaction(updateTransactions);
        if (figuresImages) {
            return true;
        }
        else {
            return false;
        }
    }
    async updateSerie(serie) {
        const newSerie = await this.prisma.series.update({
            where: { id: serie.id },
            data: serie,
        });
        if (newSerie) {
            return newSerie;
        }
        else {
            return false;
        }
    }
    async updateManufacturer(manufacturer) {
        const newManufacturer = await this.prisma.manufacturers.update({
            where: { id: manufacturer.id },
            data: manufacturer,
        });
        if (newManufacturer) {
            return newManufacturer;
        }
        else {
            return false;
        }
    }
}
exports.MySQLFiguresUpdateRepository = MySQLFiguresUpdateRepository;
