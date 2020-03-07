import * as express from 'express';

export interface IRoute {

  useRoutes(app: express.Application): express.Application;
  
}
