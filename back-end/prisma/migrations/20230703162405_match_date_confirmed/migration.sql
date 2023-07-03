/*
  Warnings:

  - Added the required column `dateConfirmed` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "dateConfirmed" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "gender" "Gender";
