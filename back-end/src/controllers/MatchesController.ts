// import { Request, Response } from 'express';
// import Sportradar from '../services/Sportradar';
// import { DateTime } from 'luxon'
// import { PrismaClient } from 'prisma/prisma-client'
// const prisma = new PrismaClient()
class MatchesController {
  // public async index(req: Request, res: Response) {

  //   const today = DateTime.now().startOf('day')
  //   const last10Days = DateTime.now().startOf('day').plus({ days: -10})
  //   const lastLoadedMatches = await prisma.match.findMany()
  //   const loadedIds = lastLoadedMatches.map(match => match.id)
  //   const matches = await Sportradar.seasonSchedule(101053)
  //   const lastMatches = matches.filter((match: any) => {
  //     const date = DateTime.fromISO(match.sport_event.start_time)
  //     return date < today && date >= last10Days
  //   })
  //   for (const match of lastMatches) {
  //     const home_team = (match.sport_event.competitors.find((c: any) => c.qualifier === 'home')).abbreviation as string
  //     const away_team = (match.sport_event.competitors.find((c: any) => c.qualifier === 'away')).abbreviation as string
  //     const date = DateTime.fromISO(match.sport_event.start_time).toJSDate()
  //     const idString = match.sport_event.id
  //     const id = parseInt(match.sport_event.id.split(':')[2])
  //     if (loadedIds.some(loadedId => loadedId === id)) continue
  //     await prisma.match.create({
  //       data: {
  //         id,
  //         home_team,
  //         away_team,
  //         date,
  //       }
  //     })
  //   }
  //   const last10Matches = await prisma.match.findMany({
  //     orderBy: {
  //       date: 'desc'
  //     },
  //     take: 10
  //   })
  //   return res.json(last10Matches)
  // }
}

export default new MatchesController()