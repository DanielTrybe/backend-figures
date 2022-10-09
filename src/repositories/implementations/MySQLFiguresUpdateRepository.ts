import { IFiguresUpdateRepositoryRule } from "../IFigureUpdateRepositoryRule";
import {
  UpdateFigure,
  UpdateSerie,
  UpdateImages,
  UpdateManufacturer,
} from "../../entities";
import { PrismaClient } from "@prisma/client";

export class MySQLFiguresUpdateRepository
  implements IFiguresUpdateRepositoryRule
{
  private prisma = new PrismaClient();

  async updateFigure(data: UpdateFigure): Promise<UpdateFigure | boolean> {
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
    } else {
      return false;
    }
  }

  async updateImagesFromFigure(data: UpdateImages[]): Promise<boolean> {
    const updateTransactions = data.map((image) =>
      this.prisma.images.update({
        where: { id: image.id },
        data: {
          link: image.link,
          figureID: image.figureID,
        },
      })
    );
    const figuresImages = await this.prisma.$transaction(updateTransactions);

    if (figuresImages) {
      return true;
    } else {
      return false;
    }
  }

  async updateSerie(serie: UpdateSerie): Promise<UpdateSerie | boolean> {
    const newSerie = await this.prisma.series.update({
      where: { id: serie.id },
      data: serie,
    });

    if (newSerie) {
      return newSerie;
    } else {
      return false;
    }
  }

  async updateManufacturer(
    manufacturer: UpdateManufacturer
  ): Promise<UpdateManufacturer | boolean> {
    const newManufacturer = await this.prisma.manufacturers.update({
      where: { id: manufacturer.id },
      data: manufacturer,
    });

    if (newManufacturer) {
      return newManufacturer;
    } else {
      return false;
    }
  }
}
