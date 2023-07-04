import express from 'express'
const router = express.Router()
import CompetitionsController from './controllers/CompetitionsController'
import SeasonsController from './controllers/SeasonsController'
import InitController from './controllers/InitController'
import TeamsController from './controllers/TeamsController'
import MatchesController from './controllers/MatchesController'


/**
 * add a new API to the system
 * @params
 * - name
 * - baseUrl
 * - healthCheck
 * - key (learn about cryptography)
 * - secret?
 */
// router.post('/apis', controller)

/**
 * add a new competition to the database from a selected api includding:
 * last and current seasons data
 * rounds data
 * matches data
 * teams data (checking if not already loaded from previous leagues)
 * stats and results of all past matches
 * @params
 * - competitionId: the id of the competition on local database
 * - apiId: the id of the third party API where the competition should be loaded from
 * @returns
 * 201: loaded, no data
 * 404: competition not found on the database or the api
 * 404: api not found on the database
 * 503: api unavailable (log & return error from api)
 */
//router.post('/load-new-competition', controller)


//router.post('/load-new-competition', ???)
//router.post('/load-new-competition', ???)
//router.post('/load-new-competition', ???)


router.get('/init', InitController.init)
router.get('/test', InitController.test)
router.get('/competitions', CompetitionsController.listCompetitions)
router.post('/competitions/:id', CompetitionsController.loadCompetition)

router.get('/seasons/:id', SeasonsController.ListSeasons)
router.get('/teams/:id', TeamsController.listTeams)

router.get('/matches/:id', MatchesController.listMatchesBySeason)

router.get('/get-tournament-loaded/:id', (req, res) => {
  res.send('return data from the tournament with id = ' + req.params.id)
})

export default router
