import { PrismaClient, Prisma } from "@prisma/client";
import { series, manufacturers, images, figures } from "./data";

async function seed() {
  const prisma = new PrismaClient();

  await prisma.series.createMany({ data: series });
  await prisma.manufacturers.createMany({ data: manufacturers });
  await prisma.figures.createMany({ data: figures });
  await prisma.images.createMany({ data: images });
}

seed();
