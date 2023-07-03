import axios from 'axios'
import { PrismaClient } from 'prisma/prisma-client'
const prisma = new PrismaClient()

/**
 * Service to connect with football data source
 * Documentation for the api used?
 * https://www.api-football.com/documentation-v3
 * To have access to the needed keys contact the admin
 */

class Sportradar {
  private languageCode = '/en'
  private dataFormat = '.json'
  
  private async get(subUrl: string) {
    const apiKey = `?api_key=${process.env.SPORTRADAR_SOCCER_KEY}`
    const url = process.env.SPORTRADAR_HOST + this.languageCode + subUrl + this.dataFormat + apiKey
    const {data} = await axios.get(url)    
    
    return data
  }

  public async teamsBySeason(seasonId: number) {
    const apiData = await prisma.apiData.findFirstOrThrow({
      where: {
        dataId: seasonId
      }
    })
    const subUrl = `/seasons/${apiData.idInApi}/competitors`
    const data = await this.get(subUrl)

    return data.season_competitors
  }

  public async seasonsByCompetition(competitionId: number) {
    const apiData = await prisma.apiData.findFirstOrThrow({
      where: {
        dataId: competitionId
      }
    })
    const subUrl = `/competitions/${apiData.idInApi}/seasons`
    const data = await this.get(subUrl)

    return data.seasons
  }

  public async seasonSchedule(seasonId: number) {
    const apiData = await prisma.apiData.findFirstOrThrow({
      where: {
        dataId: seasonId
      }
    })
    const subUrl = `/seasons/${apiData.idInApi}/schedules`
    const data = await this.get(subUrl)
    
    return data.schedules
  }

  public async getCompetitions() {
    const subUrl = `/competitions`
    const data = await this.get(subUrl)

    return data.competitions
  }
}
export default new Sportradar()
