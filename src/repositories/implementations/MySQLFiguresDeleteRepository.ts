import { IFiguresDeleteRepositoryRule } from "../IFiguresDeleteRepositoryRule";
import { PrismaClient } from "@prisma/client";

export class MySQLDeleteFiguresRepository
  implements IFiguresDeleteRepositoryRule
{
  private prisma = new PrismaClient();

  async deleteFigureByID(id: number): Promise<boolean> {
    const deletedFigure = await this.prisma.figures.delete({
      where: { id },
    });

    if (deletedFigure) {
      return true;
    } else {
      return false;
    }
  }

  async deleteImagesByFigureID(figureID: number): Promise<boolean> {
    const deletedImages = await this.prisma.images.deleteMany({
      where: { figureID },
    });

    if (deletedImages) {
      return true;
    } else {
      return false;
    }
  }
}
