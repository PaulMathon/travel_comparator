import * as express from 'express';
import * as bodyParser from 'body-parser';
import { IRoutesFactory } from './workers/RoutesFactory';
import { port } from './constants';

export class App {

  public app: express.Application;

  constructor(private routes: IRoutesFactory) {
    this.app = express();
    this.config();
    this.routes.useRoutes(this.app);
  }

  public start() {
    this.app.listen(port, () => {
      console.log(`Backend server started at port ${port}`);
    })
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
