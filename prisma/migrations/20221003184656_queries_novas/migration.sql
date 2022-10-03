-- CreateTable
CREATE TABLE `Figures_table` (
    `id` VARCHAR(191) NOT NULL,
    `name` LONGTEXT NOT NULL,
    `category` LONGTEXT NOT NULL,
    `price` LONGTEXT NOT NULL,
    `specifications` LONGTEXT NOT NULL,
    `releaseInfo` LONGTEXT NOT NULL,
    `details` LONGTEXT NOT NULL,
    `serieID` INTEGER NOT NULL,
    `manufacturerID` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Figures_table_id_key`(`id`),
    UNIQUE INDEX `Figures_table_serieID_key`(`serieID`),
    UNIQUE INDEX `Figures_table_manufacturerID_key`(`manufacturerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Series` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serie` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Series_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manufacturers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manufacturer` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Manufacturers_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `figureID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Images_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Series` ADD CONSTRAINT `Series_id_fkey` FOREIGN KEY (`id`) REFERENCES `Figures_table`(`serieID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manufacturers` ADD CONSTRAINT `Manufacturers_id_fkey` FOREIGN KEY (`id`) REFERENCES `Figures_table`(`manufacturerID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_figureID_fkey` FOREIGN KEY (`figureID`) REFERENCES `Figures_table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
