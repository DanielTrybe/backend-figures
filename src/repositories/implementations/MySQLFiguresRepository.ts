import { IFiguresRepositoryRule } from "../IFiguresRepositoryRule";
import { Figure } from "../../entities";
import { PrismaClient } from "@prisma/client";

export class MySQLUserRepository implements IFiguresRepositoryRule {
  private prisma = new PrismaClient();

  async findByID(id: string): Promise<Figure | boolean> {
    const figure = await this.prisma.figures_table.findUnique({
      where: { id },
      include: {
        Images: true,
        Series: true,
        Manufacturers: true,
      },
    });

    if (figure) {
      return figure;
    } else {
      return false;
    }
  }

  async findAllFigures(): Promise<Figure[] | boolean> {
    const figures = await this.prisma.figures_table.findMany({
      include: {
        Images: true,
        Series: true,
        Manufacturers: true,
      },
    });

    if (figures) {
      return figures;
    } else {
      return false;
    }
  }
}
