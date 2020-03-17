import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { IRoute } from './IRoute';
import { IJourneyController } from '../controllers/IJourneyController';
import { HttpUtils } from '../utils/HttpUtils';
import { IQueryConfig } from '../config';

export class JourneyRoute implements IRoute {

  constructor(
    private journeyController: IJourneyController,
    private queryConfig: IQueryConfig 
  ) {} 

  useRoutes(router: express.Router): void {
    router
      .get('/journey', async (req: Request, res: Response, next: NextFunction) => {
        try {
          const params = HttpUtils.checkQueryParams(req.query, this.queryConfig);
          const journeys = await this.journeyController.getJourneys(
            params.cityFrom,
            params.cityTo,
            new Date(parseInt(req.query.dateFrom))
          );
          res.status(200).json(journeys);
        } catch (err) {
          res.status(err.status || 500).json({
            error: err.type || err.error || 'UnknownError',
            message: err.reason || err.message || 'No message'
          });
        }
        return next();
      });
  }

  static getType(): string {
    return 'journey';
  }

}
