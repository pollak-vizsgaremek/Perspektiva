/*
  Warnings:

  - Added the required column `image_base64` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `image_base64` VARCHAR(1000) NOT NULL,
    ADD COLUMN `tag` VARCHAR(191) NOT NULL;
