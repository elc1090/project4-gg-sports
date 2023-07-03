import { Competition, Gender, PrismaClient } from 'prisma/prisma-client'
import { CompetitionData, MatchData, SeasonData, TeamData } from '../types/LoadDataTypes'
import slugify from 'slugify'
import competitions from '../data/competitions'
import Sportradar from './Sportradar'
const prisma = new PrismaClient()

class LoadData {
	private async loadMatch(matchData: MatchData) {
		// await prisma.$transaction(async trx => {
		// 	const matchIsLoaded = await prisma.apiData.findFirst({
		// 		where: {
		// 			apiId: matchData.apiId,
		// 			idInApi: matchData.id
		// 		}
		// 	})
		// 	if (!matchIsLoaded) {
		// 		const data = await trx.data.create({
		// 			data: {
		// 				type: "MATCH"
		// 			}
		// 		})
		// 		await trx.apiData.create({
		// 			data: {
		// 				apiId: matchData.apiId,
		// 				dataId: data.id,
		// 				idInApi: matchData.id
		// 			}
		// 		})
		// 		const roundIsLoaded = await trx.round.findFirst({})
		// 		await trx.round
		// 		const slug = slugify(matchData.name, { lower: true })
		// 		await trx.match.create({
		// 			data: {
		// 				dataId: data.id,
		// 				countryId: matchData.countryId,
		// 				sportId: matchData.sportId,
		// 				name: matchData.name,
		// 				slug,
		// 				shortName: matchData.shortName,
		// 				code: matchData.code,
		// 				founded: matchData.founded,
		// 				logoUrl: matchData.logoUrl,
		// 			}
		// 		})
		// 	}
		// })
	}

	public async loadMatches(seasonId: number) {
		const api = await prisma.api.findFirstOrThrow({ where: { slug: "sportradar" }})
		const schedules = await Sportradar.teamsBySeason(seasonId)
		for (const match of schedules) {
			const roundIsLoaded = await prisma.round.findFirst({})
		}

	}

	private async loadTeam(teamData: TeamData) {
		await prisma.$transaction(async trx => {
			const teamIsLoaded = await prisma.apiData.findFirst({
				where: {
					apiId: teamData.apiId,
					idInApi: teamData.id
				}
			})
			if (!teamIsLoaded) {
				const data = await trx.data.create({
					data: {
						type: "TEAM"
					}
				})
				await trx.apiData.create({
					data: {
						apiId: teamData.apiId,
						dataId: data.id,
						idInApi: teamData.id
					}
				})
				const slug = slugify(teamData.name, { lower: true })
				await trx.team.create({
					data: {
						dataId: data.id,
						countryId: teamData.countryId,
						sportId: teamData.sportId,
						name: teamData.name,
						slug,
						shortName: teamData.shortName,
						code: teamData.code,
						founded: teamData.founded,
						logoUrl: teamData.logoUrl,
					}
				})
				await trx.teamSeason.create({
					data: {
						teamId: data.id,
						seasonId: teamData.seasonId
					}
				})
			} else {
				const seasonIsLoaded = await prisma.teamSeason.findFirst({
					where: {
						teamId: teamIsLoaded.dataId,
						seasonId: teamData.seasonId,
					}
				})
				if (!seasonIsLoaded) {
					await trx.teamSeason.create({
						data: {
							teamId: teamIsLoaded.dataId,
							seasonId: teamData.seasonId,
						}
					})
				}
			}
		})
	}

	public async loadTeams(seasonId: number) {
		const api = await prisma.api.findFirstOrThrow({ where: { slug: "sportradar" }})
		const season = await prisma.season.findUniqueOrThrow({ where: { dataId: seasonId } })
		const competition = await prisma.competition.findUniqueOrThrow({ where: { dataId: season.competitionId } })
		const teams = await Sportradar.teamsBySeason(seasonId)
		for (const team of teams) {
			const slug = slugify(team.name, { lower: true })
			const newData: TeamData = {
				id: team.id,
				apiId: api.id,
				seasonId,
				countryId: competition.countryId,
				sportId: competition.sportId,
				name: team.name,
				slug,
				shortName: team.short_name,
				code: team.abbreviation,
			}
			await this.loadTeam(newData)
		}
	}

  private async loadSeason(seasonData: SeasonData) {
    await prisma.$transaction(async trx => {
			const isLoaded = await prisma.apiData.findFirst({
				where: {
					apiId: seasonData.apiId,
					idInApi: seasonData.id
				}
			})
			if (!isLoaded) {
				const data = await trx.data.create({
					data: {
						type: "SEASON"
					}
				})
				await trx.apiData.create({
					data: {
						apiId: seasonData.apiId,
						dataId: data.id,
						idInApi: seasonData.id
					}
				})
				await trx.season.create({
					data: {
						dataId: data.id,
						competitionId: seasonData.competitionId,
						year: seasonData.year,
						startDate: new Date(seasonData.startDate),
						endDate: new Date(seasonData.endDate),
					}
				})
			}
		})
  }

	public async loadSeasons(competition: Competition) {
		const api = await prisma.api.findFirstOrThrow({ where: { slug: "sportradar" }})
		
    // load seasons
    const seasonsData = await Sportradar.seasonsByCompetition(competition.dataId)
    for (const seasonData of seasonsData) {
			const year = parseInt(seasonData.year)
      const newData: SeasonData = {
        id: seasonData.id,
        competitionId: competition.dataId,
        apiId: api.id,
        year,
        startDate: seasonData.start_date,
        endDate: seasonData.end_date
      }
      await this.loadSeason(newData)
    }
	}

  private async loadCompetition(competitionData: CompetitionData, sportId: number) {
		await prisma.$transaction(async trx => {
			const isLoaded = await prisma.apiData.findFirst({
				where: {
					apiId: competitionData.apiId,
					idInApi: competitionData.id
				}
			})
			if (!isLoaded) {
				const data = await trx.data.create({
					data: {
						type: "COMPETITION"
					}
				})
				await trx.apiData.create({
					data: {
						apiId: competitionData.apiId,
						dataId: data.id,
						idInApi: competitionData.id
					}
				})
				await trx.competition.create({
					data: {
						dataId: data.id,
						sportId,
						countryId: competitionData.countryId,
						name: competitionData.name,
						slug: competitionData.slug,
						logoUrl: competitionData.logoUrl || "",
						gender: competitionData.gender?.toUpperCase() as Gender || "MEN",
						status: competitionData.status
					}
				})
			}
		})
	}

	public async loadCompetitions(sportId: number, apiId: number): Promise<void> {
		const loadedCompetitions = await prisma.competition.findMany()
		for (const competition of competitions) {
			const slug = slugify(`${competition.name}-${competition.category.name}`, { lower: true })
			if (!loadedCompetitions.some(comp=>comp.slug === slug)) {
				const country = await prisma.country.findFirstOrThrow({
					where: {
						name: competition.category.name
					}
				})

				const competitionData: CompetitionData = {
					id: competition.id,
					apiId,
					countryId: country.id,
					name: competition.name,
					slug,
					gender: competition.gender as Gender,
					status: "UNAVAILABLE",
				}
				await this.loadCompetition(competitionData, sportId)
			}
		}
  }
}

export default new LoadData()