import { GoyavError } from './GoyavError';
import { IQueryConfig } from '../config'

interface IQueryParams {
  cityFrom: string,
  cityTo: string,
  dateFrom: string,
  dateTo?: string
}

export class HttpUtils {

  static checkQueryParams(params: Object, config: IQueryConfig): IQueryParams {
    const keys = Object.keys(params);
    for (let param of config.requiredParams) {
      if (!keys.includes(param)) {
        throw new GoyavError(
          'BadRequest',
          `Query param ${param} is missing`
        );
      }
    }
    if (keys.length >= config.maxParams) {
      throw new GoyavError(
        'BadRequest',
        `Wrong query params: ${JSON.stringify(keys.filter(key => !config.requiredParams.includes(key)))}`
      );
    }
    return <IQueryParams>params;
  }
}