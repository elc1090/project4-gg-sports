export type TeamData = {
  id: string
  apiId: number
  countryId: number
  sportId: number
  name: string
  slug: string
  shortName?: string
  code: string
  founded?: number
  logoUrl?: string
}

export type CompetitionData = {
  id: string
  apiId: number
  countryId: number
  name: string
  slug: string
  logoUrl?: string
	gender?: "MEN" | "WOMEN"
	status: "AVAILABLE" | "UNAVAILABLE" | "OUT_OF_SEASON" | "COMING_SOON"
}

export type SeasonData = {
  id: string
  competitionId: number
  apiId: number
  year: number
  startDate: string
  endDate: string
}