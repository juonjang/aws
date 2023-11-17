/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[loginname]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `loginname` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `email`,
    ADD COLUMN `loginname` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_loginname_key` ON `users`(`loginname`);
