import {DateUtils} from './DateUtils';
import {httpStatus} from '../constants';

export interface IGoyavError {
    status: number;
    type: string;
    reason: string;
}

export class GoyavError implements IGoyavError {

  public status: number;
  public type: string;
  public reason: string;

  constructor(error: string, message: string) {
    this.status = this.getStatus(error);
    this.type = error;
    this.reason = this.parseMessage(error, message);
  }

  private parseMessage(error: string, message: string): string {
    return `${DateUtils.parseDate(new Date())} [${error}] - ${message}`;
  }

  private getStatus(error: string): number {
    return httpStatus[error] || 500;
  }
}
