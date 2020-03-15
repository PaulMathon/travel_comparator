import * as express from 'express';
import { TrainRoute } from './TrainRoute';
import { IRoute } from './IRoute';
import { TrainController } from '../controllers/TrainController';
import { ILocationService } from '../services/LocationService';
import { IApiFactory } from '../api/ApiFactory';
import { ApiType } from '../api/TravelApi';
import { PlaneRoute } from './PlaneRoute';
import { PlaneController } from '../controllers/PlaneController';
import { GoyavError } from '../utils/GoyavError';


export interface IRoutesFactory {

  routes: IRoute[];
  router: express.IRouter;

  useRoutes(app: express.Application): void;

}

export class RoutesFactory implements IRoutesFactory {

    private availableRoutes = [
      {
        Route: TrainRoute,
        Controller: TrainController
      },
      {
        Route: PlaneRoute,
        Controller: PlaneController
      }
    ];
    routes: IRoute[];
    router: express.IRouter;

    constructor(
      private locationService: ILocationService,
      private trainApiFactory: IApiFactory,
      private planeApiFactory: IApiFactory) {

      this.routes = this.createRoutes();
      this.router = express.Router();
      this.useRoutes();
    }

    useRoutes(): void {
        this.routes.forEach((route) => route.useRoutes(this.router))
    }

    private createRoutes(): IRoute[] {
      return this.availableRoutes.map(({Route, Controller}) => {
        const routeType = Route.getType();
        if (routeType === ApiType.train) {
          return new Route(new Controller(this.locationService, this.trainApiFactory))
        } else if (routeType === ApiType.plane) {
          return new Route(new Controller(this.locationService, this.planeApiFactory))
        }
        throw new GoyavError('InternalError', `Couldn't properly init ${Route.toString()}, expected to have type ${ApiType.plane} or ${ApiType.train} but got ${routeType}`)
      });
    }

}
