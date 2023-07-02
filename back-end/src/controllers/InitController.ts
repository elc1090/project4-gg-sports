import { Request, Response } from 'express';
import Init from '../services/Init';

class InitController {
  public async init(req: Request, res: Response) {
    
    await Init.initSoccer()
    res.json()
  }

  public async test(req: Request, res: Response) {
    await Init.test()
    res.send()
  }
}

export default new InitController()