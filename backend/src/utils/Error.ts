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

/**
 * Error Handlig tools
 * E : Error | R : Result
 * https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86
 */
export type Either<E, R> = Left<E, R> | Right<E, R>;

export class Left<E, R> {
  readonly value: E;

  constructor(value: E) {
    this.value = value;
  }

  isLeft(): this is Left<E, R> {
    return true;
  }

  isRight(): this is Right<E, R> {
    return false;
  }
}

export class Right<E, R> {
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  isLeft(): this is Left<E, R> {
    return false;
  }

  isRight(): this is Right<E, R> {
    return true;
  }
}

export const left = <E, R>(e: E): Either<E, R> => {
  return new Left(e);
};

export const right = <E, R>(r: R): Either<E, R> => {
  return new Right<E, R>(r);
};
