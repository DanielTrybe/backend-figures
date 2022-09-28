-- CreateTable
CREATE TABLE `Series` (
    `id` VARCHAR(191) NOT NULL,
    `serie` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Series_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manufacturers` (
    `id` VARCHAR(191) NOT NULL,
    `manufacturer` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Manufacturers_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Figures_table` (
    `id` VARCHAR(191) NOT NULL,
    `name` LONGTEXT NOT NULL,
    `category` LONGTEXT NOT NULL,
    `price` LONGTEXT NOT NULL,
    `specifications` LONGTEXT NOT NULL,
    `releaseInfo` LONGTEXT NOT NULL,
    `details` LONGTEXT NOT NULL,
    `serieName` VARCHAR(191) NOT NULL,
    `manufacturerName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Figures_table_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Images_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Figures_table` ADD CONSTRAINT `Figures_table_manufacturerName_fkey` FOREIGN KEY (`manufacturerName`) REFERENCES `Manufacturers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Figures_table` ADD CONSTRAINT `Figures_table_serieName_fkey` FOREIGN KEY (`serieName`) REFERENCES `Series`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_id_fkey` FOREIGN KEY (`id`) REFERENCES `Figures_table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
