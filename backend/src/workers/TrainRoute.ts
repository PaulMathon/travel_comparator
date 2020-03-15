import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import {IRoute} from './IRoute';
import {ITravelController} from '../controllers/ITravelController';
import { ApiType } from '../api/TravelApi';

export class TrainRoute implements IRoute {

  constructor(private trainController: ITravelController) {} 

  useRoutes(router: express.Router): void {
    router
      .get('/train', async (req: Request, res: Response, next: NextFunction) => {
          // TODO: check params
        const journeys = await this.trainController.getJourneys(
          req.query.cityFrom,
          req.query.cityTo,
          new Date(parseInt(req.query.dateFrom))
        );
        if (journeys.isError()) {
          res.status(journeys.value.status || 500).end({
            error: journeys.value.type || 'UnknownError',
            message: journeys.value.reason || 'No message'
          });
        }
        res.status(200).json(journeys.value);
        return next();
      });
  }

  static getType(): ApiType {
    return ApiType.train;
  }

}
