/*
  Warnings:

  - Added the required column `value` to the `stats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stats" ADD COLUMN     "value" INTEGER NOT NULL;
