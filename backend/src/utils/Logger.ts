import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'; 
import * as express from 'express';
import { GoyavError } from './GoyavError';

export enum LogLevel {
  INFO,
  WARN,
  DEBUG,
  ERROR
}

export interface ILogger {

  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void
  error(message: any): void

}

export class Logger implements ILogger {
    
  private logLevel: number;
  private logLevels = {
    INFO: 0,
    WARN: 1,
    DEBUG: 2,
    ERROR: 3
  }

  constructor(logLevel: LogLevel) {
    this.logLevel = this.parseIntLogLevel(logLevel);
  }

  static createMiddleware(logger: ILogger): Function {
    return (err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err) logger.error(err.stack || 'No stack available');
      logger.info(Logger.parseMsg(req, res));
      next();
    }
  }

  public info(message: string) {
    if (this.logLevel >= this.logLevels.INFO) {
      console.info(message);
    }
  }

  public warn(message: string) {
    if (this.logLevel >= this.logLevels.WARN) {
      console.warn(message);
    }
  }

  public debug(message: string) {
    if (this.logLevel >= this.logLevels.DEBUG) {
      console.debug(message);
    }
  }

  public error(message: any) {
    if (this.logLevel >= this.logLevels.ERROR) {
      console.error(message);
    }
  }

  private parseIntLogLevel(level: LogLevel): number {
    let logLevelAsNumber;
    switch (level) {
      case LogLevel.INFO:
        logLevelAsNumber = 0;
        break;
      case LogLevel.WARN:
        logLevelAsNumber = 1;
        break;
      case LogLevel.DEBUG:
        logLevelAsNumber = 2;
        break;
      case LogLevel.ERROR:
        logLevelAsNumber = 3;
        break;
      default:
        throw new GoyavError('InternalError', `Unhandled LOG LEVEL value: ${level}`);
    }
    return logLevelAsNumber;
  }

  private static parseMsg(req: Request, res: Response) {
    const date = new Date();
    return `${date.toISOString()} [${req.originalUrl}] - ${req.method} ${res.statusCode}`;
  }
}

