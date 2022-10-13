"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLUserRepository = void 0;
const client_1 = require("@prisma/client");
const process_1 = require("process");
class MySQLUserRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient({
            datasources: {
                db: {
                    url: process_1.env.DATABASE_URL,
                },
            },
        });
    }
    async findByID(id) {
        const figure = await this.prisma.figures.findUnique({
            where: { id },
            include: {
                Serie: { select: { serie: true } },
                Manufacturer: { select: { manufacturer: true } },
                Images: true,
            },
        });
        if (figure) {
            return figure;
        }
        else {
            return false;
        }
    }
    async findAllFigures() {
        const figures = await this.prisma.figures.findMany({
            include: {
                Serie: { select: { serie: true } },
                Manufacturer: { select: { manufacturer: true } },
                Images: true,
            },
        });
        if (figures) {
            return figures;
        }
        else {
            return false;
        }
    }
}
exports.MySQLUserRepository = MySQLUserRepository;
