-- CreateTable
CREATE TABLE "teams" (
    "dataId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "sportId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortName" TEXT,
    "code" TEXT NOT NULL,
    "founded" INTEGER,
    "logoUrl" TEXT,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("dataId")
);

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
