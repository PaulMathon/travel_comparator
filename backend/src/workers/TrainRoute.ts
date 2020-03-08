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
      .get('/train', (req: express.Request, res: express.Response) => {
        try {
          // TODO: check params
          const journeys = this.trainController.getJourneys(req.query.cityFrom, req.query.cityTo, req.query.dateFrom)
          return res.sendStatus(200).end(journeys);
        } catch (err) {
          return res.sendStatus(err.status || 500).end({
            error: err.error || 'UnknownError',
            message: err.message || 'No message'
          });
        }
      });
  }
}
