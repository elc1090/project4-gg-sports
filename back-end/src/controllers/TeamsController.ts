import { Request, Response } from 'express';
import Sportradar from '../services/Sportradar';

class TeamsController {
  public async listTeams(req: Request, res: Response) {
    const seasonId = parseInt(req.params.id)
    res.json(await Sportradar.teamsBySeason(seasonId))
  }
}

export default new TeamsController()