import { LOG_LEVEL, NODE_ENV, port } from '../constants';
import { LogLevel } from '../utils/Logger';
import { GoyavError } from '../utils/GoyavError';

export interface IQueryConfig {
  maxParams: number,
  requiredParams: string[]
}

export interface IServerConfig {
  port: number,
  logLevel: LogLevel,
  query: IQueryConfig
}

export class Config {

  private serverConfig: IServerConfig;

  constructor() {
    this.serverConfig = this.initConfig();
  }

  getServerConfig(): IServerConfig {
    return this.serverConfig;
  }

  private initConfig() {
    return {
      port,
      logLevel: this.checkLogLevel(LOG_LEVEL),
      query:  {
        maxParams: 4,
        requiredParams: ['cityFrom', 'cityTo', 'dateFrom']
      }
    };
  }

  private checkLogLevel(levelAsStr: string): LogLevel {
    let level: LogLevel;
    switch (levelAsStr.toUpperCase()) {
      case 'INFO':
        level = LogLevel.INFO;
        break;
      case 'WARN':
        level = LogLevel.WARN;
        break;
      case 'DEBUG':
        level = LogLevel.DEBUG;
        break;
      case 'ERROR':
        level = LogLevel.ERROR;
        break;
      default:
        throw new GoyavError('InternalError', `Unhandled LOG LEVEL value: ${levelAsStr}`);
    }
    return level;
  } 

}