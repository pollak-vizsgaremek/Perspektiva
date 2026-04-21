/*
  Warnings:

  - You are about to drop the column `active` on the `mediums` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `mediums` table. All the data in the column will be lost.
  - You are about to drop the `users_interests` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rss_url` to the `mediums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `mediums` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `user_id` ON `mediums`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `created_At` INTEGER NOT NULL DEFAULT (unix_timestamp());

-- AlterTable
ALTER TABLE `mediums` DROP COLUMN `active`,
    DROP COLUMN `user_id`,
    ADD COLUMN `rss_url` VARCHAR(1000) NOT NULL,
    ADD COLUMN `url` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `publicist` ADD COLUMN `medium_id` INTEGER NULL;

-- DropTable
DROP TABLE `users_interests`;

-- CreateIndex
CREATE INDEX `medium_id` ON `publicist`(`medium_id`);

-- AddForeignKey
ALTER TABLE `articles_interests` ADD CONSTRAINT `articles_interests_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `articles_interests` ADD CONSTRAINT `articles_interests_interestId_fkey` FOREIGN KEY (`interestId`) REFERENCES `interest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `Article_publicistId_fkey` FOREIGN KEY (`publicistId`) REFERENCES `publicist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `publicist` ADD CONSTRAINT `publicist_ibfk_2` FOREIGN KEY (`medium_id`) REFERENCES `mediums`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `favourites` ADD CONSTRAINT `favourites_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `article`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `favourites` ADD CONSTRAINT `favourites_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;
