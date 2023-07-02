import { Request, Response } from 'express'
import { PrismaClient } from 'prisma/prisma-client'
const prisma = new PrismaClient()

class SeasonsController {
  public async ListSeasons(req: Request, res: Response) {
    const competitionId = parseInt(req.params.id)
    res.json(await prisma.season.findMany({ where: { competitionId } }))

  } 
}

export default new SeasonsController()