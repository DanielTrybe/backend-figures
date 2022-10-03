import { PrismaClient } from "@prisma/client";
import { series, manufacturers, images, figures } from "./data";

async function seed() {
  const prisma = new PrismaClient();

  await prisma.figures_table.createMany({ data: figures as any });
  await prisma.images.createMany({ data: images as any });
  await prisma.manufacturers.createMany({ data: manufacturers as any });
  await prisma.series.createMany({ data: series as any });
}

seed();
