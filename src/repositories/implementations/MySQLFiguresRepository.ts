import { IFiguresRepositoryRule } from "../IFiguresRepositoryRule";
import { Figure } from "../../entities";
import { PrismaClient } from "@prisma/client";
import { env } from "process";

export class MySQLUserRepository implements IFiguresRepositoryRule {
  private prisma = new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });

  async findByID(id: number): Promise<Figure | boolean> {
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
    } else {
      return false;
    }
  }

  async findAllFigures(): Promise<Figure[] | boolean> {
    const figures = await this.prisma.figures.findMany({
      include: {
        Serie: { select: { serie: true } },
        Manufacturer: { select: { manufacturer: true } },
        Images: true,
      },
    });

    if (figures) {
      return figures;
    } else {
      return false;
    }
  }
}
