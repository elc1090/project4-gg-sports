-- DropForeignKey
ALTER TABLE "api_data" DROP CONSTRAINT "api_data_apiId_fkey";

-- DropForeignKey
ALTER TABLE "api_data" DROP CONSTRAINT "api_data_dataId_fkey";

-- DropForeignKey
ALTER TABLE "apis" DROP CONSTRAINT "apis_sportId_fkey";

-- DropForeignKey
ALTER TABLE "competitions" DROP CONSTRAINT "competitions_countryId_fkey";

-- DropForeignKey
ALTER TABLE "competitions" DROP CONSTRAINT "competitions_dataId_fkey";

-- DropForeignKey
ALTER TABLE "competitions" DROP CONSTRAINT "competitions_sportId_fkey";

-- DropForeignKey
ALTER TABLE "seasons" DROP CONSTRAINT "seasons_competitionId_fkey";

-- DropForeignKey
ALTER TABLE "seasons" DROP CONSTRAINT "seasons_dataId_fkey";

-- DropTable
DROP TABLE "api_data";

-- DropTable
DROP TABLE "apis";

-- DropTable
DROP TABLE "competitions";

-- DropTable
DROP TABLE "countries";

-- DropTable
DROP TABLE "data";

-- DropTable
DROP TABLE "seasons";

-- DropTable
DROP TABLE "sports";

-- DropEnum
DROP TYPE "CompetitionStatus";

-- DropEnum
DROP TYPE "DataTypes";

-- DropEnum
DROP TYPE "Gender";

