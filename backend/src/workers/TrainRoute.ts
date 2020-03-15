import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { IRoute } from './IRoute';
import { ITravelController } from '../controllers/ITravelController';
import { ApiType } from '../api/TravelApi';
import { HttpUtils } from '../utils/HttpUtils';
import { IServerConfig, IQueryConfig } from '../config';

export class TrainRoute implements IRoute {

  constructor(
    private trainController: ITravelController,
    private queryConfig: IQueryConfig 
  ) {} 

  useRoutes(router: express.Router): void {
    router
      .get('/train', async (req: Request, res: Response, next: NextFunction) => {
        try {
          const params = HttpUtils.checkQueryParams(req.query, this.queryConfig);
          const journeys = await this.trainController.getJourneys(
            params.cityFrom,
            params.cityTo,
            new Date(parseInt(req.query.dateFrom))
          );
          res.status(200).json(journeys.value);
        } catch (err) {
          res.status(err.status || 500).json({
            error: err.type || err.error || 'UnknownError',
            message: err.reason || err.message || 'No message'
          });
        }
        return next();
      });
  }

  static getType(): ApiType {
    return ApiType.train;
  }

}
