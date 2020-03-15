import * as express from 'express';

export interface IRoute {

  useRoutes(router: express.Router): void;

}
