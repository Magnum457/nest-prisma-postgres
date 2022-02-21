/*
  Warnings:

  - Added the required column `amount` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "amount" INTEGER NOT NULL,
ALTER COLUMN "imageUrl" DROP NOT NULL;
