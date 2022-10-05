import { IFiguresCreateRepositoryRule } from "../IFiguresCreateRepositoryRule";
import {
  NewFigure,
  NewSerie,
  NewImages,
  NewManufacturer,
} from "../../entities";
import { PrismaClient } from "@prisma/client";

export class MySQLFiguresCreateRepository
  implements IFiguresCreateRepositoryRule
{
  private prisma = new PrismaClient();

  async createNewFigure(data: NewFigure): Promise<NewFigure | boolean> {
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
    } else {
      return false;
    }
  }

  async createNewImagesFromFigure(data: NewImages[]): Promise<boolean> {
    const figuresImages = await this.prisma.images.createMany({
      data: data,
    });

    if (figuresImages) {
      return true;
    } else {
      return false;
    }
  }

  async createNewSerie(serie: NewSerie): Promise<NewSerie | boolean> {
    const newSerie = await this.prisma.series.create({
      data: serie,
    });

    if (newSerie) {
      return newSerie;
    } else {
      return false;
    }
  }

  async createNewManufacturer(
    manufacturer: NewManufacturer
  ): Promise<NewManufacturer | boolean> {
    const newManufacturer = await this.prisma.manufacturers.create({
      data: manufacturer,
    });

    if (newManufacturer) {
      return newManufacturer;
    } else {
      return false;
    }
  }
}
