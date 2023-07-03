/*
  Warnings:

  - You are about to drop the `TeamSeason` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeamSeason" DROP CONSTRAINT "TeamSeason_seasonId_fkey";

-- DropForeignKey
ALTER TABLE "TeamSeason" DROP CONSTRAINT "TeamSeason_teamId_fkey";

-- DropTable
DROP TABLE "TeamSeason";

-- CreateTable
CREATE TABLE "team_seasons" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,

    CONSTRAINT "team_seasons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "team_seasons" ADD CONSTRAINT "team_seasons_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("dataId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_seasons" ADD CONSTRAINT "team_seasons_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "seasons"("dataId") ON DELETE RESTRICT ON UPDATE CASCADE;
