/*
  Warnings:

  - Added the required column `figureID` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `Images_id_fkey`;

-- AlterTable
ALTER TABLE `images` ADD COLUMN `figureID` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_figureID_fkey` FOREIGN KEY (`figureID`) REFERENCES `Figures_table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
