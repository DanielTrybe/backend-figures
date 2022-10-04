-- CreateTable
CREATE TABLE `Figures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` LONGTEXT NOT NULL,
    `category` LONGTEXT NOT NULL,
    `price` LONGTEXT NOT NULL,
    `specifications` LONGTEXT NOT NULL,
    `releaseInfo` LONGTEXT NOT NULL,
    `details` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `serieID` INTEGER NOT NULL,
    `manufacturerID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Series` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serie` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Series_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manufacturers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manufacturer` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Manufacturers_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `figureID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Figures` ADD CONSTRAINT `Figures_serieID_fkey` FOREIGN KEY (`serieID`) REFERENCES `Series`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Figures` ADD CONSTRAINT `Figures_manufacturerID_fkey` FOREIGN KEY (`manufacturerID`) REFERENCES `Manufacturers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_figureID_fkey` FOREIGN KEY (`figureID`) REFERENCES `Figures`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
