/*
  Warnings:

  - The values [MATCHE] on the enum `DataTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "StatPeriod" AS ENUM ('TOTAL', 'FIRST', 'SECOND', 'EXTRA_TOTAL', 'EXTRA_FIRST', 'EXTRA_SECOND', 'PENALTY');

-- AlterEnum
BEGIN;
CREATE TYPE "DataTypes_new" AS ENUM ('COMPETITION', 'TEAM', 'MATCH', 'SEASON', 'ROUND');
ALTER TABLE "data" ALTER COLUMN "type" TYPE "DataTypes_new" USING ("type"::text::"DataTypes_new");
ALTER TYPE "DataTypes" RENAME TO "DataTypes_old";
ALTER TYPE "DataTypes_new" RENAME TO "DataTypes";
DROP TYPE "DataTypes_old";
COMMIT;

-- CreateTable
CREATE TABLE "rounds" (
    "id" SERIAL NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "name" TEXT,
    "order" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),

    CONSTRAINT "rounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "dataId" INTEGER NOT NULL,
    "roundId" INTEGER NOT NULL,
    "homeTeamId" INTEGER NOT NULL,
    "awayTeamId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("dataId")
);

-- CreateTable
CREATE TABLE "stat_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "stat_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "statTypeId" INTEGER NOT NULL,
    "period" "StatPeriod" NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rounds" ADD CONSTRAINT "rounds_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "seasons"("dataId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "teams"("dataId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "teams"("dataId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("dataId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("dataId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_statTypeId_fkey" FOREIGN KEY ("statTypeId") REFERENCES "stat_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
