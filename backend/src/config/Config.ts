import { LOG_LEVEL, NODE_ENV } from '../constants';
import { LogLevel } from '../utils/Logger';
import { GoyavError } from '../utils/GoyavError';

export class Config {

  logLevel: LogLevel;

  constructor() {
    this.logLevel = this.checkLogLevel(LOG_LEVEL);

  }

  checkLogLevel(levelAsStr: string): LogLevel {
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