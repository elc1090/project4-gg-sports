import { Request, Response } from 'express';
import { PrismaClient } from 'prisma/prisma-client'
const prisma = new PrismaClient()
class TeamsController {
  public async listTeams(req: Request, res: Response) {
    const seasonId = parseInt(req.params.id)
    res.json(await prisma.team.findMany({
      where: {
        seasons: {
          some: {
            seasonId
          }
        }
      },
      include: {
        seasons: {
          where: {
            seasonId
          }
        }
      }
    }))
  }
}

export default new TeamsController()