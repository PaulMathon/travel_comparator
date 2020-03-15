import * as dotenv from 'dotenv';

dotenv.config();

export interface ProcessEnv {
    [key: string]: string | undefined
}

let env = process.env["NODE_ENV"];

export const port = parseInt(process.env.PORT || '8080'); 
export const LOG_LEVEL = process.env.LOG_LEVEL || 'INFO';

export const httpStatus: { [key: string]: number } = {
  'Ok': 200,
  'Created': 201,
  'Accepted': 202,
  'NoContent': 204,
  'MultiStatus': 207,
  'BadRequest': 400,
  'Unauthorized': 401,
  'Forbidden':403,
  'NotFound': 404,
  'NotAcceptable': 406,
  'TooManyRequest': 429,
  'InternalError': 500,
  'UnknownError': 500,
  'NotImplemented': 501,
  'BadGateway': 502,
  'ServiceUnavailable': 503
}

export const URL_SNCF = process.env.URL_SNCF || 'https://api.sncf.com/v1';
export const TOKEN_SNCF = process.env.TOKEN_SNCF || '';

export const URL_KIWI = process.env.URL_KIWI || 'https://api.skypicker.com';
export const PARTNER_ID_KIWI = process.env.PARTNER_ID_KIWI || '';
export const GEO_DATA_API_VERSION = process.env.GEO_DATA_API_VERSION || '3';
