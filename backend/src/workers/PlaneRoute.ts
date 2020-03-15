import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import { IRoute } from './IRoute';
import { ITravelController } from '../controllers/ITravelController';
import { ApiType } from '../api/TravelApi';
import { runInNewContext } from 'vm';

export class PlaneRoute implements IRoute {

  constructor(private planeController: ITravelController) {} 

  public useRoutes(router: express.Router): void {
    router
      .get('/plane', (req: Request, res: Response, next: NextFunction) => {
        try {
          // TODO: check params
          const journeys = this.planeController.getJourneys(req.query.cityFrom, req.query.cityTo, req.query.dateFrom)
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