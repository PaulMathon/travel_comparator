import * as express from 'express';
import {IRoute} from './IRoute';
import {ITravelController} from '../controllers/ITravelController';
import { ApiType } from '../api/TravelApi';

export class TrainRoute implements IRoute {

  private router: express.Router;

  constructor(private trainController: ITravelController) {
    this.router = express.Router();
    this.initRoutes();
  } 

  public useRoutes(app: express.Application): express.Application {
    app.use(this.router);
    return app;
  }

  static getType(): ApiType {
    return ApiType.train;
  }

  private initRoutes() {
    this.router
      .get('/train', async (req: express.Request, res: express.Response) => {
          // TODO: check params
        const journeys = await this.trainController.getJourneys(
          req.query.cityFrom,
          req.query.cityTo,
          new Date(parseInt(req.query.dateFrom))
        );
        if (journeys.isError()) {
          return res.status(journeys.value.status || 500).end({
            error: journeys.value.type || 'UnknownError',
            message: journeys.value.reason || 'No message'
          });
        }
        return res.status(200).json(journeys.value);
      });
  }
}
