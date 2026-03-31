/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_userId_fkey`;

-- AlterTable
ALTER TABLE `publicist` ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `admin`;

-- CreateTable
CREATE TABLE `favourites` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NULL,
    `article_id` INTEGER NULL,

    UNIQUE INDEX `favourites_user_id_article_id_key`(`user_id`, `article_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `user_id` ON `publicist`(`user_id`);

-- AddForeignKey
ALTER TABLE `publicist` ADD CONSTRAINT `publicist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `favourites` ADD CONSTRAINT `favourites_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `favourites` ADD CONSTRAINT `favourites_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `article`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;
