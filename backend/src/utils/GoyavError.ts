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
 * E : Error | V : Valid
 * https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86
 */
export type Either<E, V> = Error<E, V> | Right<E, V>;

export class Error<E, V> {
  readonly value: E;

  constructor(value: E) {
    this.value = value;
  }

  isError(): this is Error<E, V> {
    return true;
  }

  isValid(): this is Right<E, V> {
    return false;
  }
}

export class Right<E, V> {
  readonly value: V;

  constructor(value: V) {
    this.value = value;
  }

  isError(): this is Error<E, V> {
    return false;
  }

  isValid(): this is Right<E, V> {
    return true;
  }
}

export const error = <E, V>(e: E): Either<E, V> => {
  return new Error(e);
};

export const valid = <E, V>(v: V): Either<E, V> => {
  return new Right<E, V>(v);
};
