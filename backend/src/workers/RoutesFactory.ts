import * as express from 'express';
import { TrainRoute } from './TrainRoute';
import { IRoute } from './IRoute';
import { TrainController } from '../controllers/TrainController';
import { ILocationService } from '../services/LocationService';

export interface IRoutesFactory {

    routes(app: express.Application): void;

}

export class RoutesFactory implements IRoutesFactory {

    private availableRoutes = [
      {
        Route: TrainRoute,
        Controller: TrainController
      }
    ];
    private createdRoutes: IRoute[];

    constructor(private locationService: ILocationService) {
        this.createdRoutes = this.availableRoutes.map(({Route, Controller}) => 
          new Route(new Controller(this.locationService))
        );
    }

    routes(app: express.Application): void {
        this.createdRoutes.forEach((route) => route.useRoutes(app))
    }

}
