/*
  Warnings:

  - You are about to drop the column `password` on the `subham` table. All the data in the column will be lost.
  - Added the required column `pass` to the `subham` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subham" DROP COLUMN "password",
ADD COLUMN     "pass" TEXT NOT NULL;
