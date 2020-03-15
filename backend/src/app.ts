import * as express from 'express';
import * as bodyParser from 'body-parser';
import { IRoutesFactory } from './workers/RoutesFactory';
import { port } from './constants';
import { Logger, ILogger } from './utils/Logger';

export class App {

  public app: express.Application;

  constructor(
    private routesFactory: IRoutesFactory,
    private logger: ILogger,
  ) {
    this.app = express();
    this.config();
  }

  public start() {
    this.app.listen(port, () => {
      console.log(`Backend server started at port ${port}`);
    })
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    const loggerMiddleware = Logger.createMiddleware(this.logger)
    this.app.use('/', this.routesFactory.router);
    this.app.use(loggerMiddleware.bind(loggerMiddleware));
    // TODO: Analytics middleware
  }
}
