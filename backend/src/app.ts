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
    return this.app.listen(port, () => {
      this.logger.info(`Backend server started at port ${port}`);
    })
  }

  public stop() {
    return process.exit(0);
  }

  private config(): void {
    // JSON body parsing
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // Routing
    this.app.use('/', this.routesFactory.router);
    // Logging middleware
    const loggerMiddleware = Logger.createMiddleware(this.logger);
    this.app.use(loggerMiddleware.bind(loggerMiddleware));
    // TODO: Analytics middleware
  }
}
