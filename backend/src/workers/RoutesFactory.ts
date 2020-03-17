import * as express from 'express';
import { IRoute } from './IRoute';
import { JourneyController } from '../controllers/JourneyController';
import { ILocationService } from '../services/LocationService';
import { IApiFactory } from '../api/ApiFactory';
import { JourneyRoute } from './JourneyRoute';
import { IServerConfig } from '../config';

export interface IRoutesFactory {

  routes: IRoute[];
  router: express.IRouter;

  useRoutes(app: express.Application): void;

}

export class RoutesFactory implements IRoutesFactory {

    private availableRoutes = [
      {
        Route: JourneyRoute,
        Controller: JourneyController
      }
    ];
    routes: IRoute[];
    router: express.IRouter;

    constructor(
      private locationService: ILocationService,
      private apiFactory: IApiFactory,
      private serverConfig: IServerConfig
    ) {

      this.routes = this.createRoutes();
      this.router = express.Router();
      this.useRoutes();
    }

    useRoutes(): void {
        this.routes.forEach((route) => route.useRoutes(this.router))
    }

    private createRoutes(): IRoute[] {
      return this.availableRoutes.map(({Route, Controller}) => {
        return new Route(
          new Controller(this.locationService, this.apiFactory),
          this.serverConfig.query
        );
      });
    }

}
