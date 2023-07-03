import { Request, Response } from 'express'
import LoadData from '../services/LoadData'
import { PrismaClient } from 'prisma/prisma-client'
const prisma = new PrismaClient()

class CompetitionsController {
  public async listCompetitions(req: Request, res: Response) {
    res.json(await prisma.competition.findMany())
  }

  public async loadCompetition(req: Request, res: Response) {
    const competition = await prisma.competition.findUniqueOrThrow({
      where: {
        dataId: parseInt(req.params.id)
      }
    })
    if (competition.status !== 'UNAVAILABLE') {
      res.status(500)
      res.json({ error: 'Competição já foi carregada' })
      return
    }
    // await LoadData.loadSeasons(competition) //ok
    const seasons = await prisma.season.findMany({ where: { competitionId: competition.dataId } })
    for (const season of seasons) {
      // await LoadData.loadTeams(season.dataId) // ok
      // await LoadData.loadMatches(season.dataId) // WIP
    }

    res.status(201)
    res.json({ message: 'competition loaded'})
  }
}

export default new CompetitionsController()