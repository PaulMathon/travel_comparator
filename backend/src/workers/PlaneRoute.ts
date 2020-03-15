import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import { IRoute } from './IRoute';
import { ITravelController } from '../controllers/ITravelController';
import { ApiType } from '../api/TravelApi';
import { IQueryConfig } from '../config';
import { HttpUtils } from '../utils/HttpUtils';

export class PlaneRoute implements IRoute {

  constructor(
    private planeController: ITravelController,
    private queryConfig: IQueryConfig
  ) {} 

  public useRoutes(router: express.Router): void {
    router
      .get('/plane', (req: Request, res: Response, next: NextFunction) => {
        try {
          const params = HttpUtils.checkQueryParams(req.query, this.queryConfig);
          const journeys = this.planeController.getJourneys(
            params.cityFrom,
            params.cityTo,
            new Date(parseInt(params.dateFrom))
          );
          res.sendStatus(200).end(journeys);
        } catch (err) {
          res.sendStatus(err.status || 500).end({
            error: err.error || 'UnknownError',
            message: err.message || 'No message'
          });
        }
        return next();
      });
  }

  static getType(): ApiType {
    return ApiType.plane;
  }

}