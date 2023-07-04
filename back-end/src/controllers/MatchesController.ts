import { PrismaClient } from 'prisma/prisma-client'
const prisma = new PrismaClient()

import { Request, Response } from 'express';

class MatchesController {
  async listMatchesBySeason(req: Request, res: Response) {
    const seasonId = parseInt(req.params.id)
    res.json(await prisma.match.findMany({
      where: {
        round: {
          seasonId
        }
      },
      include: {
        round: true,
        awayTeam: true,
        homeTeam: true,
      }
    }))
  }
}

export default new MatchesController()