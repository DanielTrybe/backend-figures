"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLFiguresCreateRepository = void 0;
const client_1 = require("@prisma/client");
class MySQLFiguresCreateRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createNewFigure(data) {
        const newFigure = await this.prisma.figures.create({
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
    async createNewImagesFromFigure(data) {
        const figuresImages = await this.prisma.images.createMany({
            data: data,
        });
        if (figuresImages) {
            return true;
        }
        else {
            return false;
        }
    }
    async createNewSerie(serie) {
        const newSerie = await this.prisma.series.create({
            data: serie,
        });
        if (newSerie) {
            return newSerie;
        }
        else {
            return false;
        }
    }
    async createNewManufacturer(manufacturer) {
        const newManufacturer = await this.prisma.manufacturers.create({
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
exports.MySQLFiguresCreateRepository = MySQLFiguresCreateRepository;
