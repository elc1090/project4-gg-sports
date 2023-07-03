import { Country, Gender } from '@prisma/client'
import { PrismaClient } from 'prisma/prisma-client'
const prisma = new PrismaClient()
import competitions from '../data/competitions'
import slugify from 'slugify'
import { env } from 'process'
import LoadData from './LoadData'
import schedule from '../data/schedule'



class Init {
	public async test() {
		console.log('test route');
		// const status = schedule.schedules.map(s => s.sport_event_status.status)
		// const status2 = new Set(status)
		// console.log(status2);
		
		const scores = schedule.schedules.filter(s => !s.sport_event.sport_event_context) 
		// const score = scores.filter(s => s.sport_event_status.period_scores && s.sport_event_status.period_scores.length > 2)
		console.log(scores);
		
	}
	
	public async initSoccer() {
		let sport = await prisma.sport.findFirst({ where: { slug: 'football' } })
		if (!sport)
			sport = await prisma.sport.create({
				data: {
					name: 'Football',
					slug: 'football',
					logoUrl: ''
				}
			})
		const host = env.SPORTRADAR_HOST as string
		let api = await prisma.api.findFirst({ where: { slug: 'sportradar' } })
		if (!api)
			api = await prisma.api.create({
				data: {
					name: 'Sportradar',
					slug: 'sportradar',
					sportId: sport.id,
					host,
					healthCheck: host +  '/en/competitions.json',
					key: env.SPORTRADAR_SOCCER_KEY as string,
				}
			})
		
		await this.loadCountries()
		await this.loadCompetitions(sport.id, api.id)
		await this.loadStatTypes()
	}

	private async loadStatTypes() {
		const goal = await prisma.statType.findFirst({ where: { slug: 'goal' } })
		if (!goal)
			await prisma.statType.create({
				data: {
					name: 'Goal',
					slug: 'goal',
				}
			})
	}

  private async loadCountries() {
		const countries = competitions.map((comp) => {
			return {
				name: comp.category.name,
				slug: slugify(comp.category.name, { lower: true }),
				code: comp.category.country_code,
				flagUrl: null
			}
		})
		type ICountry = {
			name: string,
			slug: string,
			code?: string,
			flagUrl: string | null,
		}
		const noDuplicates: ICountry[] = []
		const loadedCountries = await prisma.country.findMany()
		countries.forEach(c => {
			if (!noDuplicates.some((c2: ICountry) => 
				c2.slug === c.slug
			) && !loadedCountries.some((c2: Country) => 
				c2.slug === c.slug
			)) {
				noDuplicates.push(c)
			}
		})
		
		await prisma.country.createMany({
			data: noDuplicates
		})
  }

  private async loadCompetitions(sportId: number, apiId: number): Promise<void> {
		await LoadData.loadCompetitions(apiId, sportId)
  }
}

export default new Init()